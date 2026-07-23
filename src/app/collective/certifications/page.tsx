'use client';

import Link from 'next/link';
import {
  Award,
  Check,
  ChevronRight,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { useCollective } from '@/components/collective';

const CREDENTIALS = [
  {
    level: 'Certified',
    color: 'from-slate-400 to-slate-500',
    borderColor: 'border-slate-500/30',
    bgColor: 'bg-slate-500/10',
    summary: 'Your first recognized credential — proof you\'ve built a consistent foundation.',
    requirements: ['Complete cohort program', 'Pass vocal assessment', '80%+ consistency score'],
  },
  {
    level: 'Advanced',
    color: 'from-violet-500 to-fuchsia-600',
    borderColor: 'border-violet-500/30',
    bgColor: 'bg-violet-500/10',
    summary: 'For leaders who don\'t just perform — they raise up others around them.',
    requirements: ['Lead 3 cohort sessions', 'Mentor 2 new members', '90%+ excellence score'],
    featured: true,
  },
  {
    level: 'Master',
    color: 'from-violet-400 to-fuchsia-500',
    borderColor: 'border-violet-500/30',
    bgColor: 'bg-violet-500/10',
    summary: 'The highest recognition — reserved for those shaping the wider community.',
    requirements: ['Graduate 10+ mentees', 'Published worship content', 'Board certification'],
  },
];

const TIERS = [
  {
    tier: 'Tier 1', name: 'Foundation', color: 'from-slate-400 to-slate-500', timeframe: '0–3 months',
    description: 'Complete onboarding, establish a baseline vocal assessment, join your first cohort session.',
    unlocks: ['Access to all interest groups', 'Weekly cohort sessions', 'Foundation certification'],
  },
  {
    tier: 'Tier 2', name: 'Developing', color: 'from-violet-400 to-fuchsia-500', timeframe: '3–6 months',
    description: 'Reach 75% vocal consistency, complete 3 foundational courses, lead a team devotional.',
    unlocks: ['Masterclass access', '1-on-1 monthly mentor session', 'Developing credential'],
  },
  {
    tier: 'Tier 3', name: 'Proficient', color: 'from-violet-500 to-fuchsia-600', timeframe: '6–12 months',
    description: 'Achieve 85% vocal excellence, lead 3 cohort sessions, mentor a Tier 1 member.',
    unlocks: ['Priority event invitations', '2x monthly mentor sessions', 'Proficient certification'],
  },
  {
    tier: 'Tier 4', name: 'Advanced', color: 'from-violet-600 to-fuchsia-600', timeframe: '12–24 months',
    description: 'Sustain 90%+ excellence, graduate 2+ mentees, publish one workshop or resource.',
    unlocks: ['Retreat invitations', 'Guest teaching opportunities', 'Advanced certification'],
    featured: true,
  },
  {
    tier: 'Tier 5', name: 'Master', color: 'from-amber-400 to-orange-500', timeframe: '24+ months',
    description: 'Graduate 10+ mentees, publish worship content recognized by the board, peer-voted.',
    unlocks: ['Become a Master Mentor', 'Global certification recognition', 'Lifetime Master credential'],
  },
];

export default function CertificationsPage() {
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
            <Award className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">Certifications</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-white">Credentials that</span>{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              actually mean something
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Worship Collective credentials are earned through real work — cohort participation, peer
            accountability, and mentor assessment — and recognized by churches worldwide.
          </p>
        </div>
      </section>

      {/* Credential levels */}
      <section className="py-16 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {CREDENTIALS.map((tier, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-2xl border ${tier.borderColor} ${tier.bgColor} ${tier.featured ? 'md:scale-105' : ''}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold rounded-full whitespace-nowrap">
                    Most Common
                  </div>
                )}
                <div className={`w-16 h-8 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mx-auto mb-6`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold text-center mb-3 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                  {tier.level}
                </h3>
                <p className="text-sm text-white/60 text-center mb-6">{tier.summary}</p>
                <ul className="space-y-3">
                  {tier.requirements.map((req, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/70">
                      <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full tier path */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">The full certification path</h2>
            <p className="text-white/70">
              Five tiers, each with clear milestones and the privileges you unlock along the way.
            </p>
          </div>

          <div className="space-y-4">
            {TIERS.map((tier, i) => (
              <div
                key={i}
                className={`relative p-6 rounded-2xl border border-violet-500/20 bg-violet-500/5 ${tier.featured ? 'ring-2 ring-violet-500/30' : ''}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold rounded-full">
                    Most Members Complete This Tier
                  </div>
                )}
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${tier.color} text-white text-sm font-bold`}>
                      {tier.tier} · {tier.name}
                    </div>
                    <p className="text-xs text-violet-400/70 mt-1 pl-1">{tier.timeframe}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/70 text-sm">{tier.description}</p>
                  </div>
                  <div className="flex-shrink-0 space-y-1">
                    {tier.unlocks.map((unlock, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-white/60">
                        <Check className="w-3 h-3 text-violet-400 flex-shrink-0" />
                        {unlock}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust note */}
      <section className="py-12 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-violet-500/5 border border-violet-500/10">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Earned, assessed, and vouched for</h3>
              <p className="text-sm text-white/60">
                Credentials aren&apos;t automatic. Every level is confirmed through mentor assessment and
                peer endorsement inside the community — so a Worship Collective credential is something
                a church can actually trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-500/20 to-violet-600/20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-violet-500/30 mb-8">
            <Sparkles className="w-4 h-4 text-violet-300" />
            <span className="text-sm font-medium text-violet-200">Start your path today</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Earn your first credential
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
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
