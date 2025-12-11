import React from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PrimaryCTA } from '@/components/ui/cta-buttons';
import { Check, Plus } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for local business websites. $100 flat rate, no monthly fees required.',
};

export default function PricingPage() {
  const mainFeatures = [
    'Up to 5 pages',
    'Contact form',
    'Mobile responsive',
    'Basic SEO setup',
    'SSL certificate',
    'Photo galleries',
    'FAQ section',
    'Hosting included',
  ];

  const maintenanceFeatures = [
    'Monthly content updates',
    'Priority support',
    'Performance monitoring',
    'Security updates',
  ];

  return (
    <>
      <Section background="cloud" className="pt-32 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-45" />

        <div className="relative z-10">
          <SectionHeader
            headline="Simple, transparent pricing"
            subheadline="One flat fee. No surprises. No monthly fees required."
          />

          {/* Main Pricing Card */}
          <div className="max-w-lg mx-auto mb-12">
            <Card className="rounded-3xl border-2 border-sb-orange shadow-xl">
              <CardHeader className="text-center pb-6 pt-8">
                <h3 className="text-2xl font-bold text-sb-ink mb-2">Your Website</h3>
                <p className="text-gray-600 mb-6">Everything you need to get online</p>
                <div className="mb-2">
                  <span className="text-5xl md:text-6xl font-bold text-sb-ink">$100</span>
                </div>
                <p className="text-sm text-gray-500">One-time payment</p>
              </CardHeader>
              <CardContent className="flex flex-col">
                <ul className="space-y-4 mb-8">
                  {mainFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sb-mint shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <PrimaryCTA href="/contact" className="w-full">
                  Get Started
                </PrimaryCTA>
              </CardContent>
            </Card>
          </div>

          {/* Add-on Section */}
          <div className="max-w-lg mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-px bg-gray-300 flex-1" />
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <Plus className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-600">Optional Add-on</span>
              </div>
              <div className="h-px bg-gray-300 flex-1" />
            </div>

            <Card className="rounded-2xl border border-sb-line hover:border-sb-orange hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-sb-ink mb-1">Maintenance Plan</h4>
                    <p className="text-sm text-gray-600 mb-3">Keep your site updated and supported</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {maintenanceFeatures.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-sb-mint shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center md:text-right md:pl-6 md:border-l md:border-gray-200">
                    <div className="text-3xl font-bold text-sb-ink">$15</div>
                    <div className="text-sm text-gray-500">/month</div>
                    <div className="text-xs text-gray-400 mt-1">Cancel anytime</div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
