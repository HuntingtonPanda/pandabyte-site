import Image from "next/image";

import { RESUME_PATH } from "@/lib/site-content";
import styles from "@/styles/hero.module.css";

export function Hero() {
  return (
    <div className={styles.heroGrid}>
      <div className={styles.copy}>
        <span className={styles.badge}>
          <span className={styles.pulse} />
          Software Engineer · Mobile + Full-stack
        </span>
        <h1 id="home-heading" className={styles.title}>
          Hi, I&apos;m{" "}
          <span className={styles.accent}>Huntington</span>
          <br />
          Co.
        </h1>
        <p className={styles.description}>
          I build mobile and web products with calm UX and reliable backends —
          the kind students actually keep on their home screen.
        </p>
        <div className={styles.heroMeta}>
          <span>Regents Scholar @ UCLA</span>
          <span className={styles.metaDot} />
          <span>React Native · Next.js · Postgres</span>
          <span className={styles.metaDot} />
          <span>Los Angeles, CA</span>
        </div>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryAction}>
            View Projects →
          </a>
          <a href="#contact" className={styles.secondaryAction}>
            Get in touch
          </a>
          <a
            href={RESUME_PATH}
            className={styles.ghostAction}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </a>
        </div>
      </div>

      <div className={styles.visualWrap}>
        <div className={styles.terminalCard}>
          <div className={styles.terminalBar}>
            <div className={styles.terminalDots}>
              <span />
              <span />
              <span />
            </div>
            <span>~/pandabyte/main.tsx</span>
            <span>{"{}"}</span>
          </div>
          <div className={styles.terminalBody}>
            <Image
              src="/PandaDrawing.png"
              alt="PandaByte mascot – portfolio of Huntington Co"
              fill
              priority
              sizes="(min-width: 1200px) 420px, (min-width: 768px) 340px, 90vw"
              style={{ objectFit: "contain", padding: "1rem 1.5rem 0" }}
            />
          </div>
          <div className={styles.terminalFoot}>
            <span>
              <strong>● ready</strong> · build passing
            </span>
            <span>v0.1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
