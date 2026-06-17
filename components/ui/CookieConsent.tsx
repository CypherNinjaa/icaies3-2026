"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem("cookie-consent");
		if (!consent) {
			const timer = setTimeout(() => setShow(true), 0);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem("cookie-consent", "accepted");
		setShow(false);
	};

	const handleDecline = () => {
		localStorage.setItem("cookie-consent", "declined");
		setShow(false);
	};

	if (!show) return null;

	return (
		<div
			className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-50 bg-white border border-gray-200 rounded-xl p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-300"
			role="alert"
			aria-label="Cookie consent banner"
		>
			<h3 className="text-sm font-semibold text-primary mb-2">
				Cookie &amp; Privacy Policy
			</h3>
			<p className="text-xs text-text-body leading-relaxed mb-4">
				We use cookies to improve your experience on our website. By continuing
				to browse, you agree to our use of cookies and our{" "}
				<Link
					href="/privacy-policy"
					className="text-accent-contrast font-medium underline hover:text-accent transition-colors"
				>
					Privacy Policy
				</Link>
				.
			</p>
			<div className="flex items-center gap-3 justify-end">
				<button
					onClick={handleDecline}
					className="px-3 py-1.5 text-xs font-semibold text-primary hover:text-white transition-colors rounded-lg bg-gray-100 hover:bg-primary-light"
				>
					Decline
				</button>
				<button
					onClick={handleAccept}
					className="px-4 py-1.5 text-xs font-semibold text-primary-dark bg-accent hover:bg-accent-dark rounded-lg transition-all shadow-sm"
				>
					Accept
				</button>
			</div>
		</div>
	);
}
