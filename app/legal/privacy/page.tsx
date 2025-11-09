import React from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import type { Metadata } from 'next';
import copy from '@/content/copy.json';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  const { headline, lastUpdated, note } = copy.legal.privacy;

  return (
    <>
      <Section background="cloud" className="pt-32">
        <SectionHeader headline={headline} />

        <div className="max-w-4xl mx-auto">
          {/* Warning Banner */}
          <Card className="rounded-3xl border-red-500 border-2 bg-red-50 mb-8">
            <CardContent className="p-6 flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-red-500 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-red-900 mb-2">IMPORTANT LEGAL NOTICE</p>
                <p className="text-red-800">{note}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-sb-line shadow-lg">
            <CardContent className="p-8 prose prose-slate max-w-none">
              <p className="text-sm text-gray-600 mb-8">
                Last Updated: {lastUpdated}
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                [Placeholder text] Types of personal information collected through forms, cookies, and analytics.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>
                [Placeholder text] Purposes for which we collect and process your data, including providing services and communications.
              </p>

              <h2>3. Information Sharing</h2>
              <p>
                [Placeholder text] Circumstances under which we may share your information with third parties.
              </p>

              <h2>4. Cookies and Tracking</h2>
              <p>
                [Placeholder text] Use of cookies, analytics (Plausible), and other tracking technologies.
              </p>

              <h2>5. Data Security</h2>
              <p>
                [Placeholder text] Measures we take to protect your personal information.
              </p>

              <h2>6. Your Rights</h2>
              <p>
                [Placeholder text] Your rights regarding access, correction, deletion, and portability of your data.
              </p>

              <h2>7. Third-Party Services</h2>
              <p>
                [Placeholder text] Third-party tools we use (Netlify, Calendly, etc.) and their privacy policies.
              </p>

              <h2>8. Children's Privacy</h2>
              <p>
                [Placeholder text] Our policy regarding collection of information from children under 13.
              </p>

              <h2>9. Changes to This Policy</h2>
              <p>
                [Placeholder text] How and when this privacy policy may be updated.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                [Placeholder text] How to contact us with privacy-related questions or requests.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
