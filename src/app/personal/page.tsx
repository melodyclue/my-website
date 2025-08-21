export default function Personal() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold mb-4 text-black">個人開発</h1>
          <p className="text-gray-600">個人で開発したWebアプリケーションやツールです。</p>
        </header>

        {/* Personal Projects */}
        <div className="space-y-12">
          <div className="pb-8 border-b border-gray-100">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-black">Task Timer</h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              シンプルなタスク管理とポモドーロタイマーを組み合わせたWebアプリ。
              集中して作業するためのミニマルなインターフェースで、タスクの完了時間を計測・記録できます。
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3 text-black">主な機能</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 25分の集中タイマー（ポモドーロ手法）</li>
                <li>• タスク別の作業時間記録</li>
                <li>• 日・週・月単位での統計表示</li>
                <li>• ローカルストレージによるデータ保存</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">React</span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">TypeScript</span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">Vite</span>
            </div>
            <p className="text-sm text-gray-500 font-mono">デモ: timer.melody.dev</p>
          </div>

          <div className="pb-8 border-b border-gray-100">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-black">Color Palette Generator</h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              デザインワークで使用するカラーパレット生成ツール。
              ベースカラーから調和の取れた色彩を自動生成し、CSSやTailwindの形式でエクスポートできます。
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3 text-black">主な機能</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• HSLベースの調和色生成</li>
                <li>• CSS変数・Tailwind形式でのエクスポート</li>
                <li>• アクセシビリティチェック（WCAG準拠）</li>
                <li>• パレット履歴の保存機能</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">Next.js</span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">TypeScript</span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">Canvas API</span>
            </div>
            <p className="text-sm text-gray-500 font-mono">デモ: colors.melody.dev</p>
          </div>

          <div className="pb-8 border-b border-gray-100">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-black">Markdown Note App</h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              リアルタイムプレビュー付きのMarkdownエディター。
              技術メモや記事の執筆に特化した機能を持ち、GitHubとの連携でファイル同期も可能です。
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3 text-black">主な機能</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• リアルタイムMarkdownプレビュー</li>
                <li>• コードハイライト機能</li>
                <li>• ファイルツリー形式での整理</li>
                <li>• GitHub Gistとの同期機能</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">Vue.js</span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">TypeScript</span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">GitHub API</span>
            </div>
            <p className="text-sm text-gray-500 font-mono">デモ: notes.melody.dev</p>
          </div>

          <div className="pb-8">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-black">Weather Dashboard</h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              複数地点の天気情報を一覧表示するダッシュボードアプリ。
              OpenWeatherMap APIを使用し、美しいグラデーションで天候を視覚的に表現しています。
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3 text-black">主な機能</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 複数地点の天気情報表示</li>
                <li>• 5日間の天気予報</li>
                <li>• 天候に応じた背景グラデーション</li>
                <li>• 位置情報による自動取得</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">React</span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">OpenWeatherMap API</span>
              <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">CSS Animations</span>
            </div>
            <p className="text-sm text-gray-500 font-mono">デモ: weather.melody.dev</p>
          </div>
        </div>

        {/* GitHub Link */}
        <div className="mt-12 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-700 mb-3">
            その他の個人プロジェクトはGitHubで公開しています。
          </p>
          <a
            href="https://github.com/melodyclue"
            className="inline-block text-gray-600 hover:text-gray-900 transition-colors font-medium underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHubを見る →
          </a>
        </div>

        {/* Back to Home */}
        <div className="mt-16 text-center">
          <a
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium underline"
          >
            ← ホームに戻る
          </a>
        </div>
      </div>
    </div>
  );
}