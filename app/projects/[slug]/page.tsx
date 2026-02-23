import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComingSoonPage } from "@/components/projects/coming-soon-page";
import { ProjectChip } from "@/components/projects/project-chip";
import { PROJECTS, SITE_META } from "@/lib/site-content";
import styles from "@/styles/project-page.module.css";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const projectMap = new Map(PROJECTS.map((project) => [project.slug, project]));

function getProject(slug: string) {
  return projectMap.get(slug);
}

function isExternalUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: `Project Not Found | ${SITE_META.title}` };
  }

  return {
    title: `${project.title} | ${SITE_META.title}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  if (project.status === "coming-soon") {
    return <ComingSoonPage project={project} />;
  }

  const caseStudy = project.caseStudy;

  return (
    <main className={styles.page}>
      <div className="container">
        <article className={styles.panel}>
          <p className={styles.eyebrow}>Featured Project</p>
          <h1 className={styles.title}>{project.title}</h1>
          <span className={`${styles.statusBadge} ${styles.live}`}>Live</span>
          <p className={styles.summary}>{project.summary}</p>

          <div className={styles.contentBlock}>
            <h2 className={styles.subheading}>Overview</h2>
            <p className={styles.bodyCopy}>
              {caseStudy?.overview ??
                "Case study details for this project will be published soon."}
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2 className={styles.subheading}>Problem</h2>
            <p className={styles.bodyCopy}>
              {caseStudy?.problem ??
                "The problem statement for this project is being finalized."}
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2 className={styles.subheading}>Solution</h2>
            <p className={styles.bodyCopy}>
              {caseStudy?.solution ??
                "The implemented solution details for this project are coming soon."}
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2 id="architecture" className={styles.subheading}>
              Architecture
            </h2>
            <p className={styles.bodyCopy}>
              {caseStudy?.architecture ??
                "Architecture notes for this project will be added soon."}
            </p>
          </div>

          <div className={styles.contentBlock}>
            <h2 className={styles.subheading}>Tech Stack</h2>
            <div className={styles.chipRow}>
              {project.tech.map((tech) => (
                <ProjectChip key={`${project.slug}-${tech}`} label={tech} />
              ))}
            </div>
          </div>

          {caseStudy?.highlights?.length ? (
            <div className={styles.contentBlock}>
              <h2 className={styles.subheading}>Highlights</h2>
              <ul className={styles.highlights}>
                {caseStudy.highlights.map((highlight) => (
                  <li key={highlight} className={styles.highlightItem}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className={styles.contentBlock}>
            <h2 className={styles.subheading}>Links</h2>
            <div className={styles.actionRow}>
              <Link href="/#projects" className={styles.secondaryAction}>
                Back to Projects
              </Link>
              {project.links.demoUrl ? (
                isExternalUrl(project.links.demoUrl) ? (
                  <a
                    href={project.links.demoUrl}
                    className={styles.primaryAction}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Demo
                  </a>
                ) : (
                  <Link href={project.links.demoUrl} className={styles.primaryAction}>
                    Open Demo
                  </Link>
                )
              ) : null}
              {project.links.repoUrl ? (
                <a
                  href={project.links.repoUrl}
                  className={styles.secondaryAction}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repo
                </a>
              ) : null}
              {project.links.architectureUrl ? (
                isExternalUrl(project.links.architectureUrl) ? (
                  <a
                    href={project.links.architectureUrl}
                    className={styles.secondaryAction}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Architecture
                  </a>
                ) : (
                  <Link href={project.links.architectureUrl} className={styles.secondaryAction}>
                    Architecture
                  </Link>
                )
              ) : null}
              {project.links.privacyRoute ? (
                <Link href={project.links.privacyRoute} className={styles.secondaryAction}>
                  Privacy Policy
                </Link>
              ) : null}
              {project.links.deleteAccountRoute ? (
                <Link href={project.links.deleteAccountRoute} className={styles.secondaryAction}>
                  Delete Account
                </Link>
              ) : null}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
