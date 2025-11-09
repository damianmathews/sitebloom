import React from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import type { Metadata } from 'next';
import copy from '@/content/copy.json';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using our services.',
};

export default function TermsPage() {
  const { headline, lastUpdated, note } = copy.legal.terms;

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

              <h2>1. Agreement to Terms</h2>
              <p>
                [Placeholder text] By accessing and using this website, you accept and agree to be bound by these Terms of Service.
              </p>

              <h2>2. Services</h2>
              <p>
                [Placeholder text] Description of services provided, subscription terms, and what is included in each plan.
              </p>

              <h2>3. Payment Terms</h2>
              <p>
                [Placeholder text] Information about pricing, billing cycles, setup fees, and cancellation policies.
              </p>

              <h2>4. Intellectual Property</h2>
              <p>
                [Placeholder text] Ownership of website content, code, and designs. Rights granted to clients.
              </p>

              <h2>5. Limitation of Liability</h2>
              <p>
                [Placeholder text] Limitations on our liability for damages or losses.
              </p>

              <h2>6. Termination</h2>
              <p>
                [Placeholder text] Conditions under which services may be terminated by either party.
              </p>

              <h2>7. Governing Law</h2>
              <p>
                [Placeholder text] Which jurisdiction's laws govern these terms.
              </p>

              <h2>8. Changes to Terms</h2>
              <p>
                [Placeholder text] How and when these terms may be updated.
              </p>

              <h2>9. Contact</h2>
              <p>
                [Placeholder text] How to contact us with questions about these terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
