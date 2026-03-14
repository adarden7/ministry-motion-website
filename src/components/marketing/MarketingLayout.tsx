'use client';

/**
 * Marketing Layout Wrapper
 * Provides consistent layout for marketing pages
 */

import { MarketingNav } from './MarketingNav';
import { MarketingFooter } from './MarketingFooter';
import { MarketingProvider, useMarketing } from '@/context/MarketingContext';
import { BetaSignupModal } from './BetaSignupModal';

function MarketingLayoutContent({ children }: { children: React.ReactNode }) {
  const { isBetaModalOpen, closeBetaModal } = useMarketing();
  
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <MarketingNav />
      <main className="min-h-screen">{children}</main>
      <MarketingFooter />
      <BetaSignupModal 
        isOpen={isBetaModalOpen} 
        onClose={closeBetaModal} 
        source="website_beta_signup"
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
