import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { Mic } from "lucide-react";

export const metadata: Metadata = {
  title: "Keynote Speakers",
  description:
    "Keynote speakers for ICAIES³ 2026 — to be announced soon.",
};

export default function KeynoteSpeakersPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pb-10 lg:pb-14 pt-4 lg:pt-6">
        <PageTitle
          lightText="Keynote"
          accentText="Speakers"
          description="Distinguished experts from academia and industry will share their insights at ICAIES³ 2026."
        />

        {/* Coming Soon State */}
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 mb-6">
            <Mic className="w-12 h-12 text-accent" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-primary mb-3">
            Coming Soon
          </h3>
          <p className="text-text-body leading-relaxed">
            Our keynote speakers will be announced shortly. Stay tuned for
            updates on the distinguished experts who will be sharing their
            insights at ICAIES³ 2026.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-bg-cream rounded-full px-5 py-2.5 text-sm text-primary font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Announcements coming soon
          </div>
        </div>
      </div>
    </div>
  );
}
