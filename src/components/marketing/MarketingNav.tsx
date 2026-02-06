'use client';

import Link from 'next/link';
import { useMarketing } from '@/context/MarketingContext';

export function MarketingNav() {
  const { openBetaModal } = useMarketing();

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-lg font-semibold text-white">MinistryMotion</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/products"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              Features
            </Link>
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
