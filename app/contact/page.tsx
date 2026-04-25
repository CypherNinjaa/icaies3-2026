import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { contactInfo } from "@/content/contact";
import { MapPin, Phone, Mail, User, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the ICAIES³ 2026 organizing committee. Address, phone, and email information.",
};

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5!2d85.0520669!3d25.6123065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed56457e773c5d%3A0x26f4637f762e3747!2sAmity%20University%2C%20Patna!5e0!3m2!1sen!2sin!4v1";

const MAPS_LINK_URL = "https://maps.app.goo.gl/X81ZRHEV5GdTZ4Rw9";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pb-10 lg:pb-14 pt-4 lg:pt-6">
        <PageTitle
          lightText=""
          accentText="Contact"
          description="Get in touch with the ICAIES³ 2026 organizing committee for any queries."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          {/* Contact Info */}
          <div className="space-y-5">
            {/* Address */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-primary">Address</h3>
              </div>
              <div className="text-sm text-text-body leading-relaxed ml-[52px]">
                <p>{contactInfo.address.line1}</p>
                <p>{contactInfo.address.line2}</p>
                <p>
                  {contactInfo.address.line3} - {contactInfo.address.pincode}
                </p>
              </div>
            </div>

            {/* Contact Persons */}
            {contactInfo.contactPersons.map((person) => (
              <div
                key={person.name}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary">
                      {person.name}
                    </h3>
                    <p className="text-xs text-text-muted">{person.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-[52px]">
                  <Phone className="w-4 h-4 text-accent" />
                  <a
                    href={`tel:${person.phone}`}
                    className="text-sm text-text-body hover:text-accent transition-colors"
                  >
                    {person.phone}
                  </a>
                </div>
              </div>
            ))}

            {/* Email */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">
                    Email
                  </h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-base font-medium text-primary hover:text-accent transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-3">
            {/* Map Container with premium frame */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-gray-100 shadow-lg group">
              {/* Map Header Bar */}
              <div className="bg-gradient-to-r from-primary to-primary-light px-5 py-3 flex items-center justify-between">
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
