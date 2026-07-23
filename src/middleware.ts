import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Worship Collective host routing.
 *
 * worshipcollective.ai is a full standalone mini-site served from the
 * `/collective/*` route segment. On that host we rewrite EVERY page path under
 * `/collective` so the whole domain is WC-branded and self-contained — nothing
 * falls through to MinistryMotion pages/chrome.
 *
 * A middleware catch-all is used (rather than per-path next.config rewrites) so
 * that ANY path on the WC host is captured, keeping URLs clean and root-relative
 * (worshipcollective.ai/membership -> /collective/membership). Static assets,
 * `_next` internals and API routes are excluded via the matcher below so images,
 * fonts and the beta-signup POST keep working.
 */
const WC_HOSTS = new Set(['worshipcollective.ai', 'www.worshipcollective.ai']);

export function middleware(request: NextRequest) {
  const host = (request.headers.get('host') ?? '').split(':')[0].toLowerCase();

  if (!WC_HOSTS.has(host)) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Already inside the Collective segment — serve as-is (avoids /collective/collective).
  if (pathname === '/collective' || pathname.startsWith('/collective/')) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === '/' ? '/collective' : `/collective${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Run on page navigations only: skip _next internals, API routes, and any
  // path that looks like a static file (contains a dot, e.g. /logos/x.svg).
  matcher: ['/((?!_next/|api/|.*\\.).*)'],
};
