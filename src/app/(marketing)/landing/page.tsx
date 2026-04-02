'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Mic2, Users, Calendar, BarChart3, MessageSquare, Sparkles,
  Check, Headphones, BookOpen, Heart, Music, ChevronRight, Play,
  Zap, Target, TrendingUp, Shield, Clock, Globe, Layers, Radio,
  Brain, Video, ArrowRight, Church, Star, Award, Flame, Volume2,
  AudioWaveform, GitCompare, Gauge
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';
import { TryDemoButton } from '@/components/demo/TryDemoButton';

/* ─── Animated pitch visualizer (simulates real-time pitch detection) ─── */
function PitchVisualizer() {
  const [bars, setBars] = useState<number[]>(Array(32).fill(10));
  const [currentNote, setCurrentNote] = useState('A4');
  const [cents, setCents] = useState(0);
  const [accuracy, setAccuracy] = useState(94);

  useEffect(() => {
    const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.random() * 80 + 10));
      setCurrentNote(notes[Math.floor(Math.random() * notes.length)]);
      setCents(Math.floor(Math.random() * 20) - 10);
      setAccuracy(Math.floor(Math.random() * 8) + 92);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-emerald-400 font-mono">LIVE ANALYSIS</span>
        </div>
        <span className="text-xs text-slate-500 font-mono">44.1kHz / 16-bit</span>
      </div>

      {/* Waveform bars */}
      <div className="flex items-end gap-0.5 h-20 mb-4">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t transition-all duration-100"
            style={{
              height: `${h}%`,
              background: `linear-gradient(to top, ${h > 60 ? '#10b981' : h > 30 ? '#3b82f6' : '#6366f1'}, transparent)`
            }}
          />
        ))}
      </div>

      {/* Note display */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-4xl font-bold text-white font-mono">{currentNote}</span>
          <span className={`text-lg font-mono ${cents >= 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
            {cents >= 0 ? '+' : ''}{cents}¢
          </span>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-emerald-400">{accuracy}%</div>
          <div className="text-xs text-slate-500">accuracy</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Animated SATB blend radar ─── */
function BlendRadar() {
  const [scores, setScores] = useState({ s: 85, a: 78, t: 82, b: 90 });

  useEffect(() => {
    const interval = setInterval(() => {
      setScores({
        s: Math.floor(Math.random() * 15) + 80,
        a: Math.floor(Math.random() * 15) + 75,
        t: Math.floor(Math.random() * 15) + 78,
        b: Math.floor(Math.random() * 15) + 82,
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const parts = [
    { label: 'Soprano', score: scores.s, color: '#f43f5e' },
    { label: 'Alto', score: scores.a, color: '#f59e0b' },
    { label: 'Tenor', score: scores.t, color: '#3b82f6' },
    { label: 'Bass', score: scores.b, color: '#10b981' },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-white">Ensemble Blend Score</span>
        <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full font-mono">
          {Math.round((scores.s + scores.a + scores.t + scores.b) / 4)}% overall
        </span>
      </div>
      <div className="space-y-3">
        {parts.map((part) => (
          <div key={part.label} className="flex items-center gap-3">
            <span className="text-xs text-slate-400 w-16 font-mono">{part.label}</span>
            <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${part.score}%`, backgroundColor: part.color }}
              />
            </div>
            <span className="text-xs text-white font-mono w-8">{part.score}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Stats counter animation ─── */
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

/* ─── Main Page ─── */
export default function LandingPage() {
  const { openBetaModal } = useMarketing();
  const [activeAgent, setActiveAgent] = useState(0);

  const agents = [
    {
      name: 'Virtuoso Coach',
      icon: Mic2,
      description: 'Real-time vocal analysis with pitch detection, breath control feedback, and personalized training plans',
      color: 'from-blue-500 to-cyan-500',
      demo: 'Analyzing soprano section... Pitch accuracy: 94%. Vibrato rate: 5.8Hz (ideal). Breath support: improving 12% this month.'
    },
    {
      name: 'Service Analyzer',
      icon: Video,
      description: 'Auto-analyzes YouTube worship recordings for theme alignment, transitions, and congregation engagement',
      color: 'from-purple-500 to-pink-500',
      demo: 'Analyzing "Way Maker" from Sunday service... Theme alignment: 96%. Transition smoothness: 88%. Energy arc: optimal build pattern detected.'
    },
    {
      name: 'Engagement Predictor',
      icon: Heart,
      description: 'Identifies members at risk of drifting before it happens using behavioral signals and journey data',
      color: 'from-rose-500 to-orange-500',
      demo: '3 members showing engagement decline: Marcus (missed 3 rehearsals), Sarah (no small group in 4 weeks), James (giving pattern shift). Suggested interventions ready.'
    },
    {
      name: 'Ministry Matcher',
      icon: Target,
      description: 'Recommends optimal ministry placements based on spiritual gifts, skills, personality, and team needs',
      color: 'from-emerald-500 to-teal-500',
      demo: 'Rachel scored 92% ministry fit for Children\'s Ministry Director based on: teaching gift (high), organizational strength, 18 months volunteer experience, leadership readiness score.'
    },
    {
      name: 'Moderation Agent',
      icon: Shield,
      description: 'Theology-aware chat moderation that understands denomination context and pastoral sensitivity',
      color: 'from-amber-500 to-yellow-500',
      demo: 'Reviewing message in Prayer Requests channel... Content: appropriate. Tone: pastoral. Sensitivity: none flagged. Denomination context: Baptist — approved.'
    },
    {
      name: 'Denomination AI',
      icon: Church,
      description: 'Adapts terminology, worship style recommendations, and governance to your theological tradition',
      color: 'from-indigo-500 to-violet-500',
      demo: 'Context loaded: Assembly of God tradition. Adjusting: worship style → charismatic, governance → elder-led, terminology → "altar call" not "invitation", spiritual gifts → including prophetic.'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAgent(prev => (prev + 1) % agents.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased">

      {/* ═══════════════════════════════════════════════════════════════════
          HERO — Lead with the impossible: live pitch visualization
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-600/15 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-200">The AI-Native Worship Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
                See Every Voice.{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Grow Every Member.
                </span>
              </h1>

              <p className="text-xl text-blue-100/80 max-w-xl mb-8 leading-relaxed">
                Real-time vocal analysis, AI coaching agents, and the only discipleship
                journey engine built specifically for worship ministry.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <button
                  onClick={openBetaModal}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
                >
                  Start Free Trial
                </button>
                <Link
                  href="/demo"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all text-lg flex items-center gap-2 group"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch 2-Min Demo
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-blue-200/60">
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-emerald-400" /> No credit card</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-emerald-400" /> 30 days free</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-emerald-400" /> PCO import</span>
              </div>

              <div className="mt-4">
                <TryDemoButton size="md" redirectTo="/dashboard" />
              </div>
            </div>

            {/* Right: Live pitch visualizer */}
            <div className="space-y-4">
              <PitchVisualizer />
              <BlendRadar />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PERSONA CTAs — Role-specific navigation after hero
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-400 mb-5 font-medium uppercase tracking-widest">Find your solution</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "I'm a Praise Leader", href: '/solutions/praise-leaders', gradient: 'from-blue-500 to-cyan-500' },
              { label: "I'm a Worship Director", href: '/solutions/worship-directors', gradient: 'from-violet-500 to-purple-500' },
              { label: "I'm a Ministries Director", href: '/solutions/ministries-directors', gradient: 'from-emerald-500 to-teal-500' },
              { label: "I'm a Church Admin", href: '/solutions/church-admins', gradient: 'from-amber-500 to-orange-500' },
              { label: "I'm Church Leadership", href: '/solutions/leadership', gradient: 'from-rose-500 to-pink-500' },
            ].map((persona) => (
              <Link
                key={persona.href}
                href={persona.href}
                className={`px-5 py-2.5 rounded-full bg-gradient-to-r ${persona.gradient} text-white text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg`}
              >
                {persona.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ROI BANNER — Savings highlight
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-5 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <span className="text-2xl">💰</span>
            <p className="text-white font-semibold">
              Churches save an average of <strong className="text-emerald-100 text-xl">$10,608/year</strong> by consolidating to MinistryMotion — replacing the core features of 6 subscriptions with one platform.
            </p>
            <Link href="/compare" className="flex-shrink-0 px-4 py-2 bg-white text-emerald-700 text-sm font-bold rounded-full hover:bg-emerald-50 transition-colors">
              See the math
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SOCIAL PROOF BAR — Numbers + logos
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-slate-50 dark:bg-slate-800 border-y border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {[
              { number: '200+', label: 'Features Built for Ministry' },
              { number: '8+', label: 'AI Agents' },
              { number: '24', label: 'Ministry Containers' },
              { number: '$10,608', label: 'Avg. Annual Savings' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">{stat.number}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHAT NO COMPETITOR CAN DO — Category creation
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Category Defining</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
              Capabilities Built for Worship Ministry
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              This isn't a better ChMS. It's a new category of ministry intelligence platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AudioWaveform,
                title: 'Real-Time Pitch Detection',
                description: 'Autocorrelation-based pitch analysis at 44.1kHz. See every singer\'s accuracy in real-time during rehearsals.',
                badge: 'AI-Powered',
                color: 'blue'
              },
              {
                icon: GitCompare,
                title: 'SATB Voice Separation',
                description: 'Upload any worship song and get isolated Soprano, Alto, Tenor, and Bass practice tracks in 30 seconds.',
                badge: 'Patentable',
                color: 'violet'
              },
              {
                icon: Volume2,
                title: 'Blend Analysis Engine',
                description: 'Spectral analysis detects formant stability, vibrato rate, and ensemble blend quality across your worship team.',
                badge: 'Unique',
                color: 'emerald'
              },
              {
                icon: Brain,
                title: '20 AI Agents',
                description: 'From vocal coaching to engagement prediction to ministry matching — autonomous agents that understand theology and denomination context.',
                badge: 'AI-Native',
                color: 'rose'
              },
              {
                icon: Target,
                title: 'Gamified Discipleship Journey',
                description: 'Connect → Grow → Serve → Go pathway with XP, badges, streaks, and AI-recommended next steps.',
                badge: 'Engagement',
                color: 'amber'
              },
              {
                icon: Layers,
                title: 'Cross-Church Intelligence',
                description: 'Anonymous benchmarking and shared insights across your denomination or church network.',
                badge: 'Network Effect',
                color: 'cyan'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:-translate-y-1"
              >
                <div className="absolute -top-3 right-6">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${feature.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                    feature.color === 'violet' ? 'from-violet-500 to-purple-500' :
                      feature.color === 'emerald' ? 'from-emerald-500 to-teal-500' :
                        feature.color === 'rose' ? 'from-rose-500 to-pink-500' :
                          feature.color === 'amber' ? 'from-amber-500 to-yellow-500' :
                            'from-cyan-500 to-blue-500'
                    } text-white shadow-lg`}>
                    {feature.badge}
                  </span>
                </div>
                <feature.icon className={`w-10 h-10 mb-4 ${feature.color === 'blue' ? 'text-blue-600' :
                  feature.color === 'violet' ? 'text-violet-600' :
                    feature.color === 'emerald' ? 'text-emerald-600' :
                      feature.color === 'rose' ? 'text-rose-600' :
                        feature.color === 'amber' ? 'text-amber-600' :
                          'text-cyan-600'
                  }`} />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          AI AGENTS CAROUSEL — Interactive showcase
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Autonomous Intelligence</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              20 AI Agents Working While You Sleep
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Not chatbots. Not templates. Autonomous agents that understand your church's theology, culture, and people.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Agent selector */}
            <div className="space-y-2">
              {agents.map((agent, i) => (
                <button
                  key={i}
                  onClick={() => setActiveAgent(i)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${activeAgent === i
                    ? 'bg-white/10 border border-white/20 shadow-lg'
                    : 'hover:bg-white/5 border border-transparent'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${agent.color} flex items-center justify-center`}>
                      <agent.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{agent.name}</div>
                      <div className="text-sm text-slate-400 line-clamp-1">{agent.description}</div>
                    </div>
                    {activeAgent === i && (
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Active agent demo */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${agents[activeAgent].color} flex items-center justify-center`}>
                  {(() => {
                    const Icon = agents[activeAgent].icon;
                    return <Icon className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{agents[activeAgent].name}</h3>
                  <p className="text-sm text-slate-400">{agents[activeAgent].description}</p>
                </div>
              </div>

              {/* Simulated agent output */}
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-mono">Agent Processing...</span>
                </div>
                <p className="text-sm text-slate-300 font-mono leading-relaxed">
                  {agents[activeAgent].demo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PRODUCT PLATFORM — Modular like PCO but deeper
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              One Platform, Every Ministry Need
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Everything Planning Center offers plus everything they can't: vocal AI, discipleship tracking, and autonomous agents.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Plan & Schedule',
                gradient: 'from-blue-500 to-cyan-500',
                products: [
                  { name: 'Service Planning', desc: 'AI-powered song selection & theme alignment', icon: Calendar },
                  { name: 'Team Scheduling', desc: 'Auto-schedule based on skills & availability', icon: Users },
                  { name: 'Digital Rehearsals', desc: 'SATB tracks, live sessions, practice tools', icon: Headphones },
                ]
              },
              {
                category: 'Develop & Train',
                gradient: 'from-violet-500 to-purple-500',
                products: [
                  { name: 'AI Vocal Coaching', desc: 'AI-powered vocal coaching for recorded practice sessions', icon: Mic2 },
                  { name: 'Learning Hub', desc: 'Growing library of worship training courses', icon: BookOpen },
                  { name: 'Discipleship Journeys', desc: 'Connect → Grow → Serve → Go with XP', icon: Target },
                ]
              },
              {
                category: 'Engage & Analyze',
                gradient: 'from-emerald-500 to-teal-500',
                products: [
                  { name: 'Community Chat', desc: 'AI-moderated, denomination-aware messaging', icon: MessageSquare },
                  { name: 'Service Analytics', desc: 'YouTube analysis, engagement metrics', icon: BarChart3 },
                  { name: 'Ministry Health', desc: 'Burnout indicators, growth metrics, pipeline', icon: TrendingUp },
                ]
              }
            ].map((group, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${group.gradient}`} />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">{group.category}</h3>
                  <div className="space-y-4">
                    {group.products.map((product, j) => (
                      <div key={j} className="flex items-start gap-3 group cursor-pointer">
                        <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center border border-slate-200 dark:border-slate-600 group-hover:border-blue-400 transition-colors flex-shrink-0">
                          <product.icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 transition-colors">{product.name}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{product.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 group">
              Explore all products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          COMPARISON — vs Planning Center
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Ministry Motion vs Planning Center
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Keep what works. Add what's missing.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl">
            <div className="grid grid-cols-3 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
              <div className="p-4 font-semibold text-slate-500 text-sm">Feature</div>
              <div className="p-4 font-semibold text-slate-500 text-sm text-center">Planning Center</div>
              <div className="p-4 font-semibold text-blue-600 text-sm text-center">Ministry Motion</div>
            </div>
            {[
              { feature: 'Service Planning', pco: true, mm: true },
              { feature: 'Team Scheduling', pco: true, mm: true },
              { feature: 'Giving', pco: true, mm: true },
              { feature: 'Check-in', pco: true, mm: true },
              { feature: 'Real-time Vocal Analysis', pco: false, mm: true },
              { feature: 'SATB Voice Separation', pco: false, mm: true },
              { feature: 'AI Coaching Agents', pco: false, mm: true },
              { feature: 'Discipleship Journey + XP', pco: false, mm: true },
              { feature: 'Service Video Analysis', pco: false, mm: true },
              { feature: 'Denomination Context AI', pco: false, mm: true },
              { feature: 'Blend Analysis Engine', pco: false, mm: true },
              { feature: 'Cross-Church Intelligence', pco: false, mm: true },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-slate-100 dark:border-slate-800 ${!row.pco && row.mm ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''
                }`}>
                <div className="p-4 text-sm text-slate-700 dark:text-slate-300">{row.feature}</div>
                <div className="p-4 text-center">
                  {row.pco ? (
                    <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                  ) : (
                    <span className="text-slate-300 dark:text-slate-600">—</span>
                  )}
                </div>
                <div className="p-4 text-center">
                  <Check className="w-5 h-5 text-blue-600 mx-auto" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-xl hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors"
            >
              See Full Comparison
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          DISCIPLESHIP JOURNEY — Interactive visualization
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <span className="text-sm font-semibold text-blue-200 uppercase tracking-wider">The Journey Engine</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 mt-2">
                From Visitor to Servant Leader — Tracked & Gamified
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                A purpose-built discipleship progression system for worship ministries.
                XP rewards, achievement badges, and AI-recommended next steps
                keep your members growing.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Flame, label: 'Streak tracking for daily devotional habits' },
                  { icon: Award, label: 'Achievement badges for ministry milestones' },
                  { icon: TrendingUp, label: 'Progress dashboards visible to pastors' },
                  { icon: Brain, label: 'AI suggests next learning path based on journey data' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-blue-50">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Journey visualizer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                {[
                  { stage: 'Connect', desc: 'First visit → regular attendance', xp: '0-100 XP', pct: 100, color: 'bg-emerald-400' },
                  { stage: 'Grow', desc: 'Small group + Bible study', xp: '100-500 XP', pct: 65, color: 'bg-blue-400' },
                  { stage: 'Serve', desc: 'Active in ministry + volunteering', xp: '500-2000 XP', pct: 40, color: 'bg-violet-400' },
                  { stage: 'Go', desc: 'Leading others + multiplying', xp: '2000+ XP', pct: 15, color: 'bg-amber-400' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-bold text-white text-lg">{item.stage}</span>
                        <span className="text-blue-200 text-sm ml-3">{item.desc}</span>
                      </div>
                      <span className="text-xs font-mono text-blue-200/60">{item.xp}</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm text-blue-200">Your church: <strong className="text-white">247 members tracked</strong></span>
                <Gauge className="w-5 h-5 text-blue-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TESTIMONIALS — Social proof
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What Worship Leaders Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The real-time pitch analysis during rehearsal has transformed how we prepare. Our blend improved measurably in 3 weeks.",
                name: 'Sarah Mitchell',
                role: 'Worship Director, Grace Community',
                metric: '+23% blend accuracy'
              },
              {
                quote: "Finally a platform that understands church ministry structures. We were set up in an hour, not weeks. The AI coaching is incredible.",
                name: 'Pastor David Chen',
                role: 'Senior Pastor, Living Hope Church',
                metric: '4x engagement increase'
              },
              {
                quote: "The discipleship journey engine changed everything for us. We can finally track where every member is and what they need next.",
                name: 'Angela Roberts',
                role: 'Ministry Director, Faith Baptist',
                metric: '85% volunteer retention'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 relative">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full">
                    {testimonial.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHY CHURCHES SWITCH — Quotes + social proof
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Switch Stories</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
              Why Churches Switch to Ministry Motion
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Real feedback from worship teams and church leaders who made the move.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "We were paying over $1,000/month between PCO, Circle, and Zoom. Now we have everything in one place—and the AI coaching alone is worth more than all of them combined.",
                name: 'Marcus Thompson',
                role: 'Worship Director, Cornerstone Church',
                tag: 'Switched from PCO + Circle + Zoom'
              },
              {
                quote: "What sold our board was the data. We can now show leadership exactly where each member is in their discipleship journey. That's something no other platform could do.",
                name: 'Pastor Linda Kim',
                role: 'Senior Pastor, New Hope Fellowship',
                tag: 'Switched from Breeze ChMS'
              },
              {
                quote: "The vocal analysis feature changed rehearsals overnight. Our soprano section improved measurably in two weeks. I wish we'd found this sooner.",
                name: 'James Adeyemi',
                role: 'Praise Team Leader, Grace Baptist',
                tag: 'Switched from spreadsheets + WhatsApp'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 relative flex flex-col">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-6 italic flex-1">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                  <span className="inline-block mt-2 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded">
                    {testimonial.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PRICING PREVIEW
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Unlike Planning Center's per-product pricing, you get everything in one plan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Free',
                price: '$0',
                desc: 'Try Ministry Motion risk-free',
                features: ['Up to 5 team members', 'Service planning + scheduling', 'Basic vocal assessment', 'Community chat', '50 song library'],
                cta: 'Start Free Trial',
                highlight: false
              },
              {
                name: 'Small Church',
                price: '$99',
                desc: 'For growing worship teams',
                features: ['Up to 15 team members', 'Digital rehearsals + SATB tracks', 'Basic assessments', 'Integrated giving', 'PCO integration', '3 Learning Hub courses'],
                cta: 'Sign Up for Beta',
                highlight: false
              },
              {
                name: 'Pro',
                price: '$199',
                desc: 'Full AI experience for active churches',
                features: ['Up to 100 team members', '20 AI Agents', 'All 18+ courses + Interactive Labs', 'Advanced analytics', 'Service video analysis', 'Discipleship journey engine'],
                cta: 'Sign Up for Beta',
                highlight: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                desc: 'For large churches & networks',
                features: ['Unlimited members', 'Everything in Pro', 'Cross-church intelligence', 'Multi-campus support', 'API access', 'Dedicated support + SLA'],
                cta: 'Contact Sales',
                highlight: false
              }
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border ${plan.highlight
                  ? 'bg-white dark:bg-slate-900 border-blue-500 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500 relative'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
                  }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                  {plan.price !== '$0' && plan.price !== 'Custom' && (
                    <span className="text-slate-500">/mo</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openBetaModal}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.highlight
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/25'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Your Worship Team Deserves{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI-Powered Growth</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
            Join the churches seeing measurable vocal improvement, deeper engagement, and transformed ministry effectiveness.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBetaModal}
              className="px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
            >
              Start Your Free 30-Day Trial
            </button>
            <Link
              href="/demo"
              className="px-10 py-5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all text-lg"
            >
              Book a Demo
            </Link>
          </div>
          <p className="text-sm text-blue-200/40 mt-6">
            No credit card required · Free Planning Center import · Set up in under an hour
          </p>
        </div>
      </section>

      {/* Footer (reuses same structure) */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Radio className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-bold">Ministry Motion</span>
              </div>
              <p className="text-sm text-slate-400 mb-6 max-w-xs">
                The AI-native worship platform. Built for the church, powered by 20 specialized AI agents.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Products</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/products/vocal-coaching" className="hover:text-white">AI Vocal Coaching</Link></li>
                <li><Link href="/products/service-planning" className="hover:text-white">Service Planning</Link></li>
                <li><Link href="/products/analytics" className="hover:text-white">Service Analytics</Link></li>
                <li><Link href="/products/journeys" className="hover:text-white">Discipleship Journeys</Link></li>
                <li><Link href="/products/communications" className="hover:text-white">Communications</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Solutions</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/solutions/worship-leaders" className="hover:text-white">For Worship Leaders</Link></li>
                <li><Link href="/solutions/pastors" className="hover:text-white">For Pastors</Link></li>
                <li><Link href="/solutions/ministry-directors" className="hover:text-white">For Ministry Directors</Link></li>
                <li><Link href="/compare" className="hover:text-white">vs Planning Center</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/security" className="hover:text-white">Security</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">© 2026 Ministry Motion. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>Built on Google Cloud</span>
              <span>·</span>
              <span>Built on SOC 2 certified infrastructure</span>
              <span>·</span>
              <span>GDPR Ready</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
