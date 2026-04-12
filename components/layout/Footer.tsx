import Link from "next/link";
import styles from "./Footer.module.css";

const socials: { label: string; href: string }[] = [];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <span className={styles.copy}>
          © {year} Traver Phillips
        </span>

        <a href="mailto:traver4@gmail.com" className={styles.contact}>
          traver4@gmail.com
        </a>
      </div>
    </footer>
  );
}
