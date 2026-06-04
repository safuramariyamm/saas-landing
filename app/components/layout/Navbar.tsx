"use client";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        background: scrolled ? "rgba(6,6,16,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8,
            background: "linear-gradient(135deg, #6c6fff, #a78bfa)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 20px rgba(108,111,255,0.4)",
          }}>
            <Zap size={18} color="white" fill="white" />
          </div>
          <span className="font-display" style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
            Nexus
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }} className="desktop-nav">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: 8,
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--text-primary)";
                (e.target as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--text-secondary)";
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }} className="desktop-nav">
          <a href="#contact" className="btn-secondary" style={{ padding: "9px 20px", fontSize: "0.875rem" }}>
            Sign In
          </a>
          <a href="#contact" className="btn-primary" style={{ padding: "9px 20px", fontSize: "0.875rem" }}>
            Get Started Free
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          style={{
            background: "none", border: "none", color: "var(--text-primary)",
            cursor: "pointer", padding: 4,
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: "rgba(6,6,16,0.98)",
          borderTop: "1px solid var(--border)",
          padding: "16px 24px 24px",
        }}>
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block", color: "var(--text-secondary)", textDecoration: "none",
                padding: "12px 0", fontSize: "1rem", borderBottom: "1px solid var(--border)",
              }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="#contact" className="btn-secondary" style={{ justifyContent: "center" }}>Sign In</a>
            <a href="#contact" className="btn-primary" style={{ justifyContent: "center" }}>Get Started Free</a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .mobile-menu-btn { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  );
}
