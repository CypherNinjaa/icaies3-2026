import { siteMeta } from "@/content/site-meta";

export function GlobalSchema() {
	const orgSchema = {
		"@context": "https://schema.org",
		"@type": "EducationalOrganization",
		"@id": "https://www.amitypatnaevents.in/#organization",
		name: siteMeta.university,
		url: "https://patna.amity.edu/",
		logo: "https://www.amitypatnaevents.in/logos/amity-logo.png",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Bailey Road",
			addressLocality: "Patna",
			addressRegion: "Bihar",
			postalCode: "801503",
			addressCountry: "India",
		},
	};

	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": "https://www.amitypatnaevents.in/#website",
		name: `${siteMeta.title} — ${siteMeta.fullTitle}`,
		url: "https://www.amitypatnaevents.in",
	};

	const eventSchema = {
		"@context": "https://schema.org",
		"@type": "Event",
		"@id": "https://www.amitypatnaevents.in/#event",
		name: `${siteMeta.title} — ${siteMeta.fullTitle}`,
		startDate: "2026-10-21T09:00:00+05:30",
		endDate: "2026-10-22T18:00:00+05:30",
		eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
		eventStatus: "https://schema.org/EventScheduled",
		location: [
			{
				"@type": "Place",
				name: "Amity University Patna Campus",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Bailey Road",
					addressLocality: "Patna",
					addressRegion: "Bihar",
					postalCode: "801503",
					addressCountry: "India",
				},
			},
			{
				"@type": "VirtualLocation",
				url: "https://www.amitypatnaevents.in",
			},
		],
		image: "https://www.amitypatnaevents.in/images/hero-bg.png",
		description: siteMeta.description,
		organizer: {
			"@type": "EducationalOrganization",
			name: siteMeta.organizer,
			url: "https://www.amitypatnaevents.in",
		},
		offers: {
			"@type": "Offer",
			url: "https://www.amitypatnaevents.in/registration",
			priceCurrency: "INR",
			price: "0",
			availability: "https://schema.org/InStock",
			validFrom: "2026-03-15T00:00:00+05:30",
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
			/>
		</>
	);
}
