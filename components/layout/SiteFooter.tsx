import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteMeta } from "@/content/site-meta";
import { contactInfo } from "@/content/contact";

export function SiteFooter() {
	return (
		<footer className="bg-footer-bg text-footer-text" id="site-footer">
			<div className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					{/* Column 1: About */}
					<div>
						<h3 className="font-serif text-xl font-bold text-white mb-4">
							{siteMeta.acronym} {siteMeta.year}
						</h3>
						<p className="text-sm text-gray-400 leading-relaxed mb-4">
							The premier forum for AI, Security & Scalable Systems. Organized
							by {siteMeta.organizer}, {siteMeta.university}.
						</p>
						<div className="flex items-center gap-2 text-sm text-gray-400">
							<MapPin className="w-4 h-4 text-accent shrink-0" />
							<span>
								{contactInfo.address.line2}, {contactInfo.address.line3}
							</span>
						</div>
					</div>

					{/* Column 2: Quick Links */}
					<div>
						<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2.5">
							{[
								{ label: "About Conference", href: "/" },
								{ label: "Call for Papers", href: "/call-for-papers" },
								{
									label: "Call for Poster Presentation",
									href: "/call-for-poster-presentation",
								},
								{ label: "Important Dates", href: "/" },
								{ label: "Registration", href: "/registration" },
								{ label: "Program Schedule", href: "/program-schedule" },
								{
									label: "Submit Paper",
									href: "https://cmt3.research.microsoft.com/",
									external: true,
								},
							].map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										target={link.external ? "_blank" : undefined}
										rel={link.external ? "noopener noreferrer" : undefined}
										className="text-sm text-gray-400 hover:text-accent transition-colors"
									>
										{link.label}
										{link.external && <span className="ml-1 text-xs">↗</span>}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Column 3: Contact */}
					<div>
						<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
							Contact
						</h3>
						<ul className="space-y-3">
							{contactInfo.contactPersons.map((person) => (
								<li key={person.name} className="text-sm">
									<p className="text-white font-medium">{person.name}</p>
									<div className="flex items-center gap-2 text-gray-400 mt-0.5">
										<Phone className="w-3.5 h-3.5 text-accent shrink-0" />
										<span>{person.phone}</span>
									</div>
								</li>
							))}
							<li className="flex items-center gap-2 text-sm text-gray-400">
								<Mail className="w-3.5 h-3.5 text-accent" />
								<a
									href={`mailto:${contactInfo.email}`}
									className="hover:text-accent transition-colors"
								>
									{contactInfo.email}
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
					<p className="text-xs text-gray-400">
						© {new Date().getFullYear()} {siteMeta.acronym} Conference. All
						Rights Reserved. Not an official University page.
					</p>
					<div className="flex items-center gap-4 text-xs text-gray-400">
						<Link
							href="/privacy-policy"
							className="hover:text-accent transition-colors"
						>
							Privacy Policy
						</Link>
						<span className="text-gray-700">|</span>
						<Link
							href="/terms-and-conditions"
							className="hover:text-accent transition-colors"
						>
							Terms &amp; Conditions
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
