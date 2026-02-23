"use client";

import { createPortal } from "react-dom";

import type { ProjectItem } from "@/lib/site-content";
import styles from "@/styles/overlay.module.css";
import { ProjectList } from "./project-list";

interface ProjectsOverlayProps {
  open: boolean;
  platform: "phone" | "desktop" | null;
  projects: ProjectItem[];
  onClose: () => void;
  onProjectSelect: () => void;
}

const PLATFORM_TITLE = {
  phone: "Phone",
  desktop: "Desktop",
} as const;

export function ProjectsOverlay({
  open,
  platform,
  projects,
  onClose,
  onProjectSelect,
}: ProjectsOverlayProps) {
  if (typeof document === "undefined" || !open || !platform) {
    return null;
  }

  return createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div
        id="projects-overlay"
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="projects-overlay-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close projects overlay"
        >
          Close
        </button>
        <p className={styles.eyebrow}>Project Focus</p>
        <h3 id="projects-overlay-title" className={styles.title}>
          {PLATFORM_TITLE[platform]} Projects
        </h3>
        <p className={styles.description}>
          Select a project to view a summary route with links, details, and
          supporting content.
        </p>
        <ProjectList projects={projects} onProjectSelect={onProjectSelect} />
      </div>
    </div>,
    document.body,
  );
}
