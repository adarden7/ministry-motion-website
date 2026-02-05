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
    <div className="min-h-screen bg-background">
      <MarketingNav />
      <main>{children}</main>
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
