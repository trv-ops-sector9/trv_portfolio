import type { Metadata } from "next";
import { getProject, getProjects } from "@/lib/content";
import { CaseStudyPage } from "@/components/templates/CaseStudyPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjects("explorations").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getProject("explorations", slug);
  if (!result) return {};
  return { title: result.project.title, description: result.project.description };
}

export default async function ExplorationsProjectPage({ params }: Props) {
  const { slug } = await params;
  return <CaseStudyPage section="explorations" slug={slug} />;
}
