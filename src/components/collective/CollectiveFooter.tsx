'use client';

import Link from 'next/link';
import { CollectiveWordmark } from './CollectiveWordmark';

/**
 * Standalone Worship Collective footer.
 *
 * Worship Collective is the primary brand. Per product decision, MinistryMotion
 * is acknowledged as the underlying engine via a single visible "Powered by
 * MinistryMotion" link — not white-labeled, not front-and-center.
 */
export function CollectiveFooter() {
  return (
    <footer className="py-12 border-t border-violet-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <CollectiveWordmark />
            <p className="text-xs text-white/40">A community for worship leaders.</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Community</Link>
            <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
            <Link href="/membership" className="hover:text-white transition-colors">Membership</Link>
            <Link href="/certifications" className="hover:text-white transition-colors">Certifications</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-violet-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <span>© 2026 Worship Collective. All rights reserved.</span>
          <a
            href="https://www.ministrymotion.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-violet-300 transition-colors"
          >
            Powered by MinistryMotion
          </a>
        </div>
      </div>
    </footer>
  );
}
