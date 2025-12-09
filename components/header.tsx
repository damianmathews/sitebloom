'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/logo';
import { PrimaryCTA } from '@/components/ui/cta-buttons';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'Work', href: '/work' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sb-line">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo className="h-[88px] w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sb-ink hover:text-sb-orange font-medium transition-all focus:outline-none focus:ring-2 focus:ring-sb-orange focus:ring-offset-2 rounded px-2 py-1 ${
                      isActive ? 'border-2 border-sb-orange' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <PrimaryCTA href="/contact" className="ml-4">
                Book a call
              </PrimaryCTA>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-sb-ink hover:text-sb-orange focus:outline-none focus:ring-2 focus:ring-sb-orange rounded"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-sb-line bg-white"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-lg font-medium text-sb-ink hover:text-sb-orange py-2 focus:outline-none focus:ring-2 focus:ring-sb-orange rounded px-2 ${
                        isActive ? 'border-2 border-sb-orange' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="pt-4">
                  <PrimaryCTA href="/contact" className="w-full">
                    Book a call
                  </PrimaryCTA>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
