'use client';

import Link from 'next/link';
import {
  ArrowRight,
  TrendingUp,
  Users,
  BarChart3,
  Clock,
  Star,
  CheckCircle,
  Building2,
  Heart
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

// Placeholder case study cards
const placeholderCaseStudies = [
  {
    churchName: 'Grace Community Church',
    location: 'Southeast United States',
    size: '850 members',
    denomination: 'Non-denominational',
    type: 'Early Beta Church',
    metrics: [
      { label: 'Church Health Score improvement', value: '+34%', icon: BarChart3 },
      { label: 'Volunteer engagement increase', value: '+47%', icon: Users },
      { label: 'Monthly SaaS cost reduction', value: '-$680/mo', icon: TrendingUp },
    ],
    highlight:
      'Consolidated from 5 separate tools to Ministry Motion Pro within 60 days of joining the beta program.',
    status: 'coming-soon' as const,
  },
  {
    churchName: 'Cornerstone Worship Center',
    location: 'Midwest United States',
    size: '350 members · Active worship team of 28',
    denomination: 'Baptist',
    type: 'Worship-Focused Church',
    metrics: [
      { label: 'Team preparation rate improvement', value: '+61%', icon: Star },
      { label: 'Average rehearsal efficiency gain', value: '+40%', icon: Clock },
      { label: 'God Quotient score on AI-reviewed sets', value: '92 avg', icon: Heart },
    ],
    highlight:
      'Adopted AI rehearsal track generation and Sing-Along practice tracking for their 28-member worship team.',
    status: 'coming-soon' as const,
  },
  {
    churchName: 'New Life Fellowship',
    location: 'Pacific Northwest United States',
    size: '1,200 members · Multi-site (3 campuses)',
    denomination: 'Assemblies of God',
    type: 'Multi-Site Enterprise Church',
    metrics: [
      { label: 'Members advanced in discipleship pipeline', value: '312', icon: TrendingUp },
      { label: 'Leadership pipeline gap reduction', value: '-8 roles', icon: Users },
      { label: 'Cross-campus data reconciliation time', value: 'Eliminated', icon: BarChart3 },
    ],
    highlight:
      'Used cross-church BigQuery analytics and the Succession Planner Agent to unify three campuses under one platform.',
    status: 'coming-soon' as const,
  },
];

// Key metrics categories for what we measure
const metricCategories = [
  {
    title: 'Discipleship Advancement',
    description: 'Members moving through Connect→Grow→Serve→Go',
    icon: TrendingUp,
    color: 'blue',
  },
  {
    title: 'Team Development',
    description: 'Vocal improvement, course completions, certifications earned',
    icon: Star,
    color: 'amber',
  },
  {
    title: 'Operational Efficiency',
    description: 'Time saved, tools consolidated, admin hours recaptured',
    icon: Clock,
    color: 'emerald',
  },
  {
    title: 'Financial Impact',
    description: 'Giving correlation with journey stage, cost savings from consolidation',
    icon: BarChart3,
    color: 'violet',
  },
  {
    title: 'Volunteer Health',
    description: 'Burnout-risk pattern reduction, engagement scores over time',
    icon: Heart,
    color: 'rose',
  },
  {
    title: 'Leadership Pipeline',
    description: 'Succession readiness scores, roles filled internally vs. externally',
    icon: Users,
    color: 'cyan',
  },
];

export default function CaseStudiesPage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Ministry Motion Case Studies</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-white">
              Real Churches.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Measurable Impact.
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              We are building the most comprehensive collection of discipleship impact data in church technology.
              Beta churches are generating the first results. Case studies are in progress.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-300">
                Full case studies publishing Q3 2026 as beta data matures
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Case Study Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-3">Beta Church Results in Progress</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These churches joined our beta program early. Their full case studies—with verified data,
              direct quotes, and before/after analysis—will publish as their results mature.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {placeholderCaseStudies.map((cs, i) => (
              <div
                key={i}
                className="bg-background rounded-2xl border border-border p-6 flex flex-col relative overflow-hidden"
              >
                {/* Coming Soon overlay badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 text-xs font-medium rounded-md">
                    In Progress
                  </span>
                </div>

                {/* Church info */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{cs.churchName}</h3>
                  <p className="text-muted-foreground text-sm">{cs.location}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-md">{cs.size}</span>
                    <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-md">{cs.denomination}</span>
                  </div>
                </div>

                {/* Type badge */}
                <div className="mb-4">
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 text-xs font-medium rounded-md">
                    {cs.type}
                  </span>
                </div>

                {/* Metrics */}
                <div className="space-y-3 mb-6">
                  {cs.metrics.map((metric, j) => {
                    const MetricIcon = metric.icon;
                    return (
                      <div key={j} className="flex items-center gap-3 bg-muted rounded-xl p-3">
                        <MetricIcon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                        <div className="font-bold text-foreground text-sm">{metric.value}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Highlight */}
                <p className="text-muted-foreground text-sm italic leading-relaxed mb-6 flex-1">
                  "{cs.highlight}"
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Full case study publishing Q3 2026</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Measure Section */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-3">What Our Case Studies Will Measure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unlike typical church software case studies that measure user adoption, Ministry Motion
              case studies measure actual discipleship, health, and financial outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {metricCategories.map((cat, i) => {
              const Icon = cat.icon;
              const colorMap: Record<string, string> = {
                blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
                amber: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
                emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
                violet: 'bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400',
                rose: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
                cyan: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400',
              };
              return (
                <div key={i} className="bg-background rounded-2xl border border-border p-6 flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colorMap[cat.color]}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{cat.title}</h3>
                    <p className="text-muted-foreground text-sm">{cat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Become a Case Study CTA */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Become a Case Study Church</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Your church's transformation could inspire thousands
          </h2>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Beta churches that join now and allow their anonymized data to be featured in our case studies
            receive permanent platform discounts and co-marketing opportunities.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10 max-w-2xl mx-auto">
            <h3 className="text-white font-semibold mb-4 text-left">Case Study Partner Benefits</h3>
            <ul className="space-y-3 text-left">
              {[
                'Priority beta access to all new features before general release',
                'Dedicated implementation specialist for onboarding',
                'Permanent 25% platform discount in exchange for data participation',
                'Co-marketing in case study publication (with your approval)',
                'Direct product feedback channel to our engineering team',
                'Featured in denomination-specific resource distribution',
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBetaModal}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all text-lg"
            >
              Join Beta as Case Study Partner
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all text-lg flex items-center justify-center gap-2"
            >
              View Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src="/logos/ministry-motion-text-logo-white.svg" alt="Ministry Motion" className="h-8 w-auto" />
            <nav className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              <Link href="/solutions/praise-leaders" className="hover:text-white transition-colors">Solutions</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            </nav>
            <p className="text-sm text-slate-500">© 2026 Ministry Motion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
