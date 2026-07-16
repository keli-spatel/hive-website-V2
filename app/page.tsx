import Image from "next/image";
import { Phone } from "lucide-react";
import { featuredProjects, homeIndustries, homeServices, whyHiveReasons } from "./data/home";
import { SCHEDULE_CALL_URL } from "./data/site";
import { AnimatedButton } from "./components/ui/AnimatedButton";
import { AnimatedExpertiseItem } from "./components/ui/AnimatedExpertiseItem";
import ServiceSlider from "./components/ServiceSlider";
import { ContactCard } from "./components/ContactCard";
import CaseStudyShowcase from "./components/CaseStudyShowcase";
import { AboutPreviewSection } from "./components/sections/AboutPreviewSection";
import { HomeBlogSection } from "./components/sections/HomeBlogSection";
import { ClientsSection } from "./components/sections/ClientsSection";
import { QuoteForm } from "./components/forms/QuoteForm";
import { listPublishedPosts } from "@/lib/repo";

export const revalidate = 300;

export default async function HomePage() {
  const latestPosts = await listPublishedPosts({ limit: 3 });

  return (
    <main className="home">
      <section className="hero-section" id="hero">
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-layout">
            <div className="hero-copy">
              <h1>
                Siemens Industrial <br></br>
                <span className="hero-highlight">Automation</span>
                Solutions Expert
              </h1>
              <p>
                India&apos;s trusted Siemens PLC, SCADA & DCS automation experts delivering
                turnkey industrial solutions for Pharma, Oil & Gas, and more.
              </p>
              <div className="action-row hero-actions">
                <AnimatedButton href="/our-project">
                  View Our Projects
                </AnimatedButton>
                <AnimatedButton
                  href={SCHEDULE_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  icon={<Phone />}
                  className="hero-consultation-button"
                >
                  Schedule a Call
                </AnimatedButton>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-visual-frame">
                <Image
                  src="/hero-advanced-factory-automation.jpg"
                  alt="Advanced factory automation robotic arm operating on a modern industrial production line"
                  fill
                  priority
                  className="hero-visual-image"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-strip" aria-label="Our Expertise">
        <div className="strip-inner justify-center">
          <div className="expertise-row">
            {homeIndustries.map((industry) => (
              <AnimatedExpertiseItem
                key={industry.name}
                icon={<industry.icon size={24} />}
                text={industry.name}
              />
            ))}
          </div>
        </div>
      </section>

      <AboutPreviewSection readMoreHref="/about" />

      <ServiceSlider services={homeServices} />

      <CaseStudyShowcase projects={featuredProjects} />

      <HomeBlogSection posts={latestPosts} />

      <section className="section why-section why-section-dark" id="why-hive">
        <div className="container why-layout">
          <div className="why-intro">
            <p className="section-label">Why Partner with Hive Automation?</p>
            <h2>Expert Siemens Automation Engineering with Real-World Results</h2>
            <p>
              We&apos;re not just system integrators - we&apos;re long-term engineering partners
              committed to your plant&apos;s performance, reliability, and growth. Here&apos;s why top
              players in Oil & Gas, Pharma, and Food Processing trust us with critical automation systems.
            </p>
            <div className="why-visual">
              <Image
                src="/contact-agent.jpg"
                alt="Hive Automation engineer consultation specialist"
                width={400}
                height={457}
                className="why-illustration"
              />
            </div>
          </div>
          <div className="why-copy">
            <div className="reason-list">
              {whyHiveReasons.map((item) => (
                <article className="reason-item" key={item.title} tabIndex={0}>
                  <span className="reason-corner reason-corner-top" aria-hidden="true" />
                  <span className="reason-corner reason-corner-bottom" aria-hidden="true" />
                  <div className="reason-title-row">
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
            <div className="action-row why-actions">
              <AnimatedButton href={SCHEDULE_CALL_URL} target="_blank" rel="noopener noreferrer" icon={<Phone />}>
                Let&apos;s Talk
              </AnimatedButton>
              <AnimatedButton href="/about" variant="secondary" className="why-read-more-btn">
                Read More
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      <ClientsSection id="clients-carousel" />

      <section className="section quote-section" id="quote">
        <div className="container">
          <ContactCard
            imageSrc="/quote-agent.webp"
          >
            <QuoteForm />
          </ContactCard>
        </div>
      </section>
    </main>
  );
}
