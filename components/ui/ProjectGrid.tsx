import { ProjectCard, type Project } from "./ProjectCard";
import styles from "./ProjectGrid.module.css";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className={styles.list}>
      {projects.map((project, i) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={i + 1}
          priority={i < 2}
        />
      ))}
    </div>
  );
}
