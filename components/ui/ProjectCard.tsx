import Link from "next/link";
import styles from "./ProjectCard.module.css";

export type ProjectSpan = 3 | 4 | 6 | 8 | 12;

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: number;
  section: "work" | "projects" | "experiments";
  span?: ProjectSpan;
  tags?: string[];
  heroVideo?: string;
  thumbnail?: string;
}

interface ProjectCardProps {
  project: Project;
  span?: ProjectSpan;
  priority?: boolean;
}

export function ProjectCard({ project, span = 4, priority }: ProjectCardProps) {
  const href = `/${project.section}/${project.slug}`;

  return (
    <Link
      href={href}
      className={styles.card}
      data-span={span}
      style={{ "--card-span": span } as React.CSSProperties}
    >
      {/* Card image */}
      <div className={styles.image} aria-hidden="true">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt=""
            className={styles.thumbnailImg}
            loading={priority ? "eager" : "lazy"}
          />
        ) : (
          <span className={styles.imagePlaceholder} />
        )}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <h2 className={styles.title}>{project.title}</h2>
      </div>
    </Link>
  );
}
