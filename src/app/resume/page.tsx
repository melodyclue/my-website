import { Download, Mail, Phone } from "lucide-react";

export default function ResumePage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 py-8">
			<div className="max-w-4xl mx-auto px-6">
				{/* Header */}
				<header className="mb-8 p-8 bg-white rounded-2xl shadow-sm border border-zinc-200/50">
					<div className="flex justify-between items-start mb-6">
						<div>
							<h1 className="text-3xl font-bold text-zinc-900 mb-2">職務経歴書</h1>
							<p className="text-zinc-600">2025年9月22日</p>
						</div>
						<button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors">
							<Download size={16} />
							PDF出力
						</button>
					</div>

					<div className="border-t pt-6">
						<h2 className="text-2xl font-bold text-zinc-900 mb-4">山下 玲央</h2>
						<div className="flex gap-6 text-sm text-zinc-600">
							<div className="flex items-center gap-2">
								<Mail size={16} />
								melody.router@gmail.com
							</div>
						</div>
					</div>
				</header>

				{/* Summary */}
				<section className="mb-8 p-8 bg-white rounded-2xl shadow-sm border border-zinc-200/50">
					<h2 className="text-xl font-bold text-zinc-900 mb-4 border-b border-zinc-200 pb-2">経歴要約</h2>
					<p className="text-zinc-700 leading-relaxed">
						2020年12月、アダプター株式会社にアルバイトとして入社。試用期間を経て2021年上半期より正社員として勤務しています。入社当初からWordPressやNext.jsを用いたWeb制作案件と自社サービス開発を並行して担当し、フロントエンドからバックエンドまで幅広く経験を積みました。近年は自社サービスの保守運用に加え、新規事業の立ち上げにも参画しています。
					</p>
				</section>

				{/* Skills & Expertise */}
				<section className="mb-8 p-8 bg-white rounded-2xl shadow-sm border border-zinc-200/50">
					<h2 className="text-xl font-bold text-zinc-900 mb-4 border-b border-zinc-200 pb-2">得意とする分野・スキル</h2>
					<ul className="space-y-2 text-zinc-700">
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
							StripeやSquareを用いた決済システムの構築
						</li>
						<li className="flex items-start gap-3">
							<span className="w-2 h-2 bg-zinc-400 rounded-full mt-2 flex-shrink-0"></span>
							短期間でのMVP開発とプロトタイピング
						</li>
					</ul>
				</section>

				{/* Technical Skills */}
				<section className="mb-8 p-8 bg-white rounded-2xl shadow-sm border border-zinc-200/50">
					<h2 className="text-xl font-bold text-zinc-900 mb-4 border-b border-zinc-200 pb-2">テクニカルスキル</h2>
					<div className="grid md:grid-cols-3 gap-4">
						<div className="p-4 bg-blue-50 rounded-lg">
							<h3 className="font-semibold text-blue-900 mb-2">TypeScript (React)</h3>
							<p className="text-sm text-blue-700">約4年</p>
						</div>
						<div className="p-4 bg-purple-50 rounded-lg">
							<h3 className="font-semibold text-purple-900 mb-2">PHP (WordPress)</h3>
							<p className="text-sm text-purple-700">約4年</p>
						</div>
						<div className="p-4 bg-green-50 rounded-lg">
							<h3 className="font-semibold text-green-900 mb-2">Next.js</h3>
							<p className="text-sm text-green-700">約4年</p>
						</div>
					</div>
				</section>

				{/* Work Experience */}
				<section className="mb-8 p-8 bg-white rounded-2xl shadow-sm border border-zinc-200/50">
					<h2 className="text-xl font-bold text-zinc-900 mb-6 border-b border-zinc-200 pb-2">職務内容</h2>

					<div className="mb-8">
						<div className="mb-4">
							<h3 className="text-lg font-bold text-zinc-900">アダプター株式会社</h3>
							<p className="text-zinc-600 text-sm">2020年12月～現在</p>
							<p className="text-zinc-500 text-sm">資本金100万円　従業員数5名　業種：Web制作</p>
						</div>

						{/* Project 1 */}
						<div className="mb-8 pl-4 border-l-2 border-blue-200">
							<h4 className="font-bold text-zinc-900 mb-2">◯ BtoB向けWebサービスの新規開発</h4>
							<p className="text-zinc-700 mb-4 text-sm">
								Webサイト運用に伴う保守・更新作業を、自社のエンジニアがワンストップで提供するサービスの開発・保守
							</p>

							<div className="grid md:grid-cols-2 gap-4 mb-4">
								<div>
									<h5 className="font-semibold text-zinc-800 mb-2">期間</h5>
									<p className="text-sm text-zinc-700">2021年1月 ～ 現在</p>
								</div>
								<div>
									<h5 className="font-semibold text-zinc-800 mb-2">担当フェーズ</h5>
									<p className="text-sm text-zinc-700">要件定義・基本設計・詳細設計・実装・テスト・運用保守</p>
								</div>
							</div>

							<div className="mb-4">
								<h5 className="font-semibold text-zinc-800 mb-2">開発環境</h5>
								<div className="flex flex-wrap gap-2">
									{["Next.js", "TypeScript", "Vercel", "Turborepo", "PlanetScale(MySQL)", "tRPC", "Drizzle ORM", "Stripe"].map((tech) => (
										<span key={tech} className="px-2 py-1 bg-zinc-100 text-zinc-700 rounded text-xs">
											{tech}
										</span>
									))}
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-4 mb-4">
								<div>
									<h5 className="font-semibold text-zinc-800 mb-2">メンバー数</h5>
									<p className="text-sm text-zinc-700">4名</p>
								</div>
								<div>
									<h5 className="font-semibold text-zinc-800 mb-2">役割</h5>
									<p className="text-sm text-zinc-700">開発・保守リーダー</p>
								</div>
							</div>

							<div className="mb-4">
								<h5 className="font-semibold text-zinc-800 mb-2">業務内容</h5>
								<ul className="text-sm text-zinc-700 space-y-1">
									<li>• システム全体のアーキテクチャ設計および技術選定</li>
									<li>• 新規・追加機能の企画、開発、運用保守</li>
									<li>• フロントエンドおよびバックエンド機能の実装（ファイルアップロード、型安全なAPI構築など）</li>
									<li>• 管理画面と業務システムの実装</li>
									<li>• デプロイ環境の整備</li>
									<li>• 外部サービス連携によるリアルタイム通信（Ably）や決済機能（Stripe）の実装</li>
								</ul>
							</div>

							<div className="bg-blue-50 p-4 rounded-lg">
								<h5 className="font-semibold text-blue-900 mb-2">貢献内容や取り組み</h5>
								<p className="text-sm text-blue-800 mb-2 font-medium">レポート機能による工数削減を実現。</p>
								<p className="text-sm text-blue-700">
									従来はスプレッドシートで手動管理・提出していた作業時間を、システム化された作業時間トラッキングとレポート機能で自動化。
									各担当者の作業時間をPDF化し、毎月1日に自動メールで顧客に提出可能な仕組みを構築することで、報告作業の工数をほぼゼロに削減。
								</p>
							</div>
						</div>

						{/* Project 2 */}
						<div className="mb-8 pl-4 border-l-2 border-green-200">
							<h4 className="font-bold text-zinc-900 mb-2">◯ ECサイト向けWeb注文システムの保守・追加機能開発</h4>

							<div className="grid md:grid-cols-2 gap-4 mb-4">
								<div>
									<h5 className="font-semibold text-zinc-800 mb-2">期間</h5>
									<p className="text-sm text-zinc-700">2021年9月 ～ 現在</p>
								</div>
								<div>
									<h5 className="font-semibold text-zinc-800 mb-2">担当フェーズ</h5>
									<p className="text-sm text-zinc-700">要件定義・基本設計・詳細設計・実装・運用保守</p>
								</div>
							</div>

							<div className="mb-4">
								<h5 className="font-semibold text-zinc-800 mb-2">開発環境</h5>
								<div className="flex flex-wrap gap-2">
									{["React.js", "Vue.js", "PHP", "Square (決済)", "WordPress", "Sentry", "Webpack"].map((tech) => (
										<span key={tech} className="px-2 py-1 bg-zinc-100 text-zinc-700 rounded text-xs">
											{tech}
										</span>
									))}
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-4 mb-4">
								<div>
									<h5 className="font-semibold text-zinc-800 mb-2">メンバー数</h5>
									<p className="text-sm text-zinc-700">4名</p>
								</div>
								<div>
									<h5 className="font-semibold text-zinc-800 mb-2">役割</h5>
									<p className="text-sm text-zinc-700">開発・保守リーダー</p>
								</div>
							</div>

							<div className="mb-4">
								<h5 className="font-semibold text-zinc-800 mb-2">業務内容</h5>
								<ul className="text-sm text-zinc-700 space-y-1">
									<li>• Square API・WordPress REST APIによる注文履歴・住所・決済情報のシステム実装、画面開発</li>
									<li>• ポイントシステムの実装</li>
									<li>• TCPDFを用いた帳票のPDF出力の実装</li>
									<li>• Slack上での顧客折衝。特に追加機能要望やエラー報告に対して、工数見積もりや作業進捗の共有など。</li>
								</ul>
							</div>

							<div className="bg-green-50 p-4 rounded-lg">
								<h5 className="font-semibold text-green-900 mb-2">貢献内容や取り組み</h5>
								<ul className="text-sm text-green-700 space-y-2">
									<li>• 従来、会員登録不要で手軽だったが、リピーターが毎回入力していたクレジットカードやお届け先情報の手間を削減するため、会員機能を導入。</li>
									<li>• 注文プロセスの効率化：注文完了までの平均時間を大幅に削減。</li>
									<li>• 帳票業務の自動化を行い、管理画面から領収書や請求書をPDFとしてダウンロード可能にし、帳票作成業務を完全に自動化。</li>
								</ul>
							</div>
						</div>

						{/* Project 3 */}
						<div className="mb-8 pl-4 border-l-2 border-purple-200">
							<h4 className="font-bold text-zinc-900 mb-2">◯ 自社ウェブサイトおよびLPのリプレイス・保守</h4>

							<div className="grid md:grid-cols-2 gap-4 mb-4">
								<div>
									<h5 className="font-semibold text-zinc-800 mb-2">期間</h5>
									<p className="text-sm text-zinc-700">2021年4月 ～ 現在</p>
								</div>
								<div>
									<h5 className="font-semibold text-zinc-800 mb-2">担当フェーズ</h5>
									<p className="text-sm text-zinc-700">要件定義・基本設計・詳細設計・実装・運用保守</p>
								</div>
							</div>

							<div className="mb-4">
								<h5 className="font-semibold text-zinc-800 mb-2">開発環境</h5>
								<div className="flex flex-wrap gap-2">
									{["Next.js", "GraphQL", "Vercel", "WordPress"].map((tech) => (
										<span key={tech} className="px-2 py-1 bg-zinc-100 text-zinc-700 rounded text-xs">
											{tech}
										</span>
									))}
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-4 mb-4">
								<div>
									<h5 className="font-semibold text-zinc-800 mb-2">メンバー数</h5>
									<p className="text-sm text-zinc-700">4名</p>
								</div>
								<div>
									<h5 className="font-semibold text-zinc-800 mb-2">役割</h5>
									<p className="text-sm text-zinc-700">開発・保守リーダー</p>
								</div>
							</div>

							<div className="mb-4">
								<h5 className="font-semibold text-zinc-800 mb-2">業務内容</h5>
								<ul className="text-sm text-zinc-700 space-y-1">
									<li>• 従来システムからNext.js + ヘッドレスCMS構成への移行設計</li>
									<li>• WordPressのGraphQL APIを活用したコンテンツ配信システム構築</li>
									<li>• Next.jsによるSEO最適化とモダンUI実装</li>
									<li>• 見積もりシミュレーション機能の開発</li>
								</ul>
							</div>

							<div className="bg-purple-50 p-4 rounded-lg">
								<h5 className="font-semibold text-purple-900 mb-2">貢献内容や取り組み</h5>
								<ul className="text-sm text-purple-700 space-y-2">
									<li>• 従来のFTPによる手動更新作業から脱却し、Git管理によるデプロイ自動化を導入。</li>
									<li>• 見積もりシミュレーション機能により、顧客が事前に概算価格を確認可能になったことで、具体的な予算感を持った質の高いリードの増加につながった。</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Qualifications */}
				<section className="mb-8 p-8 bg-white rounded-2xl shadow-sm border border-zinc-200/50">
					<h2 className="text-xl font-bold text-zinc-900 mb-4 border-b border-zinc-200 pb-2">資格・免許</h2>
					<ul className="space-y-2 text-zinc-700">
						<li className="flex items-start gap-3">
							<span className="w-2 h-2 bg-zinc-400 rounded-full mt-2 flex-shrink-0"></span>
							2017年5月 普通自動車第一種運転免許 取得
						</li>
						<li className="flex items-start gap-3">
							<span className="w-2 h-2 bg-zinc-400 rounded-full mt-2 flex-shrink-0"></span>
							2018年12月 TOEIC Listening & Reading Test 740点 取得
						</li>
					</ul>
				</section>

				{/* Self PR */}
				<section className="mb-8 p-8 bg-white rounded-2xl shadow-sm border border-zinc-200/50">
					<h2 className="text-xl font-bold text-zinc-900 mb-6 border-b border-zinc-200 pb-2">自己PR</h2>

					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-bold text-zinc-900 mb-3 text-blue-700">要望を形にする実装力</h3>
							<p className="text-zinc-700 leading-relaxed text-sm">
								「こういうことがしたい」という抽象的な要望から、技術選定・アーキテクチャ設計を行い、具体的なシステムとして実装することが得意です。BtoB向けWebサービスでは「毎月の作業報告を楽にしたい」という要望から、作業時間トラッキング機能とPDF自動生成・配信機能を設計・実装し、手動作業をほぼゼロに削減しました。ECサイトでは「リピーターの入力手間を減らしたい」という要望に対し、会員機能・住所登録・決済情報保存機能を組み合わせることで注文プロセスの平均時間を大幅に削減。技術的制約や既存システムとの整合性を考慮しながら、ビジネス要求を最適な形でシステムに落とし込む力を身につけてきました。
							</p>
						</div>

						<div>
							<h3 className="text-lg font-bold text-zinc-900 mb-3 text-green-700">自走しながら開発できるキャッチアップ力</h3>
							<p className="text-zinc-700 leading-relaxed text-sm">
								新しい技術を学んだりエラーに直面した時には、ドキュメントを読んだり、DiscordやSlackのコミュニティで質問することで解決しています。得た知識を実際に手を動かして試し、常に最適なコーディングを心がけています。例えば、Stripeやテーブルの設計など知見の少ない技術については、コミュニティ等を活用して積極的に質問・情報収集を行い、短期間で必要な機能を実装できました。こうした積み重ねにより、技術のキャッチアップを素早く行い、限られたリソースの中でもほぼ1人でフロント・バックエンド両方の開発を進める力を身につけてきました。
							</p>
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className="text-center py-8">
					<p className="text-zinc-500">以上</p>
				</footer>
			</div>
		</div>
	);
}