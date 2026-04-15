"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ui/ThemeProvider";
import styles from "./Nav.module.css";

const links: { href: string; label: string }[] = [
  { href: "/work", label: "Work" },
  { href: "/explorations", label: "Explorations" },
  { href: "/fabrication", label: "Fabrication" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href="/" className={styles.logo}>
          Traver Phillips
        </Link>

        <ul className={styles.links}>
          {links.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className={`${styles.link} ${pathname.startsWith(href) ? styles.active : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <button
              className={styles.themeToggle}
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              data-theme-state={resolvedTheme}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.25" />
                <path d="M8 1.5a6.5 6.5 0 0 1 0 13V1.5z" fill="currentColor" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
