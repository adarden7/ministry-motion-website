import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';

// --- HubSpot upsert + submission-note helpers -------------------------------
// FIX (event-critical, 2026-07-28): a duplicate/returning contact is a
// SUCCESSFUL capture, not a failure. The previous code treated HubSpot's
// 409 "Contact already exists" response as a hard error and 500'd the
// whole request even though the contact WAS in the CRM. Now: on conflict we
// (a) extract the existing contact's numeric ID from HubSpot's conflict
// message and PATCH it with this submission's latest field values (newest
// info wins — an upsert), and (b) log a dedicated Note engagement on the
// contact so a repeat submission is VISIBLE on its timeline (with a
// timestamp) instead of being silently swallowed as a no-op.
interface HubSpotUpsertResult {
  ok: boolean;
  contactId?: string;
  isExisting?: boolean;
  error?: string;
}

function parseHubSpotError(text: string): { message?: string; category?: string } {
  try {
    const parsed = JSON.parse(text) as { message?: unknown; category?: unknown };
    return {
      message: typeof parsed.message === 'string' ? parsed.message : undefined,
      category: typeof parsed.category === 'string' ? parsed.category : undefined,
    };
  } catch {
    return {};
  }
}

async function hubspotUpsertContact(
  token: string,
  properties: Record<string, string>
): Promise<HubSpotUpsertResult> {
  try {
    const createRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ properties }),
    });

    if (createRes.ok) {
      const data = (await createRes.json()) as { id?: string };
      return { ok: true, contactId: data.id, isExisting: false };
    }

    const errText = await createRes.text();
    const parsedErr = parseHubSpotError(errText);
    const isConflict =
      createRes.status === 409 ||
      parsedErr.category === 'CONFLICT' ||
      /already exists/i.test(parsedErr.message ?? errText);

    if (!isConflict) {
      return { ok: false, error: errText };
    }

    // Existing contact — pull its ID out of HubSpot's conflict message
    // ("Contact already exists. Existing ID: 12345") so we can update it.
    const idMatch = /existing id:?\s*#?\s*(\d+)/i.exec(parsedErr.message ?? errText);
    const existingId = idMatch?.[1];

    if (existingId) {
      try {
        const patchRes = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${existingId}`, {
          method: 'PATCH',
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ properties }),
        });
        if (!patchRes.ok) {
          console.error(
            '[HubSpot Sync] Existing-contact update failed (non-fatal — contact already captured):',
            await patchRes.text()
          );
        }
      } catch (patchErr) {
        console.error(
          '[HubSpot Sync] Existing-contact update threw (non-fatal):',
          patchErr instanceof Error ? patchErr.message : String(patchErr)
        );
      }
    } else {
      console.error('[HubSpot Sync] Conflict reported but no existing ID could be parsed from:', errText);
    }

    return { ok: true, contactId: existingId, isExisting: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

async function hubspotLogSubmissionNote(token: string, contactId: string, noteBody: string): Promise<void> {
  try {
    const noteRes = await fetch('https://api.hubapi.com/crm/v3/objects/notes', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ properties: { hs_timestamp: `${Date.now()}`, hs_note_body: noteBody } }),
    });
    if (!noteRes.ok) {
      console.error('[HubSpot Sync] Failed to create submission note (non-fatal):', await noteRes.text());
      return;
    }
    const noteData = (await noteRes.json()) as { id?: string };
    if (!noteData.id) return;

    const assocRes = await fetch(
      `https://api.hubapi.com/crm/v4/objects/notes/${noteData.id}/associations/default/contacts/${contactId}`,
      { method: 'PUT', headers: { Authorization: `Bearer ${token}` } }
    );
    if (!assocRes.ok) {
      console.error('[HubSpot Sync] Failed to associate submission note with contact (non-fatal):', await assocRes.text());
    }
  } catch (err) {
    console.error(
      '[HubSpot Sync] Submission-note logging threw (non-fatal):',
      err instanceof Error ? err.message : String(err)
    );
  }
}

// Insert leads directly into the database to avoid proxy issues.
//
// RESILIENCE NOTE (event-critical incident, 2026-07-28): the deployed
// FIREBASE_SERVICE_ACCOUNT key was found to be invalid/revoked, which made
// every getAdminDb() call throw `16 UNAUTHENTICATED: Request had invalid
// authentication credentials`. Because the Firestore write used to be on
// the FATAL path, that single failure 500'd EVERY lead/contact form on the
// site. Firestore capture is now best-effort: a lead is considered
// captured (200 success) as long as AT LEAST ONE durable channel — the
// Resend "new lead" notification email to the owner, Firestore, or
// HubSpot — succeeds. Only when EVERY channel fails do we return 500 (the
// lead is genuinely lost and the caller must be told honestly).
// Rotating FIREBASE_SERVICE_ACCOUNT restores Firestore as a channel again;
// no code change is required once the key is fixed.
export async function POST(request: NextRequest) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let body: any;
  try {
    body = await request.json();
  } catch (parseError) {
    console.error('[Lead Submission] Invalid JSON body:', parseError instanceof Error ? parseError.message : String(parseError));
    return NextResponse.json(
      { success: false, error: 'Invalid request body — expected JSON.' },
      { status: 400 }
    );
  }

  let firestoreOk = false;
  let emailOk = false;
  let hubspotOk = false;
  let leadId: string | undefined;
  let docRef: FirebaseFirestore.DocumentReference | undefined;
  const channelErrors: Record<string, string> = {};

  // 1) Firestore write — wrapped in its OWN try/catch so a failure here
  // (e.g. the revoked service-account key) never prevents the fallback
  // notification email or HubSpot sync from being attempted below.
  try {
    const db = getAdminDb();
    const leadsRef = db.collection('leads');

    docRef = await leadsRef.add({
      ...body,
      createdAt: new Date().toISOString(),
      status: 'new'
    });
    leadId = docRef.id;
    firestoreOk = true;
  } catch (firestoreError) {
    const msg = firestoreError instanceof Error ? firestoreError.message : String(firestoreError);
    console.error('[Lead Submission] Firestore write failed (non-fatal, continuing to email/HubSpot):', msg);
    channelErrors.firestore = msg;
  }

  // 2) Send Notification Email securely through Resend API (Bypasses Vercel SMTP port blocking)
  // This ALWAYS attempts, whether or not Firestore succeeded — it is the
  // fallback durable capture channel so the owner still receives every
  // lead even if Firestore is down.
  try {
    const apiKey = process.env.RESEND_API_KEY || process.env.SMTP_PASS;
    if (apiKey) {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: '"Ministry Motion" <hello@ministrymotion.com>',
          to: process.env.LEAD_NOTIFICATION_EMAIL || 'ahkeem@dardenbehavioralcounseling.com',
          subject: `New Lead: ${body.firstName} ${body.lastName} - ${body.churchName}`,
          html: `
            <h2>New MinistryMotion Lead</h2>
            <div style="font-family: sans-serif; line-height: 1.6;">
              <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              <p><strong>Phone:</strong> ${body.phone || 'N/A'}</p>
              <p><strong>Church Name:</strong> ${body.churchName}</p>
              <p><strong>Church Size:</strong> ${body.churchSize || 'N/A'}</p>
              <p><strong>Role/Title:</strong> ${body.role || 'N/A'}</p>
              <p><strong>Source:</strong> ${body.source || 'Website UI'}</p>
              ${body.interests && body.interests.length > 0 ? `<p><strong>Interests:</strong> ${body.interests.join(', ')}</p>` : ''}
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
              <p><small>${firestoreOk
                ? 'This lead was securely synchronized to Firebase.'
                : 'WARNING: Firebase write FAILED for this lead (see server logs) — this email is the only record until Firestore is restored.'}</small></p>
            </div>
          `
        })
      });

      if (!emailResponse.ok) {
        const errText = await emailResponse.text();
        console.error('[Lead Notification] Resend API Error:', errText);
        channelErrors.email = errText;
      } else {
        console.log('[Lead Notification] Email officially dispatched via Resend API.');
        emailOk = true;
      }

      // Send Confirmation Email to the Lead (best-effort only — not a
      // capture channel, so its outcome doesn't affect success/failure).
      try {
        const confirmResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: '"Ministry Motion" <hello@ministrymotion.com>',
            to: body.email,
            subject: 'Welcome to Ministry Motion Beta!',
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                <div style="background: #1a1a2e; padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
                  <h1 style="margin: 0; color: #fff; font-size: 28px;">Welcome to Ministry Motion!</h1>
                  <p style="margin: 8px 0 0; color: #a5b4fc; font-size: 16px;">Your beta request is confirmed.</p>
                </div>
                <div style="padding: 40px 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
                  <h3 style="margin-top: 0; font-size: 18px; color: #1e293b;">Hi ${body.firstName},</h3>
                  <p style="font-size: 16px; line-height: 1.6; color: #475569;">
                    Thank you for signing up for the Ministry Motion early access beta! We're thrilled to have you onboard.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6; color: #475569;">
                    We're currently processing beta requests and rolling out access in waves. Keep an eye on your inbox, as we'll be reaching out very soon with your exclusive invitation and next steps to log in!
                  </p>
                  <p style="font-size: 16px; line-height: 1.6; color: #475569; margin-top: 32px;">
                    Blessings,<br/>
                    <strong>The Ministry Motion Team</strong>
                  </p>
                </div>
              </div>
            `
          })
        });

        if (!confirmResponse.ok) {
          console.error('[Beta Confirmation] Failed to send email to lead:', await confirmResponse.text());
        } else {
          console.log('[Beta Confirmation] Email dispatched to lead successfully.');
        }
      } catch (confirmError) {
        console.error('[Beta Confirmation] Fatal delivery failure:', confirmError instanceof Error ? confirmError.message : String(confirmError));
      }

    } else {
      console.log('[Lead Notification] Missing Resend API Keys. Skip sending email.');
      channelErrors.email = 'RESEND_API_KEY / SMTP_PASS not configured';
    }
  } catch (emailError) {
    const msg = emailError instanceof Error ? emailError.message : String(emailError);
    console.error('[Lead Notification] Fatal delivery failure:', msg);
    channelErrors.email = msg;
  }

  // 3) HubSpot CRM SYNCHRONIZATION — also isolated in its own try/catch.
  // Uses hubspotUpsertContact so a 409 "Contact already exists" (a
  // returning lead re-submitting) is treated as a CAPTURE, not a failure —
  // the existing contact gets its fields updated and a Note is logged so
  // the resubmission is visible on the contact's timeline.
  let hubspotExisting = false;
  if (process.env.HUBSPOT_ACCESS_TOKEN) {
    try {
      // ROOT CAUSE (event-critical, 2026-07-28): a live full-payload test
      // showed HubSpot rejecting the ENTIRE contact with 400
      // PROPERTY_DOESNT_EXIST when `church_size` was included — that
      // custom property was never created in the HubSpot portal, so any
      // real submission with a church size 500'd. Only send KNOWN-STANDARD
      // HubSpot contact properties here; everything else (church size,
      // interests, etc.) goes into the submission Note below instead of
      // being invented as a contact property.
      const properties: Record<string, string> = {
        email: body.email || '',
        firstname: body.firstName || '',
        lastname: body.lastName || '',
        phone: body.phone || '',
        company: body.churchName || '',
        jobtitle: body.role || '',
        hs_lead_status: 'NEW',
      };

      const hsResult = await hubspotUpsertContact(process.env.HUBSPOT_ACCESS_TOKEN, properties);

      if (!hsResult.ok) {
        console.error('[HubSpot Sync] Failed to create contact:', hsResult.error);
        channelErrors.hubspot = hsResult.error || 'unknown HubSpot error';
      } else {
        hubspotOk = true;
        hubspotExisting = Boolean(hsResult.isExisting);
        console.log(
          hsResult.isExisting
            ? `[HubSpot Sync] Existing contact resubmitted (captured, updated): ${hsResult.contactId}`
            : `[HubSpot Sync] Successfully created contact. ID: ${hsResult.contactId}`
        );

        // Log this submission as a Note on the contact so repeat
        // submissions are visible on the timeline (not silently merged).
        if (hsResult.contactId) {
          const noteBody = [
            `New MinistryMotion website form submission${hsResult.isExisting ? ' (repeat/returning contact)' : ''}`,
            `Name: ${body.firstName || ''} ${body.lastName || ''}`.trim(),
            `Email: ${body.email || 'N/A'}`,
            `Church: ${body.churchName || 'N/A'}`,
            `Church Size: ${body.churchSize || 'N/A'}`,
            `Source: ${body.source || 'Website UI'}`,
            body.interests && body.interests.length > 0 ? `Interests: ${body.interests.join(', ')}` : null,
            `Submitted: ${new Date().toISOString()}`,
          ].filter(Boolean).join('\n');
          await hubspotLogSubmissionNote(process.env.HUBSPOT_ACCESS_TOKEN, hsResult.contactId, noteBody);
        }

        // Optionally update the Firebase lead with the hubspot ID async
        // (only possible if the Firestore write above actually succeeded).
        if (firestoreOk && docRef && hsResult.contactId) {
          docRef.update({
            hubspotContactId: hsResult.contactId,
            hubspotSyncedAt: new Date().toISOString()
          }).catch(dbErr => console.error('[HubSpot Sync] Failed to tag Firebase document', dbErr.message));
        }
      }

    } catch (hubspotErr) {
      const msg = hubspotErr instanceof Error ? hubspotErr.message : String(hubspotErr);
      console.error('[HubSpot Sync] Fatal error synchronizing lead:', msg);
      channelErrors.hubspot = msg;
    }
  } else {
    console.log('[HubSpot Sync] HUBSPOT_ACCESS_TOKEN missing. Skipping CRM sync.');
  }

  // Honest success rule: the lead is "captured" if ANY durable channel
  // succeeded. Never fabricate success — if every channel failed, the lead
  // is genuinely lost and the caller must see a real error. A HubSpot 409
  // (existing contact) counts as captured — see hubspotUpsertContact above.
  const captured = firestoreOk || emailOk || hubspotOk;

  if (captured) {
    return NextResponse.json(
      {
        success: true,
        leadId,
        channels: { firestore: firestoreOk, email: emailOk, hubspot: hubspotOk, hubspotExisting }
      },
      { status: 200 }
    );
  }

  console.error('[Lead Submission Fatal] All capture channels failed:', channelErrors);
  return NextResponse.json(
    {
      success: false,
      error: 'Failed to capture lead through any channel (Firestore, email, and HubSpot all failed).',
      channelErrors
    },
    { status: 500 }
  );
}
