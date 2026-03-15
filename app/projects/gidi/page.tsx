import Link from "next/link";
import type { Metadata } from "next";

import { PROJECTS, SITE_META } from "@/lib/site-content";
import styles from "@/styles/gidi-page.module.css";

const DESCRIPTION_VIDEO_ID = "Whvo1Hn9hA4";

const demoVideos = [
  {
    title: "Aggressive Forward View Demo",
    youtubeId: "pdAu52snwMw",
  },
  {
    title: "Single Targeting Forward View Demo",
    youtubeId: "Gro-poXg-d8",
  },
  {
    title: "Aggressive Mode (Side)",
    youtubeId: "SFtGVJGOvBk",
  },
  {
    title: "Single Targeting Mode (Side)",
    youtubeId: "qB-TwIiSClU",
  },
  {
    title: "Aggressive Mode (Computer Vision Demo)",
    youtubeId: "h4WF6-8e904",
  },
] as const;

const brickColors = ["red", "blue", "green", "white", "orange"] as const;

const leftRail = Array.from({ length: 14 }, (_, index) => ({
  key: `left-${index}`,
  color: brickColors[(index * 2) % brickColors.length],
  variant: index % 2 === 0 ? "square" : "rectangle",
  alignment: index % 3 === 0 ? "end" : "start",
}));

const rightRail = Array.from({ length: 14 }, (_, index) => ({
  key: `right-${index}`,
  color: brickColors[(index * 3 + 1) % brickColors.length],
  variant: index % 2 === 0 ? "rectangle" : "square",
  alignment: index % 3 === 0 ? "start" : "end",
}));

const brickColorClassName = {
  red: styles.brickRed,
  blue: styles.brickBlue,
  green: styles.brickGreen,
  white: styles.brickWhite,
  orange: styles.brickOrange,
} as const;

const gidiProject = PROJECTS.find((project) => project.slug === "gidi");

export const metadata: Metadata = {
  title: `GIDI | ${SITE_META.title}`,
  description:
    gidiProject?.summary ??
    "Guided Intruder Detection and Interception robotics project page.",
  alternates: {
    canonical: "/projects/gidi",
  },
};

function LegoRail({
  side,
}: {
  side: "left" | "right";
}) {
  const bricks = side === "left" ? leftRail : rightRail;

  return (
    <aside
      className={`${styles.rail} ${side === "left" ? styles.leftRail : styles.rightRail}`}
      aria-hidden="true"
    >
      <div className={styles.railStack}>
        {bricks.map((brick) => {
          const studCount = brick.variant === "rectangle" ? 2 : 1;

          return (
            <span
              key={brick.key}
              className={[
                styles.brick,
                brick.variant === "rectangle" ? styles.rectangle : styles.square,
                brick.alignment === "end" ? styles.alignEnd : styles.alignStart,
                brickColorClassName[brick.color],
              ].join(" ")}
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
}: {
  title: string;
  youtubeId: string;
  className?: string;
}) {
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

export default function GidiProjectPage() {
  const techStack = gidiProject?.tech ?? [
    "Python",
    "YOLOv8",
    "OpenCV",
    "Sensors",
    "LEGO Robotics",
  ];

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <LegoRail side="left" />

        <section className={styles.content}>
          <Link href="/#projects" className={styles.backLink}>
            Back to Projects
          </Link>

          <article className={styles.heroCard}>
            <p className={styles.eyebrow}>Robotics Project</p>
            <h1 className={styles.title}>Guided Intruder Detection and Interception</h1>
            <p className={styles.description}>
              GIDI is a LEGO robotics project that combines onboard sensors with
              YOLOv8 and OpenCV to detect, track, and target a selected
              individual. Once the system locks on, the robot advances and fires
              red toy balls from its mounted toy blaster to demonstrate guided
              interception behavior.
            </p>

            <div className={styles.techRow}>
              {techStack.map((tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </article>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Project Description Video</h2>
              <p className={styles.sectionCopy}>
                A short walkthrough of the project goals, hardware, and
                detection pipeline.
              </p>
            </div>

            <VideoEmbed
              title="Project Description Video"
              youtubeId={DESCRIPTION_VIDEO_ID}
            />
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Demo Videos</h2>
              <p className={styles.sectionCopy}>
                Forward-view and side-view tests showing aggressive pursuit and
                single-target locking from multiple angles.
              </p>
            </div>

            <div className={styles.videoGrid}>
              {demoVideos.map((video, index) => (
                <VideoEmbed
                  key={video.title}
                  title={video.title}
                  youtubeId={video.youtubeId}
                  className={
                    index === demoVideos.length - 1 && demoVideos.length % 2 === 1
                      ? styles.videoCardCentered
                      : undefined
                  }
                />
              ))}
            </div>
          </section>
        </section>

        <LegoRail side="right" />
      </div>
    </main>
  );
}
