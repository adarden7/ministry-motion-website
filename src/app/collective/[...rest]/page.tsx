import { notFound } from 'next/navigation';

/**
 * Catch-all for unmatched paths under the Collective segment.
 *
 * On the worshipcollective.ai host, middleware rewrites every unmatched path to
 * `/collective/<path>`. This catch-all captures those, throws `notFound()`, and
 * lets Next render the nested `collective/not-found.tsx` inside the WC layout —
 * so a bad URL on the WC host shows a WC-branded 404, never MinistryMotion.
 *
 * Explicit routes (how-it-works, membership, certifications) take precedence
 * over this dynamic catch-all, so real pages are unaffected.
 */
export default function CollectiveCatchAll() {
  notFound();
}
