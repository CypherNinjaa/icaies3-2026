export interface FeeCategory {
  category: string;
  indianFee: string;
  foreignFee: string;
}

export const registrationFees: FeeCategory[] = [
  {
    category: "Students / Research Scholars",
    indianFee: "₹2,500",
    foreignFee: "$100",
  },
  {
    category: "Academicians",
    indianFee: "₹3,500",
    foreignFee: "$150",
  },
  {
    category: "Industry Professionals",
    indianFee: "₹5,000",
    foreignFee: "$200",
  },
  {
    category: "Attendees (No Paper)",
    indianFee: "₹1,500",
    foreignFee: "$75",
  },
];

export const registrationContent = {
  title: "Registration",
  overview:
    "All accepted papers must have at least one registered author to be included in the conference proceedings. Registration fees include access to all conference sessions, proceedings, and conference materials.",
  paymentInstructions: {
    title: "Payment Instructions",
    methods: [
      "Payments via Demand Draft / NEFT in favor of \"Amity University, Patna\"",
      "Early bird registration available until September 30, 2026",
      "Registration confirmation will be sent via email within 48 hours of payment verification",
    ],
  },
  posterPresentation: {
    title: "Poster Presentation",
    description: "Showcase your research visually at ICAIES³ 2026",
    details: [
      "Abstracts will be published in the Conference Abstract Book",
      "Maximum 2 candidates per poster presentation",
    ],
    specs: [
      { label: "Size", value: '36" × 48" Portrait orientation' },
      { label: "Title Font", value: "72pt or larger" },
      { label: "Finish", value: "Matte or Satin finish recommended" },
      { label: "Graphics", value: "High-resolution (300 DPI minimum)" },
    ],
  },
};
