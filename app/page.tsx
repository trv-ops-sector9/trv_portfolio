import { getProjects } from "@/lib/content";
import { ProjectGrid } from "@/components/ui/ProjectGrid";
import { FadeUp } from "@/components/ui/FadeUp";
import styles from "./page.module.css";

export default function HomePage() {
  const projects = getProjects();

  return (
    <div className={styles.page}>
      <div className="container">
        <FadeUp>
          <p className={`label ${styles.sectionLabel}`}>Selected work, 2024–2026</p>
        </FadeUp>
        <FadeUp delay={0.06}>
          <ProjectGrid projects={projects} />
        </FadeUp>
      </div>
    </div>
  );
}
