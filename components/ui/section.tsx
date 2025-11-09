import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'sand' | 'cloud';
  id?: string;
}

export function Section({
  children,
  className = '',
  containerClassName = '',
  background = 'white',
  id,
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    sand: 'bg-sb-sand',
    cloud: 'bg-sb-cloud',
  };

  return (
    <section
      id={id}
      className={cn('py-16 md:py-24 lg:py-32', bgColors[background], className)}
    >
      <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  headline,
  subheadline,
  centered = true,
  className = '',
}: {
  headline: string;
  subheadline?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('mb-12 md:mb-16', centered && 'text-center', className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sb-ink mb-4">
        {headline}
      </h2>
      {subheadline && (
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {subheadline}
        </p>
      )}
    </div>
  );
}
