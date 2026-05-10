import styles from "@/styles/layout.module.css";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  eyebrowVariant?: "box" | "dash";
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  eyebrowVariant = "box",
}: SectionHeadingProps) {
  const headingClassName =
    align === "center"
      ? `${styles.sectionHeading} ${styles.sectionHeadingCenter}`
      : styles.sectionHeading;

  const eyebrowClassName =
    eyebrowVariant === "dash" ? styles.eyebrowDash : styles.eyebrow;

  return (
    <div className={headingClassName}>
      <p className={eyebrowClassName}>{eyebrow}</p>
      <h2 id={id} className={styles.headingTitle}>
        {title}
      </h2>
      {description ? (
        <p className={styles.headingDescription}>{description}</p>
      ) : null}
    </div>
  );
}
