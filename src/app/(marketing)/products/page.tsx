'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mic2,
  Calendar,
  BarChart3,
  BookOpen,
  Users,
  Music,
  Video,
  Brain,
  Shield,
  Sparkles,
  Check
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

type Tier = 'free' | 'pro' | 'enterprise';

interface Feature {
  title: string;
  description: string;
  icon: typeof Mic2;
  href: string;
  tiers: Tier[];
  badge?: string;
}

interface FeatureGroup {
  title: string;
  subtitle: string;
  gradient: string;
  features: Feature[];
}

const featureGroups: FeatureGroup[] = [
  {
    title: 'The Agent Council',
    subtitle: '15 specialized AI agents working 24/7',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      {
        title: 'The Shepherd',
        description: 'Monitors volunteer load and automatically flags burnout risks.',
        icon: Users,
        href: '/products/agent-council',
        tiers: ['pro', 'enterprise'],
      },
      {
        title: 'The Liturgist',
        description: 'Plans services and recommends songs based on your unique theology.',
        icon: Sparkles,
        href: '/products/agent-council',
        tiers: ['free', 'pro', 'enterprise'],
        badge: 'AI Powered',
      },
      {
        title: 'The Matchmaker',
        description: 'Instantly correlates spiritual gifts with serving opportunities.',
        icon: Brain,
        href: '/products/agent-council',
        tiers: ['pro', 'enterprise'],
      },
      {
        title: 'The Succession Planner',
        description: 'Builds a multi-generational leadership bench continuously.',
        icon: Shield,
        href: '/products/agent-council',
        tiers: ['enterprise'],
      },
    ],
  },
  {
    title: 'Discipleship Intelligence',
    subtitle: 'Track the spiritual journey: Connect → Grow → Serve → Go',
    gradient: 'from-violet-500 to-purple-500',
    features: [
      {
        title: 'Simple Church Pipeline',
        description: 'Organize and map every member to the 4 stages of spiritual growth.',
        icon: BookOpen,
        href: '/products/discipleship',
        tiers: ['free', 'pro', 'enterprise'],
      },
      {
        title: 'Vector Matching',
        description: 'AI correlates 768 dimensions of personality, gifts, and history.',
        icon: Sparkles,
        href: '/products/discipleship',
        tiers: ['pro', 'enterprise'],
        badge: 'Industry First',
      },
      {
        title: 'Automated Nudging',
        description: 'AI prompts members to take their absolute next best spiritual step.',
        icon: ArrowRight,
        href: '/products/discipleship',
        tiers: ['pro', 'enterprise'],
      },
      {
        title: 'Retention Analysis',
        description: 'Correlation data between discipleship activity and church retention.',
        icon: BarChart3,
        href: '/products/discipleship',
        tiers: ['pro', 'enterprise'],
      },
    ],
  },
  {
    title: 'Vocal Sandbox',
    subtitle: 'Gamified, biometric vocal training',
    gradient: 'from-emerald-500 to-teal-500',
    features: [
      {
        title: 'Sing-Along Player',
        description: 'Yousician-style real-time pitch tracking for your Sunday setlist.',
        icon: Mic2,
        href: '/products/vocal-coaching',
        tiers: ['pro', 'enterprise'],
      },
      {
        title: 'Instant SATB Generation',
        description: 'AI isolates any YouTube or MP3 file into custom rehearsal tracks.',
        icon: Music,
        href: '/products/vocal-coaching',
        tiers: ['pro', 'enterprise'],
      },
      {
        title: 'Biometric CPPS Tracking',
        description: 'Medical-grade vocal tracking prevents nodules and vocal strain.',
        icon: Video,
        href: '/products/vocal-coaching',
        tiers: ['enterprise'],
      },
      {
        title: 'Ensemble Blend Ratio',
        description: 'AI trains singers to suppress their solo voices to achieve a pure choir blend.',
        icon: Users,
        href: '/products/vocal-coaching',
        tiers: ['pro', 'enterprise'],
      },
    ],
  },
  {
    title: 'Service Analytics',
    subtitle: 'Know what actually happened in your services',
    gradient: 'from-rose-500 to-orange-500',
    features: [
      {
        title: 'AI Video Analysis',
        description: 'Upload recordings. AI automatically segments and analyzes every moment.',
        icon: BarChart3,
        href: '/products/analytics',
        tiers: ['pro', 'enterprise'],
        badge: 'Industry First',
      },
      {
        title: 'Voice Identification',
        description: 'Automatically recognize who sang what and track their performance.',
        icon: Brain,
        href: '/products/analytics',
        tiers: ['pro', 'enterprise'],
      },
      {
        title: 'Theological Alignment Scoring',
        description: 'See exactly how well your service aligned with your stated theme.',
        icon: Calendar,
        href: '/products/analytics',
        tiers: ['pro', 'enterprise'],
      },
      {
        title: 'Transition Quality Analysis',
        description: 'Identify where service flow was broken or dead-spots occurred.',
        icon: Calendar,
        href: '/products/analytics',
        tiers: ['pro', 'enterprise'],
      },
    ],
  },
];

const tierLabels: Record<Tier, { label: string; color: string }> = {
  free: { label: 'Free', color: 'bg-white/10 text-white/60' },
  pro: { label: 'Pro', color: 'bg-blue-500/20 text-blue-400' },
  enterprise: { label: 'Enterprise', color: 'bg-violet-500/20 text-violet-400' },
};

export default function ProductsPage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6"
          >
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              transform your ministry
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/50 max-w-2xl mx-auto mb-10"
          >
            From the 15-AI Agent Council to deep discipleship tracking, every tool designed to help your people grow.
          </motion.p>

          {/* Tier Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-6 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.06]"
          >
            <span className="text-sm text-white/40">Available in:</span>
            {Object.entries(tierLabels).map(([key, { label, color }]) => (
              <span key={key} className={`px-3 py-1 text-xs font-medium rounded-full ${color}`}>
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Groups */}
      {featureGroups.map((group, groupIndex) => (
        <section key={group.title} className="py-20 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${group.gradient}`} />
                <div>
                  <h2 className="text-2xl font-semibold text-white">{group.title}</h2>
                  <p className="text-white/50">{group.subtitle}</p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {group.features.map((feature, featureIndex) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: featureIndex * 0.05 }}
                >
                  <Link
                    href={feature.href}
                    className="group block h-full p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${group.gradient} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className="w-5 h-5 text-white/80" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="text-base font-medium text-white group-hover:text-white/90">
                            {feature.title}
                          </h3>
                          {feature.badge && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-amber-500/20 text-amber-400 rounded-full">
                              {feature.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-white/40 mb-3 leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="flex items-center gap-2">
                          {feature.tiers.map((tier) => (
                            <span
                              key={tier}
                              className={`px-2 py-0.5 text-xs font-medium rounded ${tierLabels[tier].color}`}
                            >
                              {tierLabels[tier].label}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-all group-hover:translate-x-1 flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Preview */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold mb-4">Choose your plan</h2>
            <p className="text-white/50">Start free. Upgrade when you're ready.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: 'Free', price: '$0', period: 'forever', features: ['5 team members', 'Basic planning', '50 songs', 'Mobile apps'] },
              { name: 'Pro', price: '$249', period: '/month', features: ['100 team members', 'AI vocal coaching', 'Service analytics', 'All 18 courses'], highlight: true },
              { name: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited members', 'Multi-campus', 'SSO integration', 'Dedicated support'] },
            ].map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-xl ${
                  tier.highlight
                    ? 'bg-white text-black md:col-span-2'
                    : 'bg-white/[0.02] border border-white/[0.06]'
                }`}
              >
                <h3 className={`text-lg font-semibold mb-1 ${tier.highlight ? 'text-black' : 'text-white'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-3xl font-semibold ${tier.highlight ? 'text-black' : 'text-white'}`}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={tier.highlight ? 'text-black/50' : 'text-white/50'}>
                      {tier.period}
                    </span>
                  )}
                </div>
                <ul className="space-y-2 mb-4">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className={`w-4 h-4 ${tier.highlight ? 'text-black/40' : 'text-white/40'}`} />
                      <span className={`text-sm ${tier.highlight ? 'text-black/70' : 'text-white/60'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            >
              View full pricing details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
              Ready to see it in action?
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Join the early access program and experience ministry software
              built for transformation.
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
