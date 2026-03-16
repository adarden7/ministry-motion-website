'use client';

import Link from 'next/link';
import {
  Video,
  Users,
  Brain,
  Radio,
  Calendar,
  Check,
  Star,
  ArrowRight,
  BarChart3,
  TrendingUp,
  Zap,
  Clock,
  Layers,
  Shield
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

// Top 5 use cases for Worship Directors
const useCases = [
  {
    number: '01',
    icon: Video,
    color: 'blue',
    title: "Upload Sunday's Video → Monday Scorecard",
    subtitle: 'Auto-segment, identify songs, score singers, and calculate God Quotient',
    description:
      "Upload your Sunday service recording Monday morning and receive a complete performance scorecard by lunchtime. The AI auto-segments the service, identifies every song, individually scores each singer's pitch and blend, and produces a God Quotient score reflecting lyrical and theological weight.",
    bullets: [
      'Auto-segments video into song blocks, transitions, and speaking moments',
      'Song recognition against your library with CCLI metadata enrichment',
      'Per-singer pitch accuracy scores mapped to SATB parts',
      'God Quotient: lyrical depth, theological alignment, and theme consistency',
    ],
    stat: '< 1hr',
    statLabel: 'from video upload to complete performance scorecard',
  },
  {
    number: '02',
    icon: TrendingUp,
    color: 'emerald',
    title: 'Real-Time Journey Pipeline',
    subtitle: 'Connect→Grow→Serve→Go with the Advancement Arbiter',
    description:
      'See every worship team member positioned on the Connect→Grow→Serve→Go discipleship pipeline in real time. The Advancement Arbiter evaluates attendance, course completion, and engagement patterns and surfaces who is ready to advance—before they drift.',
    bullets: [
      'Live pipeline view: every volunteer positioned on their journey stage',
      'Advancement Arbiter surfaces next-step recommendations automatically',
      'Bottleneck detection: identifies where members stall in the pipeline',
      'Stage transition events emit notifications to relevant leaders',
    ],
    stat: '4',
    statLabel: 'journey stages tracked with automated advancement logic',
  },
  {
    number: '03',
    icon: Brain,
    color: 'violet',
    title: 'AI Advisory Council – Staff Room',
    subtitle: '8+ agents with round-table mode for collaborative recommendations',
    description:
      'The Staff Room brings your AI agent council together in a round-table format. Ask a question and receive coordinated answers from the Liturgist (song theology), Virtuoso Coach (vocal development), Shepherd (member care), and more—all in one conversation.',
    bullets: [
      'Round-table mode: multiple agents respond to a single question in sequence',
      'Liturgist Agent: theological song vetting and scripture alignment',
      'Shepherd Agent: volunteer health and burnout-risk patterns',
      'Negotiator Agent: conflict resolution recommendations',
    ],
    stat: '8+',
    statLabel: 'AI agents available in the Staff Room council',
  },
  {
    number: '04',
    icon: Radio,
    color: 'amber',
    title: 'Live Service Analysis',
    subtitle: 'Real-time pitch accuracy, vocal health ring, and OBS integration',
    description:
      'During rehearsal or live service, stream audio directly into the platform for real-time analysis. The vocal health ring displays team-wide vocal fatigue indicators. Full OBS integration allows stream overlays for production teams.',
    bullets: [
      'Real-time pitch accuracy scoring per vocalist during live performance',
      'Vocal health ring: aggregated fatigue and strain indicators across the team',
      'OBS Studio integration: stream performance overlays to your broadcast',
      'Post-session instant replay with annotated performance timeline',
    ],
    stat: 'Live',
    statLabel: 'real-time analysis during rehearsal and service',
  },
  {
    number: '05',
    icon: Calendar,
    color: 'rose',
    title: 'Automated 30-Day Service Prep',
    subtitle: '7-milestone countdown with auto-notifications to the right people',
    description:
      'Set your service date and the platform auto-generates a 30-day preparation countdown. Seven milestones are pre-configured—from song selection through tech rehearsal—with automated notifications sent to the right team member at the right time.',
    bullets: [
      'Milestone 1 (Day 30): Song selection window opens with AI recommendations',
      'Milestone 3 (Day 18): Rehearsal tracks automatically generated and distributed',
      'Milestone 5 (Day 7): Tech team briefing auto-triggered with service plan PDF',
      'Milestone 7 (Day 0): Post-service scorecard delivery scheduled automatically',
    ],
    stat: '7',
    statLabel: 'automated milestones in the 30-day preparation timeline',
  },
];

const testimonials = [
  {
    quote:
      'The Monday scorecard changed how I give feedback. Instead of relying on memory from Sunday, I have actual pitch data for each singer. The conversations are much more productive.',
    name: 'Worship Director',
    church: 'Large Baptist church, Texas',
  },
  {
    quote:
      'I had no idea how many of my team members were stuck at the "Grow" stage. The journey pipeline made the bottleneck obvious—and the Arbiter suggested the exact next steps.',
    name: 'Minister of Music',
    church: 'Presbyterian congregation, Pacific Northwest',
  },
];

export default function WorshipDirectorsPage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
              <Layers className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Solutions for Worship Directors</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
              Direct With{' '}
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Data, Not Guesswork
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              From automated post-service scorecards to real-time pipeline visibility and a full AI
              advisory council—Ministry Motion gives Worship Directors the operational intelligence
              to lead with clarity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openBetaModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all text-lg shadow-lg shadow-blue-500/25"
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
              { value: '< 1hr', label: 'Sunday video to Monday scorecard' },
              { value: '8+', label: 'AI agents in the advisory council' },
              { value: '30-day', label: 'Automated service prep timeline' },
              { value: 'Live', label: 'Real-time vocal analysis during service' },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-blue-400">{item.value}</div>
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
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Top 5 Use Cases</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              Built for How Worship Directors Actually Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every capability addresses a real operational challenge—not a feature list built for demos.
            </p>
          </div>

          <div className="space-y-20">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-mono text-muted-foreground">{uc.number}</span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          uc.color === 'blue'
                            ? 'bg-blue-500/20 dark:bg-blue-900/30'
                            : uc.color === 'emerald'
                            ? 'bg-blue-500/20 dark:bg-blue-900/30'
                            : uc.color === 'violet'
                            ? 'bg-violet-500/20 dark:bg-violet-900/30'
                            : uc.color === 'amber'
                            ? 'bg-amber-500/20 dark:bg-amber-900/30'
                            : 'bg-rose-500/20 dark:bg-rose-900/30'
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            uc.color === 'blue'
                              ? 'text-blue-600'
                              : uc.color === 'emerald'
                              ? 'text-blue-400'
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
                          <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stat Card */}
                  <div className={`${isEven ? '' : 'lg:order-1'} flex items-center justify-center`}>
                    <div className="bg-muted rounded-2xl border border-border p-10 text-center w-full max-w-sm">
                      <div
                        className={`text-6xl font-bold mb-3 ${
                          uc.color === 'blue'
                            ? 'text-blue-600'
                            : uc.color === 'emerald'
                            ? 'text-blue-400'
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
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Early Feedback</span>
            <h2 className="text-2xl font-bold text-foreground mt-2">What Worship Directors Are Saying</h2>
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
            Lead your ministry with AI-powered intelligence
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join our beta program and get early access to post-service scorecards,
            the journey pipeline, and your AI advisory council.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBetaModal}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all text-lg"
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
