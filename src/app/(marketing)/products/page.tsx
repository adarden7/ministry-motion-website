'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Mic2,
  Users,
  Calendar,
  BarChart3,
  MessageSquare,
  Check,
  Menu,
  X,
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
import { BetaSignupModal, MarketingNav } from '@/components/marketing';

// Complete product catalog organized by pillar
const productPillars = [
  {
    id: 'plan-schedule',
    title: 'Plan & Schedule',
    subtitle: 'Organize your worship ministry with intelligent planning tools',
    description: 'From service planning to volunteer scheduling, everything works together seamlessly.',
    color: 'teal',
    solutionHref: '/solutions/worship-directors',
    solutionLabel: 'See how Worship Directors use these tools',
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
    description: 'A platform that combines vocal training, spiritual formation, and leadership development in one place.',
    color: 'violet',
    solutionHref: '/solutions/praise-leaders',
    solutionLabel: 'See how Praise Leaders use these tools',
    products: [
      {
        name: 'AI Vocal Coaching',
        tagline: 'AI-powered vocal coaching for worship teams',
        description: 'Pitch, tone, and breath analysis of recorded practice sessions powered by Google Gemini. Personalized feedback and structured improvement paths.',
        icon: Mic2,
        features: [
          'Real-time pitch analysis',
          'Breath control feedback',
          'Tone quality scoring',
          'Personalized exercises',
          'Progress tracking over time'
        ],
        badge: 'AI-Powered',
        href: '/products/vocal-coaching'
      },
      {
        name: 'Interactive Labs',
        tagline: 'Learn by doing, not just watching',
        description: 'Hands-on lab exercises for conflict resolution, worship flow design, vocal harmony, organizational planning, rehearsal planning, and ministry planning. AI-graded with real-time feedback.',
        icon: BookOpen,
        features: [
          '6 real lab types',
          'AI-powered auto-grading',
          'Agent-backed feedback',
          'XP rewards for completion',
          'Course integration'
        ],
        badge: 'Hands-On',
        href: '/products/labs'
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
        tagline: 'Growing library of worship training courses',
        description: 'From vocal technique to worship theology, structured courses with assessments and certifications.',
        icon: BookOpen,
        features: [
          'Ministry-focused courses',
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
    solutionHref: '/solutions/ministries-directors',
    solutionLabel: 'See how Ministries Directors use these tools',
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
    description: 'Know what actually happened in your services, not just what was planned.',
    color: 'amber',
    solutionHref: '/solutions/leadership',
    solutionLabel: 'See how Church Leadership uses these tools',
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
      },
      {
        name: 'Vocal Health Monitoring',
        tagline: 'Protect your most valuable instrument',
        description: 'Bio-insight engine with Pearson R correlation analysis, wearable biometric sync, burnout detection, and vocal strain prevention across your entire worship team.',
        icon: Heart,
        features: [
          'Biometric-vocal correlation',
          'Burnout risk detection',
          'HealthKit & Google Fit integration',
          'Galaxy Watch & Apple Watch support',
          'Team health dashboards'
        ],
        badge: 'Industry First',
        href: '/products/vocal-health'
      }
    ]
  },
  {
    id: 'ai-intelligence',
    title: 'AI Intelligence',
    subtitle: '8+ autonomous agents that understand ministry',
    description: 'Not chatbots. Not templates. Autonomous AI agents that understand your church\'s theology, culture, and people — working 24/7 to improve outcomes.',
    color: 'rose',
    solutionHref: '/solutions/leadership',
    solutionLabel: 'See how AI transforms leadership decisions',
    products: [
      {
        name: 'Vocal Coaching Agents',
        tagline: 'Personal AI voice coach for every singer',
        description: 'Virtuoso Coach, Practice Coach, and Blend Analyst work together to provide real-time vocal feedback, personalized training plans, and ensemble optimization.',
        icon: Mic2,
        features: [
          'Real-time pitch & breath coaching',
          'Personalized training plans',
          'Ensemble blend optimization',
          'Singer identification (YIN + K-Means)',
          'Progress tracking over time'
        ],
        badge: '3 Agents',
        href: '/products/vocal-coaching'
      },
      {
        name: 'Ministry Intelligence Agents',
        tagline: 'Smart ministry matching and leadership development',
        description: 'Position Matcher, Succession Planner, and Shepherd Agent analyze spiritual gifts, track growth trajectories, and recommend optimal ministry placements.',
        icon: Target,
        features: [
          'Spiritual gifts → role matching',
          'Leadership readiness scoring',
          'Burnout early warning',
          'Engagement prediction',
          'Mentorship pairing'
        ],
        badge: '3 Agents',
        href: '/products/ministry-agents'
      },
      {
        name: 'Worship Planning Agents',
        tagline: 'AI-powered service design and quality control',
        description: 'Liturgist, Set Approval Manager, and Song Swap Recommender ensure every service is theologically sound, musically excellent, and organizationally compliant.',
        icon: Music,
        features: [
          'Theology-aware song selection',
          'Org-level set approval controls',
          'Song swap recommendations',
          'Theme alignment scoring',
          'Longitudinal trend analysis'
        ],
        badge: '3 Agents',
        href: '/products/worship-agents'
      },
      {
        name: 'Artist Profiling Pipeline',
        tagline: 'Comprehensive artist assessment',
        description: '5-agent pipeline that orchestrates audio assessment, vocal analysis, visual evaluation, gap identification, and likeness synthesis for complete artist profiles.',
        icon: Brain,
        features: [
          'Multi-agent orchestration',
          'Audio & vocal assessment',
          'Visual performance analysis',
          'Gap analysis & recommendations',
          'Complete artist profile synthesis'
        ],
        badge: '5 Agents',
        href: '/products/artist-profiling'
      }
    ]
  },
  {
    id: 'manage-govern',
    title: 'Manage & Govern',
    subtitle: 'Organize at any scale',
    description: 'From single campus to multi-site denominations, governance tools that grow with you.',
    color: 'slate',
    solutionHref: '/solutions/church-admins',
    solutionLabel: 'See how Church Admins use these tools',
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
  const [showBetaModal, setShowBetaModal] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <MarketingNav currentPage="products" onBetaSignupClick={() => setShowBetaModal(true)} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Every tool your worship ministry needs
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Plan, develop, engage, and analyze—all in one integrated platform.
            No more switching between disconnected tools.
          </p>

          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-3">
            {productPillars.map((pillar) => (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                className="px-4 py-2 text-sm font-medium text-muted-foreground bg-background border border-slate-800 rounded-full hover:border-blue-300 hover:text-blue-600 transition-colors"
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
          'bg-slate-950',
          'bg-slate-900',
          'bg-slate-950',
          'bg-slate-900',
          'bg-slate-950'
        ];
        return (
        <section
          key={pillar.id}
          id={pillar.id}
          className={`relative py-24 overflow-hidden ${gradients[pillarIndex % gradients.length]}`}
        >
          {pillarIndex % 2 === 0 && (
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          )}
          {pillarIndex % 2 === 1 && (
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          )}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Pillar header */}
            <div className="max-w-3xl mb-16">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-4`}>
                <span className="text-sm font-medium text-blue-400">{pillar.title}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {pillar.subtitle}
              </h2>
              <p className="text-lg text-slate-300">
                {pillar.description}
              </p>
            </div>

            {/* Products grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {pillar.products.map((product, i) => (
                <div
                  key={i}
                  className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:shadow-lg hover:border-blue-600/50 transition-all group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <product.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    {product.badge && (
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        product.badge === 'Industry First'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : product.badge === 'New'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : product.badge === 'Premium'
                          ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                  <p className="text-sm text-blue-400 font-medium mb-3">{product.tagline}</p>
                  <p className="text-slate-400 text-sm mb-4">{product.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 group-hover:gap-2 transition-all"
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
                description: '20 specialized AI agents share context across vocal coaching, service analysis, ministry matching, and team development.',
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
      <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-background/5 rounded-full blur-3xl" />
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
              onClick={() => setShowBetaModal(true)}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all text-lg shadow-lg shadow-blue-500/25"
            >
              Sign Up for Beta
            </button>
            <Link
              href="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all text-lg border border-slate-700"
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
            <p className="text-sm text-slate-400">
              © 2026 Ministry Motion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Beta Signup Modal */}
      <BetaSignupModal
        isOpen={showBetaModal}
        onClose={() => setShowBetaModal(false)}
        source="website_beta_signup"
      />
    </div>
  );
}
