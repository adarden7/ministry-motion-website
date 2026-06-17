import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
  },
  trailingSlash: false,
  async rewrites() {
    // Value-proposition microsite domains. The branded domain stays in the
    // address bar while serving the matching persona page. Only the root path
    // is mapped so deep links (e.g. /pricing) still resolve normally on each
    // domain. ministrymotion.com is handled by the root redirect to /home.
    const personaDomains: { hosts: string[]; destination: string }[] = [
      {
        hosts: ['worshipdirectorstudio.com', 'www.worshipdirectorstudio.com'],
        destination: '/solutions/worship-directors',
      },
      {
        hosts: ['praiseleaderstudio.com', 'www.praiseleaderstudio.com'],
        destination: '/solutions/praise-leaders',
      },
      {
        hosts: ['praiseleaderstudio.ai', 'www.praiseleaderstudio.ai'],
        destination: '/solutions/praise-leaders',
      },
      {
        hosts: ['musicministrystudio.com', 'www.musicministrystudio.com'],
        destination: '/solutions/worship-directors',
      },
    ];

    return {
      beforeFiles: personaDomains.flatMap(({ hosts, destination }) =>
        hosts.map((host) => ({
          source: '/',
          has: [{ type: 'host' as const, value: host }],
          destination,
        }))
      ),
    };
  },
};

export default nextConfig;
