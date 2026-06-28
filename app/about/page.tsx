import Image from "next/image";
import Link from "next/link";
import {
  HelpCircle,
  Phone,
  TrendingUp,
} from "lucide-react";
import {
  aboutExpertise,
  aboutFaqs,
  aboutHighlights,
  aboutIndustries,
  aboutReasons,
  aboutResults,
  technologyGroups,
} from "../data/about";
import { SCHEDULE_CALL_URL } from "../data/site";
import { CountUp } from "../components/ui/CountUp";
import { FaqAccordion } from "../components/FaqAccordion";
import { AnimatedButton } from "../components/ui/AnimatedButton";
import { AboutPreviewSection } from "../components/sections/AboutPreviewSection";
import { ClientsSection } from "../components/sections/ClientsSection";

export default function AboutPage() {
  return (
    <main className="about-page" style={{ marginTop: 50 }}>
      <section className="about-hero">
        <div className="container about-hero-inner">
          <div className="about-hero-copy">
            <div className="about-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>
            <h1>About Hive Automation</h1>
            <p>
              India&apos;s trusted industrial automation partner, delivering precision engineering
              solutions since 2017.
            </p>
          </div>
          <div className="about-highlight-grid about-hero-stats" aria-label="Hive Automation highlights">
            {aboutHighlights.map((item) => (
              <article className="about-highlight-card" key={item.label}>
                <CountUp end={item.value} suffix="+" />
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AboutPreviewSection readMoreHref="#mission" />

      <section className="section about-mission-section" id="mission">
        <div className="container about-mission-layout">
          <div className="about-mission-copy">
            <p className="section-label">Our Mission</p>
            <h2>Empowering Manufacturing with Smart Automation</h2>
            <p>
              Hive Automation is a trusted industrial automation company specializing in Siemens
              PLC programming, SCADA system integration, and process control solutions. Our mission
              is to empower manufacturing with smart automation systems that optimize operations,
              enhance efficiency, and minimize industrial downtime across India.
            </p>
            <p>
              We provide expert services for Siemens PLCs, SCADA, and DCS platforms, having
              successfully delivered turnkey automation projects for diverse industries. Our
              commitment to industrial compliance, innovation, and safety ensures high-performance
              results in a rapidly evolving industrial automation landscape.
            </p>
          </div>
          <div className="about-mission-media">
            <Image
              src="/about-bg.png"
              alt="Industrial automation engineer working with Siemens control systems"
              width={720}
              height={720}
              className="about-mission-image"
            />
          </div>
        </div>
      </section>

      <section className="section about-who-section" id="who-we-are">
        <div className="container about-who-statement">
          <div className="about-who-heading">
            <div className="about-who-icon" aria-hidden="true">
              <HelpCircle size={72} strokeWidth={1.2} />
            </div>
            <p className="section-label">Our Story</p>
            <h2>Who We Are</h2>
          </div>
          <div className="about-who-body">
            <p>
              Hive Automation LLP was founded with a vision to transform industrial operations
              through advanced automation technologies.
            </p>
            <p>
              We help industries streamline processes, improve operational visibility, reduce
              downtime, and maximize production efficiency through reliable automation systems.
            </p>
            <p>
              From small-scale control systems to large industrial automation projects, we provide
              complete engineering support including design, development, programming,
              commissioning, and maintenance.
            </p>
            <p>
              Our focus remains on delivering practical, scalable, and future-ready automation
              solutions that create measurable business value.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt about-journey-section" id="journey">
        <div className="container about-journey-layout">
          <div className="about-journey-steps">
            <article className="about-journey-step">
              <span>01</span>
              <div>
                <h3>Built on Siemens Automation</h3>
                <p>Started with practical PLC programming and process control engineering.</p>
              </div>
            </article>
            <article className="about-journey-step">
              <span>02</span>
              <div>
                <h3>Expanded Across Industries</h3>
                <p>Delivered automation projects across pharma, oil & gas, chemical, and manufacturing plants.</p>
              </div>
            </article>
            <article className="about-journey-step">
              <span>03</span>
              <div>
                <h3>Driving Digital Transformation</h3>
                <p>Now helping clients build reliable, visible, and connected industrial systems.</p>
              </div>
            </article>
          </div>
          <div className="about-journey-copy">
            <p className="section-label">Our Journey</p>
            <h2>Helping Industries Embrace Digital Transformation</h2>
            <p>
              Since our inception, Hive Automation has been committed to helping industries embrace
              digital transformation through automation. Over the years, we have successfully executed
              automation projects across various sectors, supporting businesses in achieving improved
              process control, operational efficiency, and production consistency.
            </p>
            <p>
              Today, we continue to leverage the latest automation technologies to help clients stay
              competitive in an evolving industrial landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-expertise-section" id="expertise">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Our Industrial Automation Expertise</p>
            <h2>End-to-End Solutions for Plant Performance</h2>
            <p>
              We provide end-to-end industrial automation solutions designed to optimize plant
              performance and operational reliability.
            </p>
          </div>
          <div className="about-card-grid">
            {aboutExpertise.map((item) => (
              <article className="about-feature-card" key={item.title}>
                <div className="about-card-icon">
                  <item.icon size={26} strokeWidth={1.7} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-steel about-industries-section" id="industries">
        <div className="container">
          <div className="about-sector-layout">
            <div className="about-sector-lead">
              <p className="section-label">Industries We Serve</p>
              <h2>Tailored Automation for Specific Industry Requirements</h2>
              <p>
                Every industry has unique operational challenges. Our solutions are tailored to meet
                specific industry requirements while ensuring performance, compliance, and reliability.
              </p>
            </div>
            <div className="about-industry-map">
              {aboutIndustries.map((item, index) => (
                <article className="about-industry-card" key={item.title} style={{ animationDelay: `${index * 70}ms` }}>
                  <span className="about-industry-index">0{index + 1}</span>
                  <div className="about-industry-icon">
                    <item.icon size={26} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section why-section" id="why-choose-hive">
        <div className="container why-layout">
          <div className="why-copy">
            <p className="section-label">Why Choose Hive Automation</p>
            <h2>Engineering Expertise Built Around Your Plant Goals</h2>
            <div className="reason-list">
              {aboutReasons.map((item) => (
                <article className="reason-item" key={item.title}>
                  <div className="reason-title-row">
                    <item.icon size={22} strokeWidth={1.8} />
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="why-visual">
            <Image
              src="/contact-agent.jpg"
              alt="Hive Automation technical consultation"
              width={560}
              height={640}
              className="why-illustration"
            />
          </div>
        </div>
      </section>

      <section className="section about-tech-section" id="technologies">
        <div className="container">
          <div className="section-heading about-tech-heading">
            <p className="section-label">Tech Stack</p>
            <h2>Automation Technologies We Work With</h2>
          </div>
          <div className="about-tech-card-grid">
            {technologyGroups.map((group) => (
              <article className="about-tech-simple-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-steel" id="results">
        <div className="container split-grid">
          <div>
            <p className="section-label">Delivering Measurable Results</p>
            <h2>Automation Outcomes That Improve Plant Performance</h2>
            <p>
              Our automation solutions help clients improve operational reliability, production
              consistency, and digital readiness across critical industrial environments.
            </p>
          </div>
          <div className="about-results-list">
            {aboutResults.map((item) => (
              <div key={item}>
                <TrendingUp size={20} strokeWidth={1.8} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection id="about-clients" />

      <section className="section" id="about-faq">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Frequently Asked Questions</p>
            <h2>Industrial Automation Questions, Answered</h2>
          </div>
          <FaqAccordion items={aboutFaqs} />
        </div>
      </section>

      <section className="section about-cta-section" id="about-cta">
        <div className="container">
          <p className="section-label">Ready to Transform Your Industrial Operations?</p>
          <h2>Partner with Hive Automation for Reliable Automation Support</h2>
          <p>
            Get Siemens PLC expertise, complete industrial automation support, and solutions tailored
            to your business needs.
          </p>
          <div className="action-row about-cta-actions">
            <AnimatedButton href="/contact">Contact Our Automation Experts</AnimatedButton>
            <AnimatedButton href={SCHEDULE_CALL_URL} target="_blank" rel="noopener noreferrer" variant="secondary" icon={<Phone />}>
              Discuss Your Project
            </AnimatedButton>
          </div>
        </div>
      </section>
    </main>
  );
}
