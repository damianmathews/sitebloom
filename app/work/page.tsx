import React from 'react';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Wrench, Wind, TreeDeciduous, Paintbrush, Home } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Template Gallery',
  description: 'Browse our collection of professional website templates for local businesses.',
};

const templates = [
  {
    id: 'contractor',
    name: 'General Contractor',
    description: 'Perfect for construction, remodeling, and general contracting businesses',
    color: 'bg-orange-500',
    icon: Wrench,
  },
  {
    id: 'hvac',
    name: 'HVAC Services',
    description: 'Designed for heating, cooling, and air quality professionals',
    color: 'bg-blue-500',
    icon: Wind,
  },
  {
    id: 'landscaper',
    name: 'Landscaping',
    description: 'Showcase your outdoor design and maintenance services',
    color: 'bg-green-500',
    icon: TreeDeciduous,
  },
  {
    id: 'painter',
    name: 'Painting Services',
    description: 'Highlight your residential and commercial painting work',
    color: 'bg-purple-500',
    icon: Paintbrush,
  },
  {
    id: 'roofer',
    name: 'Roofing',
    description: 'Built for roofing installation, repair, and inspection services',
    color: 'bg-red-500',
    icon: Home,
  },
];

export default function WorkPage() {
  return (
    <>
      <Section background="cloud" className="pt-32 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-45" />

        <div className="relative z-10">
          <SectionHeader
            headline="Template Gallery"
            subheadline="Each template is customized with your brand, content, and photos. These are starting points, not final designs."
          />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {templates.map((template, index) => (
            <Link key={template.id} href={`/templates/${template.id}`}>
              <Card className="h-full rounded-3xl border-sb-line hover:border-sb-orange/30 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-0">
                  {/* Placeholder Thumbnail */}
                  <div className={`h-48 ${template.color} rounded-t-3xl flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    <div className="text-white text-center z-10">
                      {React.createElement(template.icon, {
                        className: 'h-20 w-20 mx-auto mb-2 opacity-80',
                        strokeWidth: 1.5,
                      })}
                      <div className="text-sm font-semibold mt-2 bg-white/20 px-4 py-1 rounded-full">
                        PLACEHOLDER
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-sb-ink mb-2 group-hover:text-sb-orange transition-colors">
                      {template.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {template.description}
                    </p>
                    <div className="flex items-center text-sb-orange font-semibold group-hover:gap-2 transition-all">
                      <span>View template</span>
                      <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

          {/* Note */}
          <Card className="max-w-3xl mx-auto mt-16 rounded-3xl border-sb-line bg-sb-sand">
            <CardContent className="p-8 text-center">
              <p className="text-gray-700">
                <strong>Note:</strong> These are placeholder templates. Each site we build is customized with your unique brand colors, content, photos, and business information. No two sites look the same.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
