"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ── Animated counter hook ── */
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = 0;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(start + (end - start) * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

/* ── Section observer for animations ── */
function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

/* ── Service data ── */
const services = [
  {
    id: "plc",
    icon: "⚙️",
    title: "PLC Programming & Integration",
    desc: "Custom PLC programs tailored to your specific process and production goals. Our PLC logic design ensures industrial safety, flexibility, and high-performance system integration.",
  },
  {
    id: "dcs",
    icon: "🖥️",
    title: "Distributed Control Systems (DCS)",
    desc: "Robust Siemens PCS 7 and other DCS solutions that provide scalable, integrated control of complex industrial processes with accuracy and safety.",
  },
  {
    id: "scada",
    icon: "📊",
    title: "SCADA & HMI Development",
    desc: "Intuitive SCADA and HMI interfaces for real-time monitoring and control, designed for usability, data clarity, and enhanced operational safety.",
  },
  {
    id: "turnkey",
    icon: "🏗️",
    title: "Turnkey Project Execution",
    desc: "Complete automation solutions from early system design to final handover, ensuring consistency, reliability, and full accountability.",
  },
  {
    id: "upgrades",
    icon: "🔄",
    title: "System Upgrades & Retrofits",
    desc: "Upgrade aging control systems and legacy hardware to modern platforms like Siemens S7-1500 and TIA Portal with minimal downtime.",
  },
  {
    id: "networking",
    icon: "🔒",
    title: "Industrial Networking & Cybersecurity",
    desc: "Resilient, segmented, and secure industrial networks built for performance and uptime from control to enterprise level.",
  },
  {
    id: "analytics",
    icon: "📈",
    title: "Analytics & Reporting",
    desc: "Industrial reporting tools and dashboards giving your team real-time access to KPIs, historical trends, and compliance logs.",
  },
];

/* ── Projects data ── */
const projects = [
  {
    title: "GAMP 5 Compliant Pharma Automation",
    desc: "Achieved full FDA compliance with automated batch tracking & reporting.",
    tag: "Pharmaceutical",
  },
  {
    title: "Plant-Wide Process Control for Chemical Facilities",
    desc: "Integrated SIS & DCS for zero safety incidents over 3 years.",
    tag: "Chemical",
  },
  {
    title: "Precision Rotary Equipment Control for Refineries",
    desc: "Achieved 25% efficiency increase with predictive maintenance integration.",
    tag: "Oil & Gas",
  },
  {
    title: "Siemens PCS 7 DCS Implementation",
    desc: "Reduced downtime by 20% through legacy S5 to S7-1500 migration.",
    tag: "Oil & Gas",
  },
  {
    title: "Hydrogenation Plant Control & Safety",
    desc: "Delivered 99.5% uptime with advanced process safety management.",
    tag: "Chemical",
  },
  {
    title: "Asphalt Batching Plant Automation – 260 TPH",
    desc: "Full automation with real-time quality control.",
    tag: "Infrastructure",
  },
];

/* ── Why Hive data ── */
const whyHive = [
  { icon: "🎓", title: "Certified Siemens Experts", desc: "Deep, platform-specific expertise ensuring optimal configuration and lifecycle support." },
  { icon: "📋", title: "Industry-Specific Compliance", desc: "From GMP validation in Pharma to HAZOP compliance in Oil & Gas — built for your environment." },
  { icon: "🛠️", title: "Custom Engineered Solutions", desc: "No off-the-shelf templates. Every solution is crafted for your process, operations, and goals." },
  { icon: "🏭", title: "Turnkey Project Ownership", desc: "From functional specs to commissioning — single point of accountability and full transparency." },
  { icon: "✅", title: "Quality & Safety First", desc: "International engineering standards, clean documentation, and thorough testing." },
  { icon: "📞", title: "24/7 Technical Support", desc: "Remote support, preventive maintenance, diagnostics, and upgrades — always available." },
];

/* ── Industries ── */
const industries = [
  { label: "Pharmaceutical", icon: "💊" },
  { label: "Oil & Gas", icon: "🛢️" },
  { label: "Chemicals", icon: "⚗️" },
  { label: "Food & Beverages", icon: "🍔" },
  { label: "Forging", icon: "🔨" },
  { label: "Infrastructure", icon: "🏗️" },
];

/* ── Client Logos ── */
const clientLogosRow1 = [
  "/clients/client-1.png",
  "/clients/client-2.png",
  "/clients/client-3.png",
  "/clients/client-4.png",
  "/clients/client-5.png",
  "/clients/client-6.png",
  "/clients/client-7.png",
  "/clients/client-8.png",
  "/clients/client-9.png",
  "/clients/client-10.png",
  "/clients/client-12.png",
  "/clients/client-13.png",
  "/clients/client-14.png",
  "/clients/client-15.png",
];

const clientLogosRow2 = [
  "/clients/client-16.png",
  "/clients/client-17.png",
  "/clients/client-18.png",
  "/clients/client-19.png",
  "/clients/client-20.png",
  "/clients/client-22.png",
  "/clients/client-23.png",
  "/clients/client-24.png",
  "/clients/companys-1.png",
  "/clients/companys-2.png",
  "/clients/companys-3.png",
  "/clients/companys-4.png",
  "/clients/companys-5.png",
  "/clients/companys-6.png",
];

export default function HomePage() {
  const stats1 = useCounter(500);
  const stats2 = useCounter(50);
  const stats3 = useCounter(15);

  const heroRef = useInView();
  const aboutRef = useInView();
  const servicesRef = useInView();
  const projectsRef = useInView();
  const whyRef = useInView();
  const statsRef = useInView();

  return (
    <div style={{ marginTop: 72 }}>
      {/* ═══════ HERO SECTION ═══════ */}
      <section
        ref={heroRef.ref}
        id="hero"
        style={{
          position: "relative",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "linear-gradient(135deg, #1B1B1B 0%, #2a2a2a 100%)",
        }}
      >
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/hero-bg.png" alt="Industrial automation" fill style={{ objectFit: "cover", opacity: 0.25 }} priority />
        </div>
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: "linear-gradient(90deg, rgba(27,27,27,0.92) 0%, rgba(27,27,27,0.6) 60%, transparent 100%)",
          }}
        />
        {/* Decorative accent line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "20%",
            width: 4,
            height: "60%",
            background: "#FF3434",
            borderRadius: "0 4px 4px 0",
            zIndex: 2,
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 3,
            padding: "0 32px",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              maxWidth: 640,
              opacity: heroRef.inView ? 1 : 0,
              transform: heroRef.inView ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255, 52, 52, 0.15)",
                border: "1px solid rgba(255, 52, 52, 0.3)",
                borderRadius: 9999,
                padding: "6px 16px",
                marginBottom: 24,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF3434" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#FF3434", letterSpacing: 1, textTransform: "uppercase" }}>
                We Help Industries
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#FFFFFF",
                marginBottom: 24,
              }}
            >
              Siemens PLC &{" "}
              <span style={{ color: "#FF3434" }}>Industrial Automation</span> Solutions Expert
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: "28px",
                color: "#C5C1B9",
                marginBottom: 40,
                maxWidth: 520,
              }}
            >
              India&apos;s trusted Siemens PLC, SCADA & DCS automation experts delivering turnkey
              industrial solutions for Pharma, Oil & Gas, and more.
            </p>

            <div className="hero-buttons" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/projects" className="btn btn-primary" style={{ textDecoration: "none" }}>
                View Our Projects
              </Link>
              <Link
                href="https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  textDecoration: "none",
                  background: "transparent",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: 8,
                }}
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* ═══════ INDUSTRIES BAR ═══════ */}
      <section id="industries-bar" style={{ background: "#FFFFFF", padding: "32px 32px", borderBottom: "1px solid #DCDAD5" }}>
        <div
          className="container industries-container"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <span className="industries-label" style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#C5C1B9" }}>
            Industries We Serve
          </span>
          <div className="industries-divider" style={{ width: 1, height: 24, background: "#DCDAD5" }} />
          {industries.map((ind) => (
            <div
              key={ind.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 14,
                fontWeight: 500,
                color: "#1B1B1B",
              }}
            >
              <span style={{ fontSize: 18 }}>{ind.icon}</span>
              {ind.label}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ ABOUT SECTION ═══════ */}
      <section
        ref={aboutRef.ref}
        className="section"
        id="about-preview"
        style={{ background: "#FFFFFF" }}
      >
        <div
          className="container"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* Image side */}
          <div
            style={{
              position: "relative",
              borderRadius: 12,
              overflow: "hidden",
              opacity: aboutRef.inView ? 1 : 0,
              transform: aboutRef.inView ? "translateX(0)" : "translateX(-32px)",
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Image
              src="/about-bg.png"
              alt="Engineer programming Siemens PLC"
              width={560}
              height={400}
              style={{ width: "100%", height: "auto", borderRadius: 12 }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: 24,
                background: "#FF3434",
                borderRadius: 8,
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 20, fontWeight: 700, color: "#FFFFFF" }}>8+</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#FFFFFF" }}>Years of Excellence</span>
            </div>
          </div>

          {/* Text side */}
          <div
            style={{
              opacity: aboutRef.inView ? 1 : 0,
              transform: aboutRef.inView ? "translateX(0)" : "translateX(32px)",
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
            }}
          >
            <div className="section-label">About Us</div>
            <h2 style={{ marginBottom: 20 }}>
              India&apos;s Trusted Siemens Industrial Automation Experts
            </h2>
            <p style={{ color: "#1B1B1B", marginBottom: 16, lineHeight: "26px" }}>
              Hive Automation is a trusted industrial automation company specializing in Siemens PLC
              programming, SCADA system integration, and process control solutions. Our mission is
              to empower manufacturing with smart automation systems that optimize operations,
              enhance efficiency, and minimize industrial downtime across India.
            </p>
            <p style={{ color: "#5f5e5dff", marginBottom: 32, lineHeight: "24px", fontSize: 14 }}>
              We provide expert services for Siemens PLCs, SCADA, and DCS platforms, having
              successfully delivered turnkey automation projects for diverse industries.
            </p>

            {/* Feature pills */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
              {["Siemens Experts", "GAMP 5 Quality", "24/7 Support", "Precision Automation"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "8px 16px",
                      borderRadius: 9999,
                      background: "rgba(87, 94, 207, 0.08)",
                      color: "#575ECF",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/about" className="btn btn-primary" style={{ textDecoration: "none" }}>
                Read More
              </Link>
              <Link
                href="https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ textDecoration: "none" }}
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 799px) {
            #about-preview .container {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }
          @media (max-width: 599px) {
            .hero-buttons {
              flex-direction: column !important;
            }
            .hero-buttons .btn {
              width: 100% !important;
              text-align: center !important;
              justify-content: center !important;
            }
            .industries-container {
              justify-content: flex-start !important;
              gap: 16px !important;
            }
            .industries-label {
              width: 100% !important;
              text-align: center !important;
            }
            .industries-divider {
              display: none !important;
            }
          }
        `}</style>
      </section>

      {/* ═══════ SERVICES SECTION ═══════ */}
      <section
        ref={servicesRef.ref}
        className="section section-alt"
        id="services-preview"
      >
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Our Industrial Automation Services</div>
            <h2 style={{ marginBottom: 16 }}>
              Scalable Custom Engineering Solutions
            </h2>
            <p
              style={{
                maxWidth: 640,
                margin: "0 auto",
                color: "#5f5e5dff",
                fontSize: 14,
                lineHeight: "22px",
              }}
            >
              From initial system design to full-scale implementation and lifecycle support. Deep
              expertise in Siemens PLC programming, SCADA integration, and DCS platforms.
            </p>
          </div>

          <div
            className="stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className="card card-interactive"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  opacity: servicesRef.inView ? 1 : 0,
                  transform: servicesRef.inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 80}ms`,
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(255, 52, 52, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                  }}
                >
                  {svc.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, lineHeight: "24px" }}>{svc.title}</h3>
                <p style={{ fontSize: 14, lineHeight: "22px", color: "#5f5e5dff", flex: 1 }}>
                  {svc.desc}
                </p>
                <Link
                  href={`/services#${svc.id}`}
                  style={{ fontSize: 13, fontWeight: 600, color: "#FF3434", textDecoration: "none" }}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/services" className="btn btn-ghost" style={{ textDecoration: "none" }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ PROJECTS SECTION ═══════ */}
      <section ref={projectsRef.ref} className="section" id="projects-preview">
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Our Proven Track Record</div>
            <h2 style={{ marginBottom: 16 }}>Delivering Excellence Across Industries</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {projects.map((proj, i) => (
              <div
                key={i}
                className="card card-interactive"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  opacity: projectsRef.inView ? 1 : 0,
                  transform: projectsRef.inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 80}ms`,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    color: "#575ECF",
                    background: "rgba(87, 94, 207, 0.08)",
                    padding: "4px 12px",
                    borderRadius: 9999,
                    alignSelf: "flex-start",
                  }}
                >
                  {proj.tag}
                </span>
                <h4 style={{ fontSize: 18, fontWeight: 600, lineHeight: "24px" }}>{proj.title}</h4>
                <p style={{ fontSize: 14, color: "#5f5e5dff", lineHeight: "22px" }}>{proj.desc}</p>
                <Link
                  href="/projects"
                  style={{ fontSize: 13, fontWeight: 600, color: "#FF3434", textDecoration: "none", marginTop: "auto" }}
                >
                  View Case Study →
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/projects" className="btn btn-primary" style={{ textDecoration: "none" }}>
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ WHY HIVE SECTION ═══════ */}
      <section ref={whyRef.ref} className="section section-alt" id="why-hive">
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Why Partner with Hive Automation?</div>
            <h2 style={{ marginBottom: 16 }}>
              Your Long-Term Engineering Partner
            </h2>
            <p
              style={{
                maxWidth: 640,
                margin: "0 auto",
                color: "#5f5e5dff",
                fontSize: 14,
                lineHeight: "22px",
              }}
            >
              We&apos;re not just system integrators — we&apos;re committed to your plant&apos;s
              performance, reliability, and growth.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {whyHive.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "24px",
                  borderRadius: 8,
                  border: "1px solid #DCDAD5",
                  background: "#FFFFFF",
                  opacity: whyRef.inView ? 1 : 0,
                  transform: whyRef.inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 80}ms`,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    minWidth: 48,
                    borderRadius: 12,
                    background: "rgba(255, 52, 52, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{item.title}</h4>
                  <p style={{ fontSize: 14, lineHeight: "22px", color: "#5f5e5dff" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about" className="btn btn-primary" style={{ textDecoration: "none" }}>
              Read More
            </Link>
            <Link
              href="https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ textDecoration: "none" }}
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Logo Marquee */}
          <div style={{ marginTop: 56, borderTop: "1px solid #DCDAD5", paddingTop: 40 }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#7F7D7A" }}>
                Trusted by 50+ Leading Companies &amp; Brands
              </span>
            </div>
            <div className="marquee-container">
              <div className="marquee-row marquee-row-left">
                {[...clientLogosRow1, ...clientLogosRow1].map((src, idx) => (
                  <div key={`logo-r1-${idx}`} className="marquee-logo-wrapper">
                    <img src={src} alt="Partner Logo" loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="marquee-row marquee-row-right">
                {[...clientLogosRow2, ...clientLogosRow2].map((src, idx) => (
                  <div key={`logo-r2-${idx}`} className="marquee-logo-wrapper">
                    <img src={src} alt="Partner Logo" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            <style>{`
              .marquee-container {
                overflow: hidden;
                user-select: none;
                display: flex;
                flex-direction: column;
                gap: 20px;
                width: 100%;
                padding: 20px 0;
                position: relative;
              }
              .marquee-container::before,
              .marquee-container::after {
                content: "";
                position: absolute;
                top: 0;
                width: 150px;
                height: 100%;
                z-index: 2;
                pointer-events: none;
              }
              .marquee-container::before {
                left: 0;
                background: linear-gradient(to right, #F9F8F6 0%, transparent 100%);
              }
              .marquee-container::after {
                right: 0;
                background: linear-gradient(to left, #F9F8F6 0%, transparent 100%);
              }
              .marquee-row {
                display: flex;
                width: max-content;
                gap: 32px;
                align-items: center;
                will-change: transform;
              }
              .marquee-row-left {
                animation: marqueeLeft 30s linear infinite;
              }
              .marquee-row-right {
                animation: marqueeRight 30s linear infinite;
              }
              .marquee-row:hover {
                animation-play-state: paused;
              }
              .marquee-logo-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 180px;
                height: 90px;
                padding: 16px;
                background: #FFFFFF;
                border: 1px solid #DCDAD5;
                border-radius: 8px;
                box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.03);
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
              }
              .marquee-logo-wrapper img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                transition: all 0.3s ease;
              }
              .marquee-logo-wrapper:hover {
                border-color: #FF3434;
                box-shadow: 0px 4px 12px rgba(255, 52, 52, 0.1);
                transform: translateY(-2px);
              }
              @keyframes marqueeLeft {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              @keyframes marqueeRight {
                0% { transform: translateX(-50%); }
                100% { transform: translateX(0); }
              }
              @media (max-width: 799px) {
                .marquee-container::before,
                .marquee-container::after {
                  width: 80px;
                }
                .marquee-logo-wrapper {
                  width: 140px;
                  height: 70px;
                  padding: 12px;
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* ═══════ STATS SECTION ═══════ */}
      <section
        ref={statsRef.ref}
        id="stats-section"
        style={{
          background: "linear-gradient(135deg, #1B1B1B 0%, #2a2a2a 100%)",
          padding: "64px 32px",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            textAlign: "center",
          }}
        >
          <div ref={stats1.ref}>
            <div className="stat-number">{stats1.count}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div ref={stats2.ref}>
            <div className="stat-number">{stats2.count}+</div>
            <div className="stat-label">Satisfied Clients</div>
          </div>
          <div ref={stats3.ref}>
            <div className="stat-number">{stats3.count}+</div>
            <div className="stat-label">Team Members</div>
          </div>
        </div>

        <style>{`
          @media (max-width: 599px) {
            #stats-section .container {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* ═══════ CTA SECTION ═══════ */}
      <section className="section" style={{ background: "#FFFFFF" }}>
        <div
          className="container"
          style={{
            maxWidth: 800,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div className="section-label">Get Started</div>
          <h2 style={{ marginBottom: 16 }}>Ready to Automate Your Plant?</h2>
          <p
            style={{
              color: "#5f5e5dff",
              fontSize: 16,
              lineHeight: "26px",
              marginBottom: 32,
              maxWidth: 560,
              margin: "0 auto 32px",
            }}
          >
            Request a consultation to discuss your automation needs. Our team will create a custom
            solution tailored to your industry requirements.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="btn btn-primary" style={{ textDecoration: "none" }}>
              Request a Quote
            </Link>
            <Link
              href="https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ textDecoration: "none" }}
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
