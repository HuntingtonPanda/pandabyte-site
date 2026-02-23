import type { MouseEvent } from "react";

import styles from "@/styles/projects.module.css";

interface DeviceLauncherProps {
  platform: "phone" | "desktop";
  label: string;
  description: string;
  active?: boolean;
  onLaunch: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function DeviceLauncher({
  platform,
  label,
  description,
  active = false,
  onLaunch,
}: DeviceLauncherProps) {
  const isPhone = platform === "phone";

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
        ) : (
          <span className={styles.desktopArt}>
            <span className={styles.desktopScreen} />
            <span className={styles.desktopBase} />
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
