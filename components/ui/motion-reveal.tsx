'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { motionVariants } from '@/lib/brand-tokens';

interface MotionRevealProps {
  children: React.ReactNode;
  variant?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'scaleIn';
  delay?: number;
  className?: string;
}

export function MotionReveal({
  children,
  variant = 'fadeInUp',
  delay = 0,
  className = '',
}: MotionRevealProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variantConfig = motionVariants[variant];

  return (
    <motion.div
      initial={variantConfig.initial}
      whileInView={variantConfig.animate}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ ...variantConfig.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerContainer({ children, className = '' }: StaggerContainerProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={motionVariants.stagger}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
