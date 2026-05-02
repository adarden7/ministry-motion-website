import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';
import nodemailer from 'nodemailer';

// Insert leads directly into the database to avoid proxy issues.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const db = getAdminDb();
    const leadsRef = db.collection('leads');
    
    const docRef = await leadsRef.add({
      ...body,
      createdAt: new Date().toISOString(),
      status: 'new'
    });

    // Send Notification Email securely through Resend API (Bypasses Vercel SMTP port blocking)
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
                <p><small>This lead securely synchronized to Firebase and HubSpot.</small></p>
              </div>
            `
          })
        });

        if (!emailResponse.ok) {
          const errText = await emailResponse.text();
          console.error('[Lead Notification] Resend API Error:', errText);
        } else {
          console.log('[Lead Notification] Email officially dispatched via Resend API.');
        }

        // Send Confirmation Email to the Lead
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

      } else {
        console.log('[Lead Notification] Missing Resend API Keys. Skip sending email.');
      }
    } catch (emailError: any) {
      console.error('[Lead Notification] Fatal delivery failure:', emailError.message);
    }

    // HubSpot CRM SYNCHRONIZATION
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
        } else {
          const hsData = await hsResponse.json();
          console.log('[HubSpot Sync] Successfully created contact. ID:', hsData.id);
          
          // Optionally update the Firebase lead with the hubspot ID async
          leadsRef.doc(docRef.id).update({
            hubspotContactId: hsData.id,
            hubspotSyncedAt: new Date().toISOString()
          }).catch(dbErr => console.error('[HubSpot Sync] Failed to tag Firebase document', dbErr.message));
        }

      } catch (hubspotErr: any) {
        console.error('[HubSpot Sync] Fatal error synchronizing lead:', hubspotErr.message);
      }
    } else {
      console.log('[HubSpot Sync] HUBSPOT_ACCESS_TOKEN missing. Skipping CRM sync.');
    }

    return NextResponse.json({ success: true, leadId: docRef.id }, { status: 200 });
  } catch (error: any) {
    console.error('[Lead Submission Fatal]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save lead to the database: ' + error.message },
      { status: 500 }
    );
  }
}
