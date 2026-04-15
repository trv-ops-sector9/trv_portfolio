import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/content";
import { Prose } from "@/components/ui/Prose";
import { FadeUp } from "@/components/ui/FadeUp";
import { MotiifCarousel } from "@/components/ui/MotiifCarousel";
import { assetPath } from "@/lib/assetPath";
import type { Project } from "@/components/ui/ProjectCard";
import styles from "./CaseStudyPage.module.css";

interface CaseStudyPageProps {
  section: Project["section"];
  slug: string;
}

export function CaseStudyPage({ section, slug }: CaseStudyPageProps) {
  const result = getProject(section, slug);
  if (!result) notFound();

  const { project, content, lede } = result;

  const allProjects = getProjects(section).sort((a, b) => a.slug.localeCompare(b.slug));
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <article className={styles.article}>

      <div className="container">
        <FadeUp>
          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.year}>{project.yearDisplay ?? project.year}</span>
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
        ) : project.heroPlaceholder ? (
          <FadeUp delay={0.1}>
            <div className={styles.hero}>
              <div className={styles.heroPlaceholder}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="0.5" y="0.5" width="23" height="23" stroke="currentColor" strokeWidth="1" />
                  <line x1="0" y1="0" x2="24" y2="24" stroke="currentColor" strokeWidth="1" />
                  <line x1="24" y1="0" x2="0" y2="24" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </FadeUp>
        ) : null}

        <FadeUp delay={0.18}>
          <div className={styles.body}>
            <Prose content={content} />
          </div>
        </FadeUp>
      </div>

      {nextProject && (
        <div className={styles.nextSection}>
          <div className="container">
            <Link href={`/${section}/${nextProject.slug}`} className={styles.nextCard}>
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
