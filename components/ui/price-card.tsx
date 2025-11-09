'use client';

import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PrimaryCTA, SecondaryCTA } from '@/components/ui/cta-buttons';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface PriceCardProps {
  name: string;
  description: string;
  price: string;
  period: string;
  setupFee: string;
  features: string[];
  cta: string;
  popular?: boolean;
  index?: number;
}

export function PriceCard({
  name,
  description,
  price,
  period,
  setupFee,
  features,
  cta,
  popular = false,
  index = 0,
}: PriceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative h-full"
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sb-iris text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <Card
        className={`h-full flex flex-col rounded-3xl transition-all duration-300 ${
          popular
            ? 'border-2 border-sb-iris shadow-xl scale-105'
            : 'border border-sb-line hover:border-sb-iris hover:shadow-lg'
        }`}
      >
        <CardHeader className="text-center pb-6 pt-8">
          <h3 className="text-2xl font-bold text-sb-ink mb-2">{name}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className="mb-2">
            <span className="text-4xl md:text-5xl font-bold text-sb-ink">{price}</span>
            <span className="text-gray-600 text-lg">{period}</span>
          </div>
          <p className="text-sm text-gray-500">{setupFee}</p>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <ul className="space-y-4 mb-8 flex-1">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-sb-mint shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            {popular ? (
              <PrimaryCTA href="/contact" className="w-full">
                {cta}
              </PrimaryCTA>
            ) : (
              <SecondaryCTA href="/contact" className="w-full">
                {cta}
              </SecondaryCTA>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
