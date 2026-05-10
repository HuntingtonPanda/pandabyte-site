"use client";

import { useEffect, useRef, useState } from "react";

import { CONTACT_ITEMS } from "@/lib/site-content";
import styles from "@/styles/contact.module.css";

export function ContactLinks() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const resetTimerRef = useRef<number | null>(null);

  const emailItem = CONTACT_ITEMS.find((item) => item.id === "email");
  const socialItems = CONTACT_ITEMS.filter((item) => item.id !== "email");

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleCopy = async () => {
    if (!emailItem?.copyValue || !navigator?.clipboard?.writeText) {
      setCopyState("error");
    } else {
      try {
        await navigator.clipboard.writeText(emailItem.copyValue);
        setCopyState("copied");
      } catch {
        setCopyState("error");
      }
    }

    if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
    resetTimerRef.current = window.setTimeout(() => {
      setCopyState("idle");
      resetTimerRef.current = null;
    }, 1500);
  };

  const emailDisplay = emailItem?.value ?? emailItem?.href.replace(/^mailto:/, "");

  return (
    <div className={styles.contactPanel}>
      <div className={styles.links}>
        {emailItem && (
          <button
            type="button"
            className={`${styles.emailButton} ${
              copyState === "copied" ? styles.copySuccess : copyState === "error" ? styles.copyError : ""
            }`}
            onClick={handleCopy}
            aria-label="Copy email address"
          >
            {copyState === "copied"
              ? "Copied!"
              : copyState === "error"
                ? "Copy failed"
                : emailDisplay}
          </button>
        )}

        {socialItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={styles.socialButton}
            aria-label={item.label}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            {item.label}
            <span className={styles.arrow} aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      <p className={styles.availability}>
        Currently open to: SWE internships · full-time new-grad · side-quests with friends
      </p>
    </div>
  );
}
