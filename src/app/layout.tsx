import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const title = `${profile.name} | ${profile.headline}`;
const description = `${profile.name} is a ${profile.headline} based in ${profile.location.city}, ${profile.location.region}, building scalable web and mobile applications with React, Next.js, Node.js, NestJS and React Native.`;

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to the deployed URL so social previews resolve.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  authors: [{ name: profile.name }],
  keywords: [
    profile.name,
    "Full Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "React Native",
    profile.location.short,
  ],
  openGraph: {
    type: "profile",
    title,
    description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#141827",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
