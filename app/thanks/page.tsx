import React from 'react';
import { Section } from '@/components/ui/section';
import { PrimaryCTA, SecondaryCTA } from '@/components/ui/cta-buttons';
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import config from '@/content/config.json';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for contacting us. We\'ll be in touch soon!',
};

export default function ThanksPage() {
  return (
    <Section background="cloud" className="pt-32 pb-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8 inline-flex p-6 bg-sb-mint/10 rounded-full">
          <CheckCircle className="h-16 w-16 text-sb-mint" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-sb-ink mb-6">
          Thanks for reaching out!
        </h1>

        <p className="text-xl text-gray-600 mb-4">
          We received your message and will get back to you within 24 hours.
        </p>

        <p className="text-lg text-gray-600 mb-10">
          In the meantime, feel free to check out our pricing or book a call directly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <PrimaryCTA href="/pricing">
            View Pricing
          </PrimaryCTA>
          <SecondaryCTA href="/">
            Back to Home
          </SecondaryCTA>
        </div>

        <div className="pt-8 border-t border-sb-line">
          <p className="text-sm text-gray-600 mb-4">
            Prefer to talk right away?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <a
              href={`tel:${config.phone}`}
              className="font-semibold text-sb-iris hover:text-sb-iris/80 transition-colors"
            >
              Call us: {config.phone}
            </a>
            <span className="hidden sm:inline text-gray-400">or</span>
            <a
              href={config.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sb-iris hover:text-sb-iris/80 transition-colors"
            >
              Book a call now
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
