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
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { getProductBySlug, type ProductContent } from '@/lib/products-content';
import { useMarketing } from '@/context/MarketingContext';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { NumberTicker } from '@/components/magicui/number-ticker';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<ProductContent | null>(null);
  const { openBetaModal } = useMarketing();

  useEffect(() => {
    const found = getProductBySlug(slug);
    if (found) {
      setProduct(found);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product not found</h1>
          <Link href="/products" className="text-blue-400 hover:text-blue-300">
            &larr; Back to Products
          </Link>
        </div>
      </div>
    );
  }

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
              href="/products"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Products
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedGradientText className="mb-6">
                  <span className="inline-flex items-center gap-2 text-slate-200">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span>{product.badges[0]}</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </AnimatedGradientText>

                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  {product.title}
                </h1>

                <p className="text-xl text-blue-100/90 mb-4 font-medium">
                  {product.tagline}
                </p>

                <p className="text-lg text-slate-300 mb-8">
                  {product.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full border border-blue-500/30"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <ShimmerButton
                    onClick={openBetaModal}
                    className="h-14 px-8 text-lg font-semibold"
                    background="linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
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

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8"
              >
                <h3 className="text-lg font-semibold text-white mb-6">Key Benefits</h3>
                <div className="grid grid-cols-3 gap-6">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">
                        {benefit.stat.match(/^\d+/) ? (
                          <>
                            <NumberTicker value={parseInt(benefit.stat)} />
                            {benefit.stat.replace(/^\d+/, '')}
                          </>
                        ) : (
                          benefit.stat
                        )}
                      </div>
                      <div className="text-sm text-slate-400">{benefit.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
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
              Powerful Features
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Everything you need to transform your ministry, built into one integrated platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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

      {/* How It Works */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-400">
              Get started in minutes, see results in days.
            </p>
          </motion.div>

          <div className="space-y-8">
            {product.howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xl">
                  {i + 1}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
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
              Built For You
            </h2>
            <p className="text-lg text-slate-400">
              Whether you&apos;re just starting or leading at the highest level.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.forWhom.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{item.role}</h3>
                <p className="text-slate-400 text-sm">{item.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              {product.ctaTitle}
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              {product.ctaDescription}
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
                href="/products"
                className="h-14 px-8 bg-white/5 text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-all text-lg flex items-center justify-center gap-2"
              >
                Explore Other Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
