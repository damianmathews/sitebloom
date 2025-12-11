'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { MotionReveal } from '@/components/ui/motion-reveal';
import { Calculator, ArrowLeft, DollarSign, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ROICalculatorPage() {
  const [avgJobValue, setAvgJobValue] = useState(2500);
  const [monthlyVisitors, setMonthlyVisitors] = useState(200);
  const [conversionRate, setConversionRate] = useState(3);

  const [newLeadsPerMonth, setNewLeadsPerMonth] = useState(0);
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [yearlyRevenue, setYearlyRevenue] = useState(0);
  const [breakEvenDays, setBreakEvenDays] = useState(0);

  const websiteCost = 299;
  const monthlyCost = 15;

  useEffect(() => {
    const leads = Math.round((monthlyVisitors * conversionRate) / 100);
    const monthly = leads * avgJobValue;
    const yearly = monthly * 12;
    const firstYearCost = websiteCost + (monthlyCost * 12);
    const breakEven = firstYearCost / (monthly / 30);

    setNewLeadsPerMonth(leads);
    setMonthlyRevenue(monthly);
    setYearlyRevenue(yearly);
    setBreakEvenDays(Math.ceil(breakEven));
  }, [avgJobValue, monthlyVisitors, conversionRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <>
      {/* Header */}
      <Section background="white" className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <MotionReveal>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sb-orange hover:text-sb-orange/80 font-medium mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Resources
            </Link>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sb-orange/10 border border-sb-orange/20 mb-6">
              <Calculator className="w-4 h-4 text-sb-orange" />
              <span className="text-sm font-medium text-sb-orange">Interactive Tool</span>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sb-ink mb-6 leading-tight">
              Website ROI Calculator
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.3}>
            <p className="text-xl text-gray-600 leading-relaxed">
              See exactly how quickly a professional website pays for itself. Most contractors break even in under a week.
            </p>
          </MotionReveal>
        </div>
      </Section>

      {/* Calculator */}
      <Section background="cloud">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="bg-white rounded-2xl border border-sb-line p-8">
              <h2 className="text-2xl font-bold text-sb-ink mb-6">Your Numbers</h2>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="avgJob" className="text-sb-ink font-medium mb-2 block">
                    Average Job Value
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="avgJob"
                      type="number"
                      value={avgJobValue}
                      onChange={(e) => setAvgJobValue(Number(e.target.value))}
                      className="pl-10 text-lg"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">What do you charge per job on average?</p>
                </div>

                <div>
                  <Label htmlFor="visitors" className="text-sb-ink font-medium mb-2 block">
                    Expected Monthly Visitors
                  </Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="visitors"
                      type="number"
                      value={monthlyVisitors}
                      onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                      className="pl-10 text-lg"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Local service sites typically get 100-500/month</p>
                </div>

                <div>
                  <Label htmlFor="conversion" className="text-sb-ink font-medium mb-2 block">
                    Conversion Rate (%)
                  </Label>
                  <div className="relative">
                    <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="conversion"
                      type="number"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="pl-10 text-lg"
                      step="0.5"
                      min="0.5"
                      max="20"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">% of visitors who become leads (2-5% is typical)</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong>Website Cost:</strong> {formatCurrency(websiteCost)} setup + {formatCurrency(monthlyCost)}/month
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="bg-sb-orange/5 border-2 border-sb-orange/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-sb-ink mb-6">Your Results</h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-sb-line">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">New Leads Per Month</p>
                  <p className="text-4xl font-bold text-sb-ink">{newLeadsPerMonth}</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-sb-line">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Potential Monthly Revenue</p>
                  <p className="text-4xl font-bold text-sb-orange">{formatCurrency(monthlyRevenue)}</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-sb-line">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Potential Yearly Revenue</p>
                  <p className="text-4xl font-bold text-green-600">{formatCurrency(yearlyRevenue)}</p>
                </div>

                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
                  <p className="text-sm font-medium text-green-700 uppercase tracking-wide mb-1">Break-Even Point</p>
                  <p className="text-4xl font-bold text-green-700">
                    {breakEvenDays < 1 ? '< 1' : breakEvenDays} {breakEvenDays === 1 ? 'day' : 'days'}
                  </p>
                  <p className="text-sm text-green-600 mt-2">
                    Your website pays for itself in less than {breakEvenDays < 7 ? 'a week' : `${Math.ceil(breakEvenDays / 7)} weeks`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reality Check */}
          <div className="mt-12 bg-white rounded-2xl border border-sb-line p-8">
            <h3 className="text-2xl font-bold text-sb-ink mb-4">Reality Check</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-600">
              <div>
                <p className="font-semibold text-sb-ink mb-2">Conservative Estimate</p>
                <p className="text-sm">These numbers assume you close just a fraction of leads. Many contractors close 30-50% of qualified leads.</p>
              </div>
              <div>
                <p className="font-semibold text-sb-ink mb-2">Compounding Effect</p>
                <p className="text-sm">Happy customers refer others. One good job often leads to 2-3 more from word of mouth.</p>
              </div>
              <div>
                <p className="font-semibold text-sb-ink mb-2">Your Reputation</p>
                <p className="text-sm">A professional website builds trust. Customers choose you over competitors with outdated sites.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" className="text-center">
        <div className="max-w-2xl mx-auto">
          <MotionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-sb-ink mb-6">
              Ready to Start Getting These Results?
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="text-xl text-gray-600 mb-8">
              Get a professional website that actually converts visitors into paying customers. Delivered in 48 hours.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sb-orange text-white font-semibold rounded-2xl hover:bg-sb-orange/90 transition-all duration-300 shadow-lg shadow-sb-orange/25 hover:shadow-xl hover:shadow-sb-orange/30 hover:scale-105"
              >
                Get Your Website Built
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sb-ink font-semibold rounded-2xl border-2 border-sb-line hover:border-sb-orange/30 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </MotionReveal>
        </div>
      </Section>
    </>
  );
}
