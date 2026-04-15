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
              <h1 className={styles.name}>Traver Phillips</h1>
            </header>

            <div className={styles.body}>
              <p>
                I design products and specialize in motion design.
              </p>
              <p>
                I learned my craft at agencies, WeAreRoyale, Digital Kitchen,
                and Razorfish. Microsoft taught me how big organizations work
                and how to get things done inside them.
              </p>
              <p>
                I like to build tools that help connect engineering and design.
                That is where my work is headed.
              </p>
              <p>
                Outside of work I build and race cars, do fabrication and 3D
                printing, and teach performance driving.
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
