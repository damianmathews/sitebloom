import React from 'react';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { PrimaryCTA } from '@/components/ui/cta-buttons';
import { Wrench } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'New pricing plans coming soon. Stay tuned for updates from Sitester.',
};

export default function PricingPage() {
  return (
    <Section background="cloud" className="pt-32 pb-16 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-45" />

      <div className="relative z-10">
        <SectionHeader
          headline="Pricing — Under Construction"
          subheadline="We're reworking our plans to bring you even more value."
        />

        <div className="max-w-2xl mx-auto">
          <Card className="rounded-3xl border-2 border-sb-orange shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sb-orange/10 mb-6">
                <Wrench className="h-8 w-8 text-sb-orange" />
              </div>

              <h3 className="text-2xl font-bold text-sb-ink mb-3">
                New Pricing Coming Soon
              </h3>

              <p className="text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
                We&apos;re updating our pricing and packages to better serve local
                businesses like yours. Stay tuned — exciting changes are on the way.
              </p>

              <p className="text-sm text-gray-500 mb-8">
                In the meantime, reach out and we&apos;ll get you taken care of.
              </p>

              <PrimaryCTA href="/contact" className="w-full sm:w-auto px-8">
                Get in Touch
              </PrimaryCTA>

              <div className="mt-6">
                <Link
                  href="/faq"
                  className="text-sb-iris font-medium hover:text-sb-iris/80 transition-colors text-sm"
                >
                  Have questions? View FAQs →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
