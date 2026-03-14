import type { MouseEvent } from "react";

import styles from "@/styles/projects.module.css";

interface DeviceLauncherProps {
  category: "phone" | "desktop" | "other";
  label: string;
  description: string;
  active?: boolean;
  onLaunch: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function DeviceLauncher({
  category,
  label,
  description,
  active = false,
  onLaunch,
}: DeviceLauncherProps) {
  const isPhone = category === "phone";
  const isDesktop = category === "desktop";

  return (
    <button
      type="button"
      className={`${styles.launcher} ${active ? styles.launcherActive : ""}`}
      onClick={onLaunch}
      aria-pressed={active}
    >
      <span className={styles.deviceArt} aria-hidden="true">
        {isPhone ? (
          <span className={styles.phoneArt}>
            <span className={styles.phoneNotch} />
            <span className={styles.phoneBar} />
          </span>
        ) : isDesktop ? (
          <span className={styles.desktopArt}>
            <span className={styles.desktopScreen} />
            <span className={styles.desktopBase} />
          </span>
        ) : (
          <span className={styles.brickArt}>
            <span className={`${styles.brickBlock} ${styles.brickRed}`}>
              <span className={styles.brickStud} />
              <span className={styles.brickStud} />
            </span>
            <span className={`${styles.brickBlock} ${styles.brickBlue}`}>
              <span className={styles.brickStud} />
            </span>
            <span className={`${styles.brickBlock} ${styles.brickGreen}`}>
              <span className={styles.brickStud} />
              <span className={styles.brickStud} />
            </span>
          </span>
        )}
      </span>

      <span className={styles.launcherText}>
        <span className={styles.launcherLabel}>{label}</span>
        <span className={styles.launcherDescription}>{description}</span>
      </span>
    </button>
  );
}
