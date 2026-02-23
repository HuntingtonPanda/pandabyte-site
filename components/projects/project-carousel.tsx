"use client";

import { useMemo, useState } from "react";

import type { ProjectItem } from "@/lib/site-content";
import { PROJECTS } from "@/lib/site-content";
import styles from "@/styles/projects.module.css";
import { DeviceLauncher } from "./device-launcher";
import { ProjectList } from "./project-list";

type LauncherPlatform = "phone" | "desktop";

export function ProjectCarousel() {
  const [activePlatform, setActivePlatform] = useState<LauncherPlatform>("phone");

  const filteredProjects = useMemo<ProjectItem[]>(() => {
    return PROJECTS.filter(
      (project) => project.platform === "both" || project.platform === activePlatform,
    );
  }, [activePlatform]);

  return (
    <div className={styles.carousel}>
      <p className={styles.lead}>
        Filter by device to see the most relevant project work immediately.
      </p>

      <div className={styles.launcherGrid}>
        <DeviceLauncher
          platform="phone"
          active={activePlatform === "phone"}
          label="Phone Experience"
          description="Show mobile-focused projects."
          onLaunch={() => setActivePlatform("phone")}
        />
        <DeviceLauncher
          platform="desktop"
          active={activePlatform === "desktop"}
          label="Desktop Experience"
          description="Show web and desktop-focused projects."
          onLaunch={() => setActivePlatform("desktop")}
        />
      </div>

      <ProjectList projects={filteredProjects} />
    </div>
  );
}
