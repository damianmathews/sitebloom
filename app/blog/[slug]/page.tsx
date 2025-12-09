import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { MotionReveal } from '@/components/ui/motion-reveal';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/content/blog/posts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['SiteBloom'],
      images: [
        {
          url: `/og-blog-${post.slug}.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`/og-blog-${post.slug}.png`],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Article Header */}
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <MotionReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sb-orange hover:text-sb-orange/80 font-medium mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sb-orange/10 border border-sb-orange/20 mb-6">
              <span className="text-sm font-medium text-sb-orange">{post.category}</span>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sb-ink mb-6 leading-tight">
              {post.title}
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.3}>
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} read</span>
              </div>
            </div>
          </MotionReveal>
        </div>
      </Section>

      {/* Article Content */}
      <Section background="cloud">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg prose-gray max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="sand" className="text-center">
        <div className="max-w-2xl mx-auto">
          <MotionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-sb-ink mb-6">
              Ready to Get Your Website Built?
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="text-xl text-gray-600 mb-8">
              Stop losing customers to competitors with better websites. Get yours in 48 hours.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sb-orange text-white font-semibold rounded-2xl hover:bg-sb-orange/90 transition-all duration-300 shadow-lg shadow-sb-orange/25 hover:shadow-xl hover:shadow-sb-orange/30 hover:scale-105"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </MotionReveal>
        </div>
      </Section>
    </>
  );
}
