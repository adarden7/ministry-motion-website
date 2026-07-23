'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CollectiveWordmark } from './CollectiveWordmark';
import { useCollective } from './CollectiveContext';

/**
 * Standalone Worship Collective navigation.
 *
 * This is deliberately NOT MinistryMotion's MarketingNav — the Collective is a
 * self-contained community brand. Links are root-relative so they resolve on
 * the worshipcollective.ai host (where `/` maps to the Collective landing).
 */
const NAV_LINKS = [
  { href: '/', label: 'Community' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/membership', label: 'Membership' },
  { href: '/certifications', label: 'Certifications' },
];

export function CollectiveNav() {
  const { openJoinModal } = useCollective();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close the mobile menu on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-violet-500/10 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <CollectiveWordmark className="mr-8" />

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <button
            onClick={openJoinModal}
            className="hidden md:inline-flex px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold hover:from-violet-700 hover:to-fuchsia-700 transition-all hover:shadow-lg hover:shadow-violet-500/30"
          >
            Join the Community
          </button>

          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-1 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden /> : <Menu className="w-6 h-6" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-violet-500/10 bg-slate-950/95 backdrop-blur-md px-6 py-6 flex flex-col gap-5 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-medium hover:text-violet-300"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openJoinModal();
            }}
            className="mt-2 w-full py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold"
          >
            Join the Community
          </button>
        </div>
      )}
    </header>
  );
}
