import Link from 'next/link';

/**
 * Worship Collective wordmark.
 *
 * There is no dedicated Collective logo asset, so the brand mark is a clean
 * gradient text treatment ("Worship Collective") — deliberately NOT the
 * MinistryMotion logo. The violet -> fuchsia gradient is the Collective's
 * one distinctive visual asset and is reused across nav and footer.
 */
export function CollectiveWordmark({
  className = '',
  href = '/',
}: {
  className?: string;
  /** Root-relative so it works on the worshipcollective.ai host. */
  href?: string;
}) {
  return (
    <Link href={href} className={`group inline-flex items-baseline gap-2 ${className}`}>
      <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
        Worship Collective
      </span>
    </Link>
  );
}
