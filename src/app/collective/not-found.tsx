import Link from 'next/link';
import { Compass } from 'lucide-react';

/**
 * WC-branded 404. Rendered inside the Collective layout (WC nav + footer), so
 * unmatched paths on the worshipcollective.ai host stay fully WC-branded and
 * never show MinistryMotion chrome.
 */
export default function CollectiveNotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-500/15 blur-[120px] rounded-full" />
      </div>
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8">
          <Compass className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium text-violet-300">Page not found</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">404</span>
        </h1>
        <p className="text-lg text-white/70 mb-8">
          We couldn&apos;t find that page. Let&apos;s get you back to the community.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-semibold rounded-full transition-all"
          >
            Back to Worship Collective
          </Link>
          <Link
            href="/how-it-works"
            className="px-6 py-3 border border-violet-500/30 text-white font-semibold rounded-full hover:bg-violet-500/10 transition-all"
          >
            How it works
          </Link>
        </div>
      </div>
    </section>
  );
}
