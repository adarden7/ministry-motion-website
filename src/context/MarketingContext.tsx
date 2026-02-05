'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MarketingContextType {
  isBetaModalOpen: boolean;
  openBetaModal: () => void;
  closeBetaModal: () => void;
}

const MarketingContext = createContext<MarketingContextType | undefined>(undefined);

export function MarketingProvider({ children }: { children: ReactNode }) {
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);

  const openBetaModal = () => setIsBetaModalOpen(true);
  const closeBetaModal = () => setIsBetaModalOpen(false);

  return (
    <MarketingContext.Provider value={{ isBetaModalOpen, openBetaModal, closeBetaModal }}>
      {children}
    </MarketingContext.Provider>
  );
}

export function useMarketing() {
  const context = useContext(MarketingContext);
  if (context === undefined) {
    throw new Error('useMarketing must be used within a MarketingProvider');
  }
  return context;
}
