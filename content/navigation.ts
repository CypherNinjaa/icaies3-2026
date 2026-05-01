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
			{
				label: "Call for Poster Presentation",
				href: "/call-for-poster-presentation",
			},
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
				label: "National Advisory Committee",
				href: "/committee/technical",
			},
			{
				label: "International Advisory Committee",
				href: "",
			},
		],
	},
	{ label: "Technical Sponsors", href: "/technical-sponsors" },
	{ label: "Publication Partners", href: "/publication-partner" },
	{ label: "Program Schedule", href: "/program-schedule" },
	{ label: "Contact", href: "/contact" },
];
