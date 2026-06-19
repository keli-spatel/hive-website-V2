"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatedButton } from "../components/ui/AnimatedButton";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.02 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

const positions = [
  { title: "PLC Programmer – Siemens", type: "Full-time", location: "Ahmedabad", desc: "Program and commission Siemens S7-1500 PLCs, develop STEP 7/TIA Portal code, and conduct FAT/SAT testing for industrial automation projects." },
  { title: "SCADA/HMI Developer", type: "Full-time", location: "Ahmedabad", desc: "Design and develop WinCC/WinCC OA SCADA interfaces, create HMI screens, and implement alarm management systems." },
  { title: "DCS Engineer – PCS 7", type: "Full-time", location: "Ahmedabad", desc: "Configure Siemens PCS 7 DCS systems, develop control strategies, and commission distributed control solutions." },
  { title: "Project Engineer", type: "Full-time", location: "Ahmedabad", desc: "Manage turnkey automation projects, coordinate between teams, and ensure on-time delivery with quality standards." },
  { title: "Junior Automation Engineer", type: "Full-time / Internship", location: "Ahmedabad", desc: "Support senior engineers in PLC programming, panel wiring, and on-site commissioning activities. Great opportunity for fresh graduates." },
];

const perks = [
  { icon: "🎓", title: "Learning & Growth", desc: "Hands-on training with Siemens platforms and industry certifications." },
  { icon: "🏭", title: "Real Projects", desc: "Work on live industrial automation projects across multiple industries." },
  { icon: "💼", title: "Career Growth", desc: "Clear progression path from junior engineer to project lead." },
  { icon: "🤝", title: "Team Culture", desc: "Collaborative, no-hierarchy environment focused on engineering excellence." },
];

export default function CareerPage() {
  const heroRef = useInView();
  const posRef = useInView();
  const perksRef = useInView();

  return (
    <div style={{ marginTop: 82 }}>
      <section ref={heroRef.ref} style={{ background: "linear-gradient(135deg,#1B1B1B,#2a2a2a)", padding: "80px 32px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", opacity: heroRef.inView ? 1 : 0, transform: heroRef.inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease-out" }}>
          <div style={{ display: "inline-flex", gap: 8, marginBottom: 16, fontSize: 12, fontWeight: 600, color: "#C5C1B9", letterSpacing: 1 }}>
            <Link href="/" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}>Home</Link><span>/</span><span style={{ color: "#FF3434" }}>Career</span>
          </div>
          <h1 style={{ marginBottom: 16 }}>Join Our Team</h1>
          <p style={{ color: "#C5C1B9", fontSize: 16, lineHeight: "26px", maxWidth: 560, margin: "0 auto" }}>Build your future in industrial automation. We&apos;re always looking for talented engineers.</p>
        </div>
      </section>

      {/* Why Join */}
      <section ref={perksRef.ref} className="section">
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Why Hive Automation?</div>
            <h2>Build Your Engineering Career</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
            {perks.map((p, i) => (
              <div key={i} className="card" style={{ textAlign: "center", opacity: perksRef.inView ? 1 : 0, transform: perksRef.inView ? "translateY(0)" : "translateY(24px)", transition: `all 0.5s ease-out ${i * 100}ms` }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, lineHeight: "22px", color: "#666666" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section ref={posRef.ref} className="section section-alt">
        <div className="container" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Open Positions</div>
            <h2>Current Openings</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {positions.map((pos, i) => (
              <div key={i} className="card" style={{
                display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap",
                opacity: posRef.inView ? 1 : 0, transform: posRef.inView ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.5s ease-out ${i * 80}ms`,
              }}>
                <div style={{ flex: 1, minWidth: 240 }}>
                  <h3 style={{ marginBottom: 6 }}>{pos.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: "22px", color: "#666666", marginBottom: 8 }}>{pos.desc}</p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 12, fontWeight: 500, padding: "4px 10px", borderRadius: 9999, background: "rgba(87,94,207,0.08)", color: "#575ECF" }}>{pos.type}</span>
                    <span style={{ fontSize: 12, fontWeight: 500, padding: "4px 10px", borderRadius: 9999, background: "#F9F8F6", color: "#1B1B1B", border: "1px solid #DCDAD5" }}>📍 {pos.location}</span>
                  </div>
                </div>
                <AnimatedButton href="/contact" className="min-w-[120px]">Apply Now</AnimatedButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ marginBottom: 16 }}>Don&apos;t See Your Role?</h2>
          <p style={{ color: "#666666", marginBottom: 32, fontSize: 14 }}>Send us your resume and we&apos;ll reach out when the right opportunity comes.</p>
          <AnimatedButton href="/contact">Send Your Resume</AnimatedButton>
        </div>
      </section>
    </div>
  );
}
