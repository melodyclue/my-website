import { allProjects } from "content-collections";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export default function Projects() {
	const projects = allProjects.sort((a, b) => a.order - b.order);

	return (
		<div className="min-h-screen bg-background">
			<div className="mx-auto max-w-4xl px-6 py-8 md:py-16">
				<Breadcrumb items={[{ label: "Home", href: "/" }]} />

				<header className="mb-12">
					<h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">プロジェクト実績</h1>
					<p className="text-lg text-zinc-600 leading-relaxed">
						これまでに手がけた主なプロジェクトの詳細です。
					</p>
				</header>

				<div className="space-y-8">
					{projects.map((project) => (
						<article key={project.slug} className="bg-white/60 backdrop-blur-sm border border-zinc-200/60 rounded-2xl p-8 hover:bg-white/80 hover:border-zinc-300/80 hover:-translate-y-1 transition-all duration-300">
							<header className="space-y-4 mb-6">
								<h2 className="text-xl md:text-2xl font-bold text-foreground">
									{project.title}
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-zinc-600">
									<div className="flex items-center gap-2">
										<span className="font-medium">期間:</span>
										<span>{project.period}</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="font-medium">役割:</span>
										<span>{project.role}</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="font-medium">チーム:</span>
										<span>{project.team}</span>
									</div>
								</div>
							</header>

							<p className="text-zinc-700 leading-relaxed mb-6">
								{project.description}
							</p>

							<section className="space-y-4 mb-6">
								<h3 className="text-base font-semibold text-foreground">主な業務内容</h3>
								<ul className="space-y-2 text-sm text-zinc-700">
									{project.tasks.map((task) => (
										<li key={task} className="flex items-start gap-2">
											<span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-2 flex-shrink-0"></span>
											{task}
										</li>
									))}
								</ul>
							</section>

							{project.achievements.length > 0 && (
								<section className="space-y-4 mb-6">
									<h3 className="text-base font-semibold text-foreground">貢献・成果</h3>
									<ul className="space-y-2 text-sm text-zinc-700">
										{project.achievements.map((achievement) => (
											<li key={achievement} className="flex items-start gap-2">
												<span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-2 flex-shrink-0"></span>
												{achievement}
											</li>
										))}
									</ul>
								</section>
							)}

							<section className="space-y-3 mb-4">
								<h4 className="text-sm font-medium text-foreground">使用技術</h4>
								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech) => (
										<span key={tech} className="px-3 py-1 bg-zinc-50 text-zinc-700 rounded-full text-xs font-medium border border-zinc-200/60">
											{tech}
										</span>
									))}
								</div>
							</section>

							<p className="text-xs text-zinc-500 font-mono bg-zinc-50 px-3 py-2 rounded-lg">
								{project.phases}
							</p>
						</article>
					))}
				</div>

				<div className="mt-16 text-center">
					<Link
						href="/"
						className="text-zinc-600 hover:text-zinc-900 font-medium hover:underline transition-colors"
					>
						← ホームに戻る
					</Link>
				</div>
			</div>
		</div>
	);
}
