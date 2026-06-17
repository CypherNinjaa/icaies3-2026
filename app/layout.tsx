import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { siteMeta } from "@/content/site-meta";
import { BackToTop } from "@/components/ui/BackToTop";
import { GlobalSchema } from "@/components/seo/GlobalSchema";
import { CookieConsent } from "@/components/ui/CookieConsent";

const poppins = {
  variable: "font-sans",
};

const playfair = {
  variable: "font-serif",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amitypatnaevents.in"),
  title: {
    default: `${siteMeta.title} — ${siteMeta.fullTitle}`,
    template: `%s | ${siteMeta.title}`,
  },
  description: siteMeta.description,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: `${siteMeta.title} — ${siteMeta.fullTitle}`,
    description: siteMeta.description,
    type: "website",
    images: [{ url: siteMeta.ogImage }],
    url: "https://www.amitypatnaevents.in",
    siteName: siteMeta.title,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.title} — ${siteMeta.fullTitle}`,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
  },
  icons: {
    icon: "/logos/amity-logo.png",
    apple: "/logos/amity-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Poppins:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <GlobalSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-primary focus:text-white focus:p-4"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <CookieConsent />
        <BackToTop />
      </body>
    </html>
  );
}
