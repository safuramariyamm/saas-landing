"use client";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CTO at Veloce Labs",
    initials: "PS",
    color: "#6c6fff",
    stars: 5,
    quote: "We consolidated six tools into Nexus within two weeks. Our engineering team's output increased by 40% — not because they worked harder, but because the friction just vanished. It's like the tool gets out of the way.",
  },
  {
    name: "Marcus Chen",
    role: "Head of Product, Loopline",
    initials: "MC",
    color: "#34d399",
    stars: 5,
    quote: "The analytics alone are worth it. I used to spend half my Monday morning pulling data from four different places to build a status report. Now it's one click. The AI summaries are eerily accurate.",
  },
  {
    name: "Aisha Nkemdirim",
    role: "Design Lead at Forma Studio",
    initials: "AN",
    color: "#f472b6",
    stars: 5,
    quote: "As a creative team, we were skeptical of 'productivity' tools. Nexus actually feels designed. The attention to detail — the animations, the keyboard shortcuts, the way information is structured — it feels like it was made for us.",
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div className="orb" style={{
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)",
        top: "20%", right: -150,
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-label" style={{ display: "inline-flex", marginBottom: 20 }}>Testimonials</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginTop: 16,
            marginBottom: 16,
          }}>
            Loved by teams that{" "}
            <span className="gradient-text">move fast</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7 }}>
            Don't take our word for it — here's what real teams have to say.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card" style={{ padding: 36, position: "relative" }}>
              {/* Quote icon */}
              <div style={{
                position: "absolute", top: 24, right: 24,
                color: "var(--border)", opacity: 0.6,
              }}>
                <Quote size={32} />
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} style={{ fill: "#f7c94b", color: "#f7c94b" }} />
                ))}
              </div>

              {/* Quote */}
              <p style={{
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                fontSize: "0.93rem",
                marginBottom: 28,
                fontStyle: "italic",
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.75rem", fontWeight: 700, color: "white",
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{t.name}</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>{t.role}</div>
                </div>
              </div>

              {/* Bottom glow bar */}
              <div style={{
                position: "absolute", bottom: 0, left: "20%", right: "20%",
                height: 1,
                background: `linear-gradient(90deg, transparent, ${t.color}60, transparent)`,
              }} />
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div style={{ textAlign: "center", marginTop: 60, color: "var(--text-secondary)", fontSize: "0.85rem" }}>
          <p style={{ marginBottom: 20 }}>Trusted by teams at</p>
          <div style={{ display: "flex", gap: 40, justifyContent: "center", alignItems: "center", flexWrap: "wrap", opacity: 0.4 }}>
            {["Stripe", "Vercel", "Linear", "Notion", "Framer", "Loom"].map((company) => (
              <span key={company} className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
