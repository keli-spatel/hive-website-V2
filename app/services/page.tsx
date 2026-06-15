"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

const services = [
  { id: "plc", slug: "plc-programming-integration", icon: "⚙️", title: "PLC Programming & Integration", sub: "Custom Siemens PLC Solutions",
    desc: "We develop custom PLC programs tailored to your specific process and production goals. Our PLC logic design ensures industrial safety, flexibility, and high-performance system integration.",
    feats: ["Siemens S7-300/400/1500 programming","TIA Portal & STEP 7 development","Safety PLC (F-PLC) programming","Custom function block libraries","Process simulation & testing","Hardware configuration & I/O mapping"] },
  { id: "dcs", slug: "distributed-control-systems", icon: "🖥️", title: "Distributed Control Systems (DCS)", sub: "Siemens PCS 7 Platforms",
    desc: "Robust Siemens PCS 7 and other DCS solutions providing scalable, integrated control of complex industrial processes with accuracy, safety, and maximum uptime.",
    feats: ["Siemens PCS 7 configuration","Batch processing automation","Continuous process control","Redundancy & failover systems","Multi-plant integration","Historian & trending"] },
  { id: "scada", slug: "scada-hmi-development", icon: "📊", title: "SCADA & HMI Development", sub: "Real-Time Monitoring",
    desc: "Intuitive SCADA and HMI interfaces for real-time monitoring and control, designed for usability, data clarity, and enhanced operational safety.",
    feats: ["WinCC & WinCC OA development","Custom HMI screen design","Alarm management systems","Real-time data visualization","Remote access & monitoring","ISA-101 compliant graphics"] },
  { id: "turnkey", slug: "turnkey-project-execution", icon: "🏗️", title: "Turnkey Project Execution", sub: "End-to-End Delivery",
    desc: "Complete automation solutions from early system design to final handover, ensuring consistency, reliability, and full accountability.",
    feats: ["Functional specification & design","Hardware procurement & panel building","Software development & simulation","FAT & SAT testing","On-site commissioning","Training & documentation"] },
  { id: "upgrades", slug: "system-upgrade-retrofits", icon: "🔄", title: "System Upgrades & Retrofits", sub: "Legacy Modernization",
    desc: "Upgrade aging control systems and legacy hardware to modern platforms like Siemens S7-1500 and TIA Portal with minimal downtime.",
    feats: ["S5 to S7 migration","S7-300/400 to S7-1500 upgrades","TIA Portal migration","I/O module retrofitting","Network protocol upgrades","Firmware & software updates"] },
  { id: "networking", slug: "industrial-networking-cybersecurity", icon: "🔒", title: "Industrial Networking & Cybersecurity", sub: "Secure Networks",
    desc: "Resilient, segmented, and secure industrial networks built for performance and uptime from control to enterprise level.",
    feats: ["PROFINET & PROFIBUS networking","Industrial Ethernet design","Network segmentation & firewalls","VPN & remote access security","OT cybersecurity assessments","IEC 62443 compliance"] },
  { id: "analytics", slug: "analytics-reporting", icon: "📈", title: "Analytics & Reporting", sub: "Data-Driven Decisions",
    desc: "Industrial reporting tools and dashboards for real-time KPIs, historical trends, and compliance logs.",
    feats: ["Real-time KPI dashboards","Historical data trending","Compliance & audit reports","OEE & production analytics","Energy monitoring systems","Custom report generation"] },
];

function ServiceBlock({ svc, i }: { svc: typeof services[0]; i: number }) {
  const svcRef = useInView();
  const isAlt = i % 2 === 1;
  return (
    <section ref={svcRef.ref} id={svc.id} className={`section ${isAlt ? "section-alt" : ""}`}>
      <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start" }}>
        <div style={{ order:isAlt?2:1, opacity:svcRef.inView?1:0, transform:svcRef.inView?"translateX(0)":`translateX(${isAlt?"32px":"-32px"})`, transition:"all 0.6s ease-out" }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
            <div style={{ width:48, height:48, borderRadius:12, background:"rgba(255, 52, 52,0.12)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>{svc.icon}</div>
            <div className="section-label" style={{ marginBottom:0 }}>{svc.sub}</div>
          </div>
          <h2 style={{ marginBottom:16 }}>{svc.title}</h2>
          <p style={{ lineHeight:"26px", marginBottom:24 }}>{svc.desc}</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href={`/services/${svc.slug}`} className="btn btn-primary" style={{ textDecoration: "none" }}>
              View Details & Specs
            </Link>
            <Link href="/contact" className="btn" style={{ textDecoration: "none", border: "1px solid #DCDAD5", background: "transparent", color: "#1B1B1B" }}>
              Get a Quote
            </Link>
          </div>
        </div>
        <div style={{ order:isAlt?1:2, opacity:svcRef.inView?1:0, transform:svcRef.inView?"translateX(0)":`translateX(${isAlt?"-32px":"32px"})`, transition:"all 0.6s ease-out 0.15s" }}>
          <div className="card" style={{ padding:32 }}>
            <h4 style={{ fontSize:16, fontWeight:600, marginBottom:20 }}>Key Capabilities</h4>
            <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:14 }}>
              {svc.feats.map((f,fi) => (
                <li key={fi} style={{ display:"flex", gap:12, fontSize:14, lineHeight:"22px" }}>
                  <span style={{ color:"#FF3434", fontSize:16 }}>✓</span><span>{f}</span>
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

export default function ServicesPage() {
  const heroRef = useInView();
  return (
    <div style={{ marginTop:72 }}>
      <section ref={heroRef.ref} style={{ background:"linear-gradient(135deg,#1B1B1B,#2a2a2a)", padding:"80px 32px", overflow:"hidden" }}>
        <div
          className="container"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 48,
            alignItems: "center",
            opacity: heroRef.inView ? 1 : 0,
            transform: heroRef.inView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease-out",
          }}
        >
          {/* Text Content */}
          <div>
            <div style={{ display:"inline-flex", gap:8, marginBottom:16, fontSize:12, fontWeight:600, color:"#C5C1B9", letterSpacing:1 }}>
              <Link href="/" style={{ color:"#C5C1B9", textDecoration:"none", fontWeight:400 }}>Home</Link><span>/</span><span style={{ color:"#FF3434" }}>Services</span>
            </div>
            <h1 style={{ color:"#FFFFFF", marginBottom:16, fontSize: "clamp(32px, 4.5vw, 42px)", lineHeight: 1.2 }}>
              Our Industrial Automation Services
            </h1>
            <p style={{ color:"#C5C1B9", fontSize:16, lineHeight:"26px", maxWidth:560, margin:0 }}>
              Comprehensive custom-engineered automation solutions — from legacy Siemens migration and custom PLC logic to plant-wide DCS deployment and 24/7 technical support.
            </p>
          </div>

          {/* Hero Image */}
          <div style={{ position: "relative", width: "100%", height: 280, borderRadius: 12, overflow: "hidden" }}>
            <Image
              src="/services-hero.png"
              alt="Industrial automation services illustration"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        <style>{`
          @media(max-width: 799px) {
            .container[style*="grid-template-columns: 1.2fr 1fr"] {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }
        `}</style>
      </section>
      {services.map((svc, i) => <ServiceBlock key={svc.id} svc={svc} i={i} />)}
      <section style={{ background:"linear-gradient(135deg,#1B1B1B,#2a2a2a)", padding:"64px 32px", textAlign:"center" }}>
        <div style={{ maxWidth:600, margin:"0 auto" }}>
          <h2 style={{ color:"#FFFFFF", marginBottom:16 }}>Need a Custom Solution?</h2>
          <p style={{ color:"#C5C1B9", marginBottom:32, fontSize:14, lineHeight:"22px" }}>Contact our team to discuss your specific automation requirements.</p>
          <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/contact" className="btn btn-primary" style={{ textDecoration:"none" }}>Request a Quote</Link>
            <Link href="https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation" target="_blank" rel="noopener noreferrer" className="btn" style={{ textDecoration:"none", background:"transparent", color:"#FFFFFF", border:"1px solid rgba(255,255,255,0.3)", borderRadius:8 }}>Schedule a Call</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
