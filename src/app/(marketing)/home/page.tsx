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
  Menu,
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
  ArrowRight,
  Church,
  Baby,
  HandHeart,
  Megaphone,
  Settings
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

// Pre-built ministry structures - key differentiator
const ministryStructures = [
  {
    name: 'Worship Ministry',
    icon: Music,
    roles: ['Worship Leader', 'Vocalists', 'Musicians', 'Sound Tech', 'Media'],
    color: 'blue'
  },
  {
    name: "Children's Ministry",
    icon: Baby,
    roles: ['Director', 'Teachers', 'Check-in', 'Nursery', 'Security'],
    color: 'emerald'
  },
  {
    name: 'Deacon/Elder Board',
    icon: Shield,
    roles: ['Head Deacon', 'Deacons', 'Elders', 'Trustees'],
    color: 'amber'
  },
  {
    name: 'Outreach & Missions',
    icon: Globe,
    roles: ['Director', 'Evangelism', 'Community Service', 'Missions'],
    color: 'rose'
  },
  {
    name: 'Small Groups',
    icon: Users,
    roles: ['Coordinator', 'Group Leaders', 'Hosts', 'Facilitators'],
    color: 'violet'
  },
  {
    name: 'Media & Communications',
    icon: Megaphone,
    roles: ['Director', 'Social Media', 'Graphic Design', 'A/V Team'],
    color: 'cyan'
  }
];

// Discipleship stats - educating users on importance
const discipleshipStats = [
  {
    stat: '39%',
    label: "of Christians aren't being discipled",
    source: 'Barna Research 2024'
  },
  {
    stat: '3x',
    label: 'more giving from engaged members',
    source: 'Generosity Research'
  },
  {
    stat: '1%',
    label: 'of pastors say their church disciples "very well"',
    source: 'LifeWay Research'
  },
  {
    stat: '65%',
    label: 'of young adults leave church after high school',
    source: 'Pew Research'
  }
];

// Navigation sections for drilling in
const exploreAreas = [
  {
    title: 'For Worship Leaders',
    description: 'AI vocal coaching, rehearsal tracks, service planning',
    href: '/solutions/worship-leaders',
    icon: Mic2,
    color: 'blue'
  },
  {
    title: 'For Pastors',
    description: 'Discipleship tracking, engagement analytics, member care',
    href: '/solutions/pastors',
    icon: BookOpen,
    color: 'emerald'
  },
  {
    title: 'For Ministry Directors',
    description: 'Team scheduling, training courses, volunteer management',
    href: '/solutions/ministry-directors',
    icon: Users,
    color: 'amber'
  },
  {
    title: 'For Treasurers',
    description: 'Integrated giving, donor analytics, financial reporting',
    href: '/solutions/treasurers',
    icon: Heart,
    color: 'rose'
  },
  {
    title: 'For Conference Leaders',
    description: 'Multi-church reporting, regional analytics, denominational tools',
    href: '/solutions/conference-leaders',
    icon: Layers,
    color: 'violet'
  }
];

// Product categories matching modular structure
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
    description: "Grow your team's skills",
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
        name: 'Integrated Giving',
        description: 'Generosity embedded in the discipleship journey',
        icon: Heart,
        href: '/products/giving',
        badge: null
      }
    ]
  }
};

export default function HomePage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased">
      {/* Hero Section - Kingdom Building Focus */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500/15 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-200">Built for the Church, Powered by AI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
              Accelerate Kingdom Work.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Deepen Discipleship.</span>
            </h1>

            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              The only platform built specifically for church ministry structures.
              Pre-configured for worship, children's ministry, deacons, outreach, and more—with AI that accelerates spiritual growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={openBetaModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all text-lg shadow-lg shadow-blue-500/25"
              >
                Sign Up for Beta
              </button>
              <Link
                href="/login"
                className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg border border-transparent hover:bg-gray-100 transition-all text-lg flex items-center justify-center gap-2 shadow-lg"
              >
                Log In
              </Link>
              <Link
                href="/demo"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all text-lg flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>

            <p className="text-sm text-blue-200/60">
              PCO integration included · 30-day free trial · No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* The Discipleship Crisis - Education Section */}
      <section id="resources" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">The Challenge</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              The Discipleship Gap is Real
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Most churches want to make disciples. Few have the tools to track, measure, and accelerate the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {discipleshipStats.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">{item.stat}</div>
                <p className="text-slate-700 font-medium mb-1">{item.label}</p>
                <p className="text-xs text-slate-500">{item.source}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog/discipleship-crisis-39-percent" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700">
              Read the research
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Built for Church Structures - Key Differentiator */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Unlike Generic Platforms</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Pre-Built for How Churches Actually Work
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Circle and other community platforms make you build everything from scratch.
                Ministry Motion comes with your ministry structures, roles, and responsibilities already configured.
                Just customize and go.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Templated ministry structures with defined roles',
                  'Pre-configured permissions for each ministry area',
                  'Denomination-specific terminology and workflows',
                  'Spiritual gifts assessments tied to role recommendations',
                  'Connect → Grow → Serve → Go discipleship pathways'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <Crown className="w-8 h-8 text-amber-600" />
                <div>
                  <p className="font-semibold text-slate-900">Pro Feature</p>
                  <p className="text-sm text-slate-600">Edit and customize all role templates for your church</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {ministryStructures.map((ministry, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-xl border ${
                    i === 0 ? 'bg-blue-50 border-blue-200' :
                    i === 1 ? 'bg-emerald-50 border-emerald-200' :
                    i === 2 ? 'bg-amber-50 border-amber-200' :
                    i === 3 ? 'bg-rose-50 border-rose-200' :
                    i === 4 ? 'bg-violet-50 border-violet-200' :
                    'bg-cyan-50 border-cyan-200'
                  }`}
                >
                  <ministry.icon className={`w-6 h-6 mb-3 ${
                    i === 0 ? 'text-blue-600' :
                    i === 1 ? 'text-emerald-600' :
                    i === 2 ? 'text-amber-600' :
                    i === 3 ? 'text-rose-600' :
                    i === 4 ? 'text-violet-600' :
                    'text-cyan-600'
                  }`} />
                  <h3 className="font-semibold text-slate-900 mb-2">{ministry.name}</h3>
                  <div className="flex flex-wrap gap-1">
                    {ministry.roles.slice(0, 3).map((role, j) => (
                      <span key={j} className="px-2 py-0.5 bg-white/80 text-xs text-slate-600 rounded">
                        {role}
                      </span>
                    ))}
                    {ministry.roles.length > 3 && (
                      <span className="px-2 py-0.5 text-xs text-slate-500">
                        +{ministry.roles.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore by Role - Navigation Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Find Your Path</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              See How Ministry Motion Helps Your Role
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every role has unique needs. Explore features tailored to your ministry area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreAreas.map((area, i) => (
              <Link
                key={i}
                href={area.href}
                className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  area.color === 'blue' ? 'bg-blue-100' :
                  area.color === 'emerald' ? 'bg-emerald-100' :
                  area.color === 'amber' ? 'bg-amber-100' :
                  area.color === 'rose' ? 'bg-rose-100' :
                  'bg-violet-100'
                }`}>
                  <area.icon className={`w-6 h-6 ${
                    area.color === 'blue' ? 'text-blue-600' :
                    area.color === 'emerald' ? 'text-emerald-600' :
                    area.color === 'amber' ? 'text-amber-600' :
                    area.color === 'rose' ? 'text-rose-600' :
                    'text-violet-600'
                  }`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {area.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{area.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                  Learn more
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered Everything */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Music className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900">Rehearsal Track Generated</div>
                    <div className="text-xs text-slate-500">"Way Maker" - SATB parts ready in 30 seconds</div>
                  </div>
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Video className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900">Service Analyzed</div>
                    <div className="text-xs text-slate-500">Theme alignment: 94% · 3 improvement suggestions</div>
                  </div>
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-rose-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900">Engagement Alert</div>
                    <div className="text-xs text-slate-500">3 members showing signs of drifting</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900">AI Recommendation</div>
                    <div className="text-xs text-slate-500">Sarah ready for children's ministry leadership course</div>
                  </div>
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">6 Unique AI Agents</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">
                AI That Works for Ministry,{' '}
                <span className="text-blue-600">Not Just Automation</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Traditional church software makes you build workflows for everything.
                Our AI agents understand ministry context—they work in the background so you can focus on people.
              </p>

              <div className="space-y-4">
                {[
                  { agent: 'Vocal Coach AI', desc: 'Real-time feedback on pitch, tone, and breath' },
                  { agent: 'Service Analyzer', desc: 'Scores theme alignment and transitions' },
                  { agent: 'Engagement Predictor', desc: 'Identifies members at risk of drifting' },
                  { agent: 'Ministry Matcher', desc: 'Recommends roles based on gifts and growth' },
                  { agent: 'Conflict Resolver', desc: 'Helps navigate difficult conversations' },
                  { agent: 'Denomination Context', desc: 'Understands your tradition and terminology' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <div>
                      <span className="font-medium text-slate-900">{item.agent}</span>
                      <span className="text-slate-500 mx-2">·</span>
                      <span className="text-slate-600 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Engaged Member Advantage - Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Engaged Members Give 3x More
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                The research is clear: members who are actively discipled, serving, and connected
                give nearly three times more than attendance-only members.
              </p>
              <p className="text-blue-100 mb-8">
                Ministry Motion helps you move members along the discipleship journey—from first-time
                visitor to servant leader—with tools that track progress, suggest next steps, and
                celebrate milestones.
              </p>
              <Link
                href="/blog/engaged-members-give-3x-more"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Read the Research
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-white font-semibold mb-6">The Discipleship Journey</h3>
              <div className="space-y-4">
                {[
                  { stage: 'Connect', desc: 'First-time visitor becomes regular attender', pct: '100%' },
                  { stage: 'Grow', desc: 'Joins small group or Bible study', pct: '65%' },
                  { stage: 'Serve', desc: 'Begins serving in a ministry', pct: '40%' },
                  { stage: 'Go', desc: 'Leads others and multiplies impact', pct: '15%' }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-semibold text-white">{item.stage}</span>
                        <span className="text-blue-200 text-sm ml-2">{item.desc}</span>
                      </div>
                      <span className="text-white font-bold">{item.pct}</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full">
                      <div
                        className="h-2 bg-white rounded-full transition-all"
                        style={{ width: item.pct }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-blue-200 text-sm mt-6">
                Track every member's journey and know exactly where they are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PCO Integration Callout */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700">
                <span className="text-xl font-bold text-white">PCO</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Already using Planning Center?</h3>
                <p className="text-slate-400">
                  Ministry Motion integrates seamlessly. Keep your data, add AI superpowers.
                </p>
              </div>
            </div>
            <Link
              href="/integrations/planning-center"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn About PCO Integration
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Product Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Everything Your Ministry Needs
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              One platform for planning, training, communicating, and analyzing.
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
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center group-hover:bg-blue-50 transition-colors border border-slate-200">
                        <product.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-slate-900 group-hover:text-blue-600">{product.name}</span>
                          {product.badge && (
                            <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-blue-100 text-blue-700 rounded">
                              {product.badge}
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/products" className="text-blue-600 font-medium hover:text-blue-700">
              View all products →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, title: 'Secure & Private', description: 'SOC 2 compliant, data encrypted' },
              { icon: Clock, title: '99.9% Uptime', description: 'Reliable when you need it' },
              { icon: MessageSquare, title: 'Real Support', description: 'Humans who understand ministry' },
              { icon: Globe, title: 'Global Ready', description: 'Stripe, Paystack, Flutterwave' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 border border-slate-200">
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
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Kingdom Work?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join churches who are transforming how they disciple, develop, and deploy their members.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBetaModal}
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all text-lg"
            >
              Sign Up for Beta
            </button>
            <Link
              href="/compare"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all text-lg"
            >
              Compare to Planning Center
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        {/* Main Footer Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logos/ministry-motion-text-logo-white.svg" alt="Ministry Motion" className="h-8 w-auto" />
              </div>
              <p className="text-sm text-slate-400 mb-6">
                The complete platform for church ministry—built for discipleship, powered by AI.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://twitter.com/ministrymotion" className="text-slate-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://linkedin.com/company/ministrymotion" className="text-slate-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://youtube.com/@ministrymotion" className="text-slate-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/products/service-planning" className="hover:text-white">Service Planning</Link></li>
                <li><Link href="/products/vocal-coaching" className="hover:text-white">AI Vocal Coaching</Link></li>
                <li><Link href="/products/analytics" className="hover:text-white">Service Analytics</Link></li>
                <li><Link href="/products/learning" className="hover:text-white">Learning Hub</Link></li>
                <li><Link href="/products/giving" className="hover:text-white">Integrated Giving</Link></li>
                <li><Link href="/products/communications" className="hover:text-white">Communications</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/solutions/worship-leaders" className="hover:text-white">For Worship Leaders</Link></li>
                <li><Link href="/solutions/pastors" className="hover:text-white">For Pastors</Link></li>
                <li><Link href="/solutions/ministry-directors" className="hover:text-white">For Ministry Directors</Link></li>
                <li><Link href="/solutions/treasurers" className="hover:text-white">For Treasurers</Link></li>
                <li><Link href="/solutions/conference-leaders" className="hover:text-white">For Conference Leaders</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/compare" className="hover:text-white">Compare</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/api-docs" className="hover:text-white">API Documentation</Link></li>
                <li><Link href="/status" className="hover:text-white">System Status</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/press" className="hover:text-white">Press</Link></li>
                <li><Link href="/partners" className="hover:text-white">Partners</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Security & Compliance Section */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  Security & Privacy
                </h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><Link href="/security" className="hover:text-white">Security Overview</Link></li>
                  <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/data-processing" className="hover:text-white">Data Processing Agreement</Link></li>
                  <li><Link href="/subprocessors" className="hover:text-white">Subprocessors</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-emerald-400" />
                  Compliance
                </h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    SOC 2 Type II (via GCP)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    ISO 27001 (via GCP)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    GDPR Compliant
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    CCPA Compliant
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    PCI-DSS (payments)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-400" />
                  Infrastructure
                </h4>
                <p className="text-sm text-slate-400 mb-3">
                  Built on Google Cloud Platform with enterprise-grade infrastructure:
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Firebase Authentication</li>
                  <li>• Cloud Firestore (encrypted at rest)</li>
                  <li>• Google Gemini AI (responsible AI)</li>
                  <li>• Cloud Functions & Cloud Run</li>
                  <li>• 99.9% uptime SLA</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-violet-400" />
                  Data Sovereignty
                </h4>
                <p className="text-sm text-slate-400 mb-3">
                  Your data stays in regions you choose:
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• US data centers (default)</li>
                  <li>• EU data residency (on request)</li>
                  <li>• Data never leaves your region</li>
                  <li>• HIPAA-eligible infrastructure</li>
                  <li>• Encryption in transit & at rest</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-500">
                © 2025 Ministry Motion. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
                <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                <span className="text-slate-700">•</span>
                <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                <span className="text-slate-700">•</span>
                <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
                <span className="text-slate-700">•</span>
                <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
                <span className="text-slate-700">•</span>
                <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
