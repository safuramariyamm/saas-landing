"use client";
import { useState } from "react";
import { Send, Mail, MessageSquare, User } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div className="orb" style={{
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(108,111,255,0.1) 0%, transparent 70%)",
        bottom: -100, right: -100,
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "center" }} className="contact-grid">
          {/* Left */}
          <div>
            <span className="section-label" style={{ display: "inline-flex", marginBottom: 20 }}>Contact</span>
            <h2 className="font-display" style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginTop: 16,
              marginBottom: 24,
            }}>
              Let's start a <span className="gradient-text">conversation</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem", marginBottom: 48 }}>
              Whether you're ready to switch or just curious, we'd love to hear from you. Our team typically responds within a few hours.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: Mail, label: "Email us", value: "hello@nexus.app" },
                { icon: MessageSquare, label: "Live chat", value: "Available 9am–6pm PT" },
                { icon: User, label: "Sales", value: "sales@nexus.app" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: "rgba(108,111,255,0.1)",
                    border: "1px solid rgba(108,111,255,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color="var(--accent)" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginBottom: 2 }}>{label}</div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 500 }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: 40,
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "1.8rem",
                }}>
                  ✓
                </div>
                <h3 className="font-display" style={{ fontWeight: 700, fontSize: "1.3rem", marginBottom: 12, color: "#34d399" }}>
                  Message received!
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  Thanks for reaching out. A member of our team will get back to you within a few hours.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="font-display" style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 28 }}>
                  Send us a message
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: 8, fontWeight: 500 }}>Your name</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Alex Johnson"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: 8, fontWeight: 500 }}>Email address</label>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: 8, fontWeight: 500 }}>Subject</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: 8, fontWeight: 500 }}>Message</label>
                  <textarea
                    className="input-field"
                    placeholder="Tell us about your team's needs..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ resize: "vertical", minHeight: 120 }}
                  />
                </div>

                <button className="btn-primary" onClick={handleSubmit} style={{ width: "100%", justifyContent: "center", padding: "14px 28px" }}>
                  Send message <Send size={16} />
                </button>

                <p style={{ textAlign: "center", marginTop: 16, fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}
