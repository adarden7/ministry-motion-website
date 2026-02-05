'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Check,
  ArrowRight,
  Mic2,
  Users,
  Building2,
  Crown,
  Quote,
  Baby,
  Heart,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { getSolutionBySlug, getAllSolutions, type Solution } from '@/lib/solutions-content';
import { useMarketing } from '@/context/MarketingContext';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { NumberTicker } from '@/components/magicui/number-ticker';

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

export default function SolutionPage() {
  const params = useParams();
  const persona = params.persona as string;
  const [solution, setSolution] = useState<Solution | null>(null);
  const [otherSolutions, setOtherSolutions] = useState<Solution[]>([]);
  const { openBetaModal } = useMarketing();

  useEffect(() => {
    const found = getSolutionBySlug(persona);
    if (found) {
      setSolution(found);
      setOtherSolutions(getAllSolutions().filter((s) => s.slug !== persona).slice(0, 3));
    }
  }, [persona]);

  if (!solution) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Solution not found</h1>
          <Link href="/solutions" className="text-blue-400 hover:text-blue-300">
            ← Back to Solutions
          </Link>
        </div>
      </div>
    );
  }

  const HeroIcon = personaIcons[solution.slug] || Users;
  const colorClass = personaColors[solution.slug] || 'from-blue-500 to-cyan-500';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back link */}
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Solutions
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedGradientText className="mb-6">
                  <span className="inline-flex items-center gap-2 text-slate-200">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span>{solution.heroTagline}</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </AnimatedGradientText>

                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  {solution.title}
                </h1>

                <p className="text-xl text-slate-300 mb-8">
                  {solution.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <ShimmerButton
                    onClick={openBetaModal}
                    className="h-14 px-8 text-lg font-semibold"
                    background={`linear-gradient(135deg, ${colorClass.includes('blue') ? '#3b82f6' : colorClass.includes('violet') ? '#8b5cf6' : colorClass.includes('rose') ? '#f43f5e' : colorClass.includes('emerald') ? '#10b981' : '#f59e0b'} 0%, ${colorClass.includes('cyan') ? '#06b6d4' : colorClass.includes('purple') ? '#a855f7' : colorClass.includes('pink') ? '#ec4899' : colorClass.includes('teal') ? '#14b8a6' : '#f97316'} 100%)`}
                  >
                    Start Free Trial
                  </ShimmerButton>
                  <Link
                    href="/pricing"
                    className="h-14 px-8 bg-white/5 text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-all text-lg flex items-center justify-center gap-2"
                  >
                    See Pricing
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-6`}>
                  <HeroIcon className="w-8 h-8 text-white" />
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {solution.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">
                        {stat.value.match(/^\d+/) ? (
                          <>
                            <NumberTicker value={parseInt(stat.value)} />
                            {stat.value.replace(/^\d+/, '')}
                          </>
                        ) : (
                          stat.value
                        )}
                      </div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Sound Familiar?
            </h2>
            <p className="text-lg text-slate-400">
              We built Ministry Motion to solve these exact challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {solution.painPoints.map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-rose-500/5 border border-rose-500/20"
              >
                <div className="text-rose-400 mb-3 text-2xl">✗</div>
                <p className="text-slate-300">{pain}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              How Ministry Motion Helps
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Purpose-built tools designed for your specific role and responsibilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {solution.testimonial && (
        <section className="py-20 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-500/20" />
              <div className="relative">
                <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                  &ldquo;{solution.testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center text-white font-bold`}>
                    {solution.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{solution.testimonial.author}</div>
                    <div className="text-sm text-slate-400">
                      {solution.testimonial.role}, {solution.testimonial.church}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {solution.ctaTitle}
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              {solution.ctaDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ShimmerButton
                onClick={openBetaModal}
                className="h-14 px-8 text-lg font-semibold"
                background="linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
              >
                Start Free Trial
              </ShimmerButton>
              <Link
                href="/compare"
                className="h-14 px-8 bg-white/5 text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-all text-lg flex items-center justify-center gap-2"
              >
                Compare to Competitors
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Solutions */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            Solutions for Other Roles
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {otherSolutions.map((other, i) => {
              const OtherIcon = personaIcons[other.slug] || Users;
              const otherColor = personaColors[other.slug] || 'from-blue-500 to-cyan-500';

              return (
                <motion.div
                  key={other.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/solutions/${other.slug}`}>
                    <div className="group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 transition-all">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${otherColor} flex items-center justify-center mb-4`}>
                        <OtherIcon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {other.title}
                      </h3>
                      <p className="text-sm text-slate-400 line-clamp-2">
                        {other.subtitle}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
