/**
 * blue_only.js
 * Replaces ALL emerald and teal colors with blue equivalents
 * across every marketing page. Pure blue scheme only.
 */
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = __dirname;
const files = glob.sync('src/app/(marketing)/**/*.tsx', { cwd: ROOT });

const swaps = [
  // ── CTA GRADIENT BUTTONS ──────────────────────────────────────────────────
  ['from-emerald-500 to-teal-500',             'from-blue-500 to-blue-600'],
  ['hover:from-emerald-600 hover:to-teal-600', 'hover:from-blue-600 hover:to-blue-700'],
  ['from-emerald-400 to-teal-400',             'from-blue-400 to-blue-500'],

  // ── GRADIENT TEXT ─────────────────────────────────────────────────────────
  ['from-emerald-400 via-teal-400 to-cyan-400','from-blue-300 via-blue-400 to-indigo-400'],
  ['from-emerald-400 to-teal-400',             'from-blue-300 to-blue-500'],

  // ── HERO RADIAL GLOW ─────────────────────────────────────────────────────
  ['from-emerald-500/15 via-transparent',      'from-blue-500/20 via-transparent'],
  ['from-emerald-500/10 via-transparent',      'from-blue-500/15 via-transparent'],

  // ── ORB GLOWS ─────────────────────────────────────────────────────────────
  ['bg-emerald-500/10 rounded-full',           'bg-blue-500/10 rounded-full'],
  ['bg-emerald-500/15 rounded-full',           'bg-blue-600/15 rounded-full'],

  // ── BADGE / PILL BACKGROUNDS ──────────────────────────────────────────────
  ['bg-emerald-500/10 border border-emerald-500/20', 'bg-blue-500/10 border border-blue-500/20'],
  ['bg-emerald-500/10 border-emerald-500/20',  'bg-blue-500/10 border-blue-500/20'],
  ['bg-emerald-500/20 border border-emerald-500/30', 'bg-blue-500/20 border border-blue-500/30'],
  ['bg-emerald-900/20 border border-emerald-700/30', 'bg-blue-900/20 border border-blue-700/30'],

  // ── CARD/SECTION BACKGROUNDS ──────────────────────────────────────────────
  ['bg-emerald-500/10',  'bg-blue-500/10'],
  ['bg-emerald-500/15',  'bg-blue-500/15'],
  ['bg-emerald-500/20',  'bg-blue-500/20'],
  ['bg-emerald-600/20',  'bg-blue-600/20'],
  ['bg-emerald-900/20',  'bg-blue-900/20'],
  ['bg-emerald-900/30',  'bg-blue-900/30'],
  ['bg-emerald-900/40',  'bg-blue-900/40'],

  // ── BORDER COLORS ─────────────────────────────────────────────────────────
  ['border-emerald-500',      'border-blue-500'],
  ['border-emerald-500/20',   'border-blue-500/20'],
  ['border-emerald-500/30',   'border-blue-500/30'],
  ['border-emerald-600/50',   'border-blue-600/50'],
  ['border-teal-500',         'border-blue-500'],
  ['border-teal-500/20',      'border-blue-500/20'],

  // ── TEXT COLORS ───────────────────────────────────────────────────────────
  ['text-emerald-400',   'text-blue-400'],
  ['text-emerald-300',   'text-blue-300'],
  ['text-emerald-500',   'text-blue-500'],
  ['text-emerald-600',   'text-blue-500'],
  ['text-teal-400',      'text-blue-400'],
  ['text-teal-300',      'text-blue-300'],

  // ── SHADOW ───────────────────────────────────────────────────────────────
  ['shadow-emerald-500/25',  'shadow-blue-500/25'],
  ['shadow-emerald-900/30',  'shadow-blue-900/30'],
  ['shadow-emerald-500/10',  'shadow-blue-500/10'],

  // ── HOVER STATES ─────────────────────────────────────────────────────────
  ['hover:bg-emerald-500/20',  'hover:bg-blue-500/20'],
  ['hover:bg-emerald-500/30',  'hover:bg-blue-500/30'],
  ['hover:bg-emerald-600',     'hover:bg-blue-600'],
  ['hover:text-emerald-300',   'hover:text-blue-300'],
  ['hover:text-emerald-400',   'hover:text-blue-400'],
  ['hover:border-emerald-600/50', 'hover:border-blue-600/50'],
  ['group-hover:bg-emerald-500/30', 'group-hover:bg-blue-500/30'],

  // ── CTA SOLID BUTTON ─────────────────────────────────────────────────────
  ['bg-emerald-500 text-white hover:bg-emerald-600', 'bg-blue-600 text-white hover:bg-blue-700'],
  ['bg-emerald-500/20 text-blue-300', 'bg-blue-500/20 text-blue-300'], // already-swapped
  ['Most Popular badge', 'Most Popular badge'], // skip
  ['bg-emerald-500 text-white text-xs font-bold rounded-full', 'bg-blue-500 text-white text-xs font-bold rounded-full'],

  // ── "MOST POPULAR" GREEN BADGE ────────────────────────────────────────────
  ['bg-emerald-500 text-white text-xs font-bold', 'bg-blue-500 text-white text-xs font-bold'],
  ['-translate-x-1/2 px-3 py-1 bg-emerald-500 text-white', '-translate-x-1/2 px-3 py-1 bg-blue-500 text-white'],

  // ── RING ─────────────────────────────────────────────────────────────────
  ['ring-emerald-500',  'ring-blue-500'],
  ['ring-2 ring-eme',   'ring-2 ring-blue-500'],

  // ── STATS / NUMBER ACCENTS ────────────────────────────────────────────────
  ['text-emerald-400\n',    'text-blue-400\n'],

  // ── TEAL CLEANUPS ─────────────────────────────────────────────────────────
  ['bg-teal-500',      'bg-blue-600'],
  ['bg-teal-400',      'bg-blue-500'],
  ['text-teal-400',    'text-blue-400'],
  ['from-teal-500',    'from-blue-600'],
  ['to-teal-500',      'to-blue-600'],
  ['via-teal-400',     'via-blue-400'],
  ['from-teal-400',    'from-blue-400'],
  ['to-teal-400',      'to-blue-400'],
];

let totalChanged = 0;

files.forEach((rel) => {
  const fullPath = path.join(ROOT, rel);
  let content = fs.readFileSync(fullPath, 'utf8');
  const original = content;

  for (const [from, to] of swaps) {
    // Simple string replacement, all occurrences
    while (content.includes(from)) {
      content = content.split(from).join(to);
    }
  }

  if (content !== original) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('✓ Fixed:', rel);
    totalChanged++;
  } else {
    console.log('  -', rel);
  }
});

console.log(`\nDone — ${totalChanged} files updated to pure blue.`);
