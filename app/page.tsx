import { ProjectCarousel } from "@/components/projects/project-carousel";
import { ContactLinks } from "@/components/site/contact-links";
import { Hero } from "@/components/site/hero";
import { SectionHeading } from "@/components/site/section-heading";
import { TopNav } from "@/components/site/top-nav";
import { SECTION_IDS } from "@/lib/site-content";
import styles from "@/styles/layout.module.css";

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <TopNav />
      <main className={styles.main}>
        <section
          id={SECTION_IDS.home}
          className={styles.section}
          aria-labelledby="home-heading"
        >
          <div className="container">
            <Hero />
          </div>
        </section>

        <section
          id={SECTION_IDS.about}
          className={`${styles.section} ${styles.sectionMuted}`}
          aria-labelledby="about-heading"
        >
          <div className="container">
            <div className={styles.aboutPanel}>
              <SectionHeading
                id="about-heading"
                eyebrow="About"
                title="Engineer First, Product Focused"
                description="I ship reliable mobile and web features with strong product thinking and backend discipline."
              />
              <div className={`grid ${styles.aboutGrid}`}>
                <p className={styles.aboutCopy}>
                  From spec to release, I focus on clear user flows,
                  maintainable code, and fast iteration loops.
                </p>
                <ul className={styles.aboutList}>
                  <li className={styles.aboutListItem}>
                    Shipping mindset: scoped milestones, rapid feedback, and
                    continuous refinement.
                  </li>
                  <li className={styles.aboutListItem}>
                    Reliability: typed interfaces, predictable state, and
                    backend guardrails.
                  </li>
                  <li className={styles.aboutListItem}>
                    Proof point: Regents Scholar @ UCLA; shipped Nibble with
                    dietary filtering and privacy-conscious architecture.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id={SECTION_IDS.projects}
          className={styles.section}
          aria-labelledby="projects-heading"
        >
          <div className="container">
            <SectionHeading
              id="projects-heading"
              eyebrow="Featured Work"
              title="Projects"
              description="Choose a device filter to browse relevant projects instantly."
            />
            <ProjectCarousel />
          </div>
        </section>

        <section
          id={SECTION_IDS.contact}
          className={`${styles.section} ${styles.sectionMuted}`}
          aria-labelledby="contact-heading"
        >
          <div className="container">
            <SectionHeading
              id="contact-heading"
              eyebrow="Contact"
              title="Let's Build Something Useful"
              description="Reach out for internships, full-time opportunities, or collaboration."
              align="center"
            />
            <ContactLinks />
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.footerText}>
            {currentYear} Huntington Co. Built with Next.js.
          </p>
        </div>
      </footer>
    </>
  );
}
