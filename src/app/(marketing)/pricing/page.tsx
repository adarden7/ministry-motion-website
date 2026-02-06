'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ChevronDown } from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Essential tools to get started',
    cta: 'Start Free',
    highlight: false,
    members: '5 team members',
    keyFeatures: [
      'Service planning',
      'Basic scheduling',
      'Song library (50 songs)',
      'Mobile apps',
    ],
  },
  {
    name: 'Pro',
    price: '$249',
    period: '/month',
    description: 'Full transformation toolkit',
    cta: 'Start Free Trial',
    highlight: true,
    members: '100 team members',
    keyFeatures: [
      'AI vocal coaching',
      'Service analytics',
      'All 18 learning courses',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    cta: 'Contact Sales',
    highlight: false,
    members: 'Unlimited members',
    keyFeatures: [
      'Multi-campus support',
      'SSO integration',
      'Dedicated account manager',
      'Custom integrations',
    ],
  },
];

const detailSections = [
  {
    title: 'Team & Planning',
    features: [
      { name: 'Team members', free: '5', pro: '100', enterprise: 'Unlimited' },
      { name: 'Church members', free: '—', pro: '1,000', enterprise: 'Unlimited' },
      { name: 'Service planning', free: true, pro: true, enterprise: true },
      { name: 'Volunteer scheduling', free: 'Basic', pro: 'Advanced', enterprise: 'Advanced + AI' },
    ],
  },
  {
    title: 'AI & Intelligence',
    features: [
      { name: 'AI vocal coaching', free: false, pro: true, enterprise: true },
      { name: 'Service analytics', free: false, pro: true, enterprise: true },
      { name: 'AI song recommendations', free: false, pro: true, enterprise: true },
      { name: 'Custom AI agents', free: false, pro: false, enterprise: true },
    ],
  },
  {
    title: 'Learning & Development',
    features: [
      { name: 'Learning courses', free: '3 basic', pro: 'All 18', enterprise: 'All + custom' },
      { name: 'Certifications', free: false, pro: true, enterprise: true },
      { name: 'Study groups', free: false, pro: true, enterprise: true },
    ],
  },
  {
    title: 'Administration',
    features: [
      { name: 'Multi-campus', free: false, pro: false, enterprise: true },
      { name: 'SSO integration', free: false, pro: false, enterprise: true },
      { name: 'API access', free: false, pro: false, enterprise: true },
      { name: 'Custom integrations', free: false, pro: false, enterprise: true },
    ],
  },
];

const faqs = [
  { q: 'Can I try it first?', a: 'Yes. Start free forever, or try Pro with a 14-day free trial. No credit card required.' },
  { q: 'Can I change plans?', a: 'Anytime. Upgrades take effect immediately.' },
  { q: 'Do you offer annual billing?', a: 'Yes. Pay annually and save 20%.' },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { openBetaModal } = useMarketing();

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  const getPrice = (basePrice: string) => {
    if (basePrice === '$0' || basePrice === 'Custom') return basePrice;
    const numPrice = parseInt(basePrice.replace('$', ''));
    return billingPeriod === 'annual' ? `$${Math.round(numPrice * 0.8)}` : basePrice;
  };

  const renderValue = (value: boolean | string) => {
    if (value === true) return <Check className="w-4 h-4 text-emerald-400 mx-auto" />;
    if (value === false) return <span className="text-white/20">—</span>;
    return <span className="text-white/60 text-sm">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6"
          >
            Simple pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/50 mb-10"
          >
            Start free. Upgrade when you're ready.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10"
          >
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                billingPeriod === 'monthly' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                billingPeriod === 'annual' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              Annual
              <span className="ml-2 px-2 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 rounded-full">
                -20%
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative p-8 rounded-2xl ${
                  tier.highlight
                    ? 'bg-white text-black'
                    : 'bg-white/[0.03] border border-white/[0.06]'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-violet-500 text-white text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className={`text-xl font-semibold mb-2 ${tier.highlight ? 'text-black' : 'text-white'}`}>
                  {tier.name}
                </h3>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`text-4xl font-semibold ${tier.highlight ? 'text-black' : 'text-white'}`}>
                    {getPrice(tier.price)}
                  </span>
                  {tier.period && (
                    <span className={tier.highlight ? 'text-black/50' : 'text-white/50'}>
                      {tier.period}
                    </span>
                  )}
                </div>

                <p className={`text-sm mb-2 ${tier.highlight ? 'text-black/50' : 'text-white/40'}`}>
                  {tier.members}
                </p>

                <p className={`text-sm mb-6 ${tier.highlight ? 'text-black/60' : 'text-white/50'}`}>
                  {tier.description}
                </p>

                {tier.cta === 'Contact Sales' ? (
                  <Link
                    href="/contact"
                    className="block w-full py-3 text-center font-medium rounded-full transition-all duration-200 mb-6 bg-white/10 text-white hover:bg-white/15"
                  >
                    {tier.cta}
                  </Link>
                ) : (
                  <button
                    onClick={openBetaModal}
                    className={`block w-full py-3 text-center font-medium rounded-full transition-all duration-200 mb-6 ${
                      tier.highlight
                        ? 'bg-black text-white hover:bg-black/90'
                        : 'bg-white text-black hover:bg-white/90'
                    }`}
                  >
                    {tier.cta}
                  </button>
                )}

                <div className={`text-xs font-medium uppercase tracking-wider mb-3 ${tier.highlight ? 'text-black/40' : 'text-white/30'}`}>
                  {tier.name === 'Free' ? 'Includes' : tier.name === 'Pro' ? 'Everything in Free, plus' : 'Everything in Pro, plus'}
                </div>

                <ul className="space-y-2">
                  {tier.keyFeatures.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className={`w-4 h-4 flex-shrink-0 ${tier.highlight ? 'text-black/40' : 'text-white/40'}`} />
                      <span className={`text-sm ${tier.highlight ? 'text-black/70' : 'text-white/60'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison - Collapsible */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Compare plans in detail
          </h2>

          <div className="space-y-2">
            {detailSections.map((section) => (
              <div key={section.title} className="rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-medium text-white">{section.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/40 transition-transform duration-200 ${
                      expandedSections.includes(section.title) ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedSections.includes(section.title) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        {/* Header row */}
                        <div className="grid grid-cols-4 gap-4 pb-3 mb-3 border-b border-white/[0.06]">
                          <div className="text-sm text-white/40">Feature</div>
                          <div className="text-sm text-white/40 text-center">Free</div>
                          <div className="text-sm text-white/40 text-center">Pro</div>
                          <div className="text-sm text-white/40 text-center">Enterprise</div>
                        </div>

                        {/* Feature rows */}
                        {section.features.map((feature, i) => (
                          <div key={i} className="grid grid-cols-4 gap-4 py-2">
                            <div className="text-sm text-white/70">{feature.name}</div>
                            <div className="text-center">{renderValue(feature.free)}</div>
                            <div className="text-center">{renderValue(feature.pro)}</div>
                            <div className="text-center">{renderValue(feature.enterprise)}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-medium text-white">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-white/40 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 text-white/50 text-sm overflow-hidden"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-white/50 mb-10">
            Join the early access program today.
          </p>
          <button
            onClick={openBetaModal}
            className="group px-8 py-4 bg-white text-black font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <span className="flex items-center gap-2">
              Request Early Access
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white/40 text-sm">
              © 2025 MinistryMotion. All rights reserved.
            </div>
            <nav className="flex items-center gap-8 text-sm text-white/40">
              <Link href="/products" className="hover:text-white/70 transition-colors">Features</Link>
              <Link href="/pricing" className="hover:text-white/70 transition-colors">Pricing</Link>
              <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
              <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
