import type { Metadata } from "next";
import { Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Cercil - Revenue operations platform",
  description:
    "Cercil unifies billing, usage, and renewals for modern revenue teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full [color-scheme:light]">
      <body
        className={`${spaceGrotesk.variable} ${fraunces.variable} min-h-full bg-[#f6f1e7] text-[#1f1a14] font-[var(--font-sans)] antialiased`}
      >
        <div className="relative min-h-screen overflow-x-hidden before:fixed before:inset-0 before:-z-10 before:content-[''] before:bg-[radial-gradient(900px_600px_at_5%_-10%,rgba(255,245,224,0.8),transparent_60%),radial-gradient(800px_600px_at_90%_10%,rgba(199,228,221,0.6),transparent_55%),linear-gradient(180deg,rgba(255,250,240,0.6)_0%,rgba(246,241,231,0.9)_100%)]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
