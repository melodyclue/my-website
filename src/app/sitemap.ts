import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://melodyclue.com",
			lastModified: new Date(),
			changeFrequency: "always",
			priority: 1,
		},
		{
			url: "https://melodyclue.com/projects",
			lastModified: new Date(),
			changeFrequency: "always",
			priority: 1,
		},
		{
			url: "https://melodyclue.com/personal",
			lastModified: new Date(),
			changeFrequency: "always",
			priority: 0.8,
		},
		{
			url: "https://melodyclue.com/posts",
			lastModified: new Date(),
			changeFrequency: "always",
			priority: 0.5,
		},
	];
}
