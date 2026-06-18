import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getAllProductSlugs } from '@/lib/products-content';
import { ProductDetailClient } from './ProductDetailClient';

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const url = `https://www.ministrymotion.com/products/${slug}`;
  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      title: product.title,
      description: product.description,
      url,
      type: 'article',
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getProductBySlug(slug)) notFound();
  return <ProductDetailClient slug={slug} />;
}
