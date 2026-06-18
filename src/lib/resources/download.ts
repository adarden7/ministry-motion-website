/**
 * Client-side download + print helpers for resources.
 * No dependencies — uses Blob + a transient window. Call only in the browser.
 */

import type { ChecklistGroup, TemplateColumn } from './types';

/** RFC-4180-ish CSV cell escaping. */
function csvCell(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export function rowsToCsv(rows: string[][]): string {
  return rows.map((row) => row.map(csvCell).join(',')).join('\r\n');
}

/** Trigger a browser download of text content. */
export function downloadText(filename: string, content: string, mime = 'text/csv;charset=utf-8') {
  const blob = new Blob(['﻿' + content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/** Build a CSV from a structured checklist (Section, Item, Done columns). */
export function checklistToCsv(groups: ChecklistGroup[]): string {
  const rows: string[][] = [['Section', 'Item', 'Done']];
  for (const group of groups) {
    for (const item of group.items) {
      rows.push([group.title, item, '']);
    }
  }
  return rowsToCsv(rows);
}

/** Build a CSV template: header row + one example row + a few blank rows to fill in. */
export function templateToCsv(columns: TemplateColumn[], blankRows = 8): string {
  const rows: string[][] = [columns.map((c) => c.header)];
  rows.push(columns.map((c) => c.example ?? ''));
  for (let i = 0; i < blankRows; i++) {
    rows.push(columns.map(() => ''));
  }
  return rowsToCsv(rows);
}

/**
 * Open a clean, print-ready window containing only the given HTML and trigger
 * the browser's print dialog (which offers "Save as PDF"). This sidesteps the
 * marketing nav/footer so the exported PDF is a clean document.
 */
export function printHtml(title: string, bodyHtml: string) {
  const win = window.open('', '_blank', 'width=900,height=1000');
  if (!win) return;
  win.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>
<style>
  @page { margin: 22mm 18mm; }
  * { box-sizing: border-box; }
  body { font-family: Georgia, 'Times New Roman', serif; color: #1a1a2e; line-height: 1.6; max-width: 720px; margin: 0 auto; padding: 24px; }
  .doc-brand { font-family: -apple-system, Segoe UI, Roboto, sans-serif; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: #6d28d9; margin-bottom: 6px; }
  h1 { font-size: 30px; line-height: 1.2; margin: 0 0 8px; }
  .doc-sub { font-family: -apple-system, Segoe UI, Roboto, sans-serif; color: #555; font-size: 15px; margin: 0 0 4px; }
  .doc-meta { font-family: -apple-system, Segoe UI, Roboto, sans-serif; color: #888; font-size: 12px; margin: 0 0 28px; border-bottom: 1px solid #e5e5e5; padding-bottom: 16px; }
  h2 { font-size: 22px; margin: 34px 0 12px; border-bottom: 1px solid #eee; padding-bottom: 6px; page-break-after: avoid; }
  h3 { font-size: 17px; margin: 24px 0 8px; page-break-after: avoid; }
  p, li { font-size: 14.5px; }
  ul, ol { padding-left: 22px; }
  li { margin: 5px 0; }
  table { border-collapse: collapse; width: 100%; margin: 16px 0; font-size: 13px; font-family: -apple-system, Segoe UI, Roboto, sans-serif; }
  th, td { border: 1px solid #ddd; padding: 7px 10px; text-align: left; vertical-align: top; }
  th { background: #f5f3ff; }
  strong { color: #111; }
  .doc-footer { margin-top: 40px; padding-top: 14px; border-top: 1px solid #e5e5e5; font-family: -apple-system, Segoe UI, Roboto, sans-serif; font-size: 11px; color: #999; }
  blockquote { border-left: 3px solid #6d28d9; margin: 16px 0; padding: 4px 16px; color: #444; font-style: italic; }
</style></head><body>${bodyHtml}
<div class="doc-footer">© 2026 Ministry Motion · ministrymotion.app · This document was generated from ministrymotion resources.</div>
</body></html>`);
  win.document.close();
  win.focus();
  // Give the new document a tick to lay out before printing.
  setTimeout(() => win.print(), 250);
}
