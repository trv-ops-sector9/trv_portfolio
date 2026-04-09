import Link from "next/link";
import styles from "./Footer.module.css";

const socials = [
  { label: "Instagram",  href: "https://instagram.com/vmedium" },
  { label: "Twitter",    href: "https://twitter.com/vmedium" },
  { label: "GitHub",     href: "https://github.com/vmedium" },
  { label: "LinkedIn",   href: "https://linkedin.com/in/vmedium" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <span className={styles.copy}>
          © {year} JT DiMartile
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
