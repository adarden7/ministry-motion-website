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
      // NOTE: worshipcollective.ai is a FULL standalone mini-site, not a single
      // persona landing page. Its host routing is a catch-all handled in
      // `src/middleware.ts` (every WC-host path -> /collective/*), so it is
      // intentionally NOT listed here.
    ];

    const personaRewrites = personaDomains.flatMap(({ hosts, destination }) =>
      hosts.map((host) => ({
        source: '/',
        has: [{ type: 'host' as const, value: host }],
        destination,
      }))
    );

    // Worship Collective sub-pages, exposed at clean root-relative paths on ALL
    // hosts so the mini-site's root-relative internal links resolve everywhere
    // (worshipcollective.ai via middleware; preview/localhost via these). The
    // canonical `/collective/*` paths continue to work directly as well.
    const collectiveRewrites = [
      { source: '/how-it-works', destination: '/collective/how-it-works' },
      { source: '/membership', destination: '/collective/membership' },
      { source: '/certifications', destination: '/collective/certifications' },
    ];

    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'app.ministrymotion.com',
            },
          ],
          destination: 'https://worshipwise-studio-1089767403917.us-east1.run.app/:path*',
        },
        ...personaRewrites,
        ...collectiveRewrites,
      ],
    };
  },
};

export default nextConfig;
