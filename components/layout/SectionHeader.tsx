import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  count?: number;
}

export function SectionHeader({ label, title, description, count }: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <span className={styles.label}>{label}</span>
        {count !== undefined && (
          <span className={styles.count}>{String(count).padStart(2, "0")}</span>
        )}
      </div>
      <h1 className={styles.title}>{title}</h1>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}
