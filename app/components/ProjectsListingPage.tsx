"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedButton } from "./ui/AnimatedButton";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.02 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

const projects = [
  { tag: "Pharmaceutical", title: "GAMP 5 Compliant Automation for Pharmaceutical Material Handling", desc: "Achieved full FDA compliance with automated batch tracking & reporting for Emynent, Russia.", highlights: ["FDA/GAMP 5 Compliance", "Automated Batch Tracking", "Material Handling System"], slug: "pharmaceutical", thumbnail: "/projects/thumbnail-pharma.png" },
  { tag: "Pharmaceutical", title: "Pharmaceutical & Process Equipment Automation Programme", desc: "GMP-ready Siemens PLC, HMI and SCADA automation for pharma OEM manufacturers across utility and process equipment ranges.", highlights: ["21 CFR Part 11", "GAMP 5 Aligned", "OEM Automation"], slug: "pharma-process", thumbnail: "/projects/thumbnail-pharma.png" },
  { tag: "Chemical", title: "Control System Engineering for Steam Turbine Application", desc: "Redundant Siemens S7-400H setup managing three steam turbines for KLJ Petroplast.", highlights: ["Redundant S7-400H", "Steam Turbine Control", "Siemens Energy"], slug: "chemical", thumbnail: "/projects/thumbnail-chemical.png" },
  { tag: "Refinery", title: "Control System SIL-2 Programming for Recip Compressor", desc: "Four compressor units controlled by redundant SIL-2 Rockwell ControlLogix for YPF, USA.", highlights: ["SIL-2 Rockwell", "Recip Compressor", "YPF USA"], slug: "refinery", thumbnail: "/projects/thumbnail-rotary.png" },
  { tag: "Oil & Gas", title: "PCS7 DCS for High Pressure Air Injection Plant", desc: "Robust Siemens PCS 7 DCS implementation with HART management for ONGC, Ahmedabad.", highlights: ["Siemens PCS7", "HART Management", "ONGC Plant"], slug: "oil-gas", thumbnail: "/projects/thumbnail-oil-gas.png" },
  { tag: "Chemical", title: "Automation & Control System for 100 TPD Hydrogenation Plant", desc: "Turnkey automation and custom control panel fabrication for Ricor Mills, Philippines.", highlights: ["100 TPD Capacity", "Hydrogenation Control", "Panel Manufacturing"], slug: "hydrogenation-plant", thumbnail: "/projects/thumbnail-hydrogenation.png" },
  { tag: "Chemical", title: "Automation & Control System for 10 TPD Ethyl Acetate Plant", desc: "Redundant Siemens S7-1500 system architecture for Egyptian Sugar & Integrated Industries.", highlights: ["Siemens S7-1500", "Ethyl Acetate Plant", "Process Optimization"], slug: "ethyl-acetate", thumbnail: "/projects/thumbnail-ethyl.png" },
  { tag: "Infrastructure", title: "Asphalt Batching Plant Automation System – 260 TPH", desc: "Full aggregate dosing, burner control and recipe management for Roads & Buildings Department.", highlights: ["260 TPH Capacity", "Truck Loading Automation", "Dosing Control"], slug: "asphalt-batching", thumbnail: "/projects/thumbnail-asphalt.png" },
  { tag: "Retrofit", title: "Retrofit & Upgrade Solutions for Legacy Industrial Systems", desc: "Modernizing legacy PLCs to Industry 4.0 standards with 21 CFR Part 11 compliance.", highlights: ["Legacy Migration", "21 CFR Part 11", "HMI/SCADA Upgrades"], slug: "retrofit-upgrade", thumbnail: "/projects/thumbnail-retrofit.png" },
];

const filters = ["All", "Pharmaceutical", "Oil & Gas", "Chemical", "Refinery", "Infrastructure", "Retrofit"];

export default function ProjectsListingPage() {
  const heroRef = useInView();
  const gridRef = useInView();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.tag === activeFilter);

  return (
    <div style={{ marginTop: 60 }}>
      <section
        ref={heroRef.ref}
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 52, 52, 0.2), transparent 34%), linear-gradient(180deg, #171819 0%, #242629 100%)",
          padding: "64px 32px 52px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", opacity: heroRef.inView ? 1 : 0, transform: heroRef.inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease-out" }}>
          <div style={{ display: "inline-flex", gap: 8, marginBottom: 16, fontSize: 12, fontWeight: 600, color: "#C5C1B9", letterSpacing: 1 }}>
            <Link href="/" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#FF3434" }}>Our Projects</span>
          </div>
          <h1 style={{ marginBottom: 16 }}>Our Projects</h1>
          <p style={{ color: "#C5C1B9", fontSize: 16, lineHeight: "26px", maxWidth: 560, margin: "0 auto" }}>
            Proven track record delivering industrial automation excellence across industries.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginTop: 28 }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 9999,
                  border: "1px solid",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 200ms ease",
                  background: activeFilter === f ? "#FF3434" : "transparent",
                  color: "#FFFFFF",
                  borderColor: activeFilter === f ? "#FF3434" : "rgba(255,255,255,0.24)",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section ref={gridRef.ref} className="section">
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {filtered.map((proj, i) => (
              <Link
                href={`/projects/${proj.slug}`}
                key={i}
                className="card card-interactive"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  opacity: gridRef.inView ? 1 : 0,
                  transform: gridRef.inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.5s ease-out ${i * 80}ms`,
                  textDecoration: "none",
                  color: "inherit",
                  padding: 0,
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: 200 }}>
                  <Image src={proj.thumbnail} alt={proj.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: "#575ECF", background: "rgba(87,94,207,0.08)", padding: "4px 12px", borderRadius: 9999, alignSelf: "flex-start" }}>{proj.tag}</span>
                  <h3 style={{ margin: 0 }}>{proj.title}</h3>
                  <p style={{ fontSize: 15, color: "#5f5e5dff", lineHeight: "26px", margin: 0 }}>{proj.desc}</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "auto", marginBottom: 4 }}>
                    {proj.highlights.map((h, hi) => (
                      <span key={hi} style={{ fontSize: 11, fontWeight: 500, padding: "4px 10px", borderRadius: 9999, background: "#F9F8F6", color: "#1B1B1B", border: "1px solid #DCDAD5" }}>{h}</span>
                    ))}
                  </div>
                  <div className="border border-[#ff3b3b] text-[#ff3b3b] bg-white px-6 py-2.5 rounded-full font-semibold text-[13px] inline-flex items-center gap-2 transition-colors self-start mt-2 hover:bg-[#ff3b3b] hover:text-white">
                    View Case Study <span className="text-base leading-none">→</span>
                  </div>
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
          <p style={{ color: "#C5C1B9", marginBottom: 32, fontSize: 15, lineHeight: "26px" }}>
            Let&apos;s discuss how we can deliver the same excellence for your facility.
          </p>
          <AnimatedButton href="/contact">Request a Quote</AnimatedButton>
        </div>
      </section>
    </div>
  );
}
