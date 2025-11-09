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
      {/* Hero Section */}
      <Section background="cloud" className="pt-32 pb-20 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(76, 111, 255) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <MotionReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sb-ink mb-6">
              {hero.headline}
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
              {hero.subheadline}
            </p>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryCTA href="/contact" icon>
                {hero.primaryCta}
              </PrimaryCTA>
              <SecondaryCTA href="/pricing">
                {hero.secondaryCta}
              </SecondaryCTA>
            </div>
          </MotionReveal>
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
              className="flex flex-col items-center text-center gap-3 p-6 bg-white rounded-2xl border border-sb-line hover:border-sb-iris transition-colors"
            >
              {React.createElement(iconMap[feature.icon], {
                className: 'h-8 w-8 text-sb-iris',
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
