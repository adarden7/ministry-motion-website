import type { Metadata } from 'next';

// This page is also the rewrite target for the musicministrystudio.com and
// worshipdirectorstudio.com microsite domains. The canonical points to the
// ministrymotion.com URL so search engines consolidate authority here instead
// of treating the microsite hosts as duplicate content.
const url = 'https://www.ministrymotion.com/solutions/worship-directors';
const title = 'Solutions for Worship Directors';
const description =
  'Automated post-service scorecards, real-time discipleship pipeline visibility, and a full AI advisory council — operational intelligence for worship directors, from Ministry Motion.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
};

export default function WorshipDirectorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
