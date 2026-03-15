'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  BookOpen,
  Clock,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  BarChart3,
  Layers,
  Search
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

// Blog article categories
type Category = 'All' | 'Thought Leadership' | 'How-To Guides' | 'Comparison & ROI' | 'Deep Dives';

const categories: Category[] = [
  'All',
  'Thought Leadership',
  'How-To Guides',
  'Comparison & ROI',
  'Deep Dives',
];

const categoryConfig: Record<string, { color: string; icon: typeof BookOpen }> = {
  'Thought Leadership': { color: 'blue', icon: TrendingUp },
  'How-To Guides': { color: 'emerald', icon: Lightbulb },
  'Comparison & ROI': { color: 'amber', icon: BarChart3 },
  'Deep Dives': { color: 'violet', icon: Layers },
};

// 20 blog posts across 4 pillars
const blogPosts = [
  // Pillar 1: Thought Leadership (01–05)
  {
    id: '01',
    slug: 'why-discipleship-data-matters-more-than-attendance',
    title: 'Why Discipleship Data Matters More Than Attendance Numbers',
    excerpt:
      'Sunday head counts tell you who showed up. Discipleship data tells you who is growing. Here is why churches that measure progression—not presence—are seeing stronger long-term retention and giving.',
    category: 'Thought Leadership',
    readTime: '6 min read',
  },
  {
    id: '02',
    slug: 'the-worship-team-as-discipleship-engine',
    title: 'The Worship Team as a Discipleship Engine',
    excerpt:
      'Most churches treat the worship team as a production crew. The churches seeing the most growth treat it as a primary discipleship environment. The difference in approach changes everything.',
    category: 'Thought Leadership',
    readTime: '8 min read',
  },
  {
    id: '03',
    slug: 'ai-in-ministry-five-legitimate-applications',
    title: 'AI in Ministry: 5 Legitimate Applications (And 3 to Avoid)',
    excerpt:
      'Not all AI applications in ministry are created equal. We break down the five areas where AI genuinely helps church staff, and three hyped uses that create more problems than they solve.',
    category: 'Thought Leadership',
    readTime: '7 min read',
  },
  {
    id: '04',
    slug: 'volunteer-burnout-the-hidden-discipleship-crisis',
    title: "Volunteer Burnout: The Hidden Discipleship Crisis No One Is Measuring",
    excerpt:
      'Churches track giving and attendance obsessively. Almost none systematically monitor volunteer health. The result: their most committed servants leave quietly—and no one sees it coming.',
    category: 'Thought Leadership',
    readTime: '9 min read',
  },
  {
    id: '05',
    slug: 'from-connect-to-go-rethinking-the-discipleship-pipeline',
    title: 'From Connect to Go: Rethinking the Discipleship Pipeline for the Modern Church',
    excerpt:
      'The Connect→Grow→Serve→Go framework has been around for decades. What has changed is our ability to measure every transition in real time. Here is what that measurement reveals.',
    category: 'Thought Leadership',
    readTime: '10 min read',
  },

  // Pillar 2: How-To Guides (06–10)
  {
    id: '06',
    slug: 'how-to-generate-satb-rehearsal-tracks-in-30-seconds',
    title: 'How to Generate SATB Rehearsal Tracks in 30 Seconds',
    excerpt:
      'A step-by-step guide to uploading your worship set and generating fully separated Soprano, Alto, Tenor, and Bass practice tracks—ready for your team before Wednesday.',
    category: 'How-To Guides',
    readTime: '4 min read',
  },
  {
    id: '07',
    slug: 'how-to-run-a-30-day-automated-service-prep-timeline',
    title: 'How to Run a 30-Day Automated Service Prep Timeline',
    excerpt:
      'Set your service date once. Let the platform handle the 7-milestone countdown—from song selection through tech rehearsal to post-service scorecard delivery.',
    category: 'How-To Guides',
    readTime: '5 min read',
  },
  {
    id: '08',
    slug: 'how-to-use-the-position-matcher-agent-for-volunteer-placement',
    title: 'How to Use the Position Matcher Agent for Volunteer Placement',
    excerpt:
      'A walkthrough of the spiritual gifts assessment → vector matching → leader confirmation workflow that places volunteers in roles aligned with their gifts in minutes, not hours.',
    category: 'How-To Guides',
    readTime: '6 min read',
  },
  {
    id: '09',
    slug: 'how-to-set-up-planning-center-integration',
    title: 'How to Set Up Planning Center Integration',
    excerpt:
      'Connect Ministry Motion to Planning Center Online in under 10 minutes and import your members, services, and rosters—without manual exports, CSV files, or data reconciliation.',
    category: 'How-To Guides',
    readTime: '5 min read',
  },
  {
    id: '10',
    slug: 'how-to-read-your-church-health-radar-chart',
    title: 'How to Read Your Church Health Radar Chart',
    excerpt:
      'The 5-dimension radar chart is more informative than a single score. This guide explains what each dimension means, what ideal looks like, and how to act on the gaps.',
    category: 'How-To Guides',
    readTime: '7 min read',
  },

  // Pillar 3: Comparison & ROI (11–15)
  {
    id: '11',
    slug: 'ministry-motion-vs-planning-center-which-is-right',
    title: 'Ministry Motion vs. Planning Center: Which Is Right for Your Church?',
    excerpt:
      'Planning Center is the industry standard for service planning. Ministry Motion adds AI coaching, member analytics, and learning management. This head-to-head helps you decide if you need one, the other, or both.',
    category: 'Comparison & ROI',
    readTime: '8 min read',
  },
  {
    id: '12',
    slug: 'calculating-roi-on-church-software',
    title: 'How to Calculate ROI on Church Software (A Framework for Finance Committees)',
    excerpt:
      'Finance committees need more than feature lists. This framework helps you quantify the time saved, retention improved, and giving increased from ministry platform investments.',
    category: 'Comparison & ROI',
    readTime: '9 min read',
  },
  {
    id: '13',
    slug: 'replacing-6-subscriptions-with-one-platform',
    title: "Replacing 6 Subscriptions With 1: A Real-World Cost Analysis",
    excerpt:
      'PCO, Circle, Yousician, Coursera, Zoom, and Pushpay can cost over $1,000/month combined. We walk through which core features Ministry Motion Pro replaces and where the savings are real.',
    category: 'Comparison & ROI',
    readTime: '6 min read',
  },
  {
    id: '14',
    slug: 'ai-vocal-coaching-vs-human-coach-cost-comparison',
    title: 'AI Vocal Coaching vs. Human Vocal Coach: A Cost and Outcome Comparison',
    excerpt:
      'A human vocal coach costs $60–120/hour. AI vocal coaching in Ministry Motion costs $0.10 in processing per rehearsal track. We compare outcomes, consistency, and appropriate use cases for each.',
    category: 'Comparison & ROI',
    readTime: '7 min read',
  },
  {
    id: '15',
    slug: 'discipleship-investment-and-giving-the-research',
    title: 'Discipleship Investment and Giving: What 12 Studies Actually Say',
    excerpt:
      'The claim that engaged members give more is widely repeated. Here we examine the actual research base, what the studies measured, and what confidence intervals allow us to responsibly claim.',
    category: 'Comparison & ROI',
    readTime: '11 min read',
  },

  // Pillar 4: Deep Dives (16–20)
  {
    id: '16',
    slug: 'how-satb-ai-separation-actually-works',
    title: 'How AI SATB Voice Separation Actually Works (Technical Deep Dive)',
    excerpt:
      'A technical breakdown of the source separation pipeline behind Ministry Motion rehearsal tracks—from audio ingestion through frequency domain separation to part recombination with blend mix.',
    category: 'Deep Dives',
    readTime: '12 min read',
  },
  {
    id: '17',
    slug: 'the-architecture-of-the-unifiedmember-system',
    title: "The Architecture of Ministry Motion's UnifiedMember System",
    excerpt:
      'How we built a single member record that serves 20 specialized AI agents, all ministry dashboards, PCO integration, and real-time journey pipeline tracking—without data fragmentation.',
    category: 'Deep Dives',
    readTime: '14 min read',
  },
  {
    id: '18',
    slug: 'how-the-advancement-arbiter-calculates-journey-readiness',
    title: 'How the Advancement Arbiter Calculates Journey Readiness',
    excerpt:
      'A deep dive into the signals, weights, and thresholds the Advancement Arbiter uses to determine when a member is ready to advance from Connect to Grow, Grow to Serve, or Serve to Go.',
    category: 'Deep Dives',
    readTime: '10 min read',
  },
  {
    id: '19',
    slug: 'wearable-hrv-data-in-ministry-what-it-actually-measures',
    title: 'Wearable HRV Data in Ministry: What It Actually Measures and What It Does Not',
    excerpt:
      'Apple Watch and Galaxy Watch HRV data can surface patterns associated with physiological stress. This deep dive explains what the data means, what it cannot diagnose, and how Ministry Motion uses it responsibly.',
    category: 'Deep Dives',
    readTime: '13 min read',
  },
  {
    id: '20',
    slug: 'building-the-god-quotient-scoring-theology-at-scale',
    title: 'Building the God Quotient: Scoring Theological Depth at Scale',
    excerpt:
      'How we built a scoring system that evaluates lyrical theological weight, scriptural alignment, and thematic consistency across an entire service set—without reducing theology to a number.',
    category: 'Deep Dives',
    readTime: '15 min read',
  },
];

function CategoryBadge({ category }: { category: string }) {
  const config = categoryConfig[category] || { color: 'blue', icon: BookOpen };
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
    amber: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
    violet: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
  };
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${colorMap[config.color] || colorMap['blue']}`}>
      {category}
    </span>
  );
}

export default function BlogPage() {
  const { openBetaModal } = useMarketing();
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const categoryColorMap: Record<string, string> = {
    'All': 'bg-foreground text-background',
    'Thought Leadership': 'bg-blue-600 text-white',
    'How-To Guides': 'bg-emerald-600 text-white',
    'Comparison & ROI': 'bg-amber-600 text-white',
    'Deep Dives': 'bg-violet-600 text-white',
  };

  const categoryInactiveMap: Record<string, string> = {
    'All': 'bg-muted text-muted-foreground hover:bg-muted/80',
    'Thought Leadership': 'bg-muted text-muted-foreground hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/20 dark:hover:text-blue-300',
    'How-To Guides': 'bg-muted text-muted-foreground hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-900/20 dark:hover:text-emerald-300',
    'Comparison & ROI': 'bg-muted text-muted-foreground hover:bg-amber-50 hover:text-amber-700 dark:hover:bg-amber-900/20 dark:hover:text-amber-300',
    'Deep Dives': 'bg-muted text-muted-foreground hover:bg-violet-50 hover:text-violet-700 dark:hover:bg-violet-900/20 dark:hover:text-violet-300',
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Ministry Motion Blog</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-white">
              Insights for{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Ministry Leaders
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Thought leadership, practical how-to guides, tool comparisons, and technical deep dives—
              written for worship leaders, ministry directors, pastors, and church administrators.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-10 bg-background border-b border-border py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? categoryColorMap[cat] || 'bg-foreground text-background'
                    : categoryInactiveMap[cat] || 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {cat}
                <span className="ml-1.5 opacity-60">
                  ({cat === 'All' ? blogPosts.length : blogPosts.filter((p) => p.category === cat).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post (first in filtered list) */}
          {filtered.length > 0 && (
            <div className="mb-12">
              <Link
                href={`/blog/${filtered[0].slug}`}
                className="group block bg-muted rounded-2xl border border-border p-8 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CategoryBadge category={filtered[0].category} />
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {filtered[0].readTime}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">{filtered[0].id}</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                  {filtered[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{filtered[0].excerpt}</p>
                <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                  Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          )}

          {/* Remaining posts grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-background rounded-2xl border border-border p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CategoryBadge category={post.category} />
                  <span className="text-xs text-muted-foreground flex items-center gap-1 ml-auto">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors leading-snug flex-1">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1 text-blue-600 text-sm font-medium mt-auto">
                  Read <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              No posts in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / Beta CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Stay ahead of the conversation
          </h2>
          <p className="text-slate-300 mb-8">
            Get new articles and Ministry Motion updates delivered directly to your inbox.
            Join our beta and be the first to access new features as we publish about them.
          </p>
          <button
            onClick={openBetaModal}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all text-lg"
          >
            Join Beta & Get Updates
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src="/logos/ministry-motion-text-logo-white.svg" alt="Ministry Motion" className="h-8 w-auto" />
            <nav className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <Link href="/solutions/praise-leaders" className="hover:text-white transition-colors">Solutions</Link>
              <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            </nav>
            <p className="text-sm text-slate-500">© 2026 Ministry Motion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
