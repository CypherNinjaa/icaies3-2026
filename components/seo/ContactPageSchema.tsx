export function ContactPageSchema() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		name: "Contact ICAIES³ 2027 Committee",
		description:
			"Contact the ICAIES³ 2027 organizing committee. Address and email information.",
		url: "https://www.amitypatnaevents.in/contact",
		mainEntity: {
			"@type": "EducationalOrganization",
			name: "Amity University Patna",
			email: [
				"akmishra@ptn.amity.edu",
				"usingh@ptn.amity.edu",
				"conference.aiit@ptn.amity.edu",
				"aiit@ptn.amity.edu",
			],
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}
