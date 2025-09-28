import { MDXContent } from "@content-collections/mdx/react";
import { Calendar, HelpCircle, RotateCcw } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Callout from "@/components/Callout";
import { getPost } from "@/utils/getPost";
import { formatPostDate } from "@/utils/postFormatting";

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

	return {
		title: `${post.title} | Blog`,
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
						<div className="flex flex-wrap items-center gap-6 bg-zinc-50/70 rounded-lg p-4 text-sm">
							{publishedAt && (
								<div className="flex items-center gap-2">
									<Calendar className="w-4 h-4 text-zinc-500" />
									<span className="text-zinc-500 text-xs">公開</span>
									<time className="text-zinc-700 font-medium">
										{publishedAt}
									</time>
								</div>
							)}
							{showUpdated && (
								<div className="flex items-center gap-2">
									<RotateCcw className="w-4 h-4 text-zinc-500" />
									<span className="text-zinc-500 text-xs">更新</span>
									<time className="text-zinc-700 font-medium">{updatedAt}</time>
								</div>
							)}
						</div>
					</header>
					<div className="flex flex-col gap-12">
						<div
							className="prose text-foreground
							[&_code:not(pre_code)]:before:content-none [&_code:not(pre_code)]:after:content-none
							[&_code:not(pre_code)]:bg-slate-100 [&_code:not(pre_code)]:px-1.5 [&_code:not(pre_code)]:py-0.5
							[&_code:not(pre_code)]:rounded [&_code:not(pre_code)]:text-sm [&_code:not(pre_code)]:text-rose-600
							[&_code:not(pre_code)]:font-medium"
						>
							<MDXContent
								code={post.mdx}
								components={{
									Callout,
									a: (props) => (
										<a
											{...props}
											target="_blank"
											rel="noopener noreferrer"
											className="text-zinc-700 hover:text-zinc-900 underline mx-1"
										/>
									),
								}}
							/>
						</div>
						<footer className="bg-zinc-50/50 rounded-lg p-6 border border-zinc-200/50">
							<div className="flex flex-col gap-4">
								<div className="flex items-center gap-3">
									<div className="w-6 h-6 bg-zinc-100 rounded-full flex items-center justify-center">
										<HelpCircle className="w-3 h-3 text-zinc-500" />
									</div>
									<h3 className="text-sm font-medium text-zinc-700">
										フィードバック
									</h3>
								</div>
								<p className="text-zinc-600 text-sm leading-relaxed">
									この記事についてのご質問や、今後取り上げてほしいトピックがありましたら、
									<a
										href="https://twitter.com/melodyclue"
										className="text-zinc-700 hover:text-zinc-900 underline mx-1"
									>
										Twitter
									</a>
									や
									<a
										href="mailto:melody.router@gmail.com"
										className="text-zinc-700 hover:text-zinc-900 underline mx-1"
									>
										メール
									</a>
									でお気軽にお知らせください。皆さんの声が次の記事づくりの大きなヒントになります。
								</p>
							</div>
						</footer>
					</div>
				</article>
			</div>
		</div>
	);
}
