import type { ReactNode } from 'react';
import Image from 'next/image';
import {
  BookOpen,
  FlaskConical,
  Cpu,
  Scale,
  Compass,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export interface KeyStat {
  value: string;
  label: string;
}

export interface ChartDatum {
  label: string;
  value: number;
  display?: string;
}

export interface ChartData {
  title: string;
  type: 'bar' | 'donut';
  data: ChartDatum[];
}

// Map article categories to a representative icon for the branded cover art.
const categoryIcon: Record<string, LucideIcon> = {
  Research: FlaskConical,
  Technology: Cpu,
  Comparison: Scale,
  Vision: Compass,
};

const chartPalette = ['#8b5cf6', '#d946ef', '#a78bfa', '#e879f9', '#7c3aed', '#c026d3'];

/**
 * Branded editorial cover banner (gradient mesh + category + large icon).
 * Renders a real photo instead when `coverImage` is provided.
 */
export function CoverHero({
  category,
  title,
  coverImage,
}: {
  category: string;
  title: string;
  coverImage?: string;
}) {
  if (coverImage) {
    return (
      <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden border border-white/10">
        <Image
          src={coverImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          priority
        />
      </div>
    );
  }

  const Icon = categoryIcon[category] ?? BookOpen;
  return (
    <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 bg-slate-900">
      {/* mesh gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-600/40 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-600/30 via-transparent to-transparent" />
      {/* faint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      {/* watermark icon */}
      <Icon aria-hidden className="absolute -right-6 -bottom-6 w-56 h-56 text-white/[0.06]" strokeWidth={1} />
      <div className="relative h-full flex flex-col justify-end p-8">
        <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-violet-200 text-xs font-medium mb-3">
          <Icon className="w-3.5 h-3.5" />
          {category}
        </span>
        <p className="text-white/80 text-lg font-medium max-w-xl leading-snug">{title}</p>
      </div>
    </div>
  );
}

/** "By the numbers" band — headline statistics as big-number cards. */
export function StatGrid({ stats }: { stats: KeyStat[] }) {
  if (!stats?.length) return null;
  return (
    <div className="not-prose my-2">
      <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-4">By the numbers</p>
      <div className={`grid gap-4 ${stats.length >= 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
        {stats.slice(0, 4).map((s, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border bg-muted/40 p-5 text-center"
          >
            <div className="text-4xl font-bold bg-gradient-to-br from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-muted-foreground leading-snug">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarChart({ chart }: { chart: ChartData }) {
  const max = Math.max(...chart.data.map((d) => d.value), 1);
  return (
    <div className="space-y-4">
      {chart.data.map((d, i) => (
        <div key={i}>
          <div className="flex items-center justify-between mb-1.5 text-sm">
            <span className="text-muted-foreground">{d.label}</span>
            <span className="font-semibold text-foreground">{d.display ?? d.value.toLocaleString()}</span>
          </div>
          <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${(d.value / max) * 100}%`,
                background: `linear-gradient(90deg, ${chartPalette[i % chartPalette.length]}, ${
                  chartPalette[(i + 1) % chartPalette.length]
                })`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function DonutChart({ chart }: { chart: ChartData }) {
  const total = chart.data.reduce((sum, d) => sum + d.value, 0) || 1;
  const segments = chart.data.map((d, i) => {
    const prior = chart.data.slice(0, i).reduce((sum, x) => sum + x.value, 0);
    const start = (prior / total) * 360;
    const end = ((prior + d.value) / total) * 360;
    return `${chartPalette[i % chartPalette.length]} ${start}deg ${end}deg`;
  });
  return (
    <div className="flex items-center gap-6 flex-wrap">
      <div
        className="relative w-36 h-36 rounded-full flex-shrink-0"
        style={{ background: `conic-gradient(${segments.join(', ')})` }}
      >
        <div className="absolute inset-[18%] rounded-full bg-background" />
      </div>
      <ul className="space-y-2 text-sm">
        {chart.data.map((d, i) => (
          <li key={i} className="flex items-center gap-2 text-muted-foreground">
            <span
              className="w-3 h-3 rounded-sm flex-shrink-0"
              style={{ background: chartPalette[i % chartPalette.length] }}
            />
            <span className="font-semibold text-foreground">{d.display ?? `${Math.round((d.value / total) * 100)}%`}</span>
            <span className="text-muted-foreground">{d.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Inline "Key insight" callout box. */
export function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="not-prose my-8 rounded-2xl border border-violet-500/30 bg-violet-500/[0.07] p-5 flex gap-4">
      <div className="w-9 h-9 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
        <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-300" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-300 mb-1">Key insight</p>
        <p className="text-foreground leading-relaxed">{children}</p>
      </div>
    </aside>
  );
}

/** Featured data visualization (CSS-only bar or donut). */
export function ChartFigure({ chart }: { chart: ChartData }) {
  if (!chart?.data?.length) return null;
  return (
    <figure className="not-prose my-10 rounded-2xl border border-border bg-muted/30 p-6">
      <figcaption className="text-sm font-semibold text-foreground mb-5">{chart.title}</figcaption>
      {chart.type === 'donut' ? <DonutChart chart={chart} /> : <BarChart chart={chart} />}
    </figure>
  );
}
