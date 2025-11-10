import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export function Logo({ className = '', variant = 'default' }: LogoProps) {
  return (
    <Image
      src="/sitester-logo.png"
      alt="sitester"
      width={240}
      height={58}
      className={className}
      priority
    />
  );
}

// Simple text-only version for cases where we don't need the full logo
export function LogoText({ className = '', variant = 'default' }: LogoProps) {
  const textColor = variant === 'white' ? 'text-white' : 'text-sb-ink';

  return (
    <span
      className={`font-display text-2xl font-bold tracking-wide ${textColor} ${className}`}
    >
      sitester
    </span>
  );
}
