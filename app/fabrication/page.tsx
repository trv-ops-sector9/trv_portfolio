import type { Metadata } from "next";
import { getProjects } from "@/lib/content";
import { ProjectGrid } from "@/components/ui/ProjectGrid";
import { FadeUp } from "@/components/ui/FadeUp";
import styles from "../work/page.module.css";

export const metadata: Metadata = {
  title: "Fabrication",
  description: "Cars, builds, and fabrication by Traver Phillips.",
};

export default function FabricationPage() {
  const projects = getProjects("fabrication");

  return (
    <div className={styles.page}>
      <div className="container">
        <FadeUp>
          <p className={`label ${styles.sectionLabel}`}>Fabrication</p>
        </FadeUp>
        <FadeUp delay={0.06}>
          <ProjectGrid projects={projects} />
        </FadeUp>
      </div>
    </div>
  );
}
