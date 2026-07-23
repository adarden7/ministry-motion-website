'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * Worship Collective join/beta modal state.
 *
 * Intentionally separate from MarketingContext — the Collective is a
 * standalone, community-branded surface and must not depend on
 * MinistryMotion marketing chrome or providers.
 */
interface CollectiveContextType {
  isJoinModalOpen: boolean;
  openJoinModal: () => void;
  closeJoinModal: () => void;
}

const CollectiveContext = createContext<CollectiveContextType | undefined>(undefined);

export function CollectiveProvider({ children }: { children: ReactNode }) {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const openJoinModal = () => setIsJoinModalOpen(true);
  const closeJoinModal = () => setIsJoinModalOpen(false);

  return (
    <CollectiveContext.Provider value={{ isJoinModalOpen, openJoinModal, closeJoinModal }}>
      {children}
    </CollectiveContext.Provider>
  );
}

export function useCollective() {
  const context = useContext(CollectiveContext);
  if (context === undefined) {
    throw new Error('useCollective must be used within a CollectiveProvider');
  }
  return context;
}
