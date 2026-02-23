import styles from "@/styles/overlay.module.css";

interface ProjectChipProps {
  label: string;
}

export function ProjectChip({ label }: ProjectChipProps) {
  return <span className={styles.chip}>{label}</span>;
}
