// Shadow-mode parity POST to the shared catalyst-platform `lead-intake` spine primitive.
//
// Wave 1 reference integration for the web-lead-intake-spine-primitive (catalyst-platform
// PR #119 + #127). This is the FIRST of 5 marketing sites (ministrymotion/noirneuro/
// vizanote/lovecode/lexistrace) to wire the new shared intake service — deliberately as a
// PARALLEL, additive POST, never a replacement:
//
//   - OFF by default (`NEXT_PUBLIC_LEAD_INTAKE_SHADOW` unset/not `'true'`): this file's export
//     is a no-op. The existing `/api/leads` → Firestore + Resend + HubSpot path in
//     `BetaSignupForm.tsx` is 100% untouched — those forms were only just fixed after an
//     outage; this integration must never risk them again.
//   - ON: BetaSignupForm ALSO posts the same submission to the standalone `lead-intake`
//     Cloud Run service (shadow mode there — capture+log only, no email/CRM — see
//     catalyst-platform `modules/lead-intake/lead-intake-service.ts`'s `shadowMode`), so an
//     owner can compare parity between the legacy path and the new spine primitive before any
//     cutover. It is fire-and-forget and best-effort: any failure here is caught and logged,
//     and NEVER surfaces to the visitor or affects the primary form's success/error state.
//
// This is the REFERENCE the other 4 marketing sites replicate at their own cutover — see the
// PR description for what's still owner-gated (Resend domain verification, Turnstile keys,
// HubSpot token — none of which this shadow-mode POST needs, since the intake service ignores
// bot-protection and skips both providers while in its own shadow mode).
import type { BetaSignupFormData, LeadSource } from './types/lead';

export interface LeadIntakeShadowPayload {
  formData: BetaSignupFormData;
  source?: LeadSource;
  utm?: Record<string, string>;
}

function genIdempotencyKey(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `idem-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/** Exported for the form component to decide whether it's even worth building the UTM/consent
 *  bookkeeping — but `postToLeadIntakeShadow` itself already no-ops when this is false, so a
 *  caller can also just always call it unconditionally. */
export function isLeadIntakeShadowEnabled(): boolean {
  return process.env.NEXT_PUBLIC_LEAD_INTAKE_SHADOW === 'true';
}

/**
 * Fire-and-forget. Never throws, never rejects in a way the caller needs to handle — swallow
 * and log (console.debug, not console.error — a shadow-mode hiccup is not an incident).
 */
export async function postToLeadIntakeShadow(payload: LeadIntakeShadowPayload): Promise<void> {
  if (!isLeadIntakeShadowEnabled()) return;

  const intakeUrl = process.env.NEXT_PUBLIC_LEAD_INTAKE_URL;
  if (!intakeUrl) {
    console.debug(
      '[lead-intake-shadow] NEXT_PUBLIC_LEAD_INTAKE_SHADOW=true but NEXT_PUBLIC_LEAD_INTAKE_URL is unset — skipping shadow POST.',
    );
    return;
  }
  const source = process.env.NEXT_PUBLIC_LEAD_SOURCE || payload.source || 'ministrymotion';
  const { formData } = payload;
  const name = `${formData.firstName} ${formData.lastName}`.trim();

  const body: Record<string, unknown> = {
    source,
    formId: 'beta-signup',
    name,
    email: formData.email,
    ...(formData.phone ? { phone: formData.phone } : {}),
    ...(formData.churchName ? { company: formData.churchName } : {}),
    ...(formData.role ? { role: formData.role } : {}),
    // consent:true mirrors this form's own submit-button disclosure ("By signing up, you agree
    // to our Terms of Service and Privacy Policy...") — the existing BetaSignupForm has no
    // separate opt-in checkbox, so this is an honest, documented mapping onto the intake
    // service's required boolean, not a fabricated field. Flagged for owner review in the PR.
    consent: true,
    idempotencyKey: genIdempotencyKey(),
    verticalFields: {
      churchSize: formData.churchSize,
      ...(formData.interests && formData.interests.length > 0 ? { interests: formData.interests } : {}),
    },
    ...(payload.utm && Object.keys(payload.utm).length > 0 ? { utm: payload.utm } : {}),
  };

  try {
    const res = await fetch(`${intakeUrl}/v1/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => res.statusText);
      console.debug('[lead-intake-shadow] shadow POST returned non-2xx (best-effort, no impact on the primary submission):', res.status, detail);
      return;
    }
    console.debug('[lead-intake-shadow] shadow POST ok — parity capture recorded on the lead-intake service.');
  } catch (err) {
    console.debug(
      '[lead-intake-shadow] shadow POST failed (best-effort, no impact on the primary submission):',
      err instanceof Error ? err.message : String(err),
    );
  }
}
