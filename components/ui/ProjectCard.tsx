import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import styles from "./ProjectCard.module.css";

export type ProjectSpan = 3 | 4 | 6 | 8 | 12;

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: number;
  section: "work" | "projects" | "experiments" | "explorations" | "fabrication";
  span?: ProjectSpan;
  tags?: string[];
  heroVideo?: string;
  heroCarousel?: boolean;
  heroPlaceholder?: boolean;
  thumbnail?: string;
  yearDisplay?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  priority?: boolean;
}

export function ProjectCard({ project, index, priority }: ProjectCardProps) {
  const href = `/${project.section}/${project.slug}`;
  const num = String(index).padStart(2, "0");
  const isFeatured = index === 1;

  return (
    <Link
      href={href}
      className={`${styles.card} ${isFeatured ? styles.featured : ""}`}
    >
      <div className={styles.imageWrap}>
        {/* Scan line — sweeps on hover */}
        <div className={styles.scanLine} aria-hidden="true" />

        {/* Corner brackets */}
        <span className={`${styles.corner} ${styles.cornerTL}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.cornerTR}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.cornerBL}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.cornerBR}`} aria-hidden="true" />

        {/* Image */}
        {project.thumbnail ? (
          <img
            src={assetPath(project.thumbnail)}
            alt=""
            className={styles.image}
            loading={priority ? "eager" : "lazy"}
          />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true" />
        )}

        {/* Scrim — fades in on hover */}
        <div className={styles.scrim} aria-hidden="true" />

        {/* HUD — all hidden by default, reveals on hover */}
        <div className={styles.hud}>
          <div className={styles.metaRow}>
            <span className={styles.index}>{num}</span>
            <span className={styles.sep} aria-hidden="true">—</span>
            <span className={styles.category}>{project.category}</span>
            <span className={styles.dot} aria-hidden="true">·</span>
            <span className={styles.year}>{project.yearDisplay ?? project.year}</span>
          </div>
          <div className={styles.bottomHud}>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.description}>{project.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
