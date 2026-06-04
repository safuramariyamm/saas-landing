"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50000, suffix: "+", label: "Active Users", description: "Teams worldwide trust Nexus daily" },
  { value: 99.9, suffix: "%", label: "Uptime SLA", description: "Enterprise-grade reliability" },
  { value: 4.2, suffix: "M", label: "Tasks Completed", description: "Delivered through our platform" },
  { value: 140, suffix: "+", label: "Countries", description: "Global reach across every timezone" },
];

function Counter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Number((eased * value).toFixed(value % 1 !== 0 ? 1 : 0)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <section style={{ padding: "80px 24px", position: "relative" }}>
      {/* Separator lines */}
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(108,111,255,0.06) 0%, rgba(167,139,250,0.06) 100%)",
          border: "1px solid var(--border)",
          borderRadius: 24,
          padding: "60px 40px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative grid lines */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            borderRadius: 24,
          }} />
          <div className="orb" style={{
            width: 400, height: 400,
            background: "radial-gradient(circle, rgba(108,111,255,0.12) 0%, transparent 70%)",
            top: -150, right: -100,
          }} />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 40,
            position: "relative",
            zIndex: 1,
          }} className="stats-grid">
            {stats.map((stat, i) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                {/* Divider between items */}
                {i > 0 && (
                  <div style={{
                    position: "absolute",
                    left: 0, top: "15%", bottom: "15%",
                    width: 1,
                    background: "var(--border)",
                  }} className="stat-divider" />
                )}

                <div className="font-display" style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  background: "linear-gradient(135deg, #fff 0%, var(--accent-2) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: 8,
                }}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  {stat.suffix}
                </div>

                <div className="font-display" style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: 6,
                  color: "var(--text-primary)",
                }}>
                  {stat.label}
                </div>

                <div style={{
                  fontSize: "0.82rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                }}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .stats-grid > div { position: relative; }
        @media (max-width: 768px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; } .stat-divider { display: none; } }
        @media (max-width: 480px) { .stats-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
