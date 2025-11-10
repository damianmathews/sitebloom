import React from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';
import copy from '@/content/copy.json';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How sitester collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  const { headline, lastUpdated } = copy.legal.privacy;

  return (
    <>
      <Section background="cloud" className="pt-32">
        <SectionHeader headline={headline} />

        <div className="max-w-4xl mx-auto">
          <Card className="rounded-3xl border-sb-line shadow-lg">
            <CardContent className="p-8 prose prose-slate max-w-none">
              <p className="text-sm text-gray-600 mb-8">
                Last Updated: {lastUpdated}
              </p>

              <p>
                At sitester, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2>1. Information We Collect</h2>
              <h3>Information You Provide</h3>
              <p>
                We collect information you voluntarily provide when you:
              </p>
              <ul>
                <li><strong>Contact us:</strong> Name, email address, phone number, business name, and message content</li>
                <li><strong>Schedule a call:</strong> Name, email, phone, and appointment details through Calendly</li>
                <li><strong>Become a client:</strong> Business information, payment details, website content, images, and branding materials</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we automatically collect:
              </p>
              <ul>
                <li><strong>Analytics data:</strong> Page views, visit duration, referral sources, and device type via Plausible Analytics (privacy-focused, no personal identifiers)</li>
                <li><strong>Technical data:</strong> Browser type, operating system, IP address (anonymized), and access times</li>
              </ul>

              <p>
                We do not use cookies for tracking or advertising. Plausible Analytics does not track individual users or use cookies.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>
                We use collected information for the following purposes:
              </p>
              <ul>
                <li><strong>Service delivery:</strong> Design, develop, host, and maintain your website</li>
                <li><strong>Communication:</strong> Respond to inquiries, provide support, and send service updates</li>
                <li><strong>Billing:</strong> Process payments and send invoices</li>
                <li><strong>Improvement:</strong> Analyze website usage to improve our services</li>
                <li><strong>Legal compliance:</strong> Comply with applicable laws and regulations</li>
                <li><strong>Business operations:</strong> Manage our business, prevent fraud, and enforce our terms</li>
              </ul>

              <h2>3. Information Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information. We may share information with:
              </p>

              <h3>Service Providers</h3>
              <ul>
                <li><strong>Netlify:</strong> Website hosting and form submissions</li>
                <li><strong>Calendly:</strong> Appointment scheduling</li>
                <li><strong>Plausible Analytics:</strong> Privacy-focused website analytics (no personal data collected)</li>
                <li><strong>Payment processors:</strong> To process subscription payments</li>
              </ul>

              <h3>Legal Requirements</h3>
              <p>
                We may disclose information if required by law, court order, or government request, or to protect our rights, property, or safety.
              </p>

              <h3>Business Transfers</h3>
              <p>
                If sitester is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </p>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your information:
              </p>
              <ul>
                <li>SSL/TLS encryption for all data transmission</li>
                <li>Secure hosting infrastructure through Netlify</li>
                <li>Regular security updates and monitoring</li>
                <li>Limited employee access to personal information</li>
                <li>Secure payment processing (we do not store credit card details)</li>
              </ul>
              <p>
                However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>

              <h2>5. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to:
              </p>
              <ul>
                <li>Provide services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Enforce our agreements</li>
              </ul>
              <p>
                Contact form submissions are retained for 2 years. Client information is retained for the duration of the service relationship plus 7 years for tax and legal compliance purposes.
              </p>

              <h2>6. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have the following rights:
              </p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
                <li><strong>Portability:</strong> Request transfer of your information to another service</li>
                <li><strong>Withdraw consent:</strong> Withdraw consent for data processing where consent was the basis</li>
              </ul>
              <p>
                To exercise these rights, contact us at info@sitester.io. We will respond within 30 days.
              </p>

              <h2>7. Third-Party Services</h2>
              <h3>Netlify</h3>
              <p>
                Our websites are hosted on Netlify. Form submissions are processed through Netlify Forms. See Netlify's privacy policy at netlify.com/privacy.
              </p>

              <h3>Calendly</h3>
              <p>
                Appointment scheduling is handled by Calendly. When you book a call, your information is subject to Calendly's privacy policy at calendly.com/privacy.
              </p>

              <h3>Plausible Analytics</h3>
              <p>
                We use Plausible Analytics, a privacy-focused analytics tool that does not use cookies or collect personal data. No personal information is tracked or stored. Learn more at plausible.io/privacy.
              </p>

              <h2>8. Cookies and Tracking Technologies</h2>
              <p>
                sitester.io does not use cookies for tracking or advertising. We use Plausible Analytics, which does not set cookies or track individual users.
              </p>
              <p>
                Third-party services (Calendly, payment processors) may use their own cookies when you interact with them. Refer to their privacy policies for details.
              </p>

              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we discover we have collected information from a child, we will delete it immediately. If you believe we have collected information from a child, contact us at info@sitester.io.
              </p>

              <h2>10. Do Not Track Signals</h2>
              <p>
                Some browsers have "Do Not Track" features. sitester.io does not track users for advertising purposes, and we use privacy-focused analytics that respect all users' privacy regardless of browser settings.
              </p>

              <h2>11. International Data Transfers</h2>
              <p>
                Your information is processed and stored in the United States through our hosting provider Netlify. If you are accessing our services from outside the United States, your information will be transferred to, stored, and processed in the United States.
              </p>

              <h2>12. California Privacy Rights (CCPA)</h2>
              <p>
                If you are a California resident, you have specific rights under the California Consumer Privacy Act:
              </p>
              <ul>
                <li>Right to know what personal information is collected</li>
                <li>Right to know if personal information is sold or disclosed</li>
                <li>Right to opt-out of sale of personal information (we do not sell information)</li>
                <li>Right to request deletion of personal information</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
              </ul>
              <p>
                To exercise these rights, email info@sitester.io or call (617) 678-2418.
              </p>

              <h2>13. European Privacy Rights (GDPR)</h2>
              <p>
                If you are in the European Economic Area, you have rights under the General Data Protection Regulation including access, rectification, erasure, restriction, portability, and objection. You also have the right to lodge a complaint with your supervisory authority.
              </p>
              <p>
                Our legal basis for processing includes: performance of contract, legitimate interests, and consent where required.
              </p>

              <h2>14. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Material changes will be communicated by:
              </p>
              <ul>
                <li>Posting the updated policy on this page with a new "Last Updated" date</li>
                <li>Sending an email notification to active clients</li>
              </ul>
              <p>
                Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>

              <h2>15. Contact Us</h2>
              <p>
                Questions, concerns, or requests regarding this Privacy Policy or your personal information?
              </p>
              <ul>
                <li><strong>Email:</strong> info@sitester.io</li>
                <li><strong>Phone:</strong> (617) 678-2418</li>
                <li><strong>Website:</strong> sitester.io</li>
              </ul>
              <p>
                We will respond to privacy-related inquiries within 30 days.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
