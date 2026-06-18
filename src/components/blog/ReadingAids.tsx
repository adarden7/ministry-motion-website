'use client';

import { useEffect, useState } from 'react';
import type { Heading } from './headings';

/** Thin gradient bar at the very top of the viewport showing scroll progress. */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/** Sticky Table of Contents with scroll-spy highlighting of the active section. */
export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? '');

  useEffect(() => {
    if (headings.length === 0) return;
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">On this page</p>
      <ul className="space-y-2 border-l border-white/10">
        {headings.map((h) => {
          const active = h.id === activeId;
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block border-l-2 -ml-px py-0.5 transition-colors ${
                  h.level === 3 ? 'pl-7' : 'pl-4'
                } ${
                  active
                    ? 'border-violet-500 text-violet-300 font-medium'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
