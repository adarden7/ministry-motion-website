import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <div className="container max-w-4xl py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Terms of Service</CardTitle>
          <p className="text-sm text-muted-foreground">Last Updated: November 14, 2024</p>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using WorshipWise ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Description of Service</h2>
            <p>
              WorshipWise provides worship service management tools including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Service planning and scheduling</li>
              <li>Team member coordination</li>
              <li>Video analysis using AI</li>
              <li>Bulletin and document management</li>
              <li>Integration with Google Drive and other services</li>
              <li>Analytics and reporting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. User Accounts</h2>
            <h3 className="text-lg font-medium mt-4 mb-2">3.1 Account Creation</h3>
            <p>
              You must create an account to use the Service. You agree to provide accurate, current information and maintain the security of your account credentials.
            </p>

            <h3 className="text-lg font-medium mt-4 mb-2">3.2 Account Responsibility</h3>
            <p>
              You are responsible for all activities under your account. Notify us immediately of any unauthorized access.
            </p>

            <h3 className="text-lg font-medium mt-4 mb-2">3.3 Eligibility</h3>
            <p>
              You must be at least 13 years old to use the Service. By using the Service, you represent that you meet this requirement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Acceptable Use</h2>
            <p>You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Upload malicious code or viruses</li>
              <li>Attempt to gain unauthorized access</li>
              <li>Interfere with the Service's operation</li>
              <li>Use the Service for illegal or harmful purposes</li>
              <li>Harass, abuse, or harm others</li>
              <li>Impersonate others or misrepresent affiliation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Content and Intellectual Property</h2>
            <h3 className="text-lg font-medium mt-4 mb-2">5.1 Your Content</h3>
            <p>
              You retain ownership of content you upload. By uploading content, you grant us a license to use, store, and process it to provide the Service.
            </p>

            <h3 className="text-lg font-medium mt-4 mb-2">5.2 Our Intellectual Property</h3>
            <p>
              The Service, including its design, features, and code, is owned by WorshipWise and protected by intellectual property laws.
            </p>

            <h3 className="text-lg font-medium mt-4 mb-2">5.3 Third-Party Content</h3>
            <p>
              You are responsible for ensuring you have rights to any third-party content you upload or link to.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Third-Party Services</h2>
            <p>
              The Service integrates with third-party services (Google Drive, YouTube, etc.). Your use of these services is subject to their respective terms and policies. We are not responsible for third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. AI and Automated Processing</h2>
            <p>
              Our Service uses artificial intelligence to analyze content. AI-generated insights are provided "as is" and should be reviewed by humans. We are not liable for AI errors or inaccuracies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Payment and Subscriptions</h2>
            <h3 className="text-lg font-medium mt-4 mb-2">8.1 Fees</h3>
            <p>
              Some features may require payment. Fees are described in your subscription plan and are subject to change with notice.
            </p>

            <h3 className="text-lg font-medium mt-4 mb-2">8.2 Billing</h3>
            <p>
              You authorize us to charge your payment method for applicable fees. Subscriptions auto-renew unless cancelled.
            </p>

            <h3 className="text-lg font-medium mt-4 mb-2">8.3 Refunds</h3>
            <p>
              Refunds are provided at our discretion. Contact support for refund requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Termination</h2>
            <p>
              We may suspend or terminate your account for violations of these Terms. You may terminate your account at any time through account settings. Upon termination, your right to use the Service ceases immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Disclaimers</h2>
            <p className="font-medium uppercase">
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mt-2">
              We do not guarantee the Service will be uninterrupted, secure, or error-free. Use at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">11. Limitation of Liability</h2>
            <p className="font-medium uppercase">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WORSHIPWISE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="mt-2">
              Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless WorshipWise from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">13. Dispute Resolution</h2>
            <h3 className="text-lg font-medium mt-4 mb-2">13.1 Governing Law</h3>
            <p>
              These Terms are governed by the laws of [Your State/Country], without regard to conflict of law principles.
            </p>

            <h3 className="text-lg font-medium mt-4 mb-2">13.2 Arbitration</h3>
            <p>
              Any disputes shall be resolved through binding arbitration, except you may bring claims in small claims court.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">14. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Material changes will be notified via email or the Service. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">15. General Provisions</h2>
            <h3 className="text-lg font-medium mt-4 mb-2">15.1 Entire Agreement</h3>
            <p>
              These Terms constitute the entire agreement between you and WorshipWise regarding the Service.
            </p>

            <h3 className="text-lg font-medium mt-4 mb-2">15.2 Severability</h3>
            <p>
              If any provision is found unenforceable, the remaining provisions remain in effect.
            </p>

            <h3 className="text-lg font-medium mt-4 mb-2">15.3 Waiver</h3>
            <p>
              Failure to enforce any provision does not constitute a waiver of that provision.
            </p>

            <h3 className="text-lg font-medium mt-4 mb-2">15.4 Assignment</h3>
            <p>
              You may not assign these Terms without our consent. We may assign these Terms without restriction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">16. Contact Information</h2>
            <p>For questions about these Terms, contact us at:</p>
            <p className="mt-2">
              Email: legal@worshipwise.app<br />
              Address: [Your Business Address]
            </p>
          </section>

          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-muted-foreground">
              By using WorshipWise, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
