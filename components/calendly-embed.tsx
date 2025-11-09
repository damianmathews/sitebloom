'use client';

import React, { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
  mode?: 'inline' | 'popup';
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
  className?: string;
}

/**
 * Calendly Integration Component
 * Supports both inline embed and popup widget modes
 *
 * Usage:
 * - Inline: <CalendlyEmbed mode="inline" url={calendlyUrl} />
 * - Popup: Use CalendlyPopupButton or openCalendlyPopup()
 *
 * Requires NEXT_PUBLIC_CALENDLY_URL environment variable
 */
export function CalendlyEmbed({
  url,
  mode = 'inline',
  prefill,
  className = '',
}: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  if (mode === 'inline') {
    const prefillParams = prefill
      ? `?${Object.entries(prefill)
          .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
          .join('&')}`
      : '';

    return (
      <div
        className={`calendly-inline-widget ${className}`}
        data-url={`${url}${prefillParams}`}
        style={{ minWidth: '320px', height: '700px' }}
      />
    );
  }

  return null;
}

interface CalendlyPopupButtonProps {
  url: string;
  children: React.ReactNode;
  className?: string;
  prefill?: {
    name?: string;
    email?: string;
  };
}

export function CalendlyPopupButton({
  url,
  children,
  className = '',
  prefill,
}: CalendlyPopupButtonProps) {
  useEffect(() => {
    // Load Calendly popup widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url,
        prefill,
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
}

/**
 * Utility function to open Calendly popup programmatically
 */
export function openCalendlyPopup(url: string, prefill?: { name?: string; email?: string }) {
  if (typeof window !== 'undefined' && (window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({
      url,
      prefill,
    });
  }
}
