import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import { compileMDX } from "@content-collections/mdx";
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
		const mdx = await compileMDX(context, document, {
			remarkPlugins: [remarkGfm, remarkBreaks],
			rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings],
		});
		return {
			...document,
			mdx,
		};
	},
});

const personalProjects = defineCollection({
	name: "personalProjects",
	directory: "src/personal-projects",
	include: "**/*.md",
	schema: z.object({
		title: z.string({ error: "Title is required" }),
		slug: z.string({ error: "Slug is required" }),
		description: z.string({ error: "Description is required" }),
		url: z.string({ error: "URL is required" }),
		status: z.string({ error: "Status is required" }),
		tech: z.array(z.string()).default([]),
		publishedAt: z.string({ error: "Published at is required" }),
		updatedAt: z.string({ error: "Updated at is required" }),
		featured: z.boolean().default(false),
	}),
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document, {
			remarkPlugins: [remarkGfm, remarkBreaks],
			rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings],
		});
		return {
			...document,
			mdx,
		};
	},
});

const projects = defineCollection({
	name: "projects",
	directory: "src/projects",
	include: "**/*.md",
	schema: z.object({
		title: z.string({ error: "Title is required" }),
		slug: z.string({ error: "Slug is required" }),
		description: z.string({ error: "Description is required" }),
		period: z.string({ error: "Period is required" }),
		role: z.string({ error: "Role is required" }),
		team: z.string({ error: "Team is required" }),
		tasks: z.array(z.string()).default([]),
		achievements: z.array(z.string()).default([]),
		tech: z.array(z.string()).default([]),
		phases: z.string({ error: "Phases is required" }),
		publishedAt: z.string({ error: "Published at is required" }),
		updatedAt: z.string({ error: "Updated at is required" }),
		featured: z.boolean().default(false),
		order: z.number().default(0),
	}),
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document, {
			remarkPlugins: [remarkGfm, remarkBreaks],
			rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutolinkHeadings],
		});
		return {
			...document,
			mdx,
		};
	},
});

export default defineConfig({
	collections: [posts, personalProjects, projects],
});
