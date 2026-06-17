interface BreadcrumbSchemaProps {
	pageName: string;
	route: string;
}

export function BreadcrumbSchema({ pageName, route }: BreadcrumbSchemaProps) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://www.amitypatnaevents.in",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: pageName,
				item: `https://www.amitypatnaevents.in${route}`,
			},
		],
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}
