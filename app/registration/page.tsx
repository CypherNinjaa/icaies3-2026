import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import {
	registrationContent,
	registrationFeeSchedules,
	posterFeeSchedule,
} from "@/content/registration";
import { CreditCard, CheckCircle, Presentation, Mail, Phone } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { contactInfo } from "@/content/contact";

export const metadata: Metadata = {
	title: "Registration",
	description:
		"Register for ICAIES³ 2026. View registration fee structure for Research Articles and Poster Presentations, eligibility guidelines, and payment instructions.",
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

				{/* Account Details & Contact Banner */}
				{/* <section id="registration-assistance" className="mt-12">
					<div className="bg-linear-to-br from-primary to-primary-light rounded-xl p-8 text-white">
						<h3 className="font-serif text-2xl font-bold mb-3 text-accent-light">
							Account Details &amp; Registration Assistance
						</h3>
						<p className="text-white/90 text-sm mb-6 max-w-2xl leading-relaxed">
							The fee is transferable into our accounts through NEFT/RTGS. The details of the account will be provided on request. Please contact the organizing committee for bank transfer details or registration inquiries:
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
							<div className="bg-white/10 rounded-lg p-3.5 border border-white/20">
								<p className="font-semibold text-accent">Dr. Arvind Kumar Mishra</p>
								<p className="text-white/80 text-xs mt-0.5">Convenor, AIIT, Amity University Patna</p>
								<a href="tel:7906770253" className="inline-flex items-center gap-1.5 mt-2 font-mono text-white hover:text-accent transition-colors">
									<Phone className="w-3.5 h-3.5 text-accent" />
									7906770253
								</a>
							</div>
							<div className="bg-white/10 rounded-lg p-3.5 border border-white/20">
								<p className="font-semibold text-accent">Dr. Upasana</p>
								<p className="text-white/80 text-xs mt-0.5">Convenor, AIIT, Amity University Patna</p>
								<a href="tel:9451961800" className="inline-flex items-center gap-1.5 mt-2 font-mono text-white hover:text-accent transition-colors">
									<Phone className="w-3.5 h-3.5 text-accent" />
									9451961800
								</a>
							</div>
							<div className="bg-white/10 rounded-lg p-3.5 border border-white/20">
								<p className="font-semibold text-accent">Official Email</p>
								<p className="text-white/80 text-xs mt-0.5">Conference Secretariat</p>
								<a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-1.5 mt-2 text-white hover:text-accent transition-colors underline underline-offset-2">
									<Mail className="w-3.5 h-3.5 text-accent" />
									{contactInfo.email}
								</a>
							</div>
						</div>
					</div>
				</section> */}
			</div>
		</div>
	);
}
