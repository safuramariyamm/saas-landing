"use client";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", text: "To eliminate friction from collaborative work — giving teams the mental space to do their best thinking.", color: "#6c6fff" },
  { icon: Eye, title: "Vision", text: "A world where every team, regardless of size or geography, operates with the clarity of a world-class organization.", color: "#a78bfa" },
  { icon: Heart, title: "Values", text: "Radical transparency, deep customer empathy, and a relentless pursuit of craft in everything we ship.", color: "#f472b6" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div className="orb" style={{
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)",
        bottom: -100, left: -100,
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="about-grid">
          {/* Left column */}
          <div>
            <span className="section-label" style={{ marginBottom: 20, display: "inline-flex" }}>About Us</span>

            <h2 className="font-display" style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginTop: 16,
              marginBottom: 28,
            }}>
              Built by a team that <span className="gradient-text">felt the pain</span> firsthand
            </h2>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 20, fontSize: "1rem" }}>
              Nexus was born in 2021 from a simple frustration: our founding team was juggling seven different tools to get one project shipped. Slack for chat, Notion for docs, Jira for tasks, Figma for design — the context-switching was killing our velocity.
            </p>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 32, fontSize: "1rem" }}>
              We set out to build the workspace we always wished existed. One that brings information, people, and workflows into a unified surface — intelligent enough to surface what matters, invisible enough to stay out of your way.
            </p>

            {/* Team avatars */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ display: "flex" }}>
                {["#6c6fff", "#a78bfa", "#34d399", "#f472b6", "#38bdf8"].map((c, i) => (
                  <div key={i} style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${c}, ${c}88)`,
                    border: "2px solid var(--bg)",
                    marginLeft: i > 0 ? -12 : 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.7rem", fontWeight: 700, color: "white",
                  }}>
                    {["A", "K", "M", "S", "R"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>50+ team members</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>across 12 countries</div>
              </div>
            </div>
          </div>

          {/* Right column: Values */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {values.map(({ icon: Icon, title, text, color }) => (
              <div key={title} className="glass-card" style={{ padding: 28, display: "flex", gap: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: `${color}18`,
                  border: `1px solid ${color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={20} color={color} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-display" style={{ fontWeight: 700, marginBottom: 8, fontSize: "0.95rem" }}>{title}</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.7 }}>{text}</div>
                </div>
              </div>
            ))}

            {/* Founded box */}
            <div style={{
              background: "linear-gradient(135deg, rgba(108,111,255,0.1), rgba(167,139,250,0.1))",
              border: "1px solid rgba(108,111,255,0.2)",
              borderRadius: 16, padding: 24, marginTop: 4,
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginBottom: 4 }}>Founded</div>
                <div className="font-display" style={{ fontWeight: 700, fontSize: "1.1rem" }}>2021 · San Francisco</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginBottom: 4 }}>Funding</div>
                <div className="font-display" style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--gold)" }}>$28M Series A</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}
