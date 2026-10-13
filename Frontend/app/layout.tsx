import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

// Modern font loading: next/font downloads Inter at build time and serves it
// from the app's own origin (no render-blocking third-party <link> request),
// while keeping `display: swap` exactly like the original page.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Process — Build Better Every Day",
  description:
    "The Process is a platform dedicated to helping you develop your skills, stay consistent, and turn your goals into real progress — step by step.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}<Footer /></body>
    </html>
  );
}