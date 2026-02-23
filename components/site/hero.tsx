import Image from "next/image";

import { RESUME_PATH } from "@/lib/site-content";
import styles from "@/styles/hero.module.css";

export function Hero() {
  return (
    <div className={`grid ${styles.heroGrid}`}>
      <div className={styles.copy}>
        <p className={styles.badge}>Software Engineer (Mobile + Full-stack)</p>
        <h1 id="home-heading" className={styles.title}>
          Hi, I&apos;m Huntington Co
        </h1>
        <p className={styles.description}>
          I build mobile and web products with clean UX and reliable backends.
        </p>
        <p className={styles.descriptionSecondary}>
          Regents Scholar @ UCLA | React Native, Next.js, Postgres/Supabase.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryAction}>
            View Projects
          </a>
          <a href="#contact" className={styles.secondaryAction}>
            Contact
          </a>
          <a
            href={RESUME_PATH}
            className={styles.ghostAction}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>

      <div className={styles.visualWrap}>
        <div className={styles.visual}>
          <Image
            src="/PandaDrawing.png"
            alt="Panda mascot illustration"
            fill
            priority
            sizes="(min-width: 1200px) 360px, (min-width: 768px) 280px, 220px"
          />
        </div>
      </div>
    </div>
  );
}
