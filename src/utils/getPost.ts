import { allPosts } from "content-collections";

export function getPost(slug: string) {
	return allPosts.find((post) => post.slug === slug);
}
