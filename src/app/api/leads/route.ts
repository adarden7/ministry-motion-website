import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';

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

    return NextResponse.json({ success: true, leadId: docRef.id }, { status: 200 });
  } catch (error: any) {
    console.error('[Lead Submission Fatal]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save lead to the database: ' + error.message },
      { status: 500 }
    );
  }
}
