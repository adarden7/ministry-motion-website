import { NextRequest, NextResponse } from 'next/server';
import type { CreateLeadRequest } from '@/lib/types/lead';

// ── Lazy Firebase Admin init (server-only) ────────────────────────────────────
function getAdminDb() {
  if (typeof window !== 'undefined') return null;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const admin = require('firebase-admin');
    if (!admin.apps.length) {
      const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
      if (!raw) return null;
      const credential = raw.includes('.json')
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        ? admin.credential.cert(JSON.parse(require('fs').readFileSync(raw, 'utf8')))
        : admin.credential.cert(JSON.parse(raw));
      admin.initializeApp({ credential });
    }
    return admin.firestore();
  } catch (e) {
    console.error('[Lead] Firebase Admin init failed:', e);
    return null;
  }
}

// ── Resend-first email sender ───────────────────────────────────────────────
async function sendEmail(to: string, subject: string, html: string, category: string) {
  const fromEmail = process.env.HUBSPOT_FROM_EMAIL || process.env.SMTP_USER || 'hello@ministrymotion.com';

  // 1. Resend (primary)
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: `MinistryMotion <${fromEmail}>`,
        to: [to],
        subject,
        html,
        tags: [{ name: 'category', value: category }],
      }),
    });
    if (res.ok) {
      const { id } = await res.json();
      console.log(`[Lead] Resend OK — emailId: ${id}`);
      return { success: true, provider: 'resend', emailId: id };
    }
  }

  // 2. SendGrid fallback
  const sgKey = process.env.SENDGRID_API_KEY;
  if (sgKey) {
    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: { Authorization: `Bearer ${sgKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: to }] }],
        from: { email: fromEmail },
        subject,
        content: [{ type: 'text/html', value: html }],
      }),
    });
    if (res.ok || res.status === 202) {
      const emailId = res.headers.get('x-message-id') || `sg_${Date.now()}`;
      return { success: true, provider: 'sendgrid', emailId };
    }
  }
  return { success: false, provider: 'none' };
}

// ── Send SMS via Twilio ───────────────────────────────────────────────────────
async function sendSMS(to: string, text: string) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_NUMBER;

  if (!sid || !token || !from) return { success: false, error: 'Twilio not configured' };

  try {
    const auth = Buffer.from(`${sid}:${token}`).toString('base64');
    const params = new URLSearchParams({ To: to, From: from, Body: text });

    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString()
    });

    if (res.ok) {
      const data = await res.json();
      console.log(`[Lead] SMS OK to ${to.slice(0, -4)}**** — SID: ${data.sid}`);
      return { success: true, sid: data.sid };
    } else {
      console.warn(`[Lead] SMS failed to ${to}: ${res.status}`);
      return { success: false, error: `Status ${res.status}` };
    }
  } catch (err: any) {
    console.error(`[Lead] SMS error:`, err.message);
    return { success: false, error: err.message };
  }
}

// ── Email Templates ───────────────────────────────────────────────────────────
function buildThankYouHtml(lead: CreateLeadRequest): string {
  const interests = lead.interests?.length
    ? lead.interests.map(i => `<li style="margin:4px 0;color:#93c5fd;">${i.replace(/_/g, ' ')}</li>`).join('')
    : '';

  return `
<div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#0f172a;border-radius:16px;overflow:hidden;">
  <div style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8);padding:28px 32px;">
    <p style="margin:0;font-size:12px;color:#93c5fd;letter-spacing:1px;text-transform:uppercase;">MinistryMotion</p>
    <h1 style="margin:8px 0 0;color:#fff;font-size:22px;font-weight:700;">You're on the list! 🎉</h1>
  </div>
  <div style="padding:28px 32px;background:#1e293b;color:#e2e8f0;">
    <p>Hi <strong>${lead.firstName}</strong>,</p>
    <p style="color:#94a3b8;">Thank you for signing up for early beta access to Ministry Motion. We're reviewing applications and will reach out soon with your exclusive invitation.</p>

    <div style="background:#0f172a;border-radius:10px;padding:20px;margin:20px 0;border:1px solid #334155;">
      <p style="margin:0 0 12px;font-size:13px;color:#64748b;text-transform:uppercase;letter-spacing:.5px;">Your info on file</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:5px 0;color:#64748b;width:120px;">Name</td><td style="color:#e2e8f0;">${lead.firstName} ${lead.lastName}</td></tr>
        <tr><td style="padding:5px 0;color:#64748b;">Email</td><td style="color:#e2e8f0;">${lead.email}</td></tr>
        <tr><td style="padding:5px 0;color:#64748b;">Phone</td><td style="color:#e2e8f0;">${lead.phone}</td></tr>
        <tr><td style="padding:5px 0;color:#64748b;">Church</td><td style="color:#e2e8f0;">${lead.churchName}</td></tr>
        ${lead.role ? `<tr><td style="padding:5px 0;color:#64748b;">Role</td><td style="color:#e2e8f0;">${lead.role}</td></tr>` : ''}
      </table>
    </div>

    ${interests ? `<p style="font-size:13px;color:#64748b;margin:0 0 6px;">Features you're interested in:</p><ul style="margin:0;padding-left:20px;">${interests}</ul>` : ''}

    <hr style="border:none;border-top:1px solid #334155;margin:24px 0;" />
    <p style="color:#94a3b8;font-size:14px;">Questions? Reply to this email or reach us at <a href="mailto:hello@ministrymotion.com" style="color:#60a5fa;">hello@ministrymotion.com</a></p>
    <p style="color:#475569;font-size:13px;margin-top:4px;">— The Ministry Motion Team</p>
  </div>
</div>`;
}

function buildAdminHtml(lead: CreateLeadRequest, leadId: string): string {
  const interests = lead.interests?.length
    ? lead.interests.map(i => `<li style="margin:4px 0;">${i.replace(/_/g, ' ')}</li>`).join('')
    : '<li>None selected</li>';

  return `
<div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#0f172a;border-radius:16px;overflow:hidden;">
  <div style="background:linear-gradient(135deg,#1d4ed8,#7c3aed);padding:24px 32px;">
    <h1 style="margin:0;color:#fff;font-size:20px;">🎉 New Beta Signup: ${lead.firstName} ${lead.lastName}</h1>
  </div>
  <div style="padding:24px 32px;background:#1e293b;color:#e2e8f0;">
    <table style="width:100%;font-size:14px;">
      <tr><td style="padding:6px 0;color:#64748b;width:130px;">Email</td><td><a href="mailto:${lead.email}" style="color:#60a5fa;">${lead.email}</a></td></tr>
      <tr><td style="padding:6px 0;color:#64748b;">Phone</td><td><a href="tel:${lead.phone}" style="color:#60a5fa;">${lead.phone}</a></td></tr>
      <tr><td style="padding:6px 0;color:#64748b;">Church</td><td style="color:#e2e8f0;">${lead.churchName} (${lead.churchSize.replace(/_/g, '–')})</td></tr>
      ${lead.role ? `<tr><td style="padding:6px 0;color:#64748b;">Role</td><td>${lead.role}</td></tr>` : ''}
    </table>
    <p style="color:#94a3b8;font-size:13px;margin:16px 0 6px;">Interests:</p>
    <ul style="margin:0;padding-left:20px;color:#93c5fd;font-size:14px;">${interests}</ul>
  </div>
</div>`;
}

// ── Main POST handler ─────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const body: CreateLeadRequest = await request.json();

    // Validate
    const required = ['firstName', 'lastName', 'email', 'phone', 'churchName', 'churchSize'] as const;
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ success: false, error: `${field} is required` }, { status: 400 });
      }
    }

    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const submittedAt = new Date();
    const db = getAdminDb();

    // ── 1. FIRESTORE: Save core lead & admin in-app notification ──────────
    if (db) {
      try {
        await db.collection('betaLeads').doc(leadId).set({
          id: leadId,
          ...body,
          status: 'new',
          createdAt: submittedAt,
        });

        // The studio app reads 'adminNotifications' directly
        await db.collection('adminNotifications').add({
          type: 'new_beta_lead',
          title: '🎉 New Beta Signup',
          body: `${body.firstName} ${body.lastName} from ${body.churchName} just signed up for early access.`,
          leadId,
          leadName: `${body.firstName} ${body.lastName}`,
          leadEmail: body.email,
          leadChurch: body.churchName,
          leadRole: body.role || null,
          read: false,
          createdAt: submittedAt,
          priority: 'high',
        });

        // Also broadcast a 'push' notification to global admins
        // The studio app handles actual FCM push transmission when a document
        // is added to the generic 'notifications' collection with type 'push'
        await db.collection('notifications').add({
          type: 'push',
          category: 'marketing_lead',
          title: 'New Beta Signup!',
          body: `${body.firstName} from ${body.churchName} signed up.`,
          recipientRole: 'admin',      // Target global admins
          read: false,
          createdAt: submittedAt,
          metadata: { leadId }
        });

        console.log('[Lead] Saved to Firestore & triggered in-app/push alerts:', leadId);
      } catch (dbErr) {
        console.error('[Lead] Firestore write failed:', dbErr);
      }
    }

    // ── 2. OUT-OF-BAND: Emails & SMS ─────────────────────────────────────────
    void (async () => {
      try {
        // Person who signed up gets a thank you email
        await sendEmail(
          body.email,
          `Welcome to the Ministry Motion Beta, ${body.firstName}! 🎉`,
          buildThankYouHtml(body),
          'beta_signup_confirmation'
        );

        // Super Admin gets an email
        const adminEmail = process.env.LEAD_NOTIFICATION_EMAIL;
        if (adminEmail) {
          await sendEmail(
            adminEmail,
            `🎉 New Beta Lead: ${body.firstName} ${body.lastName}`,
            buildAdminHtml(body, leadId),
            'beta_lead_admin_notification'
          );
        }

        // Super Admin gets an SMS Text
        const adminPhonesStr = process.env.SALES_ADMIN_PHONES;
        if (adminPhonesStr) {
          const phones = adminPhonesStr.split(',').map(p => p.trim()).filter(Boolean);
          const textMsg = `MinistryMotion Alert: New beta signup from ${body.firstName} ${body.lastName} (${body.churchName}).`;
          for (const phone of phones) {
            await sendSMS(phone, textMsg);
          }
        }
      } catch (commsErr) {
        console.error('[Lead] Comms out-of-band failure:', commsErr);
      }
    })();

    return NextResponse.json({ success: true, leadId });
  } catch (error) {
    console.error('[Lead API Error]', error);
    return NextResponse.json({ success: false, error: 'Failed to process lead' }, { status: 500 });
  }
}
