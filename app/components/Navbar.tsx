"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      id="main-navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #DCDAD5" : "1px solid transparent",
        transition: "all 300ms ease-out",
        boxShadow: scrolled ? "0px 2px 8px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          id="nav-logo"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo.png"
            alt="Hive Automation Logo"
            width={120}
            height={46}
            style={{
              height: 38,
              width: "auto",
              objectFit: "contain",
            }}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            listStyle: "none",
            gap: 4,
            margin: 0,
            padding: 0,
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  id={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: isActive ? "#FF3434" : "#1B1B1B",
                    textDecoration: "none",
                    padding: "8px 12px",
                    borderRadius: 8,
                    transition: "color 200ms ease-out, background 200ms ease-out",
                    borderBottom: isActive ? "2px solid #FF3434" : "2px solid transparent",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.target as HTMLElement).style.color = "#FF3434";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.target as HTMLElement).style.color = "#1B1B1B";
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav-cta-desktop"
          id="nav-schedule-call"
          style={{ textDecoration: "none" }}
        >
          Schedule a Call
        </Link>

        {/* Mobile Hamburger */}
        <button
          id="nav-hamburger"
          aria-label="Toggle menu"
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            padding: 8,
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 1010,
          }}
        >
          <span
            style={{
              width: 24,
              height: 2,
              background: "#1B1B1B",
              borderRadius: 2,
              transition: "all 300ms ease",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              width: 24,
              height: 2,
              background: "#1B1B1B",
              borderRadius: 2,
              transition: "all 300ms ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: 24,
              height: 2,
              background: "#1B1B1B",
              borderRadius: 2,
              transition: "all 300ms ease",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="nav-mobile-menu"
        style={{
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          background: "#FFFFFF",
          padding: "24px 32px",
          borderTop: "1px solid #DCDAD5",
          gap: 8,
        }}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: isActive ? "#FF3434" : "#1B1B1B",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid #F9F8F6",
              }}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ marginTop: 16, textDecoration: "none", textAlign: "center" }}
        >
          Schedule a Call
        </Link>
      </div>

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-cta-desktop { display: inline-flex !important; }
        .nav-hamburger { display: none !important; }

        @media (max-width: 999px) {
          .nav-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
