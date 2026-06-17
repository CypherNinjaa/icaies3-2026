import { ArrowRight, Send } from "lucide-react";

const submissionUrl =
	"https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F";

export function SubmissionCta() {
	return (
		<div className="rounded-2xl border border-accent/15 bg-linear-to-br from-accent/10 via-white to-bg-cream p-5 shadow-sm">
			<div className="flex items-start gap-3">
				<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary shadow-sm">
					<Send className="h-5 w-5" />
				</div>
				<div className="min-w-0">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-contrast">
						Submit Now
					</p>
					<h3 className="mt-1 text-lg font-bold text-primary">
						Ready to submit your paper?
					</h3>
					<p className="mt-2 text-sm leading-relaxed text-text-muted">
						Use the Microsoft CMT portal to upload your manuscript and track the
						review process.
					</p>
				</div>
			</div>

			<a
				href={submissionUrl}
				target="_blank"
				rel="noreferrer"
				className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-primary transition-colors hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
			>
				Submit via CMT
				<ArrowRight className="h-4 w-4" />
			</a>
		</div>
	);
}
