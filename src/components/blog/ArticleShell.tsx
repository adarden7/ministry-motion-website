import type { ReactNode } from 'react';
import { TableOfContents } from './ReadingAids';
import type { Heading } from './headings';

/**
 * Shared three-column reading layout used by both blog articles and resource
 * guides so the side panes stay consistent: a sticky "On this page" table of
 * contents on the left, the article in the center, and a related-content /
 * CTA rail on the right. Both rails collapse on narrow screens.
 */
export function ArticleShell({
  headings,
  children,
  rail,
}: {
  headings: Heading[];
  children: ReactNode;
  rail?: ReactNode;
}) {
  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[200px_minmax(0,720px)_240px] lg:gap-10 lg:justify-center">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents headings={headings} />
            </div>
          </aside>

          <div className="min-w-0">{children}</div>

          <aside className="hidden lg:block">
            {rail && <div className="sticky top-24 space-y-5">{rail}</div>}
          </aside>
        </div>
      </div>
    </section>
  );
}

/** A titled card used inside the right rail (related items, CTA, etc.). */
export function RailCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{title}</p>
      {children}
    </div>
  );
}
