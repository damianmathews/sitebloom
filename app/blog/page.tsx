import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, DollarSign, TrendingUp, Megaphone, BookOpen, BarChart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Tips for Local Business Websites',
  description: 'Real-world advice for contractors, plumbers, HVAC pros, and local service businesses.',
};

const blogPosts = [
  {
    slug: 'how-much-should-contractor-website-cost-2025',
    title: 'How Much Should a Contractor Website Cost?',
    category: 'Pricing',
    icon: DollarSign,
    color: 'bg-green-500',
  },
  {
    slug: '5-ways-landscapers-lose-business-without-website',
    title: '5 Ways Landscapers Lose Business Without a Website',
    category: 'Marketing',
    icon: TrendingUp,
    color: 'bg-blue-500',
  },
  {
    slug: 'why-facebook-page-isnt-enough-hvac-business',
    title: "Why Facebook Isn't Enough for HVAC",
    category: 'Strategy',
    icon: Megaphone,
    color: 'bg-purple-500',
  },
  {
    slug: 'plumber-website-checklist',
    title: 'The Only Website Checklist Plumbers Need',
    category: 'Guide',
    icon: BookOpen,
    color: 'bg-orange-500',
  },
  {
    slug: 'roofer-website-roi-calculator',
    title: 'How One Roofer Made $15K From a $299 Site',
    category: 'Case Study',
    icon: BarChart,
    color: 'bg-red-500',
  },
];

export default function BlogPage() {
  return (
    <Section background="cloud" className="pt-32 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-45" />

      <div className="relative z-10">
        <SectionHeader
          headline="Blog"
          subheadline="Real-world advice for contractors and local service businesses. No marketing BS."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post) => {
            const Icon = post.icon;
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full rounded-2xl border-sb-line hover:border-sb-orange/30 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-0">
                    <div className={`h-24 ${post.color} rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                      <Icon className="h-10 w-10 text-white opacity-80" strokeWidth={1.5} />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-sb-ink mt-1 group-hover:text-sb-orange transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <div className="flex items-center text-sb-orange font-medium text-sm mt-3 group-hover:gap-2 transition-all">
                        <span>Read</span>
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
