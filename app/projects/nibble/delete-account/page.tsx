import Link from "next/link";
import type { Metadata } from "next";

import styles from "@/styles/project-page.module.css";

export const metadata: Metadata = {
  title: "Nibble Account Deletion | PandaByte",
  description:
    "Request account deletion for the Nibble app by Huntington Co using the in-app flow or support email.",
};

export default function NibbleDeleteAccountPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <article className={styles.panel}>
          <p className={styles.eyebrow}>Nibble Support</p>
          <h1 className={styles.title}>Nibble Account Deletion</h1>
          <p className={styles.summary}>
            This page explains how to delete your Nibble account and associated
            personal data.
          </p>

          <div className={styles.contentBlock}>
            <h2 className={styles.subheading}>Fastest Method (In-App)</h2>
            <p className={styles.bodyCopy}>
              Open Nibble, go to the <strong>Profile</strong> tab, scroll to
              the bottom, select <strong>Delete Account</strong>, and complete
              the two confirmation prompts.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2 className={styles.subheading}>Email Fallback</h2>
            <p className={styles.bodyCopy}>
              If you cannot access the app, email our support team and request
              account deletion.
            </p>
            <div className={styles.actionRow}>
              <a
                className={styles.primaryAction}
                href="mailto:support@pandabyte.dev?subject=Nibble%20Account%20Deletion%20Request"
              >
                Email Support
              </a>
            </div>
          </div>

          <div className={styles.contentBlock}>
            <h2 className={styles.subheading}>Deletion Scope and Timing</h2>
            <p className={styles.bodyCopy}>
              When deletion is confirmed, your Nibble account and associated
              personal data are deleted immediately.
            </p>
            <p className={styles.bodyCopy}>
              We do not retain personal account data after deletion is
              completed.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2 className={styles.subheading}>Need Help?</h2>
            <p className={styles.bodyCopy}>
              Contact us at{" "}
              <a href="mailto:support@pandabyte.dev">support@pandabyte.dev</a>{" "}
              if you run into issues with account deletion or need help
              verifying your request.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2 className={styles.subheading}>Related Links</h2>
            <div className={styles.actionRow}>
              <Link href="/projects/nibble" className={styles.secondaryAction}>
                Back to Nibble Project
              </Link>
              <Link
                href="/projects/nibble/privacy"
                className={styles.secondaryAction}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
