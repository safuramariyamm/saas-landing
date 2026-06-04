"use client";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

const highlights = ["No credit card required", "14-day free trial", "Cancel anytime"];

export default function Hero() {
  return (
    <section
      id="home"
      className="noise-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div className="orb animate-pulse-glow" style={{
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(108,111,255,0.18) 0%, transparent 70%)",
        top: -100, left: "50%", transform: "translateX(-60%)",
      }} />
      <div className="orb" style={{
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)",
        bottom: 0, right: -100,
      }} />
      <div className="orb" style={{
        width: 300, height: 300,
        background: "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)",
        top: "20%", left: -50,
      }} />

      <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}
          className="hero-grid">

          {/* Left: Text */}
          <div>
            <div className="animate-fade-up" style={{ marginBottom: 24 }}>
              <span className="section-label">
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", display: "inline-block" }} />
                Now in public beta
              </span>
            </div>

            <h1 className="font-display animate-fade-up-delay-1" style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}>
              The workspace that{" "}
              <span className="gradient-text">thinks ahead</span>
              {" "}of your team
            </h1>

            <p className="animate-fade-up-delay-2" style={{
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 480,
            }}>
              Nexus unifies your team's workflows, communication, and analytics
              into one intelligent workspace. Less friction. More flow.
            </p>

            <div className="animate-fade-up-delay-3" style={{ display: "flex", gap: 14, marginBottom: 32, flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 28px" }}>
                Start for free <ArrowRight size={18} />
              </a>
              <button className="btn-secondary" style={{ fontSize: "1rem", padding: "14px 28px" }}>
                <Play size={16} style={{ fill: "currentColor" }} /> Watch demo
              </button>
            </div>

            <div className="animate-fade-up-delay-4" style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {highlights.map((h) => (
                <span key={h} style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                  <CheckCircle size={14} style={{ color: "var(--green)" }} />
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="animate-float hero-visual" style={{ position: "relative" }}>
            {/* Outer glow */}
            <div style={{
              position: "absolute", inset: -20,
              background: "radial-gradient(ellipse, rgba(108,111,255,0.15) 0%, transparent 70%)",
              borderRadius: 24,
            }} />

            {/* Main card */}
            <div style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
            }}>
              {/* Topbar */}
              <div style={{
                background: "#0a0a1a",
                padding: "12px 20px",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                <div style={{
                  marginLeft: 12, flex: 1,
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 6, height: 22,
                  display: "flex", alignItems: "center",
                  padding: "0 10px", fontSize: "0.7rem", color: "var(--text-secondary)",
                }}>
                  nexus.app/dashboard
                </div>
              </div>

              {/* Dashboard body */}
              <div style={{ padding: 20 }}>
                {/* Stats row */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
                  {[
                    { label: "Tasks Done", value: "248", color: "#6c6fff" },
                    { label: "Team Active", value: "12", color: "#34d399" },
                    { label: "Efficiency", value: "94%", color: "#a78bfa" },
                  ].map((s) => (
                    <div key={s.label} style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      padding: "12px",
                    }}>
                      <div style={{ fontSize: "1.4rem", fontWeight: 700, color: s.color, fontFamily: "Syne, sans-serif" }}>{s.value}</div>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-secondary)", marginTop: 2 }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: 16,
                  marginBottom: 16,
                  height: 120,
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: 8 }}>Weekly Performance</div>
                  <svg viewBox="0 0 300 70" style={{ width: "100%", height: 70 }}>
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6c6fff" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#6c6fff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,60 L40,45 L80,50 L120,30 L160,35 L200,20 L240,25 L300,10" stroke="#6c6fff" strokeWidth="2" fill="none" />
                    <path d="M0,60 L40,45 L80,50 L120,30 L160,35 L200,20 L240,25 L300,10 L300,70 L0,70Z" fill="url(#chartGrad)" />
                    <path d="M0,65 L40,55 L80,60 L120,45 L160,50 L200,38 L240,42 L300,30" stroke="#34d399" strokeWidth="1.5" fill="none" opacity="0.6" />
                  </svg>
                </div>

                {/* Task list */}
                {[
                  { task: "Redesign onboarding flow", pct: 85, color: "#6c6fff" },
                  { task: "API v2 integration", pct: 60, color: "#a78bfa" },
                  { task: "Q3 analytics report", pct: 40, color: "#34d399" },
                ].map((t) => (
                  <div key={t.task} style={{ marginBottom: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>{t.task}</span>
                      <span style={{ fontSize: "0.75rem", color: t.color, fontWeight: 600 }}>{t.pct}%</span>
                    </div>
                    <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
                      <div style={{ height: "100%", width: `${t.pct}%`, background: t.color, borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating notification */}
            <div style={{
              position: "absolute",
              bottom: -20,
              left: -30,
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              minWidth: 200,
            }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #6c6fff, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", color: "white", fontWeight: 700 }}>JD</div>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 600 }}>Task completed</div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-secondary)" }}>2 seconds ago</div>
              </div>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)", marginLeft: 4 }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none; }
        }
      `}</style>
    </section>
  );
}
