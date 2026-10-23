import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import Link from "next/link";
import {
	Calendar,
	CheckCircle2,
	FileText,
	LayoutTemplate,
	Printer,
	Users,
	Sparkles,
	Mail,
	QrCode,
	CreditCard,
	ExternalLink,
} from "lucide-react";
import { contactInfo } from "@/content/contact";
import { registrationContent } from "@/content/registration";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
	title: "Call for Poster Presentation",
	description:
		"Showcase your research and engage with international experts at ICAIES³ 2027. Review poster presentation guidelines, dimensions, registration fee, and submission deadlines.",
};

const posterDates = [
	{ label: "Poster Submission Deadline", date: "15th Dec. 2026" },
	{ label: "Notification of Acceptance", date: "25th Dec. 2026" },
	{
		label: "Registration Deadline & Camera-Ready Submission",
		date: "30th Dec. 2026",
	},
	{ label: "Conference Dates", date: "January 06th-07th, 2027" },
];

const guidelines = [
	{
		title: "Poster Dimensions",
		icon: <LayoutTemplate className="w-5 h-5 text-accent" />,
		points: [
			"Size: The poster should be 36 inches (width) by 48 inches (height).",
			"Orientation: Posters should be in portrait orientation.",
		],
	},
	{
		title: "Poster Content",
		icon: <FileText className="w-5 h-5 text-accent" />,
		points: [
			"Title: The title should be at the top of the poster in large, bold font (suggested size: 72 pt). Include the full title of your research or project.",
			"Authors: List the names of all authors, along with their affiliations. The presenting author’s name should be highlighted.",
		],
	},
	{
		title: "Design Guidelines",
		icon: <CheckCircle2 className="w-5 h-5 text-accent" />,
		points: [
			"Font Size: Title: 72 pt (or larger), Section Headers: 36 pt, Body Text: 24 pt, Captions: 18-20 pt.",
			"Color Scheme: Use a consistent, professional color scheme with sufficient contrast.",
			"Images & Graphics: High-resolution images (minimum 300 dpi); charts and graphs clearly labeled with legends and axes.",
			"White Space: Avoid overcrowding; use bullet points and leave adequate white space to ensure readability.",
		],
	},
	{
		title: "Poster Printing",
		icon: <Printer className="w-5 h-5 text-accent" />,
		points: [
			"Responsibility: Presenters are responsible for printing their own posters.",
			"Print Quality: Print on high-quality paper with a matte or satin finish to reduce glare.",
		],
	},
	{
		title: "Poster Display & Participation",
		icon: <Users className="w-5 h-5 text-accent" />,
		points: [
			"Setup Time: Posters should be set up by 10:00 AM on the day of the presentation.",
			"Location: The poster presentation area will be clearly marked at the conference venue.",
			"Presentation Mode: Presenters can present their poster in offline or online mode. They should be available to discuss their posters during designated session times.",
			"Participation Rule: Maximum two candidates can participate in one poster, and one candidate can only present one poster.",
		],
	},
	{
		title: "Important Notes",
		icon: <QrCode className="w-5 h-5 text-accent" />,
		points: [
			"QR Codes: Optional but encouraged. QR codes can link to additional resources, full papers, or contact information.",
			"Handouts: Presenters may bring handouts summarizing the poster's content to place near the poster for attendees.",
		],
	},
];

const criteria = [
	"Clarity and organization of content.",
	"Visual appeal and design.",
	"Depth and originality of research.",
	"Presenter's ability to explain and discuss the poster.",
];

export default function CallForPosterPage() {
	return (
		<div className="bg-white">
			<SiteHeader />
			<BreadcrumbSchema
				pageName="Call for Poster Presentation"
				route="/call-for-poster-presentation"
			/>
			<div className="mx-auto max-w-7xl px-6 lg:px-12 pb-10 lg:pb-14 pt-4 lg:pt-6">
				<PageTitle
					lightText="Call for"
					accentText="Poster Presentation"
					description="Showcase your research, engage with international experts, and contribute to discussions shaping the future of AI-enabled intelligent, secure, and scalable systems."
				/>

				{/* Intro Section */}
				<div className="max-w-4xl mb-12 mt-4">
					<p className="text-text-body text-base md:text-lg leading-relaxed mb-6">
						The International Conference on Advances in AI-Enabled Intelligent,
						Secure and Scalable Systems (ICAIES³ 2027) invites researchers,
						academicians, and students to present their work through Poster
						Presentations. This is a unique opportunity to showcase your
						research, engage with international experts, and contribute to
						discussions shaping the future of science and engineering.
					</p>
					<div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-xl">
						<p className="text-primary font-medium">
							Selected posters will be displayed during the conference,
							providing valuable exposure and networking opportunities.
							Additionally, the abstracts of all selected posters will be
							published in the Conference Abstract Book, offering lasting
							recognition for your contribution.
						</p>
					</div>
				</div>

				{/* Important Dates Timeline */}
				<div className="mb-14">
					<h2 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
						<Calendar className="w-6 h-6 text-accent" />
						Important Dates for Poster Presentation
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{posterDates.map((item, index) => (
							<div
								key={index}
								className="bg-bg-cream rounded-xl p-5 border border-gray-100"
							>
								<p className="text-sm text-text-muted font-medium mb-1">
									{item.label}
								</p>
								<p className="text-lg font-bold text-primary">{item.date}</p>
							</div>
						))}
					</div>
				</div>

				{/* Guidelines Grid */}
				<div className="mb-14">
					<div className="border-b border-gray-100 pb-4 mb-8">
						<h2 className="text-2xl font-bold text-primary">
							Guidelines for Poster Presentation
						</h2>
						<p className="text-sm text-text-body mt-2">
							Welcome to the poster presentation section of the ICAIES³ 2027
							Conference. Below are the detailed guidelines to help you prepare
							and present your poster effectively.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{guidelines.map((guide, idx) => (
							<div
								key={idx}
								className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
							>
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 bg-accent/10 rounded-lg">{guide.icon}</div>
									<h3 className="text-lg font-bold text-primary">
										{guide.title}
									</h3>
								</div>
								<ul className="space-y-2">
									{guide.points.map((point, i) => (
										<li
											key={i}
											className="flex items-start gap-2 text-sm text-text-body"
										>
											<span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
											{point}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* Registration Fee for Poster Presentation */}
				<div className="mb-14">
					<h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
						<CreditCard className="w-6 h-6 text-accent" />
						Registration Fee (Poster Presentation)
					</h2>
					<div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
						<table className="w-full text-sm">
							<thead>
								<tr className="bg-primary text-white">
									<th className="text-left px-4 py-4 font-semibold min-w-56">
										Poster Presentation Fee
									</th>
									<th className="text-center px-4 py-4 font-semibold">
										Students (INR)
									</th>
									<th className="text-center px-4 py-4 font-semibold">
										Research Scholar (INR)
									</th>
									<th className="text-center px-4 py-4 font-semibold">
										Faculties (INR)
									</th>
									<th className="text-center px-4 py-4 font-semibold">
										Industry &amp; Other Participants (INR)
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-gray-100 bg-white">
									<td className="px-4 py-4 font-medium text-primary">
										Amount (Hybrid Mode)
									</td>
									<td className="px-4 py-4 text-center font-bold text-primary">
										₹300
									</td>
									<td className="px-4 py-4 text-center font-bold text-primary">
										₹500
									</td>
									<td className="px-4 py-4 text-center font-bold text-primary">
										₹750
									</td>
									<td className="px-4 py-4 text-center font-bold text-primary">
										₹1,000
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* Poster Presentation Registration Fees Link */}
					<div className="mt-6 bg-bg-cream rounded-xl p-5 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
						<p className="text-sm font-bold text-primary">
							Poster Presentation Registration Fees:
						</p>
						<a
							href={registrationContent.paymentLink}
							target="_blank"
							rel="noopener noreferrer"
							className="btn-gradient text-sm justify-center shrink-0"
						>
							<span>Pay Poster Registration Fee</span>
							<ExternalLink className="w-4 h-4 shrink-0" />
						</a>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
					{/* Evaluation Criteria */}
					<div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white">
						<h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
							<Sparkles className="w-5 h-5 text-accent" />
							Evaluation Criteria
						</h3>
						<ul className="space-y-3">
							{criteria.map((item, idx) => (
								<li key={idx} className="flex items-start gap-3">
									<div className="mt-1 bg-accent/20 rounded-full p-0.5">
										<CheckCircle2 className="w-4 h-4 text-accent" />
									</div>
									<span className="text-white/90">{item}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Information */}
					<div className="bg-bg-cream rounded-xl p-8 border border-gray-100">
						<h3 className="text-xl font-bold text-primary mb-3">
							Contact Information
						</h3>
						<p className="text-sm text-text-body mb-5">
							For any queries related to the poster presentations, please contact
							the organizing committee:
						</p>
						<div className="space-y-3">
							{contactInfo.contactPersons.map((person, idx) => (
								<div
									key={idx}
									className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-white rounded-lg border border-gray-100"
								>
									<div>
										<p className="text-sm font-bold text-primary">
											{person.name}
										</p>
										<p className="text-xs text-text-muted">Convenor, AIIT</p>
									</div>
									<a
										href={`mailto:${person.email}`}
										className="text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center gap-1.5 underline underline-offset-2 break-all"
									>
										<Mail className="w-3.5 h-3.5 text-accent shrink-0" />
										{person.email}
									</a>
								</div>
							))}
							<div className="pt-2 flex items-start gap-2">
								<Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
								<div className="flex flex-wrap items-center gap-x-1 text-sm font-semibold text-primary">
									<a
										href={`mailto:${contactInfo.email}`}
										className="hover:text-accent transition-colors underline underline-offset-2 break-all"
									>
										{contactInfo.email}
									</a>
									{contactInfo.secondaryEmail && (
										<>
											<span className="font-normal text-text-muted">,</span>
											<a
												href={`mailto:${contactInfo.secondaryEmail}`}
												className="hover:text-accent transition-colors underline underline-offset-2 break-all"
											>
												{contactInfo.secondaryEmail}
											</a>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* CTA */}
				<div className="text-center mt-12 pb-4">
					<Link href="/registration" className="btn-gradient text-base">
						View Registration Guidelines →
					</Link>
				</div>
			</div>
		</div>
	);
}
