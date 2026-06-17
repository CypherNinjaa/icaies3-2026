import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://www.amitypatnaevents.in";
	const routes = [
		"",
		"/call-for-papers",
		"/call-for-poster-presentation",
		"/submission-guidelines",
		"/program-schedule",
		"/publication-partner",
		"/contact",
		"/committee/organizing",
		"/committee/technical",
		"/privacy-policy",
		"/terms-and-conditions",
	];

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString(),
		changeFrequency: route === "" ? "weekly" : "monthly",
		priority: route === "" ? 1.0 : route.startsWith("/committee") ? 0.5 : 0.8,
	}));
}
