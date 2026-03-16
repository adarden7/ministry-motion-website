/**
 * normalize_theme.js
 * Enforces the Solutions-page design language across every marketing page.
 * 
 * GOLD STANDARD (from solutions/worship-directors/page.tsx):
 *  - Hero BG:      bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
 *  - Accent glow:  from-emerald-500/15 (top-left radial)
 *  - Grid overlay: rgba(255,255,255,0.02) lines, 64px
 *  - Orb 1:        bg-emerald-500/10
 *  - Orb 2:        bg-blue-500/10
 *  - Gradient text:from-emerald-400 via-teal-400 to-cyan-400
 *  - CTA primary:  from-emerald-500 to-teal-500 / hover: emerald-600→teal-600
 *  - CTA secondary:bg-white/10 border-white/20 text-white
 *  - Alternating sections: bg-background / bg-slate-900
 *  - Border:       border-slate-800
 *  - Muted text:   text-slate-300 / text-slate-400
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all marketing page files
const files = glob.sync('src/app/(marketing)/**/*.tsx', { cwd: __dirname });

console.log(`Found ${files.length} files to normalize.\n`);

function normalize(content) {
  let c = content;

  // ── PAGE WRAPPERS ─────────────────────────────────────────────────────────
  // White/light page wrappers → dark
  c = c.replace(
    /className="min-h-screen bg-white[^"]*antialiased"/g,
    'className="min-h-screen bg-background text-foreground antialiased"'
  );
  c = c.replace(
    /className="min-h-screen bg-\[#0a0a0f\][^"]*antialiased"/g,
    'className="min-h-screen bg-background text-foreground antialiased"'
  );
  // bg-white dark:bg-slate-900 pattern
  c = c.replace(
    /bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100/g,
    'bg-background text-foreground'
  );

  // ── SECTION BACKGROUNDS ───────────────────────────────────────────────────
  // Any explicit white section
  c = c.replace(/\bpy-(\d+) bg-white\b/g, 'py-$1 bg-background');
  c = c.replace(/\bpb-(\d+) bg-white\b/g, 'pb-$1 bg-background');
  // Light gray section
  c = c.replace(/\bpy-(\d+) bg-slate-50\b/g, 'py-$1 bg-slate-900');
  c = c.replace(/\bpb-(\d+) bg-slate-50\b/g, 'pb-$1 bg-slate-900');
  // Light indigo hero pattern
  c = c.replace(
    /bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900/g,
    'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
  );
  // Light hero gradients
  c = c.replace(
    /bg-gradient-to-br from-blue-50\/50 via-white to-cyan-50\/30/g,
    'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
  );
  c = c.replace(
    /bg-gradient-to-b from-white via-slate-50\/30 to-white/g,
    'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
  );
  // Amber/orange section
  c = c.replace(
    /bg-gradient-to-r from-amber-50 to-orange-50 border-y border-amber-200/g,
    'bg-slate-900 border-y border-slate-800'
  );
  // light violet/indigo section
  c = c.replace(
    /bg-gradient-to-br from-violet-50\/30 via-slate-50 to-indigo-50\/20/g,
    'bg-slate-900'
  );
  c = c.replace(
    /bg-gradient-to-br from-white via-blue-50\/20 to-white/g,
    'bg-background'
  );
  c = c.replace(
    /bg-gradient-to-br from-white via-cyan-50\/20 to-emerald-50\/10/g,
    'bg-slate-900'
  );
  c = c.replace(
    /bg-gradient-to-br from-amber-50\/30 via-slate-50 to-orange-50\/20/g,
    'bg-background'
  );
  c = c.replace(
    /bg-gradient-to-br from-white via-blue-50\/20 to-slate-50/g,
    'bg-slate-900'
  );

  // ── GRADIENT TEXT ─────────────────────────────────────────────────────────
  // Blue/cyan gradient text → emerald/teal/cyan
  c = c.replace(
    /from-blue-400 via-cyan-400 to-teal-400/g,
    'from-emerald-400 via-teal-400 to-cyan-400'
  );
  c = c.replace(
    /from-cyan-400 via-teal-400 to-emerald-400/g,
    'from-emerald-400 via-teal-400 to-cyan-400'
  );
  // Violet/purple gradient text in hero
  c = c.replace(
    /from-violet-400 via-purple-400 to-pink-400/g,
    'from-emerald-400 via-teal-400 to-cyan-400'
  );

  // ── CTA BUTTONS ───────────────────────────────────────────────────────────
  // Primary: blue → emerald
  c = c.replace(
    /from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600/g,
    'from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600'
  );
  c = c.replace(
    /bg-gradient-to-r from-blue-500 to-cyan-500 text-white/g,
    'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
  );
  // shadow-blue-500/25 → shadow-emerald-500/25
  c = c.replace(/shadow-blue-500\/25/g, 'shadow-emerald-500/25');
  // bg-blue-600 CTA buttons → bg-emerald-500
  c = c.replace(
    /bg-blue-600 text-white hover:bg-blue-700/g,
    'bg-emerald-500 text-white hover:bg-emerald-600'
  );
  // Inline bg-blue-600
  c = c.replace(
    /'bg-blue-600 text-white hover:bg-blue-700'/g,
    "'bg-emerald-500 text-white hover:bg-emerald-600'"
  );
  // Secondary: bg-background text-blue-700 → bg-white/10 text-white
  c = c.replace(
    /bg-background text-blue-700 font-semibold rounded-lg hover:bg-blue-50/g,
    'bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20'
  );
  // Slate button → consistent
  c = c.replace(
    /bg-slate-100 text-slate-700 hover:bg-slate-200/g,
    'bg-slate-700 text-slate-200 hover:bg-slate-600'
  );

  // ── ORBS / RADIAL GLOWS ───────────────────────────────────────────────────
  // Blue orbs in hero → use emerald + blue pair
  c = c.replace(
    /bg-blue-500\/20 rounded-full blur-3xl" \/>\s*<div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500\/15 rounded-full blur-3xl"/g,
    'bg-emerald-500/10 rounded-full blur-3xl" />\n        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"'
  );
  // radial gradient accent
  c = c.replace(
    /from-blue-500\/10 via-transparent/g,
    'from-emerald-500/15 via-transparent'
  );
  c = c.replace(
    /from-violet-500\/10 via-transparent/g,
    'from-emerald-500/15 via-transparent'
  );
  c = c.replace(
    /from-blue-900\/20/g,
    'from-emerald-500/15'
  );

  // ── TEXT COLORS ───────────────────────────────────────────────────────────
  // Inline headings: text-slate-900 → text-white
  c = c.replace(/\btext-slate-900\b/g, 'text-foreground');
  // Light blue label text
  c = c.replace(
    /text-sm font-semibold text-blue-600 uppercase tracking-wider/g,
    'text-sm font-semibold text-emerald-400 uppercase tracking-wider'
  );
  // p/body text on dark bg
  c = c.replace(/\btext-slate-700\b/g, 'text-slate-300');
  c = c.replace(/\btext-slate-600\b/g, 'text-slate-400');
  // Keep blue-600 for links but convert standalone stat accent text
  c = c.replace(
    /text-5xl font-bold text-blue-600 mb-2/g,
    'text-5xl font-bold text-emerald-400 mb-2'
  );
  // Check icons
  c = c.replace(/text-emerald-600\b/g, 'text-emerald-400');

  // ── BORDERS ───────────────────────────────────────────────────────────────
  c = c.replace(/\bborder-slate-200\b/g, 'border-slate-800');
  c = c.replace(/\bborder-slate-100\b/g, 'border-slate-800');
  c = c.replace(/\bdivide-slate-200\b/g, 'divide-slate-800');

  // ── CARD BACKGROUNDS ─────────────────────────────────────────────────────
  // Light cards on bg
  c = c.replace(/bg-white rounded-2xl border border-slate-800/g, 'bg-slate-800 rounded-2xl border border-slate-700');
  c = c.replace(/bg-white rounded-xl border border-slate-800/g, 'bg-slate-800 rounded-xl border border-slate-700');
  c = c.replace(/bg-white rounded-2xl border border-slate-200/g, 'bg-slate-800 rounded-2xl border border-slate-700');
  c = c.replace(/bg-white rounded-xl border border-slate-200/g, 'bg-slate-800 rounded-xl border border-slate-700');
  // Amber/orange/rose/blue light tinted cards
  c = c.replace(/bg-amber-50 border border-amber-200/g, 'bg-amber-900\/20 border border-amber-700\/30');
  c = c.replace(/bg-blue-50 border border-blue-200/g, 'bg-blue-900\/20 border border-blue-700\/30');
  c = c.replace(/bg-emerald-50 border border-emerald-200/g, 'bg-emerald-900\/20 border border-emerald-700\/30');
  c = c.replace(/bg-rose-50 border border-rose-200/g, 'bg-rose-900\/20 border border-rose-700\/30');
  // Icon circle backgrounds
  c = c.replace(/bg-blue-100"/g, 'bg-blue-500/20"');
  c = c.replace(/bg-emerald-100"/g, 'bg-emerald-500/20"');
  c = c.replace(/bg-amber-100"/g, 'bg-amber-500/20"');
  c = c.replace(/bg-rose-100"/g, 'bg-rose-500/20"');
  c = c.replace(/bg-violet-100"/g, 'bg-violet-500/20"');
  c = c.replace(/bg-cyan-100"/g, 'bg-cyan-500/20"');

  // ── BADGE BACKGROUNDS ────────────────────────────────────────────────────
  c = c.replace(/bg-amber-100 text-amber-700/g, 'bg-amber-500/20 text-amber-300');
  c = c.replace(/bg-blue-100 text-blue-700/g, 'bg-blue-500/20 text-blue-300');
  c = c.replace(/bg-violet-100 text-violet-700/g, 'bg-violet-500/20 text-violet-300');
  c = c.replace(/bg-emerald-100 text-emerald-700/g, 'bg-emerald-500/20 text-emerald-300');
  c = c.replace(/bg-cyan-100 text-cyan-700/g, 'bg-cyan-500/20 text-cyan-300');
  c = c.replace(/bg-rose-100 text-rose-700/g, 'bg-rose-500/20 text-rose-300');

  // ── BOTTOM CTA SECTION ────────────────────────────────────────────────────
  // The solid blue CTA banner at page end  
  c = c.replace(
    /relative py-24 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 overflow-hidden/g,
    'relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden border-t border-slate-800'
  );

  return c;
}

let changed = 0;
files.forEach((rel) => {
  const fullPath = path.join(__dirname, rel);
  const original = fs.readFileSync(fullPath, 'utf8');
  const updated = normalize(original);
  if (updated !== original) {
    fs.writeFileSync(fullPath, updated, 'utf8');
    console.log(`  ✓ Updated: ${rel}`);
    changed++;
  } else {
    console.log(`  - No changes: ${rel}`);
  }
});

console.log(`\nDone. ${changed}/${files.length} files updated.`);
