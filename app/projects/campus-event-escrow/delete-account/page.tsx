import Link from "next/link";
import type { Metadata } from "next";

import styles from "@/styles/project-page.module.css";

export const metadata: Metadata = {
  title: "Ducky's Money Bin Account Deletion | PandaByte",
  description:
    "Request account deletion for Ducky's Money Bin using the in-app flow or support email.",
};

export default function CampusEventEscrowDeleteAccountPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <article className={styles.panel}>
          <p className={styles.eyebrow}>Ducky&apos;s Money Bin Support</p>
          <h1 className={styles.title}>Account Deletion</h1>
          <p className={styles.summary}>
            This page explains how to delete your Ducky&apos;s Money Bin account
            and associated personal data.
          </p>

          <div className={styles.contentBlock}>
            <h2 className={styles.subheading}>Fastest Method (In-App)</h2>
            <p className={styles.bodyCopy}>
              Open Ducky&apos;s Money Bin, go to{" "}
              <strong>Profile &gt; Account Settings</strong>, select{" "}
              <strong>Delete Account</strong>, and confirm the request.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2 className={styles.subheading}>Email Fallback</h2>
            <p className={styles.bodyCopy}>
              If you cannot access the app, email support and request account
              deletion.
            </p>
            <div className={styles.actionRow}>
              <a
                className={styles.primaryAction}
                href="mailto:support@pandabyte.dev?subject=Ducky%27s%20Money%20Bin%20Account%20Deletion%20Request"
              >
                Email Support
              </a>
            </div>
          </div>

          <div className={styles.contentBlock}>
            <h2 className={styles.subheading}>Deletion Scope and Timing</h2>
            <p className={styles.bodyCopy}>
              After deletion is confirmed, account profile information is
              removed from active systems.
            </p>
            <p className={styles.bodyCopy}>
              Payment records tied to completed transactions may be retained
              when required for legal, tax, fraud-prevention, or accounting
              obligations.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2 className={styles.subheading}>Need Help?</h2>
            <p className={styles.bodyCopy}>
              Contact us at{" "}
              <a href="mailto:support@pandabyte.dev">support@pandabyte.dev</a>{" "}
              for help verifying or completing your deletion request.
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2 className={styles.subheading}>Related Links</h2>
            <div className={styles.actionRow}>
              <Link
                href="/projects/campus-event-escrow"
                className={styles.secondaryAction}
              >
                Back to Project
              </Link>
              <Link
                href="/terms/campus_event_escrow_terms.html"
                className={styles.secondaryAction}
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy/campus_event_escrow_policy.html"
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
