import Image from "next/image";
import { MapPin, Calendar, Monitor } from "lucide-react";
import { siteMeta } from "@/content/site-meta";

export function SiteHeader() {
  return (
    <header className="relative w-full overflow-hidden" id="site-header">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Amity University Patna Campus"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A4A]/85 via-[#1B2A4A]/70 to-[#1B2A4A]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-8 lg:px-12 lg:py-12">
        {/* Top Row: Logos */}
        <div className="flex items-start justify-between mb-8">
          {/* Left: University Logo */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-sm rounded-xl p-1.5 border border-white/20">
              <Image
                src="/logos/amity-logo.png"
                alt="Amity University Patna"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-white/90 text-xs font-medium tracking-wide uppercase">
                Amity Institute of Information Technology
              </p>
              <p className="text-white/70 text-xs">
                Amity University Patna
              </p>
            </div>
          </div>

          {/* Right: Collaborator Badges */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/20">
              <span className="text-white/90 text-xs font-medium">IEEE Student Branch</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/20">
              <span className="text-white/90 text-xs font-medium">IQAC</span>
            </div>
          </div>
        </div>

        {/* Conference Title */}
        <div className="max-w-3xl mt-4">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            {siteMeta.acronym} {siteMeta.year}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] text-white font-bold leading-tight tracking-tight">
            <span className="block">
              Advances in{" "}
              <span className="text-accent">AI-Enabled</span>
            </span>
            <span className="block mt-1">
              Intelligent &amp; Secure
            </span>
            <span className="block mt-1">Systems</span>
          </h1>
        </div>

        {/* Meta Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-8">
          <div className="flex items-center gap-2.5 text-white/90">
            <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
            <span className="text-sm">{siteMeta.location.split(",").slice(0, 2).join(",")}</span>
          </div>
          <div className="flex items-center gap-2.5 text-white/90">
            <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
            <span className="text-sm">{siteMeta.dates}</span>
          </div>
          <div className="flex items-center gap-2.5 text-white/90">
            <Monitor className="w-4 h-4 text-accent flex-shrink-0" />
            <span className="text-sm">Presentation — {siteMeta.mode}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
