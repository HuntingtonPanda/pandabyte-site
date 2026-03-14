import type { MetadataRoute } from "next";

import { PROJECTS, SITE_META } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/projects/nibble/delete-account",
    "/projects/campus-event-escrow/delete-account",
    "/projects/nibble/privacy",
    "/projects/campus-event-escrow/privacy",
    "/privacy/nibble_policy.html",
    "/privacy/campus_event_escrow_policy.html",
    "/terms/campus_event_escrow_terms.html",
  ];

  const projectRoutes = PROJECTS.map((project) => project.links.route);

  return [...new Set([...staticRoutes, ...projectRoutes])].map((path) => ({
    url: `${SITE_META.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
