import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getResourceBySlug, getAllResourceSlugs } from '@/lib/resources';
import { ResourceDetailClient } from './ResourceDetailClient';

export function generateStaticParams() {
  return getAllResourceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  const url = `https://www.ministrymotion.com/resources/${slug}`;
  return {
    title: resource.title,
    description: resource.description,
    alternates: { canonical: url },
    openGraph: {
      title: resource.title,
      description: resource.description,
      url,
      type: 'article',
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getResourceBySlug(slug)) notFound();
  return <ResourceDetailClient slug={slug} />;
}
