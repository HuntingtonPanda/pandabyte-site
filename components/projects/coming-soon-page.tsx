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
            {project.links.termsRoute ? (
              <Link href={project.links.termsRoute} className={styles.secondaryAction}>
                Terms of Service
              </Link>
            ) : null}
            {project.links.privacyRoute ? (
              <Link href={project.links.privacyRoute} className={styles.secondaryAction}>
                Privacy Policy
              </Link>
            ) : null}
            {project.links.deleteAccountRoute ? (
              <Link
                href={project.links.deleteAccountRoute}
                className={styles.secondaryAction}
              >
                Delete Account
              </Link>
            ) : null}
          </div>
        </article>
      </div>
    </main>
  );
}
