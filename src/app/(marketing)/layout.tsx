import type { Metadata } from 'next';
import { MarketingLayout } from '@/components/marketing/MarketingLayout';

export const metadata: Metadata = {
  title: 'Ministry Motion - Everything Your Worship Ministry Needs',
  description:
    'The complete platform for worship ministry. Plan services, develop your team with AI vocal coaching, analyze performance, and unify communications — all in one place.',
  keywords: [
    'worship team management',
    'AI vocal coaching',
    'church software',
    'worship planning',
    'service analytics',
    'church management',
    'volunteer scheduling',
  ],
  openGraph: {
    title: 'Ministry Motion - Everything Your Worship Ministry Needs',
    description:
      'Plan services, develop your team with AI, analyze performance, and unify communications. The complete worship ministry platform.',
    type: 'website',
    siteName: 'Ministry Motion',
  },
};

export default function MarketingLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MarketingLayout>{children}</MarketingLayout>;
}
