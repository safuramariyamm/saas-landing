import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus — The Future of Team Collaboration",
  description: "Nexus is the all-in-one platform that unifies your team's workflows, communication, and analytics into a single, beautiful workspace.",
  keywords: ["collaboration", "SaaS", "productivity", "team", "workflow"],
  openGraph: {
    title: "Nexus — The Future of Team Collaboration",
    description: "Unify your team's workflows, communication, and analytics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
