'use client';

import { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { BetaSignupForm } from './BetaSignupForm';

interface BetaSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
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
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal — compact but full content */}
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Compact header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <div>
              <h2 className="text-base font-bold text-white leading-tight">Join the Beta</h2>
              <p className="text-xs text-slate-400">Limited early access — no credit card required</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form — scrollable */}
        <div className="p-5 overflow-y-auto">
          <BetaSignupForm
            source={source}
            onSuccess={() => {}}
            onClose={onClose}
            showInterests={true}
            compact={true}
          />
        </div>
      </div>
    </div>
  );
}

export default BetaSignupModal;
