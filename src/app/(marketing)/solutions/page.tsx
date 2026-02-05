'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mic2,
  Users,
  Building2,
  ChevronRight,
  Sparkles,
  Crown,
  ArrowRight,
  Baby,
  Heart,
} from 'lucide-react';
import { getAllSolutions } from '@/lib/solutions-content';
import { useMarketing } from '@/context/MarketingContext';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const personaIcons: Record<string, typeof Mic2> = {
  'worship-leaders': Mic2,
  'pastors': Crown,
  'vocalists': Mic2,
  'administrators': Building2,
  'childrens-ministry': Baby,
  'small-groups': Heart,
  'denominations': Users,
};

const personaColors: Record<string, string> = {
  'worship-leaders': 'from-blue-500 to-cyan-500',
  'pastors': 'from-violet-500 to-purple-500',
  'vocalists': 'from-rose-500 to-pink-500',
  'administrators': 'from-emerald-500 to-teal-500',
  'childrens-ministry': 'from-pink-500 to-rose-400',
  'small-groups': 'from-teal-500 to-cyan-400',
  'denominations': 'from-amber-500 to-orange-500',
};

export default function SolutionsPage() {
  const solutions = getAllSolutions();
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <AnimatedGradientText className="mb-6">
              <span className="inline-flex items-center gap-2 text-slate-200">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Solutions by Role</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </AnimatedGradientText>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Built for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Your Role
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-4">
              Ministry Motion adapts to how you work. Whether you lead worship, children&apos;s ministry,
              small groups, outreach, or the entire church—we&apos;ve built tools specifically for you.
            </p>
            <p className="text-slate-500">
              One platform for every ministry leader, with transformation tracking at the core.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, i) => {
              const Icon = personaIcons[solution.slug] || Users;
              const colorClass = personaColors[solution.slug] || 'from-blue-500 to-cyan-500';

              return (
                <motion.div
                  key={solution.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={`/solutions/${solution.slug}`}>
                    <div className="group h-full rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all hover:-translate-y-1">
                      {/* Gradient Header */}
                      <div className={`h-2 bg-gradient-to-r ${colorClass}`} />

                      <div className="p-8">
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-6`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {solution.title}
                        </h2>

                        {/* Subtitle */}
                        <p className="text-slate-400 mb-6">
                          {solution.subtitle}
                        </p>

                        {/* Key Pain Points */}
                        <div className="space-y-2 mb-6">
                          {solution.painPoints.slice(0, 3).map((pain, j) => (
                            <div key={j} className="flex items-start gap-2 text-sm text-slate-500">
                              <span className="text-rose-400">•</span>
                              {pain}
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:gap-4 transition-all">
                          See how we solve this
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Universal Value Props */}
      <section className="py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Every Role. One Platform.
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Unlike separate tools that create silos, Ministry Motion connects everyone
              on your team with a unified view of ministry health.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Unified Data',
                description: 'Every ministry sees the same members, the same journeys, the same spiritual progress. No silos, no duplicate entry.',
              },
              {
                title: 'Role-Based Views',
                description: 'Each ministry leader sees what they need. Children\'s ministry sees check-ins, small group leaders see attendance, pastors see the full journey.',
              },
              {
                title: 'Connected Transformation',
                description: 'When someone completes discipleship training, every ministry knows. Growth in one area flows to opportunities in another.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to transform your ministry?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Join the beta and see why churches are switching to Ministry Motion.
            </p>
            <ShimmerButton
              onClick={openBetaModal}
              className="h-14 px-8 text-lg font-semibold"
              background="linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
            >
              Start Free Trial
            </ShimmerButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
