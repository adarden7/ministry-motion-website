'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Loader2 } from 'lucide-react';
import { signInAsDemo } from '@/lib/demo-auth';

interface TryDemoButtonProps {
  /** Button size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Optional className override */
  className?: string;
  /** Redirect path after demo login (default: /dashboard) */
  redirectTo?: string;
}

/**
 * "Try the Demo" CTA button — signs in as anonymous demo user
 * and redirects to the dashboard with pre-seeded church data.
 * 
 * Auto-seeds demo data on first click if the demo church doesn't exist.
 */
export function TryDemoButton({ 
  size = 'lg', 
  className = '',
  redirectTo = '/dashboard'
}: TryDemoButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleTryDemo = async () => {
    setLoading(true);
    setError(null);

    try {
      await signInAsDemo();
      router.push(redirectTo);
    } catch (err) {
      console.error('Demo login failed:', err);
      setError('Unable to start demo. Please try again.');
      setLoading(false);
    }
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5 font-semibold',
  };

  return (
    <div className="inline-flex flex-col items-center">
      <button
        onClick={handleTryDemo}
        disabled={loading}
        className={`
          inline-flex items-center justify-center
          ${sizeClasses[size]}
          rounded-xl
          bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600
          text-white
          shadow-lg shadow-violet-500/25
          hover:shadow-xl hover:shadow-violet-500/30
          hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500
          active:from-violet-700 active:via-purple-700 active:to-indigo-700
          transition-all duration-300
          disabled:opacity-60 disabled:cursor-not-allowed
          ${className}
        `}
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Setting up your demo...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            Try the Demo
          </>
        )}
      </button>
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
      <p className="mt-2 text-xs text-muted-foreground">
        No sign-up required · Explore with sample data
      </p>
    </div>
  );
}
