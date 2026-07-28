import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';

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
          to: process.env.LEAD_NOTIFICATION_EMAIL || 'leads@ministrymotion.com',
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
  if (process.env.HUBSPOT_ACCESS_TOKEN) {
    try {
      const hubspotPayload = {
        properties: {
          email: body.email,
          firstname: body.firstName,
          lastname: body.lastName,
          phone: body.phone || '',
          company: body.churchName,
          jobtitle: body.role || '',
          hs_lead_status: 'NEW',
          church_size: body.churchSize || '' // Assuming there might be a custom property, or it just passes it implicitly
        }
      };

      const hsResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(hubspotPayload)
      });

      if (!hsResponse.ok) {
        const hsErrorText = await hsResponse.text();
        console.error('[HubSpot Sync] Failed to create contact:', hsErrorText);
        channelErrors.hubspot = hsErrorText;
      } else {
        const hsData = await hsResponse.json();
        console.log('[HubSpot Sync] Successfully created contact. ID:', hsData.id);
        hubspotOk = true;

        // Optionally update the Firebase lead with the hubspot ID async
        // (only possible if the Firestore write above actually succeeded).
        if (firestoreOk && docRef) {
          docRef.update({
            hubspotContactId: hsData.id,
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
  // is genuinely lost and the caller must see a real error.
  const captured = firestoreOk || emailOk || hubspotOk;

  if (captured) {
    return NextResponse.json(
      {
        success: true,
        leadId,
        channels: { firestore: firestoreOk, email: emailOk, hubspot: hubspotOk }
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
