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
          <p className={styles.intro}>
            I am a product designer who codes. I solve complex UX problems and ship production code. This site is new, more coming soon.
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <ProjectGrid projects={projects} layout="modular" />
        </FadeUp>
      </div>
    </div>
  );
}
