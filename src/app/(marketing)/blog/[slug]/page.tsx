'use client';

import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Share2,
  Twitter,
  Linkedin,
  Link2,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { getPostBySlug, getAllPosts, type BlogPost } from '@/lib/blog-content';
import { useMarketing } from '@/context/MarketingContext';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import ReactMarkdown from 'react-markdown';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [copied, setCopied] = useState(false);
  const { openBetaModal } = useMarketing();

  useEffect(() => {
    const foundPost = getPostBySlug(slug);
    if (foundPost) {
      setPost(foundPost);
      // Get related posts by category or tags
      const allPosts = getAllPosts();
      const related = allPosts
        .filter(
          (p) =>
            p.slug !== slug &&
            (p.category === foundPost.category ||
              p.tags.some((tag) => foundPost.tags.includes(tag)))
        )
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Article not found</h1>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                  MM
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <Tag className="w-4 h-4 text-slate-500" />
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

            {/* Share */}
            <div className="flex items-center gap-4 pb-8 border-b border-slate-800">
              <span className="text-sm text-slate-500">Share:</span>
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
                  window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
                    '_blank'
                  )
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
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-slate-300 prose-p:leading-relaxed
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:text-slate-300 prose-ol:text-slate-300
              prose-li:marker:text-blue-400
              prose-blockquote:border-blue-500 prose-blockquote:bg-slate-800/50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
              prose-code:text-blue-300 prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-slate-800/50 prose-pre:border prose-pre:border-slate-700
              prose-table:text-slate-300 prose-th:text-white prose-th:border-slate-700 prose-td:border-slate-700
              prose-hr:border-slate-700"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.article>
        </div>
      </section>

      {/* Author CTA */}
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 border border-slate-700/50">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl font-bold text-white mb-2">
                  Want to see these insights in action?
                </h3>
                <p className="text-slate-400 mb-4">
                  Ministry Motion turns this research into practical tools for your church.
                  Track discipleship, prevent disconnection, and grow your ministry.
                </p>
              </div>
              <div className="flex-shrink-0">
                <ShimmerButton
                  onClick={openBetaModal}
                  className="h-12 px-6 font-semibold"
                  background="linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
                >
                  Start Free Trial
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
                  <article className="group h-full flex flex-col rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all">
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium">
                          {relatedPost.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-1">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
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
