import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const siteUrl = "https://zakfaithfull.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zak Faithfull — Senior Full Stack Engineer",
  description:
    "Senior full stack engineer available for freelance and project work. I build fast, accessible web applications with React, Next.js, TypeScript, Node.js, and GraphQL.",
  keywords: [
    "Senior Full Stack Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Freelance",
    "Contract",
  ],
  authors: [{ name: "Zak Faithfull" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Zak Faithfull — Senior Full Stack Engineer",
    description:
      "Available for freelance and project work. Fast, accessible web applications built with React, Next.js, TypeScript, Node.js, and GraphQL.",
    siteName: "Zak Faithfull",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zak Faithfull — Senior Full Stack Engineer",
    description:
      "Available for freelance and project work. Fast, accessible web applications built with React, Next.js, TypeScript, Node.js, and GraphQL.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={lora.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
