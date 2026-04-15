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

  return (
    <Link href={href} className={styles.card}>
      <span className={styles.index}>{num}</span>

      <div className={styles.content}>
        <h2 className={styles.title}>{project.title}</h2>
        <div className={styles.meta}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.dot} aria-hidden="true">·</span>
          <span className={styles.year}>{project.yearDisplay ?? project.year}</span>
        </div>
      </div>

      {project.thumbnail ? (
        <div className={styles.thumb} aria-hidden="true">
          <img
            src={assetPath(project.thumbnail)}
            alt=""
            className={styles.thumbImg}
            loading={priority ? "eager" : "lazy"}
          />
        </div>
      ) : (
        <div className={styles.thumbPlaceholder} aria-hidden="true" />
      )}
    </Link>
  );
}
