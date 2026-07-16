"use client";

import Image from "next/image";
import Link from "next/link";
import { FlickeringGrid } from "./FlickeringGrid";
import { useEffect, useState } from "react";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/our-services" },
  { label: "Projects", href: "/our-project" },
  { label: "Blogs", href: "/blogs" },
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
  { label: "Other", href: "/our-project" },
];

const phones = ["+91 99786 03840"];

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Newsletter Strip */}
      <div className="newsletter-strip">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            {/* <span className="newsletter-label">Newsletter</span> */}
            <p className="newsletter-heading">Sign Up to Get Latest Updates</p>
          </div>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </button>
          </form>
        </div>
        <style jsx global>{`
          .newsletter-strip {
            background: #ff3434;
            border-top: 1px solid rgba(255,255,255,0.18);
            border-bottom: 1px solid rgba(17,18,20,0.12);
            padding: 16px 64px;
          }
          .newsletter-inner {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 32px;
          }
          .newsletter-text {
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .newsletter-label {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #ff3434;
            background: rgba(255,52,52,0.1);
            padding: 4px 10px;
            border-radius: 4px;
            white-space: nowrap;
          }
          .newsletter-heading {
            font-size: 22px;
            font-weight: 800;
            color: #ffffff;
            margin: 0;
            white-space: nowrap;
            letter-spacing: -0.3px;
          }
          .newsletter-form {
            display: flex;
            align-items: center;
            gap: 0;
            flex-shrink: 0;
          }
          .newsletter-input {
            box-sizing: border-box;
            min-height: 42px;
            background: #ffffff;
            border: 1px solid rgba(255,255,255,0.72);
            border-right: none;
            border-radius: 6px 0 0 6px;
            padding: 0 16px;
            font-size: 13px;
            color: #111214;
            width: 240px;
            outline: none;
            transition: border-color 180ms ease, background 180ms ease;
          }
          .newsletter-input::placeholder {
            color: rgba(17,18,20,0.46);
          }
          .newsletter-input:focus {
            border-color: #111214;
            background: #ffffff;
          }
          .newsletter-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            min-height: 42px;
            box-sizing: border-box;
            background: #111214;
            color: #ffffff;
            font-size: 12px;
            font-weight: 650;
            border: none;
            border-radius: 0 var(--button-radius) var(--button-radius) 0;
            padding: 0 14px;
            cursor: pointer;
            transition: background 180ms ease;
            white-space: nowrap;
          }
          .newsletter-btn:hover {
            background: #2a2b2f;
          }
          @media (max-width: 768px) {
            .newsletter-strip {
              padding: 20px 24px;
            }
            .newsletter-inner {
              flex-direction: column;
              align-items: flex-start;
              gap: 16px;
            }
            .newsletter-heading {
              white-space: normal;
            }
            .newsletter-input {
              width: 180px;
            }
          }
        `}</style>
      </div>

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
            <a href="tel:+919978603840" aria-label="Call us" title="Call" className="footer-action-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <a href="mailto:info@hiveautomation.in" aria-label="Email us" title="Email" className="footer-action-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="https://wa.me/919978603840" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp" className="footer-action-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/hive-automation" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="footer-action-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
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
        <span>(c) {new Date().getFullYear()} Hive Automation. All Rights Reserved.</span>
        <span>Developed by <a href="https://www.spidlabs.com" target="_blank" rel="noopener noreferrer">SpidLabs</a></span>
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
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50%;
          color: rgba(255, 255, 255, 0.72);
          transition: background 200ms ease, color 200ms ease, border-color 200ms ease, transform 200ms ease;
        }
        .site-footer .footer-actions a:hover {
          background: #ff3434;
          border-color: #ff3434;
          color: #ffffff;
          transform: translateY(-2px);
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
    </>
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
