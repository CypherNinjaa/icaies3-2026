import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Navigation } from "@/components/layout/Navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { siteMeta } from "@/content/site-meta";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteMeta.title} — ${siteMeta.fullTitle}`,
    template: `%s | ${siteMeta.title}`,
  },
  description: siteMeta.description,
  openGraph: {
    title: `${siteMeta.title} — ${siteMeta.fullTitle}`,
    description: siteMeta.description,
    type: "website",
    images: [{ url: siteMeta.ogImage }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-primary focus:text-white focus:p-4"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <Navigation />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
