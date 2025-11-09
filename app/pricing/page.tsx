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
  const { headline, subheadline, tiers, faqTeaser } = pricingData;

  return (
    <>
      <Section background="cloud" className="pt-32">
        <SectionHeader
          headline={headline}
          subheadline={subheadline}
        />

        {/* Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
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

        {/* FAQ Teaser */}
        <Card className="max-w-3xl mx-auto rounded-3xl border-sb-line shadow-lg bg-sb-sand">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-sb-ink mb-4">
              {faqTeaser.question}
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              {faqTeaser.answer}
            </p>
            <a
              href="/faq"
              className="text-sb-iris font-semibold hover:text-sb-iris/80 transition-colors underline"
            >
              View all FAQs
            </a>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
