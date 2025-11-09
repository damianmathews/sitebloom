import React from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import copy from '@/content/copy.json';
import config from '@/content/config.json';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Our commitment to building accessible websites for all users.',
};

export default function AccessibilityPage() {
  const { headline, statement, standards, local, feedback } = copy.accessibility;

  return (
    <>
      <Section background="cloud" className="pt-32">
        <SectionHeader headline={headline} />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Statement */}
          <Card className="rounded-3xl border-sb-line shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {statement}
              </p>
            </CardContent>
          </Card>

          {/* Standards */}
          <div>
            <h2 className="text-2xl font-bold text-sb-ink mb-6">Accessibility Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {standards.map((standard, index) => (
                <Card key={index} className="rounded-3xl border-sb-line hover:border-sb-iris transition-colors">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-sb-ink mb-2">{standard.name}</h3>
                    <p className="text-gray-600 mb-4">{standard.description}</p>
                    <a
                      href={standard.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sb-iris font-semibold hover:text-sb-iris/80 transition-colors"
                    >
                      Learn more
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Local Business Resources */}
          <Card className="rounded-3xl border-sb-iris border-2 bg-sb-cloud">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-sb-ink mb-4">{local.headline}</h3>
              <p className="text-gray-700 mb-4">{local.description}</p>
              <a
                href={local.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sb-iris font-semibold hover:text-sb-iris/80 transition-colors"
              >
                Google Local Business Guidance
                <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>

          {/* Feedback */}
          <Card className="rounded-3xl border-sb-line shadow-lg bg-sb-sand">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-sb-ink mb-4">Report Accessibility Issues</h3>
              <p className="text-gray-700 mb-6">{feedback}</p>
              <a
                href="/contact"
                className="inline-block bg-sb-iris text-white font-semibold px-6 py-3 rounded-xl hover:bg-sb-iris/90 transition-colors"
              >
                Contact us
              </a>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
