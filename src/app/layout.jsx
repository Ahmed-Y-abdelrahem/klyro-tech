import "@/styles/globals.css";
import { spaceGrotesk, inter, jetbrainsMono, tajawal } from "@/lib/fonts";
import { siteUrl } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LocaleProvider } from "@/contexts/LocaleContext";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Klyro Tech — Engineering Digital Growth",
    template: "%s — Klyro Tech",
  },
  description:
    "Klyro Tech is a digital partner combining strategy, design, technology, and marketing under one ecosystem — from strategy to launch and growth, across Egypt, Saudi Arabia, and the GCC.",
  keywords: [
    "digital agency Egypt",
    "digital agency Saudi Arabia",
    "web development",
    "mobile app development",
    "UI/UX design",
    "digital marketing",
    "brand identity",
    "Klyro Tech",
  ],
  authors: [{ name: "Klyro Tech" }],
  openGraph: {
    title: "Klyro Tech — Engineering Digital Growth",
    description:
      "A digital partner combining strategy, design, technology, and marketing — from strategy to launch and growth.",
    url: siteUrl,
    siteName: "Klyro Tech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klyro Tech — Engineering Digital Growth",
    description:
      "A digital partner combining strategy, design, technology, and marketing — from strategy to launch and growth.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${tajawal.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body bg-space text-text antialiased">
        <ThemeProvider>
          <LocaleProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-space"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}