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
                Senior product designer with 12+ years of experience shipping
                complex digital products, most recently at Microsoft. I specialize
                in design systems and the interaction detail that makes technology
                feel trustworthy and legible.
              </p>
              <p>
                My work tends toward the systematic. I believe the gap between
                a good product and a great one lives in the details most people
                never consciously notice.
              </p>
              <p>
                Looking for a remote-first role where I can own meaningful problems
                at the intersection of humans and emerging tech.
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
                <dd>Design Systems</dd>
                <dd>Interaction Design</dd>
                <dd>UX Research</dd>
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
