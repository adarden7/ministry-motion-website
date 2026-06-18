'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Printer,
  Clock,
  Users,
  FileText,
  CalendarDays,
  Check,
  Mic2,
  BookOpen,
  BarChart3,
  Calculator,
  RefreshCw,
  Video,
  ClipboardList,
  type LucideIcon,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getResourceBySlug, type ResourceContent, type ResourceIconKey } from '@/lib/resources';
import { checklistToCsv, templateToCsv, downloadText, printHtml } from '@/lib/resources/download';
import { useMarketing } from '@/context/MarketingContext';

const iconMap: Record<ResourceIconKey, LucideIcon> = {
  mic: Mic2,
  book: BookOpen,
  users: Users,
  chart: BarChart3,
  calculator: Calculator,
  refresh: RefreshCw,
  file: FileText,
  video: Video,
  clipboard: ClipboardList,
};

const proseClasses = `prose prose-invert prose-lg max-w-none
  prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
  prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3
  prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
  prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-6
  prose-a:text-violet-400 prose-a:no-underline hover:prose-a:text-violet-300
  prose-strong:text-white prose-strong:font-semibold
  prose-ul:text-white/70 prose-ol:text-white/70 prose-ul:mb-6 prose-ol:mb-6
  prose-li:marker:text-violet-400 prose-li:my-1.5
  prose-blockquote:border-violet-500 prose-blockquote:bg-white/[0.02] prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:text-white/80 prose-blockquote:not-italic
  prose-table:text-white/70 prose-th:text-white prose-th:bg-white/[0.04] prose-th:border-white/10 prose-td:border-white/10 prose-table:text-sm
  prose-hr:border-white/10 prose-hr:my-10`;

function InteractiveChecklist({ resource }: { resource: ResourceContent }) {
  const groups = useMemo(() => resource.checklist ?? [], [resource.checklist]);
  const total = useMemo(() => groups.reduce((n, g) => n + g.items.length, 0), [groups]);
  const [done, setDone] = useState<Record<string, boolean>>({});
  const completed = Object.values(done).filter(Boolean).length;

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Checklist ({total} items)</h2>
        <span className="text-sm text-white/50">
          {completed} / {total} complete
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10 mb-8 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all"
          style={{ width: `${total ? (completed / total) * 100 : 0}%` }}
        />
      </div>
      <div className="space-y-8">
        {groups.map((group, gi) => (
          <div key={gi}>
            <h3 className="text-lg font-semibold text-white mb-3">{group.title}</h3>
            <ul className="space-y-2">
              {group.items.map((item, ii) => {
                const key = `${gi}-${ii}`;
                const checked = !!done[key];
                return (
                  <li key={key}>
                    <button
                      onClick={() => setDone((d) => ({ ...d, [key]: !d[key] }))}
                      className="flex items-start gap-3 text-left w-full group"
                    >
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-colors ${
                          checked
                            ? 'bg-violet-600 border-violet-600'
                            : 'border-white/30 group-hover:border-violet-400'
                        }`}
                      >
                        {checked && <Check className="w-3.5 h-3.5 text-white" />}
                      </span>
                      <span className={`text-sm leading-relaxed ${checked ? 'text-white/40 line-through' : 'text-white/75'}`}>
                        {item}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function TemplatePreview({ resource }: { resource: ResourceContent }) {
  const cols = resource.template ?? [];
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-6">Template Columns</h2>
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-white/[0.04]">
              <th className="text-left text-white font-semibold px-4 py-3 border-b border-white/10">Column</th>
              <th className="text-left text-white font-semibold px-4 py-3 border-b border-white/10">Example</th>
            </tr>
          </thead>
          <tbody>
            {cols.map((c, i) => (
              <tr key={i} className="border-b border-white/5 last:border-0">
                <td className="px-4 py-3 text-white/80 font-medium">{c.header}</td>
                <td className="px-4 py-3 text-white/50">{c.example ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ResourceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const resource = useMemo(() => getResourceBySlug(slug) ?? null, [slug]);
  const articleRef = useRef<HTMLDivElement>(null);
  const { openBetaModal } = useMarketing();

  if (resource === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-4">Resource not found</h1>
          <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[resource.iconKey] ?? FileText;
  const hasChecklist = !!resource.checklist?.length;
  const hasTemplate = !!resource.template?.length;

  const handlePrint = () => {
    const html = articleRef.current?.innerHTML ?? '';
    const header = `<div class="doc-brand">Ministry Motion · ${resource.kind}</div><h1>${resource.title}</h1><p class="doc-sub">${resource.subtitle}</p><p class="doc-meta">${[resource.audience, resource.extent, resource.updated].filter(Boolean).join(' · ')}</p>`;
    printHtml(resource.title, header + html);
  };

  const handleCsvDownload = () => {
    if (hasChecklist) {
      downloadText(`${resource.slug}.csv`, checklistToCsv(resource.checklist!));
    } else if (hasTemplate) {
      downloadText(`${resource.slug}.csv`, templateToCsv(resource.template!));
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/15 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            All Resources
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-violet-400" />
            </div>
            <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-violet-500/15 text-violet-300">
              {resource.kind}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white leading-tight">
            {resource.title}
          </h1>
          <p className="text-lg text-slate-300 mb-6">{resource.subtitle}</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400 mb-8">
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" /> {resource.audience}
            </span>
            <span className="flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> {resource.extent}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {resource.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4" /> Updated {resource.updated}
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-medium rounded-lg hover:from-violet-700 hover:to-fuchsia-700 transition-all"
            >
              <Printer className="w-4 h-4" /> Download PDF
            </button>
            {(hasChecklist || hasTemplate) && (
              <button
                onClick={handleCsvDownload}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                <Download className="w-4 h-4" />
                {hasChecklist ? 'Download Checklist (CSV)' : 'Download Template (CSV)'}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={articleRef} className={proseClasses}>
            <ReactMarkdown>{resource.body}</ReactMarkdown>
          </div>

          {hasChecklist && <InteractiveChecklist resource={resource} />}
          {hasTemplate && <TemplatePreview resource={resource} />}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to put this into practice?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Join the beta to get hands-on with Ministry Motion and every resource as it launches.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBetaModal}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-fuchsia-700 transition-all"
            >
              Join Beta Program
            </button>
            <Link
              href="/resources"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              More Resources <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
