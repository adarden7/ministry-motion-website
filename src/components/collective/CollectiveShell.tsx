'use client';

import { CollectiveProvider, useCollective } from './CollectiveContext';
import { CollectiveNav } from './CollectiveNav';
import { CollectiveFooter } from './CollectiveFooter';
import { BetaSignupModal } from '@/components/marketing/BetaSignupModal';

/**
 * Standalone chrome for every Worship Collective page: WC nav, WC footer, and a
 * shared join/beta modal. Wraps all `/collective/*` routes so the surface is
 * self-contained and never inherits MinistryMotion marketing chrome.
 *
 * The BetaSignupModal is a shared primitive (reused as-is); its `source` is
 * tagged `collective_page` so Collective leads are attributable.
 */
function CollectiveShellContent({ children }: { children: React.ReactNode }) {
  const { isJoinModalOpen, closeJoinModal } = useCollective();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white antialiased">
      <CollectiveNav />
      <main>{children}</main>
      <CollectiveFooter />
      <BetaSignupModal isOpen={isJoinModalOpen} onClose={closeJoinModal} source="collective_page" />
    </div>
  );
}

export function CollectiveShell({ children }: { children: React.ReactNode }) {
  return (
    <CollectiveProvider>
      <CollectiveShellContent>{children}</CollectiveShellContent>
    </CollectiveProvider>
  );
}
