"use client";
import { Zap, X, GitBranch, Link2, Rss } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Resources: ["Documentation", "API Reference", "Community", "Templates", "Integrations"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security"],
};

const socials = [
  { icon: X, label: "Twitter/X", href: "#" },
  { icon: GitBranch, label: "GitHub", href: "#" },
  { icon: Link2, label: "LinkedIn", href: "#" },
  { icon: Rss, label: "Blog", href: "#" },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "80px 24px 40px",
      position: "relative",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top: Logo + Links */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr repeat(4, 1fr)", gap: 40, marginBottom: 64 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: "linear-gradient(135deg, #6c6fff, #a78bfa)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 16px rgba(108,111,255,0.3)",
              }}>
                <Zap size={16} color="white" fill="white" />
              </div>
              <span className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700 }}>Nexus</span>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: 220, marginBottom: 24 }}>
              The intelligent workspace for teams that build the future.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-secondary)",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(108,111,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display" style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: 16 }}>
                {category}
              </h4>
              <ul style={{ listStyle: "none" }}>
                {links.map((link) => (
                  <li key={link} style={{ marginBottom: 10 }}>
                    <a
                      href="#"
                      style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem" }}>
            © {new Date().getFullYear()} Nexus Technologies, Inc. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a key={item} href="#" style={{ color: "var(--text-secondary)", fontSize: "0.82rem", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 640px) { .footer-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </footer>
  );
}
