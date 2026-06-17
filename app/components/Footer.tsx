"use client";

import Image from "next/image";
import Link from "next/link";
import { FlickeringGrid } from "./FlickeringGrid";
import { useEffect, useState } from "react";

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
  { label: "Industrial Networking & Cybersecurity", href: "/services/industrial-networking-cybersecurity" },
  { label: "Analytics & Reporting", href: "/services/analytics-reporting" },
];

const industryLinks = [
  { label: "Pharmaceutical", href: "/projects/pharmaceutical" },
  { label: "Oil & Gas", href: "/projects/oil-gas" },
  { label: "Chemicals", href: "/projects/chemical" },
  { label: "Other", href: "/projects" },
];

const phones = ["+91 99786 03840", "+91 99786 03841", "+91 99786 03842", "+91 99786 03843"];

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image
            src="/logo.png"
            alt="Hive Automation Logo"
            width={130}
            height={50}
            className="footer-logo"
          />
          <p>
            Company was established in 2017, after having enough experience in different
            automation sectors to provide the cream service with support.
          </p>
          <div className="footer-actions">
            <a href="tel:+919978603840">Call</a>
            <a href="https://wa.me/919978603840" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="mailto:info@hiveautomation.in">Email</a>
          </div>
        </div>

        <FooterLinks title="Company" links={companyLinks} />
        <FooterLinks title="Industry" links={industryLinks} />
        <FooterLinks title="Services" links={serviceLinks} />

        <div>
          <h2>Contact Us</h2>
          <div className="footer-contact">
            <div>
              <strong>Phone</strong>
              {phones.map((phone) => (
                <a href={`tel:${phone.replace(/\s/g, "")}`} key={phone}>
                  {phone}
                </a>
              ))}
            </div>
            <div>
              <strong>Email</strong>
              <a href="mailto:info@hiveautomation.in">info@hiveautomation.in</a>
            </div>
            <div>
              <strong>Address</strong>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hive+Automation+33+B+N+Industrial+Estate+Kathwada+GIDC+Odhav+Ahmedabad+382415"
                target="_blank"
                rel="noopener noreferrer"
              >
                33, B N Industrial Estate, Near Kathwada GIDC Gate No 5, S P Ring Road, Near Nikol,
                Odhav, Ahmedabad - 382415
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-flicker-area">
        <div className="flicker-gradient" />
        <div className="flicker-wrap">
          <FlickeringGrid
            text={isMobile ? "HIVE" : "HIVE AUTOMATION"}
            fontSize={isMobile ? 70 : 120}
            squareSize={2}
            gridGap={3}
            color="#ff3434"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>

      <div className="footer-bottom">
        <span>(c) {new Date().getFullYear()} Hive Automation. All rights reserved.</span>
        <span>Built for industrial automation, process control, and Siemens engineering teams.</span>
      </div>

      <style jsx global>{`
        .site-footer {
          background: #111214;
          color: #ffffff;
          padding: 72px 0 0;
          overflow: hidden;
        }
        .site-footer .footer-grid,
        .site-footer .footer-bottom {
          width: 100%;
          padding: 0 64px;
        }
        .site-footer .footer-bottom {
          padding-bottom: 30px;
        }
        .site-footer .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.75fr 0.75fr 1.05fr 1.25fr;
          gap: 34px;
        }
        .site-footer .footer-logo {
          width: auto;
          height: 42px;
          margin-bottom: 28px;
          filter: brightness(0) invert(1);
        }
        .site-footer p {
          max-width: 310px;
          color: rgba(255, 255, 255, 0.68);
          font-size: 14px;
          line-height: 1.65;
        }
        .site-footer h2 {
          margin: 0 0 18px;
          color: #ff3434;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .site-footer ul {
          display: grid;
          gap: 10px;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .site-footer a {
          color: rgba(255, 255, 255, 0.72);
          font-size: 14px;
          font-weight: 520;
          line-height: 1.45;
          text-decoration: none;
          transition: color 160ms ease;
        }
        .site-footer a:hover,
        .site-footer .footer-link-item:hover a {
          color: #ff3434;
        }
        .site-footer .footer-link-item {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }
        .site-footer .footer-link-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 300ms ease-out;
          color: #ff3434;
          border: 1px solid rgba(255, 52, 52, 0.3);
          border-radius: 4px;
          width: 18px;
          height: 18px;
        }
        .site-footer .footer-link-item:hover .footer-link-icon {
          opacity: 1;
          transform: translateX(4px);
        }
        .site-footer .footer-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }
        .site-footer .footer-actions a {
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          padding: 8px 12px;
          color: #ffffff;
          font-size: 12px;
          font-weight: 780;
        }
        .site-footer .footer-contact {
          display: grid;
          gap: 16px;
        }
        .site-footer .footer-contact div {
          display: grid;
          gap: 4px;
        }
        .site-footer strong {
          color: #ffffff;
          font-size: 13px;
        }
        .site-footer .footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          margin-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 22px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 13px;
        }
        .site-footer .footer-flicker-area {
          position: relative;
          width: 100%;
          height: 200px;
          margin-top: 64px;
          z-index: 0;
        }
        .site-footer .flicker-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(17, 18, 20, 0) 30%, #111214);
          z-index: 10;
          pointer-events: none;
        }
        .site-footer .flicker-wrap {
          position: absolute;
          inset: 0;
          margin: 0 24px;
        }
        @media (max-width: 1100px) {
          .site-footer .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .site-footer .footer-grid,
          .site-footer .footer-bottom {
            padding: 0 24px;
            grid-template-columns: 1fr;
          }
          .site-footer .footer-bottom {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.href} className="footer-link-item">
            <Link href={link.href}>{link.label}</Link>
            <span className="footer-link-icon">
              <svg viewBox="0 0 15 15" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.1584 3.13508C6.35985 2.95662 6.66436 2.97847 6.8383 3.18386L10.5883 7.60886C10.7431 7.79155 10.7431 8.05856 10.5883 8.24125L6.8383 12.6663C6.66436 12.8716 6.35985 12.8935 6.1584 12.715C5.95694 12.5366 5.9351 12.2285 6.11355 12.0271L9.46746 8.07505L6.11355 4.123C5.9351 3.92154 5.95694 3.61704 6.1584 3.43858V3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
