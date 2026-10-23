import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import {
	registrationContent,
	registrationFeeSchedules,
	posterFeeSchedule,
} from "@/content/registration";
import {
	CreditCard,
	CheckCircle,
	Presentation,
	ExternalLink,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
	title: "Registration",
	description:
		"Register for ICAIES³ 2027. View registration fee structure for Research Articles and Poster Presentations, eligibility guidelines, and payment instructions.",
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

				{/* Registration Notes & Guidelines */}
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

				{/* Research Article Fee Schedules */}
				<section id="fee-table" className="mt-10">
					<h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
						<CreditCard className="w-5 h-5 text-accent" />
						Registration Fee (Research Article)
					</h3>

					<div className="space-y-6">
						{registrationFeeSchedules.map((schedule, scheduleIdx) => (
							<div key={scheduleIdx}>
								<h4 className="text-base font-semibold text-primary mb-3">
									{schedule.phase}
									<span className="text-sm font-medium text-accent-contrast ml-2">
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
													Conference Fee (Full Length Paper) (Hybrid Mode)
												</th>
												<th className="text-center px-4 py-4 font-semibold">
													Students (INR)
												</th>
												<th className="text-center px-4 py-4 font-semibold">
													Research Scholar (INR)
												</th>
												<th className="text-center px-4 py-4 font-semibold">
													Faculties (INR)
												</th>
												<th className="text-center px-4 py-4 font-semibold">
													Industry &amp; Other Participants (INR)
												</th>
											</tr>
										</thead>
										<tbody>
											<tr className="border-b border-gray-100 bg-white">
												<td className="px-4 py-4 font-medium text-primary">
													Amount
												</td>
												<td className="px-4 py-4 text-center font-bold text-primary">
													{schedule.students}
												</td>
												<td className="px-4 py-4 text-center font-bold text-primary">
													{schedule.researchScholar}
												</td>
												<td className="px-4 py-4 text-center font-bold text-primary">
													{schedule.faculties}
												</td>
												<td className="px-4 py-4 text-center font-bold text-primary">
													{schedule.industryParticipants}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						))}
					</div>

					{/* Conference Registration Fees Payment Link */}
					<div className="mt-6 bg-bg-cream rounded-xl p-5 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
						<p className="text-sm font-bold text-primary">
							Conference Registration Fees:
						</p>
						<a
							href={registrationContent.paymentLink}
							target="_blank"
							rel="noopener noreferrer"
							className="btn-gradient text-sm justify-center shrink-0"
						>
							<span>Pay Registration Fee</span>
							<ExternalLink className="w-4 h-4 shrink-0" />
						</a>
					</div>
				</section>

				{/* Poster Presentation Fee Schedule */}
				<section id="poster-fee-table" className="mt-10">
					<h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
						<Presentation className="w-5 h-5 text-accent" />
						Registration Fee (Poster Presentation)
					</h3>

					<div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
						<table className="w-full text-sm" id="poster-fee-table">
							<thead>
								<tr className="bg-primary text-white">
									<th className="text-left px-4 py-4 font-semibold min-w-56">
										Poster Presentation Fee (Hybrid Mode)
									</th>
									<th className="text-center px-4 py-4 font-semibold">
										Students (INR)
									</th>
									<th className="text-center px-4 py-4 font-semibold">
										Research Scholar (INR)
									</th>
									<th className="text-center px-4 py-4 font-semibold">
										Faculties (INR)
									</th>
									<th className="text-center px-4 py-4 font-semibold">
										Industry &amp; Other Participants (INR)
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-gray-100 bg-white">
									<td className="px-4 py-4 font-medium text-primary">
										Amount
									</td>
									<td className="px-4 py-4 text-center font-bold text-primary">
										{posterFeeSchedule.students}
									</td>
									<td className="px-4 py-4 text-center font-bold text-primary">
										{posterFeeSchedule.researchScholar}
									</td>
									<td className="px-4 py-4 text-center font-bold text-primary">
										{posterFeeSchedule.faculties}
									</td>
									<td className="px-4 py-4 text-center font-bold text-primary">
										{posterFeeSchedule.industryParticipants}
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* Poster Presentation Registration Fees Payment Link */}
					<div className="mt-6 bg-bg-cream rounded-xl p-5 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
						<p className="text-sm font-bold text-primary">
							Poster Presentation Registration Fees:
						</p>
						<a
							href={registrationContent.paymentLink}
							target="_blank"
							rel="noopener noreferrer"
							className="btn-gradient text-sm justify-center shrink-0"
						>
							<span>Pay Poster Registration Fee</span>
							<ExternalLink className="w-4 h-4 shrink-0" />
						</a>
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
			</div>
		</div>
	);
}
