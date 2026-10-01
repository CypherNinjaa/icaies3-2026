export interface SubmissionSection {
	title: string;
	content: string[];
}

export const submissionContent = {
	title: "Submission Guidelines",
	pageDescription:
		"To submit a paper for ICAIES³ 2026, authors must follow the conference proceedings format. All submissions will undergo rigorous peer review according to conference guidelines.",

	sections: [
		{
			title: "Submission Guidelines & Formatting",
			content: [
				"To submit a paper for ICAIES³ 2026, authors must follow the conference proceedings format.",
				"The submission template for the conference is available at ICAIES³ Submission Template, for Word users and for LaTeX users.",
				"The maximum length of the paper is six (6) pages.",
				"Authors must ensure that their research paper is original and has not been previously submitted to any other journal or conference.",
			],
		},
		{
			title: "Plagiarism & AI Policy",
			content: [
				"The similarity score of the manuscript should not exceed 10%.",
				"Manuscripts with a similarity score of more than 10% will not be processed.",
				"Submissions found to contain AI-generated plagiarism or unethical use of AI tools will not be considered for review.",
			],
		},
		{
			title: "Review Process & Oral Presentation",
			content: [
				"All papers with a similarity score of less than 10% will undergo a double-blind review.",
				"The technical committee of the conference will review the papers, and the authors will be notified of the paper's status, which can be one of the following:",
				"• Accepted for oral presentation",
				"• Accepted with minor corrections for Oral Presentation",
				"• Rejected",
			],
		},
		{
			title: "Paper Submission Portal",
			content: [
				"Authors are required to submit their manuscripts electronically through the Microsoft Conference Management Toolkit (CMT) portal.",
				"Follow the official submission link on the website to create or log in to your Microsoft CMT account.",
			],
		},
		{
			title: "Publication without Article Processing Charge (APC)",
			content: [
				"1. All Accepted Full-Length Papers will be Recommended for Publication in the conference proceedings as an edited book with ISBN and DOI, without APC.",
				"2. Selected extended papers will be recommended as a chapter and will go for publication in Scopus Indexed Edited Book without APC. (Subject to acceptance - as per Scope of Edited Book).",
			],
		},
		{
			title: "Publication with Article Processing Charge (APC)",
			content: [
				"3. High Quality selected papers will be sent for publication in ESCI & Scopus indexed Journal(s) will be published on the terms & conditions of the respective journals.",
				"The cost of publication shall be borne by the author(s) separately.",
				"Articles submitted to journals may go through a secondary peer review per journal requirements.",
				"Acceptance is solely at the discretion of the Journal editors.",
			],
		},
		{
			title: "Registration & Author Compliance",
			content: [
				"All the accepted paper(s) need to be registered by at least one of the authors(s) to make a presentation at the conference.",
				"The paper without registration will not appear in the publication.",
				"The Fee is also transferable into our accounts through NEFT/RTGS. The details of the account will be provided on request of the same.",
				"Only full-time Research Scholars can register under the Research Scholar category.",
				"Authors will be asked to submit the Proof of UG/PG/Research Scholar to confirm the Category of Registration.",
			],
		},
		{
			title: "Presentation Mode",
			content: [
				"The conference will be held in Hybrid Mode (both Online and Offline options).",
				"Authors can present their accepted work either physically at Amity University Patna or virtually via online conference links.",
			],
		},
	] as SubmissionSection[],
};
