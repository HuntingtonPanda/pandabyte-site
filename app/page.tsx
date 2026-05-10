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
            <div className={styles.aboutLayout}>
              {/* Left column */}
              <div className={styles.aboutLeft}>
                <p className={styles.eyebrow} id="about-heading">About</p>
                <h2 className={styles.aboutHeadline}>
                  Engineer First.<br />Product<br />Focused.
                </h2>
                <p className={styles.aboutCopy}>
                  From spec to release, I focus on clear user flows,
                  maintainable code, and fast iteration loops — building
                  the parts users feel and the parts that just have to work.
                </p>
                <div className={styles.aboutStats}>
                  <div className={styles.aboutStat}>
                    <span className={styles.aboutStatNumber}>5</span>
                    <span className={styles.aboutStatLabel}>Projects shipped or in flight</span>
                  </div>
                  <div className={styles.aboutStat}>
                    <span className={styles.aboutStatNumber}>4 yr</span>
                    <span className={styles.aboutStatLabel}>Building products end-to-end</span>
                  </div>
                  <div className={styles.aboutStat}>
                    <span className={styles.aboutStatNumber}>UCLA</span>
                    <span className={styles.aboutStatLabel}>Regents Scholar, CS</span>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className={styles.aboutRight}>
                <div className={styles.aboutPrinciple}>
                  <span className={styles.aboutPrincipleNum}>01</span>
                  <div>
                    <h3 className={styles.aboutPrincipleTitle}>Shipping Mindset</h3>
                    <p className={styles.aboutPrincipleDesc}>
                      Scoped milestones, rapid feedback loops, continuous refinement.
                      I&apos;d rather ship the second-best idea today than the best idea next month.
                    </p>
                  </div>
                </div>
                <div className={styles.aboutPrinciple}>
                  <span className={styles.aboutPrincipleNum}>02</span>
                  <div>
                    <h3 className={styles.aboutPrincipleTitle}>Reliability Discipline</h3>
                    <p className={styles.aboutPrincipleDesc}>
                      Typed interfaces, predictable state, backend guardrails.
                      UI feels calm because the system underneath is calm.
                    </p>
                  </div>
                </div>
                <div className={styles.aboutPrinciple}>
                  <span className={styles.aboutPrincipleNum}>03</span>
                  <div>
                    <h3 className={styles.aboutPrincipleTitle}>Product Taste</h3>
                    <p className={styles.aboutPrincipleDesc}>
                      Regents Scholar @ UCLA. Shipped Nibble with dietary filtering
                      and privacy-conscious architecture used by Bruin students.
                    </p>
                  </div>
                </div>
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
              description="Choose a category filter to browse relevant projects instantly."
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
            <div className={styles.contactPanel}>
              <SectionHeading
                id="contact-heading"
                eyebrow="Contact"
                title="Let's Build Something Useful."
                description="Reach out for internships, full-time opportunities, or collaboration."
                align="center"
                eyebrowVariant="dash"
              />
              <ContactLinks />
            </div>
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
