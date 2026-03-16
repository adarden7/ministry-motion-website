'use client';

import Link from 'next/link';
import {
  Mic2,
  Music,
  BarChart3,
  Check,
  Star,
  Zap,
  Activity,
  Heart,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  Shield,
  Layers
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

// Top 5 use cases for Praise Leaders
const useCases = [
  {
    number: '01',
    icon: Music,
    color: 'blue',
    title: 'SATB Rehearsal Tracks in 30 Seconds',
    subtitle: '$0.10 in AI processing costs vs. $50–200 per track from producers',
    description:
      'Upload any song and receive fully separated SATB rehearsal tracks—ready for your team to practice at home before Sunday. Each vocalist gets their own part with the other voices in the background.',
    bullets: [
      'Soprano, Alto, Tenor, Bass parts generated automatically',
      'Background blend kept in-mix so singers stay oriented',
      'Delivered in-app with playback speed controls',
      'Average processing time: under 30 seconds per song',
    ],
    stat: '$0.10',
    statLabel: 'in AI processing costs per track',
  },
  {
    number: '02',
    icon: Activity,
    color: 'emerald',
    title: 'Know Who Practiced Before Rehearsal',
    subtitle: 'Sing-Along Player with pitch tracking, XP, and streak combos',
    description:
      'The Sing-Along Player lets team members practice their parts at home while the platform captures pitch accuracy, session length, and participation. You walk into rehearsal knowing exactly who prepared and who needs extra attention.',
    bullets: [
      'Real-time pitch tracking during at-home practice sessions',
      'XP and combo streak system that makes practice genuinely fun',
      'Preparation dashboard visible to Praise Leaders before rehearsal',
      'Gamification reduces "I forgot to practice" by making it rewarding',
    ],
    stat: '3×',
    statLabel: 'more consistent preparation with in-app tracking',
  },
  {
    number: '03',
    icon: BarChart3,
    color: 'violet',
    title: 'AI Set List Quality Gate',
    subtitle: 'God Quotient, genre distribution, and SATB coverage scoring',
    description:
      'Before you publish your set list, the AI quality gate scores it across multiple dimensions—theological weight, genre variety, vocal part coverage, and key transitions. Catch imbalances before your director reviews.',
    bullets: [
      'God Quotient score: lyrical depth and theological alignment',
      'Genre distribution: prevents back-to-back similar-feel songs',
      'SATB coverage: flags when a part is underserved across the set',
      'Key transition warnings: spots jarring modulations',
    ],
    stat: '94%',
    statLabel: 'average theme alignment on AI-reviewed sets',
  },
  {
    number: '04',
    icon: Zap,
    color: 'amber',
    title: 'Ensemble Blend Analysis',
    subtitle: 'Formant analysis, part balance, and vowel uniformity scoring',
    description:
      'Upload a recording of your ensemble rehearsal and receive a technical blend analysis. The system identifies which parts are dominating, where vowel uniformity breaks down, and which singers are pulling pitch sharp or flat.',
    bullets: [
      'Formant analysis identifies part dominance in live recordings',
      'Vowel uniformity scores across the ensemble on key phrases',
      'Individual pitch contribution mapped per voice part',
      'Actionable blend recommendations by section',
    ],
    stat: '7',
    statLabel: 'distinct ensemble metrics analyzed per upload',
  },
  {
    number: '05',
    icon: Heart,
    color: 'rose',
    title: 'Personal AI Vocal Coach',
    subtitle: 'Virtuoso Coach, Vocal Mirror, and Bio-Insight with Apple Watch HRV',
    description:
      'Every singer on your team gets a personal AI coach. The Virtuoso Coach delivers pitch, tone, and breath feedback. The Vocal Mirror provides visual biofeedback. When connected to Apple Watch, HRV data helps identify patterns associated with vocal fatigue.',
    bullets: [
      'Virtuoso Coach: pitch accuracy, tonal quality, and breath support feedback',
      'Vocal Mirror: real-time visual display of voice frequency profile',
      'Bio-Insight: detects patterns associated with burnout risk using HRV data',
      'Personalized development pathway from Beginner through Ministry Leader',
    ],
    stat: '5',
    statLabel: 'development tiers from Beginner to Ministry Leader',
  },
];

const testimonials = [
  {
    quote:
      "Our team's preparation went from 'I'll listen in the car' to an actual structured practice routine. Knowing the leader can see who practiced changed everything.",
    name: 'Worship Leader',
    church: 'Mid-size evangelical church, Southeast US',
  },
  {
    quote:
      'I used to spend hours sourcing rehearsal tracks from producers. Now it takes 30 seconds and the quality is identical to what I was paying $80 per song for.',
    name: 'Praise Team Director',
    church: 'Pentecostal congregation, Mid-Atlantic region',
  },
];

export default function PraiseLeadersPage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
              <Mic2 className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Solutions for Praise Leaders</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
              Lead Worship With{' '}
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                AI Precision
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              From rehearsal track generation to ensemble blend analysis and personal vocal coaching—
              Ministry Motion gives Praise Leaders the tools to build a truly excellent worship team.
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

      {/* Quick Stats Bar */}
      <section className="py-8 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '$0.10', label: 'AI processing costs per rehearsal track' },
              { value: '30s', label: 'Average SATB track generation time' },
              { value: '5', label: 'Vocal development tiers' },
              { value: '8+', label: 'AI agents working for your team' },
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
              Everything a Praise Leader Needs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each capability is designed specifically for how worship teams operate—not adapted from generic software.
            </p>
          </div>

          <div className="space-y-20">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
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
                          <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
            <h2 className="text-2xl font-bold text-foreground mt-2">
              What Praise Leaders Are Saying
            </h2>
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
            Ready to elevate your worship team?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join our beta program. Be among the first Praise Leaders to use AI-powered
            rehearsal tracks, ensemble analysis, and personal vocal coaching.
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
