import { NextRequest, NextResponse } from 'next/server';

// Proxy the request from Vercel to your active Cloud Run App instance
// where all the SMTP emails, Firestore logic, and alerts actually live.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const appResponse = await fetch('https://app.ministrymotion.com/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await appResponse.json();

    if (!appResponse.ok) {
      console.error('[Lead Proxy Error]', data);
      return NextResponse.json(data, { status: appResponse.status });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('[Lead Proxy Fatal]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to proxy lead to application backend' },
      { status: 500 }
    );
  }
}
