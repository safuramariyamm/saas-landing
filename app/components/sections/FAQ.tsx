"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How does the 14-day free trial work?",
    a: "You get full access to the Pro plan for 14 days — no credit card required. At the end of the trial, you can choose a plan or continue on the free Starter tier. There's no pressure, no gotchas.",
  },
  {
    q: "Can I migrate from our existing tools?",
    a: "Yes. We offer native importers for Notion, Asana, Jira, Trello, Linear, and more. Our onboarding team will personally help Enterprise customers migrate their entire setup — data, workflows, and all.",
  },
  {
    q: "Is our data secure and compliant?",
    a: "Absolutely. Nexus is SOC 2 Type II certified, GDPR compliant, and supports SSO/SAML for Enterprise plans. All data is encrypted at rest and in transit with AES-256. We never sell your data.",
  },
  {
    q: "What integrations does Nexus support?",
    a: "Nexus integrates with 100+ tools including GitHub, Figma, Slack, Google Workspace, Zoom, Salesforce, HubSpot, and many more. Our open API also lets you build custom integrations.",
  },
  {
    q: "How does pricing work for growing teams?",
    a: "Pricing is per seat — you only pay for active members. Seats can be added or removed at any time and billing is prorated. Annual plans include a 20% discount versus monthly.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Starter gets email support with 48h response. Pro gets priority support with 8h response. Enterprise gets a dedicated success manager, 24/7 support, and custom SLAs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: "100px 24px", position: "relative" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-label" style={{ display: "inline-flex", marginBottom: 20 }}>FAQ</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginTop: 16,
            marginBottom: 16,
          }}>
            Common <span className="gradient-text">questions answered</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-card)",
                border: `1px solid ${openIndex === i ? "rgba(108,111,255,0.3)" : "var(--border)"}`,
                borderRadius: 14,
                overflow: "hidden",
                transition: "border-color 0.3s",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  padding: "22px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  gap: 16,
                  textAlign: "left",
                }}
              >
                <span className="font-display" style={{
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: openIndex === i ? "var(--text-primary)" : "var(--text-secondary)",
                  transition: "color 0.2s",
                  lineHeight: 1.4,
                }}>
                  {faq.q}
                </span>
                <div style={{
                  width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                  background: openIndex === i ? "rgba(108,111,255,0.15)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${openIndex === i ? "rgba(108,111,255,0.3)" : "var(--border)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.2s, border-color 0.2s",
                }}>
                  {openIndex === i
                    ? <Minus size={14} color="var(--accent)" />
                    : <Plus size={14} color="var(--text-secondary)" />}
                </div>
              </button>

              <div style={{
                maxHeight: openIndex === i ? 200 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}>
                <p style={{
                  padding: "0 24px 22px",
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 40, color: "var(--text-secondary)", fontSize: "0.9rem" }}>
          Still have questions?{" "}
          <a href="#contact" style={{ color: "var(--accent-2)", textDecoration: "none", fontWeight: 600 }}>
            Talk to our team →
          </a>
        </p>
      </div>
    </section>
  );
}
