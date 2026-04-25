import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { submissionContent } from "@/content/submission";
import { FileText, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
	title: "Submission Guidelines",
	description:
		"Guidelines for submitting papers to ICAIES³ 2026, including formatting, templates, publication opportunities, and review process details.",
};

export default function SubmissionGuidelinesPage() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-12 pb-10 lg:pb-14 pt-4 lg:pt-6">
				<PageTitle
					lightText="Submission"
					accentText="Guidelines"
					description={submissionContent.pageDescription}
				/>

				<div className="max-w-4xl space-y-8 mt-8">
					{submissionContent.sections.map((section, index) => (
						<section
							key={index}
							className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
							id={`section-${index}`}
						>
							<div className="flex items-center gap-3 mb-4">
								<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
									<FileText className="w-5 h-5" />
								</div>
								<h3 className="text-lg font-bold text-primary">
									{section.title}
								</h3>
							</div>

							<ul className="space-y-3">
								{section.content.map((item, idx) => (
									<li key={idx} className="flex items-start gap-3">
										<CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
										<span className="text-sm text-text-body leading-relaxed">
											{item}
										</span>
									</li>
								))}
							</ul>
						</section>
					))}
				</div>
			</div>
		</div>
	);
}
