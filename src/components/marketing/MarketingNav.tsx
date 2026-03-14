'use client';

import Link from 'next/link';
import { useMarketing } from '@/context/MarketingContext';

export function MarketingNav() {
  const { openBetaModal } = useMarketing();

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-lg font-semibold text-white">MinistryMotion</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <Link
                href="/products"
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 py-4 flex items-center gap-1"
              >
                Features
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-64 p-2 bg-[#12121a] border border-white/10 rounded-xl shadow-xl">
                  <Link
                    href="/products/agent-council"
                    className="block p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="text-sm font-medium text-white mb-0.5">The Agent Council</div>
                    <div className="text-xs text-white/50">15 autonomous AI agents</div>
                  </Link>
                  <Link
                    href="/products/discipleship"
                    className="block p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="text-sm font-medium text-white mb-0.5">Discipleship Intelligence</div>
                    <div className="text-xs text-white/50">Track the spiritual journey</div>
                  </Link>
                  <Link
                    href="/products/vocal-coaching"
                    className="block p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="text-sm font-medium text-white mb-0.5">Vocal Sandbox</div>
                    <div className="text-xs text-white/50">Real-time biometric tracking</div>
                  </Link>
                  <Link
                    href="/products/analytics"
                    className="block p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="text-sm font-medium text-white mb-0.5">Service Analytics</div>
                    <div className="text-xs text-white/50">Post-service insights & scoring</div>
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/pricing"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              Blog
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="https://app.ministrymotion.com/login"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
            >
              Sign In
            </a>
            <button
              onClick={openBetaModal}
              className="px-5 py-2.5 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors duration-200"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
