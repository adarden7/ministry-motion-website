/**
 * blue_only_pass2.js — fixes the specific residual emerald/teal instances missed in pass 1
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

function fix(rel, fn) {
  const fullPath = path.join(ROOT, rel);
  let c = fs.readFileSync(fullPath, 'utf8');
  const orig = c;
  c = fn(c);
  if (c !== orig) { fs.writeFileSync(fullPath, c, 'utf8'); console.log('✓', rel); }
  else { console.log(' -', rel); }
}

// ── LANDING PAGE ────────────────────────────────────────────────────────────
fix('src/app/(marketing)/landing/page.tsx', c => c
  .split('bg-emerald-500 animate-pulse').join('bg-blue-500 animate-pulse')
  .split('bg-emerald-400 animate-pulse').join('bg-blue-400 animate-pulse')
  .split('from-blue-400 via-cyan-400 to-emerald-400').join('from-blue-300 via-blue-400 to-indigo-400')
  .split('from-emerald-600 to-teal-600').join('from-blue-600 to-blue-700')
  .split('text-emerald-100 text-xl').join('text-blue-100 text-xl')
  .split('text-emerald-700 text-sm').join('text-blue-300 text-sm')
  .split('bg-emerald-500/40').join('bg-blue-500/40')
  .split('bg-emerald-600/40').join('bg-blue-600/40')
  .replace(/color: 'bg-emerald[^']*'/g, "color: 'bg-blue-500/40'")
  .replace(/color: 'bg-e[^']*'/g, "color: 'bg-blue-500/40'")
  // catch any remaining emerald/teal tokens
  .replace(/\bemerald-/g, 'blue-')
  .replace(/\bteal-/g, 'blue-')
);

// ── JOURNEYS / MINISTRIES-DIRECTOR ──────────────────────────────────────────
fix('src/app/(marketing)/journeys/ministries-director/page.tsx', c => c
  .replace(/\bemerald-/g, 'blue-')
  .replace(/\bteal-/g, 'blue-')
);

// ── COMPARE ─────────────────────────────────────────────────────────────────
fix('src/app/(marketing)/compare/page.tsx', c => c
  .split('bg-teal-900/50').join('bg-blue-900/50')
  .split('text-teal-200').join('text-blue-200')
  .replace(/\bteal-/g, 'blue-')
);

// ── PRICING ─────────────────────────────────────────────────────────────────
fix('src/app/(marketing)/pricing/page.tsx', c => c
  .split("'bg-emerald-500 text-white hover:bg-blue-600'").join("'bg-blue-600 text-white hover:bg-blue-700'")
  .replace(/\bemerald-/g, 'blue-')
);

// ── BLOG ────────────────────────────────────────────────────────────────────
fix('src/app/(marketing)/blog/page.tsx', c => c
  .split("'bg-emerald-600 text-white'").join("'bg-blue-600 text-white'")
  .replace(/\bemerald-/g, 'blue-')
  .replace(/\bteal-/g, 'blue-')
);

// ── COLLECTIVE ──────────────────────────────────────────────────────────────
fix('src/app/(marketing)/collective/page.tsx', c => c
  .replace(/\bemerald-/g, 'blue-')
  .replace(/\bteal-/g, 'blue-')
);

// ── PRODUCTS ────────────────────────────────────────────────────────────────
fix('src/app/(marketing)/products/page.tsx', c => c
  .replace(/\bemerald-/g, 'blue-')
  .replace(/\bteal-/g, 'blue-')
);

// ── GENERIC SWEEP on all remaining files ────────────────────────────────────
const glob = require('glob');
const files = glob.sync('src/app/(marketing)/**/*.tsx', { cwd: ROOT });
files.forEach(rel => {
  const fullPath = path.join(ROOT, rel);
  let c = fs.readFileSync(fullPath, 'utf8');
  const orig = c;
  c = c.replace(/\bemerald-/g, 'blue-').replace(/\bteal-/g, 'blue-');
  if (c !== orig) { fs.writeFileSync(fullPath, c, 'utf8'); console.log('✓ sweep:', rel); }
});

console.log('\nPass 2 complete.');
