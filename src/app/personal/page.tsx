import { ArrowUpRight, ExternalLink, ChevronRight } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { allPersonalProjects } from "content-collections";

export default function PersonalProjects() {
	// content-collectionからデータを取得
	const personalProjects = allPersonalProjects.sort((a, b) => {
		// featuredを優先し、その後publishedAtでソート
		if (a.featured && !b.featured) return -1;
		if (!a.featured && b.featured) return 1;
		return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
	});

	return (
		<div className="min-h-screen bg-background">
			<div className="mx-auto max-w-4xl px-6 py-8 md:py-16">
				<Breadcrumb items={[{ label: "Home", href: "/" }]} />
				<header className="mb-8 flex flex-col gap-6">
					<div className="flex items-center gap-3">
						<h1 className="text-2xl md:text-3xl font-bold text-foreground">
							個人開発
						</h1>
					</div>
				</header>

				<section className="space-y-6">
					{personalProjects.map((project) => (
						<article
							key={project.title}
							className="bg-white/60 backdrop-blur-sm border border-zinc-200/60 rounded-2xl p-8 hover:bg-white/80 hover:border-zinc-300/80 hover:-translate-y-1 transition-all duration-300"
						>
							<div className="flex flex-col gap-4">
								<div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
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
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="group inline-flex items-center gap-2 text-xl font-bold text-black hover:text-zinc-700 transition-colors underline decoration-2 underline-offset-4 hover:decoration-zinc-400"
								>
									{project.title}
									<ExternalLink
										size={18}
										className="text-zinc-500 group-hover:text-zinc-700 transition-colors"
									/>
								</a>
								<p className="text-sm leading-relaxed text-zinc-600">
									{project.description}
								</p>
								<div className="flex items-center justify-between pt-4">
									<Link
										href={`/personal/${project.slug}`}
										className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
									>
										<ChevronRight
											size={16}
											className="group-hover:translate-x-1 transition-transform"
										/>
										もっと読む
									</Link>
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
									>
										<ExternalLink size={16} />
										サイトを見る
										<ArrowUpRight className="size-4 text-zinc-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
									</a>
								</div>
							</div>
						</article>
					))}
				</section>
			</div>
		</div>
	);
}