import React from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { PrimaryCTA } from '@/components/ui/cta-buttons';
import type { Metadata } from 'next';
import copy from '@/content/copy.json';
import config from '@/content/config.json';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Our simple process from discovery call to live website in days.',
};

export default function HowItWorksPage() {
  const { headline, subheadline, timeline, whatWeNeed, seoBasics } = copy.howItWorks;

  return (
    <>
      <Section background="cloud" className="pt-32 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-45" />

        <div className="relative z-10">
          <SectionHeader
            headline={headline}
            subheadline={subheadline.replace('(configurable)', config.features.buildTarget)}
          />

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {timeline.map((step, index) => (
            <Card key={index} className="rounded-3xl border-sb-line shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-sb-orange text-white flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-sb-ink">
                        {step.title}
                      </h3>
                      <span className="text-sm font-semibold text-sb-orange bg-sb-orange/10 px-3 py-1 rounded-full inline-block mt-2 sm:mt-0">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <Check className="h-5 w-5 text-sb-orange shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </Section>

      {/* What We Need */}
      <Section background="white">
        <SectionHeader headline={whatWeNeed.headline} />
        <Card className="max-w-3xl mx-auto rounded-3xl border-sb-line shadow-lg">
          <CardContent className="p-8">
            <ul className="space-y-4">
              {whatWeNeed.checklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-sb-orange shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Section>

      {/* SEO Basics */}
      <Section background="sand">
        <SectionHeader
          headline={seoBasics.headline}
          subheadline={seoBasics.description}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {seoBasics.items.map((item, index) => (
            <Card key={index} className="rounded-3xl border-sb-line">
              <CardContent className="p-6">
                <h4 className="font-bold text-sb-ink mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="max-w-3xl mx-auto rounded-3xl border-sb-orange border-2 bg-sb-orange/5">
          <CardContent className="p-6 text-center">
            <p className="text-gray-700 italic">{seoBasics.note}</p>
          </CardContent>
        </Card>
      </Section>

      {/* CTA */}
      <Section background="white" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-sb-ink mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a free 20-minute discovery call and let's talk about your business.
          </p>
          <PrimaryCTA href="/contact" icon>
            Book a call
          </PrimaryCTA>
        </div>
      </Section>
    </>
  );
}
