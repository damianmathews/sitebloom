'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
}

export function FeatureCard({ title, description, icon: Icon, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
    >
      <Card className="h-full border-sb-line hover:border-sb-iris hover:shadow-lg transition-all duration-300 rounded-2xl">
        <CardContent className="p-6 md:p-8">
          <div className="mb-4 inline-flex p-3 bg-sb-cloud rounded-xl">
            <Icon className="h-6 w-6 text-sb-iris" />
          </div>
          <h3 className="text-xl font-semibold text-sb-ink mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface IconBadgeProps {
  icon: LucideIcon;
  label: string;
}

export function IconBadge({ icon: Icon, label }: IconBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-sb-line hover:border-sb-iris transition-colors">
      <div className="p-3 bg-sb-cloud rounded-lg">
        <Icon className="h-6 w-6 text-sb-iris" />
      </div>
      <span className="text-sm font-medium text-sb-ink">{label}</span>
    </div>
  );
}

interface StepProps {
  number: string;
  title: string;
  description: string;
  details?: string[];
  index?: number;
}

export function Step({ number, title, description, details, index = 0 }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative pl-12 md:pl-16"
    >
      <div className="absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-sb-iris text-white flex items-center justify-center font-bold text-lg md:text-xl">
        {number}
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-sb-ink mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-3">{description}</p>
        {details && details.length > 0 && (
          <ul className="space-y-2 mt-4">
            {details.map((detail, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-sb-mint mt-1">✓</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
