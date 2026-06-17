import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
	title: "Terms and Conditions",
	description:
		"Terms and Conditions for ICAIES³ 2026. Review rules for manuscript submission, registration, and attendance.",
	robots: { index: true, follow: true },
};

export default function TermsConditionsPage() {
	return (
		<div className="bg-white">
			<SiteHeader />
			<BreadcrumbSchema pageName="Terms and Conditions" route="/terms-and-conditions" />
			<div className="mx-auto max-w-7xl px-6 lg:px-12 pb-10 lg:pb-14 pt-4 lg:pt-6">
				<PageTitle
					lightText="Terms &amp;"
					accentText="Conditions"
					description="Last updated: June 17, 2026"
				/>
				<div className="max-w-4xl prose text-text-body space-y-6 mt-6">
					<p>
						Welcome to the ICAIES³ 2026 conference website. By accessing or
						using this website, you agree to comply with and be bound by the
						following Terms and Conditions.
					</p>
					<h2 className="text-xl font-bold text-primary mt-8">
						1. Submission Policy
					</h2>
					<p>
						All submitted manuscripts must represent original research not
						previously published or under review elsewhere. Plagiarism or
						unethical use of AI tools will result in immediate rejection. The
						similarity score of the manuscript should not exceed 10%.
					</p>
					<h2 className="text-xl font-bold text-primary mt-8">
						2. Registration &amp; Fees
					</h2>
					<p>
						To present a paper and be included in the conference proceedings, at
						least one author must complete the registration and pay the early
						bird or standard registration fee. All fees are non-refundable.
					</p>
					<h2 className="text-xl font-bold text-primary mt-8">
						3. Presentation Policy
					</h2>
					<p>
						ICAIES³ 2026 is conducted in hybrid mode. Authors can present their
						papers offline at Amity University Patna or online via our virtual
						platform. Failure to present an accepted paper will result in
						exclusion from the publication.
					</p>
					<h2 className="text-xl font-bold text-primary mt-8">
						4. Intellectual Property
					</h2>
					<p>
						All materials published on this website, including design, logos,
						text, and structure, are the property of Amity University Patna and
						the ICAIES³ committee. Unauthorized distribution or copying is
						strictly prohibited.
					</p>
				</div>
			</div>
		</div>
	);
}
