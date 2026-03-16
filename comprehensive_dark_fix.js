/**
 * comprehensive_dark_fix.js
 * Exhaustive fix for ALL remaining light-mode Tailwind color classes across
 * every marketing page. Run once to make the entire site dark-mode native.
 */
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = __dirname;
const files = glob.sync('src/app/(marketing)/**/*.tsx', { cwd: ROOT });

// ── REPLACEMENT MAP ───────────────────────────────────────────────────────────
// Each entry: [searchRegex, replacement]
// Ordered from most-specific to least-specific to avoid partial matches.
const replacements = [

  // ── JOURNEY STEP BADGE COLOR STRINGS (prop values like color="bg-blue-50 ...") ──
  [/color="bg-blue-50 border-blue-200 text-blue-700"/g,     'color="bg-blue-500/15 border-blue-500/30 text-blue-300"'],
  [/color="bg-emerald-50 border-emerald-200 text-emerald-700"/g, 'color="bg-emerald-500/15 border-emerald-500/30 text-emerald-300"'],
  [/color="bg-amber-50 border-amber-200 text-amber-700"/g,   'color="bg-amber-500/15 border-amber-500/30 text-amber-300"'],
  [/color="bg-violet-50 border-violet-200 text-violet-700"/g,'color="bg-violet-500/15 border-violet-500/30 text-violet-300"'],
  [/color="bg-rose-50 border-rose-200 text-rose-700"/g,      'color="bg-rose-500/15 border-rose-500/30 text-rose-300"'],
  [/color="bg-cyan-50 border-cyan-200 text-cyan-700"/g,      'color="bg-cyan-500/15 border-cyan-500/30 text-cyan-300"'],

  // ── JOURNEY CTA BUTTONS ───────────────────────────────────────────────────
  [/className="bg-white text-violet-700 hover:bg-violet-50 font-semibold px-8 py-3"/g,
    'className="bg-white/10 text-white hover:bg-white/20 font-semibold px-8 py-3"'],
  [/className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3"/g,
    'className="bg-white/10 text-white hover:bg-white/20 font-semibold px-8 py-3"'],
  [/className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold px-8 py-3"/g,
    'className="bg-white/10 text-white hover:bg-white/20 font-semibold px-8 py-3"'],
  [/className="bg-white text-amber-700 hover:bg-amber-50 font-semibold px-8 py-3"/g,
    'className="bg-white/10 text-white hover:bg-white/20 font-semibold px-8 py-3"'],
  [/className="bg-white text-rose-700 hover:bg-rose-50 font-semibold px-8 py-3"/g,
    'className="bg-white/10 text-white hover:bg-white/20 font-semibold px-8 py-3"'],

  // ── ICON CIRCLE BACKGROUNDS ───────────────────────────────────────────────
  [/bg-violet-100 flex items-center justify-center flex-s/g, 'bg-violet-500/20 flex items-center justify-center flex-s'],
  [/bg-blue-100 flex items-center justify-center flex-s/g,   'bg-blue-500/20 flex items-center justify-center flex-s'],
  [/bg-emerald-100 flex items-center justify-center flex-s/g,'bg-emerald-500/20 flex items-center justify-center flex-s'],
  [/bg-amber-100 flex items-center justify-center flex-s/g,  'bg-amber-500/20 flex items-center justify-center flex-s'],
  [/bg-rose-100 flex items-center justify-center flex-s/g,   'bg-rose-500/20 flex items-center justify-center flex-s'],
  [/bg-blue-100 flex items-center justify-center\b/g,        'bg-blue-500/20 flex items-center justify-center'],
  [/bg-amber-100 flex items-center justify-center\b/g,       'bg-amber-500/20 flex items-center justify-center'],
  [/bg-rose-100 flex items-center justify-center\b/g,        'bg-rose-500/20 flex items-center justify-center'],

  // ── HOME PAGE: ICON ORBS IN AI SECTION ───────────────────────────────────
  [/bg-blue-100 flex items-center justify-center\b/g,    'bg-blue-500/20 flex items-center justify-center'],
  [/bg-amber-100 flex items-center justify-center\b/g,   'bg-amber-500/20 flex items-center justify-center'],
  [/bg-rose-100 flex items-center justify-center\b/g,    'bg-rose-500/20 flex items-center justify-center'],
  [/bg-violet-100 flex items-center justify-center\b/g,  'bg-violet-500/20 flex items-center justify-center'],
  [/bg-cyan-100 flex items-center justify-center\b/g,    'bg-cyan-500/20 flex items-center justify-center'],

  // ── HOME PAGE: EXPLORE AREA ICON BOXES ───────────────────────────────────
  [/'bg-emerald-100'/g, "'bg-emerald-500/20'"],
  [/'bg-amber-100'/g,   "'bg-amber-500/20'"],
  [/'bg-rose-100'/g,    "'bg-rose-500/20'"],
  [/'bg-violet-100'/g,  "'bg-violet-500/20'"],
  [/'bg-blue-100'/g,    "'bg-blue-500/20'"],
  [/'bg-cyan-100'/g,    "'bg-cyan-500/20'"],

  // ── HOME PAGE: AI feature card blue/amber/rose ────────────────────────────
  [/bg-blue-50 rounded-xl border border-blue-200/g, 'bg-blue-500/10 rounded-xl border border-blue-500/20'],

  // ── COMPARE PAGE: highlighted row ────────────────────────────────────────
  [/feature\.highlight \? 'bg-blue-50'/g, "feature.highlight ? 'bg-blue-500/10'"],
  [/bg-blue-100 text-blue-600 font-bold flex items-cent/g, 'bg-blue-500/20 text-blue-300 font-bold flex items-cent'],

  // ── BLOG PAGE: category hover states ─────────────────────────────────────
  [/hover:bg-blue-50 hover:text-blue-700 dark:hover:[^'"]*/g, 'hover:bg-blue-500/20 hover:text-blue-300'],
  [/hover:bg-emerald-50 hover:text-emerald-700 dark:hover:[^'"]*/g, 'hover:bg-emerald-500/20 hover:text-emerald-300'],
  [/hover:bg-amber-50 hover:text-amber-700 dark:hover:[^'"]*/g, 'hover:bg-amber-500/20 hover:text-amber-300'],
  [/hover:bg-violet-50 hover:text-violet-700 dark:hover:[^'"]*/g, 'hover:bg-violet-500/20 hover:text-violet-300'],

  // ── CASE STUDIES: icon color map ─────────────────────────────────────────
  [/bg-blue-100 text-blue-600 dark:bg-blue-900\/30 dark:text-blue-400/g,       'bg-blue-500/20 text-blue-300'],
  [/bg-amber-100 text-amber-600 dark:bg-amber-900\/30 dark:text-amber-400/g,    'bg-amber-500/20 text-amber-300'],
  [/bg-emerald-100 text-emerald-400 dark:bg-emerald-900\/30 dark:text-emerald-400/g, 'bg-emerald-500/20 text-emerald-300'],
  [/bg-violet-100 text-violet-600 dark:bg-violet-900\/30 dark:text-violet-400/g,'bg-violet-500/20 text-violet-300'],
  [/bg-rose-100 text-rose-600 dark:bg-rose-900\/30 dark:text-rose-400/g,        'bg-rose-500/20 text-rose-300'],
  [/bg-cyan-100 text-cyan-600 dark:bg-cyan-900\/30 dark:text-cyan-400/g,        'bg-cyan-500/20 text-cyan-300'],

  // ── PRICING: card on/off ──────────────────────────────────────────────────
  [/bg-emerald-100 dark:bg-emerald-900\/30 text-emerald-700 dark:text/g, 'bg-emerald-500/20 text'],
  [/bg-blue-50 dark:bg-blue-900\/30 text-blue-600 dark:text/g,           'bg-blue-500/20 text'],

  // ── COMPARE: dark:bg overrides that kept bg-slate-50 ─────────────────────
  [/bg-slate-50 dark:bg-slate-800\b/g, 'bg-slate-800'],
  [/bg-white dark:bg-slate-900\b/g,    'bg-slate-900'],
  [/bg-white dark:bg-slate-700\b/g,    'bg-slate-700'],
  [/bg-white dark:bg-slate-800\b/g,    'bg-slate-800'],

  // ── PRICING: remaining white card variants ────────────────────────────────
  [/bg-white dark:bg-slate-900 border-blue-500 shadow-xl shadow-blue-500\/10 ring-2 ring-blu/g,
    'bg-slate-800 border-emerald-500 shadow-xl shadow-emerald-500/10 ring-2 ring-eme'],
  [/bg-white dark:bg-slate-900 border-slate-800 dark:border-slate-700/g,
    'bg-slate-800 border-slate-700'],

  // ── GENERIC LIGHT BACKGROUNDS (catch-all after specific ones) ─────────────
  [/\bbg-white\b/g,      'bg-slate-900'],
  [/\bbg-slate-50\b/g,   'bg-slate-900'],
  [/\bbg-slate-100\b/g,  'bg-slate-800'],
  [/\bbg-blue-50\b/g,    'bg-blue-500/10'],
  [/\bbg-blue-100\b/g,   'bg-blue-500/20'],
  [/\bbg-blue-200\b/g,   'bg-blue-500/20'],
  [/\bbg-emerald-50\b/g, 'bg-emerald-500/10'],
  [/\bbg-emerald-100\b/g,'bg-emerald-500/20'],
  [/\bbg-emerald-200\b/g,'bg-emerald-500/20'],
  [/\bbg-amber-50\b/g,   'bg-amber-500/10'],
  [/\bbg-amber-100\b/g,  'bg-amber-500/20'],
  [/\bbg-amber-200\b/g,  'bg-amber-500/20'],
  [/\bbg-rose-50\b/g,    'bg-rose-500/10'],
  [/\bbg-rose-100\b/g,   'bg-rose-500/20'],
  [/\bbg-rose-200\b/g,   'bg-rose-500/20'],
  [/\bbg-violet-50\b/g,  'bg-violet-500/10'],
  [/\bbg-violet-100\b/g, 'bg-violet-500/20'],
  [/\bbg-cyan-50\b/g,    'bg-cyan-500/10'],
  [/\bbg-cyan-100\b/g,   'bg-cyan-500/20'],
  [/\bbg-green-50\b/g,   'bg-green-500/10'],
  [/\bbg-orange-50\b/g,  'bg-orange-500/10'],
  [/\bbg-red-50\b/g,     'bg-red-500/10'],
  [/\bbg-purple-50\b/g,  'bg-purple-500/10'],

  // ── TEXT COLORS ────────────────────────────────────────────────────────────
  [/\btext-slate-900\b/g, 'text-white'],
  [/\btext-gray-900\b/g,  'text-white'],

  // ── BORDER COLORS ─────────────────────────────────────────────────────────
  [/\bborder-slate-200\b/g, 'border-slate-700'],
  [/\bborder-slate-100\b/g, 'border-slate-800'],
  [/\bborder-blue-200\b/g,  'border-blue-500/30'],
  [/\bborder-emerald-200\b/g,'border-emerald-500/30'],
  [/\bborder-amber-200\b/g, 'border-amber-500/30'],
  [/\bborder-rose-200\b/g,  'border-rose-500/30'],
  [/\bborder-violet-200\b/g,'border-violet-500/30'],
  [/\bborder-cyan-200\b/g,  'border-cyan-500/30'],

  // ── bg-slate-100 BUTTON VARIANT ───────────────────────────────────────────
  [/bg-slate-100 dark:bg-slate-800/g, 'bg-slate-800'],

  // ── PROGRESS BAR BACKGROUNDS ─────────────────────────────────────────────
  // bg-blue-200, bg-emerald-200, bg-amber-200 used as chart bar fills
  [/: 'bg-blue-200'\s*\}/g,    ": 'bg-blue-500/40' }"],
  [/: 'bg-emerald-200'\s*\}/g, ": 'bg-emerald-500/40' }"],
  [/: 'bg-amber-200'\s*\}/g,   ": 'bg-amber-500/40' }"],
];

let totalChanged = 0;

files.forEach((rel) => {
  const fullPath = path.join(ROOT, rel);
  let content = fs.readFileSync(fullPath, 'utf8');
  const original = content;

  for (const [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement);
  }

  if (content !== original) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('✓ Fixed:', rel);
    totalChanged++;
  } else {
    console.log('  -', rel);
  }
});

console.log(`\nDone — ${totalChanged} files updated.`);
