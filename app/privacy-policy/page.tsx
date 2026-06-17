import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Privacy Policy for ICAIES³ 2026. Learn how we handle your manuscript data and registration details.",
	robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
	return (
		<div className="bg-white">
			<SiteHeader />
			<BreadcrumbSchema pageName="Privacy Policy" route="/privacy-policy" />
			<div className="mx-auto max-w-7xl px-6 lg:px-12 pb-10 lg:pb-14 pt-4 lg:pt-6">
				<PageTitle
					lightText=""
					accentText="Privacy Policy"
					description="Last updated: June 17, 2026"
				/>
				<div className="max-w-4xl prose text-text-body space-y-6 mt-6">
					<p>
						Amity University Patna and the organizing committee of ICAIES³ 2026
						are committed to protecting your privacy. This Privacy Policy
						explains how we collect, use, and safeguard the personal information
						and manuscript data you provide to us.
					</p>
					<h2 className="text-xl font-bold text-primary mt-8">
						1. Information We Collect
					</h2>
					<p>
						We collect personal information when you register for the
						conference, submit a manuscript via the Microsoft CMT portal, or
						contact us. This information includes your name, email address,
						academic affiliation, phone number, and payment details.
					</p>
					<h2 className="text-xl font-bold text-primary mt-8">
						2. Use of Information
					</h2>
					<p>
						We use your personal information and manuscript data solely for
						managing the peer review process, coordinating conference
						presentations, printing the abstract booklet, issuing participation
						certificates, and sending conference-related announcements.
					</p>
					<h2 className="text-xl font-bold text-primary mt-8">
						3. Data Sharing &amp; Disclosure
					</h2>
					<p>
						We do not sell, trade, or share your personal information with third
						parties. Manuscript data is only shared with designated reviewers,
						session chairs, and publication partners (e.g. Scopus-indexed
						publishers) as necessary for peer review and publication.
					</p>
					<h2 className="text-xl font-bold text-primary mt-8">
						4. Contact Information
					</h2>
					<p>
						If you have any questions about this Privacy Policy, please contact
						us at{" "}
						<a href="mailto:icaies3@amity.edu" className="text-accent-contrast underline">
							icaies3@amity.edu
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
}
