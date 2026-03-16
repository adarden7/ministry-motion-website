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
import { getAllPosts, getAllCategories } from '@/lib/blog-content';

const blogPosts = getAllPosts();
const categories = ['All', ...getAllCategories()];

const categoryConfig: Record<string, { color: string; icon: typeof BookOpen }> = {
  'Research': { color: 'blue', icon: BarChart3 },
  'Technology': { color: 'emerald', icon: Lightbulb },
  'Comparison': { color: 'amber', icon: Layers },
  'Vision': { color: 'violet', icon: TrendingUp },
};

function CategoryBadge({ category }: { category: string }) {
  const config = categoryConfig[category] || { color: 'blue', icon: BookOpen };
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-500/20 text-blue-300 dark:bg-blue-900/30 dark:text-blue-300',
    emerald: 'bg-blue-500/20 text-blue-300 dark:bg-blue-900/30 dark:text-blue-300',
    amber: 'bg-amber-500/20 text-amber-300 dark:bg-amber-900/30 dark:text-amber-300',
    violet: 'bg-violet-500/20 text-violet-300 dark:bg-violet-900/30 dark:text-violet-300',
  };
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${colorMap[config.color] || colorMap['blue']}`}>
      {category}
    </span>
  );
}

export default function BlogPage() {
  const { openBetaModal } = useMarketing();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const categoryColorMap: Record<string, string> = {
    'All': 'bg-foreground text-background',
    'Research': 'bg-blue-600 text-white',
    'Technology': 'bg-blue-600 text-white',
    'Comparison': 'bg-amber-600 text-white',
    'Vision': 'bg-violet-600 text-white',
  };

  const categoryInactiveMap: Record<string, string> = {
    'All': 'bg-muted text-muted-foreground hover:bg-muted/80',
    'Research': 'bg-muted text-muted-foreground hover:bg-blue-500/20 hover:text-blue-300',
    'Technology': 'bg-muted text-muted-foreground hover:bg-blue-500/20 hover:text-blue-300',
    'Comparison': 'bg-muted text-muted-foreground hover:bg-amber-500/20 hover:text-amber-300',
    'Vision': 'bg-muted text-muted-foreground hover:bg-violet-500/20 hover:text-violet-300',
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
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
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
                key={post.slug}
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
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all text-lg"
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
            <p className="text-sm text-slate-400">© 2026 Ministry Motion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
