import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ministrymotion.com';

  const staticPages = [
    '',
    '/home',
    '/pricing',
    '/compare',
    '/products',
    '/collective',
    '/privacy',
    '/terms',
  ];

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/home' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' || route === '/home' ? 1 : 0.8,
  }));
}
