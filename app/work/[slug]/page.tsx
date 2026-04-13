import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/content";
import { assetPath } from "@/lib/assetPath";
import { Prose } from "@/components/ui/Prose";
import { FadeUp } from "@/components/ui/FadeUp";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjects("work").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getProject("work", slug);
  if (!result) return {};
  return { title: result.project.title, description: result.project.description };
}

export default async function WorkProjectPage({ params }: Props) {
  const { slug } = await params;
  const result = getProject("work", slug);
  if (!result) notFound();

  const { project, content, lede } = result;

  return (
    <article className={styles.article}>
      <div className="container">
        <FadeUp>
          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.year}>{project.year}</span>
            </div>
            <h1 className={styles.title}>{project.title}</h1>
            {lede && <p className={styles.lede}>{lede}</p>}
          </header>
        </FadeUp>

        {/* Hero section */}
        <FadeUp delay={0.1}>
          <div className={styles.hero} aria-hidden="true">
            {project.heroVideo ? (
              <video width="100%" height="100%" autoPlay muted loop playsInline>
                <source src={assetPath(project.heroVideo!)} type="video/mp4" />
              </video>
            ) : null}
          </div>
        </FadeUp>

        <FadeUp delay={0.18}>
          <div className={styles.body}>
            <Prose content={content} />
          </div>
        </FadeUp>
      </div>
    </article>
  );
}
