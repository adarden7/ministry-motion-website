'use client';

import Link from 'next/link';
import {
  Users,
  Award,
  Check,
  ChevronRight,
  Sparkles,
  Target,
  MessageCircle,
  UserPlus,
  Compass,
  TrendingUp,
} from 'lucide-react';
import { useCollective } from '@/components/collective';

const STEPS = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Join the community',
    desc: 'Membership is open to any worship leader — no invitation and no church subscription required. Create your profile and tell us where you are in your journey.',
  },
  {
    icon: Users,
    step: '02',
    title: 'Get matched into a cohort',
    desc: 'Within about two weeks you\'re placed in an intimate cohort of 8-12 leaders at a similar level and in compatible time zones, guided by an experienced mentor.',
  },
  {
    icon: Compass,
    step: '03',
    title: 'Find your interest groups',
    desc: 'Beyond your cohort, join specialized groups — vocal health, songwriting, production, leadership — and connect with the people working on what you care about.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Grow at your own pace',
    desc: 'Weekly live sessions, masterclasses, and AI-assisted coaching help you improve. Your progress is yours — move through the tiers as fast or as steady as you like.',
  },
  {
    icon: Award,
    step: '05',
    title: 'Earn recognized credentials',
    desc: 'As you hit milestones, you earn credentials recognized across churches — proof of the work you\'ve put in, backed by mentor and peer assessment.',
  },
];

const TIERS = [
  { tier: 'Tier 1', name: 'Foundation', timeframe: '0–3 months', color: 'from-slate-400 to-slate-500' },
  { tier: 'Tier 2', name: 'Developing', timeframe: '3–6 months', color: 'from-violet-400 to-fuchsia-500' },
  { tier: 'Tier 3', name: 'Proficient', timeframe: '6–12 months', color: 'from-violet-500 to-fuchsia-600' },
  { tier: 'Tier 4', name: 'Advanced', timeframe: '12–24 months', color: 'from-violet-600 to-fuchsia-600' },
  { tier: 'Tier 5', name: 'Master', timeframe: '24+ months', color: 'from-amber-400 to-orange-500' },
];

const PILLARS = [
  {
    icon: Users,
    title: 'Cohorts',
    desc: 'Small groups that learn and grow together with a dedicated mentor.',
  },
  {
    icon: MessageCircle,
    title: 'Network',
    desc: 'Interest groups, forums, and member events that connect you to peers worldwide.',
  },
  {
    icon: Award,
    title: 'Credentials',
    desc: 'Recognized certifications that prove your growth and open new doors.',
  },
];

export default function HowItWorksPage() {
  const { openJoinModal } = useCollective();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-500/15 blur-[120px] rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8">
            <Compass className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">How It Works</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-white">A community model built to</span>{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              help you grow
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Worship Collective brings worship leaders together in cohorts, connects them through a
            global network, and recognizes their growth with real credentials.
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-950/60 border border-violet-500/10">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-white/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Target className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-400">From joining to mastery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">Five steps, one community</h2>
          </div>

          <div className="space-y-6">
            {STEPS.map((s, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-violet-500/10">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-center text-xs text-violet-400/70 mt-2 font-mono">{s.step}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-white/60">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier journey summary */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Award className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-400">The 5-Tier Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Progress through five tiers</h2>
            <p className="text-white/70">
              Each tier unlocks new privileges, mentorship access, and credentials — from foundation to master.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TIERS.map((t, i) => (
              <div key={i} className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-violet-500/10 text-center">
                <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r ${t.color} text-white text-xs font-bold mb-3`}>
                  {t.tier}
                </div>
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-xs text-violet-400/70 mt-1">{t.timeframe}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-200 transition-colors font-medium"
            >
              See the certification requirements
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-500/20 to-violet-600/20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-violet-500/30 mb-8">
            <Sparkles className="w-4 h-4 text-violet-300" />
            <span className="text-sm font-medium text-violet-200">Now welcoming founding members</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Ready to start growing together?
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openJoinModal}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-bold rounded-full hover:shadow-xl hover:shadow-violet-500/30 transition-all text-lg"
            >
              Join the Community
            </button>
            <Link
              href="/membership"
              className="w-full sm:w-auto px-8 py-4 border border-violet-500/30 text-white font-semibold rounded-full hover:bg-violet-500/10 transition-all text-lg inline-flex items-center justify-center gap-2"
            >
              See membership
              <Check className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
