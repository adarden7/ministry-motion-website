'use client';

import Link from 'next/link';
import {
  Users,
  Heart,
  LayoutDashboard,
  Zap,
  BookOpen,
  Check,
  Star,
  ArrowRight,
  Shield,
  TrendingUp,
  Activity,
  Layers
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

// Top 5 use cases for General Ministries Directors
const useCases = [
  {
    number: '01',
    icon: Zap,
    color: 'violet',
    title: 'Spiritual Gifts → Ministry Matching',
    subtitle: 'Position Matcher Agent with vector embeddings for high-confidence role assignment',
    description:
      'The Position Matcher Agent uses vector embeddings to match spiritual gifts assessment results, serving history, and skill data against open ministry positions. It surfaces high-confidence matches that human coordinators can confirm in seconds—not hours.',
    bullets: [
      'Spiritual gifts assessment feeds directly into matching algorithm',
      'Vector similarity search across 24+ pre-configured ministry roles',
      'Confidence score per match explains the reasoning behind recommendations',
      'Human-in-the-loop confirmation: leaders approve before assignment',
    ],
    stat: '24+',
    statLabel: 'pre-configured ministry roles available for matching',
  },
  {
    number: '02',
    icon: Activity,
    color: 'rose',
    title: 'Detect Patterns Associated with Volunteer Burnout',
    subtitle: 'Shepherd Agent: attendance, biometrics, and social isolation signals',
    description:
      'The Shepherd Agent continuously monitors volunteer health by combining attendance patterns, platform engagement, and—when available—wearable HRV data. It surfaces volunteers showing patterns historically associated with disengagement and burnout risk before they exit.',
    bullets: [
      'Attendance trend analysis: flags declining participation over 30-day windows',
      'Engagement score tracking: identifies social isolation within communities',
      'Apple Watch / Galaxy Watch HRV integration for physiological signals (optional)',
      'Shepherd sends leader alerts with recommended care actions, not just warnings',
    ],
    stat: '30-day',
    statLabel: 'monitoring window for early burnout-risk pattern detection',
  },
  {
    number: '03',
    icon: LayoutDashboard,
    color: 'blue',
    title: 'One Dashboard for Every Ministry',
    subtitle: '24 pre-built ministry containers with cross-ministry analytics',
    description:
      'All ministries—worship, children, deacons, outreach, small groups—live under one platform with dedicated dashboards. Cross-ministry analytics show overlap, resource strain, and member journey progression across all ministry areas simultaneously.',
    bullets: [
      '24 pre-built ministry containers configured for church structures',
      'Cross-ministry overlap detection: identifies members serving in too many areas',
      'Unified volunteer pool: see availability across all ministry areas at once',
      'Executive summary view: all ministry health scores on a single screen',
    ],
    stat: '24',
    statLabel: 'pre-built ministry containers ready on day one',
  },
  {
    number: '04',
    icon: Users,
    color: 'emerald',
    title: 'Automated New Member Integration',
    subtitle: 'MEMBER_JOINED triggers that start the discipleship journey automatically',
    description:
      'When a new member joins, a MEMBER_JOINED event triggers a coordinated onboarding sequence. Welcome messages, spiritual gifts assessment invitations, connection group recommendations, and first-serve pathway suggestions all happen automatically—no manual coordination required.',
    bullets: [
      'Welcome message sent within minutes of member record creation',
      'Spiritual gifts assessment invitation automated on Day 3',
      'Connection group recommendations based on demographics and interests',
      'Serve pathway suggestion triggered after assessment completion',
    ],
    stat: '< 5min',
    statLabel: 'from new member record creation to first automated touchpoint',
  },
  {
    number: '05',
    icon: BookOpen,
    color: 'amber',
    title: 'Learning Paths That Lead to Roles',
    subtitle: '18 courses + 7 labs + certificates tied to ministry qualifications',
    description:
      "Every course in the Learning Hub can be linked to a ministry qualification. Complete the Children's Ministry Safety course and the Position Matcher considers you qualified for children's check-in. Certificates are earned, not just issued—they carry real placement weight.",
    bullets: [
      '18 structured courses across theology, leadership, and ministry skills',
      '7 active labs: hands-on simulation environments for practical training',
      'Certificates linked to ministry role qualifications in the Position Matcher',
      'Progress tracked in the member journey for discipleship advancement',
    ],
    stat: '18+',
    statLabel: 'courses linked to real ministry qualifications',
  },
];

const testimonials = [
  {
    quote:
      'Finding the right person for each volunteer role used to take me two hours of emails. Now the Position Matcher gives me five ranked candidates in under a minute. I just review and confirm.',
    name: 'Ministries Director',
    church: 'Non-denominational megachurch, Southeast US',
  },
  {
    quote:
      'The Shepherd Agent flagged one of our most committed volunteers three weeks before she told me she needed a break. That conversation would have been much harder without the early warning.',
    name: 'Volunteer Coordinator',
    church: 'Methodist congregation, Midwest',
  },
];

export default function MinistriesDirectorsPage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 backdrop-blur-sm mb-6">
              <Users className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-300">Solutions for Ministries Directors</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
              Run Every Ministry{' '}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                From One Platform
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Spiritual gifts matching, volunteer health monitoring, automated onboarding, and
              learning paths that create qualified ministry leaders—all coordinated by AI agents
              working in the background.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openBetaModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all text-lg shadow-lg shadow-violet-500/25"
              >
                Sign Up for Beta
              </button>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-8 py-4 bg-background/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-slate-900/20 transition-all text-lg"
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

      {/* Stats Bar */}
      <section className="py-8 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '24+', label: 'Pre-built ministry containers' },
              { value: '18+', label: 'Courses tied to role qualifications' },
              { value: '< 5min', label: 'New member first touchpoint' },
              { value: '30-day', label: 'Burnout-risk monitoring window' },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-violet-400">{item.value}</div>
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
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Top 5 Use Cases</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              AI-Driven Ministry Operations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tools built for the complexity of managing multiple ministries, hundreds of volunteers,
              and a continuous stream of new members.
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
                          uc.color === 'violet'
                            ? 'bg-violet-500/20 dark:bg-violet-900/30'
                            : uc.color === 'rose'
                            ? 'bg-rose-500/20 dark:bg-rose-900/30'
                            : uc.color === 'blue'
                            ? 'bg-blue-500/20 dark:bg-blue-900/30'
                            : uc.color === 'emerald'
                            ? 'bg-blue-500/20 dark:bg-blue-900/30'
                            : 'bg-amber-500/20 dark:bg-amber-900/30'
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            uc.color === 'violet'
                              ? 'text-violet-600'
                              : uc.color === 'rose'
                              ? 'text-rose-600'
                              : uc.color === 'blue'
                              ? 'text-blue-600'
                              : uc.color === 'emerald'
                              ? 'text-blue-400'
                              : 'text-amber-600'
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
                          <Check className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${isEven ? '' : 'lg:order-1'} flex items-center justify-center`}>
                    <div className="bg-muted rounded-2xl border border-border p-10 text-center w-full max-w-sm">
                      <div
                        className={`text-6xl font-bold mb-3 ${
                          uc.color === 'violet'
                            ? 'text-violet-600'
                            : uc.color === 'rose'
                            ? 'text-rose-600'
                            : uc.color === 'blue'
                            ? 'text-blue-600'
                            : uc.color === 'emerald'
                            ? 'text-blue-400'
                            : 'text-amber-600'
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
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Early Feedback</span>
            <h2 className="text-2xl font-bold text-foreground mt-2">What Ministries Directors Are Saying</h2>
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
            Ready to unify every ministry under one AI-powered platform?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join our beta and get early access to the Position Matcher, Shepherd Agent,
            ministry dashboards, and automated onboarding flows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBetaModal}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all text-lg"
            >
              Sign Up for Beta
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 bg-background/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-slate-900/20 transition-all text-lg flex items-center justify-center gap-2"
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
              <Link href="/solutions/praise-leaders" className="hover:text-white transition-colors">Praise Leaders</Link>
              <Link href="/solutions/worship-directors" className="hover:text-white transition-colors">Worship Directors</Link>
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
