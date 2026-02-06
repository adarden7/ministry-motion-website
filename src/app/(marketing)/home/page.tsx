'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

export default function HomePage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Ambient gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[200px]" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Now accepting early access applications
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-8"
          >
            The platform for
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              ministry transformation
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            AI-powered tools that develop your people, track spiritual growth,
            and help your ministry thrive. Built on 25 years of church consulting expertise.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={openBetaModal}
              className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request Early Access
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <Link
              href="/products"
              className="px-8 py-4 text-white/70 font-medium rounded-full border border-white/10 hover:bg-white/5 hover:text-white transition-all duration-300"
            >
              Explore Features
            </Link>
          </motion.div>

          {/* Trust signal */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-sm text-white/40"
          >
            Trusted by worship leaders across 100+ churches
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-white/40 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Value Proposition Section */}
      <section className="relative py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
              Beyond management.
              <br />
              <span className="text-white/50">Into transformation.</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Most church software tracks what happened. MinistryMotion tracks who's growing—and helps you accelerate their journey.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'AI Vocal Coaching',
                description: 'Professional-grade feedback for every singer. Real-time pitch analysis and personalized training paths.',
                gradient: 'from-blue-500/20 to-cyan-500/20',
                href: '/products/vocal-coaching',
              },
              {
                title: 'Intelligent Planning',
                description: "AI recommends songs that match your theme, fit your team's capabilities, and resonate with your congregation.",
                gradient: 'from-violet-500/20 to-purple-500/20',
                href: '/products/service-planning',
              },
              {
                title: 'Service Analytics',
                description: 'Upload your recordings. AI analyzes what actually happened—not just what you planned.',
                gradient: 'from-rose-500/20 to-orange-500/20',
                href: '/products/analytics',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  href={feature.href}
                  className="group block h-full p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                    <div className="w-6 h-6 rounded-md bg-white/20" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-white/90 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <span className="inline-flex items-center text-sm text-white/40 group-hover:text-white/60 transition-colors">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { value: '39%', label: 'of Christians lack discipleship', subtext: "We're changing that" },
              { value: '25', label: 'years of methodology', subtext: 'Built into the platform' },
              { value: '100+', label: 'churches waiting', subtext: 'Join the movement' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-5xl font-semibold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-white/40">{stat.subtext}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Vision Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-violet-600/5 rounded-full blur-[200px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-2xl sm:text-3xl font-medium leading-relaxed text-white/90 mb-8">
              "The church doesn't need another database. It needs a system that actually
              <span className="text-violet-400"> transforms people</span>."
            </blockquote>
            <p className="text-white/40">
              Built on methodology that has helped hundreds of churches grow
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
              Ready to transform
              <br />
              your ministry?
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Join the early access program and be among the first to experience
              ministry software built for transformation.
            </p>
            <button
              onClick={openBetaModal}
              className="group relative px-10 py-5 bg-white text-black font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]"
            >
              <span className="relative z-10 flex items-center gap-2 text-lg">
                Request Early Access
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
