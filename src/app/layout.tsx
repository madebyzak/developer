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
  title: "Zak Faithfull — Senior Frontend Developer",
  description:
    "Senior frontend developer available for freelance and contract work. I build fast, accessible, and delightful web experiences with React, Next.js, and TypeScript.",
  keywords: [
    "Senior Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Freelance",
    "Contract",
    "Design Systems",
    "Web Performance",
  ],
  authors: [{ name: "Zak Faithfull" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Zak Faithfull — Senior Frontend Developer",
    description:
      "Available for freelance and contract work. Fast, accessible, delightful web experiences built with React, Next.js, and TypeScript.",
    siteName: "Zak Faithfull",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zak Faithfull — Senior Frontend Developer",
    description:
      "Available for freelance and contract work. Fast, accessible, delightful web experiences built with React, Next.js, and TypeScript.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={lora.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
