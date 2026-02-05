'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Calendar,
  Clock,
  Tag,
  ChevronRight,
  Search,
  ArrowRight,
} from 'lucide-react';
import { useState } from 'react';
import { getAllPosts, getAllCategories, getAllTags, type BlogPost } from '@/lib/blog-content';
import { useMarketing } from '@/context/MarketingContext';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { openBetaModal } = useMarketing();

  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = allPosts[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <AnimatedGradientText className="mb-6">
              <span className="inline-flex items-center gap-2 text-slate-200">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Research & Insights</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </AnimatedGradientText>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Ministry Motion{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-8">
              Research-backed insights on church technology, discipleship, and ministry effectiveness.
              Data-driven strategies to help your church grow.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && !searchQuery && !selectedCategory && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-blue-500/50 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-sm text-slate-500">{featuredPost.category}</span>
                    </div>

                    <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-lg text-slate-400 mb-6 max-w-3xl">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-blue-400 font-medium group-hover:gap-4 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-slate-500">Filter by:</span>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !selectedCategory
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
                className="mt-4 text-blue-400 hover:text-blue-300"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts
                .slice(searchQuery || selectedCategory ? 0 : 1)
                .map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to transform your ministry?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Join churches using Ministry Motion to track discipleship, not just attendance.
          </p>
          <button
            onClick={openBetaModal}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all"
          >
            Get Started Free
          </button>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Tag className="w-5 h-5 text-blue-400" />
            Popular Topics
          </h3>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-4 py-2 bg-slate-800/50 text-slate-400 rounded-full text-sm hover:bg-slate-700 hover:text-white transition-all"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group h-full flex flex-col rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all">
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <span className="text-xs text-slate-500">{post.readTime}</span>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Calendar className="w-3 h-3" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </div>
            <div className="flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
              Read
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
