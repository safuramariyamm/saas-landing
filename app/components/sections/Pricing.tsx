"use client";
import { Check, Zap, Shield, Sparkles } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfect for small teams getting started.",
    color: "#6c6fff",
    features: [
      "Up to 5 team members",
      "10 active projects",
      "5GB storage",
      "Basic analytics",
      "Email support",
      "Core integrations",
    ],
    cta: "Get started free",
    popular: false,
  },
  {
    name: "Pro",
    icon: Sparkles,
    monthlyPrice: 49,
    annualPrice: 39,
    description: "Built for growing teams that need more power.",
    color: "#a78bfa",
    features: [
      "Up to 50 team members",
      "Unlimited projects",
      "100GB storage",
      "Advanced analytics & AI",
      "Priority support",
      "All integrations",
      "Custom workflows",
      "SSO & SAML",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Shield,
    monthlyPrice: 149,
    annualPrice: 119,
    description: "For organizations that demand the best.",
    color: "#34d399",
    features: [
      "Unlimited members",
      "Unlimited storage",
      "White-glove onboarding",
      "Dedicated success manager",
      "99.99% SLA guarantee",
      "Custom contracts",
      "Audit logs",
      "SOC 2 Type II",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div className="orb" style={{
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(108,111,255,0.07) 0%, transparent 70%)",
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-label" style={{ display: "inline-flex", marginBottom: 20 }}>Pricing</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginTop: 16,
            marginBottom: 16,
          }}>
            Simple, <span className="gradient-text">transparent pricing</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 32 }}>
            No hidden fees. No surprises. Cancel at any time.
          </p>

          {/* Toggle */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 14, background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 50, padding: "6px 6px 6px 20px" }}>
            <span style={{ fontSize: "0.88rem", color: !annual ? "var(--text-primary)" : "var(--text-secondary)" }}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              style={{
                width: 48, height: 26, borderRadius: 50, border: "none", cursor: "pointer",
                background: annual ? "var(--accent)" : "rgba(255,255,255,0.1)",
                position: "relative", transition: "background 0.3s", padding: 0,
              }}
            >
              <div style={{
                width: 20, height: 20, borderRadius: "50%", background: "white",
                position: "absolute", top: 3,
                left: annual ? 25 : 3, transition: "left 0.3s",
              }} />
            </button>
            <span style={{ fontSize: "0.88rem", color: annual ? "var(--text-primary)" : "var(--text-secondary)" }}>
              Annual
            </span>
            <span style={{
              background: "rgba(52,211,153,0.15)", color: "#34d399",
              border: "1px solid rgba(52,211,153,0.3)", borderRadius: 50,
              padding: "3px 10px", fontSize: "0.75rem", fontWeight: 600,
            }}>Save 20%</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "start" }} className="pricing-grid">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = annual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                style={{
                  background: plan.popular ? `linear-gradient(180deg, rgba(108,111,255,0.08) 0%, var(--bg-card) 100%)` : "var(--bg-card)",
                  border: `1px solid ${plan.popular ? "rgba(108,111,255,0.4)" : "var(--border)"}`,
                  borderRadius: 20,
                  padding: 36,
                  position: "relative",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  transform: plan.popular ? "scale(1.03)" : "scale(1)",
                  boxShadow: plan.popular ? "0 20px 60px rgba(108,111,255,0.15)" : "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = plan.popular ? "scale(1.05)" : "translateY(-6px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = plan.popular ? "scale(1.03)" : "translateY(0)";
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                    color: "white", borderRadius: 50, padding: "4px 16px",
                    fontSize: "0.75rem", fontWeight: 700, fontFamily: "Syne, sans-serif",
                    letterSpacing: "0.05em", whiteSpace: "nowrap",
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${plan.color}18`, border: `1px solid ${plan.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={20} color={plan.color} strokeWidth={1.5} />
                  </div>
                  <span className="font-display" style={{ fontWeight: 700, fontSize: "1.05rem" }}>{plan.name}</span>
                </div>

                <div style={{ marginBottom: 8 }}>
                  <span className="font-display" style={{ fontSize: "2.8rem", fontWeight: 800, letterSpacing: "-0.04em" }}>
                    {price === 0 ? "Free" : `$${price}`}
                  </span>
                  {price > 0 && (
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginLeft: 4 }}>/mo per seat</span>
                  )}
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginBottom: 28, lineHeight: 1.6 }}>{plan.description}</p>

                <a href="#contact" className={plan.popular ? "btn-primary" : "btn-secondary"} style={{ display: "block", textAlign: "center", marginBottom: 28, justifyContent: "center" }}>
                  {plan.cta}
                </a>

                <div style={{ height: 1, background: "var(--border)", marginBottom: 24 }} />

                <ul style={{ listStyle: "none" }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                      <Check size={15} style={{ color: plan.color, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; } }
      `}</style>
    </section>
  );
}
