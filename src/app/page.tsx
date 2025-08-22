import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-20">
          <h1 className="text-4xl font-bold mb-3 text-black">
            Reo Yamashita
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Freelance Frontend Developer
          </p>
          <div className="text-gray-700 leading-relaxed mb-10 space-y-4">
            <p>フリーランスのフロントエンドエンジニアとして、TypeScriptを使った中規模アプリケーションの開発を承っています。</p>
            <ul className="space-y-2 text-sm">
              <li>• レガシー環境からモダンなフレームワークへのリプレイス</li>
              <li>• 型安全なフルスタックでのサービス開発</li>
              <li>• Stripe や Square を用いた決済システムの構築</li>
              <li>• 短期間でのMVP開発とプロトタイピング</li>
            </ul>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700 mb-3">
                ご相談は無料です。お気軽にお問い合わせください。
              </p>
              <a
                href="https://cal.com/melodylcue/meeting"
                className="inline-block px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                無料相談を予約する
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <a
              href="https://github.com/melodyclue"
              className="px-3 py-1 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-800 transition-colors rounded-md font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/melodyclue"
              className="px-3 py-1 bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800 transition-colors rounded-md font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://zenn.dev/melodyrouter"
              className="px-3 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 transition-colors rounded-md font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zenn
            </a>
            <a
              href="mailto:hello@melody.dev"
              className="px-3 py-1 bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 transition-colors rounded-md font-medium"
            >
              Email
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
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-black group-hover:text-gray-700 transition-colors">
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
            <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">Next.js</span>
            <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">TypeScript</span>
            <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">WordPress</span>
            <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">Shopify</span>
            <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">Stripe</span>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2025 Reo Yamashita
          </p>
        </footer>
      </div>
    </div>
  );
}
