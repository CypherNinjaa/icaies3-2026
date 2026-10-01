import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { BookOpen, CheckCircle2, Globe, AlertCircle, FileCheck, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Publication Opportunities",
	description:
		"Explore the publication opportunities for accepted papers at ICAIES³ 2026, including conference proceedings with ISBN and DOI, Scopus indexed edited books, and ESCI/Scopus indexed journals.",
};

const publicationsWithoutAPC = [
	"All Accepted Full-Length Papers will be Recommended for Publication in the conference proceedings as an edited book with ISBN and DOI, without APC.",
	"Selected extended papers will be recommended as a chapter and will go for publication in Scopus Indexed Edited Book without APC. (Subject to acceptance - as per Scope of Edited Book).",
];

const publicationsWithAPCGuidelines = [
	"High Quality selected papers will be sent for publication in ESCI & Scopus indexed Journal(s) will be published on the terms & conditions of the respective journals.",
	"The cost of publication shall be borne by the author(s) separately.",
	"Articles submitted to journals may go through a secondary peer review per journal requirements.",
	"Acceptance is solely at the discretion of the Journal editors.",
];

export default function PublicationPartnerPage() {
	return (
		<div className="bg-white">
			<SiteHeader />
			<BreadcrumbSchema pageName="Publication Opportunities" route="/publication-partner" />
			<div className="mx-auto max-w-7xl px-6 lg:px-12 pb-10 lg:pb-14 pt-4 lg:pt-6">
				<PageTitle
					lightText="Publication"
					accentText="Opportunities"
					description="Explore the official publication avenues available for accepted and presented papers at ICAIES³ 2026."
				/>

				{/* Two-column Publication Structure */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
					{/* Category 1: Without APC */}
					<div className="bg-bg-cream rounded-2xl p-8 border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
						<div>
							<div className="flex items-center gap-3 mb-6">
								<div className="p-3 bg-white rounded-xl shadow-sm text-accent">
									<BookOpen className="w-6 h-6" />
								</div>
								<div>
									<span className="text-xs uppercase font-bold tracking-wider text-green-700 bg-green-100 px-2.5 py-0.5 rounded-full inline-block mb-1">
										Zero APC
									</span>
									<h2 className="text-xl font-bold text-primary">
										Publication without APC
									</h2>
								</div>
							</div>

							<p className="text-sm text-text-muted mb-6 leading-relaxed">
								Accepted and registered full-length papers enjoy publication avenues without any article processing fees:
							</p>

							<ul className="space-y-4">
								{publicationsWithoutAPC.map((item, idx) => (
									<li key={idx} className="flex items-start gap-3 bg-white/70 rounded-xl p-4 border border-gray-100/80">
										<CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
										<p className="text-text-body text-sm leading-relaxed font-medium">
											{item}
										</p>
									</li>
								))}
							</ul>
						</div>

						<div className="mt-8 pt-6 border-t border-gray-200/60 flex items-center gap-2 text-xs text-text-muted">
							<FileCheck className="w-4 h-4 text-accent shrink-0" />
							<span>Proceedings will be assigned official ISBN and DOI metadata.</span>
						</div>
					</div>

					{/* Category 2: With APC */}
					<div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
						<div className="absolute top-0 right-0 w-36 h-36 bg-accent/5 rounded-bl-full -z-10" />

						<div>
							<div className="flex items-center gap-3 mb-6">
								<div className="p-3 bg-accent/10 rounded-xl shadow-sm text-accent">
									<Globe className="w-6 h-6" />
								</div>
								<div>
									<span className="text-xs uppercase font-bold tracking-wider text-accent-contrast bg-accent/10 px-2.5 py-0.5 rounded-full inline-block mb-1">
										Journal Indexing
									</span>
									<h2 className="text-xl font-bold text-primary">
										Publications with APC
									</h2>
								</div>
							</div>

							<p className="text-sm text-text-muted mb-6 leading-relaxed">
								High-quality selected papers will be recommended for publication in ESCI &amp; Scopus indexed partner journals:
							</p>

							<ul className="space-y-3.5">
								{publicationsWithAPCGuidelines.map((item, idx) => (
									<li key={idx} className="flex items-start gap-3 bg-bg-cream/40 rounded-xl p-4 border border-gray-100">
										<Sparkles className="w-4 h-4 text-accent shrink-0 mt-0.5" />
										<p className="text-text-body text-sm leading-relaxed">
											{item}
										</p>
									</li>
								))}
							</ul>
						</div>

						<div className="mt-8 pt-6 border-t border-gray-100 flex items-start gap-2.5 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/60">
							<AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
							<p className="text-xs text-amber-900 leading-snug font-medium">
								Note: Acceptance in ESCI &amp; Scopus indexed journals is solely at the discretion of the Journal editors following secondary peer review.
							</p>
						</div>
					</div>
				</div>

				{/* Submission CTA */}
				<div className="text-center mt-14 pb-4">
					<Link
						href="https://cmt3.research.microsoft.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-gradient text-base"
					>
						Submit Paper via Microsoft CMT →
					</Link>
					<p className="text-sm text-text-muted mt-3">
						Review submission guidelines before uploading your manuscript
					</p>
				</div>
			</div>
		</div>
	);
}
