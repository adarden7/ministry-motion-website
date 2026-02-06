'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getProductBySlug, type ProductContent } from '@/lib/products-content';
import { useMarketing } from '@/context/MarketingContext';

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
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white mb-4">Product not found</h1>
          <Link href="/products" className="text-white/50 hover:text-white transition-colors">
            ← Back to Features
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back link */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Features
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                {/* Badge */}
                {product.badges[0] && (
                  <span className="inline-flex px-3 py-1 text-xs font-medium bg-amber-500/20 text-amber-400 rounded-full mb-6">
                    {product.badges[0]}
                  </span>
                )}

                <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
                  {product.title}
                </h1>

                <p className="text-xl text-white/60 mb-4">
                  {product.tagline}
                </p>

                <p className="text-white/40 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openBetaModal}
                    className="group px-8 py-4 bg-white text-black font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                  >
                    <span className="flex items-center gap-2">
                      Request Early Access
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                  <Link
                    href="/pricing"
                    className="px-8 py-4 text-white/70 font-medium rounded-full border border-white/10 hover:bg-white/5 hover:text-white transition-all duration-300"
                  >
                    See Pricing
                  </Link>
                </div>
              </div>

              {/* Benefits */}
              <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <h3 className="text-lg font-medium text-white mb-6">Key Benefits</h3>
                <div className="grid grid-cols-3 gap-6">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-semibold text-white mb-1">
                        {benefit.stat}
                      </div>
                      <div className="text-sm text-white/50">{benefit.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-semibold mb-4">
              Powerful capabilities
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Everything you need, built into one integrated platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-white/60" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-semibold mb-4">
              How it works
            </h2>
            <p className="text-white/50">
              Get started in minutes, see results in days.
            </p>
          </motion.div>

          <div className="space-y-8">
            {product.howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white/60 font-medium">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
                  <p className="text-white/50">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-semibold mb-4">
              Built for you
            </h2>
            <p className="text-white/50">
              Whether you're starting out or leading at the highest level.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.forWhom.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <h3 className="font-medium text-white mb-2">{item.role}</h3>
                <p className="text-sm text-white/50">{item.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
              {product.ctaTitle}
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              {product.ctaDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={openBetaModal}
                className="group px-8 py-4 bg-white text-black font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                <span className="flex items-center gap-2">
                  Request Early Access
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <Link
                href="/products"
                className="px-8 py-4 text-white/70 font-medium rounded-full border border-white/10 hover:bg-white/5 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Explore Other Features
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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
