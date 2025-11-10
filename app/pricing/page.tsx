import React from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { PriceCard } from '@/components/ui/price-card';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';
import pricingData from '@/content/pricing.json';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for local business websites. Monthly plans with no long-term contracts.',
};

export default function PricingPage() {
  const { headline, subheadline, tiers } = pricingData;

  return (
    <>
      <Section background="cloud" className="pt-32 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-45" />

        <div className="relative z-10">
          <SectionHeader
            headline={headline}
            subheadline={subheadline}
          />

        {/* Price Cards - Now 2 columns for Standard and Pro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {tiers.map((tier, index) => (
            <PriceCard
              key={tier.id}
              name={tier.name}
              description={tier.description}
              price={tier.price}
              period={tier.period}
              setupFee={tier.setupFee}
              features={tier.features}
              cta={tier.cta}
              popular={tier.popular}
              index={index}
            />
          ))}
        </div>

          {/* FAQ Link */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              Have questions about our pricing?
            </p>
            <a
              href="/faq"
              className="text-sb-iris font-semibold hover:text-sb-iris/80 transition-colors underline text-lg"
            >
              View all FAQs →
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
