import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Traver Phillips, senior product designer specializing in design systems and interaction detail.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.grid}>

          {/* Bio column */}
          <div className={styles.bio}>
            <header className={styles.header}>
              <span className={styles.label}>About</span>
              <h1 className={styles.name}>Traver Phillips</h1>
            </header>

            <div className={styles.body}>
              <p>
                Product and interaction designer. Twelve years shipping complex
                digital products, mostly at Microsoft. Motion design is where
                I go deeper than most.
              </p>
              <p>
                I work best at the intersection of design and engineering.
                Finding the gap between the two and building something that
                bridges it. The motion system for Fluent 2 is a good example
                of that.
              </p>
            </div>

            <div className={styles.contact}>
              <a
                href="mailto:traver4@gmail.com"
                className={styles.contactLink}
              >
                traver4@gmail.com
              </a>
            </div>
          </div>

          {/* Info columns */}
          <aside className={styles.aside}>
            <dl className={styles.info}>
              <div className={styles.infoGroup}>
                <dt className={styles.infoLabel}>Discipline</dt>
                <dd>Product Design</dd>
                <dd>Interaction Design</dd>
                <dd>Motion Design</dd>
                <dd>Design Systems</dd>
                <dd>Emerging Tech</dd>
              </div>

              <div className={styles.infoGroup}>
                <dt className={styles.infoLabel}>Currently</dt>
                <dd>Seattle, WA</dd>
              </div>
            </dl>
          </aside>

        </div>
      </div>
    </div>
  );
}
