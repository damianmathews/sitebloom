import React from 'react';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
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
    <Section background="cloud" className="pt-32 pb-16 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-45" />

      <div className="relative z-10">
        <SectionHeader
          headline="Simple, transparent pricing"
          subheadline="One flat fee. No surprises. No monthly fees required."
        />

        <div className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto items-start">
          {/* Main Pricing Card */}
          <Card className="flex-1 rounded-3xl border-2 border-sb-orange shadow-xl">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-sb-ink mb-1">Your Website</h3>
                <p className="text-sm text-gray-600">Everything you need to get online</p>
              </div>
              <div className="text-center mb-4">
                <span className="text-5xl font-bold text-sb-ink">$100</span>
                <p className="text-xs text-gray-500 mt-1">One-time payment</p>
              </div>
              <ul className="grid grid-cols-2 gap-2 mb-4">
                {mainFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-sb-mint shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <PrimaryCTA href="/contact" className="w-full">
                Get Started
              </PrimaryCTA>
            </CardContent>
          </Card>

          {/* Add-on Card */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px bg-gray-300 flex-1" />
              <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full">
                <Plus className="h-3 w-3 text-gray-500" />
                <span className="text-xs font-medium text-gray-600">Optional</span>
              </div>
              <div className="h-px bg-gray-300 flex-1" />
            </div>

            <Card className="rounded-2xl border border-sb-line hover:border-sb-orange hover:shadow-lg transition-all duration-300">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-sb-ink">Maintenance Plan</h4>
                    <p className="text-sm text-gray-600">Keep your site updated</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-sb-ink">$15</div>
                    <div className="text-xs text-gray-500">/month</div>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {maintenanceFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="h-3 w-3 text-sb-mint shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="text-center mt-4">
              <Link
                href="/faq"
                className="text-sb-iris font-medium hover:text-sb-iris/80 transition-colors text-sm"
              >
                Questions? View FAQs →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
