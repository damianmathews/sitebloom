import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export function Logo({ className = '', variant = 'default' }: LogoProps) {
  const textColor = variant === 'white' ? '#FFFFFF' : '#0B1220';

  return (
    <svg
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="SiteBloom"
    >
      <title>SiteBloom</title>
      <rect
        x="2"
        y="2"
        width="196"
        height="44"
        rx="8"
        fill="none"
        stroke={variant === 'white' ? '#FFFFFF' : '#4C6FFF'}
        strokeWidth="1"
        opacity="0.2"
      />
      <text
        x="100"
        y="32"
        textAnchor="middle"
        fill={textColor}
        fontSize="24"
        fontWeight="700"
        fontFamily="Inter Tight, sans-serif"
        letterSpacing="0.5"
      >
        SiteBloom
      </text>
    </svg>
  );
}

// Simple text-only version for cases where we don't need the container
export function LogoText({ className = '', variant = 'default' }: LogoProps) {
  const textColor = variant === 'white' ? 'text-white' : 'text-sb-ink';

  return (
    <span
      className={`font-display text-2xl font-bold tracking-wide ${textColor} ${className}`}
    >
      SiteBloom
    </span>
  );
}
