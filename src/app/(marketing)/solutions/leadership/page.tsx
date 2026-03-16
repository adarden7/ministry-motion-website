'use client';

import Link from 'next/link';
import {
  TrendingUp,
  Users,
  Globe,
  Heart,
  Shield,
  Check,
  Star,
  ArrowRight,
  BarChart3,
  Crown,
  Layers,
  Zap
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

// Top 5 use cases for Church Leadership (Pastors, Elders, Denominational Leaders)
const useCases = [
  {
    number: '01',
    icon: TrendingUp,
    color: 'emerald',
    title: 'Prove Discipleship Drives Giving',
    subtitle: 'Journey stage → giving correlation: Serve-stage members give 2.3x more on average',
    description:
      'Ministry Motion tracks the correlation between discipleship depth and giving behavior across your congregation. The data is clear: members who reach the Serve stage of the discipleship journey give significantly more than Connect-stage attendees. Leadership can now present this correlation in board meetings with actual data.',
    bullets: [
      'Journey stage cross-referenced with integrated giving data automatically',
      'Discipleship ROI report: dollar per discipleship investment across all programs',
      'Cohort analysis: giving behavior tracked as members advance through the pipeline',
      'Board-ready visualizations: export reports formatted for leadership presentations',
    ],
    stat: '2.3×',
    statLabel: 'average giving multiplier for Serve-stage vs. Connect-stage members',
  },
  {
    number: '02',
    icon: Crown,
    color: 'amber',
    title: 'Leadership Pipeline Visibility',
    subtitle: 'Succession Planner Agent: readiness scores, rankings, and pipeline gaps',
    description:
      'The Succession Planner Agent continuously evaluates every ministry leader and volunteer for leadership readiness—scoring course completion, serving tenure, peer feedback signals, and spiritual maturity indicators. Leadership always knows who is ready for the next role before a vacancy opens.',
    bullets: [
      'Readiness scores calculated for every ministry leader and senior volunteer',
      'Pipeline gap detection: identifies roles with no qualified successors',
      'Development pathway recommendations for high-potential leaders',
      'Alert when a high-readiness leader has been overlooked for promotion',
    ],
    stat: '360°',
    statLabel: 'leadership readiness view: tenure, courses, and peer signals',
  },
  {
    number: '03',
    icon: Globe,
    color: 'blue',
    title: 'Denomination-Wide Analytics',
    subtitle: 'Cross-church BigQuery rollup for regional and conference leadership',
    description:
      'Enterprise-tier churches and denominations get access to cross-church BigQuery analytics. Regional directors and conference leaders can view aggregated health scores, discipleship pipeline metrics, and giving trends across all affiliated congregations—with church-level drill-down capability.',
    bullets: [
      'Regional health dashboards aggregating data from all affiliated churches',
      'Journey pipeline comparison: see which churches have stronger discipleship rates',
      'Giving trend rollup: denomination-wide generosity health at a glance',
      'Benchmark reports: how does each church compare to the regional average?',
    ],
    stat: 'Multi-church',
    statLabel: 'cross-church BigQuery rollup for denominational leadership',
  },
  {
    number: '04',
    icon: Heart,
    color: 'rose',
    title: 'Spiritual Health Reporting',
    subtitle: '5-dimension quantified health vs. financial-only reporting',
    description:
      'Ministry Motion moves church leadership beyond attendance counts and offering totals. The 5-dimension Church Health Radar quantifies discipleship depth, volunteer engagement, community connectedness, leadership pipeline strength, and giving health—giving leadership a complete picture of congregation vitality.',
    bullets: [
      'Discipleship Depth: percentage of members advancing through the pipeline',
      'Volunteer Engagement: serving rates and burnout-risk indicators',
      'Community Connectedness: small group participation and communication health',
      'Leadership Pipeline: succession readiness across all ministry areas',
    ],
    stat: '5',
    statLabel: 'dimensions of church health beyond attendance and offerings',
  },
  {
    number: '05',
    icon: Shield,
    color: 'violet',
    title: 'AI Conflict Resolution',
    subtitle: 'Negotiator Agent with Matthew 18 framework and structured mediation',
    description:
      'The Negotiator Agent guides leadership through conflict resolution using a structured Matthew 18 framework. When interpersonal conflict arises in ministry teams, the agent helps facilitate conversation, documents the process, and recommends escalation paths—keeping leadership informed without overreaching.',
    bullets: [
      'Matthew 18 framework: structured step-by-step conflict resolution process',
      'Communication context analysis: helps identify root causes behind surface conflicts',
      'Mediation documentation: creates a record of the resolution process',
      'Escalation recommendations: when to involve elders vs. external counseling',
    ],
    stat: 'Matt 18',
    statLabel: 'biblical framework powering the Negotiator Agent',
  },
];

const testimonials = [
  {
    quote:
      "For the first time, I can walk into a board meeting and show the direct relationship between discipleship investment and giving growth. The data made a skeptical finance committee into discipleship advocates.",
    name: 'Senior Pastor',
    church: 'Multi-site church, 2,400 members, Southeast US',
  },
  {
    quote:
      'The Succession Planner identified a leader we had completely overlooked. She had the highest readiness score in our entire worship ministry. We promoted her within 60 days.',
    name: 'Executive Pastor',
    church: 'Non-denominational church, Great Plains region',
  },
];

export default function LeadershipPage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm mb-6">
              <Crown className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300">Solutions for Church Leadership</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
              Lead With{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Kingdom Intelligence
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Pastors, elders, and denominational leaders deserve more than attendance reports.
              Ministry Motion provides discipleship data, leadership pipeline visibility,
              and spiritual health intelligence that drives strategic decisions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openBetaModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all text-lg shadow-lg shadow-amber-500/25"
              >
                Request Demo
              </button>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-8 py-4 bg-background/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-slate-900/20 transition-all text-lg"
              >
                View Pricing
              </Link>
            </div>

            <p className="text-sm text-slate-500 mt-4">
              Enterprise and Pro plans · PCO integration included · Implementation support available
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '2.3×', label: 'Giving multiplier: Serve vs. Connect stage' },
              { value: '5', label: 'Dimensions of church health tracked' },
              { value: 'Matt 18', label: 'Biblical conflict resolution framework' },
              { value: 'Multi-church', label: 'Cross-church analytics for denominations' },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-amber-400">{item.value}</div>
                <div className="text-xs text-slate-400 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Top 5 Use Cases</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              Strategic Intelligence for Church Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data-driven discipleship leadership that moves beyond lagging indicators
              to real-time insights into congregation health.
            </p>
          </div>

          <div className="space-y-20">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-mono text-muted-foreground">{uc.number}</span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          uc.color === 'emerald'
                            ? 'bg-blue-500/20 dark:bg-blue-900/30'
                            : uc.color === 'amber'
                            ? 'bg-amber-500/20 dark:bg-amber-900/30'
                            : uc.color === 'blue'
                            ? 'bg-blue-500/20 dark:bg-blue-900/30'
                            : uc.color === 'rose'
                            ? 'bg-rose-500/20 dark:bg-rose-900/30'
                            : 'bg-violet-500/20 dark:bg-violet-900/30'
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            uc.color === 'emerald'
                              ? 'text-blue-400'
                              : uc.color === 'amber'
                              ? 'text-amber-600'
                              : uc.color === 'blue'
                              ? 'text-blue-600'
                              : uc.color === 'rose'
                              ? 'text-rose-600'
                              : 'text-violet-600'
                          }`}
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{uc.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-4">{uc.subtitle}</p>
                    <p className="text-base text-muted-foreground mb-6 leading-relaxed">{uc.description}</p>
                    <ul className="space-y-3">
                      {uc.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${isEven ? '' : 'lg:order-1'} flex items-center justify-center`}>
                    <div className="bg-muted rounded-2xl border border-border p-10 text-center w-full max-w-sm">
                      <div
                        className={`text-5xl font-bold mb-3 ${
                          uc.color === 'emerald'
                            ? 'text-blue-400'
                            : uc.color === 'amber'
                            ? 'text-amber-600'
                            : uc.color === 'blue'
                            ? 'text-blue-600'
                            : uc.color === 'rose'
                            ? 'text-rose-600'
                            : 'text-violet-600'
                        }`}
                      >
                        {uc.stat}
                      </div>
                      <div className="text-muted-foreground text-sm">{uc.statLabel}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Early Feedback</span>
            <h2 className="text-2xl font-bold text-foreground mt-2">What Pastors and Executive Leaders Are Saying</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-background rounded-2xl border border-border p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.church}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Lead with data. Grow with purpose.
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join our beta program and get early access to discipleship-to-giving correlation reports,
            the Succession Planner Agent, and the 5-dimension Church Health Radar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBetaModal}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all text-lg"
            >
              Request a Demo
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 bg-background/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-slate-900/20 transition-all text-lg flex items-center justify-center gap-2"
            >
              Enterprise Pricing <ArrowRight className="w-4 h-4" />
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
              <Link href="/solutions/worship-directors" className="hover:text-white transition-colors">Worship Directors</Link>
              <Link href="/solutions/ministries-directors" className="hover:text-white transition-colors">Ministry Directors</Link>
              <Link href="/solutions/church-admins" className="hover:text-white transition-colors">Church Admins</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            </nav>
            <p className="text-sm text-slate-500">© 2026 Ministry Motion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
