import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { submissionContent } from "@/content/submission";
import {
	FileText,
	Download,
	ExternalLink,
	ShieldCheck,
	Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
	title: "Paper Submission | Submission Guidelines",
	description:
		"Guidelines for Paper Submission, Plagiarism Policy, and Use of Generative AI and AI-Assisted Technologies in Scientific Writing for ICAIES³ 2026.",
};

export default function SubmissionGuidelinesPage() {
	const {
		category,
		templateDownloadUrl,
		templateDownloadLabel,
		submitPaperUrl,
		submitPaperLabel,
		guidelinesSection,
		plagiarismSection,
		generativeAiSection,
	} = submissionContent;

	return (
		<div className="bg-white">
			<SiteHeader />
			<BreadcrumbSchema
				pageName="Submission Guidelines"
				route="/submission-guidelines"
			/>
			<div className="mx-auto max-w-7xl px-6 lg:px-12 pb-12 lg:pb-16 pt-4 lg:pt-6">
				{/* Category Eyebrow + Page Title */}
				<div className="mb-2">
					<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/15 text-accent-contrast">
						{category}
					</span>
				</div>
				<PageTitle lightText="Paper" accentText="Submission" />

				<div className="max-w-5xl space-y-8 mt-6">
					{/* Section A: Guidelines for Paper Submission */}
					<section
						id="guidelines-for-paper-submission"
						className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
					>
						<div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-gray-100">
							<div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 text-accent shrink-0">
								<FileText className="w-5 h-5" />
							</div>
							<h2 className="text-xl sm:text-2xl font-bold text-primary">
								{guidelinesSection.title}
							</h2>
						</div>

						<div className="space-y-4">
							{/* Point (1) */}
							<div className="flex items-start gap-3.5 bg-bg-cream/60 rounded-xl p-4 sm:p-5 border border-gray-100/80">
								<span className="inline-flex items-center justify-center min-w-8 h-8 rounded-lg bg-primary text-accent font-bold text-xs shrink-0 mt-0.5">
									(1)
								</span>
								<p className="text-sm sm:text-base text-text-body leading-relaxed">
									{guidelinesSection.item1}
								</p>
							</div>

							{/* Template Download & Submit Paper Action Links */}
							<div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 py-2 sm:pl-11">
								<a
									href={templateDownloadUrl}
									download="conference-template-a4.docx"
									className="btn-gradient justify-center text-sm sm:text-base shadow-sm"
								>
									<Download className="w-4 h-4 shrink-0" />
									<span>{templateDownloadLabel}</span>
								</a>

								<a
									href={submitPaperUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold text-sm sm:text-base hover:bg-primary-light transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
								>
									<span>{submitPaperLabel}</span>
									<ExternalLink className="w-4 h-4 text-accent shrink-0" />
								</a>
							</div>

							{/* Point (2) */}
							<div className="flex items-start gap-3.5 bg-bg-cream/60 rounded-xl p-4 sm:p-5 border border-gray-100/80">
								<span className="inline-flex items-center justify-center min-w-8 h-8 rounded-lg bg-primary text-accent font-bold text-xs shrink-0 mt-0.5">
									(2)
								</span>
								<p className="text-sm sm:text-base text-text-body leading-relaxed">
									{guidelinesSection.item2}
								</p>
							</div>

							{/* Point (3) */}
							<div className="flex items-start gap-3.5 bg-bg-cream/60 rounded-xl p-4 sm:p-5 border border-gray-100/80">
								<span className="inline-flex items-center justify-center min-w-8 h-8 rounded-lg bg-primary text-accent font-bold text-xs shrink-0 mt-0.5">
									(3)
								</span>
								<p className="text-sm sm:text-base text-text-body leading-relaxed">
									{guidelinesSection.item3Prefix}
									<strong className="font-bold text-primary">
										{guidelinesSection.item3Bold}
									</strong>
									{guidelinesSection.item3Suffix}
								</p>
							</div>

							{/* Point (4) */}
							<div className="flex items-start gap-3.5 bg-bg-cream/60 rounded-xl p-4 sm:p-5 border border-gray-100/80">
								<span className="inline-flex items-center justify-center min-w-8 h-8 rounded-lg bg-primary text-accent font-bold text-xs shrink-0 mt-0.5">
									(4)
								</span>
								<p className="text-sm sm:text-base text-text-body leading-relaxed">
									{guidelinesSection.item4}
								</p>
							</div>

							{/* Point (5) */}
							<div className="flex items-start gap-3.5 bg-bg-cream/60 rounded-xl p-4 sm:p-5 border border-gray-100/80">
								<span className="inline-flex items-center justify-center min-w-8 h-8 rounded-lg bg-primary text-accent font-bold text-xs shrink-0 mt-0.5">
									(5)
								</span>
								<p className="text-sm sm:text-base text-text-body leading-relaxed">
									{guidelinesSection.item5}
								</p>
							</div>
						</div>
					</section>

					{/* Section B: Plagiarism Policy */}
					<section
						id="plagiarism-policy"
						className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
					>
						<div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-gray-100">
							<div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 text-accent shrink-0">
								<ShieldCheck className="w-5 h-5" />
							</div>
							<h2 className="text-xl sm:text-2xl font-bold text-primary">
								{plagiarismSection.title}
							</h2>
						</div>

						<div className="space-y-4">
							{plagiarismSection.items.map((item) => (
								<div
									key={item.number}
									className="flex items-start gap-3.5 bg-bg-cream/60 rounded-xl p-4 sm:p-5 border border-gray-100/80"
								>
									<span className="inline-flex items-center justify-center min-w-8 h-8 rounded-lg bg-primary text-accent font-bold text-xs shrink-0 mt-0.5">
										{item.number}
									</span>
									<p className="text-sm sm:text-base text-text-body leading-relaxed">
										{item.text}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* Section C: Use of Generative AI and AI-Assisted Technologies in Scientific Writing */}
					<section
						id="generative-ai-policy"
						className="bg-linear-to-br from-primary to-primary-light rounded-2xl p-6 sm:p-8 text-white shadow-sm"
					>
						<div className="flex items-start sm:items-center gap-3.5 mb-4">
							<div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 text-accent shrink-0">
								<Sparkles className="w-5 h-5" />
							</div>
							<h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
								{generativeAiSection.title}
							</h2>
						</div>
						<p className="text-sm sm:text-base text-white/90 leading-relaxed sm:pl-14">
							{generativeAiSection.text}
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}
