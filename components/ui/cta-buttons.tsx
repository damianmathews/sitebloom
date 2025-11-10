'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

export function PrimaryCTA({ children, href, onClick, className = '', icon = false }: CTAProps) {
  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 h-5 w-5" />}
    </>
  );

  const buttonElement = (
    <Button
      size="lg"
      className={`bg-sb-orange hover:bg-sb-orange/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all ${className}`}
      onClick={onClick}
    >
      {content}
    </Button>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href}>{buttonElement}</Link>
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      {buttonElement}
    </motion.div>
  );
}

export function SecondaryCTA({ children, href, onClick, className = '' }: CTAProps) {
  const buttonElement = (
    <Button
      size="lg"
      variant="outline"
      className={`border-2 border-sb-line hover:border-sb-orange hover:bg-sb-orange/5 text-sb-ink font-semibold px-8 py-6 text-lg rounded-xl transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href}>{buttonElement}</Link>
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      {buttonElement}
    </motion.div>
  );
}
