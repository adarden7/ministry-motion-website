import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-headline',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#7c3aed',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ministrymotion.com'),
  title: {
    default: 'Ministry Motion - Everything Your Worship Ministry Needs',
    template: '%s | Ministry Motion',
  },
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
    'ministry platform',
  ],
  openGraph: {
    title: 'Ministry Motion - Everything Your Worship Ministry Needs',
    description:
      'Plan services, develop your team with AI, analyze performance, and unify communications. The complete worship ministry platform.',
    type: 'website',
    siteName: 'Ministry Motion',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ministry Motion',
    description:
      'The complete platform for worship ministry. AI-powered vocal coaching, service planning, and team development.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icons/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased',
          inter.variable,
          poppins.variable
        )}
        suppressHydrationWarning
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
