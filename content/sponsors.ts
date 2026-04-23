export interface Sponsor {
  name: string;
  logo?: string;
  description?: string;
  tier: "platinum" | "gold" | "silver" | "partner";
  url?: string;
}

export const sponsorsContent = {
  title: "Technical Sponsors",
  description:
    "We are actively seeking technical sponsors and industry partners for ICAIES³ 2026. Sponsorship opportunities are available.",
  comingSoon: true,
  sponsors: [] as Sponsor[],
};
