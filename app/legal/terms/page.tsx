import React from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';
import copy from '@/content/copy.json';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using sitester services.',
};

export default function TermsPage() {
  const { headline, lastUpdated } = copy.legal.terms;

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

              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing sitester.io or using our website design and hosting services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2>2. Services Provided</h2>
              <p>
                sitester provides professional website design, development, hosting, and maintenance services for local businesses. Our services include:
              </p>
              <ul>
                <li>Custom website design and development</li>
                <li>Website hosting on Netlify infrastructure</li>
                <li>Unlimited website updates and changes</li>
                <li>SSL security certificates</li>
                <li>Email support for technical issues</li>
                <li>Basic SEO optimization</li>
              </ul>
              <p>
                Specific features and services are defined by your chosen pricing plan (Standard or Pro). Additional services such as custom domain registration, professional email setup, and advanced integrations may be available for additional fees.
              </p>

              <h2>3. Payment Terms</h2>
              <h3>Pricing Structure</h3>
              <p>
                Our services operate on a subscription model with two components:
              </p>
              <ul>
                <li><strong>One-time setup fee:</strong> Paid upfront before work begins ($100 for Standard, $400 for Pro)</li>
                <li><strong>Monthly subscription:</strong> Recurring monthly fee for hosting and maintenance ($15 for Standard, $30 for Pro)</li>
              </ul>

              <h3>Billing</h3>
              <p>
                Monthly subscription fees are billed in advance on the same day each month. Setup fees are non-refundable once work has commenced. Payment is accepted via credit card, debit card, or other methods as agreed upon.
              </p>

              <h3>Late Payments</h3>
              <p>
                Failure to pay monthly fees may result in suspension of services. If payment is not received within 15 days of the due date, your website may be taken offline until payment is received.
              </p>

              <h2>4. Cancellation and Refunds</h2>
              <h3>Monthly Subscriptions</h3>
              <p>
                You may cancel your monthly subscription at any time with no penalty. Services will continue through the end of your current billing period, after which your website will be taken offline unless other arrangements are made. No refunds are provided for partial months.
              </p>

              <h3>Setup Fees</h3>
              <p>
                Setup fees are non-refundable once work has commenced on your website. If you cancel before any work begins, setup fees will be fully refunded.
              </p>

              <h2>5. Website Ownership and Rights</h2>
              <h3>Content Ownership</h3>
              <p>
                You retain full ownership of all content you provide (text, images, logos, etc.). sitester retains ownership of all code, designs, and technical implementations we create.
              </p>

              <h3>License to Use</h3>
              <p>
                While your subscription is active, you have a non-exclusive license to use your website. If you cancel services, you may request a copy of your website content, but the design and code remain the property of sitester.
              </p>

              <h3>Portfolio Use</h3>
              <p>
                We reserve the right to showcase your website in our portfolio, case studies, and marketing materials. If you prefer not to be featured, please notify us in writing.
              </p>

              <h2>6. Client Responsibilities</h2>
              <p>
                As a client, you agree to:
              </p>
              <ul>
                <li>Provide accurate information about your business</li>
                <li>Supply necessary content (text, images, logos) in a timely manner</li>
                <li>Respond to requests for feedback and approvals promptly</li>
                <li>Maintain valid payment information</li>
                <li>Use the website only for lawful purposes</li>
                <li>Not upload malicious code, spam, or illegal content</li>
              </ul>

              <h2>7. Service Availability and Uptime</h2>
              <p>
                We strive to maintain 99.9% uptime through Netlify's hosting infrastructure. However, we do not guarantee uninterrupted access and are not liable for downtime caused by hosting providers, internet service disruptions, or circumstances beyond our control. Scheduled maintenance will be communicated in advance when possible.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by Massachusetts law, sitester shall not be liable for:
              </p>
              <ul>
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Data loss or corruption</li>
                <li>Service interruptions or downtime</li>
                <li>Third-party actions or services</li>
              </ul>
              <p>
                Our total liability for any claim shall not exceed the amount you paid us in the 12 months preceding the claim.
              </p>

              <h2>9. Warranties and Disclaimers</h2>
              <p>
                Services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that:
              </p>
              <ul>
                <li>Services will be uninterrupted or error-free</li>
                <li>Your website will achieve specific business results</li>
                <li>All bugs or issues will be resolved immediately</li>
              </ul>
              <p>
                We do warrant that services will be performed in a professional manner consistent with industry standards.
              </p>

              <h2>10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless sitester from any claims, damages, or expenses arising from:
              </p>
              <ul>
                <li>Your use of our services</li>
                <li>Content you provide</li>
                <li>Your violation of these terms</li>
                <li>Your violation of any laws or third-party rights</li>
              </ul>

              <h2>11. Termination</h2>
              <p>
                We reserve the right to terminate services immediately if you:
              </p>
              <ul>
                <li>Violate these terms</li>
                <li>Fail to pay fees after reasonable notice</li>
                <li>Use services for illegal purposes</li>
                <li>Engage in abusive behavior toward our staff</li>
              </ul>
              <p>
                Upon termination, all outstanding fees become immediately due and payable.
              </p>

              <h2>12. Modifications to Services and Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Material changes will be communicated via email at least 30 days before taking effect. Continued use of services after changes constitutes acceptance of the modified terms.
              </p>
              <p>
                We may also modify, suspend, or discontinue any aspect of our services with reasonable notice.
              </p>

              <h2>13. Governing Law and Dispute Resolution</h2>
              <p>
                These terms are governed by the laws of the Commonwealth of Massachusetts, without regard to conflict of law principles. Any disputes shall be resolved in the state or federal courts located in Massachusetts.
              </p>
              <p>
                Both parties agree to first attempt to resolve disputes through good faith negotiation before pursuing legal action.
              </p>

              <h2>14. Severability</h2>
              <p>
                If any provision of these terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
              </p>

              <h2>15. Entire Agreement</h2>
              <p>
                These terms, together with our Privacy Policy, constitute the entire agreement between you and sitester regarding use of our services, superseding any prior agreements.
              </p>

              <h2>16. Contact Information</h2>
              <p>
                Questions about these Terms of Service? Contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> info@sitester.io</li>
                <li><strong>Phone:</strong> (617) 678-2418</li>
                <li><strong>Website:</strong> sitester.io</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
