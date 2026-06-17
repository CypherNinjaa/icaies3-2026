import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import {
	registrationContent,
	registrationFeeSchedules,
} from "@/content/registration";
import { CreditCard, CheckCircle } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
	title: "Registration",
	description:
		"Register for ICAIES³ 2026. View registration notes, fee schedule, and payment instructions.",
	robots: {
		index: false,
		follow: true,
	},
};

export default function RegistrationPage() {
	return (
		<div className="bg-white">
			<SiteHeader />
			<BreadcrumbSchema pageName="Registration" route="/registration" />
			<div className="mx-auto max-w-7xl px-6 lg:px-12 pb-10 lg:pb-14 pt-4 lg:pt-6">
				<PageTitle
					lightText=""
					accentText="Registration"
					description={registrationContent.overview}
				/>

				{/* Registration Notes */}
				<section id="registration-notes" className="mt-8">
					<h3 className="text-xl font-bold text-primary mb-4">
						{registrationContent.registrationNotes.title}
					</h3>
					<ul className="space-y-2.5">
						{registrationContent.registrationNotes.points.map((point, idx) => (
							<li key={idx} className="flex items-start gap-2.5">
								<CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
								<span className="text-sm text-text-body leading-relaxed">
									{point}
								</span>
							</li>
						))}
					</ul>
				</section>

				{/* Fee Table */}
				<section id="fee-table" className="mt-8">
					<h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
						<CreditCard className="w-5 h-5 text-accent" />
						Registration Fee Schedule
					</h3>

					<div className="space-y-6">
						{registrationFeeSchedules.map((schedule, scheduleIdx) => (
							<div key={scheduleIdx}>
								<h4 className="text-base font-semibold text-primary mb-3">
									{schedule.phase}
									<span className="text-sm font-normal text-text-muted ml-2">
										({schedule.timeline})
									</span>
								</h4>

								<div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
									<table
										className="w-full text-sm"
										id={`registration-fee-table-${scheduleIdx}`}
									>
										<thead>
											<tr className="bg-primary text-white">
												<th className="text-left px-4 py-4 font-semibold min-w-56">
													Conference Fee (Full Length Paper Submission) (Hybrid
													Mode)
												</th>
												<th className="text-center px-4 py-4 font-semibold">
													Students
												</th>
												<th className="text-center px-4 py-4 font-semibold">
													Research Scholar
												</th>
												<th className="text-center px-4 py-4 font-semibold">
													Faculties
												</th>
												<th className="text-center px-4 py-4 font-semibold">
													Industry &amp; Other Participants
												</th>
											</tr>
										</thead>
										<tbody>
											<tr className="border-b border-gray-100 bg-white">
												<td className="px-4 py-4 font-medium text-primary">
													Amount
												</td>
												<td className="px-4 py-4 text-center font-semibold text-text-body">
													{schedule.students}
												</td>
												<td className="px-4 py-4 text-center font-semibold text-text-body">
													{schedule.researchScholar}
												</td>
												<td className="px-4 py-4 text-center font-semibold text-text-body">
													{schedule.faculties}
												</td>
												<td className="px-4 py-4 text-center font-semibold text-text-body">
													{schedule.industryParticipants}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Payment Instructions */}
				<section id="payment-instructions" className="mt-10">
					<h3 className="text-xl font-bold text-primary mb-4">
						{registrationContent.paymentInstructions.title}
					</h3>
					<ul className="space-y-2.5">
						{registrationContent.paymentInstructions.methods.map(
							(method, idx) => (
								<li key={idx} className="flex items-start gap-2.5">
									<CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
									<span className="text-sm text-text-body leading-relaxed">
										{method}
									</span>
								</li>
							),
						)}
					</ul>
				</section>

				{/* Registration Form Placeholder */}
				<section id="registration-form" className="mt-12">
					<div className="bg-linear-to-br from-primary to-primary-light rounded-xl p-8 text-center text-white">
						<h3 className="font-serif text-2xl font-bold mb-3 text-accent-light">
							Ready to Register?
						</h3>
						<p className="text-white/90 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
							Detailed fee amounts and the official registration form link will
							be announced soon. Please ensure your paper is accepted before
							proceeding with registration.
						</p>
						<div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2.5 text-sm font-medium border border-white/20">
							<span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
							Registration Opening Soon
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
