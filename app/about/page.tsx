"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Coffee,
  Cpu,
  Factory,
  FlaskConical,
  Fuel,
  LifeBuoy,
  MonitorSmartphone,
  Network,
  PanelTop,
  Phone,
  Server,
  Settings,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import AnimatedStats from "../components/AnimatedStats";
import { ClientCarousel } from "../components/ui/cases-with-infinite-scroll";
import { AnimatedButton } from "../components/ui/AnimatedButton";

const scheduleUrl = "https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation";

function useInView() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.08 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function AboutCounter({ end, suffix = "+", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const incrementTime = 30;
    const totalSteps = duration / incrementTime;
    const increment = end / totalSteps;

    const timer = window.setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        window.clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => window.clearInterval(timer);
  }, [duration, end, inView]);

  return (
    <strong ref={ref}>
      {count}
      {suffix}
    </strong>
  );
}

const highlights = [
  { value: 8, label: "Years Industry Experience" },
  { value: 500, label: "Automation Projects Delivered" },
  { value: 50, label: "Industrial Clients" },
  { value: 10, label: "Major Industries Served" },
];

const expertise = [
  {
    icon: Cpu,
    title: "PLC Programming & Integration",
    desc: "Custom Siemens PLC programming and integration services for machine automation and process control applications.",
  },
  {
    icon: MonitorSmartphone,
    title: "SCADA & HMI Development",
    desc: "Advanced monitoring and visualization systems that provide real-time operational insights and control.",
  },
  {
    icon: Server,
    title: "DCS Engineering",
    desc: "Distributed Control System solutions designed for complex process industries requiring high reliability and scalability.",
  },
  {
    icon: Network,
    title: "Industrial Networking",
    desc: "Industrial communication infrastructure that ensures seamless connectivity across automation systems.",
  },
  {
    icon: PanelTop,
    title: "Control Panel Engineering & Manufacturing",
    desc: "Design, development, testing, and commissioning of industrial control panels.",
  },
  {
    icon: Workflow,
    title: "Turnkey Automation Projects",
    desc: "Complete project execution from concept design to commissioning and ongoing support.",
  },
];

const industries = [
  {
    icon: FlaskConical,
    title: "Pharmaceutical Industry Automation",
    desc: "GMP-compliant automation solutions that ensure product quality, process consistency, and regulatory compliance.",
  },
  {
    icon: Fuel,
    title: "Oil & Gas Automation Solutions",
    desc: "Automation systems that enhance safety, monitoring, production efficiency, and operational reliability.",
  },
  {
    icon: ShieldCheck,
    title: "Chemical Plant Automation",
    desc: "Advanced process control solutions that optimize production while maintaining operational safety standards.",
  },
  {
    icon: Factory,
    title: "Manufacturing Industry Automation",
    desc: "Smart automation technologies that increase productivity, reduce manual intervention, and improve equipment effectiveness.",
  },
  {
    icon: Coffee,
    title: "Food & Beverage Automation",
    desc: "Reliable automation systems that enhance product quality and improve production efficiency.",
  },
];

const reasons = [
  {
    icon: Settings,
    title: "Siemens Technology Expertise",
    desc: "Extensive experience with Siemens PLCs, SCADA systems, HMI development, and industrial communication networks.",
  },
  {
    icon: Users,
    title: "Experienced Automation Engineers",
    desc: "A highly skilled engineering team with deep expertise in industrial automation project execution.",
  },
  {
    icon: Target,
    title: "Customized Automation Solutions",
    desc: "Every project is designed around the client's specific operational goals and business requirements.",
  },
  {
    icon: Workflow,
    title: "End-to-End Project Delivery",
    desc: "Comprehensive support from system design and development to commissioning and post-project maintenance.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Technical Support",
    desc: "Ongoing troubleshooting, upgrades, maintenance, and optimization services after project completion.",
  },
];

const technologyGroups = [
  {
    icon: Cpu,
    title: "Siemens PLC Systems",
    items: ["Siemens S7-200 Smart", "Siemens S7-1200 G1/G2", "Siemens S7-1500 R/H/FH", "Siemens ET200SP Series", "Siemens S7-400", "Siemens S7-300"],
  },
  {
    icon: MonitorSmartphone,
    title: "HMI / SCADA Platforms",
    items: ["Siemens WinCC Explorer", "WinCC Advance", "WinCC Unified", "KTP / TP / MTP HMI"],
  },
  {
    icon: Server,
    title: "DCS Solutions",
    items: ["Siemens PCS 7", "Siemens PCS 7 neo", "ET200SP HA / PA"],
  },
  {
    icon: Settings,
    title: "Engineering Software",
    items: ["TIA Portal", "SIMATIC Manager", "WinCC Professional", "TIA WinCC Advance"],
  },
];

const results = [
  "Reduce operational downtime",
  "Improve process consistency",
  "Increase production efficiency",
  "Enhance plant safety",
  "Optimize resource utilization",
  "Accelerate digital transformation initiatives",
];

const faqs = [
  {
    q: "What industrial automation services does Hive Automation provide?",
    a: "We provide PLC programming, SCADA development, DCS integration, industrial networking, control panel engineering, and turnkey automation projects.",
  },
  {
    q: "Do you specialize in Siemens automation systems?",
    a: "Yes. We specialize in Siemens PLC programming, TIA Portal development, WinCC SCADA systems, and Siemens process automation technologies.",
  },
  {
    q: "Which industries do you serve?",
    a: "We serve pharmaceutical, chemical, manufacturing, oil & gas, food processing, and other process industries.",
  },
  {
    q: "Do you provide support after project completion?",
    a: "Yes. We offer ongoing maintenance, troubleshooting, upgrades, and technical support services.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page" style={{ marginTop: 82 }}>
      <section className="about-hero">
        <div className="container about-hero-inner">
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
      </section>

      <section className="section about-mission-section" id="mission">
        <div className="container about-mission-layout">
          <div className="about-mission-media">
            <Image
              src="/about-bg.png"
              alt="Industrial automation engineer working with Siemens control systems"
              width={720}
              height={720}
              className="about-mission-image"
            />
          </div>
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
        </div>
      </section>

      <section className="section section-steel about-highlights-section">
        <div className="container about-highlight-grid">
          {highlights.map((item) => (
            <article className="about-highlight-card" key={item.label}>
              <AboutCounter end={item.value} />
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-who-section" id="who-we-are">
        <div className="container about-who-statement">
          <div className="about-who-heading">
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
            {expertise.map((item) => (
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
              {industries.map((item, index) => (
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
              {reasons.map((item) => (
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
            {results.map((item) => (
              <div key={item}>
                <TrendingUp size={20} strokeWidth={1.8} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section clients-carousel-section" id="about-clients">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Our Clients</p>
            <h2>Trusted by Leading Companies &amp; Brands</h2>
          </div>
          <AnimatedStats compact />
          <ClientCarousel />
        </div>
      </section>

      <section className="section" id="about-faq">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Frequently Asked Questions</p>
            <h2>Industrial Automation Questions, Answered</h2>
          </div>
          <div className="about-faq-grid">
            {faqs.map((item) => (
              <details className="about-faq-card" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
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
            <AnimatedButton href={scheduleUrl} target="_blank" rel="noopener noreferrer" variant="secondary" icon={<Phone />}>
              Discuss Your Project
            </AnimatedButton>
          </div>
        </div>
      </section>
    </main>
  );
}
