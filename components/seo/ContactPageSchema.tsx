export function ContactPageSchema() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		name: "Contact ICAIES³ 2026 Committee",
		description:
			"Contact the ICAIES³ 2026 organizing committee. Address, phone, and email information.",
		url: "https://www.amitypatnaevents.in/contact",
		mainEntity: {
			"@type": "EducationalOrganization",
			name: "Amity University Patna",
			telephone: "+91-9430800553",
			email: "icaies3@amity.edu",
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}
