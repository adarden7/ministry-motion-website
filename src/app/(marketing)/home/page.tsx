'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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
  GraduationCap,
  Crown,
  Play,
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
  Church,
  Baby,
  HandHeart,
  Megaphone,
  Workflow,
  LineChart,
  Award,
  Smartphone,
  CircleDot,
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';

// The 14 Pillars of Capability - from strategic doc
const pillars = [
  {
    name: 'People Management',
    description: 'Behavioral analysis, spiritual gifts assessment, and AI-powered ministry matching',
    icon: Users,
    industryFirst: 'Ministry Matching AI',
    impact: 'Transforms a database into a transformation tracking tool',
  },
  {
    name: 'Service Planning',
    description: 'AI song selection, theological consistency scoring, plan vs. actual analysis',
    icon: Calendar,
    industryFirst: 'Theological Scoring',
    impact: 'Moves beyond scheduling to actual service analysis',
  },
  {
    name: 'Rehearsal & Music',
    description: 'SATB track generation, voice part isolation, live digital rehearsal (<100ms)',
    icon: Music,
    industryFirst: 'AI Track Generation',
    impact: 'Extinction event for MultiTracks—we generate what they sell',
  },
  {
    name: 'Vocal Coaching',
    description: 'Real-time pitch/health analysis, AI avatar coaching with HeyGen integration',
    icon: Mic2,
    industryFirst: '1000-Dimension Analysis',
    impact: 'No ChMS competitor has this. Period.',
  },
  {
    name: 'Learning Hub',
    description: 'Denomination-specific courses with course-to-ministry pathways',
    icon: BookOpen,
    industryFirst: 'Ministry Qualification',
    impact: 'Course completion = ministry qualification',
  },
  {
    name: 'Community',
    description: 'Ministry-aware spaces with gamification and spiritual progression',
    icon: MessageSquare,
    industryFirst: 'Ministry Context',
    impact: 'Community that knows ministry context, unlike Circle/Mighty',
  },
  {
    name: 'Communications',
    description: 'Context-aware messaging, unified inbox, AI-moderated chat',
    icon: Megaphone,
    industryFirst: 'Unified Inbox',
    impact: 'Replaces 5-7 disconnected tools with one source of truth',
  },
  {
    name: 'Giving',
    description: 'Journey-embedded giving with stewardship journey integration',
    icon: Heart,
    industryFirst: 'Discipleship Giving',
    impact: 'Giving becomes a discipleship outcome, not just a transaction',
  },
  {
    name: 'Service Analytics',
    description: 'AI video analysis, song detection, voice ID, real-time alerts',
    icon: Video,
    industryFirst: 'AI Video Analysis',
    impact: 'No church platform does this. None.',
  },
  {
    name: 'Journeys',
    description: 'Simple Church model implementation with auto-enrollment and ministry activation',
    icon: Target,
    industryFirst: 'Auto-Enrollment',
    impact: 'Creates journeys that actually move people in their faith',
  },
  {
    name: 'Calendar',
    description: 'Ministry-unified calendar with course deadline integration',
    icon: Calendar,
    industryFirst: 'Cross-Ministry Sync',
    impact: 'Single, integrated view across all ministries',
  },
  {
    name: 'Task Management',
    description: 'Ministry-tied activity tracking with mission-aligned reporting',
    icon: Workflow,
    industryFirst: 'Mission Alignment',
    impact: 'Tasks tied directly to church values and mission',
  },
  {
    name: 'Multi-Tenant',
    description: 'Regional/conference aggregation with cross-tenant benchmarking',
    icon: Layers,
    industryFirst: 'Cross-Tenant Intel',
    impact: 'Unprecedented denominational intelligence',
  },
  {
    name: 'Mobile',
    description: 'Virtual weekly coaching, real-time service alerts, practice anywhere',
    icon: Smartphone,
    industryFirst: 'Mobile Coaching',
    impact: 'Practice and coaching anywhere, anytime',
  },
];

// Research-backed statistics
const researchStats = [
  {
    stat: 39,
    suffix: '%',
    label: "of Christians aren't being discipled",
    source: 'Lifeway Research',
    solution: 'Journey tracking + mentor matching',
  },
  {
    stat: 3,
    suffix: 'x',
    label: 'more giving from engaged members',
    source: 'Vanco Research',
    solution: 'Ministry matching + engagement tracking',
  },
  {
    stat: 43,
    suffix: '%',
    label: 'who leave felt disconnected',
    source: 'Church Studies',
    solution: 'At-risk detection + proactive outreach',
  },
  {
    stat: 87,
    suffix: '%',
    label: 'of leaders are open to AI',
    source: 'Ministry Tech Survey',
    solution: 'AI-native architecture',
  },
];

// Pre-built ministry structures
const ministryStructures = [
  { name: 'Worship Ministry', icon: Music, roles: ['Worship Director', 'Vocalists', 'Musicians', 'Sound Tech', 'Media'] },
  { name: "Children's Ministry", icon: Baby, roles: ['Director', 'Teachers', 'Check-in', 'Nursery', 'Security'] },
  { name: 'Deacon/Elder Board', icon: Shield, roles: ['Head Deacon', 'Deacons', 'Elders', 'Trustees'] },
  { name: 'Outreach & Missions', icon: Globe, roles: ['Director', 'Evangelism', 'Community Service', 'Missions'] },
  { name: 'Small Groups', icon: Users, roles: ['Coordinator', 'Group Leaders', 'Hosts', 'Facilitators'] },
  { name: 'Media & Communications', icon: Megaphone, roles: ['Director', 'Social Media', 'Graphic Design', 'A/V Team'] },
];

// Competitive comparison
const competitorComparison = [
  { feature: 'Discipleship Journey Tracking', us: true, pco: false, tithely: false },
  { feature: 'AI Vocal Coaching', us: true, pco: false, tithely: false },
  { feature: 'SATB Track Generation', us: true, pco: false, tithely: false },
  { feature: 'Service Video Analysis', us: true, pco: false, tithely: false },
  { feature: 'Cross-Tenant Analytics', us: true, pco: false, tithely: false },
  { feature: '<100ms Digital Rehearsal', us: true, pco: false, tithely: false },
  { feature: 'Service Scheduling', us: true, pco: true, tithely: true },
  { feature: 'Online Giving', us: true, pco: false, tithely: true },
];

// The 5-layer architecture
const architectureLayers = [
  { name: 'Your 25-Year IP', description: 'Role templates, journey blueprints, assessments', color: 'blue' },
  { name: 'Configuration', description: 'Denomination-specific customization', color: 'emerald' },
  { name: 'Church Activation', description: 'Vision, mission, values instantiation', color: 'amber' },
  { name: 'Ministry Execution', description: 'Real-time role assignment and tracking', color: 'rose' },
  { name: 'Member Experience', description: 'Personalized journey and next steps', color: 'violet' },
];

export default function HomePage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased">
      {/* Hero Section - Revolutionary Messaging */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-500/15 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <AnimatedGradientText className="bg-slate-900/50 border-slate-700/50">
                <span className="inline-flex items-center gap-2 text-slate-200">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>Built on 25 Years of Church Consulting IP</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </AnimatedGradientText>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white"
            >
              Not Another ChMS.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                A Transformation Operating System.
              </span>
            </motion.h1>

            {/* The killer one-liner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10"
            >
              <p className="text-xl lg:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-medium">
                Planning Center tells you what was scheduled.{' '}
                <span className="text-white font-semibold">
                  Ministry Motion tells you what actually happened, who&apos;s growing, and what to do next.
                </span>
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            >
              <ShimmerButton
                onClick={openBetaModal}
                className="h-14 px-8 text-lg font-semibold"
                background="linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
              >
                Start Free Trial
              </ShimmerButton>
              <Link
                href="/demo"
                className="h-14 px-8 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all text-lg flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-blue-200/60"
            >
              100+ churches waiting • PCO integration included • No credit card required
            </motion.p>
          </div>
        </div>
      </section>

      {/* Research-Backed Problem Statement */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Research-Backed Problems We Solve
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
              The Church Has a Transformation Problem
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Every capability in Ministry Motion solves a documented problem, backed by rigorous research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchStats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  <NumberTicker value={item.stat} />
                  {item.suffix}
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">{item.label}</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mb-4">{item.source}</p>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium flex items-center justify-center gap-1">
                    <Check className="w-4 h-4" />
                    {item.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Revolutionary Difference */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                The Core Insight
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
                Your Competitors Built Tools.{' '}
                <span className="text-emerald-600 dark:text-emerald-400">You Need Transformation.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Traditional church software tracks attendance and schedules events. Ministry Motion tracks
                <strong className="text-slate-900 dark:text-white"> spiritual transformation</strong> and
                cultivates <strong className="text-slate-900 dark:text-white">generosity through discipleship</strong>.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Methodology-as-Software: 25 years of consulting IP encoded into the platform',
                  'AI-Native Architecture: Built for 2028, not retrofitted from 2015',
                  'Journey-Integrated Giving: Generosity as a discipleship milestone, not a transaction',
                  'Cross-Tenant Intelligence: Anonymized insights across denominations',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <Brain className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">6 Unique AI Agents</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Vocal Coach, Service Analyzer, Engagement Predictor, Ministry Matcher, Conflict Resolver, Denomination Context
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Visualization */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-6 text-center">
                The &quot;Growing &amp; Going System&quot; Architecture
              </h3>
              <div className="space-y-3">
                {architectureLayers.map((layer, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-4 rounded-xl border-2 ${
                      layer.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' :
                      layer.color === 'emerald' ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800' :
                      layer.color === 'amber' ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800' :
                      layer.color === 'rose' ? 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800' :
                      'bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">{layer.name}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{layer.description}</p>
                      </div>
                      <CircleDot className={`w-5 h-5 ${
                        layer.color === 'blue' ? 'text-blue-500' :
                        layer.color === 'emerald' ? 'text-emerald-500' :
                        layer.color === 'amber' ? 'text-amber-500' :
                        layer.color === 'rose' ? 'text-rose-500' :
                        'text-violet-500'
                      }`} />
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-sm text-slate-500 dark:text-slate-500 mt-6">
                Blueprint → Instance architecture for scalable IP deployment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 14 Pillars of Capability */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Industry-First Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
              14 Pillars That Create an Extinction Event
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Each pillar includes capabilities that no competitor offers—turning their products into features on our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pillars.slice(0, 8).map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{pillar.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">{pillar.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 rounded">
                        {pillar.industryFirst}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300"
            >
              Explore all 14 pillars
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Killer Features: Track Generation + Digital Rehearsal */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* AI Track Generation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI Track Generation</h3>
                  <span className="text-sm text-blue-200">Extinction Event for MultiTracks</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Current Industry Cost</span>
                  <span className="text-white font-bold">$6,000/year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Ministry Motion Cost</span>
                  <span className="text-emerald-300 font-bold">Included</span>
                </div>
                <div className="h-px bg-white/20" />
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 font-medium">Your Savings</span>
                  <span className="text-2xl text-white font-bold">$4,800+/year</span>
                </div>
              </div>

              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-300" />
                  SATB parts from any YouTube or sheet music source
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-300" />
                  Any key, any style, including non-CCM/Global South
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-300" />
                  Generated in under 30 seconds
                </li>
              </ul>
            </div>

            {/* Sub-100ms Digital Rehearsal */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">&lt;100ms Digital Rehearsal</h3>
                  <span className="text-sm text-blue-200">The Team Time Saver</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Traditional Rehearsal</span>
                  <span className="text-white font-bold">3 hours (+ travel)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Digital Rehearsal</span>
                  <span className="text-emerald-300 font-bold">90 minutes</span>
                </div>
                <div className="h-px bg-white/20" />
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 font-medium">Monthly Team Savings</span>
                  <span className="text-2xl text-white font-bold">60 hours</span>
                </div>
              </div>

              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-300" />
                  WebRTC-based ultra-low latency rooms
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-300" />
                  Perfect for post-COVID burned-out teams
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-300" />
                  Real-time pitch feedback during practice
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Built Ministry Structures */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
              Unlike Generic Platforms
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
              Pre-Built for How Churches Actually Work
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Circle and Mighty make you build everything from scratch. Ministry Motion comes with your ministry structures already configured.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ministryStructures.map((ministry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-xl border-2 ${
                  i === 0 ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' :
                  i === 1 ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800' :
                  i === 2 ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800' :
                  i === 3 ? 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800' :
                  i === 4 ? 'bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800' :
                  'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800'
                }`}
              >
                <ministry.icon className={`w-8 h-8 mb-4 ${
                  i === 0 ? 'text-blue-600 dark:text-blue-400' :
                  i === 1 ? 'text-emerald-600 dark:text-emerald-400' :
                  i === 2 ? 'text-amber-600 dark:text-amber-400' :
                  i === 3 ? 'text-rose-600 dark:text-rose-400' :
                  i === 4 ? 'text-violet-600 dark:text-violet-400' :
                  'text-cyan-600 dark:text-cyan-400'
                }`} />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">{ministry.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {ministry.roles.map((role, j) => (
                    <span key={j} className="px-2 py-1 bg-white/80 dark:bg-slate-800/80 text-xs text-slate-600 dark:text-slate-400 rounded">
                      {role}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Worship Collective Preview */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-violet-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-violet-500/20 rounded-full blur-[128px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400/30 mb-6">
                <Crown className="w-4 h-4 text-violet-300" />
                <span className="text-sm font-medium text-violet-200">Premium Offering</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                The Worship Collective
              </h2>
              <p className="text-xl text-violet-100 mb-8">
                An elite, gated experience for worship leaders who want to reach the highest levels of their craft.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'AI-powered vocal analysis with 1000-dimension tracking',
                  '$699 certification with in-person evaluation',
                  'Cross-tenant booking network for certified leaders',
                  'Events with national artists, praise leaders, and trainers',
                  'Enhanced AI journeys: "Sing like a specific artist"',
                  'University partnerships for worship-leading degrees',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-100">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/collective"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-900 font-semibold rounded-lg hover:bg-violet-50 transition-colors"
              >
                Explore the Collective
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-white font-semibold mb-6">Goal: 5,000 Churches by 2027</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-violet-200">1-3 members per church</span>
                    <span className="text-white font-medium">5,000-15,000 members</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full w-1/4" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-2xl font-bold text-white">$699</p>
                    <p className="text-sm text-violet-300">Certification Fee</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">$250K+</p>
                    <p className="text-sm text-violet-300">MRR Target (Phase 3)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Why We&apos;re Different
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
              Competitors Are Tools. We&apos;re Transformation.
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left p-4 text-slate-600 dark:text-slate-400 font-medium">Feature</th>
                  <th className="text-center p-4 text-blue-600 dark:text-blue-400 font-bold">Ministry Motion</th>
                  <th className="text-center p-4 text-slate-400 dark:text-slate-500 font-medium">PCO</th>
                  <th className="text-center p-4 text-slate-400 dark:text-slate-500 font-medium">Tithe.ly</th>
                </tr>
              </thead>
              <tbody>
                {competitorComparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-slate-50 dark:bg-slate-800/50' : ''}>
                    <td className="p-4 text-slate-700 dark:text-slate-300">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.us ? (
                        <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600">—</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.pco ? (
                        <Check className="w-5 h-5 text-slate-400 mx-auto" />
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600">—</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.tithely ? (
                        <Check className="w-5 h-5 text-slate-400 mx-auto" />
                      ) : (
                        <span className="text-slate-300 dark:text-slate-600">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-slate-500 dark:text-slate-500 mt-6">
            <Link href="/compare" className="text-blue-600 dark:text-blue-400 hover:underline">
              See full comparison →
            </Link>
          </p>
        </div>
      </section>

      {/* Kingdom Building Vision Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                Our Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
                Beyond Worship: Every Ministry Empowered
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                While AI vocal coaching and service analytics set us apart today, our vision is bigger:
                <strong className="text-slate-900 dark:text-white"> every ministry leader</strong> equipped with AI-powered tools
                to develop their people.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Health ministries with biometrics tracking. Finance ministries with stewardship tools.
                Children&apos;s ministries with Sabbath School integration. The same transformation framework
                that works for worship—extended to every ministry in your church.
              </p>

              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700 mb-8">
                <p className="text-slate-700 dark:text-slate-300 italic">
                  &ldquo;Imagine taking 100 fish and 500 loaves to the Master. That&apos;s the multiplication
                  possible when we use every tool available for Kingdom building.&rdquo;
                </p>
              </div>

              <Link
                href="/blog/kingdom-building-part-1-crisis"
                className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 font-semibold hover:gap-4 transition-all"
              >
                Read Our Kingdom Building Vision
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  title: 'The Right People',
                  description: 'Member progression tracking, new believer identification, participant journeys',
                },
                {
                  title: 'With the Right Gifts',
                  description: 'Spiritual assessments, AI-assisted matching, human-in-the-loop approval',
                },
                {
                  title: 'At the Right Time',
                  description: 'Journey completion triggers, skills attainment, XP level achievements',
                },
                {
                  title: 'Doing the Right Things',
                  description: 'Activity tracking, peer feedback, validated training completion',
                },
                {
                  title: 'In the Right Way',
                  description: 'Conflict resolution frameworks, value alignment, clear role definitions',
                },
                {
                  title: 'With the Right Support',
                  description: 'Discipleship insistence (#2 for everyone), analytics at every level',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-[128px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Ministry?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 100+ churches already waiting for the platform that tracks transformation, not just attendance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShimmerButton
              onClick={openBetaModal}
              className="h-14 px-8 text-lg font-semibold"
              background="linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)"
            >
              <span className="text-slate-900">Start Free Trial</span>
            </ShimmerButton>
            <Link
              href="/compare"
              className="h-14 px-8 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all text-lg flex items-center justify-center gap-2"
            >
              Compare to PCO
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <h3 className="text-xl font-bold mb-4">Ministry Motion</h3>
              <p className="text-slate-400 text-sm mb-6 max-w-xs">
                The first church transformation operating system. Built on 25 years of consulting IP, powered by AI.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/products/vocal-coaching" className="hover:text-white">AI Vocal Coaching</Link></li>
                <li><Link href="/products/service-planning" className="hover:text-white">Service Planning</Link></li>
                <li><Link href="/products/analytics" className="hover:text-white">Service Analytics</Link></li>
                <li><Link href="/products/learning" className="hover:text-white">Learning Hub</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/solutions/worship-leaders" className="hover:text-white">For Worship Leaders</Link></li>
                <li><Link href="/solutions/pastors" className="hover:text-white">For Pastors</Link></li>
                <li><Link href="/solutions/conferences" className="hover:text-white">For Conferences</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/compare" className="hover:text-white">Compare</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/collective" className="hover:text-white">Worship Collective</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              &copy; 2025 Ministry Motion. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
