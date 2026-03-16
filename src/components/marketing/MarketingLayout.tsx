'use client';

/**
 * Marketing Layout Wrapper
 * Provides consistent layout for marketing pages
 */

import { MarketingNav } from './MarketingNav';
import { MarketingProvider, useMarketing } from '@/context/MarketingContext';
import { BetaSignupModal } from './BetaSignupModal';

function MarketingLayoutContent({ children }: { children: React.ReactNode }) {
  const { isBetaModalOpen, closeBetaModal } = useMarketing();
  
  return (
    <div className="dark min-h-screen bg-slate-950 text-white">
      <MarketingNav />
      <main>{children}</main>
      <BetaSignupModal 
        isOpen={isBetaModalOpen} 
        onClose={closeBetaModal} 
        source="marketing_layout"
      />
    </div>
  );
}

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <MarketingProvider>
      <MarketingLayoutContent>{children}</MarketingLayoutContent>
    </MarketingProvider>
  );
}
