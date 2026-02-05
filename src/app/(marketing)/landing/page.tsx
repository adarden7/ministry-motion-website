'use client';

import Link from 'next/link';
import {
  Mic2,
  Users,
  Calendar,
  BarChart3,
  MessageSquare,
  Sparkles,
  Check,
  X,
  Headphones,
  BookOpen,
  Heart,
  Music,
  ChevronDown,
  GraduationCap,
  Crown,
  ChevronRight,
  Play,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Globe,
  Layers,
  Radio,
  Brain,
  Video,
  ArrowRight
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

// PCO-style color palette: Teal primary, clean whites, subtle grays
// Primary: blue-600 (#0d9488)
// Background: white / slate-50
// Text: slate-900 / slate-600
// Accent: amber for highlights

// Product categories matching PCO's modular structure
const productCategories = {
  planSchedule: {
    title: 'Plan & Schedule',
    description: 'Organize your worship ministry',
    products: [
      {
        name: 'Service Planning',
        description: 'Build services with AI-powered song selection and theme alignment',
        icon: Calendar,
        href: '/products/service-planning',
        badge: 'AI-Enhanced'
      },
      {
        name: 'Team Scheduling',
        description: 'Auto-schedule volunteers based on availability and skills',
        icon: Users,
        href: '/products/scheduling',
        badge: null
      },
      {
        name: 'Unified Calendar',
        description: 'One calendar for every ministry, synced everywhere',
        icon: Calendar,
        href: '/products/calendar',
        badge: null
      }
    ]
  },
  developTrain: {
    title: 'Develop & Train',
    description: 'Grow your team\'s skills',
    products: [
      {
        name: 'AI Vocal Coaching',
        description: 'Real-time pitch, tone, and breath analysis with personalized feedback',
        icon: Mic2,
        href: '/products/vocal-coaching',
        badge: 'Industry First'
      },
      {
        name: 'Learning Hub',
        description: '18+ courses from worship theology to vocal technique',
        icon: BookOpen,
        href: '/products/learning',
        badge: null
      },
      {
        name: 'Discipleship Journeys',
        description: 'Configurable pathways from visitor to servant leader',
        icon: Target,
        href: '/products/journeys',
        badge: null
      },
      {
        name: 'Worship Collective',
        description: 'Elite credentialing program for worship leaders',
        icon: Crown,
        href: '/collective',
        badge: 'Premium'
      }
    ]
  },
  engageConnect: {
    title: 'Engage & Connect',
    description: 'Build community',
    products: [
      {
        name: 'Community',
        description: 'Spaces, discussions, and member profiles with ministry context',
        icon: Users,
        href: '/products/community',
        badge: null
      },
      {
        name: 'Unified Communications',
        description: 'Replace WhatsApp, GroupMe, and text chains with one inbox',
        icon: MessageSquare,
        href: '/products/communications',
        badge: 'New'
      },
      {
        name: 'Mobile Apps',
        description: 'iOS & Android apps for members and ministry teams',
        icon: Globe,
        href: '/products/mobile',
        badge: null
      },
      {
        name: 'Integrated Giving',
        description: 'Generosity embedded in the discipleship journey',
        icon: Heart,
        href: '/products/giving',
        badge: null
      }
    ]
  },
  analyzeImprove: {
    title: 'Analyze & Improve',
    description: 'Data-driven decisions',
    products: [
      {
        name: 'Service Analytics',
        description: 'AI analyzes your services for theme alignment, transitions, and performance',
        icon: BarChart3,
        href: '/products/analytics',
        badge: 'Industry First'
      },
      {
        name: 'Real-Time Insights',
        description: 'Live dashboard during services with stakeholder alerts',
        icon: Radio,
        href: '/products/realtime',
        badge: 'Industry First'
      },
      {
        name: 'Performance Tracking',
        description: 'Track vocal progress and team development over time',
        icon: TrendingUp,
        href: '/products/tracking',
        badge: null
      }
    ]
  },
  manageGovern: {
    title: 'Manage & Govern',
    description: 'Organize at scale',
    products: [
      {
        name: 'People',
        description: 'Member database with spiritual gifts and behavioral insights',
        icon: Users,
        href: '/products/people',
        badge: null
      },
      {
        name: 'Multi-Campus',
        description: 'Cross-campus reporting and regional aggregation',
        icon: Layers,
        href: '/products/multi-campus',
        badge: null
      },
      {
        name: 'Task Management',
        description: 'Ministry-aligned work tracking tied to church mission',
        icon: Check,
        href: '/products/tasks',
        badge: null
      }
    ]
  }
};

// Tools we replace
const replacedTools = [
  { name: 'Planning Center', category: 'Scheduling', logo: 'PCO', color: '#2C3E50' },
  { name: 'Circle', category: 'Community', logo: 'C', color: '#5046E5' },
  { name: 'Yousician', category: 'Training', logo: 'Y', color: '#FF5722' },
  { name: 'Coursera', category: 'Courses', logo: 'Co', color: '#0056D2' },
  { name: 'Zoom', category: 'Rehearsals', logo: 'Z', color: '#2D8CFF' },
  { name: 'Pushpay', category: 'Giving', logo: 'P', color: '#00C853' }
];

// Industry-first features
const industryFirsts = [
  {
    title: 'AI-Generated Rehearsal Tracks',
    description: 'Upload any song—YouTube, audio file, sheet music—and get SATB rehearsal tracks generated instantly. No per-song purchases.',
    icon: Music,
    competitors: 'MultiTracks & PraiseCharts charge per song'
  },
  {
    title: 'Service Video Analysis',
    description: 'Upload your YouTube service and AI automatically segments it, identifies songs, recognizes singers, and scores performance.',
    icon: Video,
    competitors: 'No church platform offers this'
  },
  {
    title: 'Live Digital Rehearsal',
    description: 'Practice together from anywhere with WebRTC low-latency audio and voice part isolation.',
    icon: Headphones,
    competitors: 'Zoom doesn\'t isolate voice parts'
  },
  {
    title: 'Ministry-Integrated LMS',
    description: 'Complete a course and automatically qualify for ministry roles. Training connects to serving.',
    icon: GraduationCap,
    competitors: 'Secular LMS platforms have no church integration'
  },
  {
    title: 'Behavioral Engagement Analysis',
    description: 'AI identifies members at risk of disengagement before they drift away. Proactive pastoral care.',
    icon: Brain,
    competitors: 'No ChMS has predictive analytics'
  },
  {
    title: 'Real-Time Service Operations',
    description: 'Live dashboard during services with alerts for vocal strain, tech optimization, and member engagement.',
    icon: Radio,
    competitors: 'This capability doesn\'t exist anywhere'
  }
];

export default function LandingPage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased">

      {/* Hero Section - PCO-style clean with subtle gradient  */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30">
        {/* Subtle decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/10 to-emerald-100/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">The complete worship ministry platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-slate-900">
              Everything your worship ministry needs.{' '}
              <span className="text-blue-600">In one place.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Plan services, develop your team, analyze performance, and unify communications—with AI that works for you instead of workflows you have to build.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={openBetaModal}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all text-lg"
              >
                Sign Up for Beta
              </button>
              <Link
                href="/demo"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all text-lg flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>

            {/* Trust indicators */}
            <p className="text-sm text-slate-500">
              Limited beta spots available · Join the waitlist today
            </p>
          </div>
        </div>
      </section>

      {/* Tools We Replace - PCO style */}
      <section className="py-16 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">One platform. Replaces six.</h2>
            <p className="text-slate-600">
              Stop paying for disconnected tools. Get everything integrated.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 mb-10">
            {replacedTools.map((tool, i) => (
              <div key={i} className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: tool.color }}
                >
                  {tool.logo}
                </div>
                <span className="text-xs text-slate-500">{tool.category}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full border border-slate-200">
              <span className="text-sm text-slate-500">Typical cost with 6 tools:</span>
              <span className="text-lg font-bold line-through text-slate-400">$774/mo</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <span className="text-lg font-bold text-blue-600">$199/mo</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Save 74%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview - PCO-style cards */}
      <section className="relative py-24 bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              A complete platform, not a collection of tools
            </h2>
            <p className="text-lg text-slate-600">
              Every feature works together. Your data flows seamlessly. Your team stays aligned.
            </p>
          </div>

          {/* Product category cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(productCategories).map(([key, category]) => (
              <div key={key} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-slate-300 transition-all">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{category.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{category.description}</p>
                <div className="space-y-3">
                  {category.products.slice(0, 3).map((product, i) => (
                    <Link
                      key={i}
                      href={product.href}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <product.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-slate-900 group-hover:text-blue-600">{product.name}</span>
                          {product.badge && (
                            <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-amber-100 text-amber-700 rounded">
                              {product.badge}
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </Link>
                  ))}
                </div>
                {category.products.length > 3 && (
                  <Link href={`/products#${key}`} className="block mt-4 text-sm font-medium text-blue-600 hover:text-blue-700">
                    View all {category.products.length} products →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Firsts - What No One Else Has */}
      <section className="relative py-24 bg-gradient-to-br from-amber-50/50 via-slate-50 to-orange-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 mb-4">
              <Zap className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">Industry Firsts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What no other platform can do
            </h2>
            <p className="text-lg text-slate-600">
              Even if you bought every tool on the market, you still couldn't get these capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryFirsts.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{feature.description}</p>
                <div className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg">
                  <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-slate-500" />
                  </div>
                  <p className="text-xs text-slate-500">{feature.competitors}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Difference - Key Differentiator */}
      <section className="relative py-24 bg-gradient-to-bl from-white via-cyan-50/20 to-blue-50/30 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-blue-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-100/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 mb-6">
                <Brain className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">AI-Powered</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                AI that works for you.
                <br />
                <span className="text-blue-600">Not workflows you build.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Traditional church software makes you build automation workflows for every task.
                Ministry Motion's AI handles the complexity so you can focus on ministry.
              </p>

              <div className="space-y-4">
                {[
                  'Generates rehearsal tracks from any song source',
                  'Analyzes service videos and scores performance',
                  'Recommends songs based on theme and team capability',
                  'Identifies members at risk of disengagement',
                  'Coaches vocalists with real-time feedback'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Music className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900">Rehearsal Track Generated</div>
                    <div className="text-xs text-slate-500">"Way Maker" - SATB parts ready</div>
                  </div>
                  <Check className="w-5 h-5 text-blue-600" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900">Service Analyzed</div>
                    <div className="text-xs text-slate-500">Theme alignment: 94%</div>
                  </div>
                  <Check className="w-5 h-5 text-blue-600" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Mic2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900">Vocal Coaching Complete</div>
                    <div className="text-xs text-slate-500">Sarah's pitch accuracy: 87% (+5%)</div>
                  </div>
                  <Check className="w-5 h-5 text-blue-600" />
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-blue-200 bg-blue-50">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900">AI Recommendation</div>
                    <div className="text-xs text-slate-500">Michael ready for worship leader training</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vocal Development Pathway */}
      <section className="relative py-24 bg-gradient-to-tr from-violet-50/40 via-slate-50 to-indigo-50/30 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-violet-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-indigo-200/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 mb-4">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Development Pathway</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              From volunteer to worship leader
            </h2>
            <p className="text-lg text-slate-600">
              A structured 5-tier pathway with measurable milestones and AI-powered coaching.
            </p>
          </div>

          {/* Pathway visualization */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { tier: 1, name: 'Beginner', range: '0-60%', color: 'slate' },
              { tier: 2, name: 'Developing', range: '60-75%', color: 'blue' },
              { tier: 3, name: 'Proficient', range: '75-85%', color: 'teal' },
              { tier: 4, name: 'Advanced', range: '85-90%', color: 'amber' },
              { tier: 5, name: 'Leader', range: '90%+', color: 'emerald' }
            ].map((t, i) => (
              <div key={i} className="relative">
                {i > 0 && <div className="absolute -left-2 top-1/2 w-4 h-0.5 bg-slate-300 hidden sm:block" />}
                <div className="bg-white rounded-xl border border-slate-200 p-4 text-center w-32 hover:shadow-md transition-shadow">
                  <div className="text-xs font-bold text-blue-600 mb-1">Tier {t.tier}</div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500 mt-1">{t.range}</div>
                </div>
              </div>
            ))}
          </div>

          {/* What's tracked */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Mic2, title: 'Vocal Skills', items: ['Pitch accuracy', 'Tone quality', 'Breath control', 'Harmony'] },
              { icon: Heart, title: 'Spiritual Growth', items: ['Devotional engagement', 'Prayer participation', 'Worship theology'] },
              { icon: Users, title: 'Leadership', items: ['Team mentoring', 'Service leading', 'Conflict resolution'] }
            ].map((cat, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <cat.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-3">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Teaser */}
      <section className="relative py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="grid lg:grid-cols-2 gap-12 items-center relative">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  See how we compare to Planning Center
                </h2>
                <p className="text-slate-300 text-lg mb-8">
                  Planning Center is great at organizing your ministry. We do that AND develop your team,
                  analyze your services, and move members toward spiritual maturity—all with AI.
                </p>
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  View Full Comparison
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-slate-800 rounded-xl p-6">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-slate-700">
                      <th className="pb-3 text-slate-400 font-medium text-sm">Feature</th>
                      <th className="pb-3 text-center text-blue-400 font-medium text-sm">Us</th>
                      <th className="pb-3 text-center text-slate-400 font-medium text-sm">PCO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {[
                      { feature: 'Service Planning', us: true, pco: true },
                      { feature: 'AI Vocal Coaching', us: true, pco: false },
                      { feature: 'Service Video Analysis', us: true, pco: false },
                      { feature: 'Learning Management', us: true, pco: false },
                      { feature: 'Unified Communications', us: true, pco: false },
                      { feature: 'Real-Time Insights', us: true, pco: false }
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="py-3 text-sm text-slate-300">{row.feature}</td>
                        <td className="py-3 text-center">
                          {row.us ? <Check className="w-5 h-5 text-blue-400 mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />}
                        </td>
                        <td className="py-3 text-center">
                          {row.pco ? <Check className="w-5 h-5 text-slate-400 mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-50/40 via-slate-50 to-blue-50/30 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-slate-600">
              Start free, upgrade as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Free',
                price: '$0',
                period: 'forever',
                description: 'For trying out',
                features: ['5 team members', 'Basic assessments', 'Community access', 'Mobile apps'],
                cta: 'Get Started',
                popular: false
              },
              {
                name: 'Starter',
                price: '$99',
                period: '/month',
                description: 'For small teams',
                features: ['15 team members', 'Team scheduling', 'Email & SMS', 'Rehearsal rooms'],
                cta: 'Start Trial',
                popular: false
              },
              {
                name: 'Pro',
                price: '$199',
                period: '/month',
                description: 'Full AI experience',
                features: ['50 team members', 'AI vocal coaching', 'All courses', 'Service analytics'],
                cta: 'Start Trial',
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                description: 'For large churches',
                features: ['Unlimited members', 'Multi-campus', 'API access', 'Dedicated support'],
                cta: 'Contact Sales',
                popular: false
              }
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl border p-6 ${
                  plan.popular ? 'border-blue-600 shadow-lg' : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{plan.description}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={`block w-full py-2.5 text-center font-semibold rounded-lg transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/pricing" className="text-blue-600 font-medium hover:text-blue-700">
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* Worship Collective Teaser */}
      <section className="relative py-16 bg-gradient-to-r from-amber-50 via-orange-50/50 to-rose-50/40 border-y border-amber-200/50 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-32 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-8 bg-orange-200/25 rounded-full blur-2xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/25">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900">The Worship Collective</h3>
                  <span className="px-2 py-0.5 bg-amber-200 text-amber-800 text-xs font-semibold rounded-full">Premium</span>
                </div>
                <p className="text-slate-600 text-sm">
                  Invitation-only community for elite worship leaders. Coaching cohorts, credentials, masterclasses.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-600">Starting at $49.99/month</span>
              <Link
                href="/collective"
                className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, title: 'Secure & Private', description: 'SOC 2 compliant, data encrypted at rest' },
              { icon: Clock, title: '99.9% Uptime', description: 'Reliable infrastructure you can count on' },
              { icon: MessageSquare, title: 'Fast Support', description: 'Real humans, not chatbots' },
              { icon: Globe, title: 'Global Payments', description: 'Stripe, Paystack, Flutterwave supported' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to transform your worship ministry?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join our exclusive beta program and be among the first to experience the future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBetaModal}
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all text-lg"
            >
              Sign Up for Beta
            </button>
            <Link
              href="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg border border-blue-500 hover:bg-blue-800 transition-all text-lg"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/logos/ministry-motion-text-logo-white.svg"
                  alt="Ministry Motion"
                  className="h-8 w-auto"
                  style={{ maxWidth: '360px', objectFit: 'contain' }}
                />
              </div>
              <p className="text-sm text-slate-400 mb-4">
                The complete platform for worship ministry planning, development, and community.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/products/service-planning" className="hover:text-white">Service Planning</Link></li>
                <li><Link href="/products/vocal-coaching" className="hover:text-white">AI Vocal Coaching</Link></li>
                <li><Link href="/products/analytics" className="hover:text-white">Service Analytics</Link></li>
                <li><Link href="/products/learning" className="hover:text-white">Learning Hub</Link></li>
                <li><Link href="/products/communications" className="hover:text-white">Communications</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/developers" className="hover:text-white">API Docs</Link></li>
                <li><Link href="/webinars" className="hover:text-white">Webinars</Link></li>
                <li><Link href="/status" className="hover:text-white">Status</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2025 Ministry Motion. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {['Twitter', 'LinkedIn', 'YouTube', 'Instagram'].map((social) => (
                <Link key={social} href="#" className="text-slate-500 hover:text-white transition-colors text-sm">
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
