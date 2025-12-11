'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { MotionReveal } from '@/components/ui/motion-reveal';
import { FileText, ArrowLeft, X, Check, ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const comparisons = [
  {
    category: 'Phone Number Placement',
    bad: {
      title: 'Hidden in Footer',
      description: 'Phone number buried at bottom of page. Visitors have to scroll to find it.',
      impact: '60% of mobile users never scroll past the first screen',
    },
    good: {
      title: 'Prominent Header',
      description: 'Click-to-call phone number visible immediately in the header on every page.',
      impact: '3x more calls when number is above the fold',
    },
  },
  {
    category: 'Service Description',
    bad: {
      title: 'Vague & Generic',
      description: '"We provide quality services for all your needs. Contact us today!"',
      impact: 'Visitors leave within 3 seconds if they can\'t tell what you do',
    },
    good: {
      title: 'Specific & Clear',
      description: '"24/7 Emergency Plumbing in Boston. Licensed, insured, same-day service."',
      impact: 'Clear headlines increase conversions by 127%',
    },
  },
  {
    category: 'Mobile Experience',
    bad: {
      title: 'Desktop-First Design',
      description: 'Tiny text, buttons impossible to tap, horizontal scrolling required.',
      impact: '70% of local searches happen on mobile devices',
    },
    good: {
      title: 'Mobile-Optimized',
      description: 'Large buttons, readable text, fast loading, easy navigation on any device.',
      impact: 'Mobile-friendly sites get 50% more leads',
    },
  },
  {
    category: 'Trust Signals',
    bad: {
      title: 'No Social Proof',
      description: 'No reviews, no credentials, no photos of real work. Just stock images.',
      impact: '88% of consumers trust online reviews as much as personal recommendations',
    },
    good: {
      title: 'Trust Everywhere',
      description: 'Google reviews embedded, license numbers displayed, real project photos.',
      impact: 'Adding testimonials increases conversions by 34%',
    },
  },
  {
    category: 'Call-to-Action',
    bad: {
      title: 'Weak or Missing',
      description: 'A single "Contact" link hidden in the navigation menu.',
      impact: 'Unclear CTAs cause 70% of small business websites to fail',
    },
    good: {
      title: 'Clear & Repeated',
      description: '"Get a Free Quote" buttons throughout the page, contact form always visible.',
      impact: 'Strong CTAs can increase conversions by 83%',
    },
  },
];

export default function BeforeAfterGuidePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <MotionReveal>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sb-orange hover:text-sb-orange/80 font-medium mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Resources
            </Link>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sb-orange/10 border border-sb-orange/20 mb-6">
              <FileText className="w-4 h-4 text-sb-orange" />
              <span className="text-sm font-medium text-sb-orange">Visual Guide</span>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sb-ink mb-6 leading-tight">
              Why Your Competitor's Website Gets More Calls
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.3}>
            <p className="text-xl text-gray-600 leading-relaxed">
              Side-by-side comparison of what works vs what doesn't. Real patterns from HVAC, plumbing, and contracting websites.
            </p>
          </MotionReveal>
        </div>
      </Section>

      {/* Comparisons */}
      <Section background="cloud">
        <div className="max-w-5xl mx-auto space-y-12">
          {comparisons.map((comparison, index) => (
            <MotionReveal key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl border border-sb-line overflow-hidden">
                <div className="bg-sb-ink text-white px-6 py-4">
                  <h2 className="text-xl font-bold">{comparison.category}</h2>
                </div>

                <div className="grid md:grid-cols-2">
                  {/* Bad Example */}
                  <div className="p-6 border-b md:border-b-0 md:border-r border-sb-line bg-red-50/30">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <X className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-red-700">DON'T</span>
                    </div>
                    <h3 className="text-xl font-bold text-sb-ink mb-2">{comparison.bad.title}</h3>
                    <p className="text-gray-600 mb-4">{comparison.bad.description}</p>
                    <div className="bg-red-100 border border-red-200 rounded-lg p-3">
                      <p className="text-sm text-red-700">
                        <strong>Why it fails:</strong> {comparison.bad.impact}
                      </p>
                    </div>
                  </div>

                  {/* Good Example */}
                  <div className="p-6 bg-green-50/30">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-green-700">DO</span>
                    </div>
                    <h3 className="text-xl font-bold text-sb-ink mb-2">{comparison.good.title}</h3>
                    <p className="text-gray-600 mb-4">{comparison.good.description}</p>
                    <div className="bg-green-100 border border-green-200 rounded-lg p-3">
                      <p className="text-sm text-green-700">
                        <strong>Why it works:</strong> {comparison.good.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Section>

      {/* Email Capture for PDF */}
      <Section background="sand">
        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <div className="bg-white rounded-2xl border border-sb-line p-8 text-center">
              <MotionReveal>
                <div className="w-16 h-16 bg-sb-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="w-8 h-8 text-sb-orange" />
                </div>
                <h2 className="text-2xl font-bold text-sb-ink mb-4">
                  Want This as a PDF?
                </h2>
                <p className="text-gray-600 mb-6">
                  Get a printable version to reference when evaluating your website or talking to web designers.
                </p>
                <form
                  name="before-after-download"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4 max-w-md mx-auto"
                >
                  <input type="hidden" name="form-name" value="before-after-download" />
                  <input type="hidden" name="resource" value="before-after-guide" />
                  <div className="hidden">
                    <Label htmlFor="bot-field">Don't fill this out</Label>
                    <Input id="bot-field" name="bot-field" />
                  </div>
                  <div className="text-left">
                    <Label htmlFor="email" className="text-sb-ink font-medium mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-sb-orange hover:bg-sb-orange/90 text-white font-semibold py-6 text-lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Send Me the PDF
                  </Button>
                  <p className="text-sm text-gray-500">
                    No spam. Just the PDF and occasional tips.
                  </p>
                </form>
              </MotionReveal>
            </div>
          ) : (
            <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                Check Your Email!
              </h3>
              <p className="text-green-700">
                We've sent the PDF to {email}
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Key Takeaways */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <MotionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-sb-ink mb-8 text-center">
              Key Takeaways
            </h2>
          </MotionReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <MotionReveal delay={0.1}>
              <div className="bg-sb-orange/5 border border-sb-orange/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-sb-ink mb-3">Make It Easy</h3>
                <p className="text-gray-600">
                  Every extra click or scroll is a chance to lose a customer. Phone number at the top, clear services, easy contact form.
                </p>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.2}>
              <div className="bg-sb-orange/5 border border-sb-orange/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-sb-ink mb-3">Build Trust Fast</h3>
                <p className="text-gray-600">
                  Reviews, real photos, credentials - visitors decide in seconds if you're legitimate. Give them proof immediately.
                </p>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.3}>
              <div className="bg-sb-orange/5 border border-sb-orange/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-sb-ink mb-3">Mobile First</h3>
                <p className="text-gray-600">
                  Most people find you on their phone. If your site doesn't work perfectly on mobile, you're losing 70% of potential customers.
                </p>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.4}>
              <div className="bg-sb-orange/5 border border-sb-orange/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-sb-ink mb-3">Be Specific</h3>
                <p className="text-gray-600">
                  "Quality service" means nothing. "24/7 emergency plumbing in Austin" tells people exactly what they need to know.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="cloud" className="text-center">
        <div className="max-w-2xl mx-auto">
          <MotionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-sb-ink mb-6">
              Want a Website That Gets More Calls?
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="text-xl text-gray-600 mb-8">
              We build websites that follow all these best practices. Delivered in 48 hours, guaranteed to convert.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sb-orange text-white font-semibold rounded-2xl hover:bg-sb-orange/90 transition-all duration-300 shadow-lg shadow-sb-orange/25 hover:shadow-xl hover:shadow-sb-orange/30 hover:scale-105"
              >
                Get Your Website Built
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sb-ink font-semibold rounded-2xl border-2 border-sb-line hover:border-sb-orange/30 transition-all duration-300"
              >
                See Our Work
              </Link>
            </div>
          </MotionReveal>
        </div>
      </Section>
    </>
  );
}
