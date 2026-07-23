import type { Metadata } from 'next';
import { CollectiveShell } from '@/components/collective';

/**
 * Standalone Worship Collective layout.
 *
 * Lives OUTSIDE the (marketing) route group so it never inherits
 * MinistryMotion's MarketingNav/Footer or metadata. `title.absolute` prevents
 * the root "%s | MinistryMotion" template from leaking the MM brand onto
 * Collective pages.
 */
export const metadata: Metadata = {
  title: {
    absolute: 'Worship Collective — A Community for Worship Leaders',
  },
  description:
    'Worship Collective is a membership community where worship leaders belong, connect, and grow together — cohorts, mentorship, interest groups, and recognized credentials.',
  keywords: [
    'worship community',
    'worship leader network',
    'worship leader cohorts',
    'worship leader mentorship',
    'worship credentials',
    'worship leader membership',
  ],
  openGraph: {
    title: 'Worship Collective — A Community for Worship Leaders',
    description:
      'Belong to a community of worship leaders growing together. Cohorts, mentorship, interest groups, and recognized credentials.',
    type: 'website',
    siteName: 'Worship Collective',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Worship Collective',
    description: 'A membership community where worship leaders belong, connect, and grow together.',
  },
};

export default function CollectiveLayout({ children }: { children: React.ReactNode }) {
  return <CollectiveShell>{children}</CollectiveShell>;
}
