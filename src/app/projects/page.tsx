import Link from "next/link";

export default function Projects() {
	return (
		<div className="min-h-screen bg-white text-gray-900">
			<div className="max-w-3xl mx-auto px-6 py-20">
				{/* Header */}
				<header className="mb-12">
					<h1 className="text-3xl font-bold mb-4 text-black">Projects</h1>
					<p className="text-gray-600">
						これまでに手がけた主なプロジェクトの詳細です。
					</p>
				</header>

				{/* Projects */}
				<div className="space-y-12">
					{/* ToB Webサービス */}
					<div className="pb-8 border-b border-gray-100">
						<div className="mb-4">
							<h2 className="text-xl font-semibold text-black">
								ToB向けWebサービス開発
							</h2>
						</div>
						<p className="text-gray-600 mb-6 leading-relaxed">
							Webサイト運用保守をワンストップで提供するSaaSの新規開発を担当。システム全体のアーキテクチャ設計から実装まで一貫して対応し、
							作業時間トラッキングとレポート機能の自動化により、クライアントの報告業務工数をほぼ0まで削減しました。
						</p>
						<div className="mb-6">
							<h3 className="text-lg font-medium mb-3 text-black">主な機能</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• 作業時間の自動トラッキング機能</li>
								<li>• PDFレポートの自動生成・配信</li>
								<li>• Stripeを使った決済システム</li>
								<li>• Ablyを使ったリアルタイム通信</li>
								<li>• 管理者向けダッシュボード</li>
							</ul>
						</div>
						<div className="flex flex-wrap gap-2 mb-4">
							<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm font-medium">
								Next.js
							</span>
							<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm font-medium">
								TypeScript
							</span>
							<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm font-medium">
								Vercel
							</span>
							<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm font-medium">
								PlanetScale
							</span>
							<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm font-medium">
								Stripe
							</span>
							<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm font-medium">
								Ably
							</span>
						</div>
						<p className="text-sm text-gray-500 font-mono">
							技術選定・設計・実装
						</p>
					</div>

					{/* ECサイト注文システム */}
					<div className="pb-8 border-b border-gray-100">
						<div className="mb-4">
							<h2 className="text-xl font-semibold text-black">
								ECサイト注文システム改修
							</h2>
						</div>
						<p className="text-gray-600 mb-6 leading-relaxed">
							ECサイトの会員機能追加開発を担当。ユーザビリティを重視した設計により注文完了時間を4分から2分に短縮し、
							帳票業務の完全自動化によってクライアントの運用負荷を大幅に軽減しました。
						</p>
						<div className="mb-6">
							<h3 className="text-lg font-medium mb-3 text-black">改善成果</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• 注文完了時間: 4分 → 2分に短縮</li>
								<li>• ユーザー登録時間: 約1分で完了</li>
								<li>• 帳票業務の完全自動化</li>
								<li>• リピート率の向上</li>
							</ul>
						</div>
						<div className="flex flex-wrap gap-2 mb-4">
							<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm font-medium">
								Vue.js
							</span>
							<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm font-medium">
								Square
							</span>
							<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm font-medium">
								WordPress
							</span>
						</div>
						<p className="text-sm text-gray-500 font-mono">
							要件定義・設計・実装
						</p>
					</div>

					{/* 予約システムリプレイス */}
					<div className="pb-8">
						<div className="mb-4">
							<h2 className="text-xl font-semibold text-black">
								飲食予約システムリプレイス
							</h2>
						</div>
						<p className="text-gray-600 mb-6 leading-relaxed">
							レガシーな飲食店予約システムのモダン化を担当。EJSからNuxt.jsへの全面移行とNetlifyでのホスティング環境構築により、
							バグの頻発と複雑な状態管理の課題を解決し、安定したCI/CD環境を実現しました。
						</p>
						<div className="mb-6">
							<h3 className="text-lg font-medium mb-3 text-black">
								技術的な改善
							</h3>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• EJS → Nuxt.jsへの全面移行</li>
								<li>• FTP → GitHubによる自動デプロイ</li>
								<li>• バグの大幅削減と安定性向上</li>
								<li>• 保守性の大幅改善</li>
							</ul>
						</div>
						<div className="flex flex-wrap gap-2 mb-4">
							<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm font-medium">
								Nuxt.js
							</span>
							<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm font-medium">
								JavaScript
							</span>
							<span className="px-3 py-1 bg-gray-50 text-zinc-700 rounded-full text-sm font-medium">
								Netlify
							</span>
						</div>
						<p className="text-sm text-gray-500 font-mono">
							リプレイス・インフラ構築
						</p>
					</div>
				</div>

				{/* Back to Home */}
				<div className="mt-16 text-center">
					<Link
						href="/"
						className="text-gray-600 hover:text-gray-900 transition-colors font-medium underline"
					>
						← ホームに戻る
					</Link>
				</div>
			</div>
		</div>
	);
}
