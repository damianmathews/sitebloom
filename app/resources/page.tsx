import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Resources - Website Tools for Local Businesses',
  description: 'Free tools to help contractors, plumbers, and local service businesses get more customers online.',
};

const resources = [
  {
    id: 'roi-calculator',
    title: 'Website ROI Calculator',
    description: 'Calculate how quickly a website pays for itself. Most contractors break even in under a week.',
    icon: Calculator,
    slug: 'roi-calculator',
    color: 'bg-blue-500',
  },
  {
    id: 'before-after-guide',
    title: 'Why Competitors Get More Calls',
    description: 'Side-by-side comparison of what works vs what doesn\'t on contractor websites.',
    icon: FileText,
    slug: 'before-after-guide',
    color: 'bg-green-500',
  },
];

export default function ResourcesPage() {
  return (
    <Section background="cloud" className="pt-32 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-45" />

      <div className="relative z-10">
        <SectionHeader
          headline="Free Resources"
          subheadline="Tools and guides to help you get more customers. No email required."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Link key={resource.id} href={`/resources/${resource.slug}`}>
                <Card className="h-full rounded-3xl border-sb-line hover:border-sb-orange/30 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-0">
                    <div className={`h-32 ${resource.color} rounded-t-3xl flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                      <Icon className="h-16 w-16 text-white opacity-80" strokeWidth={1.5} />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-sb-ink mb-2 group-hover:text-sb-orange transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {resource.description}
                      </p>
                      <div className="flex items-center text-sb-orange font-semibold group-hover:gap-2 transition-all">
                        <span>Get free</span>
                        <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
