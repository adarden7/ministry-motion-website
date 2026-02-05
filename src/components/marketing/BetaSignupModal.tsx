'use client';

import { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { BetaSignupForm } from './BetaSignupForm';
import { LeadSource } from '@/lib/types/lead';

interface BetaSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: LeadSource;
}

export function BetaSignupModal({ isOpen, onClose, source = 'website_beta_signup' }: BetaSignupModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 px-6 py-8 text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Limited Beta Access</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Join the Beta</h2>
            <p className="text-blue-100">
              Be among the first to experience the future of worship ministry management.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="p-6">
          <BetaSignupForm
            source={source}
            onSuccess={() => {
              // Keep modal open to show success state
            }}
            onClose={onClose}
            showInterests={true}
          />
        </div>
      </div>
    </div>
  );
}

export default BetaSignupModal;
