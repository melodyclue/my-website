import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
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
	transform: async (document, context) => {
		const html = await compileMarkdown(context, document, {
			remarkPlugins: [remarkGfm, remarkBreaks],
			rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings],
		});
		return {
			...document,
			html,
		};
	},
});

export default defineConfig({
	collections: [posts],
});
