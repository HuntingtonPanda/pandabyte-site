import Link from "next/link";

import type { ProjectItem } from "@/lib/site-content";
import styles from "@/styles/project-page.module.css";

interface ComingSoonPageProps {
  project: ProjectItem;
}

export function ComingSoonPage({ project }: ComingSoonPageProps) {
  return (
    <main className={styles.page}>
      <div className="container">
        <article className={styles.panel}>
          <p className={styles.eyebrow}>Project Route</p>
          <h1 className={styles.title}>{project.title}</h1>
          <span className={`${styles.statusBadge} ${styles.comingSoon}`}>
            Coming Soon
          </span>
          <p className={styles.summary}>{project.summary}</p>
          <p className={styles.bodyCopy}>
            This project is actively in development. A full case study with
            implementation details and outcomes will be published here soon.
          </p>
          <div className={styles.actionRow}>
            <Link href="/#projects" className={styles.primaryAction}>
              Back to Projects
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
