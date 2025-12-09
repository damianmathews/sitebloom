'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { MotionReveal } from '@/components/ui/motion-reveal';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'how-much-should-contractor-website-cost-2025',
    title: 'How Much Should a Contractor Website Cost in 2025?',
    excerpt: 'Stop overpaying for websites. Learn what contractors actually need and what you should expect to pay in 2025.',
    date: 'December 8, 2024',
    readTime: '5 min',
    category: 'Pricing',
  },
  {
    slug: '5-ways-landscapers-lose-business-without-website',
    title: '5 Ways Landscapers Lose Business Without a Website',
    excerpt: "Your competitors have websites. Here's exactly how many jobs you're losing by not having one.",
    date: 'December 7, 2024',
    readTime: '4 min',
    category: 'Marketing',
  },
  {
    slug: 'why-facebook-page-isnt-enough-hvac-business',
    title: "Why Your Facebook Page Isn't Enough for Your HVAC Business",
    excerpt: "Facebook is great for engagement. But it's terrible at booking jobs. Here's why you need your own site.",
    date: 'December 6, 2024',
    readTime: '6 min',
    category: 'Strategy',
  },
  {
    slug: 'plumber-website-checklist',
    title: 'The Only Website Checklist Plumbers Need',
    excerpt: 'Everything your plumbing website needs to turn visitors into paying customers. No fluff, just results.',
    date: 'December 5, 2024',
    readTime: '7 min',
    category: 'Guide',
  },
  {
    slug: 'roofer-website-roi-calculator',
    title: 'How One Roofing Website Paid for Itself in 3 Days',
    excerpt: 'Real numbers from a real roofer. See exactly how a $299 website generated $15,000 in revenue.',
    date: 'December 4, 2024',
    readTime: '5 min',
    category: 'Case Study',
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <MotionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sb-orange/10 border border-sb-orange/20 mb-6">
              <span className="text-sm font-medium text-sb-orange">Free Resources</span>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sb-ink mb-6 leading-tight">
              Get More Customers From Your Website
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world advice for contractors, plumbers, HVAC pros, and local service businesses. No marketing BS.
            </p>
          </MotionReveal>
        </div>
      </Section>

      {/* Blog Posts Grid */}
      <Section background="cloud">
        <div className="max-w-6xl mx-auto">
          {/* Category filters */}
          <MotionReveal>
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-sb-orange text-white'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-sb-orange/30 hover:bg-sb-orange/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </MotionReveal>

          {/* Blog posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <MotionReveal key={post.slug} delay={index * 0.1}>
                <Link href={`/blog/${post.slug}`}>
                  <article className="group bg-white rounded-2xl border border-sb-line hover:border-sb-orange/30 overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                    {/* Image placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-sb-orange/20 to-sb-orange/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-sb-orange text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-sb-ink mb-3 group-hover:text-sb-orange transition-colors leading-snug">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Read more */}
                      <div className="flex items-center gap-2 text-sb-orange font-medium group-hover:gap-3 transition-all">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              </MotionReveal>
            ))}
          </div>

          {/* No results message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="sand" className="text-center">
        <div className="max-w-2xl mx-auto">
          <MotionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-sb-ink mb-6">
              Ready to Get More Leads?
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="text-xl text-gray-600 mb-8">
              Stop reading, start booking. Get your website built in 48 hours.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sb-orange text-white font-semibold rounded-2xl hover:bg-sb-orange/90 transition-all duration-300 shadow-lg shadow-sb-orange/25 hover:shadow-xl hover:shadow-sb-orange/30 hover:scale-105"
            >
              Get Your Website
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MotionReveal>
        </div>
      </Section>
    </>
  );
}
