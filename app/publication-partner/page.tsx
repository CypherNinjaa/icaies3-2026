import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { BookOpen, Globe, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
	title: "Publication Partners",
	description:
		"Discover publication opportunities for accepted papers at ICAIES³ 2026, including Scopus and WoS indexed journals and conference proceedings.",
};

const publicationsWithoutAPC = [
	"All Accepted Full-Length Papers will be Recommended for Publication in the conference proceedings as an edited book with ISBN and DOI, without APC.",
	"Selected extended papers will be recommended as a chapter and will go for publication in Scopus Indexed Edited Book without APC. (Subject to acceptance - as per Scope of Edited Book).",
	// "Through approved Publisher (Applying in Taylor & Francis & AIP)",
];

type PublicationJournal = {
	title: string;
	indexing: string;
	status: "Approved" | "Approval Pending";
};

const publicationsWithAPC: PublicationJournal[] = [
	/*
	{
		title: "Journal of Discrete Mathematical Sciences & Cryptography",
		indexing: "Scopus Q1, WoS Q2",
		status: "Approved",
	},
	{
		title: "Journal of Information and Optimization Sciences",
		indexing: "WoS- Q3",
		status: "Approved",
	},
	{
		title: "Journal of Advance Science & Technology (JASTT)",
		indexing: "Scopus-Q3",
		status: "Approval Pending",
	},
	{
		title: "Journal of Computers, Mechanical Management (JCMM)",
		indexing: "Scopus",
		status: "Approval Pending",
	},
	*/
];

export default function PublicationPartnerPage() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-12 pb-10 lg:pb-14 pt-4 lg:pt-6">
				<PageTitle
					lightText="Publication"
					accentText="Partners"
					description="Explore the publication avenues available for accepted and presented papers at ICAIES³ 2026."
				/>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
					{/* Without APC */}
					<div className="bg-bg-cream rounded-xl p-8 border border-gray-100 h-full">
						<div className="flex items-center gap-3 mb-6">
							<div className="p-3 bg-white rounded-xl shadow-sm">
								<BookOpen className="w-6 h-6 text-accent" />
							</div>
							<h2 className="text-xl font-bold text-primary">
								Publication <span className="text-accent">without</span> APC
							</h2>
						</div>
						<ul className="space-y-5">
							{publicationsWithoutAPC.map((item, idx) => (
								<li key={idx} className="flex items-start gap-3">
									<div className="mt-1">
										<CheckCircle2 className="w-5 h-5 text-accent" />
									</div>
									<p className="text-text-body text-sm leading-relaxed">
										{item}
									</p>
								</li>
							))}
						</ul>
					</div>

					{/* With APC */}
					<div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm h-full relative overflow-hidden">
						<div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10" />

						<div className="flex items-center gap-3 mb-6">
							<div className="p-3 bg-bg-cream rounded-xl border border-gray-100">
								<Globe className="w-6 h-6 text-accent" />
							</div>
							<h2 className="text-xl font-bold text-primary">
								Publication <span className="text-accent">with</span> APC
							</h2>
						</div>

						<p className="text-sm text-text-muted mb-6">
							High Quality selected papers will be sent for publication in ESCI
							& Scopus indexed Journal(s). Articles submitted to journals may go
							through a secondary peer review per journal requirements.{" "}
							<strong className="text-primary">
								Acceptance is solely at the discretion of the Journal editors.
							</strong>
						</p>

						<div className="space-y-4">
							{publicationsWithAPC.map((journal, idx) => (
								<div
									key={idx}
									className="p-4 rounded-lg bg-bg-cream/50 border border-gray-100/50 hover:bg-bg-cream transition-colors"
								>
									<h3 className="font-semibold text-primary text-sm mb-2">
										{journal.title}
									</h3>
									<div className="flex flex-wrap gap-2">
										<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-accent/10 text-accent-dark">
											{journal.indexing}
										</span>
										<span
											className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
												journal.status === "Approved" ?
													"bg-green-100 text-green-700"
												:	"bg-yellow-100 text-yellow-700"
											}`}
										>
											{journal.status}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
