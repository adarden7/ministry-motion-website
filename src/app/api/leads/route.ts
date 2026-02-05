import { NextRequest, NextResponse } from 'next/server';
import type { CreateLeadRequest } from '@/lib/types/lead';

export async function POST(request: NextRequest) {
  try {
    const body: CreateLeadRequest = await request.json();

    // Validate required fields
    const required = ['firstName', 'lastName', 'email', 'phone', 'churchName', 'churchSize'] as const;
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // TODO: Replace with Sanity webhook or direct Firebase REST API call
    // For now, log the lead and return success
    console.log('[Lead Captured]', {
      name: `${body.firstName} ${body.lastName}`,
      email: body.email,
      church: body.churchName,
      size: body.churchSize,
      source: body.source || 'website_beta_signup',
    });

    // Generate a simple ID for now
    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    return NextResponse.json({
      success: true,
      leadId,
    });
  } catch (error) {
    console.error('[Lead API Error]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}
