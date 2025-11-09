import React from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { LeadForm } from '@/components/lead-form';
import { CalendlyEmbed } from '@/components/calendly-embed';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';
import config from '@/content/config.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${config.siteName}. Book a call or send us a message.`,
};

export default function ContactPage() {
  return (
    <>
      <Section background="cloud" className="pt-32">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SectionHeader
            headline="Let's talk about your business"
            subheadline="Book a free 20-minute call or send us a message. We'll get back to you within 24 hours."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="rounded-3xl border-sb-line shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-sb-ink mb-6">Send us a message</h2>
              <LeadForm formName="contact" />
            </CardContent>
          </Card>

          {/* Contact Info & Calendly */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="rounded-3xl border-sb-line shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-sb-ink mb-6">Get in touch</h2>

                <a
                  href={`tel:${config.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-sb-cloud hover:bg-sb-sand transition-colors group"
                >
                  <div className="p-3 bg-sb-iris rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Call us</div>
                    <div className="font-semibold text-sb-ink group-hover:text-sb-iris transition-colors">
                      {config.phone}
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Calendly Alternative */}
            {config.features.calendlyPopup && (
              <Card className="rounded-3xl border-sb-line shadow-lg bg-sb-iris text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Prefer to book a call?</h3>
                  <p className="mb-6 text-white/90">
                    Schedule a 20-minute call at a time that works for you.
                  </p>
                  <a
                    href={config.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-sb-iris font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sb-iris"
                  >
                    View available times
                  </a>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
