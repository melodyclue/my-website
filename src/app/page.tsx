import { Book, FileText, FolderOpen, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../config";
import { ContactButton } from "./ContactButton";

export default function Home() {
	return (
		<div className="min-h-screen">
			<div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
				{/* Header */}
				<header className="mb-24 md:mb-32">
					<div className="flex items-center gap-6 mb-8">
						<div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white">
							<Image
								src="/reo.png"
								alt="Reo Yamashita"
								width={100}
								height={100}
								className="object-cover"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h1 className="text-2xl md:text-3xl font-bold text-foreground">
								Reo Yamashita
							</h1>
							<p className="text-sm text-foreground font-medium tracking-wide">
								Frontend Developer
							</p>
						</div>
					</div>
					<div className="text-zinc-700 leading-relaxed mb-12 space-y-6">
						<p className="text-base text-zinc-800 leading-relaxed">
							フロントエンドエンジニアとして、TypeScriptを使った中規模アプリケーションの開発を承っています。
						</p>
						<ul className="space-y-3 text-sm py-4 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-zinc-200/50">
							<li className="flex items-start gap-3">
								<span className="w-2 h-2 bg-zinc-400 rounded-full mt-2 flex-shrink-0"></span>
								レガシー環境からモダンなフレームワークへのリプレイス
							</li>
							<li className="flex items-start gap-3">
								<span className="w-2 h-2 bg-zinc-400 rounded-full mt-2 flex-shrink-0"></span>
								型安全なフルスタックでのサービス開発
							</li>
							<li className="flex items-start gap-3">
								<span className="w-2 h-2 bg-zinc-400 rounded-full mt-2 flex-shrink-0"></span>
								Stripe や Square を用いた決済システムの構築
							</li>
							<li className="flex items-start gap-3">
								<span className="w-2 h-2 bg-zinc-400 rounded-full mt-2 flex-shrink-0"></span>
								短期間でのMVP開発とプロトタイピング
							</li>
						</ul>
					</div>
					<div className="flex flex-wrap gap-3 md:gap-4">
						<a
							href="https://github.com/melodyclue"
							className="group flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm text-foreground hover:bg-slate-50 transition-all duration-200 rounded-xl border border-slate-200/60 font-medium hover:scale-105 text-sm"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src="/github.svg"
								alt="GitHub"
								width={18}
								height={18}
								className="group-hover:scale-110 transition-transform"
							/>
							GitHub
						</a>
						<a
							href="https://zenn.dev/melodyrouter"
							className="group flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900 transition-all duration-200 rounded-xl border border-emerald-200/60 font-medium hover:scale-105 text-sm"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Book
								size={18}
								className="group-hover:scale-110 transition-transform"
							/>
							Zenn
						</a>
						<a
							href="mailto:melody.router@gmail.com"
							className="group flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm text-amber-700 hover:bg-amber-50 hover:text-amber-900 transition-all duration-200 rounded-xl border border-amber-200/60 font-medium hover:scale-105 text-sm"
						>
							<Mail
								size={18}
								className="group-hover:scale-110 transition-transform"
							/>
							Email
						</a>
						<a
							href={siteConfig.pdf.skillSheet.path}
							className="group flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm text-indigo-700 hover:bg-indigo-50 hover:text-indigo-900 transition-all duration-200 rounded-xl border border-indigo-200/60 font-medium hover:scale-105 text-sm"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FileText
								size={18}
								className="group-hover:scale-110 transition-transform"
							/>
							技術経歴書
						</a>
					</div>
				</header>

				{/* Main Navigation */}
				<section className="mb-24">
					<h2 className="text-2xl font-bold mb-8 text-black">More</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<Link
							href="/projects"
							className="group block p-8 bg-white/60 backdrop-blur-sm border border-zinc-200/60 rounded-2xl hover:bg-white/80 hover:border-zinc-300/80 hover:-translate-y-1 transition-all duration-300"
						>
							<div className="mb-4 flex items-center gap-3">
								<div className="p-2 bg-zinc-100 rounded-lg group-hover:bg-zinc-200 transition-colors">
									<FolderOpen
										size={24}
										className="text-zinc-600 group-hover:text-zinc-700 transition-colors"
									/>
								</div>
								<h3 className="text-xl font-bold text-black group-hover:text-zinc-700 transition-colors">
									プロジェクト
								</h3>
							</div>
							<p className="text-sm text-foreground leading-relaxed mb-6">
								これまでに手がけたプロジェクトの詳細情報。技術選定から実装まで、具体的な成果と使用技術を紹介しています。
							</p>
							<div className="flex items-center justify-between">
								<div className="text-xs text-zinc-500 font-mono bg-zinc-100 px-3 py-1 rounded-full">
									3 projects
								</div>
								<div className="text-zinc-600 group-hover:translate-x-2 transition-transform duration-200">
									→
								</div>
							</div>
						</Link>

						<Link
							href="/personal"
							className="group block p-8 bg-white/60 backdrop-blur-sm border border-zinc-200/60 rounded-2xl hover:bg-white/80 hover:border-zinc-300/80 hover:-translate-y-1 transition-all duration-300"
						>
							<div className="mb-4 flex items-center gap-3">
								<div className="p-2 bg-zinc-100 rounded-lg group-hover:bg-zinc-200 transition-colors">
									<FolderOpen
										size={24}
										className="text-zinc-600 group-hover:text-zinc-700 transition-colors"
									/>
								</div>
								<h3 className="text-xl font-bold text-black group-hover:text-zinc-700 transition-colors">
									個人開発
								</h3>
							</div>
							<p className="text-sm text-foreground leading-relaxed mb-6">
								個人で開発したWebアプリケーションやツール。技術検証や新しいアイデアの実験的なプロジェクトを紹介しています。
							</p>
							<div className="flex items-center justify-between">
								<div className="text-xs text-zinc-500 font-mono bg-zinc-100 px-3 py-1 rounded-full">
									1 project
								</div>
								<div className="text-zinc-600 group-hover:translate-x-2 transition-transform duration-200">
									→
								</div>
							</div>
						</Link>
					</div>
				</section>

				{/* Skills */}
				<section className="mb-24">
					<h2 className="text-2xl font-bold mb-8 text-black">Skills</h2>
					<div className="flex flex-wrap gap-3">
						<span className="group px-3 py-1.5 bg-zinc-50 text-zinc-700 rounded-full text-sm font-medium border border-zinc-200/60 hover:scale-105 transition-all duration-200 cursor-default">
							React
						</span>
						<span className="group px-3 py-1.5 bg-zinc-50 text-zinc-700 rounded-full text-sm font-medium border border-zinc-200/60 hover:scale-105 transition-all duration-200 cursor-default">
							Next.js
						</span>
						<span className="group px-3 py-1.5 bg-zinc-50 text-zinc-700 rounded-full text-sm font-medium border border-zinc-200/60 hover:scale-105 transition-all duration-200 cursor-default">
							TypeScript
						</span>
						<span className="group px-3 py-1.5 bg-zinc-50 text-zinc-700 rounded-full text-sm font-medium border border-zinc-200/60 hover:scale-105 transition-all duration-200 cursor-default">
							JavaScript
						</span>
						<span className="group px-3 py-1.5 bg-zinc-50 text-zinc-700 rounded-full text-sm font-medium border border-zinc-200/60 hover:scale-105 transition-all duration-200 cursor-default">
							Tailwind CSS
						</span>
						<span className="group px-3 py-1.5 bg-zinc-50 text-zinc-700 rounded-full text-sm font-medium border border-zinc-200/60 hover:scale-105 transition-all duration-200 cursor-default">
							WordPress
						</span>
						<span className="group px-3 py-1.5 bg-zinc-50 text-zinc-700 rounded-full text-sm font-medium border border-zinc-200/60 hover:scale-105 transition-all duration-200 cursor-default">
							Shopify
						</span>
						<span className="group px-3 py-1.5 bg-zinc-50 text-zinc-700 rounded-full text-sm font-medium border border-zinc-200/60 hover:scale-105 transition-all duration-200 cursor-default">
							Stripe
						</span>
					</div>
				</section>
				{/*
				<div className="mt-8 p-6 bg-zinc-50 rounded-2xl border border-zinc-200/50">
					<p className="text-sm text-zinc-700 mb-4 font-medium">
						ご相談は無料です。お気軽にお問い合わせください。
					</p>
					<ContactButton />
				</div> */}

				{/* Footer */}
				<footer className="text-center pt-12 border-t border-zinc-200/80">
					<p className="text-foreground/50 font-medium">© 2025 Reo Yamashita</p>
				</footer>
			</div>
		</div>
	);
}
