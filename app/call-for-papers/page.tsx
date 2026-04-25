import { Metadata } from "next";
import { PageTitle } from "@/components/layout/PageTitle";
import { tracks } from "@/content/tracks";
import { Brain, Shield, Server, Wifi, Cpu, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Call for Papers",
	description:
		"Submit your research papers to ICAIES³ 2026 across 8 tracks spanning intelligent systems, secure computing, scalable architectures, networking, IoT, data-centric AI, emerging technologies, and applied AI case studies.",
};

const iconMap: Record<string, React.ReactNode> = {
	Brain: <Brain className="w-6 h-6" />,
	Shield: <Shield className="w-6 h-6" />,
	Server: <Server className="w-6 h-6" />,
	Wifi: <Wifi className="w-6 h-6" />,
	Cpu: <Cpu className="w-6 h-6" />,
	Sparkles: <Sparkles className="w-6 h-6" />,
};

export default function CallForPapersPage() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-12 pb-10 lg:pb-14 pt-4 lg:pt-6">
				<PageTitle
					lightText="Call for"
					accentText="Papers"
					description="Call for Papers: Topics to be covered but not limited to:"
				/>

				{/* Track Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
					{tracks.map((track) => (
						<div
							key={track.number}
							className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm card-hover group"
							id={`track-${track.number}`}
						>
							{/* Track Number + Icon */}
							<div className="flex items-center gap-3 mb-4">
								<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary-dark transition-colors duration-300">
									{iconMap[track.icon]}
								</div>
								<div>
									<p className="text-xs font-semibold text-accent uppercase tracking-wider">
										Track {track.number}
									</p>
									<h3 className="text-base font-bold text-primary leading-snug">
										{track.title}
									</h3>
								</div>
							</div>

							{/* Topics */}
							<ul className="space-y-1.5 mt-3">
								{track.topics.map((topic, idx) => (
									<li
										key={idx}
										className="flex items-start gap-2 text-sm text-text-body"
									>
										<span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
										{topic}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="text-center mt-12 pb-4">
					<Link
						href="https://cmt3.research.microsoft.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-gradient text-base"
					>
						Submit Your Manuscript →
					</Link>
					<p className="text-sm text-text-muted mt-3">
						Submissions are managed through Microsoft CMT
					</p>
				</div>
			</div>
		</div>
	);
}
