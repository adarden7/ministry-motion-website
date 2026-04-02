'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Check,
  X,
  Menu,
  HelpCircle,
  Users,
  Mic2,
  BookOpen,
  BarChart3,
  MessageSquare,
  Headphones,
  Heart,
  Smartphone,
  Layers,
  Crown,
  Zap
} from 'lucide-react';
import { MarketingNav } from '@/components/marketing';
import { useMarketing } from '@/context/MarketingContext';

// Pricing tiers — aligned with canonical subscription-tiers.ts
const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    annualPrice: '$0',
    period: '30 days free',
    description: 'Try Ministry Motion risk-free. No credit card required.',
    teamSize: '5 team members',
    highlight: false,
    cta: 'Start Free Trial',
    features: {
      'Team Members': '5',
      'Service Planning': true,
      'Basic Scheduling': true,
      'Song Library': '50 songs',
      'Community Access': true,
      'Mobile Apps': true,
      'PCO Integration': true,
      'Email Support': true,
      // Not included
      'Assessments': false,
      'AI Agents': false,
      'Digital Rehearsal Rooms': false,
      'Learning Hub Courses': false,
      'Service Analytics': false,
      'Integrated Giving': false,
      'Member Management': 'Add-on',
      'Multi-Campus': false
    }
  },
  {
    name: 'Small Church',
    price: '$99',
    annualPrice: '$79',
    period: '/mo',
    description: 'For growing worship teams getting organized',
    teamSize: '15 team members',
    highlight: false,
    cta: 'Sign Up for Beta',
    features: {
      'Team Members': '15',
      'Service Planning': true,
      'Full Scheduling': true,
      'Song Library': 'Unlimited',
      'PCO Integration': true,
      'Integrated Giving': '2.9% + $0.30',
      'Basic Assessments': true,
      'Email & Chat Support': true,
      'Digital Rehearsal Rooms': '5 rooms',
      'Learning Hub Courses': '3 courses',
      'Member Management': 'Add-on',
      // Not included
      'AI Agents': false,
      'Service Analytics': false,
      'Ministry Analytics': false,
      'Multi-Campus': false
    }
  },
  {
    name: 'Pro',
    price: '$199',
    annualPrice: '$159',
    period: '/mo',
    description: 'Full AI experience with 20 autonomous agents',
    teamSize: '50 team members',
    highlight: true,
    cta: 'Sign Up for Beta',
    features: {
      'Team Members': '50',
      '20 AI Agents': true,
      'Service Analytics': true,
      'Ministry Analytics': true,
      'PCO Integration': true,
      'Integrated Giving': '2.5% + $0.25',
      'Advanced Assessments': true,
      'Denomination Context': true,
      'AI Facilitated Conflict Support': true,
      'Active Labs': 'Hands-on learning',
      'All 18+ Courses': true,
      'Community Marketplace': true,
      'Priority Support': true
    }
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    annualPrice: 'Custom',
    period: '',
    description: 'For large churches and multi-site organizations',
    teamSize: 'Unlimited members',
    highlight: false,
    cta: 'Contact Sales',
    features: {
      'Everything in Pro': true,
      'Unlimited Team Members': true,
      'Multi-Campus': true,
      'Cross-Campus Analytics': true,
      'Regional/Conference Reporting': true,
      'PCO Integration': true,
      'Integrated Giving': 'Custom rates',
      'Member Management': 'Included',
      'API Access': true,
      'SSO Integration': true,
      'Dedicated Account Manager': true,
      'Custom Integrations': true
    }
  }
];

// Feature categories for the detailed comparison
const featureCategories = [
  {
    name: 'Team & Planning',
    icon: Users,
    features: [
      { name: 'Team Members', free: '5', small: '15', pro: '50', enterprise: 'Unlimited' },
      { name: 'Service Planning', free: true, small: true, pro: true, enterprise: true },
      { name: 'Volunteer Scheduling', free: 'Basic', small: 'Full', pro: 'Full + AI', enterprise: 'Full + AI' },
      { name: 'PCO Integration', free: true, small: true, pro: true, enterprise: true }
    ]
  },
  {
    name: 'AI Agents & Intelligence',
    icon: Zap,
    features: [
      { name: 'AI Agents', free: false, small: false, pro: '20 AI agents', enterprise: '20+ custom' },
      { name: 'Denomination-Specific Context', free: false, small: false, pro: true, enterprise: true },
      { name: 'Conflict Resolution AI', free: false, small: false, pro: true, enterprise: true },
      { name: 'AI Vocal Coaching', free: false, small: false, pro: true, enterprise: true },
      { name: 'Context-Aware Messaging', free: false, small: false, pro: true, enterprise: true }
    ]
  },
  {
    name: 'Learning & Training',
    icon: BookOpen,
    features: [
      { name: 'Learning Hub Courses', free: false, small: '3 courses', pro: 'All 18+', enterprise: 'All 18+ + Custom' },
      { name: 'Active Labs', free: false, small: false, pro: 'Hands-on learning', enterprise: 'Custom labs' },
      { name: 'Certifications', free: false, small: false, pro: true, enterprise: true },
      { name: 'Discipleship Journeys', free: false, small: 'Basic', pro: 'Full', enterprise: 'Full + Custom' }
    ]
  },
  {
    name: 'Analytics & Insights',
    icon: BarChart3,
    features: [
      { name: 'Service Analytics', free: false, small: false, pro: true, enterprise: true },
      { name: 'Ministry Analytics', free: false, small: false, pro: true, enterprise: true },
      { name: 'Realtime Streaming Analytics', free: false, small: false, pro: false, enterprise: true },
      { name: 'Theme Alignment Scoring', free: false, small: false, pro: true, enterprise: true },
      { name: 'Cross-Campus Analytics', free: false, small: false, pro: false, enterprise: true }
    ]
  },
  {
    name: 'Giving & Finance',
    icon: Heart,
    features: [
      { name: 'Integrated Giving', free: false, small: '2.9% + $0.30', pro: '2.5% + $0.25', enterprise: 'Custom rates' },
      { name: 'Recurring Donations', free: false, small: true, pro: true, enterprise: true },
      { name: 'Campaign Management', free: false, small: true, pro: true, enterprise: true },
      { name: 'Donor Analytics', free: false, small: 'Basic', pro: 'Full', enterprise: 'Full + Custom' }
    ]
  },
  {
    name: 'Worship & Vocal',
    icon: Mic2,
    features: [
      { name: 'Vocal Games', free: true, small: true, pro: true, enterprise: true },
      { name: 'Vocal Studio', free: false, small: true, pro: true, enterprise: true },
      { name: 'SATB Rehearsal Player', free: false, small: false, pro: true, enterprise: true },
      { name: 'Part Certification', free: false, small: false, pro: true, enterprise: true },
      { name: 'Wearable Health Insights', free: false, small: false, pro: false, enterprise: true }
    ]
  },
  {
    name: 'Assessments',
    icon: BookOpen,
    features: [
      { name: 'Spiritual Gift Assessments', free: false, small: true, pro: true, enterprise: true },
      { name: 'Team Health Assessments', free: false, small: true, pro: 'Advanced', enterprise: 'Advanced' },
      { name: 'Leadership Assessments', free: false, small: false, pro: true, enterprise: true }
    ]
  },
  {
    name: 'Administration',
    icon: Layers,
    features: [
      { name: 'Multi-Campus', free: false, small: false, pro: false, enterprise: true },
      { name: 'Regional/Conference Reporting', free: false, small: false, pro: false, enterprise: true },
      { name: 'API Access', free: false, small: false, pro: false, enterprise: true },
      { name: 'SSO Integration', free: false, small: false, pro: false, enterprise: true },
      { name: 'Custom Integrations', free: false, small: false, pro: false, enterprise: true }
    ]
  }
];

// FAQ data
const faqs = [
  {
    q: 'Can I try before buying?',
    a: 'Yes — the Free plan gives you 30 days of full access with no credit card required. Start today, explore all core features, and upgrade when you\'re ready. We don\'t believe in bait-and-switch trials.'
  },
  {
    q: 'What happens after the free trial?',
    a: 'After 30 days, your account moves to a limited free tier (5 team members, 50 songs, no AI agents). You keep all your data. Upgrade to any paid plan at any time to restore full access. We\'ll remind you before the trial ends.'
  },
  {
    q: 'Do you offer church discounts?',
    a: 'We offer 20% off all plans with annual billing — that\'s the primary discount structure. For qualifying non-profits, multi-site organizations, and denominational networks, contact our team for custom pricing. We believe great tools shouldn\'t be out of reach for smaller congregations.'
  },
  {
    q: 'Can I switch plans?',
    a: 'Absolutely. Upgrade or downgrade at any time. Changes take effect immediately, and we\'ll prorate your billing accordingly. No penalty fees, no lock-in periods. Downgrading to Free preserves all your data.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards via Stripe. For Enterprise plans, we also offer invoicing and ACH payments.'
  },
  {
    q: 'Is there a contract or commitment?',
    a: 'No contracts, no commitments. You can cancel anytime. For annual plans, we offer prorated refunds within the first 30 days.'
  },
  {
    q: 'Do you help with data migration?',
    a: 'Yes! We provide AI-powered data migration tools + human assistance for all paid plans. Our team will help you import from Planning Center, Breeze, or any other ChMS.'
  },
  {
    q: 'What\'s included in the Worship Collective?',
    a: 'The Worship Collective is a separate premium program for individual worship leaders seeking credentialing. It\'s $49.99/mo (billed annually) or $64.99/mo (billed monthly) and includes coaching cohorts, masterclasses, and certification.'
  }
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { openBetaModal } = useMarketing();

  const getPrice = (tier: typeof pricingTiers[0]) => {
    if (billingPeriod === 'annual') return tier.annualPrice;
    return tier.price;
  };

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-blue-600 mx-auto" />;
    } else if (value === false) {
      return <X className="w-5 h-5 text-slate-300 mx-auto" />;
    } else {
      return <span className="text-sm text-slate-600">{value}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased">
      {/* Navigation */}
      <MarketingNav />

      {/* Hero - Tech-forward dark gradient  */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Simple,{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">transparent pricing</span>
          </h1>
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto mb-8">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>

          {/* Billing toggle */}
          <div className="flex flex-col items-center gap-2">
            <div className="inline-flex items-center gap-4 p-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  billingPeriod === 'monthly' ? 'bg-white text-slate-900 shadow' : 'text-white/80 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  billingPeriod === 'annual' ? 'bg-white text-slate-900 shadow' : 'text-white/80 hover:text-white'
                }`}
              >
                Annual
              </button>
            </div>
            {billingPeriod === 'annual' && (
              <p className="text-xs text-emerald-300 font-medium">Save 20% with annual billing</p>
            )}
            {billingPeriod === 'monthly' && (
              <p className="text-xs text-cyan-300 font-medium">Switch to annual to save 20%</p>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-16 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl border p-6 ${
                  tier.highlight ? 'border-blue-600 shadow-xl shadow-blue-100' : 'border-slate-200'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-4xl font-bold text-slate-900">{getPrice(tier)}</span>
                    {tier.period && <span className="text-slate-500">{tier.period}</span>}
                  </div>
                  {billingPeriod === 'monthly' && tier.annualPrice !== '$0' && tier.annualPrice !== 'Custom' && tier.price !== tier.annualPrice && (
                    <p className="text-sm text-blue-600 mt-1">
                      Save 20% — {tier.annualPrice}/mo billed annually
                    </p>
                  )}
                  {billingPeriod === 'annual' && tier.price !== tier.annualPrice && tier.annualPrice !== '$0' && (
                    <p className="text-sm text-emerald-600 mt-1 font-medium">
                      20% annual discount applied
                    </p>
                  )}
                  <p className="text-sm text-slate-500 mt-2">{tier.description}</p>
                  <p className="text-sm font-medium text-slate-700 mt-2">{tier.teamSize}</p>
                </div>

                <Link
                  href={tier.cta === 'Contact Sales' ? '/contact' : '/signup'}
                  className={`block w-full py-3 text-center font-semibold rounded-lg transition-colors mb-6 ${
                    tier.highlight
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tier.cta}
                </Link>

                <div className="space-y-3">
                  {Object.entries(tier.features).slice(0, 8).map(([feature, value]) => (
                    <div key={feature} className="flex items-center gap-2">
                      {value === true ? (
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      ) : value === false ? (
                        <X className="w-4 h-4 text-slate-300 flex-shrink-0" />
                      ) : (
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${value === false ? 'text-slate-400' : 'text-slate-600'}`}>
                        {typeof value === 'string' ? `${feature} ${value}` : feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worship Collective Callout */}
      <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50 border-y border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900">The Worship Collective</h3>
                  <span className="px-2 py-0.5 bg-amber-200 text-amber-800 text-xs font-semibold rounded-full">Individual Premium</span>
                </div>
                <p className="text-slate-600 text-sm">
                  Elite credentialing program for individual worship leaders. Coaching cohorts, masterclasses, and certifications.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-slate-600">Starting at</span>
                <span className="block text-2xl font-bold text-slate-900">$49.99/mo</span>
              </div>
              <Link
                href="/collective"
                className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Feature Comparison */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Detailed Feature Comparison</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            See exactly what's included in each plan
          </p>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-5 bg-slate-100 border-b border-slate-200">
              <div className="p-4 font-semibold text-slate-700">Feature</div>
              <div className="p-4 text-center font-semibold text-slate-700">Free</div>
              <div className="p-4 text-center font-semibold text-slate-700">Small Church</div>
              <div className="p-4 text-center font-semibold text-blue-700 bg-blue-50">Pro</div>
              <div className="p-4 text-center font-semibold text-slate-700">Enterprise</div>
            </div>

            {/* Feature categories */}
            {featureCategories.map((category) => (
              <div key={category.name}>
                {/* Category header */}
                <div className="grid grid-cols-5 bg-slate-50 border-b border-slate-200">
                  <div className="p-3 flex items-center gap-2 font-semibold text-slate-900">
                    <category.icon className="w-4 h-4 text-blue-600" />
                    {category.name}
                  </div>
                  <div className="p-3"></div>
                  <div className="p-3"></div>
                  <div className="p-3 bg-blue-50/50"></div>
                  <div className="p-3"></div>
                </div>

                {/* Features */}
                {featureCategories.map((category) => (
                  <div key={category.name}>
                    {/* Features */}
                    {category.features.map((feature, i) => (
                      <div key={i} className="grid grid-cols-5 border-b border-slate-100 hover:bg-slate-50">
                        <div className="p-3 text-sm text-slate-600 pl-10">{feature.name}</div>
                        <div className="p-3 text-center">{renderFeatureValue(feature.free)}</div>
                        <div className="p-3 text-center">{renderFeatureValue(feature.small)}</div>
                        <div className="p-3 text-center bg-blue-50/30">{renderFeatureValue(feature.pro)}</div>
                        <div className="p-3 text-center">{renderFeatureValue(feature.enterprise)}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-center mb-12">
            Have questions? We've got answers.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-medium text-slate-900">{faq.q}</span>
                  <HelpCircle className={`w-5 h-5 text-slate-400 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === i && (
                  <div className="px-4 pb-4 text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join our beta program and be among the first to experience the future of church management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBetaModal}
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 text-lg"
            >
              Sign Up for Beta
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg border border-blue-500 hover:bg-teal-800 text-lg"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src="/logos/ministry-motion-text-logo-white.svg" alt="Ministry Motion" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-slate-500">
              © 2026 Ministry Motion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
