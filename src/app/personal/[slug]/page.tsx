import { MDXContent } from "@content-collections/mdx/react";
import { allPersonalProjects } from "content-collections";
import parse from "html-react-parser";
import { ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Callout from "@/components/Callout";

interface PersonalProjectPageProps {
	params: {
		slug: string;
	};
}

export async function generateStaticParams() {
	return allPersonalProjects.map((project) => ({
		slug: project.slug,
	}));
}

export default function PersonalProjectPage({
	params,
}: PersonalProjectPageProps) {
	const project = allPersonalProjects.find((p) => p.slug === params.slug);

	if (!project) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-background">
			<div className="mx-auto max-w-4xl px-6 py-8 md:py-16">
				<Breadcrumb
					items={[
						{ label: "Home", href: "/" },
						{ label: "個人開発", href: "/personal" },
					]}
				/>

				<header className="mb-12">
					<div className="flex flex-wrap items-center gap-3 mb-6 text-xs text-zinc-500">
						<span className="px-3 py-1 bg-zinc-50 rounded-full border border-zinc-200/60">
							{project.status}
						</span>
						{project.tech.map((tech) => (
							<span
								key={tech}
								className="px-3 py-1 bg-zinc-50 rounded-full border border-zinc-200/60"
							>
								{tech}
							</span>
						))}
					</div>

					<div className="flex flex-col gap-4 mb-8">
						<h1 className="text-3xl md:text-4xl font-bold text-foreground">
							{project.title}
						</h1>
						<p className="text-lg text-zinc-600 leading-relaxed">
							{project.description}
						</p>
					</div>

					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors rounded-xl font-medium"
					>
						<ExternalLink size={18} />
						サイトを見る
					</a>
				</header>

				<article className="prose prose-zinc max-w-none">
					<MDXContent
						code={project.mdx}
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
				</article>

				<footer className="mt-16 pt-8 border-t border-zinc-200/80">
					<div className="flex items-center justify-between text-sm text-zinc-500">
						<div>
							公開日:{" "}
							{new Date(project.publishedAt).toLocaleDateString("ja-JP")}
						</div>
						<div>
							更新日: {new Date(project.updatedAt).toLocaleDateString("ja-JP")}
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
