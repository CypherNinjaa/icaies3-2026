import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { contactInfo } from "@/content/contact";
import { MapPin, Mail, ExternalLink, Phone, Navigation } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ContactPageSchema } from "@/components/seo/ContactPageSchema";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the ICAIES³ 2026 organizing committee. Address, phone, and email information for conference convenors.",
};

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5!2d85.0520669!3d25.6123065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed56457e773c5d%3A0x26f4637f762e3747!2sAmity%20University%2C%20Patna!5e0!3m2!1sen!2sin!4v1";

const MAPS_LINK_URL = "https://maps.app.goo.gl/X81ZRHEV5GdTZ4Rw9";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <SiteHeader />
      <BreadcrumbSchema pageName="Contact" route="/contact" />
      <ContactPageSchema />
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pb-10 lg:pb-14 pt-4 lg:pt-6">
        <PageTitle
          lightText=""
          accentText="Contact"
          description="Get in touch with the ICAIES³ 2026 organizing committee for paper submissions, registrations, or general inquiries."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          {/* Contact Info */}
          <div className="space-y-5">
            {/* Contact Persons */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">Convenors &amp; Organizing Contacts</h3>
                  <p className="text-xs text-text-muted">Direct contact for conference and poster queries</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {contactInfo.contactPersons.map((person, idx) => (
                  <div key={idx} className="bg-bg-cream/60 rounded-xl p-4 border border-gray-100">
                    <p className="font-bold text-primary text-sm">{person.name}</p>
                    <p className="text-xs text-text-muted mt-0.5">{person.affiliation}</p>
                    <p className="text-xs font-semibold text-accent-contrast mt-1">{person.role}</p>
                    <a
                      href={`tel:${person.phone}`}
                      className="inline-flex items-center gap-2 mt-3 font-mono text-sm font-bold text-primary hover:text-accent transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-accent" />
                      {person.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary mb-1">
                    Official Email
                  </h3>
                  <p className="text-sm text-text-body leading-relaxed mb-3">
                    For paper submissions, registration queries, and sponsorship requests:
                  </p>
                  <div className="flex flex-wrap items-center gap-x-1 text-base font-bold text-primary">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="hover:text-accent transition-colors underline underline-offset-4 break-all"
                    >
                      {contactInfo.email}
                    </a>
                    {contactInfo.secondaryEmail && (
                      <>
                        <span className="font-normal text-text-muted">,</span>
                        <a
                          href={`mailto:${contactInfo.secondaryEmail}`}
                          className="hover:text-accent transition-colors underline underline-offset-4 break-all"
                        >
                          {contactInfo.secondaryEmail}
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Address & Campus Transit Details */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-primary">Venue &amp; Address</h3>
              </div>
              <div className="text-sm text-text-body leading-relaxed ml-[52px] space-y-1">
                <p className="font-semibold text-primary">{contactInfo.address.line1}</p>
                <p>{contactInfo.address.line2}</p>
                <p>
                  {contactInfo.address.line3} - {contactInfo.address.pincode}
                </p>
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-start gap-2 text-xs text-text-muted">
                  <Navigation className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    Transit campuses (Old and New) are a 15 minutes&apos; drive from Patna Airport and 25 minutes from Patna Railway Station.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-3">
            {/* Map Container with premium frame */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-gray-100 shadow-lg group">
              {/* Map Header Bar */}
              <div className="bg-linear-to-r from-primary to-primary-light px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold">
                    Amity University, Patna
                  </span>
                </div>
                <Link
                  href={MAPS_LINK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-white/80 hover:text-accent transition-colors"
                >
                  Open in Maps
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              {/* Map iframe */}
              <div className="h-[380px] lg:h-[460px]">
                <iframe
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Amity University Patna Location"
                />
              </div>
            </div>

            {/* Directions CTA */}
            <Link
              href={MAPS_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-accent/10 hover:bg-accent/20 text-primary font-semibold text-sm rounded-xl transition-colors"
            >
              <MapPin className="w-4 h-4 text-accent" />
              Get Directions on Google Maps
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
