import type { Metadata } from "next";
import Link from "next/link";
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
              <span className={styles.label}>Problem solver. Product designer.</span>
              <h1 className={styles.name}>Traver Phillips</h1>
            </header>

            <div className={styles.body}>
              <p>
                Fifteen years designing digital products. Scrappy roots. I got
                a job doing digital design before I finished school and never
                looked back.
              </p>
              <p>
                Design and engineering were never separate in my mind. Agency
                years at WeAreRoyale, Digital Kitchen, and Razorfish were where
                I really learned to design. High output, high standards, real
                deadlines.
              </p>
              <p>
                Amazon came next. Entertainment, Kindle, advertising at scale.
                That's where systems thinking started to take over.
              </p>
              <p>
                At Microsoft I went deep on motion systems and Fluent 2 in the
                second half of my time there, always working alongside
                engineers. Eventually I started building the tools myself and
                never stopped.
              </p>
              <p>
                Now I code. That's not a footnote, it's the direction.
              </p>
              <p>
                In my free time: car builder, fabricator, rally driver,
                driving instructor.
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

        <div className={styles.footer}>
          <Link href="/" className={styles.backLink}>← Selected work</Link>
        </div>
      </div>
    </div>
  );
}
