import { ArrowUpRight, ExternalLink } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const personalProjects = [
	{
		title: "Notewind",
		description:
			"Notewindは、開発者やスタートアップが製品の変更履歴やアップデート情報を簡単に公開できるプロダクト更新共有ツールです",
		url: "https://notewind.run",
		status: "ベータ版",
		tech: [
			"Next.js",
			"TypeScript",
			"Coolify",
			"Cloudflare R2",
			"oRPC",
			"Tailwind CSS",
			"shadcn/ui",
		],
	},
];

export default function PersonalProjects() {
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
						<a
							key={project.title}
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group block"
						>
							<article className="bg-white/60 backdrop-blur-sm border border-zinc-200/60 rounded-2xl p-8 hover:bg-white/80 hover:border-zinc-300/80 hover:-translate-y-1 transition-all duration-300">
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
									<h2 className="text-xl font-bold text-black group-hover:text-zinc-700 transition-colors">
										{project.title}
									</h2>
									<p className="text-sm leading-relaxed text-zinc-600">
										{project.description}
									</p>
									<div className="flex items-center justify-between pt-4">
										<div className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600">
											<ExternalLink size={16} />
											サイトを見る
										</div>
										<ArrowUpRight className="size-5 text-zinc-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
									</div>
								</div>
							</article>
						</a>
					))}
				</section>
			</div>
		</div>
	);
}
