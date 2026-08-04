/**
 * sync-capabilities.mjs — DURABLE marketing/app capability sync.
 *
 * WHY THIS EXISTS
 * ---------------
 * The marketing website historically hand-copied the app's feature/pricing
 * catalogue, which then drifted from the app's single source of truth. This
 * script derives the catalogue directly FROM that source so the two stop
 * diverging.
 *
 * SOURCE OF TRUTH (in the SEPARATE app repo):
 *   studio-worshipwise/src/lib/subscription-tiers.ts
 *     -> AVAILABLE_FEATURES        (the full capability registry)
 *     -> DEFAULT_SUBSCRIPTION_TIERS (which capabilities each tier includes)
 *
 * OUTPUT (committed to THIS repo):
 *   src/lib/generated/capabilities.json
 *
 * The website imports the committed JSON at build time. The two repos deploy
 * independently (this site ships on Vercel; it never has the app repo on disk
 * during a build), so we CANNOT live-import across repos. The pragmatic durable
 * pattern is therefore: run this script locally whenever the app catalogue
 * changes, then commit the regenerated JSON. `src/lib/capabilities.ts` wraps the
 * JSON with types + helpers that the marketing pages consume.
 *
 * USAGE
 *   node scripts/sync-capabilities.mjs
 *   node scripts/sync-capabilities.mjs /abs/path/to/subscription-tiers.ts
 *   CANONICAL_TIERS_PATH=/abs/path/... node scripts/sync-capabilities.mjs
 *
 * If the source path isn't found, the script exits non-zero WITHOUT touching
 * the committed JSON (so a missing sibling checkout never blanks the catalogue).
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');

const DEFAULT_CANONICAL = resolve(
  repoRoot,
  '..',
  'studio-worshipwise',
  'src',
  'lib',
  'subscription-tiers.ts'
);

const canonicalPath = resolve(
  process.argv[2] || process.env.CANONICAL_TIERS_PATH || DEFAULT_CANONICAL
);

if (!existsSync(canonicalPath)) {
  console.error(
    `[sync-capabilities] Canonical source not found:\n  ${canonicalPath}\n\n` +
      'This script needs the app repo (studio-worshipwise) checked out as a\n' +
      'sibling of this repo, or an explicit path:\n' +
      '  node scripts/sync-capabilities.mjs /abs/path/to/subscription-tiers.ts\n\n' +
      'Refusing to overwrite the committed capabilities.json. Exiting.'
  );
  process.exit(1);
}

const src = readFileSync(canonicalPath, 'utf8');

/**
 * Extract a top-level array literal that follows a marker like
 * `export const NAME: Type[] = [` and return the exact `[ ... ]` text,
 * respecting strings and comments so brackets inside them don't miscount.
 */
function extractArrayLiteral(source, exportName) {
  const markerRe = new RegExp(`export\\s+const\\s+${exportName}\\b[^=]*=\\s*`);
  const m = markerRe.exec(source);
  if (!m) throw new Error(`Could not find "export const ${exportName}" in source`);
  let i = m.index + m[0].length;
  if (source[i] !== '[') throw new Error(`Expected "[" after ${exportName} =`);

  const start = i;
  let depth = 0;
  let inString = null; // quote char when inside a string
  let inLine = false; // // comment
  let inBlock = false; // /* */ comment

  for (; i < source.length; i++) {
    const c = source[i];
    const next = source[i + 1];

    if (inLine) {
      if (c === '\n') inLine = false;
      continue;
    }
    if (inBlock) {
      if (c === '*' && next === '/') {
        inBlock = false;
        i++;
      }
      continue;
    }
    if (inString) {
      if (c === '\\') {
        i++; // skip escaped char
        continue;
      }
      if (c === inString) inString = null;
      continue;
    }

    if (c === '/' && next === '/') {
      inLine = true;
      i++;
      continue;
    }
    if (c === '/' && next === '*') {
      inBlock = true;
      i++;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') {
      inString = c;
      continue;
    }
    if (c === '[') depth++;
    else if (c === ']') {
      depth--;
      if (depth === 0) {
        return source.slice(start, i + 1);
      }
    }
  }
  throw new Error(`Unterminated array literal for ${exportName}`);
}

/**
 * Evaluate an extracted TS array literal as plain JS. The literals contain
 * `process.env.X || 'fallback'` (tier Stripe ids) and TS is otherwise just
 * object/array literals, so a Function with a stubbed `process` yields the
 * fallback defaults deterministically.
 */
function evalLiteral(literal) {
  const fn = new Function('process', `return (${literal});`);
  return fn({ env: {} });
}

const featuresLiteral = extractArrayLiteral(src, 'AVAILABLE_FEATURES');
const tiersLiteral = extractArrayLiteral(src, 'DEFAULT_SUBSCRIPTION_TIERS');

const rawFeatures = evalLiteral(featuresLiteral);
const rawTiers = evalLiteral(tiersLiteral);

const features = rawFeatures.map((f) => ({
  id: f.id,
  name: f.name,
  description: f.description,
  category: f.category,
  icon: f.icon,
}));

const tiers = rawTiers.map((t) => ({
  id: t.id,
  name: t.name,
  description: t.description,
  price: t.price,
  billingPeriod: t.billingPeriod,
  maxUsers: t.maxUsers,
  popular: Boolean(t.popular),
  customPricing: Boolean(t.customPricing),
  featureIds: t.features,
}));

const output = {
  $schema: './capabilities.schema (generated — do not hand-edit)',
  generatedAt: new Date().toISOString(),
  source: 'studio-worshipwise/src/lib/subscription-tiers.ts',
  note:
    'GENERATED FILE — do not hand-edit. Regenerate with ' +
    '`node scripts/sync-capabilities.mjs` after the app catalogue changes. ' +
    'Consumed via src/lib/capabilities.ts.',
  featureCount: features.length,
  features,
  tiers,
};

const outPath = resolve(repoRoot, 'src', 'lib', 'generated', 'capabilities.json');
writeFileSync(outPath, JSON.stringify(output, null, 2) + '\n', 'utf8');

console.log(
  `[sync-capabilities] Wrote ${features.length} capabilities + ${tiers.length} tiers\n` +
    `  from: ${canonicalPath}\n` +
    `  to:   ${outPath}`
);
