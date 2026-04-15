import type { Metadata } from "next";
import { getProject, getProjects } from "@/lib/content";
import { CaseStudyPage } from "@/components/templates/CaseStudyPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjects("fabrication").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getProject("fabrication", slug);
  if (!result) return {};
  return { title: result.project.title, description: result.project.description };
}

export default async function FabricationProjectPage({ params }: Props) {
  const { slug } = await params;
  return <CaseStudyPage section="fabrication" slug={slug} />;
}
