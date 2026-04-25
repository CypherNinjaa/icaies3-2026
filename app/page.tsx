import { homeContent } from "@/content/home";
import { ImportantDeadlines } from "@/components/home/ImportantDeadlines";
import { Announcements } from "@/components/home/Announcements";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import { AboutInstitution } from "@/components/home/AboutInstitution";
import { Timer } from "lucide-react";

export default function HomePage() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-12 py-10 lg:py-14">
				{/* 2-Column Layout: Main (left) + Sidebar (right) */}
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-14">
					{/* Left Column — Main Content */}
					<div>
						{/* Welcome Section */}
						<section id="welcome-section" className="mt-10">
							<h2 className="text-2xl lg:text-3xl mb-4">
								<span className="page-title-light">Welcome to </span>
								<span className="page-title-accent">ICAIES³</span>
							</h2>
							{homeContent.welcome.body.map((paragraph, index) => (
								<p
									key={index}
									className="text-text-body leading-relaxed mb-3 last:mb-0"
									dangerouslySetInnerHTML={{ __html: paragraph }}
								/>
							))}
						</section>
						{/* About Institution */}
						<AboutInstitution />

						{/* Conference Aims */}
						<section id="conference-aims" className="mt-10">
							<h2 className="text-2xl lg:text-3xl mb-4">
								<span className="page-title-light">Conference </span>
								<span className="page-title-accent">Aims</span>
							</h2>
							{homeContent.conferenceGoal.body.map((paragraph, index) => (
								<p
									key={index}
									className="text-text-body leading-relaxed mb-3 last:mb-0"
								>
									{paragraph}
								</p>
							))}
						</section>
					</div>

					{/* Right Column — Sidebar */}
					<aside className="space-y-6 lg:sticky lg:top-20 lg:self-start">
						{/* Important Deadlines */}
						<ImportantDeadlines />

						{/* Announcements */}
						<Announcements />

						{/* Countdown Timer */}
						<div>
							<div className="widget-header flex items-center gap-2">
								<Timer className="w-4 h-4" />
								<span>Time Left for Conference</span>
							</div>
							<CountdownTimer />
						</div>
					</aside>
				</div>
			</div>
		</div>
	);
}
