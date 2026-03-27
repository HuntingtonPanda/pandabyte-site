import type { Metadata } from "next";

import {
  buildShowcaseRail,
  ProjectShowcasePage,
  type ShowcaseRailColor,
  type ShowcaseThemeStyle,
} from "@/components/projects/project-showcase-page";
import { PROJECTS, SITE_META } from "@/lib/site-content";

const DEMO_VIDEO_ID = "Df002OdxjGU";

const duckyProject = PROJECTS.find(
  (project) => project.slug === "campus-event-escrow",
);

const duckyTheme = {
  "--showcase-page-bg":
    "linear-gradient(180deg, rgb(8 31 61 / 0.98), rgb(11 37 69 / 1))",
  "--showcase-text": "rgb(238 244 237 / 0.96)",
  "--showcase-back-color": "rgb(255 224 120 / 0.98)",
  "--showcase-back-bg": "rgb(13 49 92 / 0.82)",
  "--showcase-back-border": "rgb(255 208 74 / 0.3)",
  "--showcase-back-shadow": "0 0.45rem 1rem rgb(3 14 28 / 0.3)",
  "--showcase-card-bg-start": "rgb(17 58 105 / 0.96)",
  "--showcase-card-bg-end": "rgb(12 39 74 / 0.98)",
  "--showcase-card-border": "rgb(141 169 196 / 0.24)",
  "--showcase-card-shadow": "0 1rem 2rem rgb(3 14 28 / 0.24)",
  "--showcase-card-inset": "inset 0 1px 0 rgb(255 236 171 / 0.08)",
  "--showcase-eyebrow": "#ffd85e",
  "--showcase-title": "rgb(238 244 237 / 0.98)",
  "--showcase-body": "rgb(221 232 244 / 0.88)",
  "--showcase-tech-bg": "rgb(255 211 76 / 0.12)",
  "--showcase-tech-border": "rgb(255 211 76 / 0.28)",
  "--showcase-tech-color": "#ffe28d",
  "--showcase-video-label": "#ffe28d",
  "--showcase-video-frame-start": "rgb(255 214 87 / 0.98)",
  "--showcase-video-frame-end": "rgb(223 164 18 / 0.98)",
  "--showcase-video-frame-border": "rgb(255 221 120 / 0.34)",
  "--showcase-video-frame-shadow": "0 0.95rem 1.7rem rgb(3 14 28 / 0.3)",
  "--showcase-video-frame-inset": "inset 0 1px 0 rgb(255 247 209 / 0.34)",
} satisfies ShowcaseThemeStyle;

const duckyBrickPalette = [
  {
    topColor: "#ffd85e",
    bottomColor: "#e1a60c",
    studColor: "rgb(255 249 219 / 0.42)",
  },
  { topColor: "#8da9c4", bottomColor: "#54779d" },
  { topColor: "#205493", bottomColor: "#13315c" },
  {
    topColor: "#eef4ed",
    bottomColor: "#b8c8d6",
    studColor: "rgb(255 255 255 / 0.3)",
  },
] satisfies readonly ShowcaseRailColor[];

const leftRail = buildShowcaseRail({
  side: "left",
  palette: duckyBrickPalette,
});

const rightRail = buildShowcaseRail({
  side: "right",
  palette: duckyBrickPalette,
  colorOffset: 1,
});

export const metadata: Metadata = {
  title: `Ducky's Money Bin | ${SITE_META.title}`,
  description:
    duckyProject?.summary ??
    "Campus event payments and escrow workflow for student organizations.",
  alternates: {
    canonical: "/projects/campus-event-escrow",
  },
};

export default function CampusEventEscrowProjectPage() {
  const techStack = duckyProject?.tech ?? [
    "React Native",
    "Expo",
    "TypeScript",
    "Stripe",
    "Supabase",
  ];

  return (
    <ProjectShowcasePage
      eyebrow="Mobile App Project"
      title="Ducky's Money Bin"
      description="Ducky's Money Bin is a campus event payments and escrow app built for student organizations that need clearer invite, signup, payment, and refund flows. It brings event participation and held-funds handling into one mobile experience so admins and members can move through paid events with less confusion."
      techStack={techStack}
      sections={[
        {
          title: "Demo Video",
          copy: "A quick walkthrough of the mobile flow for creating paid events, inviting members, and managing held funds with clearer refund expectations.",
          videos: [
            {
              title: "Ducky's Money Bin Demo",
              youtubeId: DEMO_VIDEO_ID,
            },
          ],
        },
      ]}
      themeStyle={duckyTheme}
      leftRail={leftRail}
      rightRail={rightRail}
    />
  );
}
