import { allPosts } from "content-collections";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { createExcerpt, formatPostDate } from "@/utils/postFormatting";
import Breadcrumb from "@/components/Breadcrumb";

export default function Posts() {
	const posts = allPosts
		.slice()
		.sort(
			(a, b) =>
				new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
		);

	const annotatedPosts = posts.map((post) => {
		const publishedAt = formatPostDate(post.publishedAt);
		const updatedAt = formatPostDate(post.updatedAt);
		const showUpdated =
			Boolean(updatedAt) && post.updatedAt !== post.publishedAt;

		return {
			post,
			publishedAt,
			updatedAt,
			showUpdated,
		};
	});

	return (
		<div className="min-h-screen bg-background">
			<div className="mx-auto max-w-4xl px-6 py-8 md:py-16">
				<Breadcrumb items={[{ label: "Home", href: "/" }]} />
				<header className="mb-8 flex flex-col gap-8">
					<div className="flex items-center gap-3">
						<h1 className="text-2xl md:text-3xl font-bold text-foreground">
							Blog
						</h1>
					</div>
				</header>
				{annotatedPosts.length === 0 ? (
					<div className="flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm border border-zinc-200/60 rounded-2xl p-12 text-center">
						<div className="mb-4 h-16 w-16 rounded-full bg-zinc-100 flex items-center justify-center">
							<Sparkles className="h-8 w-8 text-zinc-400" />
						</div>
						<h3 className="text-xl font-bold text-zinc-900 mb-2">
							まだ記事がありません
						</h3>
						<p className="text-zinc-600 max-w-md">
							新しい記事が投稿されるまでお待ちください。学びと実践の軌跡を共有していく予定です。
						</p>
					</div>
				) : (
					<section className="space-y-6">
						{annotatedPosts.map((entry) => {
							const { post, publishedAt, updatedAt, showUpdated } = entry;
							const excerpt = createExcerpt(post.content, 150);

							return (
								<Link
									key={post.slug}
									href={`/posts/${post.slug}`}
									className="group block"
								>
									<article className="bg-white/60 backdrop-blur-sm border border-zinc-200/60 rounded-2xl p-8 hover:bg-white/80 hover:border-zinc-300/80 transition-all duration-300">
										<div className="flex flex-col gap-4">
											<div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
												{publishedAt && (
													<span className="px-3 py-1 bg-zinc-50 rounded-full border border-zinc-200/60">
														{publishedAt}
													</span>
												)}
												{showUpdated && (
													<span className="px-3 py-1 bg-zinc-50 rounded-full border border-zinc-200/60">
														更新 {updatedAt}
													</span>
												)}
											</div>
											<h2 className="text-xl font-bold text-black group-hover:text-zinc-700 transition-colors">
												{post.title}
											</h2>
											<div className="flex items-center justify-between pt-4">
												<div className="text-sm font-medium text-zinc-600">
													続きを読む
												</div>
												<ArrowUpRight className="size-5 text-zinc-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
											</div>
										</div>
									</article>
								</Link>
							);
						})}
					</section>
				)}
			</div>
		</div>
	);
}
