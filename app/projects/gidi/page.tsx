import type { Metadata } from "next";

import {
  buildShowcaseRail,
  ProjectShowcasePage,
  type ShowcaseRailColor,
  type ShowcaseThemeStyle,
} from "@/components/projects/project-showcase-page";
import { PROJECTS, SITE_META } from "@/lib/site-content";

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

const gidiTheme = {
  "--showcase-page-bg": "#f3c93e",
  "--showcase-text": "#442300",
  "--showcase-back-color": "#613400",
  "--showcase-back-bg": "rgb(255 245 201 / 0.82)",
  "--showcase-back-border": "rgb(97 52 0 / 0.16)",
  "--showcase-back-shadow": "0 0.4rem 0.8rem rgb(106 56 0 / 0.08)",
  "--showcase-card-bg-start": "rgb(255 236 171 / 0.96)",
  "--showcase-card-bg-end": "rgb(247 209 91 / 0.96)",
  "--showcase-card-border": "rgb(97 52 0 / 0.16)",
  "--showcase-card-shadow": "0 1rem 2rem rgb(126 71 0 / 0.12)",
  "--showcase-card-inset": "inset 0 1px 0 rgb(255 255 255 / 0.45)",
  "--showcase-eyebrow": "#8a4200",
  "--showcase-title": "#5b2a00",
  "--showcase-body": "rgb(68 35 0 / 0.88)",
  "--showcase-tech-bg": "rgb(255 247 219 / 0.96)",
  "--showcase-tech-border": "rgb(97 52 0 / 0.14)",
  "--showcase-tech-color": "#6a3800",
  "--showcase-video-label": "#6a3800",
  "--showcase-video-frame-start": "rgb(214 159 22 / 0.96)",
  "--showcase-video-frame-end": "rgb(183 122 4 / 0.96)",
  "--showcase-video-frame-border": "rgb(90 44 0 / 0.16)",
  "--showcase-video-frame-shadow": "0 0.85rem 1.6rem rgb(126 71 0 / 0.12)",
  "--showcase-video-frame-inset": "inset 0 1px 0 rgb(255 232 172 / 0.4)",
} satisfies ShowcaseThemeStyle;

const gidiBrickPalette = [
  { topColor: "#ff8a65", bottomColor: "#d94a2d" },
  { topColor: "#96d2ff", bottomColor: "#4b82dc" },
  { topColor: "#95df74", bottomColor: "#54a131" },
  {
    topColor: "#fff4d7",
    bottomColor: "#e3d3a3",
    studColor: "rgb(255 255 255 / 0.28)",
  },
  { topColor: "#ffc56d", bottomColor: "#df8320" },
] satisfies readonly ShowcaseRailColor[];

const leftRail = buildShowcaseRail({
  side: "left",
  palette: gidiBrickPalette,
});

const rightRail = buildShowcaseRail({
  side: "right",
  palette: gidiBrickPalette,
  colorOffset: 1,
});

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

export default function GidiProjectPage() {
  const techStack = gidiProject?.tech ?? [
    "Python",
    "YOLOv8",
    "OpenCV",
    "Sensors",
    "LEGO Robotics",
  ];

  return (
    <ProjectShowcasePage
      eyebrow="Robotics Project"
      title="Guided Intruder Detection and Interception"
      description="GIDI is a LEGO robotics project that combines onboard sensors with YOLOv8 and OpenCV to detect, track, and target a selected individual. Once the system locks on, the robot advances and fires red toy balls from its mounted toy blaster to demonstrate guided interception behavior."
      techStack={techStack}
      sections={[
        {
          title: "Project Description Video",
          copy: "A short walkthrough of the project goals, hardware, and detection pipeline.",
          videos: [
            {
              title: "Project Description Video",
              youtubeId: DESCRIPTION_VIDEO_ID,
            },
          ],
        },
        {
          title: "Demo Videos",
          copy: "Forward-view and side-view tests showing aggressive pursuit and single-target locking from multiple angles.",
          videos: demoVideos,
        },
      ]}
      themeStyle={gidiTheme}
      leftRail={leftRail}
      rightRail={rightRail}
    />
  );
}
