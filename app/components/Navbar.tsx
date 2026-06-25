"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
  subLinks?: { label: string; href: string }[];
};

const scheduleUrl = "https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation";

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    subLinks: [
      { label: "PLC Programming & Integration", href: "/services/plc-programming-integration" },
      { label: "Distributed Control Systems (DCS)", href: "/services/distributed-control-systems" },
      { label: "SCADA & HMI Development", href: "/services/scada-hmi-development" },
      { label: "Turnkey Project Execution", href: "/services/turnkey-project-execution" },
      { label: "System Upgrades & Retrofits", href: "/services/system-upgrade-retrofits" },
      { label: "Industrial Networking & Cybersecurity", href: "/services/industrial-networking-cybersecurity" },
      { label: "Analytics & Reporting", href: "/services/analytics-reporting" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    subLinks: [
      { label: "Pharmaceutical Automation", href: "/projects/pharmaceutical" },
      { label: "Chemical Plant Control", href: "/projects/chemical" },
      { label: "Oil & Gas DCS", href: "/projects/oil-gas" },
      { label: "Refinery Compressor Control", href: "/projects/refinery" },
      { label: "Hydrogenation Plant", href: "/projects/hydrogenation-plant" },
      { label: "Ethyl Acetate Plant", href: "/projects/ethyl-acetate" },
      { label: "Asphalt Batching Plant", href: "/projects/asphalt-batching" },
      { label: "Retrofit & Upgrades", href: "/projects/retrofit-upgrade" },
    ],
  },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMobile = () => setMobileOpen(false);
  const isActive = (link: NavLink) => pathname === link.href || pathname.startsWith(`${link.href}/`);

  return (
    <header className="navbar">
      <nav className="navbar-inner" aria-label="Main navigation">
        <Link className="navbar-logo" href="/" aria-label="Hive Automation home" onClick={closeMobile}>
          <Image src="/logo.png" alt="Hive Automation Logo" width={150} height={58} preload />
        </Link>

        <ul className="navbar-menu">
          {navLinks.map((link) => {
            const hasDropdown = !!link.subLinks?.length;
            const active = isActive(link);
            const dropdownOpen = openDropdown === link.label;

            return (
              <li
                className="navbar-item"
                key={link.href}
                onMouseEnter={() => hasDropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                onFocus={() => hasDropdown && setOpenDropdown(link.label)}
              >
                <Link
                  className={`navbar-link ${active ? "active" : ""}`}
                  href={link.href}
                  aria-haspopup={hasDropdown ? "menu" : undefined}
                  aria-expanded={hasDropdown ? dropdownOpen : undefined}
                >
                  <span>{link.label}</span>
                  {hasDropdown ? <span className="navbar-caret" aria-hidden="true" /> : null}
                </Link>

                {hasDropdown ? (
                  <div className={`navbar-dropdown ${dropdownOpen ? "open" : ""}`} role="menu">
                    <div className="dropdown-card">
                      <span className="dropdown-arrow" aria-hidden="true" />
                      <Link className="dropdown-all" href={link.href} role="menuitem">
                        <span>View All {link.label}</span>
                        <span aria-hidden="true">-&gt;</span>
                      </Link>
                      <div className="dropdown-grid">
                        {link.subLinks?.map((subLink) => (
                          <Link
                            className={`dropdown-link ${pathname === subLink.href ? "active" : ""}`}
                            href={subLink.href}
                            key={subLink.href}
                            role="menuitem"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>

        <Link className="navbar-cta" href={scheduleUrl} target="_blank" rel="noopener noreferrer">
          Schedule a Call
        </Link>

        <button
          className="navbar-toggle"
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={22} strokeWidth={2.2} /> : <Menu size={23} strokeWidth={2.2} />}
        </button>
      </nav>

      <div className={`mobile-panel ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <div className="mobile-group" key={link.href}>
            <Link className={`mobile-link ${isActive(link) ? "active" : ""}`} href={link.href} onClick={closeMobile}>
              {link.label}
            </Link>
            {link.subLinks?.map((subLink) => (
              <Link
                className={`mobile-sublink ${pathname === subLink.href ? "active" : ""}`}
                href={subLink.href}
                key={subLink.href}
                onClick={closeMobile}
              >
                {subLink.label}
              </Link>
            ))}
          </div>
        ))}
        <Link className="navbar-cta mobile-cta" href={scheduleUrl} target="_blank" rel="noopener noreferrer">
          Schedule a Call
        </Link>
      </div>

      <style jsx global>{`
        .navbar {
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          z-index: 1000;
          height: 80px;
          border-bottom: 1px solid rgba(223, 227, 234, 0.94);
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 10px 28px rgba(17, 18, 20, 0.06);
          backdrop-filter: saturate(140%) blur(14px);
        }

        .navbar-inner {
          width: min(1200px, calc(100% - 48px));
          height: 80px;
          display: grid;
          grid-template-columns: 190px minmax(0, 1fr) auto;
          align-items: center;
          gap: 30px;
          margin: 0 auto;
        }

        .navbar-logo {
          display: inline-flex;
          width: 190px;
          align-items: center;
          justify-content: flex-start;
        }

        .navbar-logo img {
          width: auto;
          height: 44px;
          object-fit: contain;
        }

        .navbar-menu {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          min-width: 0;
          margin: 0;
          padding: 0 10px;
          list-style: none;
          height: 100%;
        }

        .navbar-item {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
        }

        .navbar-link {
          position: relative;
          display: inline-flex;
          height: 44px;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border-radius: 8px;
          padding: 0 12px;
          color: var(--black);
          font-size: 14.5px;
          font-weight: 680;
          line-height: 1;
          text-decoration: none;
          white-space: nowrap;
          outline: none;
          transition: color 180ms ease;
        }

        .navbar-link:hover,
        .navbar-link:focus-visible,
        .navbar-link.active {
          color: var(--red);
        }

        .navbar-link:focus-visible {
          box-shadow: 0 0 0 3px rgba(255, 52, 52, 0.14);
        }

        .navbar-caret {
          display: inline-flex;
          width: 7px;
          height: 7px;
          flex: 0 0 7px;
          align-items: center;
          align-self: center;
          justify-content: center;
          border-right: 1.5px solid currentColor;
          border-bottom: 1.5px solid currentColor;
          margin-left: 1px;
          transform: translateY(-2px) rotate(45deg);
          transform-origin: 50% 50%;
          transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .navbar-item:hover .navbar-caret,
        .navbar-item:focus-within .navbar-caret {
          transform: translateY(1px) rotate(225deg);
        }

        .navbar-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          z-index: 1002;
          width: max-content;
          min-width: 430px;
          max-width: calc(100vw - 40px);
          padding-top: 16px;
          opacity: 0;
          pointer-events: none;
          transform: translateX(-50%) translateY(8px);
          transform-origin: top center;
          transition:
            opacity 180ms ease,
            transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .navbar-dropdown.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        .dropdown-card {
          position: relative;
          border: 1px solid rgba(226, 230, 237, 0.95);
          border-radius: var(--radius);
          background: var(--white);
          padding: 8px;
          box-shadow: 0 24px 56px rgba(17, 18, 20, 0.14);
        }

        .dropdown-arrow {
          position: absolute;
          top: -7px;
          left: 50%;
          width: 14px;
          height: 14px;
          border-top: 1px solid #e2e6ed;
          border-left: 1px solid #e2e6ed;
          background: #ffffff;
          transform: translateX(-50%) rotate(45deg);
        }

        .dropdown-all {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-radius: 6px;
          border-bottom: 1px solid #eef1f5;
          padding: 11px 12px;
          color: var(--red);
          font-size: 13px;
          font-weight: 820;
          line-height: 1;
          text-decoration: none;
        }

        .dropdown-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 4px;
          padding-top: 6px;
        }

        .dropdown-link {
          display: flex;
          min-height: 40px;
          align-items: center;
          border-radius: 6px;
          padding: 9px 11px;
          color: #292d35;
          font-size: 13px;
          font-weight: 650;
          line-height: 1.28;
          text-decoration: none;
          transition: background 160ms ease, color 160ms ease, padding-left 160ms ease;
        }

        .dropdown-all:hover,
        .dropdown-all:focus-visible,
        .dropdown-link:hover,
        .dropdown-link:focus-visible,
        .dropdown-link.active {
          background: rgba(255, 52, 52, 0.08);
          color: #ff3434;
          padding-left: 14px;
          outline: none;
        }

        .navbar-cta {
          display: inline-flex;
          width: auto;
          padding: 0 14px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: var(--button-radius);
          border: 1px solid var(--red);
          background: var(--red);
          color: var(--white);
          font-size: var(--button-font-size);
          font-weight: 760;
          line-height: 1;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 12px 24px rgba(255, 52, 52, 0.22);
          transition: background 160ms ease, transform 160ms ease, box-shadow 160ms ease;
        }

        .navbar-cta:hover,
        .navbar-cta:focus-visible {
          border-color: var(--red-dark);
          background: var(--red-dark);
          color: var(--white);
          box-shadow: 0 16px 30px rgba(255, 52, 52, 0.3);
          transform: translateY(-1px);
          outline: none;
        }

        .navbar-cta:active {
          transform: scale(0.98);
        }

        .navbar-toggle {
          display: none;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(21, 23, 28, 0.14);
          border-radius: var(--button-radius);
          background: linear-gradient(180deg, #ffffff 0%, #f7f8fb 100%);
          color: #15171c;
          padding: 0;
          place-items: center;
          cursor: pointer;
          box-shadow: 0 10px 22px rgba(17, 18, 20, 0.08);
          transition:
            border-color 160ms ease,
            background 160ms ease,
            color 160ms ease,
            transform 160ms ease,
            box-shadow 160ms ease;
        }

        .navbar-toggle:hover,
        .navbar-toggle:focus-visible {
          border-color: rgba(255, 52, 52, 0.42);
          background: #ffffff;
          color: #ff3434;
          box-shadow: 0 14px 28px rgba(255, 52, 52, 0.14);
          outline: none;
        }

        .navbar-toggle:active {
          transform: scale(0.96);
        }

        .mobile-panel {
          display: none;
        }

        @media (max-width: 1120px) {
          .navbar-inner {
            width: min(1200px, calc(100% - 40px));
            grid-template-columns: 190px 44px;
            justify-content: space-between;
          }

          .navbar-menu,
          .navbar-inner > .navbar-cta {
            display: none;
          }

          .navbar-toggle {
            display: grid;
          }

          .mobile-panel.open {
            display: grid;
            max-height: calc(100vh - 80px);
            overflow-y: auto;
            border-bottom: 1px solid #e7ebf1;
            background: #ffffff;
            padding: 18px 24px 24px;
            gap: 12px;
            box-shadow: 0 18px 42px rgba(17, 18, 20, 0.1);
          }

          .mobile-group {
            display: grid;
            gap: 6px;
          }

          .mobile-link,
          .mobile-sublink {
            text-decoration: none;
          }

          .mobile-link {
            color: #15171c;
            font-size: 16px;
            font-weight: 780;
          }

          .mobile-link.active,
          .mobile-sublink.active {
            color: #ff3434;
          }

          .mobile-sublink {
            padding-left: 14px;
            color: #656b76;
            font-size: 13px;
            font-weight: 620;
            line-height: 1.35;
          }

          .mobile-cta {
            width: 100%;
            margin-top: 8px;
          }
        }

        @media (max-width: 640px) {
          .navbar-inner {
            width: min(1200px, calc(100% - 32px));
            grid-template-columns: 170px 44px;
          }

          .navbar-logo {
            width: 170px;
          }

          .navbar-logo img {
            height: 38px;
          }
        }
      `}</style>
    </header>
  );
}
