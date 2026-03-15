'use client';

import Link from 'next/link';
import {
  Database,
  MessageSquare,
  DollarSign,
  BarChart3,
  RefreshCw,
  Check,
  Star,
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

// Cost comparison for "Replace 6 Subscriptions" section
const replacedTools = [
  { name: 'Planning Center', category: 'Service Planning', cost: 99 },
  { name: 'Circle', category: 'Community Platform', cost: 99 },
  { name: 'Yousician / Vocal Coach App', category: 'Vocal Training', cost: 120 },
  { name: 'Coursera / Teachable', category: 'Learning Management', cost: 249 },
  { name: 'Zoom Rooms', category: 'Rehearsal Meetings', cost: 50 },
  { name: 'Pushpay / Tithe.ly', category: 'Giving Platform', cost: 199 },
];

const totalCost = replacedTools.reduce((sum, t) => sum + t.cost, 0);

// Top 5 use cases for Church Admins
const useCases = [
  {
    number: '01',
    icon: Database,
    color: 'blue',
    title: 'One Member Record for Everything',
    subtitle: 'UnifiedMember architecture: single source of truth for all member data',
    description:
      "Every ministry, every interaction, every spiritual gift assessment, and every giving record lives on one member profile. Administrators never reconcile data between disconnected tools—the UnifiedMember architecture ensures every system is reading from the same source.",
    bullets: [
      'Single member record used by all 20 specialized AI agents and all ministry dashboards',
      'Demographics, journey stage, engagement score, and giving history in one profile',
      'No manual data reconciliation between worship planning and member management',
      'Automatic sync when any system updates a member record',
    ],
    stat: '1',
    statLabel: 'member record powering every system in the platform',
  },
  {
    number: '02',
    icon: MessageSquare,
    color: 'emerald',
    title: 'Context-Aware Communications',
    subtitle: 'Journey stage and engagement data personalize every message automatically',
    description:
      'Communications sent through Ministry Motion are automatically personalized based on each recipient\'s journey stage, engagement score, and ministry involvement. A "Serve" stage member receives a different message than a "Connect" stage visitor—with no manual segmentation required.',
    bullets: [
      'Journey stage segmentation: Connect, Grow, Serve, and Go audiences automatically',
      'Engagement-based targeting: reach at-risk members with tailored care messages',
      'Ministry involvement context: messaging reflects each member\'s specific activities',
      'Delivery channels: in-app, SMS, and email from a single composition window',
    ],
    stat: '4',
    statLabel: 'journey stages that auto-segment every communication',
  },
  {
    number: '03',
    icon: DollarSign,
    color: 'violet',
    title: 'Replaces the Core Features of 6 Subscriptions',
    subtitle: `PCO + Circle + Yousician + Coursera + Zoom + Pushpay = $${totalCost}/mo → MM Pro $199/mo`,
    description:
      'Ministry Motion Pro consolidates the core features of six separate SaaS tools—service planning, community, vocal training, learning management, rehearsal meetings, and giving—into one platform. One vendor relationship, one data model, one invoice.',
    bullets: [
      `Planning Center equivalent: service planning, scheduling, and song library`,
      `Circle equivalent: community spaces, discussions, and member profiles`,
      `Vocal coaching tools: AI-powered pitch tracking and development pathways`,
      `Learning management: 18+ courses, 7 labs, certificates`,
    ],
    stat: `$${totalCost - 199}`,
    statLabel: 'potential monthly savings vs. maintaining 6 separate subscriptions',
  },
  {
    number: '04',
    icon: BarChart3,
    color: 'amber',
    title: 'Church Health at a Glance',
    subtitle: '5-dimension radar chart, Journey Sankey, and at-risk member detection',
    description:
      'The Church Health Dashboard presents five dimensions of ministry health—discipleship depth, volunteer engagement, giving health, community connectedness, and leadership pipeline strength—in a single radar chart. The Journey Sankey shows real movement through the discipleship pipeline.',
    bullets: [
      '5-dimension health radar: no single metric tells the full story',
      'Journey Sankey diagram: visualize member flow through Connect→Grow→Serve→Go',
      'At-risk detection: members with declining engagement flagged for pastoral care',
      'Giving correlation: see how discipleship stage maps to generosity trends',
    ],
    stat: '5',
    statLabel: 'health dimensions tracked in the church health radar chart',
  },
  {
    number: '05',
    icon: RefreshCw,
    color: 'rose',
    title: 'Deep Planning Center Integration',
    subtitle: 'Import and sync your PCO data seamlessly into MinistryMotion',
    description:
      'Ministry Motion imports your Planning Center Online data and keeps it synchronized in one direction—PCO is the authoritative source. Members, services, rosters, and song libraries import automatically so administrators spend zero time on manual exports or reconciliation. Full bi-directional sync is on the roadmap.',
    bullets: [
      'PCO member data imports automatically with contact details and roles',
      'Service plans, rosters, and song libraries pull in from Planning Center',
      'Group memberships and giving history included in the import',
      'Historical data migrated at onboarding with zero data loss',
    ],
    stat: 'Seamless',
    statLabel: 'Planning Center data import into MinistryMotion',
  },
];

const testimonials = [
  {
    quote:
      "We were paying for PCO, Circle, Zoom, and two other tools that all had slightly different member data. Consolidating everything into one system saved us money but more importantly saved hours of reconciliation every week.",
    name: 'Church Administrator',
    church: 'Non-denominational church, 800 members, Southeast US',
  },
  {
    quote:
      'The journey-stage communications were a revelation. We used to send the same email blast to everyone. Now new visitors get a different message than our serve-stage volunteers and our response rates jumped significantly.',
    name: 'Communications Director',
    church: 'Baptist congregation, Mid-Atlantic region',
  },
];

export default function ChurchAdminsPage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Solutions for Church Admins</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
              One Platform.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Zero Reconciliation.
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Eliminate the spreadsheet-juggling, tool-switching, and data-reconciliation that consumes
              church administrators. Ministry Motion brings every system under one unified member record.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openBetaModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all text-lg shadow-lg shadow-blue-500/25"
              >
                Start Free Trial
              </button>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all text-lg"
              >
                View Pricing
              </Link>
            </div>

            <p className="text-sm text-slate-500 mt-4">
              30-day free trial · PCO integration included · No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-2">What you may be paying today</h2>
            <p className="text-slate-400 text-sm">Combined cost of tools Ministry Motion Pro replaces the core features of</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {replacedTools.map((tool, i) => (
              <div key={i} className="bg-slate-800 rounded-xl border border-slate-700 p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium text-white text-sm">{tool.name}</div>
                  <div className="text-slate-400 text-xs">{tool.category}</div>
                </div>
                <div className="text-slate-300 font-semibold text-sm">${tool.cost}/mo</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-rose-400">${totalCost}/mo</div>
              <div className="text-slate-400 text-sm">Combined 6-tool cost</div>
            </div>
            <div className="text-2xl text-slate-500 font-light">vs.</div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">$199/mo</div>
              <div className="text-slate-400 text-sm">Ministry Motion Pro</div>
            </div>
            <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <div className="text-emerald-400 font-bold text-xl">${totalCost - 199}/mo potential savings</div>
              <div className="text-slate-400 text-xs">Results vary by church size and configuration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Top 5 Use Cases</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              Everything a Church Admin Needs in One Place
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed to reduce administrative overhead so your team can focus on ministry, not software maintenance.
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
                          uc.color === 'blue'
                            ? 'bg-blue-100 dark:bg-blue-900/30'
                            : uc.color === 'emerald'
                            ? 'bg-emerald-100 dark:bg-emerald-900/30'
                            : uc.color === 'violet'
                            ? 'bg-violet-100 dark:bg-violet-900/30'
                            : uc.color === 'amber'
                            ? 'bg-amber-100 dark:bg-amber-900/30'
                            : 'bg-rose-100 dark:bg-rose-900/30'
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            uc.color === 'blue'
                              ? 'text-blue-600'
                              : uc.color === 'emerald'
                              ? 'text-emerald-600'
                              : uc.color === 'violet'
                              ? 'text-violet-600'
                              : uc.color === 'amber'
                              ? 'text-amber-600'
                              : 'text-rose-600'
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
                          <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${isEven ? '' : 'lg:order-1'} flex items-center justify-center`}>
                    <div className="bg-muted rounded-2xl border border-border p-10 text-center w-full max-w-sm">
                      <div
                        className={`text-5xl font-bold mb-3 ${
                          uc.color === 'blue'
                            ? 'text-blue-600'
                            : uc.color === 'emerald'
                            ? 'text-emerald-600'
                            : uc.color === 'violet'
                            ? 'text-violet-600'
                            : uc.color === 'amber'
                            ? 'text-amber-600'
                            : 'text-rose-600'
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
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Early Feedback</span>
            <h2 className="text-2xl font-bold text-foreground mt-2">What Church Admins Are Saying</h2>
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
            Simplify your tech stack and your workday
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join our beta program and consolidate your ministry tools into one unified platform
            with live PCO sync, context-aware communications, and a single member record.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBetaModal}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all text-lg"
            >
              Sign Up for Beta
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all text-lg flex items-center justify-center gap-2"
            >
              See Pricing <ArrowRight className="w-4 h-4" />
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
              <Link href="/solutions/leadership" className="hover:text-white transition-colors">Leadership</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            </nav>
            <p className="text-sm text-slate-500">© 2026 Ministry Motion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
