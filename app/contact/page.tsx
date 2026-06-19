"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatedButton } from "../components/ui/AnimatedButton";
import { Phone, ArrowRight } from "lucide-react";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

const contactInfo = [
  { icon: "📞", label: "Phone", values: ["+91 99786 03840", "+91 99786 03841"], links: ["tel:+919978603840", "tel:+919978603841"] },
  { icon: "✉️", label: "Email", values: ["info@hiveautomation.in"], links: ["mailto:info@hiveautomation.in"] },
  { icon: "📍", label: "Address", values: ["33, B N Industrial Estate, Near Kathwada GIDC Gate No 5, S P Ring Road, Near Nikol, Odhav, Ahmedabad - 382415"], links: ["https://www.google.com/maps/search/?api=1&query=Hive+Automation+33+B+N+Industrial+Estate+Kathwada+GIDC+Odhav+Ahmedabad+382415"] },
  { icon: "💬", label: "WhatsApp", values: ["+91 99786 03840"], links: ["https://wa.me/919978603840"] },
];

export default function ContactPage() {
  const heroRef = useInView();
  const formRef = useInView();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={{ marginTop: 82 }}>
      <section ref={heroRef.ref} style={{ background: "linear-gradient(135deg,#1B1B1B,#2a2a2a)", padding: "80px 32px 64px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", opacity: heroRef.inView ? 1 : 0, transform: heroRef.inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease-out" }}>
          <div style={{ display: "inline-flex", gap: 8, marginBottom: 16, fontSize: 12, fontWeight: 600, color: "#C5C1B9", letterSpacing: 1 }}>
            <Link href="/" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}>Home</Link><span>/</span><span style={{ color: "#FF3434" }}>Contact</span>
          </div>
          <h1 style={{ marginBottom: 16 }}>Contact Us</h1>
          <p style={{ color: "#C5C1B9", fontSize: 16, lineHeight: "26px", maxWidth: 560, margin: "0 auto" }}>Get in touch with our team. We&apos;d love to hear about your project.</p>
        </div>
      </section>

      <section ref={formRef.ref} className="section">
        <div className="container" id="contact-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          {/* Contact Info */}
          <div style={{ opacity: formRef.inView ? 1 : 0, transform: formRef.inView ? "translateX(0)" : "translateX(-32px)", transition: "all 0.7s ease-out" }}>
            <div className="section-label">Get in Touch</div>
            <h2 style={{ marginBottom: 24 }}>Let&apos;s Discuss Your Project</h2>
            <p style={{ color: "#5f5e5dff", fontSize: 14, lineHeight: "22px", marginBottom: 32 }}>
              Whether you need PLC programming, SCADA development, or a complete turnkey solution — our team is ready to help.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {contactInfo.map((ci, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, minWidth: 44, borderRadius: 12, background: "rgba(255, 52, 52,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{ci.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#7F7D7A", letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{ci.label}</div>
                    {ci.values.map((v, vi) => (
                      <a key={vi} href={ci.links[vi]} target={ci.links[vi].startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#1B1B1B", textDecoration: "none", lineHeight: "22px" }}>{v}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32 }}>
              <AnimatedButton href="https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation" target="_blank" rel="noopener noreferrer" icon={<Phone />}>
                Schedule a Call
              </AnimatedButton>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ opacity: formRef.inView ? 1 : 0, transform: formRef.inView ? "translateX(0)" : "translateX(32px)", transition: "all 0.7s ease-out 0.15s" }}>
            <div className="card" style={{ padding: 32 }}>
              <h3 style={{ marginBottom: 24 }}>Request a Quote</h3>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h4 style={{ marginBottom: 8 }}>Message Sent!</h4>
                  <p style={{ fontSize: 14, color: "#5f5e5dff" }}>We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label className="input-label">Full Name</label>
                      <input type="text" className="input" placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="input-label">Company</label>
                      <input type="text" className="input" placeholder="Company name" />
                    </div>
                  </div>
                  <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label className="input-label">Email</label>
                      <input type="email" className="input" placeholder="email@company.com" required />
                    </div>
                    <div>
                      <label className="input-label">Phone</label>
                      <input type="tel" className="input" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="input-label">Service Needed</label>
                    <select className="input" style={{ cursor: "pointer" }} defaultValue="">
                      <option value="" disabled>Select a service</option>
                      <option>PLC Programming & Integration</option>
                      <option>Distributed Control Systems (DCS)</option>
                      <option>SCADA & HMI Development</option>
                      <option>Turnkey Project Execution</option>
                      <option>System Upgrades & Retrofits</option>
                      <option>Industrial Networking & Cybersecurity</option>
                      <option>Analytics & Reporting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="input-label">Message</label>
                    <textarea className="input" placeholder="Tell us about your project..." rows={5} required />
                  </div>
                  <AnimatedButton type="submit" className="w-full">Send Message</AnimatedButton>
                </form>
              )}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 799px) {
            #contact-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }
          @media (max-width: 599px) {
            .form-row {
              grid-template-columns: 1fr !important;
              gap: 12px !important;
            }
          }
        `}</style>
      </section>

      {/* Map */}
      <section style={{ background: "#F9F8F6", padding: "0" }}>
        <iframe
          title="Hive Automation Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d72.68!3d23.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzI0LjAiTiA3MsKwNDAnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
          style={{ width: "100%", height: 400, border: "none" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
