import { Metadata } from "next";
import Image from "next/image";
import {
	Mail,
	ExternalLink,
	Briefcase,
	GraduationCap,
	Code2,
	CheckCircle,
	Award,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={props.className}
	>
		<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
		<path d="M9 18c-4.51 2-5-2-7-2" />
	</svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={props.className}
	>
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
		<rect width="4" height="12" x="2" y="9" />
		<circle cx="4" cy="4" r="2" />
	</svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={props.className}
	>
		<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
		<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
		<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
	</svg>
);

const HashnodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="currentColor"
		className={props.className}
	>
		<path d="M22.348 10.588l-9-9a2 2 0 00-2.828 0l-9 9a2 2 0 000 2.828l9 9a2 2 0 002.828 0l9-9a2 2 0 000-2.828zM12 15a3 3 0 110-6 3 3 0 010 6z" />
	</svg>
);

export const metadata: Metadata = {
	title: "Vikash Kumar (vikashintech) — Official Website Developer",
	description:
		"Meet Vikash Kumar (vikashintech), the official developer of the ICAIES³ 2026 conference website. BCA student, Full Stack Developer, and Next.js Specialist.",
	alternates: {
		canonical: "/developer",
	},
};

const profileData = {
	name: "Vikash Kumar",
	professionalName: "vikashintech",
	headline: "Full Stack Developer & Software Engineer",
	bio: "I am an enthusiastic Full Stack Developer and a BCA student at Amity University Patna. I specialize in the React and Next.js ecosystems, building high-performance, accessible, and SEO-optimized web systems. With a strong commitment to clean architecture and modern development standards, I love turning complex ideas into seamless user experiences.",
	email: "vikashkelly@gmail.com",
	location: "Patna, Bihar, India",
	university: "Amity University Patna",
	education: "Bachelor of Computer Applications (BCA)",
	educationTimeline: "2024 — Present",
	github: "https://github.com/CypherNinjaa",
	linkedin: "https://www.linkedin.com/in/vikashintech/",
	hashnode: "https://vikashintech.hashnode.dev/",
	instagram: "https://www.instagram.com/vikashintech/",
};

const conferenceContribution = {
	title: "ICAIES³ 2026 Official Web Platform",
	role: "Lead Web Engineer & SEO Specialist",
	duration: "2026",
	description:
		"Designed, engineered, and optimized the official web presence for the International Conference on Advances in AI-Enabled Intelligent, Secure and Scalable Systems (ICAIES³ 2026). Handled everything from structural design to production deployment.",
	features: [
		"Next.js App Router architecture utilizing React 19 static generation for speed and SEO.",
		"Optimized Core Web Vitals, achieving 95+ scores via Sharp image pre-compression pipelines (reducing banner size by 90%).",
		"Engineered a dynamic pre-indexing system including automated robots.ts and sitemap.xml rules.",
		"Implemented comprehensive JSON-LD schemas (Event, EducationalOrganization, Breadcrumb, and ContactPage).",
		"Configured advanced production security headers and a strict Content Security Policy (CSP).",
		"Addressed and solved WCAG 2.1 AA accessibility guidelines, specifically color contrast and tab navigation flow.",
	],
	stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Sharp", "Lucide React"],
};

const skills = [
	{ category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"] },
	{ category: "Backend & DBs", items: ["Node.js", "Express", "Prisma ORM", "SQL & Relational DBs"] },
	{ category: "Optimization & SEO", items: ["Technical SEO", "Schema.org Markup", "Web Accessibility (a11y)", "Core Web Vitals"] },
	{ category: "Tools & Deploy", items: ["Git & GitHub", "Vercel Deployments", "npm/Yarn/uv", "VS Code"] },
];

const projects = [
	{
		name: "ICAIES³ 2026 Conference Site",
		description: "Official dynamic web application for the ICAIES³ 2026 international academic conference, optimized for SEO, speed, and strict security standards.",
		tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sharp"],
		url: "https://github.com/CypherNinjaa/icaies3-2026",
	},
	{
		name: "BCECE College Predictor",
		description: "A specialized college and stream prediction web application for students applying via Bihar Combined Entrance Competitive Examination.",
		tech: ["TypeScript", "Next.js", "Tailwind CSS"],
		url: "https://github.com/CypherNinjaa/BCECE-college-predictor",
	},
	{
		name: "Mtouchpad",
		description: "An open-source utility built to add and manage custom touchpad gestures and actions for desktop environments.",
		tech: ["TypeScript", "Node.js", "APIs"],
		url: "https://github.com/CypherNinjaa/Mtouchpad",
	},
	{
		name: "Google Books Downloader",
		description: "A Python-based download automation tool that fetches preview chapters and full-view books from Google Books for academic reference.",
		tech: ["Python", "Web Scraping", "Automation"],
		url: "https://github.com/CypherNinjaa/google-books-downloader",
	},
	{
		name: "Amiphoria (Annual Fest Portal)",
		description: "Official dynamic web platform for Amiphoria — the Annual Tech & Cultural Fest of Amity University Patna, designed for event registrations and schedules.",
		tech: ["TypeScript", "Next.js", "Tailwind CSS", "React"],
		url: "https://github.com/CypherNinjaa/Amiphoria",
	},
	{
		name: "Farewell Portal",
		description: "Official college farewell management portal built to coordinate events, messages, and memories for departing seniors at Amity University Patna.",
		tech: ["TypeScript", "Next.js", "Tailwind CSS", "React"],
		url: "https://github.com/CypherNinjaa/Farewell",
	},
];

const timeline = [
	{
		year: "2026",
		title: "Lead Web Engineer — ICAIES³ 2026",
		desc: "Appointed as the official web engineer to build the public pre-indexing and registration system for the international conference, implementing complete metadata structure, CSP, and image optimization pipelines.",
	},
	{
		year: "2025",
		title: "Open Source Contributor & Technical Writer",
		desc: "Built multiple specialized web applications (e.g., predictors and touchpad utilities) while actively publishing development guides on Hashnode.",
	},
	{
		year: "2024",
		title: "BCA Scholar — Amity University Patna",
		desc: "Started Bachelor of Computer Applications at Amity University Patna, focusing on programming paradigms, database design, and modern JavaScript.",
	},
];

export default function DeveloperPage() {
	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		"@id": "https://www.amitypatnaevents.in/developer#person",
		name: profileData.name,
		alternateName: profileData.professionalName,
		url: "https://www.amitypatnaevents.in/developer",
		image: "https://www.amitypatnaevents.in/images/vikash.jpg",
		jobTitle: profileData.headline,
		alumniOf: {
			"@type": "EducationalOrganization",
			name: profileData.university,
			url: "https://patna.amity.edu/",
		},
		sameAs: [
			profileData.github,
			profileData.linkedin,
			profileData.hashnode,
			profileData.instagram,
		],
		description: profileData.bio,
		knowsAbout: [
			"Full Stack Development",
			"Next.js",
			"React",
			"TypeScript",
			"Search Engine Optimization (SEO)",
			"Web Accessibility (a11y)",
		],
		colleague: "https://www.amitypatnaevents.in/#organization",
	};

	return (
		<div className="bg-white text-text-body">
			<SiteHeader />
			<BreadcrumbSchema pageName="Developer Profile" route="/developer" />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
			/>

			<div className="mx-auto max-w-7xl px-6 lg:px-12 pb-12 pt-4 lg:pt-6">
				{/* Hero & Profile Card */}
				<div className="bg-linear-to-br from-primary to-primary-dark rounded-3xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
					{/* Decorative blur backdrop */}
					<div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10" />
					<div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-light/25 rounded-full blur-3xl -z-10" />

					<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative">
						{/* Profile Image Frame */}
						<div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-4 border-accent shadow-2xl shrink-0 group">
							<Image
								src="/images/vikash.jpg"
								alt={`${profileData.name} - Profile Image`}
								fill
								sizes="(max-width: 768px) 176px, 208px"
								priority
								className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
							/>
						</div>

						{/* Primary Details */}
						<div className="text-center lg:text-left flex-1 min-w-0">
							<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent-light border border-accent/20">
								<Award className="w-3.5 h-3.5" />
								Official Website Developer
							</span>
							<h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
								{profileData.name}
							</h1>
							<p className="text-accent text-lg sm:text-xl font-medium mt-1">
								{profileData.professionalName} — {profileData.headline}
							</p>
							<p className="mt-4 text-sm sm:text-base text-gray-200/90 leading-relaxed max-w-2xl">
								{profileData.bio}
							</p>

							{/* Social Grid */}
							<div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
								<a
									href={profileData.github}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all border border-white/15"
									aria-label="GitHub Profile"
								>
									<GithubIcon className="w-4 h-4 text-accent-light" />
									GitHub
								</a>
								<a
									href={profileData.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all border border-white/15"
									aria-label="LinkedIn Profile"
								>
									<LinkedinIcon className="w-4 h-4 text-accent-light" />
									LinkedIn
								</a>
								<a
									href={profileData.hashnode}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all border border-white/15"
									aria-label="Hashnode Blog"
								>
									<HashnodeIcon className="w-4 h-4 text-accent-light" />
									Hashnode
								</a>
								<a
									href={profileData.instagram}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all border border-white/15"
									aria-label="Instagram Profile"
								>
									<InstagramIcon className="w-4 h-4 text-accent-light" />
									Instagram
								</a>
								<a
									href={`mailto:${profileData.email}`}
									className="flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-md"
									aria-label="Send Email"
								>
									<Mail className="w-4 h-4" />
									Email Me
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Two-Column Details */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
					{/* Left Column - Edu, Info & Skills */}
					<div className="space-y-8">
						{/* Education */}
						<div className="bg-bg-cream rounded-2xl p-6 border border-gray-100/80 shadow-sm">
							<h2 className="text-lg font-bold text-primary flex items-center gap-2 mb-4">
								<GraduationCap className="w-5 h-5 text-accent-contrast" />
								Education
							</h2>
							<div className="flex items-start gap-3">
								<div className="mt-1 w-2 h-2 rounded-full bg-accent-contrast shrink-0" />
								<div>
									<h3 className="font-semibold text-primary text-sm">
										{profileData.education}
									</h3>
									<p className="text-xs text-text-body font-medium mt-0.5">
										{profileData.university}
									</p>
									<span className="inline-block mt-2 text-[10px] uppercase font-bold tracking-wider text-accent-contrast bg-accent/10 px-2.5 py-0.5 rounded-full">
										{profileData.educationTimeline}
									</span>
								</div>
							</div>
						</div>

						{/* Technical Skills */}
						<div className="bg-bg-cream rounded-2xl p-6 border border-gray-100/80 shadow-sm">
							<h2 className="text-lg font-bold text-primary flex items-center gap-2 mb-4">
								<Code2 className="w-5 h-5 text-accent-contrast" />
								Skills &amp; Expertise
							</h2>
							<div className="space-y-4">
								{skills.map((skillGroup) => (
									<div key={skillGroup.category}>
										<h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
											{skillGroup.category}
										</h3>
										<div className="flex flex-wrap gap-1.5">
											{skillGroup.items.map((item) => (
												<span
													key={item}
													className="text-xs bg-white text-text-body border border-gray-100/50 px-2.5 py-1 rounded-lg"
												>
													{item}
												</span>
											))}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Academic Timeline */}
						<div className="bg-bg-cream rounded-2xl p-6 border border-gray-100/80 shadow-sm">
							<h2 className="text-lg font-bold text-primary flex items-center gap-2 mb-6">
								<Briefcase className="w-5 h-5 text-accent-contrast" />
								Timeline
							</h2>
							<div className="relative border-l border-gray-200 ml-2 space-y-6">
								{timeline.map((item, index) => (
									<div key={index} className="relative pl-6">
										<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-contrast" />
										<span className="text-[10px] font-bold text-accent-contrast tracking-wider uppercase block">
											{item.year}
										</span>
										<h3 className="text-sm font-bold text-primary mt-0.5">
											{item.title}
										</h3>
										<p className="text-xs text-text-body mt-1 leading-relaxed">
											{item.desc}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Right Column - Conference Contribution & Portfolio */}
					<div className="lg:col-span-2 space-y-10">
						{/* Contribution Section */}
						<div className="border border-gray-100 rounded-2xl p-6 lg:p-8 shadow-sm">
							<h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-2 mb-2">
								<Award className="w-6 h-6 text-accent-contrast" />
								Conference Web Engineering
							</h2>
							<p className="text-sm text-text-muted mb-6">
								Attribution &amp; Technical Implementation on this portal
							</p>

							<div className="bg-linear-to-br from-primary/5 to-bg-cream p-5 rounded-xl border border-accent/15 mb-6">
								<div className="flex flex-wrap items-start justify-between gap-3">
									<div>
										<h3 className="font-bold text-primary text-base">
											{conferenceContribution.title}
										</h3>
										<p className="text-xs text-accent-contrast font-semibold mt-0.5">
											{conferenceContribution.role}
										</p>
									</div>
									<span className="text-xs font-bold bg-primary text-white px-2.5 py-1 rounded-lg">
										{conferenceContribution.duration}
									</span>
								</div>
								<p className="text-sm text-text-body mt-3 leading-relaxed">
									{conferenceContribution.description}
								</p>
							</div>

							<h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
								Key Engineering Tasks Completed:
							</h3>
							<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{conferenceContribution.features.map((feature, idx) => (
									<li
										key={idx}
										className="flex items-start gap-2 text-xs text-text-body leading-relaxed"
									>
										<CheckCircle className="w-4 h-4 text-accent-contrast shrink-0 mt-0.5" />
										<span>{feature}</span>
									</li>
								))}
							</ul>

							<div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap items-center gap-2">
								<span className="text-xs font-bold text-primary uppercase tracking-wider mr-2">
									Tech Utilized:
								</span>
								{conferenceContribution.stack.map((tech) => (
									<span
										key={tech}
										className="text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-md"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* Project Showcase */}
						<div>
							<h2 className="text-2xl font-serif font-bold text-primary mb-2">
								Project Showcase
							</h2>
							<p className="text-sm text-text-muted mb-6">
								Public repositories fetched and compiled from Github
							</p>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								{projects.map((project) => (
									<div
										key={project.name}
										className="bg-white border border-gray-100 rounded-xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
									>
										<div>
											<div className="flex items-center justify-between gap-3 mb-2">
												<h3 className="font-bold text-primary text-sm sm:text-base leading-snug group-hover:text-accent-contrast transition-colors">
													{project.name}
												</h3>
												<a
													href={project.url}
													target="_blank"
													rel="noopener noreferrer"
													className="text-text-muted hover:text-primary transition-colors shrink-0"
													aria-label={`Open ${project.name} on GitHub`}
												>
													<ExternalLink className="w-4 h-4" />
												</a>
											</div>
											<p className="text-xs text-text-body leading-relaxed mb-4">
												{project.description}
											</p>
										</div>
										<div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-gray-50">
											{project.tech.map((tech) => (
												<span
													key={tech}
													className="text-[10px] font-medium bg-gray-50 text-text-muted px-2 py-0.5 rounded"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
