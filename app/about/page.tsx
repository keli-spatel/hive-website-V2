"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "../components/ui/AnimatedButton";
import { Phone } from "lucide-react";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.02 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(end * eased));
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

const values = [
  { icon: "🎯", title: "Precision", desc: "Every line of PLC code is thoroughly tested and validated for your specific process requirements." },
  { icon: "🤝", title: "Partnership", desc: "We're long-term engineering partners committed to your plant's performance and growth." },
  { icon: "💡", title: "Innovation", desc: "Leveraging the latest Siemens technologies and Industry 4.0 practices for future-ready solutions." },
  { icon: "🛡️", title: "Safety", desc: "International engineering standards and rigorous testing ensure robust, audit-ready systems." },
];

const timeline = [
  { year: "2017", title: "Founded", desc: "Hive Automation established with a focus on Siemens PLC programming." },
  { year: "2018", title: "First Major Project", desc: "Delivered our first pharmaceutical automation system with GAMP 5 compliance." },
  { year: "2019", title: "Oil & Gas Expansion", desc: "Expanded into Oil & Gas with PCS 7 DCS implementations." },
  { year: "2020", title: "Remote Support Launch", desc: "Introduced 24/7 remote diagnostics and support services." },
  { year: "2022", title: "50+ Projects", desc: "Crossed 50 successfully delivered automation projects milestone." },
  { year: "2024", title: "Industry 4.0 Ready", desc: "Adopted Industry 4.0 standards with IIoT and advanced analytics offerings." },
];

export default function AboutPage() {
  const heroRef = useInView();
  const missionRef = useInView();
  const valuesRef = useInView();
  const timelineRef = useInView();
  const stats1 = useCounter(500);
  const stats2 = useCounter(50);
  const stats3 = useCounter(15);

  return (
    <div style={{ marginTop: 82 }}>
      {/* Page Header */}
      <section
        ref={heroRef.ref}
        style={{
          background: "linear-gradient(135deg, #1B1B1B 0%, #2a2a2a 100%)",
          padding: "80px 32px 64px",
          textAlign: "center",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: 800,
            margin: "0 auto",
            opacity: heroRef.inView ? 1 : 0,
            transform: heroRef.inView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease-out",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
              fontSize: 12,
              fontWeight: 600,
              color: "#C5C1B9",
              letterSpacing: 1,
            }}
          >
            <Link href="/" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#FF3434" }}>About Us</span>
          </div>
          <h1 style={{ marginBottom: 16 }}>About Hive Automation</h1>
          <p style={{ color: "#C5C1B9", fontSize: 16, lineHeight: "26px", maxWidth: 560, margin: "0 auto" }}>
            India&apos;s trusted industrial automation partner, delivering precision engineering solutions since 2017.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef.ref} className="section" id="mission">
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
          <div
            style={{
              opacity: missionRef.inView ? 1 : 0,
              transform: missionRef.inView ? "translateX(0)" : "translateX(-32px)",
              transition: "all 0.7s ease-out",
            }}
          >
            <Image
              src="/about-bg.png"
              alt="Industrial control room"
              width={560}
              height={400}
              style={{ width: "100%", height: "auto", borderRadius: 12 }}
            />
          </div>
          <div
            style={{
              opacity: missionRef.inView ? 1 : 0,
              transform: missionRef.inView ? "translateX(0)" : "translateX(32px)",
              transition: "all 0.7s ease-out 0.15s",
            }}
          >
            <div className="section-label">Our Mission</div>
            <h2 style={{ marginBottom: 20 }}>Empowering Manufacturing with Smart Automation</h2>
            <p style={{ fontSize: 15, lineHeight: "26px", color: "#5f5e5dff", marginBottom: 16 }}>
              Hive Automation is a trusted industrial automation company specializing in Siemens PLC programming, SCADA system integration, and process control solutions. Our mission is to empower manufacturing with smart automation systems that optimize operations, enhance efficiency, and minimize industrial downtime across India.
            </p>
            <p style={{ fontSize: 15, lineHeight: "26px", color: "#5f5e5dff", marginBottom: 24 }}>
              We provide expert services for Siemens PLCs, SCADA, and DCS platforms, having successfully delivered turnkey automation projects for diverse industries. Our commitment to industrial compliance, innovation, and safety ensures high-performance results in a rapidly evolving industrial automation landscape.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["Pharmaceutical", "Oil & Gas", "Forging", "Food & Beverages"].map((tag) => (
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
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 799px) {
            #mission .container {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }
        `}</style>
      </section>

      {/* Values */}
      <section ref={valuesRef.ref} className="section section-alt" id="values">
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Our Values</div>
            <h2>What Drives Us</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
            {values.map((val, i) => (
              <div
                key={i}
                className="card"
                style={{
                  textAlign: "center",
                  opacity: valuesRef.inView ? 1 : 0,
                  transform: valuesRef.inView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.5s ease-out ${i * 100}ms`,
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{val.icon}</div>
                <h3 style={{ marginBottom: 8 }}>{val.title}</h3>
                <p style={{ fontSize: 14, lineHeight: "22px", color: "#5f5e5dff" }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef.ref} className="section" id="journey">
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Our Journey</div>
            <h2>Growing with Industry</h2>
          </div>
          <div style={{ position: "relative" }}>
            {/* Center line */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 2,
                background: "#DCDAD5",
                transform: "translateX(-50%)",
              }}
            />
            {timeline.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                  padding: "16px 0",
                  position: "relative",
                  opacity: timelineRef.inView ? 1 : 0,
                  transform: timelineRef.inView ? "translateY(0)" : "translateY(16px)",
                  transition: `all 0.5s ease-out ${i * 100}ms`,
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#FF3434",
                    border: "3px solid #FFFFFF",
                    boxShadow: "0 0 0 2px #FF3434",
                    zIndex: 2,
                  }}
                />
                <div
                  className="card"
                  style={{
                    width: "42%",
                    padding: "20px 24px",
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#FF3434",
                      letterSpacing: 1,
                    }}
                  >
                    {item.year}
                  </span>
                  <h3 style={{ margin: "4px 0" }}>{item.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: "20px", color: "#5f5e5dff" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 599px) {
            #journey .container > div > div {
              justify-content: flex-end !important;
            }
            #journey .container > div > div > .card {
              width: 75% !important;
            }
            #journey .container > div > div > div[style*="left: 50%"] {
              left: 10% !important;
            }
            #journey .container > div > div:first-child {
              left: 10% !important;
            }
          }
        `}</style>
      </section>

      {/* Stats */}
      <section
        style={{
          background: "linear-gradient(135deg, #1B1B1B 0%, #2a2a2a 100%)",
          padding: "64px 32px",
        }}
        id="about-stats"
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
            #about-stats .container {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ marginBottom: 16 }}>Ready to Partner with Us?</h2>
          <p style={{ color: "#5f5e5dff", marginBottom: 32, fontSize: 15, lineHeight: "26px" }}>
            Let&apos;s discuss how we can bring precision automation to your plant.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <AnimatedButton href="/contact">
              Contact Us
            </AnimatedButton>
            <AnimatedButton
              href="https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
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
