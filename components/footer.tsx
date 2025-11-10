import React from 'react';
import Link from 'next/link';
import { LogoText } from '@/components/logo';
import { Phone, Mail } from 'lucide-react';
import { PrimaryCTA } from '@/components/ui/cta-buttons';
import config from '@/content/config.json';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Work', href: '/work' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Terms of Service', href: '/legal/terms' },
  { label: 'Privacy Policy', href: '/legal/privacy' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sb-ink text-white" role="contentinfo">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <LogoText variant="white" className="mb-4" />
            <p className="text-gray-400 mb-6">{config.description}</p>
            <div className="space-y-3">
              <a
                href={`tel:${config.phone}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{config.phone}</span>
              </a>
              <a
                href={`mailto:${config.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{config.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Ready to get started?</h3>
            <p className="text-gray-300 mb-6">
              Book a free 20-minute call and let&apos;s talk about your business.
            </p>
            <PrimaryCTA href="/contact" className="w-full">
              Book a call
            </PrimaryCTA>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            {legalLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && <span>•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} {config.siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
