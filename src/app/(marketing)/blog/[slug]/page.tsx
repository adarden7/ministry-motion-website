'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Twitter,
  Linkedin,
  Link2,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { useState, useMemo } from 'react';
import { getPostBySlug, getAllPosts } from '@/lib/blog-content';
import { useMarketing } from '@/context/MarketingContext';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { extractHeadings } from '@/components/blog/headings';
import { ReadingProgress, TableOfContents } from '@/components/blog/ReadingAids';
import { CoverHero, StatGrid, ChartFigure } from '@/components/blog/ArticleVisuals';
import { ArticleBody } from '@/components/blog/ArticleBody';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [copied, setCopied] = useState(false);
  const { openBetaModal } = useMarketing();

  const post = useMemo(() => getPostBySlug(slug) ?? null, [slug]);
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return getAllPosts()
      .filter(
        (p) =>
          p.slug !== slug &&
          (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag)))
      )
      .slice(0, 3);
  }, [post, slug]);
  const headings = useMemo(() => (post ? extractHeadings(post.content) : []), [post]);

  if (post === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Article not found</h1>
          <Link href="/blog" className="text-violet-400 hover:text-violet-300">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-white antialiased">
      <ReadingProgress />

      {/* Header */}
      <section className="relative pt-32 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-violet-500/20 border border-violet-500/30 text-violet-400 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{post.title}</h1>

            {post.subtitle && (
              <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">{post.subtitle}</p>
            )}

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white text-xs font-bold">
                  MM
                </div>
                <span className="text-slate-300 font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-3 pb-8">
              <span className="text-sm text-white/50">Share:</span>
              <button
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`,
                    '_blank'
                  )
                }
                className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')
                }
                className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                onClick={handleCopyLink}
                className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors relative"
              >
                <Link2 className="w-4 h-4" />
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-green-500 text-white text-xs rounded whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
            </div>

            {/* Cover */}
            <CoverHero category={post.category} title={post.title} coverImage={post.coverImage} />
          </motion.div>
        </div>
      </section>

      {/* Body + TOC */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[220px_minmax(0,720px)] lg:gap-12 lg:justify-center">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents headings={headings} />
              </div>
            </aside>

            <article>
              {post.keyStats && post.keyStats.length > 0 && (
                <div className="mb-10">
                  <StatGrid stats={post.keyStats} />
                </div>
              )}
              {post.chartData && <ChartFigure chart={post.chartData} />}
              <ArticleBody content={post.content} headings={headings} />

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-white/10">
                <Tag className="w-4 h-4 text-slate-400" />
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="px-3 py-1 bg-slate-800 text-slate-400 rounded-full text-xs hover:bg-slate-700 hover:text-white transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Author CTA */}
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 border border-slate-700/50">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl font-bold text-white mb-2">Want to see these insights in action?</h3>
                <p className="text-slate-400 mb-4">
                  Ministry Motion turns this research into practical tools for your church. Track discipleship,
                  prevent disconnection, and grow your ministry.
                </p>
              </div>
              <div className="flex-shrink-0">
                <ShimmerButton
                  onClick={openBetaModal}
                  className="h-12 px-6 font-semibold"
                  background="linear-gradient(135deg, #7c3aed 0%, #c026d3 100%)"
                >
                  Sign Up for Beta
                </ShimmerButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <article className="group h-full flex flex-col rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/50 transition-all">
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium">
                          {relatedPost.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-1">{relatedPost.excerpt}</p>
                      <div className="flex items-center gap-1 text-violet-400 text-sm font-medium group-hover:gap-2 transition-all">
                        Read Article
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts CTA */}
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            View All Articles
          </Link>
        </div>
      </section>
    </div>
  );
}
