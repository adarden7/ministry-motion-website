import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MinistryMotion — AI-Powered Worship Ministry Platform',
  description:
    'Real-time vocal analysis, 6 autonomous AI agents, and the only discipleship journey engine built for worship ministry. See every voice. Grow every member.',
  keywords: [
    'worship ministry software',
    'church management',
    'AI vocal coaching',
    'worship team management',
    'discipleship tracking',
    'church planning software',
    'SATB blend analysis',
    'worship rehearsal tools',
  ],
  openGraph: {
    title: 'MinistryMotion — See Every Voice. Grow Every Member.',
    description:
      'The AI-native worship platform. Real-time pitch detection, autonomous coaching agents, and gamified discipleship journeys.',
    type: 'website',
    url: 'https://ministrymotion.com/landing',
    siteName: 'MinistryMotion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MinistryMotion — AI-Powered Worship Ministry Platform',
    description:
      'Real-time vocal analysis, 6 AI agents, and gamified discipleship. The platform worship ministries have been waiting for.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
