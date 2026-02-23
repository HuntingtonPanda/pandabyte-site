import styles from "@/styles/layout.module.css";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const headingClassName =
    align === "center"
      ? `${styles.sectionHeading} ${styles.sectionHeadingCenter}`
      : styles.sectionHeading;

  return (
    <div className={headingClassName}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.headingTitle}>
        {title}
      </h2>
      {description ? (
        <p className={styles.headingDescription}>{description}</p>
      ) : null}
    </div>
  );
}
