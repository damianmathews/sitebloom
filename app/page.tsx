'use client';

import React from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { PrimaryCTA, SecondaryCTA } from '@/components/ui/cta-buttons';
import { FeatureCard, IconBadge, Step } from '@/components/ui/feature-card';
import { MotionReveal } from '@/components/ui/motion-reveal';
import {
  Wrench,
  Zap,
  Wind,
  Home,
  TreeDeciduous,
  Paintbrush,
  Truck,
  Bug,
  Smartphone,
  CalendarCheck,
  RefreshCw,
  ShieldCheck,
  Search,
  Palette,
  Mail,
  Calendar,
  MapPin,
  Lock,
} from 'lucide-react';
import copy from '@/content/copy.json';

export default function HomePage() {
  const { hero, whoWeHelp, benefits, howItWorks, whatYouGet, finalCta } = copy.home;

  // Map icon names to components
  const iconMap: Record<string, any> = {
    wrench: Wrench,
    zap: Zap,
    wind: Wind,
    home: Home,
    'tree-deciduous': TreeDeciduous,
    paintbrush: Paintbrush,
    truck: Truck,
    bug: Bug,
    smartphone: Smartphone,
    'calendar-check': CalendarCheck,
    'refresh-cw': RefreshCw,
    'shield-check': ShieldCheck,
    search: Search,
    palette: Palette,
    mail: Mail,
    calendar: Calendar,
    'map-pin': MapPin,
    lock: Lock,
  };

  return (
    <>
      {/* Hero Section - Framer-inspired */}
      <Section background="white" className="pt-20 pb-32 relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Subtle gradient background with orange accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />

        {/* Soft orange glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sb-orange/5 rounded-full blur-3xl" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-45" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          <div className="text-center space-y-8">
            {/* Small orange badge */}
            <MotionReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sb-orange/10 border border-sb-orange/20">
                <div className="w-2 h-2 bg-sb-orange rounded-full animate-pulse" />
                <span className="text-sm font-medium text-sb-orange">Built for local businesses</span>
              </div>
            </MotionReveal>

            {/* Large, bold headline */}
            <MotionReveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-sb-ink leading-[1.1] tracking-tight">
                {hero.headline}
              </h1>
            </MotionReveal>

            {/* Subheadline with better spacing */}
            <MotionReveal delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We build fast, clean sites that help local businesses<br />
                get more calls and bookings.
              </p>
            </MotionReveal>

            {/* CTA buttons with orange accent */}
            <MotionReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-sb-orange text-white font-semibold rounded-2xl hover:bg-sb-orange/90 transition-all duration-300 shadow-lg shadow-sb-orange/25 hover:shadow-xl hover:shadow-sb-orange/30 hover:scale-105"
                >
                  <span>{hero.primaryCta}</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sb-ink font-semibold rounded-2xl border-2 border-gray-200 hover:border-sb-orange/30 hover:bg-gray-50 transition-all duration-300"
                >
                  {hero.secondaryCta}
                </a>
              </div>
            </MotionReveal>

            {/* Subtle social proof or feature badges */}
            <MotionReveal delay={0.4}>
              <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>48 hour delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>One phone call</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Starting @ $15/month</span>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </Section>

      {/* Who We Help Section */}
      <Section background="white">
        <SectionHeader headline={whoWeHelp.headline} />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {whoWeHelp.services.map((service, index) => (
            <IconBadge
              key={index}
              icon={iconMap[service.icon]}
              label={service.name}
            />
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="sand">
        <SectionHeader
          headline={benefits.headline}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.cards.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={iconMap[benefit.icon]}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* How It Works Section */}
      <Section background="white">
        <SectionHeader
          headline={howItWorks.headline}
        />
        <div className="max-w-3xl mx-auto space-y-12">
          {howItWorks.steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* What You Get Section */}
      <Section background="cloud">
        <SectionHeader headline={whatYouGet.headline} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {whatYouGet.features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 p-6 bg-white rounded-2xl border border-sb-line hover:border-sb-orange/30 hover:bg-sb-orange/5 transition-all duration-300"
            >
              {React.createElement(iconMap[feature.icon], {
                className: 'h-8 w-8 text-sb-orange',
              })}
              <span className="font-medium text-sb-ink">{feature.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section background="sand" className="text-center">
        <div className="max-w-2xl mx-auto">
          <MotionReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sb-ink mb-6">
              {finalCta.headline}
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="text-xl text-gray-600 mb-10">
              {finalCta.subheadline}
            </p>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <PrimaryCTA href="/contact" icon>
              {finalCta.cta}
            </PrimaryCTA>
          </MotionReveal>
        </div>
      </Section>
    </>
  );
}
