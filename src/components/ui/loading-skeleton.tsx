'use client';

import { cn } from '@/lib/utils';

/**
 * Shimmer loading skeleton for placeholder content.
 * Uses CSS animation for the shimmer effect.
 */

interface SkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export function Skeleton({ className, children }: SkeletonProps) {
  return (
    <div className={cn('animate-pulse rounded-md bg-muted', className)}>
      {children}
    </div>
  );
}

/**
 * Card skeleton with header, description, and content area.
 */
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-lg border bg-card p-6 space-y-4', className)}>
      <div className="space-y-2">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-3/5" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-3/5" />
      </div>
    </div>
  );
}

/**
 * Metric card skeleton with icon placeholder and value.
 */
export function MetricSkeleton() {
  return (
    <div className="rounded-lg border bg-card p-5 space-y-3">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-5 w-16" />
      </div>
      <Skeleton className="h-8 w-1/3" />
      <Skeleton className="h-3 w-2/3" />
    </div>
  );
}

/**
 * Table row skeleton for data tables.
 */
export function TableRowSkeleton({ columns = 5 }: { columns?: number }) {
  return (
    <div className="flex items-center gap-4 py-3 px-2 border-b last:border-0">
      {Array.from({ length: columns }).map((_, i) => (
        <Skeleton key={i} className={cn('h-4', i === 0 ? 'w-8' : i === 1 ? 'w-32' : 'w-20')} />
      ))}
    </div>
  );
}

/**
 * Full page loading skeleton with grid of cards.
 */
export function DashboardSkeleton() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-1/4" />
        <Skeleton className="h-4 w-2/5" />
      </div>
      
      {/* Metric cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <MetricSkeleton key={i} />
        ))}
      </div>

      {/* Content cards */}
      <div className="grid lg:grid-cols-2 gap-6">
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}

/**
 * Assessment page skeleton (blend, vocal, etc.)
 */
export function AssessmentSkeleton() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Setup card */}
        <div className="rounded-lg border bg-card p-6 space-y-4">
          <Skeleton className="h-6 w-1/3" />
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-20 rounded-lg" />
            ))}
          </div>
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}

/**
 * Empty state component for pages with no data.
 */
export function EmptyState({ 
  icon: Icon, 
  title, 
  description, 
  action 
}: { 
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-md mb-6">{description}</p>
      {action}
    </div>
  );
}
