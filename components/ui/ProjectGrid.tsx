import { ProjectCard, type Project, type ProjectSpan } from "./ProjectCard";
import styles from "./ProjectGrid.module.css";

interface ProjectGridProps {
  projects: Project[];
  layout?: "modular" | "uniform";
}

/* Brockmann-inspired span sequence — creates rhythm without symmetry */
const SPAN_SEQUENCE: ProjectSpan[] = [6, 3, 3, 4, 8, 6, 6, 4, 4, 4, 12, 3, 3, 6];

export function ProjectGrid({ projects, layout = "modular" }: ProjectGridProps) {
  return (
    <div className={styles.grid}>
      {projects.map((project, i) => {
        const span =
          layout === "modular"
            ? project.span ?? SPAN_SEQUENCE[i % SPAN_SEQUENCE.length]
            : 4;
        return (
          <ProjectCard
            key={project.slug}
            project={project}
            span={span}
            priority={i < 2}
          />
        );
      })}
    </div>
  );
}
