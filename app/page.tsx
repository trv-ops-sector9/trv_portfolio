import { getProjects } from "@/lib/content";
import { ProjectGrid } from "@/components/ui/ProjectGrid";
import { FadeUp } from "@/components/ui/FadeUp";
import styles from "./page.module.css";

export default function HomePage() {
  const projects = getProjects("work");

  return (
    <div className={styles.page}>
      <div className="container">
        <FadeUp delay={0.06}>
          <ProjectGrid projects={projects} />
        </FadeUp>
        <FadeUp delay={0.12}>
          <p className={styles.intro}>
            More coming soon <span className="label">4.16.2026</span>
          </p>
        </FadeUp>
      </div>
    </div>
  );
}
