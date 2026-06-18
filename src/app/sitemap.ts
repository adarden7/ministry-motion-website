import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog-content';
import { getAllSolutions } from '@/lib/solutions-content';
import { products } from '@/lib/products-content';
import { getAllResourceSlugs } from '@/lib/resources';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ministrymotion.com';
  const now = new Date();

  // Static / hand-maintained routes.
  const staticRoutes = [
    '',
    '/pricing',
    '/compare',
    '/products',
    '/collective',
    '/resources',
    '/blog',
    '/case-studies',
    '/solutions',
    '/privacy',
    '/terms',
    // Dedicated persona solution pages (own folders).
    '/solutions/praise-leaders',
    '/solutions/worship-directors',
    '/solutions/ministries-directors',
    '/solutions/church-admins',
    '/solutions/leadership',
    // Journey pages.
    '/journeys/praise-leader',
    '/journeys/worship-director',
    '/journeys/ministries-director',
    '/journeys/church-admin',
    '/journeys/church-leadership',
  ];

  // Dynamic routes pulled from the content sources.
  const blogRoutes = getAllPosts().map((p) => `/blog/${p.slug}`);
  const solutionRoutes = getAllSolutions().map((s) => `/solutions/${s.slug}`);
  const productRoutes = products.map((p) => `/products/${p.slug}`);
  const resourceRoutes = getAllResourceSlugs().map((slug) => `/resources/${slug}`);

  const all = Array.from(
    new Set([...staticRoutes, ...blogRoutes, ...solutionRoutes, ...productRoutes, ...resourceRoutes])
  );

  return all.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/blog/') ? 0.7 : 0.8,
  }));
}
