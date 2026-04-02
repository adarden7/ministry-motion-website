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
      ],
    };
  },
};

export default nextConfig;
