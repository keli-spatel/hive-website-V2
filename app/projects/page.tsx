"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

const projects = [
  { tag: "Pharmaceutical", title: "GAMP 5 Compliant Automation for Pharmaceutical Material Handling", desc: "Achieved full FDA compliance with automated batch tracking & reporting for Emynent, Russia.", highlights: ["FDA/GAMP 5 Compliance","Automated Batch Tracking","Material Handling System"], slug: "pharmaceutical" },
  { tag: "Chemical", title: "Control System Engineering for Steam Turbine Application", desc: "Redundant Siemens S7-400H setup managing three steam turbines for KLJ Petroplast.", highlights: ["Redundant S7-400H","Steam Turbine Control","Siemens Energy"], slug: "chemical" },
  { tag: "Refinery", title: "Control System SIL-2 Programming for Recip Compressor", desc: "Four compressor units controlled by redundant SIL-2 Rockwell ControlLogix for YPF, USA.", highlights: ["SIL-2 Rockwell","Recip Compressor","YPF USA"], slug: "refinery" },
  { tag: "Oil & Gas", title: "PCS7 DCS for High Pressure Air Injection Plant", desc: "Robust Siemens PCS 7 DCS implementation with HART management for ONGC, Ahmedabad.", highlights: ["Siemens PCS7","HART Management","ONGC Plant"], slug: "oil-gas" },
  { tag: "Chemical", title: "Automation & Control System for 100 TPD Hydrogenation Plant", desc: "Turnkey automation and custom control panel fabrication for Ricor Mills, Philippines.", highlights: ["100 TPD Capacity","Hydrogenation Control","Panel Manufacturing"], slug: "hydrogenation-plant" },
  { tag: "Chemical", title: "Automation & Control System for 10 TPD Ethyl Acetate Plant", desc: "Redundant Siemens S7-1500 system architecture for Egyptian Sugar & Integrated Industries.", highlights: ["Siemens S7-1500","Ethyl Acetate Plant","Process Optimization"], slug: "ethyl-acetate" },
  { tag: "Infrastructure", title: "Asphalt Batching Plant Automation System – 260 TPH", desc: "Full aggregate dosing, burner control and recipe management for Roads & Buildings Department.", highlights: ["260 TPH Capacity","Truck Loading Automation","Dosing Control"], slug: "asphalt-batching" },
  { tag: "Retrofit", title: "Retrofit & Upgrade Solutions for Legacy Industrial Systems", desc: "Modernizing legacy PLCs to Industry 4.0 standards with 21 CFR Part 11 compliance.", highlights: ["Legacy Migration","21 CFR Part 11","HMI/SCADA Upgrades"], slug: "retrofit-upgrade" },
];

const filters = ["All", "Pharmaceutical", "Oil & Gas", "Chemical", "Refinery", "Infrastructure", "Retrofit"];

export default function ProjectsPage() {
  const heroRef = useInView();
  const gridRef = useInView();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? projects : projects.filter(p => p.tag === activeFilter);

  return (
    <div style={{ marginTop: 72 }}>
      <section ref={heroRef.ref} style={{ background: "linear-gradient(135deg,#1B1B1B,#2a2a2a)", padding: "80px 32px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", opacity: heroRef.inView ? 1 : 0, transform: heroRef.inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease-out" }}>
          <div style={{ display: "inline-flex", gap: 8, marginBottom: 16, fontSize: 12, fontWeight: 600, color: "#C5C1B9", letterSpacing: 1 }}>
            <Link href="/" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}>Home</Link><span>/</span><span style={{ color: "#FF3434" }}>Projects</span>
          </div>
          <h1 style={{ color: "#FFFFFF", marginBottom: 16 }}>Our Projects</h1>
          <p style={{ color: "#C5C1B9", fontSize: 16, lineHeight: "26px", maxWidth: 560, margin: "0 auto" }}>Proven track record delivering industrial automation excellence across industries.</p>
        </div>
      </section>

      <section ref={gridRef.ref} className="section">
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Filters */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 40 }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                style={{
                  padding: "8px 20px", borderRadius: 9999, border: "1px solid", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 200ms ease",
                  background: activeFilter === f ? "#FF3434" : "transparent",
                  color: activeFilter === f ? "#FFFFFF" : "#1B1B1B",
                  borderColor: activeFilter === f ? "#FF3434" : "#DCDAD5",
                }}
              >{f}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {filtered.map((proj, i) => (
              <Link href={`/projects/${proj.slug}`} key={i} className="card card-interactive" style={{
                display: "flex", flexDirection: "column", gap: 16,
                opacity: gridRef.inView ? 1 : 0, transform: gridRef.inView ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.5s ease-out ${i * 80}ms`,
                textDecoration: "none",
                color: "inherit"
              }}>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: "#575ECF", background: "rgba(87,94,207,0.08)", padding: "4px 12px", borderRadius: 9999, alignSelf: "flex-start" }}>{proj.tag}</span>
                <h3 style={{ fontSize: 18, fontWeight: 600, lineHeight: "24px", color: "#1B1B1B" }}>{proj.title}</h3>
                <p style={{ fontSize: 14, color: "#666666", lineHeight: "22px" }}>{proj.desc}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "auto", marginBottom: 4 }}>
                  {proj.highlights.map((h, hi) => (
                    <span key={hi} style={{ fontSize: 11, fontWeight: 500, padding: "4px 10px", borderRadius: 4, background: "#F9F8F6", color: "#1B1B1B", border: "1px solid #DCDAD5" }}>{h}</span>
                  ))}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#FF3434", display: "flex", alignItems: "center", gap: 4 }}>
                  View Case Study <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 599px) {
          #projects-grid div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <section style={{ background: "linear-gradient(135deg,#1B1B1B,#2a2a2a)", padding: "64px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ color: "#FFFFFF", marginBottom: 16 }}>Have a Similar Project?</h2>
          <p style={{ color: "#C5C1B9", marginBottom: 32, fontSize: 14 }}>Let&apos;s discuss how we can deliver the same excellence for your facility.</p>
          <Link href="/contact" className="btn btn-primary" style={{ textDecoration: "none" }}>Request a Quote</Link>
        </div>
      </section>
    </div>
  );
}
