import Link from "next/link";
import Image from "next/image";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "PLC Programming & Integration", href: "/services/plc-programming-integration" },
  { label: "Distributed Control Systems (DCS)", href: "/services/distributed-control-systems" },
  { label: "SCADA & HMI Development", href: "/services/scada-hmi-development" },
  { label: "Turnkey Project Execution", href: "/services/turnkey-project-execution" },
  { label: "System Upgrades & Retrofits", href: "/services/system-upgrade-retrofits" },
  { label: "Industrial Networking & Security", href: "/services/industrial-networking-cybersecurity" },
  { label: "Analytics & Reporting", href: "/services/analytics-reporting" },
];

const industryLinks = [
  { label: "Pharmaceutical", href: "/projects/pharmaceutical" },
  { label: "Oil & Gas", href: "/projects/oil-gas" },
  { label: "Chemicals", href: "/projects/chemical" },
  { label: "System Retrofits", href: "/projects/retrofit-upgrade" },
];

export default function Footer() {
  return (
    <footer
      id="site-footer"
      style={{ background: "#1B1B1B", color: "#FFFFFF", padding: "64px 32px 32px" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 48,
        }}
      >
        {/* Brand Column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
            <Image
              src="/logo.png"
              alt="Hive Automation Logo"
              width={120}
              height={46}
              style={{
                height: 38,
                width: "auto",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>
          <p style={{ fontSize: 14, lineHeight: "22px", color: "#C5C1B9", marginBottom: 20 }}>
            Company was established in 2017, after having extensive experience in different
            Automation sectors to provide top-tier service with support.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="tel:+919978603840"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: 8,
                background: "rgba(255,255,255,0.08)",
                color: "#C5C1B9",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 200ms ease",
              }}
              title="Call us"
            >
              📞
            </a>
            <a
              href="https://wa.me/919978603840"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: 8,
                background: "rgba(255,255,255,0.08)",
                color: "#C5C1B9",
                fontSize: 14,
                textDecoration: "none",
                transition: "all 200ms ease",
              }}
              title="WhatsApp"
            >
              💬
            </a>
            <a
              href="mailto:info@hiveautomation.in"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: 8,
                background: "rgba(255,255,255,0.08)",
                color: "#C5C1B9",
                fontSize: 14,
                textDecoration: "none",
                transition: "all 200ms ease",
              }}
              title="Email us"
            >
              ✉️
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#FF3434",
              marginBottom: 20,
            }}
          >
            Company
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: 14,
                    color: "#C5C1B9",
                    textDecoration: "none",
                    fontWeight: 400,
                    transition: "color 200ms ease",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#FF3434",
              marginBottom: 20,
            }}
          >
            Services
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: 14,
                    color: "#C5C1B9",
                    textDecoration: "none",
                    fontWeight: 400,
                    transition: "color 200ms ease",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h4
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#FF3434",
              marginBottom: 20,
            }}
          >
            Industries
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {industryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: 14,
                    color: "#C5C1B9",
                    textDecoration: "none",
                    fontWeight: 400,
                    transition: "color 200ms ease",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#FF3434",
              marginBottom: 20,
            }}
          >
            Contact Us
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "#C5C1B9", fontSize: 14, lineHeight: "22px" }}>
            <div>
              <div style={{ fontWeight: 600, color: "#FFFFFF", marginBottom: 4 }}>Phone</div>
              <a href="tel:+919978603840" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}>
                +91 99786 03840
              </a>
            </div>
            <div>
              <div style={{ fontWeight: 600, color: "#FFFFFF", marginBottom: 4 }}>Email</div>
              <a href="mailto:info@hiveautomation.in" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}>
                info@hiveautomation.in
              </a>
            </div>
            <div>
              <div style={{ fontWeight: 600, color: "#FFFFFF", marginBottom: 4 }}>Address</div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hive+Automation+33+B+N+Industrial+Estate+Kathwada+GIDC+Odhav+Ahmedabad+382415"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}
              >
                33, B N Industrial Estate, Near Kathwada GIDC Gate No 5, S P Ring Road, Near Nikol,
                Odhav, Ahmedabad - 382415
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: "48px auto 0",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          fontSize: 13,
          color: "#C5C1B9",
        }}
      >
        <span>© {new Date().getFullYear()} Hive Automation. All rights reserved.</span>
        <div style={{ display: "flex", gap: 24 }}>
          <Link href="/contact" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400, fontSize: 13 }}>
            Privacy Policy
          </Link>
          <Link href="/contact" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400, fontSize: 13 }}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
