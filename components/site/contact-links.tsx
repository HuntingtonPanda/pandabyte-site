"use client";

import { useEffect, useRef, useState } from "react";

import type { ContactItemId } from "@/lib/site-content";
import { CONTACT_ITEMS } from "@/lib/site-content";
import styles from "@/styles/contact.module.css";

const ICON_BUTTON_FALLBACK_STYLE = {
  width: "3.3rem",
  height: "3.3rem",
  borderRadius: "999px",
  border: "1px solid rgb(var(--powder-blue-rgb) / 0.3)",
  background: "rgb(var(--mint-cream-rgb) / 0.98)",
  boxShadow:
    "0 10px 24px rgb(var(--prussian-blue-rgb) / 0.2), 0 1px 0 rgb(var(--mint-cream-rgb) / 1) inset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
} as const;

const ICON_FALLBACK_STYLE = {
  width: "1.35rem",
  height: "1.35rem",
  display: "block",
} as const;

function ContactIcon({ id }: { id: ContactItemId }) {
  if (id === "github") {
    return (
      <img
        src="/githubIcon.png"
        alt=""
        width={22}
        height={22}
        style={ICON_FALLBACK_STYLE}
        aria-hidden="true"
      />
    );
  }

  if (id === "linkedin") {
    return (
      <img
        src="/linkedinIcon.png"
        alt=""
        width={22}
        height={22}
        style={ICON_FALLBACK_STYLE}
        aria-hidden="true"
      />
    );
  }

  return (
    <img
      src="/emailIcon.png"
      alt=""
      width={22}
      height={22}
      style={ICON_FALLBACK_STYLE}
      aria-hidden="true"
    />
  );
}

export function ContactLinks() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const [emailOpen, setEmailOpen] = useState(false);
  const resetTimerRef = useRef<number | null>(null);
  const emailWrapRef = useRef<HTMLDivElement | null>(null);
  const emailButtonRef = useRef<HTMLButtonElement | null>(null);

  const emailItem = CONTACT_ITEMS.find((item) => item.id === "email");
  const socialItems = CONTACT_ITEMS.filter((item) => item.id !== "email");

  const clearResetTimer = () => {
    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearResetTimer();
    };
  }, []);

  useEffect(() => {
    if (!emailOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setEmailOpen(false);
        emailButtonRef.current?.focus();
      }
    };

    const onPointerDown = (event: MouseEvent | PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }

      if (emailWrapRef.current?.contains(target)) {
        return;
      }

      setEmailOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [emailOpen]);

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

    clearResetTimer();

    resetTimerRef.current = window.setTimeout(() => {
      setCopyState("idle");
      resetTimerRef.current = null;
    }, 1500);
  };

  const toggleEmail = () => {
    setEmailOpen((prev) => {
      if (prev) {
        setCopyState("idle");
        clearResetTimer();
      }

      return !prev;
    });
  };

  const emailValue = emailItem?.value ?? emailItem?.href.replace(/^mailto:/, "");

  return (
    <div className={styles.contactPanel}>
      <div className={styles.links}>
        {socialItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={styles.iconButton}
            style={ICON_BUTTON_FALLBACK_STYLE}
            aria-label={item.label}
            title={item.label}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            <ContactIcon id={item.id} />
          </a>
        ))}

        {emailItem ? (
          <div className={styles.emailWrap} ref={emailWrapRef}>
            <button
              ref={emailButtonRef}
              type="button"
              className={`${styles.iconButton} ${emailOpen ? styles.emailButtonExpanded : ""}`}
              style={emailOpen ? undefined : ICON_BUTTON_FALLBACK_STYLE}
              aria-label="Email"
              aria-expanded={emailOpen}
              title={emailOpen ? "Hide email options" : "Email"}
              onClick={toggleEmail}
            >
              <ContactIcon id="email" />
              {emailOpen && emailValue ? (
                <span className={styles.emailInline}>{emailValue}</span>
              ) : null}
            </button>

            {emailOpen && emailValue ? (
              <div className={styles.emailActions}>
                <button
                  type="button"
                  className={`${styles.copyButton} ${
                    copyState === "copied"
                      ? styles.copySuccess
                      : copyState === "error"
                        ? styles.copyError
                        : ""
                  }`}
                  aria-label="Copy email address"
                  title="Copy email address"
                  onClick={handleCopy}
                >
                  {copyState === "copied"
                    ? "Copied"
                    : copyState === "error"
                      ? "Copy failed"
                      : "Copy"}
                </button>
                <a
                  href={emailItem.href}
                  className={styles.mailAction}
                  title={emailItem.actionLabel ?? "Open mail app"}
                >
                  {emailItem.actionLabel ?? "Open mail app"}
                </a>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
