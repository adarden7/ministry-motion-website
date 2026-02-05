'use client';

import Link from 'next/link';
import {
  Mic2,
  Users,
  Calendar,
  BarChart3,
  MessageSquare,
  Check,
  Headphones,
  BookOpen,
  Heart,
  Music,
  Crown,
  ChevronRight,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Layers,
  Radio,
  Brain,
  FileText,
  Smartphone
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

// Complete product catalog organized by pillar
const productPillars = [
  {
    id: 'plan-schedule',
    title: 'Plan & Schedule',
    subtitle: 'Organize your worship ministry with intelligent planning tools',
    description: 'From service planning to volunteer scheduling, everything works together seamlessly.',
    color: 'teal',
    products: [
      {
        name: 'Service Planning',
        tagline: 'Build services that flow',
        description: 'Create worship services with drag-and-drop simplicity. AI recommends songs based on theme, team capability, and congregation preferences.',
        icon: Calendar,
        features: [
          'AI-powered song recommendations',
          'Theme alignment scoring',
          'Drag-and-drop service builder',
          'Arrangement management',
          'CCLI integration'
        ],
        badge: 'AI-Enhanced',
        href: '/products/service-planning'
      },
      {
        name: 'Team Scheduling',
        tagline: 'Smart scheduling that respects your team',
        description: 'Auto-schedule volunteers based on availability, skills, and preferences. Manage blockout dates and rotation rules effortlessly.',
        icon: Users,
        features: [
          'Intelligent auto-scheduling',
          'Skill-based matching',
          'Availability management',
          'Rotation rules',
          'Conflict detection'
        ],
        badge: null,
        href: '/products/scheduling'
      },
      {
        name: 'Unified Calendar',
        tagline: 'One calendar for everything',
        description: 'Every ministry, every event, one view. Syncs with Google Calendar, Outlook, and iCal.',
        icon: Calendar,
        features: [
          'Cross-ministry visibility',
          'Resource booking',
          'External calendar sync',
          'Course deadline integration',
          'Mobile access'
        ],
        badge: null,
        href: '/products/calendar'
      },
      {
        name: 'Song Library',
        tagline: 'Your music, organized',
        description: 'Manage your song catalog with metadata, arrangements, and usage history. Import from CCLI or build your own.',
        icon: Music,
        features: [
          'CCLI SongSelect integration',
          'Key transposition',
          'Arrangement variants',
          'Usage analytics',
          'Team favorites'
        ],
        badge: null,
        href: '/products/song-library'
      }
    ]
  },
  {
    id: 'develop-train',
    title: 'Develop & Train',
    subtitle: 'Grow your team from volunteers to worship leaders',
    description: 'The only platform that combines vocal training, spiritual formation, and leadership development.',
    color: 'violet',
    products: [
      {
        name: 'AI Vocal Coaching',
        tagline: 'World-class vocal training for every singer',
        description: 'Real-time pitch, tone, and breath analysis powered by Google Gemini. Personalized feedback and structured improvement paths.',
        icon: Mic2,
        features: [
          'Real-time pitch analysis',
          'Breath control feedback',
          'Tone quality scoring',
          'Personalized exercises',
          'Progress tracking over time'
        ],
        badge: 'Industry First',
        href: '/products/vocal-coaching'
      },
      {
        name: 'Digital Rehearsal Rooms',
        tagline: 'Practice together, from anywhere',
        description: 'Live rehearsal with WebRTC low-latency audio. Voice part isolation lets each singer hear their part clearly.',
        icon: Headphones,
        features: [
          '<400ms latency',
          'Voice part isolation',
          'Conductor controls',
          'Session recording',
          'Multi-device support'
        ],
        badge: 'Industry First',
        href: '/products/rehearsal-rooms'
      },
      {
        name: 'Rehearsal Track Builder',
        tagline: 'Generate tracks from any song',
        description: 'Upload YouTube links, audio files, or sheet music—AI generates SATB rehearsal tracks instantly. No per-song fees.',
        icon: Music,
        features: [
          'YouTube import',
          'Audio file processing',
          'SATB part generation',
          'Key transposition',
          'Quality validation'
        ],
        badge: 'Industry First',
        href: '/products/track-builder'
      },
      {
        name: 'Learning Hub',
        tagline: '18+ courses for every skill level',
        description: 'From vocal technique to worship theology, structured courses with assessments and certifications.',
        icon: BookOpen,
        features: [
          '18+ ministry-focused courses',
          'Video lessons & quizzes',
          'Certificate generation',
          'Study groups',
          'Mentor matching'
        ],
        badge: null,
        href: '/products/learning'
      },
      {
        name: 'Discipleship Journeys',
        tagline: 'Pathways that move people',
        description: 'Configurable journeys from visitor to servant leader. Auto-enrollment based on behavior. Embedded giving.',
        icon: Target,
        features: [
          'Simple Church model',
          'Connect→Grow→Serve→Go',
          'Behavioral triggers',
          'Journey-embedded giving',
          'Ministry activation'
        ],
        badge: null,
        href: '/products/journeys'
      },
      {
        name: 'Worship Collective',
        tagline: 'Elite training for serious leaders',
        description: 'Invitation-only credentialing program with coaching cohorts, master mentors, and industry-recognized credentials.',
        icon: Crown,
        features: [
          'Coaching cohorts (8-12 members)',
          'Master worship leader mentors',
          'Interest groups',
          'Credential certification',
          'Exclusive masterclasses'
        ],
        badge: 'Premium',
        href: '/collective'
      }
    ]
  },
  {
    id: 'engage-connect',
    title: 'Engage & Connect',
    subtitle: 'Build community that matters',
    description: 'Replace disconnected tools with one integrated platform for communication and community.',
    color: 'blue',
    products: [
      {
        name: 'Unified Communications',
        tagline: 'One inbox. One truth.',
        description: 'Replace WhatsApp, GroupMe, text chains, and email chaos. Context-aware messaging with role-based access.',
        icon: MessageSquare,
        features: [
          'Leadership channels (private)',
          'Ministry coordination',
          'AI-moderated chat',
          'Member-controlled preferences',
          'Unified inbox'
        ],
        badge: 'New',
        href: '/products/communications'
      },
      {
        name: 'Community Platform',
        tagline: 'Ministry-aware spaces',
        description: 'Discussions, posts, and member profiles that understand your ministry context. Auto-created spaces per ministry.',
        icon: Users,
        features: [
          'Ministry-aware spaces',
          'Discussion threads',
          'Reactions & engagement',
          'Member profiles',
          'Spiritual gifts display'
        ],
        badge: null,
        href: '/products/community'
      },
      {
        name: 'Integrated Giving',
        tagline: 'Generosity in context',
        description: 'Giving embedded in discipleship journeys, not as a separate transaction. Multi-currency support.',
        icon: Heart,
        features: [
          'Journey-embedded giving',
          'Recurring donations',
          'Multi-currency (Stripe, Paystack, Flutterwave)',
          'Fund management',
          'Tax receipts'
        ],
        badge: null,
        href: '/products/giving'
      },
      {
        name: 'Mobile Apps',
        tagline: 'Your church in their pocket',
        description: 'Native iOS & Android apps for members and ministry teams. Push notifications, offline mode.',
        icon: Smartphone,
        features: [
          'iOS & Android native',
          'Push notifications',
          'Offline support',
          'At-home vocal practice',
          'Service alerts'
        ],
        badge: null,
        href: '/products/mobile'
      }
    ]
  },
  {
    id: 'analyze-improve',
    title: 'Analyze & Improve',
    subtitle: 'Data-driven worship leadership',
    description: 'The only platform that tells you what actually happened, not just what was planned.',
    color: 'amber',
    products: [
      {
        name: 'Service Analytics',
        tagline: 'Know how your services really went',
        description: 'Upload YouTube service videos and AI automatically segments, identifies songs, recognizes singers, and scores performance.',
        icon: BarChart3,
        features: [
          'Automatic song detection',
          'Voice identification',
          'Theme alignment scoring',
          'Transition quality analysis',
          'Theological consistency'
        ],
        badge: 'Industry First',
        href: '/products/analytics'
      },
      {
        name: 'Real-Time Insights',
        tagline: 'Live operations dashboard',
        description: 'During-service dashboard with stakeholder alerts. Vocal strain warnings, tech optimization, member engagement.',
        icon: Radio,
        features: [
          'Live streaming analytics',
          'Vocal health alerts',
          'Tech optimization feedback',
          'Member engagement tracking',
          'Stakeholder notifications'
        ],
        badge: 'Industry First',
        href: '/products/realtime'
      },
      {
        name: 'Performance Tracking',
        tagline: 'Watch your team grow',
        description: 'Track vocal progress, participation, and development over time. Objective data replaces subjective opinions.',
        icon: TrendingUp,
        features: [
          'Individual progress charts',
          'Team comparisons',
          'Skill development tracking',
          'Participation history',
          'Goal achievement'
        ],
        badge: null,
        href: '/products/tracking'
      },
      {
        name: 'Plan vs. Actual',
        tagline: 'Variance analysis for services',
        description: 'Compare what you planned with what actually happened. Segment timing, participation, and flow analysis.',
        icon: FileText,
        features: [
          'Segment length comparison',
          'Planned vs. actual timing',
          'Flow analysis',
          'Participant variance',
          'Historical trends'
        ],
        badge: null,
        href: '/products/variance'
      }
    ]
  },
  {
    id: 'manage-govern',
    title: 'Manage & Govern',
    subtitle: 'Organize at any scale',
    description: 'From single campus to multi-site denominations, governance tools that grow with you.',
    color: 'slate',
    products: [
      {
        name: 'People Management',
        tagline: 'More than a database',
        description: 'Member profiles with spiritual gifts, vocal profiles, and behavioral insights. Proactive engagement analysis.',
        icon: Users,
        features: [
          'Spiritual gifts assessment',
          'Ministry matching',
          'Behavioral analysis',
          'Engagement scoring',
          'Simple Church tracking'
        ],
        badge: null,
        href: '/products/people'
      },
      {
        name: 'Multi-Campus',
        tagline: 'Unified across locations',
        description: 'Cross-campus reporting, regional aggregation, and denominational rollup. One platform, complete visibility.',
        icon: Layers,
        features: [
          'Cross-campus dashboards',
          'Regional aggregation',
          'Conference reporting',
          'Benchmarking',
          'Shared resources'
        ],
        badge: null,
        href: '/products/multi-campus'
      },
      {
        name: 'Task Management',
        tagline: 'Work aligned to mission',
        description: 'Ministry-specific task tracking tied to church core values. Not just to-dos, but mission-aligned work.',
        icon: Check,
        features: [
          'Mission-aligned tasks',
          'Ministry assignment',
          'Due date tracking',
          'Role-based dashboards',
          'Activity reporting'
        ],
        badge: null,
        href: '/products/tasks'
      },
      {
        name: 'Roles & Permissions',
        tagline: 'Granular access control',
        description: 'Fine-grained permissions for every feature. Leaders see what they need, members see what\'s appropriate.',
        icon: Shield,
        features: [
          'Role-based access',
          'Custom permission sets',
          'Ministry-level control',
          'Audit logging',
          'SSO support (Enterprise)'
        ],
        badge: null,
        href: '/products/permissions'
      }
    ]
  }
];

export default function ProductsPage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased">

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Tools for Every Ministry Leader
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
            Plan, develop, engage, and analyze—all in one integrated transformation platform.
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto mb-8">
            Whether you lead worship, children&apos;s ministry, small groups, or the entire church—
            Ministry Motion gives you the visibility and tools to track transformation.
          </p>

          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-3">
            {productPillars.map((pillar) => (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                {pillar.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Product Pillars */}
      {productPillars.map((pillar, pillarIndex) => {
        const gradients = [
          'bg-gradient-to-br from-white via-blue-50/20 to-white',
          'bg-gradient-to-br from-violet-50/30 via-slate-50 to-indigo-50/20',
          'bg-gradient-to-br from-white via-cyan-50/20 to-emerald-50/10',
          'bg-gradient-to-br from-amber-50/30 via-slate-50 to-orange-50/20',
          'bg-gradient-to-br from-white via-blue-50/20 to-slate-50'
        ];
        return (
        <section
          key={pillar.id}
          id={pillar.id}
          className={`relative py-24 overflow-hidden ${gradients[pillarIndex % gradients.length]}`}
        >
          {pillarIndex % 2 === 0 && (
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/15 rounded-full blur-3xl" />
          )}
          {pillarIndex % 2 === 1 && (
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-violet-200/15 rounded-full blur-3xl" />
          )}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Pillar header */}
            <div className="max-w-3xl mb-16">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${pillar.color}-50 border border-${pillar.color}-200 mb-4`}>
                <span className={`text-sm font-medium text-${pillar.color}-700`}>{pillar.title}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                {pillar.subtitle}
              </h2>
              <p className="text-lg text-slate-600">
                {pillar.description}
              </p>
            </div>

            {/* Products grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillar.products.map((product, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-slate-300 transition-all group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <product.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    {product.badge && (
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        product.badge === 'Industry First'
                          ? 'bg-amber-100 text-amber-700'
                          : product.badge === 'New'
                          ? 'bg-blue-100 text-blue-700'
                          : product.badge === 'Premium'
                          ? 'bg-violet-100 text-violet-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">{product.tagline}</p>
                  <p className="text-slate-600 text-sm mb-4">{product.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 group-hover:gap-2 transition-all"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        );
      })}

      {/* Integration Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything works together
            </h2>
            <p className="text-lg text-slate-300">
              Unlike cobbled-together tools, every Ministry Motion feature shares data seamlessly.
              No duplicate entry. No sync issues. No integration headaches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Unified Data',
                description: 'One member record flows through scheduling, training, analytics, and communications.',
                icon: Layers
              },
              {
                title: 'AI Everywhere',
                description: 'The same AI that coaches vocals also analyzes services and recommends songs.',
                icon: Brain
              },
              {
                title: 'Real-Time Sync',
                description: 'Changes in one area instantly reflect everywhere. No batch updates or delays.',
                icon: Zap
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to see it in action?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join our exclusive beta program and be the first to try these features.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBetaModal}
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 text-lg"
            >
              Sign Up for Beta
            </button>
            <Link
              href="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg border border-blue-500 hover:bg-teal-800 text-lg"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src="/logos/ministry-motion-text-logo-white.svg" alt="Ministry Motion" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-slate-500">
              © 2025 Ministry Motion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
