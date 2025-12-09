'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { MotionReveal } from '@/components/ui/motion-reveal';
import { CheckCircle, Download, ArrowLeft, Mail, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const checklist = [
  {
    category: 'First Impressions',
    items: [
      'Your phone number is visible above the fold (no scrolling)',
      'Your main service is clear within 3 seconds',
      'Professional logo or business name is prominent',
      'Site loads in under 3 seconds on mobile',
    ],
  },
  {
    category: 'Mobile Experience',
    items: [
      'Text is readable without zooming',
      'Buttons are easy to tap (not too small)',
      'Phone number is click-to-call',
      'No horizontal scrolling',
    ],
  },
  {
    category: 'Contact & Conversion',
    items: [
      'Contact form is simple (name, phone, message max)',
      'Phone number appears on every page',
      'Service area is clearly stated',
      'Call-to-action buttons stand out',
    ],
  },
  {
    category: 'Content & Trust',
    items: [
      'Services are listed clearly (no jargon)',
      'Real photos of your work (not stock images)',
      'Customer reviews or testimonials',
      'Years in business or credentials mentioned',
    ],
  },
  {
    category: 'Technical Basics',
    items: [
      'Google Business Profile is linked',
      'Site has HTTPS (padlock in browser)',
      'Contact form actually works (test it!)',
      'All pages load without errors',
    ],
  },
];

export default function WebsiteChecklistPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showFullChecklist, setShowFullChecklist] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // Form will be handled by Netlify Forms
    // The form submission will redirect to success page
    // We show the checklist immediately for better UX
    setSubmitted(true);
    setShowFullChecklist(true);
  };

  const handlePrint = () => {
    window.print();
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
              <CheckCircle className="w-4 h-4 text-sb-orange" />
              <span className="text-sm font-medium text-sb-orange">Free PDF Checklist</span>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sb-ink mb-6 leading-tight">
              The Complete Website Checklist for Contractors
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.3}>
            <p className="text-xl text-gray-600 leading-relaxed">
              15 things your website needs to turn visitors into paying customers. Print it out and check off each item.
            </p>
          </MotionReveal>
        </div>
      </Section>

      {/* Preview Checklist */}
      <Section background="cloud">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-sb-line p-8 md:p-12">
            {checklist.slice(0, showFullChecklist ? checklist.length : 2).map((section, index) => (
              <div key={index} className="mb-10 last:mb-0">
                <h2 className="text-2xl font-bold text-sb-ink mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-sb-orange/10 rounded-full flex items-center justify-center text-sb-orange font-bold">
                    {index + 1}
                  </span>
                  {section.category}
                </h2>
                <div className="space-y-4 ml-13">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-sb-orange/5 transition-colors">
                      <div className="mt-1">
                        <div className="w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center hover:border-sb-orange transition-colors cursor-pointer">
                          <CheckCircle className="w-4 h-4 text-transparent" />
                        </div>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {!showFullChecklist && (
              <div className="mt-12 text-center">
                <div className="inline-block bg-gradient-to-t from-white via-white/90 to-transparent pt-12 pb-6">
                  <p className="text-gray-500 mb-6 font-medium">
                    + {(checklist.length - 2)} more sections below
                  </p>
                </div>
              </div>
            )}

            {/* Email Capture Form */}
            {!submitted && (
              <div className="mt-12 bg-sb-orange/5 border-2 border-sb-orange/20 rounded-2xl p-8">
                <div className="max-w-xl mx-auto text-center">
                  <h3 className="text-2xl font-bold text-sb-ink mb-4">
                    Get the Full Checklist (Free)
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Enter your email to see the complete checklist. (We'll email you a PDF copy too!)
                  </p>
                  <form
                    name="resource-download"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="resource-download" />
                    <input type="hidden" name="resource" value="website-checklist" />
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
                      Show Me the Checklist
                    </Button>
                    <p className="text-sm text-gray-500">
                      No spam, ever. Just this checklist and occasional helpful tips.
                    </p>
                  </form>
                </div>
              </div>
            )}

            {/* Success State */}
            {submitted && (
              <div className="mt-12 space-y-6">
                <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Success! Here's Your Checklist
                  </h3>
                  <p className="text-green-700 mb-6">
                    Check your email - we've sent you a PDF copy at {email}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={handlePrint}
                      variant="outline"
                      className="inline-flex items-center gap-2"
                    >
                      <Printer className="w-5 h-5" />
                      Print Checklist
                    </Button>
                    <Link href="/contact">
                      <Button className="bg-sb-orange hover:bg-sb-orange/90 text-white">
                        Get Your Website Built
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Why This Matters Section */}
      <Section background="sand">
        <div className="max-w-3xl mx-auto">
          <MotionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-sb-ink mb-6 text-center">
              Why This Checklist Works
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Most website advice is garbage. "Use more social proof!" "Add a blog!" "Improve your SEO!"
              </p>
              <p className="text-lg">
                That stuff doesn't matter if your phone number is hidden, your site takes 10 seconds to load, or visitors can't figure out what you do.
              </p>
              <p className="text-lg">
                This checklist focuses on the <strong className="text-sb-orange">15 things that actually make phones ring</strong>. Nothing more, nothing less.
              </p>
              <p className="text-lg">
                Use it to audit your current site, or to make sure your new site has everything it needs to book jobs.
              </p>
            </div>
          </MotionReveal>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" className="text-center">
        <div className="max-w-2xl mx-auto">
          <MotionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-sb-ink mb-6">
              Don't Want to Fix Your Site Yourself?
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="text-xl text-gray-600 mb-8">
              We'll build you a website that checks every box on this list. Delivered in 48 hours for $299 + $15/month.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sb-orange text-white font-semibold rounded-2xl hover:bg-sb-orange/90 transition-all duration-300 shadow-lg shadow-sb-orange/25 hover:shadow-xl hover:shadow-sb-orange/30 hover:scale-105"
            >
              Get Started Now
            </Link>
          </MotionReveal>
        </div>
      </Section>
    </>
  );
}
