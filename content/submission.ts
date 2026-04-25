export interface SubmissionSection {
	title: string;
	content: string[];
}

export const submissionContent = {
	title: "Submission Guidelines",
	pageDescription:
		"All submissions to ICAIES³ 2026 must adhere to the following guidelines to ensure a fair and rigorous review process.",

	sections: [
		{
			title: "Submission & Publication",
			content: [
				"All submitted papers must be original work and should not be under consideration for publication elsewhere.",
				"Authors must ensure that their research paper is original and has not been previously submitted to any other journal or conference. The similarity score of the manuscript should not exceed 10%. Manuscripts with a similarity score of more than 10% will not be processed. Submissions found to contain AI-generated plagiarism or unethical use of AI tools will not be considered for review.",
				"Papers will undergo a double-blind peer review process. Authors must ensure that their manuscripts do not contain any identifying information.",
				"Submissions must be made through the Microsoft CMT system.",
			],
		},
		{
			title: "Templates & Formatting",
			content: [
				"Papers must be formatted according to the conference submission template provided on the website.",
				"The maximum length of the paper is six (6) pages, including references and appendices.",
				"All papers must be submitted in PDF format.",
			],
		},
		{
			title: "Review Process & Oral Presentation",
			content: [
				"All papers with a similarity score of less than 10% will undergo a double-blind review. The technical committee of the conference will review the papers, and the authors will be notified of the paper's status, which can be one of the following:",
				"Accepted for oral presentation",
				"Accepted with minor corrections for Oral Presentation",
				"Rejected",
			],
		},
		{
			title: "Publication Opportunities",
			content: [
				"No APC (Free): Accepted papers will be published in Conference Proceedings (Edited Book with ISBN/DOI). Selected extended papers will be considered for publication in Scopus Indexed Books.",
				"Journal Publication: High-quality papers will be recommended to Scopus/Web of Science Indexed Journals (APC Applicable). Example: Journal of Discrete Mathematical Sciences & Cryptography (Q1).",
			],
		},
		{
			title: "Author Compliance",
			content: [
				"At least one author of each accepted paper must register for the conference.",
				"Authors must submit the signed copyright/consent form along with the camera-ready version.",
				"Camera-ready papers must address all reviewer comments.",
			],
		},
		{
			title: "Presentation Mode",
			content: [
				"The conference supports both online and offline presentation modes (Hybrid).",
				"Presenters will receive a certificate of presentation.",
				"All presented papers will be included in the conference proceedings.",
			],
		},
	] as SubmissionSection[],
};
