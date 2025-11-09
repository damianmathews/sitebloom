import React from 'react';

interface LocalBusinessSchemaProps {
  enabled?: boolean;
  name: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  openingHours?: string[];
  priceRange?: string;
  image?: string;
}

/**
 * LocalBusiness JSON-LD Schema Component
 * Implements structured data following Schema.org LocalBusiness specification
 *
 * Reference: https://schema.org/LocalBusiness
 * Google docs: https://developers.google.com/search/docs/advanced/structured-data/local-business
 *
 * Usage: Add to page head or body with enabled={true}
 */
export function LocalBusinessSchema({
  enabled = false,
  name,
  description,
  url,
  telephone,
  email,
  address,
  openingHours,
  priceRange = '$$',
  image,
}: LocalBusinessSchemaProps) {
  if (!enabled) {
    return null;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    ...(description && { description }),
    ...(url && { url }),
    ...(telephone && { telephone }),
    ...(email && { email }),
    ...(image && { image }),
    ...(priceRange && { priceRange }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.region,
        postalCode: address.postalCode,
        addressCountry: address.country,
      },
    }),
    ...(openingHours &&
      openingHours.length > 0 && {
        openingHoursSpecification: openingHours.map((hours) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: hours,
        })),
      }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
