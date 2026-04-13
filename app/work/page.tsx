import type { Metadata } from "next";
import { getProjects } from "@/lib/content";
import { ProjectGrid } from "@/components/ui/ProjectGrid";
import { FadeUp } from "@/components/ui/FadeUp";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies and projects by Traver Phillips.",
};

export default function WorkPage() {
  const projects = getProjects("work");

  return (
    <div className={styles.page}>
      <div className="container">
        <FadeUp>
          <h1 className={styles.heading}>Work</h1>
        </FadeUp>
        <FadeUp delay={0.06}>
          <ProjectGrid projects={projects} layout="uniform" />
        </FadeUp>
      </div>
    </div>
  );
}
