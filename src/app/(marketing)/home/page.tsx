'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Mic2,
  Users,
  Calendar,
  BarChart3,
  MessageSquare,
  Sparkles,
  Check,
  Headphones,
  BookOpen,
  Heart,
  Music,
  ChevronRight,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Globe,
  Layers,
  Brain,
  Video,
  ArrowRight,
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';
import { signInAsDemo } from '@/lib/demo-auth';
import { Loader2 } from 'lucide-react';
import { AppScreenshot } from '@/components/marketing/AppScreenshot';

// MM-1: Worship wedge — the ministry structures grid now supports the
// "grows with your whole church" expansion story, not headline differentiators.
// Children's Ministry, Deacons, etc. are shown as expansion—not the pitch.
const expansionMinistries = [
  { name: "Children's Ministry", roles: ['Director', 'Teachers', 'Check-in', 'Nursery'] },
  { name: 'Deacon / Elder Board', roles: ['Head Deacon', 'Deacons', 'Elders', 'Trustees'] },
  { name: 'Outreach & Missions', roles: ['Director', 'Evangelism', 'Community', 'Missions'] },
  { name: 'Small Groups', roles: ['Coordinator', 'Group Leaders', 'Hosts', 'Facilitators'] },
  { name: 'Media & Comms', roles: ['Director', 'Social Media', 'Graphic Design', 'A/V'] },
];

// MM-8: Stats — only include stats with verifiable well-known sources.
// "Generosity Research" is NOT a citable source and has been removed (MM-2).
// The "3x giving" stat was tied to the removed "Engaged Members Give 3x More"
// headline and is cut entirely per MM-2 / MM-8 rules.
// TODO(owner): if you have a real citation for giving-engagement correlation,
//   add it here with a full source link (author, publication, year, URL).
const discipleshipStats = [
  {
    stat: '39%',
    label: "of Christians aren't being discipled",
    source: 'Barna Research, State of Discipleship 2024',
  },
  {
    stat: '1%',
    label: 'of pastors say their church disciples "very well"',
    source: 'LifeWay Research, Discipleship Survey',
  },
  {
    stat: '65%',
    label: 'of young adults leave church after high school',
    source: 'Pew Research Center',
  },
];

// Navigation sections
const exploreAreas = [
  {
    title: 'For Worship Leaders',
    description: 'AI vocal coaching, SATB rehearsal tracks, service analysis',
    icon: Mic2,
    color: 'blue',
    href: '/solutions/praise-leaders',
  },
  {
    title: 'For Pastors',
    description: 'Formation tracking, member care prompts, church health',
    icon: BookOpen,
    color: 'emerald',
    href: '/solutions/leadership',
  },
  {
    title: 'For Ministry Directors',
    description: 'Team scheduling, training courses, volunteer management',
    icon: Users,
    color: 'amber',
    href: '/solutions/ministries-directors',
  },
];

// Product categories — worship-first; discipleship as vision layer; others as expansion
const productCategories = {
  planSchedule: {
    title: 'Plan & Schedule',
    description: 'Organize your worship ministry',
    products: [
      {
        name: 'Service Planning',
        description: 'Build services with AI-powered song selection and theme alignment',
        icon: Calendar,
        href: '/products',
        badge: 'AI-Enhanced',
      },
      {
        name: 'Team Scheduling',
        description: 'Auto-schedule volunteers based on availability and skills',
        icon: Users,
        href: '/products',
        badge: null,
      },
      {
        name: 'Unified Calendar',
        description: 'One calendar for every ministry, synced everywhere',
        icon: Calendar,
        href: '/products',
        badge: null,
      },
    ],
  },
  developTrain: {
    title: 'Develop & Train',
    description: "Grow your team's skills",
    products: [
      {
        name: 'AI Vocal Coaching',
        description: 'Pitch, tone, and breath analysis of recorded practice sessions',
        icon: Mic2,
        href: '/products',
        badge: 'AI-Powered',
      },
      {
        name: 'Learning Hub',
        description: 'Worship training courses — from vocal technique to theology',
        icon: BookOpen,
        href: '/products',
        badge: null,
      },
      {
        name: 'Discipleship Journeys',
        description: 'Configurable pathways from visitor to servant leader',
        icon: Target,
        href: '/products',
        badge: null,
      },
    ],
  },
  engageConnect: {
    title: 'Engage & Connect',
    description: 'Build community',
    products: [
      {
        name: 'Community',
        description: 'Spaces, discussions, and member profiles with ministry context',
        icon: Users,
        href: '/products',
        badge: null,
      },
      {
        name: 'Unified Communications',
        description: 'Replace WhatsApp, GroupMe, and text chains with one inbox',
        icon: MessageSquare,
        href: '/products',
        badge: 'New',
      },
      {
        name: 'Integrated Giving',
        description: 'Generosity embedded in the formation journey',
        icon: Heart,
        href: '/products',
        badge: null,
      },
    ],
  },
};

export default function HomePage() {
  const { openBetaModal } = useMarketing();
  const router = useRouter();
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  const handleTryDemo = async () => {
    setIsDemoLoading(true);
    try {
      await signInAsDemo();
      router.push('/dashboard');
    } catch (error) {
      console.error('Demo login failed:', error);
      setIsDemoLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased">

      {/* ─── PW-0 HERO — mechanism-first: named capability + hated task + relief ─── */}
      {/*
        Service-video analysis capability confirmed in the main app codebase
        (ServiceAnalyzer agent, service_analysis_completed event, /service-intelligence UI).
        Hero anchors on this confirmed capability per PW-0.
      */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-500/15 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-fuchsia-500/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-200">Built for the Church, Powered by AI</span>
            </div>

            {/* PW-0: mechanism-first hero headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
              Your Monday review starts with{' '}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                insight, not a two-hour rewatch.
              </span>
            </h1>

            {/* PW-0: name the mechanism + hated task + relief */}
            <p className="text-xl text-violet-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              WorshipWise watches your service video the way a seasoned worship pastor
              would — scoring transitions, timing, and theme coherence — so you spend
              Monday morning acting on answers, not hunting for them.
            </p>

            {/* PW-1: "Log in" is nav-only / secondary. PW-2: ONE primary CTA verb. */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              {/* PW-2: primary CTA */}
              <button
                onClick={openBetaModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-fuchsia-700 transition-all text-lg shadow-lg shadow-violet-500/25"
              >
                Start free — 30 days
              </button>
              {/* PW-2: secondary — demo exists (TryDemoButton/signInAsDemo confirmed in codebase) */}
              <button
                onClick={handleTryDemo}
                disabled={isDemoLoading}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all text-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isDemoLoading ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Setting up demo...</>
                ) : (
                  'Watch the demo'
                )}
              </button>
            </div>

            <p className="text-sm text-violet-200/60">
              PCO import (beta) · No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS — 3-step mechanism (PW-0 Section 2) ─── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">How it works</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-3">
              Three steps to a sharper worship team
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: '01',
                icon: Video,
                title: 'Upload or link your service video',
                desc: 'Paste a YouTube link or upload a recording. WorshipWise handles the rest.',
              },
              {
                step: '02',
                icon: Brain,
                title: 'AI scores the service like a worship pastor would',
                desc: 'Theme coherence, transition quality, timing, and energy arc — analyzed in minutes.',
              },
              {
                step: '03',
                icon: Mic2,
                title: 'Receive actionable coaching for next Sunday',
                desc: 'Concrete suggestions for your team: which transitions to tighten, which singers to coach, what to rehearse.',
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-black text-violet-100 mb-4 leading-none">{item.step}</div>
                <item.icon className="w-7 h-7 text-violet-600 mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <AppScreenshot src="/app/dashboard.png" alt="Ministry Motion service analysis dashboard — insight panel after Sunday service" priority />
          </div>
        </div>
      </section>

      {/* ─── MM-1: WEDGE OUTCOMES — worship first, discipleship as vision ─── */}
      {/*
        The homepage leads with vocal coaching + service analysis (the wedge).
        Discipleship becomes a vision statement — "where it's going" — not a co-headline.
        Other ministries (children's, deacons, treasurers) are an "and it grows with your
        whole church" story below, not homepage headliners.
      */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">For Worship Directors & Praise Leaders</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              The AI tools your worship team has been waiting for
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real-time vocal coaching, SATB rehearsal tracks, and service analysis —
              built specifically for how worship ministry actually works.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mic2,
                title: 'AI Vocal Coaching',
                desc: 'Pitch, tone, and breath analysis of recorded practice sessions. Every singer gets personalized feedback — not just the leads.',
                badge: 'Confirmed capability',
                color: 'violet',
              },
              {
                icon: Video,
                title: 'Service Analysis',
                desc: 'Upload Sunday\'s recording. Get a scored breakdown of theme coherence, transitions, and timing before your Monday team debrief.',
                badge: 'Confirmed capability',
                color: 'fuchsia',
              },
              {
                icon: Music,
                title: 'SATB Rehearsal Tracks',
                desc: 'Isolated soprano, alto, tenor, and bass tracks generated from any worship song in seconds. No more "can you just sing my part?"',
                badge: 'Confirmed capability',
                color: 'violet',
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color === 'violet' ? 'bg-violet-100' : 'bg-fuchsia-100'}`}>
                  <item.icon className={`w-6 h-6 ${item.color === 'violet' ? 'text-violet-600' : 'text-fuchsia-600'}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* MM-7: 3–4 named capabilities with ministry outcomes — full agent list → /products */}
          <div className="mt-16 bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-semibold text-violet-400 uppercase tracking-wider">AI capabilities built for worship</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                  Four agents doing the work while you lead
                </h3>
                <p className="text-slate-400 mb-6">
                  Not chatbots. Autonomous agents that understand theology, denomination
                  context, and the rhythms of worship ministry.
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-violet-400 font-medium hover:text-violet-300"
                >
                  See the full agent list on /products <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-3">
                {[
                  {
                    agent: 'Vocal Coach AI',
                    outcome: 'Singers improve faster with personalized, session-by-session feedback',
                  },
                  {
                    agent: 'Service Analyzer',
                    outcome: 'Monday reviews start with a scored report, not a raw recording',
                  },
                  {
                    agent: 'Care Prompts',
                    // MM-3: Reframed from surveillance to pastoral care
                    outcome: 'Surfaces members who may need a check-in so no one slips through unnoticed',
                  },
                  {
                    agent: 'Ministry Matcher',
                    outcome: 'Recommends the right role for each member based on gifts and growth stage',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <Zap className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-white">{item.agent}</span>
                      <span className="text-slate-400 mx-2">—</span>
                      <span className="text-slate-300 text-sm">{item.outcome}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DISCIPLESHIP VISION STATEMENT (MM-1) ─── */}
      {/*
        Discipleship is the vision, not a co-headline with worship.
        Formation outcomes only — no giving/revenue framing per MM-2.
        "Engaged Members Give 3x More" headline is gone.
      */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">The bigger vision</span>
              {/* MM-2: Formation-outcome headline — no giving/revenue framing */}
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Know where every member is on the journey
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Beyond worship, Ministry Motion tracks each member's spiritual formation —
                from first-time visitor through Connect, Grow, Serve, and Go — so your
                pastoral team always knows who needs a next step and who is ready to lead.
              </p>

              <div className="space-y-4">
                {[
                  'Configurable Connect → Grow → Serve → Go pathways',
                  'AI-recommended next steps based on each member\'s journey data',
                  'Spiritual gifts assessments tied to role recommendations',
                  'Pastor view: see every member\'s stage at a glance',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-violet-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MM-3: Pastoral care frame — no surveillance language */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Formation at a glance</h3>
              <div className="space-y-4">
                {[
                  { stage: 'Connect', desc: 'First-time visitor → regular attender', pct: '100%' },
                  { stage: 'Grow', desc: 'Joins small group or Bible study', pct: '65%' },
                  { stage: 'Serve', desc: 'Active in a ministry area', pct: '40%' },
                  { stage: 'Go', desc: 'Leading and multiplying others', pct: '15%' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <span className="font-semibold text-slate-900">{item.stage}</span>
                        <span className="text-slate-500 text-sm ml-2">{item.desc}</span>
                      </div>
                      <span className="font-bold text-slate-700 text-sm">{item.pct}</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full">
                      <div
                        className="h-2 bg-violet-500 rounded-full transition-all"
                        style={{ width: item.pct }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* MM-3: pastoral care frame replaces "engagement predictor / drifting" language */}
              <div className="mt-6 p-4 bg-violet-50 rounded-xl border border-violet-100">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Care prompts</p>
                    <p className="text-sm text-slate-600">
                      Surfaces members who may need a check-in — so no one slips through unnoticed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DISCIPLESHIP STATS (MM-8) ─── */}
      {/*
        Three stats only — all three have verifiable well-known research sources.
        REMOVED: "3x more giving from engaged members" (source: "Generosity Research" —
        not a real citable source; also MM-2 prohibits giving-as-homepage-H2 frame).
        TODO(owner): if Barna/LifeWay/Pew links change, update the source strings here.
      */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">The Challenge</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              The discipleship gap is real
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Most churches want to make disciples. Few have the tools to track, measure, and accelerate the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {discipleshipStats.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-violet-600 mb-2">{item.stat}</div>
                <p className="text-slate-700 font-medium mb-1">{item.label}</p>
                <p className="text-xs text-slate-500">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPLORE BY ROLE (worship-first) ─── */}
      {/*
        MM-1: Three role cards — worship-primary audience front and center.
        Treasurers and Conference Leaders removed from homepage role navigation;
        they appear in /solutions sub-pages as the "grows with your whole church" story.
      */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Find Your Path</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Built for your role in the ministry
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every role has unique needs. Start with what matters most to you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {exploreAreas.map((area, i) => (
              <Link
                href={area.href || '#'}
                key={i}
                className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-violet-300 transition-all block cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-100 group-hover:bg-violet-200 flex items-center justify-center mb-4 transition-colors">
                  <area.icon className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-violet-700 transition-colors">
                  {area.title}
                </h3>
                <p className="text-slate-600 text-sm group-hover:text-slate-700">{area.description}</p>
              </Link>
            ))}
          </div>

          {/* MM-1: Expansion story — other ministries as "and it grows with your whole church" */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">And it grows with your whole church</h3>
            <p className="text-slate-600 text-sm mb-6">
              Start with worship. Add children's ministry, deacons, outreach, small groups, and more — each with their own pre-configured roles and permissions.
            </p>
            <div className="flex flex-wrap gap-3">
              {expansionMinistries.map((m, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-sm font-medium text-slate-700">{m.name}</span>
                </div>
              ))}
              <Link href="/solutions" className="flex items-center gap-1 px-3 py-1.5 text-violet-600 text-sm font-medium hover:text-violet-700">
                See all solutions <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PCO INTEGRATION (MM-4) ─── */}
      {/*
        MM-4: PCO integration is made first-class per recommendation.
        TODO(owner): Confirm the current status of the PCO integration
          (is it fully live, in beta, or planned?) and update the badge/copy below.
          Current label "PCO import (beta)" matches what's in the hero subtext,
          so this section is consistent with that — but owner should verify.
      */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700">
                <span className="text-xl font-bold text-white">PCO</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Already using Planning Center?</h3>
                {/* TODO(owner): update copy if PCO integration moves beyond beta */}
                <p className="text-slate-400">
                  Import your existing data and keep your Planning Center workflows.
                  Add AI coaching, service analysis, and discipleship tracking on top.
                </p>
                <span className="inline-block mt-1 text-xs text-amber-400 font-medium">PCO import in beta</span>
              </div>
            </div>
            <button
              onClick={openBetaModal}
              className="flex-shrink-0 px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors"
            >
              Get early access
            </button>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT OVERVIEW ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Everything your ministry needs, in one place
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Plan services, develop your team, communicate clearly, and analyze what's working — without switching between tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(productCategories).map(([key, category]) => (
              <div key={key} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{category.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{category.description}</p>
                <div className="space-y-3">
                  {category.products.map((product, i) => (
                    <Link
                      key={i}
                      href={product.href}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center group-hover:bg-violet-50 transition-colors border border-slate-200">
                        <product.icon className="w-4 h-4 text-violet-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-slate-900 group-hover:text-violet-600">{product.name}</span>
                          {product.badge && (
                            <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-violet-100 text-violet-700 rounded">
                              {product.badge}
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-violet-600 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/products" className="text-violet-600 font-medium hover:text-violet-700">
              View all products →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRUST — PW-4: one GCP sentence; no badge wall ─── */}
      {/*
        PW-4: Replaced the 4-column badge wall with a single trust row.
        HIPAA removed — it's noise on a church platform (MM-9).
        GCP sentence is factual (infrastructure is confirmed Google Cloud Platform).
        SOC 2 / ISO 27001 / GDPR language is GCP's own certifications — accurate via GCP.
      */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-slate-500" />
              <p className="text-sm text-slate-600">
                Built on Google Cloud Platform — SOC 2 certified infrastructure, encrypted at rest and in transit, GDPR-ready.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> End-to-end encryption</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> Role-based access</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> Real human support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA (PW-2: consistent CTA verb) ─── */}
      {/*
        MM-6: CTA consolidated to one primary verb per PW-2.
        "Get Early Access" removed to avoid CTA fragmentation.
      */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to start with a better Monday morning?
          </h2>
          <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
            Give WorshipWise 30 days. Your team will notice the difference.
          </p>
          {/* TODO(owner): add founder story/bio — MM-11 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBetaModal}
              className="w-full sm:w-auto px-8 py-4 bg-white text-violet-700 font-semibold rounded-lg hover:bg-violet-50 transition-all text-lg"
            >
              Start free — 30 days
            </button>
            <button
              onClick={handleTryDemo}
              disabled={isDemoLoading}
              className="w-full sm:w-auto px-8 py-4 bg-violet-600/80 text-white font-semibold rounded-lg border border-violet-500 hover:bg-violet-600 transition-all text-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isDemoLoading ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Setting up demo...</>
              ) : (
                'Watch the demo'
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      {/*
        MM-9: Removed the "HIPAA-eligible infrastructure" line — noise on a church platform.
        MM-9: Collapsed the 4-column compliance wall into a single clean footer bottom bar
          (this inline footer retains the home page style; MarketingFooter.tsx handles other pages).
        PW-1: "Log In" is footer-only, not a hero CTA.
        MM-11: TODO(owner) — add founder story / About page link once bio is written.
      */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logos/ministry-motion-text-logo-white.svg" alt="Ministry Motion" className="h-8 w-auto" />
              </div>
              <p className="text-sm text-slate-400 mb-6 max-w-xs">
                The complete platform for church ministry — built for discipleship, powered by AI.
              </p>
              {/* TODO(owner): MM-11 — add founder bio and About page link */}
              <div className="flex items-center gap-4">
                <a href="https://twitter.com/ministrymotion" className="text-slate-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="https://linkedin.com/company/ministrymotion" className="text-slate-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://youtube.com/@ministrymotion" className="text-slate-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/products" className="hover:text-white">Products</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/compare" className="hover:text-white">Compare</Link></li>
                {/* PW-1: Log In is footer / secondary — not a hero CTA */}
                <li><Link href="https://app.ministrymotion.com/login" className="hover:text-white">Log In</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* MM-9: Simplified compliance row — HIPAA removed, no badge wall */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-500">
                © 2026 Ministry Motion. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
                <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                <span className="text-slate-700">•</span>
                <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                <span className="text-slate-700">•</span>
                <span>Built on Google Cloud Platform</span>
                <span className="text-slate-700">•</span>
                <span>SOC 2 certified infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
