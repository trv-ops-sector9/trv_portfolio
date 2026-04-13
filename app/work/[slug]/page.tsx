import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/content";
import { Prose } from "@/components/ui/Prose";
import { FadeUp } from "@/components/ui/FadeUp";
import { MotiifCarousel } from "@/components/ui/MotiifCarousel";
import { assetPath } from "@/lib/assetPath";
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

  // Next project: all work sorted by slug, wraps around
  const allProjects = getProjects("work").sort((a, b) => a.slug.localeCompare(b.slug));
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

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

        {project.heroVideo ? (
          <FadeUp delay={0.1}>
            <div className={styles.hero}>
              <video width="100%" height="100%" autoPlay muted loop playsInline>
                <source src={assetPath(project.heroVideo)} type="video/mp4" />
              </video>
            </div>
          </FadeUp>
        ) : project.heroCarousel ? (
          <FadeUp delay={0.1}>
            <div className={styles.hero}>
              <MotiifCarousel />
            </div>
          </FadeUp>
        ) : null}

        <FadeUp delay={0.18}>
          <div className={styles.body}>
            <Prose content={content} />
          </div>
        </FadeUp>
      </div>

      {/* Next project */}
      {nextProject && (
        <div className={styles.nextSection}>
          <div className="container">
            <Link href={`/work/${nextProject.slug}`} className={styles.nextCard}>
              {nextProject.thumbnail && (
                <div className={styles.nextThumb}>
                  <img src={assetPath(nextProject.thumbnail)} alt="" />
                </div>
              )}
              <div className={styles.nextContent}>
                <span className={styles.nextLabel}>Next</span>
                <span className={styles.nextTitle}>{nextProject.title}</span>
              </div>
              <span className={styles.nextArrow}>→</span>
            </Link>
          </div>
        </div>
      )}

    </article>
  );
}
