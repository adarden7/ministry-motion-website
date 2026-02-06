'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import { getAllPosts, getAllCategories, type BlogPost } from '@/lib/blog-content';
import { useMarketing } from '@/context/MarketingContext';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { openBetaModal } = useMarketing();

  const allPosts = getAllPosts();
  const categories = getAllCategories();

  const filteredPosts = selectedCategory
    ? allPosts.filter((post) => post.category === selectedCategory)
    : allPosts;

  const featuredPost = filteredPosts[0];
  const secondaryPosts = filteredPosts.slice(1, 3);
  const remainingPosts = filteredPosts.slice(3);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-sm text-white/60 mb-8">
              <Sparkles className="w-4 h-4 text-violet-400" />
              Insights & Research
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
              The MinistryMotion
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>

            <p className="text-lg text-white/50 mb-10">
              Research-backed insights on discipleship, church technology, and ministry transformation.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  !selectedCategory
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-white text-black'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">No articles found.</p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="mt-4 text-violet-400 hover:text-violet-300"
              >
                View all posts
              </button>
            </div>
          ) : (
            <>
              {/* Featured + Secondary Row */}
              <div className="grid lg:grid-cols-3 gap-4 mb-4">
                {/* Featured - Large */}
                {featuredPost && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-2 lg:row-span-2"
                  >
                    <Link href={`/blog/${featuredPost.slug}`} className="group block h-full">
                      <article className="relative h-full min-h-[400px] lg:min-h-full p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden">
                        {/* Ambient glow */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-500/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative h-full flex flex-col">
                          <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 text-xs font-medium bg-violet-500/20 text-violet-400 rounded-full">
                              Featured
                            </span>
                            <span className="text-sm text-white/40">{featuredPost.category}</span>
                          </div>

                          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4 group-hover:text-violet-300 transition-colors leading-tight">
                            {featuredPost.title}
                          </h2>

                          <p className="text-white/50 mb-6 leading-relaxed flex-1 line-clamp-3 lg:line-clamp-4">
                            {featuredPost.excerpt}
                          </p>

                          <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.06]">
                            <div className="flex items-center gap-4 text-sm text-white/40">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {featuredPost.readTime}
                              </span>
                            </div>
                            <span className="flex items-center gap-2 text-violet-400 font-medium group-hover:gap-3 transition-all">
                              Read
                              <ArrowUpRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                )}

                {/* Secondary Posts - Stacked */}
                <div className="flex flex-col gap-4">
                  {secondaryPosts.map((post, i) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
                      className="flex-1"
                    >
                      <Link href={`/blog/${post.slug}`} className="group block h-full">
                        <article className="h-full p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                          <span className="text-xs text-white/40 mb-3 block">{post.category}</span>
                          <h3 className="text-lg font-medium text-white mb-2 group-hover:text-white/80 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-white/40 line-clamp-2 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-white/30">
                            <span>{post.readTime}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </article>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Remaining Posts Grid */}
              {remainingPosts.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {remainingPosts.map((post, i) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                    >
                      <Link href={`/blog/${post.slug}`} className="group block h-full">
                        <article className="h-full p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs text-white/40">{post.category}</span>
                            <span className="text-white/20">·</span>
                            <span className="text-xs text-white/30">{post.readTime}</span>
                          </div>
                          <h3 className="text-base font-medium text-white mb-2 group-hover:text-white/80 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-white/40 line-clamp-2 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-1 text-sm text-white/30 group-hover:text-white/50 transition-colors">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </div>
                        </article>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-white/[0.08] overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />

            <div className="relative text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold mb-4">
                Stay ahead of the curve
              </h2>
              <p className="text-white/50 mb-8">
                Get weekly insights on ministry transformation, church technology, and discipleship strategies delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-5 py-3 bg-white/[0.05] border border-white/10 rounded-full text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 w-full sm:w-80"
                />
                <button className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-white/30 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              Ready to transform your ministry?
            </h2>
            <p className="text-lg text-white/50 mb-10">
              Join the early access program and experience what data-driven discipleship looks like.
            </p>
            <button
              onClick={openBetaModal}
              className="group px-8 py-4 bg-white text-black font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <span className="flex items-center gap-2">
                Request Early Access
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white/40 text-sm">
              © 2025 MinistryMotion. All rights reserved.
            </div>
            <nav className="flex items-center gap-8 text-sm text-white/40">
              <Link href="/products" className="hover:text-white/70 transition-colors">Features</Link>
              <Link href="/pricing" className="hover:text-white/70 transition-colors">Pricing</Link>
              <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
              <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
