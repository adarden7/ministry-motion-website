'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Crown,
  Check,
  ChevronRight,
  Sparkles,
  Shield,
  Zap,
  Heart,
} from 'lucide-react';
import { useCollective } from '@/components/collective';

const FEATURES = [
  { feature: 'Intimate cohort placement (8-12 members)', highlight: true },
  { feature: 'Weekly live group sessions', highlight: true },
  { feature: 'Access to all interest groups', highlight: false },
  { feature: 'Live masterclasses + recordings', highlight: true },
  { feature: 'AI vocal coaching for recorded practice sessions', highlight: true },
  { feature: 'Credential certification path', highlight: false },
  { feature: 'Community chat & forums', highlight: false },
  { feature: 'Member-only events (virtual + in-person)', highlight: true },
  { feature: '2x monthly 1-on-1 mentor sessions', highlight: true },
  { feature: 'Priority credential review', highlight: true },
  { feature: 'Exclusive retreat invitations', highlight: true },
];

export default function MembershipPage() {
  const { openJoinModal } = useCollective();
  const [annual, setAnnual] = useState(true);

  const price = annual ? '49.99' : '64.99';
  const billingNote = annual
    ? 'billed annually · save $180/yr vs. monthly'
    : 'billed monthly · switch to annual anytime to save';

  return (
    <>
      {/* Hero + pricing */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-500/15 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8">
            <Crown className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">Membership</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-white">One membership.</span>{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Everything included.
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Join directly — no invitation required — and grow at your own pace with cohorts,
            mentorship, masterclasses, and recognized credentials.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-900/60 border border-violet-500/20 mb-12">
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                annual ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              Annual
            </button>
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !annual ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              Monthly
            </button>
          </div>

          {/* Price card */}
          <div className="max-w-lg mx-auto">
            <div className="relative p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-violet-500/40 text-left">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 mb-4">
                  <Crown className="w-4 h-4 text-violet-300" />
                  <span className="text-sm font-medium text-violet-300">Collective Membership</span>
                </div>
                <p className="text-white/60 text-sm">For worship leaders serious about their craft</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-bold text-white">${price}</span>
                  <span className="text-white/50">/mo</span>
                </div>
                <p className="text-white/40 text-sm">{billingNote}</p>
              </div>

              <div className="space-y-3.5 mb-8">
                {FEATURES.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-violet-400" />
                    </div>
                    <span className={item.highlight ? 'text-white font-medium' : 'text-white/80'}>
                      {item.feature}
                      {item.highlight && <span className="ml-2 text-xs text-violet-400">★</span>}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={openJoinModal}
                className="block w-full py-4 text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-bold rounded-full hover:shadow-xl hover:shadow-violet-500/30 transition-all text-lg"
              >
                Join the Community
              </button>
            </div>
          </div>

          {/* Reassurance */}
          <div className="mt-12">
            <p className="text-white/50 text-sm mb-4">Open membership · Grow at your own pace</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>14-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Switch billing freely</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included, expanded */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What your membership includes</h2>
            <p className="text-white/70">Everything you need to grow, connect, and get recognized — in one place.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Belong',
                items: ['A cohort of 8-12 peers', 'Interest groups for your focus', 'Member-only events & retreats'],
              },
              {
                title: 'Grow',
                items: ['Weekly live coaching', 'Masterclasses + recordings', 'AI-assisted practice feedback'],
              },
              {
                title: 'Get recognized',
                items: ['Credential certification path', 'Mentor & peer endorsement', 'Recognition across churches'],
              },
            ].map((col, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-950/60 border border-violet-500/10">
                <h3 className="text-xl font-semibold text-white mb-5">{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((it, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/70">
                      <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-200 transition-colors font-medium"
            >
              See how the community works
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-500/20 to-violet-600/20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-violet-500/30 mb-8">
            <Sparkles className="w-4 h-4 text-violet-300" />
            <span className="text-sm font-medium text-violet-200">Now welcoming founding members</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Find your people. Grow your craft.
            </span>
          </h2>
          <button
            onClick={openJoinModal}
            className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-bold rounded-full hover:shadow-xl hover:shadow-violet-500/30 transition-all text-lg"
          >
            Join the Community
          </button>
        </div>
      </section>
    </>
  );
}
