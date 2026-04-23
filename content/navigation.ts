export interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Authors",
    children: [
      { label: "Call for Papers", href: "/call-for-papers" },
      { label: "Submission Guidelines", href: "/submission-guidelines" },
      {
        label: "Submit Your Manuscript",
        href: "https://cmt3.research.microsoft.com/",
        external: true,
      },
    ],
  },
  { label: "Keynote Speakers", href: "/keynote-speakers" },
  { label: "Registration", href: "/registration" },
  {
    label: "Committee",
    children: [
      { label: "Organizing Committee", href: "/committee/organizing" },
      {
        label: "Technical Program Committee",
        href: "/committee/technical",
      },
    ],
  },
  { label: "Technical Sponsors", href: "/technical-sponsors" },
  { label: "Contact", href: "/contact" },
];
