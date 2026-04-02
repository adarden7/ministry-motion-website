'use client';

/**
 * BetaBadge
 *
 * Displays a "Beta" indicator with a subtle pulsing border animation.
 * Two variants:
 *   - "inline"  — sits next to a heading or label inline
 *   - "overlay" — absolutely positioned over a card/section corner
 *
 * Design system compliance: uses only semantic tokens (bg-primary/10,
 * text-primary, border-primary/30).  No hex codes.
 */

import React from 'react';
import { cn } from '@/lib/utils';

export interface BetaBadgeProps {
  /** Optional feature name displayed alongside "Beta" */
  feature?: string;
  /**
   * "inline" — rendered in the normal document flow (default)
   * "overlay" — absolutely positioned at the top-right corner of the nearest
   *             relative-positioned ancestor
   */
  variant?: 'inline' | 'overlay';
  className?: string;
}

/**
 * BetaBadge
 *
 * @example
 * // Inline next to a heading
 * <h2 className="flex items-center gap-2">
 *   Vocal Studio <BetaBadge />
 * </h2>
 *
 * @example
 * // Overlaid on a card
 * <div className="relative">
 *   <Card>...</Card>
 *   <BetaBadge variant="overlay" feature="AI Analysis" />
 * </div>
 */
export function BetaBadge({ feature, variant = 'inline', className }: BetaBadgeProps) {
  const label = feature ? `${feature} Beta` : 'Beta';

  const base =
    'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ' +
    'bg-primary/10 text-primary border-primary/30 ' +
    'animate-[pulse-border_2s_ease-in-out_infinite]';

  const overlayClasses =
    variant === 'overlay'
      ? 'absolute top-2 right-2 z-10 shadow-sm'
      : '';

  return (
    <>
      {/*
       * Inject the keyframe animation once.
       * Using a style tag is preferable to a global CSS file because this
       * component may be used in isolation or inside stories.
       */}
      <style>{`
        @keyframes pulse-border {
          0%, 100% { box-shadow: 0 0 0 0 hsl(var(--primary) / 0.25); }
          50%       { box-shadow: 0 0 0 3px hsl(var(--primary) / 0); }
        }
      `}</style>
      <span
        role="status"
        aria-label={label}
        className={cn(base, overlayClasses, className)}
      >
        <span
          className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse"
          aria-hidden="true"
        />
        {label}
      </span>
    </>
  );
}

export default BetaBadge;
