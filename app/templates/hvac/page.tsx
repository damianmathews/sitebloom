import React from 'react';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';
import { Check, AlertCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC Template Preview',
  description: 'Preview of our HVAC services website template.',
};

export default function HVACTemplatePage() {
  const services = [
    'AC Installation & Repair',
    'Heating System Service',
    'Air Quality Testing',
    'Duct Cleaning',
    '24/7 Emergency Service',
    'System Maintenance Plans',
  ];

  const faqs = [
    {
      question: 'Do you provide free estimates?',
      answer: 'Yes, we offer free estimates for all HVAC installations and repairs. Contact us to schedule a consultation.',
    },
    {
      question: 'Do you offer emergency service?',
      answer: 'Yes! We provide 24/7 emergency HVAC service for heating and cooling emergencies.',
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Absolutely. We are fully licensed, bonded, and insured for your protection.',
    },
  ];

  return (
    <>
      {/* Notice Banner */}
      <div className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold flex items-center justify-center gap-2">
            <AlertCircle className="h-5 w-5" />
            TEMPLATE PREVIEW - This is a placeholder. Your site will be customized with your brand, content, and photos.
          </p>
        </div>
      </div>

      {/* Hero */}
      <Section background="cloud" className="pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sb-ink mb-6">
            Comfort You Can Count On
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            [Your Company Name] - Expert HVAC services in [Your City]
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:555-123-4567"
              className="bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors"
            >
              Call (555) 123-4567
            </a>
            <a
              href="#contact"
              className="border-2 border-sb-line hover:border-blue-500 text-sb-ink font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Schedule Service
            </a>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section background="white">
        <SectionHeader headline="Our Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="rounded-2xl border-sb-line">
              <CardContent className="p-6">
                <Check className="h-8 w-8 text-blue-500 mb-3" />
                <h3 className="font-bold text-lg text-sb-ink">{service}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Service Area */}
      <Section background="sand">
        <SectionHeader headline="We Serve Your Area" />
        <Card className="max-w-3xl mx-auto rounded-3xl border-sb-line">
          <CardContent className="p-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Proudly serving [City], [City], [City], and surrounding areas.
            </p>
            <p className="text-gray-600">
              [Placeholder: Google Maps embed would go here showing service areas]
            </p>
          </CardContent>
        </Card>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <SectionHeader headline="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="rounded-3xl border-sb-line">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-sb-ink mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section background="cloud" id="contact">
        <SectionHeader headline="Schedule Your Service" />
        <Card className="max-w-2xl mx-auto rounded-3xl border-sb-line shadow-lg">
          <CardContent className="p-8">
            <LeadForm formName="hvac-template" />
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
