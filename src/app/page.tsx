import { Book, FileText, FolderOpen, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactButton } from "./ContactButton";

export default function Home() {
	return (
		<div className="min-h-screen bg-white text-gray-900">
			<div className="max-w-3xl mx-auto px-6 py-20">
				{/* Header */}
				<header className="mb-20">
					<div className="flex items-center gap-4 mb-6">
						<div className="w-20 h-20 rounded-full overflow-hidden">
							<Image
								src="/reo.png"
								alt="Reo Yamashita"
								width={100}
								height={100}
								className="object-cover"
							/>
						</div>
						<div className="flex flex-col gap-1">
							<h1 className="text-2xl font-bold text-black">Reo Yamashita</h1>
							<p className="text-sm text-gray-600">Frontend Developer</p>
						</div>
					</div>
					<div className="text-zinc-700 leading-relaxed mb-10 space-y-4">
						<p>
							フリーランスのフロントエンドエンジニアとして、TypeScriptを使った中規模アプリケーションの開発を承っています。
						</p>
						<ul className="space-y-2 text-sm py-3">
							<li>• レガシー環境からモダンなフレームワークへのリプレイス</li>
							<li>• 型安全なフルスタックでのサービス開発</li>
							<li>• Stripe や Square を用いた決済システムの構築</li>
							<li>• 短期間でのMVP開発とプロトタイピング</li>
						</ul>
						<div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
							<p className="text-sm text-zinc-700 mb-3">
								ご相談は無料です。お気軽にお問い合わせください。
							</p>
							<ContactButton />
						</div>
					</div>
					<div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
						<a
							href="https://github.com/melodyclue"
							className="flex items-center gap-2 px-4 py-1.5 md:px-3 md:py-1 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-800 transition-colors rounded-md font-medium"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src="/github.svg" alt="GitHub" width={16} height={16} />
							GitHub
						</a>
						<a
							href="https://twitter.com/melodyclue"
							className="flex items-center gap-2 px-4 py-1.5 md:px-3 md:py-1 bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800 transition-colors rounded-md font-medium"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src="/x.svg" alt="X" width={16} height={16} />
							Twitter
						</a>
						<a
							href="https://zenn.dev/melodyrouter"
							className="flex items-center gap-2 px-4 py-1.5 md:px-3 md:py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 transition-colors rounded-md font-medium"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Book size={16} />
							Zenn
						</a>
						<a
							href="mailto:hello@melody.dev"
							className="flex items-center gap-2 px-4 py-1.5 md:px-3 md:py-1 bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 transition-colors rounded-md font-medium"
						>
							<Mail size={16} />
							Email
						</a>
						<a
							href="/api/skill-sheet-pdf"
							className="flex items-center gap-2 px-4 py-1.5 md:px-3 md:py-1 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 transition-colors rounded-md font-medium"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FileText size={16} />
							技術経歴書
						</a>
					</div>
				</header>

				{/* Main Navigation */}
				<section className="mb-20">
					<h2 className="text-2xl font-bold mb-8 text-black">More</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<Link
							href="/projects"
							className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all group"
						>
							<div className="mb-3 flex items-center gap-2">
								<FolderOpen
									size={20}
									className="text-gray-600 group-hover:text-zinc-700 transition-colors"
								/>
								<h3 className="text-xl font-semibold text-black group-hover:text-zinc-700 transition-colors">
									プロジェクト
								</h3>
							</div>
							<p className="text-gray-600 text-sm leading-relaxed">
								これまでに手がけたプロジェクトの詳細情報。技術選定から実装まで、具体的な成果と使用技術を紹介しています。
							</p>
							<div className="mt-4 text-sm text-gray-500 font-mono">
								3 projects →
							</div>
						</Link>

						<div className="block p-6 border border-gray-200 rounded-lg opacity-50 cursor-not-allowed">
							<div className="mb-3">
								<h3 className="text-xl font-semibold text-gray-400">
									個人開発
								</h3>
							</div>
							<p className="text-gray-400 text-sm leading-relaxed">
								個人で開発したWebアプリケーションやツール。技術検証や新しいアイデアの実験的なプロジェクトを紹介しています。
							</p>
							<div className="mt-4 text-sm text-gray-400 font-mono">
								Coming soon...
							</div>
						</div>
					</div>
				</section>

				{/* Skills */}
				<section className="mb-20">
					<h2 className="text-2xl font-bold mb-8 text-black">Skills</h2>
					<div className="flex flex-wrap gap-2">
						<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm">
							React
						</span>
						<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm">
							Next.js
						</span>
						<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm">
							TypeScript
						</span>
						<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm">
							JavaScript
						</span>
						<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm">
							Tailwind CSS
						</span>
						<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm">
							WordPress
						</span>
						<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm">
							Shopify
						</span>
						<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm">
							Stripe
						</span>
					</div>
				</section>

				{/* Footer */}
				<footer className="text-center pt-8 border-t border-gray-200">
					<p className="text-sm text-gray-500">© 2025 Reo Yamashita</p>
				</footer>
			</div>
		</div>
	);
}
