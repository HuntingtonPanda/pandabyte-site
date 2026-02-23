import Link from "next/link";

import styles from "@/styles/project-page.module.css";

export default function ProjectNotFound() {
  return (
    <main className={styles.page}>
      <div className="container">
        <section className={styles.panel}>
          <p className={styles.eyebrow}>Missing Route</p>
          <h1 className={styles.title}>Project Not Found</h1>
          <p className={styles.summary}>
            The project route you requested has not been created yet.
          </p>
          <div className={styles.actionRow}>
            <Link href="/#projects" className={styles.primaryAction}>
              Back to Projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
