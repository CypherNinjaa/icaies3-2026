import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { importantDates } from "@/content/dates";
import Link from "next/link";
import { Calendar, CheckCircle2, FileText, LayoutTemplate, Printer, Users, Sparkles } from "lucide-react";
import { contactInfo } from "@/content/contact";

export const metadata: Metadata = {
	title: "Call for Poster Presentation",
	description:
		"Showcase your research and engage with international experts at ICAIES³ 2026. Review guidelines, format, and important dates for poster submissions.",
};

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
			"Authors: List the names of all authors, along with their affiliations. The presenting author's name should be highlighted.",
		],
	},
	{
		title: "Design Guidelines",
		icon: <CheckCircle2 className="w-5 h-5 text-accent" />,
		points: [
			"Font Size: Title: 72 pt (or larger), Section Headers: 36 pt, Body Text: 24 pt, Captions: 18-20 pt.",
			"Color Scheme: Use a consistent, professional color scheme. Ensure contrast.",
			"Images: Use high-resolution images (minimum 300 dpi). Clearly label charts.",
			"Avoid overcrowding; use bullet points and white space to ensure readability.",
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
			"Presentation: Presenters can present in offline or online mode.",
			"Maximum two candidates can participate in one poster, and one candidate can only present one poster.",
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
			<div className="mx-auto max-w-7xl px-6 lg:px-12 py-10 lg:py-14">
				<PageTitle
					lightText="Call for"
					accentText="Poster Presentation"
					description="Showcase your research, engage with international experts, and contribute to discussions shaping the future of science and engineering."
				/>

				{/* Intro Section */}
				<div className="max-w-4xl mb-12 mt-8">
					<p className="text-text-body text-base md:text-lg leading-relaxed mb-6">
						The International Conference on Advances in AI-Enabled Intelligent, Secure and Scalable Systems (ICAIES³ 2026) invites researchers, academicians, and students to present their work through Poster Presentations.
					</p>
					<div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-xl">
						<p className="text-primary font-medium">
							Selected posters will be displayed during the conference, providing valuable exposure and networking opportunities. Additionally, the abstracts of all selected posters will be published in the Conference Abstract Book.
						</p>
					</div>
				</div>

				{/* Important Dates Timeline */}
				<div className="mb-14">
					<h2 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
						<Calendar className="w-6 h-6 text-accent" />
						Important Dates
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{importantDates
							.filter((d) => d.label !== "Conference Dates")
							.map((date, index) => (
								<div key={index} className="bg-bg-cream rounded-xl p-5 border border-gray-100">
									<p className="text-sm text-text-muted font-medium mb-1">
										{date.label}
									</p>
									<p className="text-lg font-bold text-primary">{date.date}</p>
								</div>
							))}
					</div>
				</div>

				{/* Guidelines Grid */}
				<div className="mb-14">
					<h2 className="text-2xl font-bold text-primary mb-8 border-b border-gray-100 pb-4">
						Guidelines for Poster Presentation
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{guidelines.map((guide, idx) => (
							<div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 bg-accent/10 rounded-lg">{guide.icon}</div>
									<h3 className="text-lg font-bold text-primary">{guide.title}</h3>
								</div>
								<ul className="space-y-2">
									{guide.points.map((point, i) => (
										<li key={i} className="flex items-start gap-2 text-sm text-text-body">
											<span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
											{point}
										</li>
									))}
								</ul>
							</div>
						))}
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
						<h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
						<p className="text-sm text-text-body mb-6">
							For any queries related to the poster presentations, please contact the organizing committee:
						</p>
						<div className="space-y-4">
							{contactInfo.contactPersons.map((person, idx) => (
								<div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
									<span className="font-semibold text-primary">{person.name}</span>
									<span className="text-accent text-sm font-medium">{person.phone}</span>
								</div>
							))}
						</div>
					</div>
				</div>

                {/* CTA */}
				<div className="text-center mt-12 pb-4">
					<Link
						href="/registration"
						className="btn-gradient text-base"
					>
						Register Now →
					</Link>
				</div>
			</div>
		</div>
	);
}
