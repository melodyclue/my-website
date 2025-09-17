import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const posts = defineCollection({
	name: "posts",
	directory: "src/posts",
	include: "**/*.md",
	schema: z.object({
		title: z.string({ error: "Title is required" }),
		slug: z.string({ error: "Slug is required" }),
		publishedAt: z.string({ error: "Published at is required" }),
		updatedAt: z.string({ error: "Updated at is required" }),
	}),
});

export default defineConfig({
	collections: [posts],
});
