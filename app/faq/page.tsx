import React from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { PrimaryCTA } from '@/components/ui/cta-buttons';
import type { Metadata } from 'next';
import copy from '@/content/copy.json';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about our website services for local businesses.',
};

export default function FAQPage() {
  const { headline, items } = copy.faq;

  return (
    <>
      <Section background="cloud" className="pt-32">
        <SectionHeader headline={headline} />

        <div className="max-w-4xl mx-auto space-y-6">
          {items.map((item, index) => (
            <Card key={index} className="rounded-3xl border-sb-line shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-sb-ink mb-4">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {item.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <PrimaryCTA href="/contact">
            Get in touch
          </PrimaryCTA>
        </div>
      </Section>
    </>
  );
}
