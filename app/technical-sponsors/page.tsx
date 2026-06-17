import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { sponsorsContent } from "@/content/sponsors";
import { Handshake } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Technical Sponsors",
  description: "Technical sponsors and partners of ICAIES³ 2026.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TechnicalSponsorsPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <BreadcrumbSchema pageName="Technical Sponsors" route="/technical-sponsors" />
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pb-10 lg:pb-14 pt-4 lg:pt-6">
        <PageTitle lightText="Technical" accentText="Sponsors" description={sponsorsContent.description} />
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 mb-6">
            <Handshake className="w-12 h-12 text-accent" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-primary mb-3">Sponsorship Opportunities</h3>
          <p className="text-text-body leading-relaxed">
            We are actively seeking technical sponsors and industry partners for ICAIES³ 2026. If you are interested in sponsoring or partnering with us, please reach out to the organizing committee.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-bg-cream rounded-full px-5 py-2.5 text-sm text-primary font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Sponsors will be announced soon
          </div>
        </div>
      </div>
    </div>
  );
}
