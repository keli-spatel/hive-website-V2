import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Factory,
  MapPin,
  Sparkles,
  Workflow,
} from "lucide-react";
import AnimatedStats from "../AnimatedStats";
import { AnimatedButton } from "../ui/AnimatedButton";
import { ClientCarousel } from "../ui/cases-with-infinite-scroll";
import { FaqAccordion } from "../FaqAccordion";
import ProjectIoStats from "../ProjectIoStats";
import type {
  DetailedProjectConfig,
  RelatedProject,
  SnapshotIconKey,
} from "../../projects/project-data";

const iconMap: Record<SnapshotIconKey, ReactNode> = {
  factory: <Factory size={18} aria-hidden="true" />,
  calendar: <CalendarDays size={18} aria-hidden="true" />,
  workflow: <Workflow size={18} aria-hidden="true" />,
  map: <MapPin size={18} aria-hidden="true" />,
};

export default function PharmaceuticalProjectPage({
  projectConfig,
  relatedProjects,
  schema,
}: {
  projectConfig: DetailedProjectConfig;
  relatedProjects: RelatedProject[];
  schema: object;
}) {
  const project = projectConfig.data;
  const snapshotHighlights = project.snapshot.map((item, index) => ({
    ...item,
    icon: iconMap[projectConfig.snapshotIcons[index] ?? "workflow"],
  }));

  return (
    <div className="service-detail-page pharma-project-page" style={{ marginTop: 60 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="pharma-project-hero">
        <div className="container pharma-project-hero-inner">
          <nav className="pharma-project-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href="/our-project">Our Projects</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span>Pharmaceutical</span>
          </nav>

          <p className="section-label">{project.hero.label}</p>
          <h1>{project.hero.title}</h1>
          <p className="pharma-project-hero-copy" style={{ color: "#d6cece" }}>
            {project.hero.subtitle}
          </p>
          <div className="action-row pharma-project-hero-actions">
            
            <AnimatedButton href="/contact">
              Get a Quote
            </AnimatedButton>

            <AnimatedButton href="#project-overview" variant="outline-dark">
              View Project
            </AnimatedButton>
          </div>
        </div>
      </section>

      <section className="section pharma-project-overview-section" id="project-overview">
        <div className="container pharma-project-layout">
          <div className="pharma-project-main">
            <section className="pharma-project-block pharma-project-block-overview">
              <div className="pharma-overview-layout">
                <div className="pharma-overview-main">
                  <div className="pharma-story-layout">
                    <div className="pharma-story-head">
                      <p className="section-label">Project Overview</p>
                      <h2>Project Information</h2>
                    </div>
                    <div className="pharma-story-copy">
                      {project.projectInformation.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="pharma-snapshot-section">
                    <div className="pharma-snapshot-head">
                      <p className="section-label">Project Details</p>
                      <h2>Project Delivery Snapshot</h2>
                    </div>
                    <div className="pharma-snapshot-grid">
                      {snapshotHighlights.map((item) => (
                        <article className="pharma-snapshot-card" key={item.label}>
                          <div className="pharma-snapshot-icon">{item.icon}</div>
                          <div className="pharma-snapshot-copy">
                            <span>{item.label}</span>
                            <strong>{item.value}</strong>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>

                  <div className="pharma-architecture-section">
                    <div className="pharma-architecture-head">
                      <p className="section-label">System Architecture</p>
                      <h2>Technical Architecture</h2>
                    </div>
                    <div className="pharma-architecture-box">
                      {project.architecture.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <aside className="pharma-overview-gallery" aria-labelledby="pharma-gallery-title">
                  <div className="pharma-gallery-panel">
                    
                    <div className="pharma-gallery-grid">
                      {project.gallery.map((image) => (
                        <div className="pharma-gallery-card" key={image.src}>
                          <Image src={image.src} alt={image.alt} fill className="pharma-gallery-image" sizes="(max-width: 1023px) 100vw, 32vw" />
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="section pharma-project-detail-sections">
        <div className="container pharma-project-layout">
          <div className="pharma-project-main">
            <section className="pharma-project-block">
              <div className="pharma-section-head">
                <p className="section-label">Delivery Scope</p>
                <h2>Scope of Work & Key Deliverables</h2>
              </div>
              <ul className="pharma-bullet-list pharma-deliverables-grid">
                {project.scope.map((item) => (
                  <li className="pharma-deliverable-card" key={item.label}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
                  </li>
                ))}
              </ul>
            </section>

            <section className="pharma-project-block">
              <div className="pharma-section-head">
                <p className="section-label">Project Impact</p>
                <h2>Challenge & Outcome</h2>
              </div>
              <div className="pharma-outcome-grid">
                <article className="pharma-outcome-card pharma-outcome-card-challenge">
                  <div className="pharma-outcome-title-row">
                    <div className="pharma-outcome-icon" aria-hidden="true">
                      <CircleAlert size={22} strokeWidth={1.9} />
                    </div>
                    <h3>Challenge</h3>
                  </div>
                  <p>{project.challenge}</p>
                </article>
                <div className="pharma-outcome-flow" aria-hidden="true">
                  <span className="pharma-outcome-flow-track" />
                  <span className="pharma-outcome-flow-pulse" />
                  <span className="pharma-outcome-flow-core" />
                </div>
                <article className="pharma-outcome-card pharma-outcome-card-result">
                  <div className="pharma-outcome-title-row">
                    <div className="pharma-outcome-icon" aria-hidden="true">
                      <Sparkles size={22} strokeWidth={1.9} />
                    </div>
                    <h3>Outcome / Result</h3>
                  </div>
                  <p>{project.outcome}</p>
                </article>
              </div>
            </section>

            <section className="pharma-project-block">
              <div className="pharma-section-head">
                <p className="section-label">Process Coverage</p>
                <h2>Processes Automated</h2>
              </div>
              <ul className="pharma-process-list pharma-process-grid">
                {project.processes.map((item, index) => (
                  <li className="pharma-process-card" key={item}>
                    <span className="pharma-process-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pharma-project-block">
              <div className="pharma-section-head">
                <p className="section-label">I/O Summary</p>
                <h2>I/O Capacity & Configuration</h2>
              </div>
              <ProjectIoStats
                items={project.ioStats.map((stat) => ({
                  value: Number(stat.value),
                  label: stat.label,
                }))}
              />
            </section>
          </div>
        </div>
      </section>

      <section className="section pharma-related-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Related Projects</p>
            <h2>Explore More Industrial Automation Case Studies</h2>
          </div>
          <div className="pharma-related-scroll">
            {relatedProjects.map((item) => (
              <Link className="pharma-related-card" href={`/projects/${item.slug}`} key={item.slug}>
                <div className="pharma-related-thumb">
                  <Image src={item.image} alt={item.title} fill className="pharma-related-image" sizes="320px" />
                </div>
                <div className="pharma-related-body">
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="pharma-related-link">
                    <span>View Case Study</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="pharma-related-actions">
            <AnimatedButton href="/our-project">
              View All Projects
            </AnimatedButton>
          </div>
        </div>
      </section>

      <section className="section clients-carousel-section" id="project-clients">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Our Clients</p>
            <h2>Trusted by Leading Companies &amp; Brands</h2>
          </div>
          <AnimatedStats compact />
          <ClientCarousel />
        </div>
      </section>

      <section className="section pharma-faq-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Frequently Asked Questions</p>
            <h2>Pharmaceutical Automation Questions, Answered</h2>
          </div>
          <FaqAccordion items={project.faqs} />
        </div>
      </section>

      <section className="section about-cta-section" id="project-cta">
        <div className="container">
          <p className="section-label">Ready to Transform Your Industrial Operations?</p>
          <h2>Partner with Hive Automation for Reliable Automation Support</h2>
          <p>{project.cta.body}</p>
          <div className="action-row about-cta-actions">
            <AnimatedButton href="/contact">Get a Free Quote</AnimatedButton>
            <AnimatedButton href="/our-project" variant="secondary">
              View All Projects
            </AnimatedButton>
          </div>
        </div>
      </section>

      <style>{`
        .pharma-project-page .container {
          width: min(1500px, calc(100% - 32px));
        }

        .pharma-project-hero {
          background: #343433;
          padding: 76px 0 64px;
        }

        .pharma-project-hero-inner {
          max-width: 980px;
          text-align: center;
        }

        .pharma-project-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
          color: rgba(255, 255, 255, 0.74);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .pharma-project-breadcrumb a {
          color: rgba(255, 255, 255, 0.74);
          text-decoration: none;
        }

        .pharma-project-breadcrumb span {
          color: rgba(255, 255, 255, 0.9);
        }

        .pharma-project-hero h1 {
          margin: 0;
          color: #ffffff;
          font-size: var(--title-lg);
          font-weight: var(--weight-heavy);
          line-height: 1.08;
        }

        .pharma-project-hero-copy {
          max-width: 860px;
          margin: 18px auto 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: var(--home-copy-size);
          font-weight: var(--home-copy-weight);
          line-height: var(--home-copy-line);
        }

        .pharma-project-hero-actions {
          justify-content: center;
          margin-top: 32px;
        }

        .pharma-project-page .section {
          padding: 48px 0;
        }

        .pharma-project-overview-section {
          background: #ffffff;
        }

        .pharma-project-detail-sections {
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          border-top: 1px solid #eef2f6;
          border-bottom: 1px solid #eef2f6;
        }

        .pharma-project-detail-sections .pharma-project-main {
          gap: 70px;
        }

        .pharma-project-layout {
          display: block;
        }

        .pharma-project-main {
          min-width: 0;
          display: grid;
          gap: 32px;
          max-width: 1240px;
          margin: 0 auto;
        }

        .pharma-project-block {
          display: grid;
          gap: 20px;
          margin-bottom: 0;
        }

        .pharma-project-block h2 {
          margin: 0 0 16px;
          color: var(--black);
          font-size: var(--title-md);
          font-weight: var(--weight-heavy);
          line-height: 1.16;
        }

        .pharma-project-block p {
          margin: 0;
          color: var(--home-copy-color);
          font-size: var(--home-copy-size);
          font-weight: var(--home-copy-weight);
          line-height: var(--home-copy-line);
        }

        .pharma-section-head,
        .pharma-story-head,
        .pharma-architecture-head,
        .pharma-snapshot-head,
        .pharma-gallery-head {
          display: grid;
          gap: 1px;
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }

        .pharma-section-head {
          gap: 1px;
        }

        .pharma-section-head .section-label,
        .pharma-story-head .section-label,
        .pharma-architecture-head .section-label,
        .pharma-snapshot-head .section-label,
        .pharma-gallery-head .section-label {
          margin: 0 0 2px;
          line-height: 1;
        }

        .pharma-section-head h2,
        .pharma-story-head h2,
        .pharma-architecture-head h2,
        .pharma-snapshot-head h2,
        .pharma-gallery-head h2 {
          margin: 0;
          line-height: 1.08;
        }

        .pharma-section-head > p:not(.section-label),
        .pharma-story-head > p:not(.section-label),
        .pharma-architecture-head > p:not(.section-label),
        .pharma-snapshot-head > p:not(.section-label),
        .pharma-gallery-head > p:not(.section-label) {
          max-width: 680px;
          margin: 0 auto;
          color: var(--home-copy-color);
          font-size: var(--home-copy-size);
          font-weight: var(--home-copy-weight);
          line-height: var(--home-copy-line);
        }

        .pharma-story-layout {
          display: grid;
          gap: 24px;
          align-items: start;
        }

        .pharma-overview-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.8fr);
          gap: 32px;
          align-items: start;
        }

        .pharma-overview-main {
          display: grid;
          gap: 28px;
          min-width: 0;
        }

        .pharma-story-head {
          position: static;
          max-width: none;
          margin: 0;
          gap: 0;
          text-align: left;
        }

        .pharma-overview-main .pharma-architecture-head,
        .pharma-snapshot-head,
        .pharma-gallery-head {
          max-width: none;
          margin: 0;
          gap: 0;
          text-align: left;
        }

        .pharma-story-copy {
          position: relative;
          max-width: none;
          margin: 0;
          padding: 26px 28px;
          border: 1px solid #e4e9f0;
          border-radius: 18px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          box-shadow: 0 18px 42px rgba(17, 18, 20, 0.06);
          display: grid;
          gap: 18px;
        }

        .pharma-snapshot-section {
          display: grid;
          gap: 18px;
        }

        .pharma-snapshot-head h2,
        .pharma-gallery-head h2 {
          margin: 0;
          color: var(--black);
          font-size: var(--title-sm);
          font-weight: var(--weight-heavy);
          line-height: 1.16;
        }

        .pharma-snapshot-head p:not(.section-label),
        .pharma-gallery-head p:not(.section-label) {
          margin: 0;
          color: var(--home-copy-color);
          font-size: 15px;
          line-height: 1.7;
        }

        .pharma-snapshot-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .pharma-snapshot-card,
        .pharma-gallery-panel,
        .pharma-architecture-box,
        .pharma-outcome-card {
          border: 1px solid #e4e9f0;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 18px 42px rgba(17, 18, 20, 0.06);
        }

        .pharma-snapshot-card {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 14px;
          align-items: start;
          padding: 18px;
        }

        .pharma-snapshot-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(255, 52, 52, 0.08);
          color: var(--red);
        }

        .pharma-snapshot-copy {
          display: grid;
          gap: 6px;
        }

        .pharma-snapshot-copy span {
          color: #667085;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .pharma-snapshot-copy strong {
          color: var(--black);
          font-size: 15px;
          line-height: 1.6;
        }

        .pharma-architecture-section {
          display: grid;
          gap: 24px;
        }

        .pharma-overview-main .pharma-architecture-head {
          max-width: none;
          margin: 0;
          text-align: left;
        }

        .pharma-architecture-box {
          position: relative;
          overflow: hidden;
          max-width: none;
          margin: 0;
          padding: 26px 28px 26px 32px;
          display: grid;
          gap: 16px;
          background:
            linear-gradient(90deg, rgba(17, 18, 20, 0.04) 1px, transparent 1px),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          background-size: 52px 52px, auto;
        }

        .pharma-architecture-box::before {
          content: "";
          position: absolute;
          top: 20px;
          bottom: 20px;
          left: 0;
          width: 4px;
          border-radius: 0 999px 999px 0;
          background: linear-gradient(180deg, #ff3434 0%, #ff7a7a 100%);
        }

        .pharma-bullet-list,
        .pharma-process-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .pharma-bullet-list {
          display: grid;
          gap: 12px;
        }

        .pharma-deliverables-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0;
          border: 1px solid #dfe3ea;
          background: #ffffff;
        }

        .pharma-bullet-list li {
          display: grid;
          grid-template-columns: 18px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          color: var(--home-copy-color);
          font-size: var(--home-copy-size);
          line-height: var(--home-copy-line);
        }

        .pharma-deliverable-card {
          position: relative;
          overflow: hidden;
          min-height: 100%;
          padding: 20px 18px;
          border: 1px solid #dfe3ea;
          background: rgba(255, 255, 255, 0.94);
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease, background 220ms ease;
        }

        .pharma-deliverable-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 52, 52, 0.12), rgba(255, 122, 122, 0.03) 48%, transparent 100%);
          opacity: 0;
          transition: opacity 220ms ease;
          pointer-events: none;
        }

        .pharma-deliverable-card:hover {
          position: relative;
          z-index: 1;
          transform: translateY(-4px);
          border-color: rgba(255, 52, 52, 0.36);
          background: #ffffff;
          box-shadow: 0 22px 42px rgba(17, 18, 20, 0.12);
        }

        .pharma-deliverable-card:hover::before {
          opacity: 1;
        }

        .pharma-bullet-list svg {
          position: relative;
          z-index: 1;
          margin-top: 3px;
          color: var(--red);
          transition: transform 220ms ease, color 220ms ease;
        }

        .pharma-bullet-list a {
          position: relative;
          z-index: 1;
          color: inherit;
          text-decoration: none;
          transition: color 220ms ease;
        }

        .pharma-bullet-list a:hover,
        .pharma-bullet-list a:focus-visible {
          color: var(--red);
          text-decoration: underline;
          outline: none;
        }

        .pharma-deliverable-card span {
          position: relative;
          z-index: 1;
          transition: color 220ms ease;
        }

        .pharma-deliverable-card:hover svg {
          transform: translateY(-1px) scale(1.06);
          color: #ff2020;
        }

        .pharma-deliverable-card:hover span,
        .pharma-deliverable-card:hover a {
          color: #243042;
        }

        .pharma-process-list {
          display: grid;
          gap: 12px;
        }

        .pharma-process-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .pharma-process-list li {
          display: grid;
          grid-template-columns: 10px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          color: var(--home-copy-color);
          font-size: var(--home-copy-size);
          line-height: var(--home-copy-line);
        }

        .pharma-process-card {
          min-height: 100%;
          grid-template-columns: 54px minmax(0, 1fr) !important;
          gap: 16px !important;
          padding: 20px 20px 20px 18px;
          border: 1px solid #e4e9f0;
          border-radius: 18px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          box-shadow: 0 12px 30px rgba(17, 18, 20, 0.05);
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .pharma-process-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 52, 52, 0.28);
          box-shadow: 0 18px 36px rgba(17, 18, 20, 0.08);
        }

        .pharma-process-index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: rgba(255, 52, 52, 0.08);
          color: var(--red);
          font-size: 16px;
          font-weight: var(--weight-heavy);
          line-height: 1;
        }

        .pharma-outcome-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 88px minmax(0, 1fr);
          gap: 18px;
          align-items: center;
        }

        .pharma-outcome-card {
          padding: 22px 24px;
        }

        .pharma-outcome-flow {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100%;
        }

        .pharma-outcome-flow-track {
          width: 100%;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(255, 52, 52, 0.2) 0%, rgba(255, 52, 52, 0.9) 50%, rgba(54, 211, 153, 0.92) 100%);
        }

        .pharma-outcome-flow-pulse {
          position: absolute;
          left: 10px;
          width: 26px;
          height: 26px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.12) 68%, transparent 70%);
          filter: drop-shadow(0 0 12px rgba(255, 82, 82, 0.28));
          animation: pharmaOutcomeTraverse 3s ease-in-out infinite;
        }

        .pharma-outcome-flow-core {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ff3434 0%, #36d399 100%);
          box-shadow: 0 0 0 10px rgba(255, 52, 52, 0.08);
          animation: pharmaOutcomePulse 1.8s ease-in-out infinite;
        }

        @keyframes pharmaOutcomeTraverse {
          0% {
            transform: translateX(0) scale(0.96);
            opacity: 0.75;
          }
          50% {
            transform: translateX(42px) scale(1.08);
            opacity: 1;
          }
          100% {
            transform: translateX(78px) scale(0.96);
            opacity: 0.75;
          }
        }

        @keyframes pharmaOutcomePulse {
          0%, 100% {
            transform: scale(0.94);
            box-shadow: 0 0 0 8px rgba(255, 52, 52, 0.08);
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 0 0 14px rgba(54, 211, 153, 0.12);
          }
        }

        .pharma-outcome-card-challenge {
          background:
            linear-gradient(135deg, rgba(255, 52, 52, 0.06), transparent 45%),
            #ffffff;
        }

        .pharma-outcome-card-result {
          border-color: #2a2a2a;
          background:
            linear-gradient(135deg, rgba(255, 52, 52, 0.18), transparent 36%),
            linear-gradient(180deg, #171819 0%, #242629 100%);
          box-shadow: 0 24px 52px rgba(17, 18, 20, 0.16);
        }

        .pharma-outcome-title-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .pharma-outcome-card h3,
        .pharma-related-card h3 {
          margin: 0;
          color: var(--black);
          font-size: var(--title-xs);
          font-weight: var(--weight-bold);
          line-height: 1.28;
        }

        .pharma-outcome-card-result h3,
        .pharma-outcome-card-result p {
          color: #ffffff;
        }

        .pharma-outcome-card-result p {
          opacity: 0.82;
        }

        .pharma-outcome-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 16px;
          border: 1px solid rgba(255, 52, 52, 0.16);
          background: rgba(255, 52, 52, 0.08);
          color: var(--red);
          flex: 0 0 auto;
        }

        .pharma-outcome-card-result .pharma-outcome-icon {
          border-color: rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }

        .pharma-io-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .pharma-io-stat {
          min-height: 124px;
        }

        .pharma-io-stat strong {
          font-size: 38px;
        }

        .pharma-io-stat span {
          font-size: 11px;
          line-height: 1.45;
        }

        .pharma-gallery-grid {
          display: grid;
          gap: 16px;
        }

        .pharma-gallery-panel {
          position: sticky;
          top: 112px;
          margin-top: 85px;
          padding: 22px;
          display: grid;
          gap: 18px;
        }

        .pharma-gallery-card {
          position: relative;
          min-height: 340px;
          overflow: hidden;
          border: 1px solid #e4e9f0;
          border-radius: 18px;
          background: #f8fafc;
        }

        .pharma-gallery-image,
        .pharma-related-image {
          object-fit: cover;
        }

        .pharma-related-section .section-heading {
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .pharma-related-section .section-heading,
        .pharma-faq-section .section-heading {
          margin-bottom: 28px;
        }

        .pharma-related-scroll {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 18px;
        }

        .pharma-related-actions {
          display: flex;
          justify-content: center;
          margin-top: 28px;
        }

        .pharma-related-card {
          display: flex;
          flex-direction: column;
          width: min(320px, 100%);
          min-height: 100%;
          overflow: hidden;
          border: 1px solid #e4e9f0;
          border-radius: 18px;
          background: #ffffff;
          color: inherit;
          text-decoration: none;
          box-shadow: 0 14px 34px rgba(17, 18, 20, 0.06);
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .pharma-related-card:hover,
        .pharma-related-card:focus-visible {
          border-color: rgba(255, 52, 52, 0.28);
          box-shadow: 0 18px 38px rgba(17, 18, 20, 0.1);
          transform: translateY(-2px);
          outline: none;
        }

        .pharma-related-thumb {
          position: relative;
          min-height: 180px;
        }

        .pharma-related-body {
          display: grid;
          gap: 10px;
          padding: 18px 18px 20px;
        }

        .pharma-related-body > span {
          display: inline-flex;
          width: fit-content;
          border-radius: 999px;
          background: rgba(255, 52, 52, 0.08);
          color: var(--red);
          padding: 5px 10px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .pharma-related-body p {
          margin: 0;
          color: var(--home-copy-color);
          font-size: 14px;
          line-height: 1.65;
        }

        .pharma-related-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--red);
          font-size: 13px;
          font-weight: 700;
        }

        .pharma-faq-section {
          padding-bottom: 20px !important;
        }

        .pharma-project-page .about-cta-section {
          margin-top: 0;
          padding-top: 70px;
        }

        @media (max-width: 1023px) {
          .pharma-overview-layout,
          .pharma-deliverables-grid,
          .pharma-snapshot-grid,
          .pharma-process-grid,
          .pharma-io-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pharma-overview-layout {
            grid-template-columns: 1fr;
          }

          .pharma-gallery-panel {
            position: static;
          }
        }

        @media (max-width: 767px) {
          .pharma-project-page .container {
            width: min(1280px, calc(100% - 24px));
          }

          .pharma-project-hero {
            padding: 62px 0 54px;
          }

          .pharma-project-hero h1 {
            font-size: 34px;
          }

          .pharma-project-hero-copy {
            font-size: 15px;
          }

          .pharma-project-page .section {
            padding: 38px 0;
          }

          .pharma-outcome-grid,
          .pharma-snapshot-grid,
          .pharma-deliverables-grid,
          .pharma-gallery-grid,
          .pharma-process-grid,
          .pharma-io-grid {
            grid-template-columns: 1fr;
          }

          .pharma-outcome-flow {
            min-height: 54px;
          }

          .pharma-outcome-flow-track {
            width: 2px;
            height: 100%;
            min-height: 54px;
            background: linear-gradient(180deg, rgba(255, 52, 52, 0.2) 0%, rgba(255, 52, 52, 0.9) 50%, rgba(54, 211, 153, 0.92) 100%);
          }

          .pharma-outcome-flow-pulse {
            left: auto;
            top: 8px;
            animation: pharmaOutcomeTraverseMobile 3s ease-in-out infinite;
          }

          .pharma-gallery-card {
            min-height: 240px;
          }

          .pharma-snapshot-card,
          .pharma-gallery-panel,
          .pharma-outcome-card,
          .pharma-architecture-box {
            padding: 22px 20px;
          }
        }

        @keyframes pharmaOutcomeTraverseMobile {
          0% {
            transform: translateY(0) scale(0.96);
            opacity: 0.75;
          }
          50% {
            transform: translateY(14px) scale(1.08);
            opacity: 1;
          }
          100% {
            transform: translateY(30px) scale(0.96);
            opacity: 0.75;
          }
        }
      `}</style>
    </div>
  );
}
