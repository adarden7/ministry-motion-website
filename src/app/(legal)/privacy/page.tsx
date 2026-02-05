import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Privacy Policy</CardTitle>
          <p className="text-sm text-muted-foreground">Last Updated: November 14, 2024</p>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p>
              WorshipWise ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our worship service management application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
            <h3 className="text-lg font-medium mt-4 mb-2">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Account information (name, email address)</li>
              <li>Church/organization details</li>
              <li>Team member information</li>
              <li>Service schedules and bulletins</li>
              <li>Video content and metadata</li>
              <li>User-generated content and communications</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-2">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Device information and identifiers</li>
              <li>Usage data and analytics</li>
              <li>Log data (IP address, browser type, timestamps)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-lg font-medium mt-4 mb-2">2.3 Information from Third-Party Services</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Google Drive files (with your explicit permission)</li>
              <li>Google Sheets and Forms data</li>
              <li>YouTube video metadata</li>
              <li>Authentication data from Google OAuth</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and manage worship service data</li>
              <li>Analyze video content using AI for insights</li>
              <li>Facilitate team collaboration and communication</li>
              <li>Send service-related notifications</li>
              <li>Respond to your requests and support needs</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Google API Services - Limited Use Disclosure</h2>
            <p className="font-medium">
              WorshipWise's use and transfer of information received from Google APIs adheres to{' '}
              <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                Google API Services User Data Policy
              </a>, including the Limited Use requirements.
            </p>
            <p className="mt-2">Specifically:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>We only request access to Google Drive data necessary for our core functionality</li>
              <li>We do not use Google user data for advertising purposes</li>
              <li>We do not allow humans to read your Google data unless necessary for security, compliance, or with your explicit consent</li>
              <li>We do not transfer Google user data to third parties except as necessary to provide our services</li>
              <li>Your Google Drive data is accessed only when you explicitly import files</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Data Storage and Security</h2>
            <p>
              We use Firebase (Google Cloud Platform) to store your data securely. We implement industry-standard security measures including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Encryption in transit (HTTPS/TLS)</li>
              <li>Encryption at rest</li>
              <li>Access controls and authentication</li>
              <li>Regular security audits</li>
              <li>Secure API integrations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Data Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information only in these circumstances:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Within Your Organization:</strong> With team members you authorize</li>
              <li><strong>Service Providers:</strong> Firebase, Google Cloud, AI processing services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and data</li>
              <li>Export your data</li>
              <li>Revoke Google Drive access at any time</li>
              <li>Opt-out of non-essential communications</li>
              <li>Object to data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Data Retention</h2>
            <p>
              We retain your information for as long as your account is active or as needed to provide services. You may request deletion at any time through your account settings or by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Children's Privacy</h2>
            <p>
              Our service is not directed to children under 13. We do not knowingly collect information from children under 13. If you believe we have collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of material changes via email or through the application. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">12. Contact Us</h2>
            <p>For privacy-related questions or requests, contact us at:</p>
            <p className="mt-2">
              Email: privacy@worshipwise.app<br />
              Address: [Your Business Address]
            </p>
          </section>

          <section className="border-t pt-6 mt-8">
            <h2 className="text-xl font-semibold mb-3">California Privacy Rights (CCPA)</h2>
            <p>
              California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, request deletion, and opt-out of sale (we do not sell personal information).
            </p>
          </section>

          <section className="border-t pt-6 mt-8">
            <h2 className="text-xl font-semibold mb-3">European Privacy Rights (GDPR)</h2>
            <p>
              If you are in the European Economic Area, you have rights under the General Data Protection Regulation (GDPR), including rights to access, rectification, erasure, restriction, portability, and objection.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
