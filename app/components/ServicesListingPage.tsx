"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedButton } from "./ui/AnimatedButton";
import { Phone } from "lucide-react";
import { servicesListing } from "../data/services-listing";
import { SCHEDULE_CALL_URL } from "../data/site";
import { useInView } from "../hooks/useInView";


function ServiceBlock({ svc, i }: { svc: (typeof servicesListing)[0]; i: number }) {
  const svcRef = useInView<HTMLDivElement>(0.1);
  const isAlt = i % 2 === 1;
  return (
    <section ref={svcRef.ref} id={svc.id} className={`section ${isAlt ? "section-alt" : ""}`}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        <div
          style={{
            order: isAlt ? 2 : 1,
            opacity: svcRef.inView ? 1 : 0,
            transform: svcRef.inView ? "translateX(0)" : `translateX(${isAlt ? "32px" : "-32px"})`,
            transition: "all 0.6s ease-out",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "rgba(255, 52, 52,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              {svc.icon}
            </div>
            <div className="section-label" style={{ marginBottom: 0 }}>
              {svc.sub}
            </div>
          </div>
          <h2 style={{ marginBottom: 16 }}>{svc.title}</h2>
          <p style={{ lineHeight: "26px", marginBottom: 24 }}>{svc.desc}</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <AnimatedButton href={`/services/${svc.slug}`}>View Details & Specs</AnimatedButton>
            <AnimatedButton href="/contact" variant="secondary">
              Get a Quote
            </AnimatedButton>
          </div>
        </div>
        <div
          style={{
            order: isAlt ? 1 : 2,
            opacity: svcRef.inView ? 1 : 0,
            transform: svcRef.inView ? "translateX(0)" : `translateX(${isAlt ? "-32px" : "32px"})`,
            transition: "all 0.6s ease-out 0.15s",
          }}
        >
          <div className="card" style={{ padding: 32 }}>
            <h3 style={{ marginBottom: 20 }}>Key Capabilities</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {svc.feats.map((f, fi) => (
                <li key={fi} style={{ display: "flex", gap: 12, fontSize: 14, lineHeight: "22px" }}>
                  <span style={{ color: "#FF3434", fontSize: 16 }}>✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:799px){#${svc.id} div[style*="grid-template-columns"]{grid-template-columns:1fr!important;gap:32px!important}#${svc.id} div[style*="order"]{order:unset!important}}`}</style>
    </section>
  );
}

export default function ServicesListingPage() {
  const heroRef = useInView<HTMLDivElement>(0.1);
  return (
    <div className="services-page" style={{ marginTop: 82 }}>
      <section ref={heroRef.ref} className="services-hero">
        <div
          className="container services-hero-inner"
          style={{
            opacity: heroRef.inView ? 1 : 0,
            transform: heroRef.inView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease-out",
          }}
        >
          <div className="services-hero-copy">
            <div className="services-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Our Services</span>
            </div>
            <p className="section-label">Industrial Automation Services</p>
            <h1>Our Industrial Automation Services</h1>
            <p className="services-hero-lead">
              Comprehensive custom-engineered automation solutions — from legacy Siemens migration and custom PLC logic to plant-wide DCS deployment and 24/7 technical support.
            </p>
            <div className="services-hero-actions">
              <AnimatedButton href="/contact">Request a Quote</AnimatedButton>
              <AnimatedButton
                href={SCHEDULE_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-dark"
                icon={<Phone />}
              >
                Schedule a Call
              </AnimatedButton>
            </div>
            <div className="services-hero-proof" aria-label="Service highlights">
              <span>PLC</span>
              <span>SCADA</span>
              <span>DCS</span>
              <span>Turnkey</span>
            </div>
          </div>

          <div className="services-hero-visual">
            <Image src="/services-hero.png" alt="Industrial automation services illustration" fill priority />
            <div className="services-hero-metric services-hero-metric-top">
              <strong>7</strong>
              <span>Core automation services</span>
            </div>
            <div className="services-hero-metric services-hero-metric-bottom">
              <strong>24/7</strong>
              <span>Technical support focus</span>
            </div>
          </div>
        </div>
      </section>
      {servicesListing.map((svc, i) => (
        <ServiceBlock key={svc.id} svc={svc} i={i} />
      ))}
      <section style={{ background: "linear-gradient(135deg,#1B1B1B,#2a2a2a)", padding: "64px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ color: "#FFFFFF", marginBottom: 16 }}>Need a Custom Solution?</h2>
          <p style={{ color: "#C5C1B9", marginBottom: 32, fontSize: 14, lineHeight: "22px" }}>
            Contact our team to discuss your specific automation requirements.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <AnimatedButton href="/contact">Request a Quote</AnimatedButton>
            <AnimatedButton
              href={SCHEDULE_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-dark"
              icon={<Phone />}
            >
              Schedule a Call
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  );
}
