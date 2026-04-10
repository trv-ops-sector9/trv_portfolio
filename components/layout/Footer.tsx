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

        <ul className={styles.socials}>
          {socials.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
