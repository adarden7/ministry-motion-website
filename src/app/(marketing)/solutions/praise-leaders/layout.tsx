import type { Metadata } from 'next';

// This page is also the rewrite target for the praiseleaderstudio.com /.ai
// microsite domains. The canonical points to the ministrymotion.com URL so
// search engines consolidate authority here instead of treating the microsite
// hosts as duplicate content.
const url = 'https://www.ministrymotion.com/solutions/praise-leaders';
const title = 'Solutions for Praise Leaders';
const description =
  'AI rehearsal-track generation, ensemble blend analysis, and personal vocal coaching — the tools praise leaders use to build a genuinely excellent worship team with Ministry Motion.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
};

export default function PraiseLeadersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
