/**
 * Resource Content Types
 *
 * Shared shape for downloadable / readable resources (guides + checklists)
 * rendered at /resources/[slug]. Interactive tools (ROI calculator, readiness
 * assessment) are standalone routes and do NOT use this shape.
 *
 * Content modules live in `src/lib/resources/content/*.ts` — one export per
 * resource — and are aggregated in `src/lib/resources/index.ts`.
 */

export type ResourceKind = 'Guide' | 'Checklist' | 'Tool' | 'Webinar';

/** String key mapped to a lucide icon in the registry (keeps content files icon-import-free). */
export type ResourceIconKey =
  | 'mic'
  | 'book'
  | 'users'
  | 'chart'
  | 'calculator'
  | 'refresh'
  | 'file'
  | 'video'
  | 'clipboard';

/** A structured checklist group — also used to generate downloadable CSV templates. */
export interface ChecklistGroup {
  title: string;
  /** Each item becomes one row in the printable checklist and CSV export. */
  items: string[];
}

/** A column definition for a downloadable spreadsheet/CSV template. */
export interface TemplateColumn {
  header: string;
  /** Optional example value shown in the first sample row. */
  example?: string;
}

export interface ResourceContent {
  /** URL slug under /resources/[slug]. */
  slug: string;
  kind: ResourceKind;
  iconKey: ResourceIconKey;
  /** H1 / card title. */
  title: string;
  /** One-line hero subtitle. */
  subtitle: string;
  /** Card + meta description (mirrors the resources index card). */
  description: string;
  /** e.g. "Worship Directors, Praise Leaders". */
  audience: string;
  /** e.g. "32 pages" or "47 items". */
  extent: string;
  /** Estimated read time, e.g. "15 min read". */
  readTime: string;
  /** Human date last updated, e.g. "June 2026". */
  updated: string;
  /**
   * Long-form body in Markdown. Rendered with react-markdown + prose styles,
   * and reused verbatim for the print-to-PDF view.
   */
  body: string;
  /** Optional structured checklist (checklists only) — drives the CSV export. */
  checklist?: ChecklistGroup[];
  /** Optional spreadsheet template (templates only) — drives the CSV export. */
  template?: TemplateColumn[];
}
