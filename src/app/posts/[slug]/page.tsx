import { ArrowLeft, CalendarDays, Clock, RefreshCcw } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import MarkdownContent from "@/components/MarkdownContent";
import { getPost } from "@/utils/getPost";
import { createExcerpt, formatPostDate } from "@/utils/postFormatting";

type PostPageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({
	params,
}: PostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = getPost(slug);
	if (!post) {
		return {};
	}

	const description = createExcerpt(post.content, 160);

	return {
		title: `${post.title} | Blog`,
		description,
	};
}

export default async function PostPage({ params }: PostPageProps) {
	const { slug } = await params;
	const post = getPost(slug);

	if (!post) {
		notFound();
	}

	const publishedAt = formatPostDate(post.publishedAt);
	const updatedAt = formatPostDate(post.updatedAt);
	const showUpdated = Boolean(updatedAt) && post.updatedAt !== post.publishedAt;
	const lead = createExcerpt(post.content, 220);

	return (
		<div className="min-h-screen bg-background">
			<div className="mx-auto max-w-4xl px-6 py-16 md:py-16">
				<Breadcrumb
					items={[
						{ label: "Home", href: "/" },
						{ label: "Blog", href: "/posts" },
					]}
				/>
				<article className="bg-white/60 backdrop-blur-sm border border-zinc-200/60 rounded-2xl p-8 md:p-12">
					<header className="mb-12 flex flex-col gap-6">
						<h1 className="text-2xl font-bold text-black md:text-3xl">
							{post.title}
						</h1>
						{lead && (
							<p className="text-base leading-relaxed text-zinc-700">{lead}</p>
						)}
						<div className="grid gap-4 bg-zinc-50 rounded-xl p-6 text-sm text-zinc-700 md:grid-cols-3">
							{publishedAt && (
								<div className="flex flex-col gap-1">
									<span className="text-xs text-zinc-500">公開日</span>
									<span className="font-semibold text-zinc-900">
										{publishedAt}
									</span>
								</div>
							)}
							{showUpdated && (
								<div className="flex flex-col gap-1">
									<span className="text-xs text-zinc-500">最終更新</span>
									<span className="font-semibold text-zinc-900">
										{updatedAt}
									</span>
								</div>
							)}
						</div>
					</header>
					<div className="flex flex-col gap-12">
						<MarkdownContent content={post.content} />
						<footer className="bg-zinc-50 rounded-xl p-6 text-sm text-zinc-700">
							<p className="font-medium">
								この記事で扱ってほしいトピックや質問があれば、次の記事づくりのヒントにしたいのでぜひお知らせください。
							</p>
						</footer>
					</div>
				</article>
			</div>
		</div>
	);
}
