import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { programSchedule, scheduleNotes } from "@/content/schedule";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import {
	Clock,
	MapPin,
	Mic2,
	Coffee,
	Users,
	Award,
	LayoutGrid,
	Info,
	CalendarDays,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Program Schedule",
	description:
		"ICAIES³ 2026 conference program schedule. View the detailed 2-day schedule for November 19-20, 2026 including keynotes, technical sessions, poster presentations, and ceremonies.",
};

const eventTypeConfig: Record<
	string,
	{ icon: React.ReactNode; bg: string; border: string; badge: string; badgeText: string }
> = {
	ceremony: {
		icon: <Award className="w-4 h-4" />,
		bg: "bg-amber-50",
		border: "border-amber-200",
		badge: "bg-amber-100 text-amber-800",
		badgeText: "Ceremony",
	},
	keynote: {
		icon: <Mic2 className="w-4 h-4" />,
		bg: "bg-indigo-50",
		border: "border-indigo-200",
		badge: "bg-indigo-100 text-indigo-800",
		badgeText: "Keynote",
	},
	session: {
		icon: <LayoutGrid className="w-4 h-4" />,
		bg: "bg-emerald-50",
		border: "border-emerald-200",
		badge: "bg-emerald-100 text-emerald-800",
		badgeText: "Technical Session",
	},
	break: {
		icon: <Coffee className="w-4 h-4" />,
		bg: "bg-gray-50",
		border: "border-gray-200",
		badge: "bg-gray-100 text-gray-600",
		badgeText: "Break",
	},
	networking: {
		icon: <Users className="w-4 h-4" />,
		bg: "bg-sky-50",
		border: "border-sky-200",
		badge: "bg-sky-100 text-sky-800",
		badgeText: "Networking",
	},
	poster: {
		icon: <LayoutGrid className="w-4 h-4" />,
		bg: "bg-violet-50",
		border: "border-violet-200",
		badge: "bg-violet-100 text-violet-800",
		badgeText: "Poster Session",
	},
};

export default function ProgramSchedulePage() {
	return (
		<div className="bg-white">
			<SiteHeader />
			<BreadcrumbSchema pageName="Program Schedule" route="/program-schedule" />
			<div className="mx-auto max-w-7xl px-6 lg:px-12 pb-10 lg:pb-14 pt-4 lg:pt-6">
				<PageTitle
					lightText="Program"
					accentText="Schedule"
					description="Detailed program schedule for ICAIES³ 2026 conference — November 19-20, 2026 at Amity University, Patna."
				/>

				{/* Conference Info Bar */}
				<div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 p-4 rounded-xl bg-bg-cream border border-gray-100">
					<div className="flex items-center gap-2 text-sm text-text-body">
						<CalendarDays className="w-4 h-4 text-accent" />
						<span className="font-medium">November 19-20, 2026</span>
					</div>
					<div className="flex items-center gap-2 text-sm text-text-body">
						<MapPin className="w-4 h-4 text-accent" />
						<span>Amity University Patna, Bailey Road</span>
					</div>
					<div className="flex items-center gap-2 text-sm text-text-body">
						<Users className="w-4 h-4 text-accent" />
						<span>Hybrid Mode (Online/Offline)</span>
					</div>
				</div>

				{/* Legend */}
				<div className="flex flex-wrap gap-3 mb-8">
					{Object.entries(eventTypeConfig).map(([key, config]) => (
						<div key={key} className="flex items-center gap-1.5">
							<span
								className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${config.badge}`}
							>
								{config.icon}
								{config.badgeText}
							</span>
						</div>
					))}
				</div>

				{/* Schedule Days */}
				<div className="space-y-12">
					{programSchedule.map((day, dayIdx) => (
						<section key={dayIdx} id={`schedule-day-${dayIdx + 1}`}>
							{/* Day Header */}
							<div className="flex items-center gap-3 mb-6">
								<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-white font-bold text-lg">
									{day.dayLabel.replace("Day ", "")}
								</div>
								<div>
									<h3 className="text-xl font-bold text-primary">
										{day.dayLabel}
									</h3>
									<p className="text-sm text-text-muted">{day.date}</p>
								</div>
								<div className="flex-1 h-px bg-gray-200 ml-4" />
							</div>

							{/* Timeline */}
							<div className="relative">
								{/* Vertical line */}
								<div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-gray-200 hidden sm:block" />

								<div className="space-y-4">
									{day.events.map((event, eventIdx) => {
										const config = eventTypeConfig[event.type];
										return (
											<div
												key={eventIdx}
												className="flex gap-4 sm:gap-6 group"
												id={`event-${dayIdx}-${eventIdx}`}
											>
												{/* Time dot */}
												<div className="hidden sm:flex flex-col items-center pt-5 shrink-0">
													<div className="w-3 h-3 rounded-full bg-accent border-2 border-white shadow-sm z-10" />
												</div>

												{/* Event Card */}
												<div
													className={`flex-1 rounded-xl border p-5 transition-all duration-200 hover:shadow-md ${config.bg} ${config.border}`}
												>
													<div className="flex flex-wrap items-start justify-between gap-2 mb-2">
														<div className="flex items-center gap-2">
															<div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
																<Clock className="w-3.5 h-3.5 text-accent" />
																{event.time}
															</div>
															<span
																className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${config.badge}`}
															>
																{config.icon}
																{config.badgeText}
															</span>
														</div>
														{event.track && (
															<span className="text-xs font-medium text-accent-contrast bg-accent/10 px-2.5 py-1 rounded-full">
																{event.track}
															</span>
														)}
													</div>

													<h4 className="text-base font-bold text-primary mb-1">
														{event.title}
													</h4>

													{event.description && (
														<p className="text-sm text-text-body leading-relaxed mb-2">
															{event.description}
														</p>
													)}

													<div className="flex flex-wrap items-center gap-3 mt-2">
														{event.speaker && (
															<span className="flex items-center gap-1.5 text-xs text-text-muted">
																<Mic2 className="w-3 h-3" />
																{event.speaker}
															</span>
														)}
														{event.venue && (
															<span className="flex items-center gap-1.5 text-xs text-text-muted">
																<MapPin className="w-3 h-3" />
																{event.venue}
															</span>
														)}
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</section>
					))}
				</div>

				{/* Important Notes */}
				<section id="schedule-notes" className="mt-12">
					<div className="rounded-xl border border-amber-200 bg-amber-50/50 p-6">
						<h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
							<Info className="w-5 h-5 text-accent" />
							Important Notes
						</h3>
						<ul className="space-y-2">
							{scheduleNotes.map((note, idx) => (
								<li
									key={idx}
									className="flex items-start gap-2.5 text-sm text-text-body leading-relaxed"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
									{note}
								</li>
							))}
						</ul>
					</div>
				</section>
			</div>
		</div>
	);
}
