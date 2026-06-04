"use client";
import { Zap, Shield, BarChart3, GitBranch, Bell, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built on edge infrastructure with sub-100ms response times. Your team never waits — every action is instant.",
    color: "#f7c94b",
    glow: "rgba(247,201,75,0.15)",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified. End-to-end encryption, SSO, and granular permission controls keep your data safe.",
    color: "#34d399",
    glow: "rgba(52,211,153,0.15)",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Real-time dashboards with predictive insights. Understand team velocity, bottlenecks, and trends at a glance.",
    color: "#6c6fff",
    glow: "rgba(108,111,255,0.15)",
  },
  {
    icon: GitBranch,
    title: "Smart Workflows",
    description: "Visual workflow builder with AI suggestions. Automate repetitive tasks and focus on what truly matters.",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.15)",
  },
  {
    icon: Bell,
    title: "Intelligent Alerts",
    description: "Context-aware notifications that learn your preferences. Never miss critical updates, never get overwhelmed.",
    color: "#f472b6",
    glow: "rgba(244,114,182,0.15)",
  },
  {
    icon: Globe,
    title: "Global Collaboration",
    description: "Async-first design built for distributed teams. Work seamlessly across time zones with full context preserved.",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.15)",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      {/* Background orb */}
      <div className="orb" style={{
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(108,111,255,0.08) 0%, transparent 70%)",
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-flex" }}>Features</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginTop: 16,
            marginBottom: 20,
          }}>
            Everything your team needs,{" "}
            <span className="gradient-text">nothing it doesn't</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Thoughtfully designed features that work together — not a collection of disconnected tools duct-taped into one product.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }} className="features-grid">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="glass-card"
                style={{
                  padding: 32,
                  position: "relative",
                  overflow: "hidden",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Card glow on hover via CSS */}
                <div style={{
                  position: "absolute",
                  top: 0, left: 0,
                  width: 200, height: 200,
                  background: `radial-gradient(circle at top left, ${feature.glow} 0%, transparent 70%)`,
                  pointerEvents: "none",
                }} />

                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${feature.glow}`,
                  border: `1px solid ${feature.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 24,
                }}>
                  <Icon size={24} color={feature.color} strokeWidth={1.5} />
                </div>

                <h3 className="font-display" style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  marginBottom: 12,
                  letterSpacing: "-0.02em",
                }}>
                  {feature.title}
                </h3>

                <p style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}>
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)`,
                  opacity: 0,
                  transition: "opacity 0.3s",
                }} className="card-accent-line" />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .features-grid { grid-template-columns: 1fr !important; } }
        .glass-card:hover .card-accent-line { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
