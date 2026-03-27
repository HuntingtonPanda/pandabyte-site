import Link from "next/link";
import type { CSSProperties } from "react";

import styles from "@/styles/project-showcase-page.module.css";

export interface ShowcaseVideo {
  title: string;
  youtubeId: string;
}

export interface ShowcaseSection {
  title: string;
  copy?: string;
  videos: readonly ShowcaseVideo[];
}

export interface ShowcaseRailColor {
  topColor: string;
  bottomColor: string;
  studColor?: string;
}

export interface ShowcaseRailBrick extends ShowcaseRailColor {
  key: string;
  variant: "square" | "rectangle";
  alignment: "start" | "end";
}

export type ShowcaseThemeStyle = CSSProperties & Record<`--${string}`, string>;

interface BuildShowcaseRailOptions {
  side: "left" | "right";
  palette: readonly ShowcaseRailColor[];
  count?: number;
  colorOffset?: number;
  colorStep?: number;
}

interface ProjectShowcasePageProps {
  eyebrow: string;
  title: string;
  description: string;
  techStack: readonly string[];
  sections: readonly ShowcaseSection[];
  themeStyle?: ShowcaseThemeStyle;
  leftRail?: readonly ShowcaseRailBrick[];
  rightRail?: readonly ShowcaseRailBrick[];
  backHref?: string;
  backLabel?: string;
}

export function buildShowcaseRail({
  side,
  palette,
  count = 14,
  colorOffset = 0,
  colorStep = side === "left" ? 2 : 3,
}: BuildShowcaseRailOptions): ShowcaseRailBrick[] {
  return Array.from({ length: count }, (_, index) => ({
    key: `${side}-${index}`,
    ...palette[(index * colorStep + colorOffset) % palette.length],
    variant:
      index % 2 === 0
        ? side === "left"
          ? "square"
          : "rectangle"
        : side === "left"
          ? "rectangle"
          : "square",
    alignment:
      index % 3 === 0
        ? side === "left"
          ? "end"
          : "start"
        : side === "left"
          ? "start"
          : "end",
  }));
}

function ShowcaseRail({
  bricks,
  side,
}: {
  bricks: readonly ShowcaseRailBrick[];
  side: "left" | "right";
}) {
  return (
    <aside
      className={`${styles.rail} ${side === "left" ? styles.leftRail : styles.rightRail}`}
      aria-hidden="true"
    >
      <div className={styles.railStack}>
        {bricks.map((brick) => {
          const studCount = brick.variant === "rectangle" ? 2 : 1;
          const brickStyle = {
            "--brick-top": brick.topColor,
            "--brick-bottom": brick.bottomColor,
            "--brick-stud": brick.studColor ?? "rgb(255 255 255 / 0.34)",
          } as ShowcaseThemeStyle;

          return (
            <span
              key={brick.key}
              className={[
                styles.brick,
                brick.variant === "rectangle" ? styles.rectangle : styles.square,
                brick.alignment === "end" ? styles.alignEnd : styles.alignStart,
              ].join(" ")}
              style={brickStyle}
            >
              <span className={styles.studs}>
                {Array.from({ length: studCount }, (_, studIndex) => (
                  <span key={`${brick.key}-stud-${studIndex}`} className={styles.stud} />
                ))}
              </span>
            </span>
          );
        })}
      </div>
    </aside>
  );
}

function VideoEmbed({
  title,
  youtubeId,
  className,
}: ShowcaseVideo & { className?: string }) {
  return (
    <div className={`${styles.videoCard} ${className ?? ""}`.trim()}>
      <p className={styles.videoLabel}>{title}</p>
      <div className={styles.videoFrame}>
        <iframe
          className={styles.videoEmbed}
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={`${title} YouTube video player`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export function ProjectShowcasePage({
  eyebrow,
  title,
  description,
  techStack,
  sections,
  themeStyle,
  leftRail = [],
  rightRail = [],
  backHref = "/#projects",
  backLabel = "Back to Projects",
}: ProjectShowcasePageProps) {
  return (
    <main className={styles.page} style={themeStyle}>
      <div className={styles.shell}>
        {leftRail.length > 0 ? <ShowcaseRail side="left" bricks={leftRail} /> : <div />}

        <section className={styles.content}>
          <Link href={backHref} className={styles.backLink}>
            {backLabel}
          </Link>

          <article className={styles.heroCard}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>

            <div className={styles.techRow}>
              {techStack.map((tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </article>

          {sections.map((section) => (
            <section key={section.title} className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {section.copy ? <p className={styles.sectionCopy}>{section.copy}</p> : null}
              </div>

              <div
                className={`${styles.videoGrid} ${
                  section.videos.length === 1 ? styles.singleVideoGrid : ""
                }`.trim()}
              >
                {section.videos.map((video, index) => (
                  <VideoEmbed
                    key={`${section.title}-${video.title}`}
                    title={video.title}
                    youtubeId={video.youtubeId}
                    className={
                      index === section.videos.length - 1 &&
                      section.videos.length % 2 === 1 &&
                      section.videos.length > 1
                        ? styles.videoCardCentered
                        : undefined
                    }
                  />
                ))}
              </div>
            </section>
          ))}
        </section>

        {rightRail.length > 0 ? <ShowcaseRail side="right" bricks={rightRail} /> : <div />}
      </div>
    </main>
  );
}
