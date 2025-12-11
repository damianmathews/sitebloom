import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { MotionReveal } from '@/components/ui/motion-reveal';
import { Download, Calculator, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Resources - Website Checklists & Tools for Local Businesses',
  description: 'Free downloadable resources to help contractors, plumbers, and local service businesses get more customers online.',
  keywords: ['website checklist', 'contractor resources', 'website ROI calculator', 'business tools'],
  openGraph: {
    title: 'Free Website Resources for Local Businesses',
    description: 'Downloadable checklists, calculators, and guides to help you get more customers online.',
    type: 'website',
  },
};

const resources = [
  {
    id: 'roi-calculator',
    title: 'Website ROI Calculator',
    description: 'Calculate exactly how many new customers you need to make your website investment worth it. Most contractors break even in under a week.',
    icon: Calculator,
    benefit: 'See the real numbers for your business',
    slug: 'roi-calculator',
    type: 'Interactive Tool',
  },
  {
    id: 'before-after-guide',
    title: 'Why Your Competitor\'s Website Gets More Calls',
    description: 'Side-by-side comparison of what works vs what doesn\'t. Real examples from HVAC, plumbing, and contracting websites.',
    icon: FileText,
    benefit: 'Learn from real winners and losers',
    slug: 'before-after-guide',
    type: 'Visual Guide',
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <MotionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Download className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-600">100% Free - No Credit Card</span>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sb-ink mb-6 leading-tight">
              Free Resources to Get More Customers
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Checklists, calculators, and guides that actually help. No email required for basic downloads.
            </p>
          </MotionReveal>
        </div>
      </Section>

      {/* Resources Grid */}
      <Section background="cloud">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <MotionReveal key={resource.id} delay={index * 0.1}>
                  <Link href={`/resources/${resource.slug}`}>
                    <article className="group bg-white rounded-2xl border border-sb-line hover:border-sb-orange/30 overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col p-8">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-sb-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sb-orange/20 transition-colors">
                        <Icon className="w-8 h-8 text-sb-orange" />
                      </div>

                      {/* Type Badge */}
                      <div className="inline-flex items-center gap-2 mb-4">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          {resource.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-sb-ink mb-3 group-hover:text-sb-orange transition-colors leading-snug">
                        {resource.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                        {resource.description}
                      </p>

                      {/* Benefit */}
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                        <p className="text-sm font-medium text-green-700">
                          ✓ {resource.benefit}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-sb-orange font-semibold group-hover:gap-3 transition-all">
                        <Download className="w-5 h-5" />
                        <span>Get This Free</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </article>
                  </Link>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Why Free Section */}
      <Section background="sand">
        <div className="max-w-3xl mx-auto text-center">
          <MotionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-sb-ink mb-6">
              Why Are These Free?
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Simple: we want you to see the value of a good website before you buy one from us. These resources show you exactly what works. If you like what you see and want us to build it for you, great. If not, no hard feelings - you still got free help.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sb-orange text-white font-semibold rounded-2xl hover:bg-sb-orange/90 transition-all duration-300 shadow-lg shadow-sb-orange/25 hover:shadow-xl hover:shadow-sb-orange/30 hover:scale-105"
            >
              See Our Pricing
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MotionReveal>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" className="text-center">
        <div className="max-w-2xl mx-auto">
          <MotionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-sb-ink mb-6">
              Ready to Stop DIY-ing Your Website?
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="text-xl text-gray-600 mb-8">
              Use these resources to improve your current site, or let us build you a new one in 48 hours.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sb-orange text-white font-semibold rounded-2xl hover:bg-sb-orange/90 transition-all duration-300 shadow-lg shadow-sb-orange/25 hover:shadow-xl hover:shadow-sb-orange/30 hover:scale-105"
            >
              Get Your Website Built
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MotionReveal>
        </div>
      </Section>
    </>
  );
}
