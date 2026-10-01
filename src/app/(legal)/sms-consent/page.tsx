import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SMS_CONSENT_TEXT, SMS_PROGRAM_OPERATOR, SMS_SUPPORT_URL } from '@/lib/sms-consent';

export const metadata: Metadata = {
  title: 'Text Message Consent | MinistryMotion',
  description: 'How visitors opt in to MinistryMotion updates and offers by text message, and the terms of the program.',
};

export default function SmsConsentPage() {
  return (
    <div className="container max-w-4xl py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Text Message Consent</CardTitle>
          <p className="text-sm text-muted-foreground">Last Updated: October 1, 2026</p>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">The program</h2>
            <p>
              MinistryMotion is operated by {SMS_PROGRAM_OPERATOR}. People who ask to hear from us on
              ministrymotion.com can receive MinistryMotion product updates, offers, and invitations by text message.
              Consent is optional and is not a condition of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">How you opt in</h2>
            <p>
              On the MinistryMotion sign-up form, next to the phone number field, there is a checkbox that is never
              pre-checked. A person opts in by entering a mobile number and checking the box. This is the exact text
              shown beside it:
            </p>
            <div className="rounded-md border border-border bg-muted/40 p-4" data-testid="sms-consent-replica">
              <div className="flex items-start gap-3">
                <input type="checkbox" disabled aria-label="Text message consent (example)" className="mt-1 h-4 w-4 shrink-0" />
                <p className="m-0 text-sm" data-testid="sms-consent-text">
                  {SMS_CONSENT_TEXT}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Program details</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Sender:</strong> MinistryMotion, operated by {SMS_PROGRAM_OPERATOR}.</li>
              <li><strong>Message frequency:</strong> up to 4 messages per month.</li>
              <li><strong>Cost:</strong> message and data rates may apply, depending on your mobile plan.</li>
              <li><strong>Opt out:</strong> reply <strong>STOP</strong> at any time. You will receive one confirmation and no further texts.</li>
              <li><strong>Help:</strong> reply <strong>HELP</strong>, or contact us through <a href={SMS_SUPPORT_URL}>{SMS_SUPPORT_URL.replace('https://', '')}</a>.</li>
              <li><strong>Consent is not a condition of purchase.</strong></li>
              <li>Mobile information is not shared with third parties or affiliates for marketing or promotional purposes. Opt-in data and consent are not shared with any third party.</li>
              <li>Carriers are not liable for delayed or undelivered messages.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Policies</h2>
            <p>
              Read the <Link href="/privacy">Privacy Policy</Link> and the <Link href="/terms">Terms of Service</Link>,
              which include the SMS program terms.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
