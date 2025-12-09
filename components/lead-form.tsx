import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface LeadFormProps {
  formName?: string;
}

/**
 * Netlify Forms Component
 * IMPORTANT: This must be server-rendered (not 'use client') for Netlify to detect it
 *
 * Required attributes for Netlify Forms:
 * - data-netlify="true"
 * - name attribute
 * - hidden input with name="form-name" matching the form name
 * - action="/thanks/" for redirect after submission
 * - honeypot field for spam protection
 */
export function LeadForm({ formName = 'contact' }: LeadFormProps) {
  return (
    <form
      name={formName}
      method="POST"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-6"
    >
      {/* Hidden inputs required by Netlify */}
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="subject" value={`New ${formName} form submission from sitester.io`} />

      {/* Honeypot field for spam protection (hidden from users) */}
      <div className="hidden">
        <Label htmlFor="bot-field">Don&apos;t fill this out if you&apos;re human</Label>
        <Input id="bot-field" name="bot-field" />
      </div>

      {/* Name field */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sb-ink font-medium">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-xl border-sb-line focus:border-sb-orange focus:ring-sb-orange"
          placeholder="Your full name"
        />
      </div>

      {/* Email field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sb-ink font-medium">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-xl border-sb-line focus:border-sb-orange focus:ring-sb-orange"
          placeholder="you@example.com"
        />
      </div>

      {/* Phone field */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sb-ink font-medium">
          Phone <span className="text-destructive">*</span>
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full rounded-xl border-sb-line focus:border-sb-orange focus:ring-sb-orange"
          placeholder="(555) 123-4567"
        />
      </div>

      {/* Service category field */}
      <div className="space-y-2">
        <Label htmlFor="service-category" className="text-sb-ink font-medium">
          What type of business? <span className="text-destructive">*</span>
        </Label>
        <select
          id="service-category"
          name="service-category"
          required
          className="w-full rounded-xl border border-sb-line focus:border-sb-orange focus:ring-2 focus:ring-sb-orange p-3 bg-white text-sb-ink"
        >
          <option value="">Select a category</option>
          <option value="plumber">Plumber</option>
          <option value="electrician">Electrician</option>
          <option value="hvac">HVAC</option>
          <option value="roofer">Roofer</option>
          <option value="landscaper">Landscaper</option>
          <option value="painter">Painter</option>
          <option value="junk-removal">Junk Removal</option>
          <option value="pest-control">Pest Control</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message field */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sb-ink font-medium">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-xl border-sb-line focus:border-sb-orange focus:ring-sb-orange resize-none"
          placeholder="Tell us about your business and what you're looking for..."
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-sb-orange hover:bg-sb-orange/90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-sb-orange focus:ring-offset-2"
      >
        Send Message
      </button>

      <p className="text-sm text-gray-600 text-center">
        We&apos;ll get back to you within 24 hours.
      </p>
    </form>
  );
}
