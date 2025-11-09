import Script from 'next/script';

interface PlausibleProps {
  domain?: string;
}

/**
 * Plausible Analytics Component
 * Loads Plausible script with env-configurable data-domain
 * Disabled in development mode
 *
 * Requires NEXT_PUBLIC_PLAUSIBLE_DOMAIN environment variable
 *
 * Usage: Add <Plausible /> to your root layout
 */
export function Plausible({ domain }: PlausibleProps) {
  // Get domain from props or environment variable
  const dataDomain = domain || process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  // Disable in development
  if (process.env.NODE_ENV === 'development') {
    return null;
  }

  // Don't load if no domain is configured
  if (!dataDomain) {
    console.warn('Plausible: NEXT_PUBLIC_PLAUSIBLE_DOMAIN is not set');
    return null;
  }

  return (
    <Script
      defer
      data-domain={dataDomain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
