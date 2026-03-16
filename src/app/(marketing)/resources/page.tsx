'use client';

import Link from 'next/link';
import {
  Download,
  Play,
  Calculator,
  FileText,
  BookOpen,
  Video,
  ArrowRight,
  Clock,
  Users,
  BarChart3,
  Mic2,
  RefreshCw
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

// Resource type badge colors
type ResourceType = 'Guide' | 'Tool' | 'Webinar' | 'Checklist';

const typeConfig: Record<ResourceType, { color: string; label: string }> = {
  Guide: { color: 'blue', label: 'Guide' },
  Tool: { color: 'emerald', label: 'Tool' },
  Webinar: { color: 'violet', label: 'Webinar' },
  Checklist: { color: 'amber', label: 'Checklist' },
};

function TypeBadge({ type }: { type: ResourceType }) {
  const config = typeConfig[type];
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-500/20 text-blue-300 dark:bg-blue-900/30 dark:text-blue-300',
    emerald: 'bg-blue-500/20 text-blue-300 dark:bg-blue-900/30 dark:text-blue-300',
    violet: 'bg-violet-500/20 text-violet-300 dark:bg-violet-900/30 dark:text-violet-300',
    amber: 'bg-amber-500/20 text-amber-300 dark:bg-amber-900/30 dark:text-amber-300',
  };
  return (
    <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${colorMap[config.color]}`}>
      {config.label}
    </span>
  );
}

// Guides section
const guides = [
  {
    type: 'Guide' as ResourceType,
    title: 'The Complete Guide to AI in Worship Ministry',
    description:
      'A 32-page comprehensive guide covering AI vocal coaching, service analysis, journey pipeline tracking, and agent-driven ministry operations. Includes implementation checklists and ROI frameworks.',
    icon: Mic2,
    pages: '32 pages',
    audience: 'Worship Directors, Praise Leaders',
    cta: 'Download PDF',
    comingSoon: false,
  },
  {
    type: 'Guide' as ResourceType,
    title: 'Denominational Setup Guide: Configuring Ministry Motion for Your Tradition',
    description:
      'Step-by-step configuration guide for Baptist, Methodist, Pentecostal, Presbyterian, and non-denominational church structures. Covers terminology customization, role hierarchy setup, and doctrine-sensitive AI context.',
    icon: BookOpen,
    pages: '24 pages',
    audience: 'Church Admins, Executive Pastors',
    cta: 'Download PDF',
    comingSoon: false,
  },
];

// Tools section
const tools = [
  {
    type: 'Tool' as ResourceType,
    title: 'Church Tech ROI Calculator',
    description:
      'Enter your current tool subscriptions, team size, and hours spent on administrative tasks. Get a customized analysis of potential savings from consolidating to Ministry Motion.',
    icon: Calculator,
    cta: 'Open Calculator',
    comingSoon: false,
  },
  {
    type: 'Checklist' as ResourceType,
    title: 'PCO Migration Checklist',
    description:
      'A 47-point checklist for migrating from Planning Center Online to Ministry Motion without data loss. Covers member records, service plans, song libraries, volunteer rosters, and giving history.',
    icon: RefreshCw,
    cta: 'Download Checklist',
    comingSoon: false,
  },

  {
    type: 'Tool' as ResourceType,
    title: 'Ministry Subscription Stack Audit',
    description:
      'A downloadable spreadsheet template that helps you document every church software subscription, its cost, core use case, and which Ministry Motion features it overlaps with.',
    icon: BarChart3,
    cta: 'Download Template',
    comingSoon: false,
  },
];

// Webinars section
const webinars = [
  {
    type: 'Webinar' as ResourceType,
    title: 'Introduction to AI-Powered Worship Ministry',
    description:
      'A 45-minute live session covering the five highest-impact AI capabilities for worship teams: rehearsal track generation, service analysis, vocal coaching, journey pipeline, and the AI advisory council.',
    icon: Video,
    duration: '45 min',
    presenter: 'Ministry Motion Team',
    date: 'Recorded — watch anytime',
    comingSoon: false,
  },
  {
    type: 'Webinar' as ResourceType,
    title: 'Discipleship Data: What to Measure and How',
    description:
      'Senior pastors and executive leaders join our team to discuss what discipleship metrics actually matter, how to build a data culture in your church, and how to present spiritual health data to your board.',
    icon: Video,
    duration: '60 min',
    presenter: 'Panel: Senior Pastors + MM Team',
    date: 'Recorded — watch anytime',
    comingSoon: false,
  },
  {
    type: 'Webinar' as ResourceType,
    title: 'Live Demo: Full Ministry Motion Walkthrough',
    description:
      'An unscripted live walkthrough of the complete platform—from member onboarding through service analysis through post-service scorecard. Q&A included.',
    icon: Video,
    duration: '75 min',
    presenter: 'Ministry Motion Product Team',
    date: 'Live sessions monthly',
    comingSoon: false,
  },
];

function ResourceCard({
  type,
  title,
  description,
  icon: Icon,
  cta,
  comingSoon,
  meta,
}: {
  type: ResourceType;
  title: string;
  description: string;
  icon: typeof Download;
  cta: string;
  comingSoon: boolean;
  meta?: string[];
}) {
  return (
    <div className="bg-background rounded-2xl border border-border p-6 flex flex-col hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-muted-foreground" />
        </div>
        <TypeBadge type={type} />
      </div>
      <h3 className="font-bold text-foreground text-base mb-2 leading-snug">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{description}</p>
      {meta && meta.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
          {meta.map((m, i) => (
            <span key={i} className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" /> {m}
            </span>
          ))}
        </div>
      )}
      {comingSoon ? (
        <span className="inline-block px-4 py-2 bg-muted text-muted-foreground text-sm rounded-lg text-center">
          Coming Soon
        </span>
      ) : (
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
          {type === 'Webinar' ? <Play className="w-4 h-4" /> : <Download className="w-4 h-4" />}
          {cta}
        </button>
      )}
    </div>
  );
}

export default function ResourcesPage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Ministry Motion Resources</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-white">
              Tools and Guides to{' '}
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Accelerate Ministry
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Downloadable guides, ROI calculators, migration checklists, and recorded webinars—
              everything you need to evaluate, adopt, and get the most out of Ministry Motion.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 dark:bg-blue-900/30 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Guides</h2>
            </div>
            <p className="text-muted-foreground ml-11">
              Comprehensive PDF guides for ministry leaders at every level.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((g, i) => (
              <ResourceCard
                key={i}
                type={g.type}
                title={g.title}
                description={g.description}
                icon={g.icon}
                cta={g.cta}
                comingSoon={g.comingSoon}
                meta={[g.pages, g.audience]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Tools Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 dark:bg-blue-900/30 flex items-center justify-center">
                <Calculator className="w-4 h-4 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Tools & Checklists</h2>
            </div>
            <p className="text-muted-foreground ml-11">
              Interactive calculators, migration checklists, and assessment templates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((t, i) => (
              <ResourceCard
                key={i}
                type={t.type}
                title={t.title}
                description={t.description}
                icon={t.icon}
                cta={t.cta}
                comingSoon={t.comingSoon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Webinars Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-violet-500/20 dark:bg-violet-900/30 flex items-center justify-center">
                <Video className="w-4 h-4 text-violet-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Webinars</h2>
            </div>
            <p className="text-muted-foreground ml-11">
              Recorded sessions and live events covering AI in ministry, discipleship data, and platform deep dives.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {webinars.map((w, i) => (
              <ResourceCard
                key={i}
                type={w.type}
                title={w.title}
                description={w.description}
                icon={w.icon}
                cta={w.comingSoon ? 'Coming Soon' : 'Watch Recording'}
                comingSoon={w.comingSoon}
                meta={[w.duration, w.date]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Want all resources plus early platform access?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Beta members get priority access to new guides, tools, and webinars as they launch—
            plus direct access to our implementation team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBetaModal}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all text-lg"
            >
              Join Beta Program
            </button>
            <Link
              href="/blog"
              className="w-full sm:w-auto px-8 py-4 bg-background/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-slate-900/20 transition-all text-lg flex items-center justify-center gap-2"
            >
              Read the Blog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src="/logos/ministry-motion-text-logo-white.svg" alt="Ministry Motion" className="h-8 w-auto" />
            <nav className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
              <Link href="/solutions/praise-leaders" className="hover:text-white transition-colors">Solutions</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            </nav>
            <p className="text-sm text-slate-500">© 2026 Ministry Motion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
