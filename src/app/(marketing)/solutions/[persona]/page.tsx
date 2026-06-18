import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSolutionBySlug, getAllSolutions } from '@/lib/solutions-content';
import { SolutionPersonaClient } from './SolutionPersonaClient';

export function generateStaticParams() {
  return getAllSolutions().map((solution) => ({ persona: solution.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ persona: string }> }): Promise<Metadata> {
  const { persona } = await params;
  const solution = getSolutionBySlug(persona);
  if (!solution) return {};
  const url = `https://www.ministrymotion.com/solutions/${persona}`;
  return {
    title: solution.title,
    description: solution.description,
    alternates: { canonical: url },
    openGraph: {
      title: solution.title,
      description: solution.description,
      url,
      type: 'article',
    },
  };
}

export default async function Page({ params }: { params: Promise<{ persona: string }> }) {
  const { persona } = await params;
  if (!getSolutionBySlug(persona)) notFound();
  return <SolutionPersonaClient persona={persona} />;
}
