"use client";

import { useMemo, useState } from "react";

import type { ProjectItem } from "@/lib/site-content";
import { PROJECTS } from "@/lib/site-content";
import styles from "@/styles/projects.module.css";
import { DeviceLauncher } from "./device-launcher";
import { ProjectList } from "./project-list";

type LauncherCategory = "phone" | "desktop" | "other";

export function ProjectCarousel() {
  const [activeCategory, setActiveCategory] = useState<LauncherCategory>("phone");

  const filteredProjects = useMemo<ProjectItem[]>(() => {
    return PROJECTS.filter(
      (project) => project.category === "both" || project.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <div className={styles.carousel}>
      <p className={styles.lead}>
        Filter by category to see the most relevant project work immediately.
      </p>

      <div className={styles.launcherGrid}>
        <DeviceLauncher
          category="phone"
          active={activeCategory === "phone"}
          label="Phone Experience"
          description="Show mobile-focused projects."
          onLaunch={() => setActiveCategory("phone")}
        />
        <DeviceLauncher
          category="desktop"
          active={activeCategory === "desktop"}
          label="Desktop Experience"
          description="Show web and desktop-focused projects."
          onLaunch={() => setActiveCategory("desktop")}
        />
        <DeviceLauncher
          category="other"
          active={activeCategory === "other"}
          label="Others"
          description="Show robotics builds and specialty experiments."
          onLaunch={() => setActiveCategory("other")}
        />
      </div>

      <ProjectList projects={filteredProjects} />
    </div>
  );
}
