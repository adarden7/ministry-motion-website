import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';
import nodemailer from 'nodemailer';

// Insert leads directly into the database to avoid proxy issues.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const db = getAdminDb();
    const leadsRef = db.collection('beta_leads');
    
    const docRef = await leadsRef.add({
      ...body,
      createdAt: new Date().toISOString(),
      status: 'new'
    });

    // Send Notification Email safely without blocking the response
    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_PORT === '465',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Ministry Motion" <${process.env.SMTP_USER}>`,
          to: process.env.LEAD_NOTIFICATION_EMAIL || process.env.SMTP_USER,
          subject: `New Lead: ${body.firstName} ${body.lastName} - ${body.churchName}`,
          html: `
            <h3>New Beta Lead Received</h3>
            <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Phone:</strong> ${body.phone || 'N/A'}</p>
            <p><strong>Church:</strong> ${body.churchName} (${body.churchSize} members)</p>
            <p><strong>Role:</strong> ${body.role || 'N/A'}</p>
            <br/>
            <p><small>View the full details in your Firestore beta_leads collection (ID: ${docRef.id}).</small></p>
          `,
        });
        console.log('[Lead Notification] Email sent successfully.');
      } else {
        console.log('[Lead Notification] SMTP_USER or SMTP_PASS missing. Skip sending email.');
      }
    } catch (emailError: any) {
      console.error('[Lead Notification] Failed to send email via SMTP, attempting failsafe REST:', emailError.message);
    }

    // DUMB FAILSAFE - Direct REST fetch to Resend API using standard Token
    try {
      if (process.env.SMTP_PASS) {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.SMTP_PASS}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'onboarding@resend.dev',
            to: 'ahkeem@dardenbehavioralcounseling.com',
            subject: `[FAILSAFE] New Lead: ${body.firstName} ${body.lastName}`,
            html: `
              <h3>Backup Lead Delivery</h3>
              <p>Name: ${body.firstName} ${body.lastName}</p>
              <p>Email: ${body.email}</p>
              <p>Phone: ${body.phone || 'N/A'}</p>
              <p>Church: ${body.churchName}</p>
            `
          })
        });
        console.log('[Failsafe] Deliver backup to Resend successful');
      }
    } catch (fsErr: any) {
      console.error('[Failsafe Error]', fsErr.message);
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
