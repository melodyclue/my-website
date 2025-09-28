---
title: "Notewind"
slug: "notewind"
description: "Notewindは、開発者やスタートアップが製品の変更履歴やアップデート情報を簡単に公開できるプロダクト更新共有ツールです"
url: "https://notewind.run"
status: "ベータ版"
tech: ["Next.js", "TypeScript", "Coolify", "Cloudflare R2", "oRPC", "Tailwind CSS", "shadcn/ui", "Better Auth",]
publishedAt: "2025-09-01"
updatedAt: "2025-09-29"
featured: true
---

### 概要

Notewindは、開発者やスタートアップが製品の変更履歴やアップデート情報を簡単に公開できるプロダクト更新共有ツールです。

### 主な機能

- **シンプルな更新投稿**: Markdown形式で簡単に更新情報を投稿
- **美しいデザイン**: モダンでクリーンなインターフェース
- **カスタムカテゴリ**: カテゴリをプロジェクトごとに自由に追加できる

### 技術スタック

- **フロントエンド**: Next.js + TypeScript
- **スタイリング**: Tailwind CSS + shadcn/ui
- **インフラ**: Coolify + Cloudflare(domain, Tunnel), Xserver VPS
- **認証**: Better Auth
- **データベース**: PostgreSQL via Coolify
- **ストレージ**: Cloudflare R2
- **API**: oRPC + Next.js API Routes

### 開発の背景

プロダクト開発においてユーザーへの更新情報の共有は重要ですが、既存のツールは複雑、オーバースペック、高価格です。
Notewindは、シンプルで使いやすく、かつ美しいデザインで更新情報を共有できるツールとして開発しました。

### 開発時の工夫

#### 実装面の工夫
更新の追加や編集で専用ページを作らず、一覧画面に直接フォームを置いたり、モーダル（Parallel Route + Intercept Route）で実現しました。これにより画面遷移の手間を減らし、ユーザー体験を向上させると同時に、実装するページ数を抑えてバグの発生源や保守コストを大幅に減らしています。

#### UI面の工夫と理由
UIでは余計な shadow や border、gradient を削ぎ落とし、シンプルで視認性の高いデザインを意識しました。装飾に頼らず、更新情報そのものを主役にすることで、ユーザーが「情報を素早く読む」本来の目的に集中できるようにしています。さらに shadcn/ui のテーマ生成を活用し、統一感のある配色と開発効率を両立しました。

### 今後の展望

- **通知機能**: メールやSlack連携
- **APIの提供**: APIを提供して外部ツールと連携できるようにする
- **カスタムドメイン**: カスタムドメインを使用して更新情報を共有できる

<Callout type="info">
**💡 Coolifyとは？**

 Coolifyは、オープンソースのセルフホスト可能なPaaSプラットフォームです。データベース、サービス（WordPress、Plausible Analytics、Ghostなど）、アプリケーション（Next.js、Nuxt.js、Remix、SvelteKitなど）を簡単にセルフホストできます。

 **主な特徴:**
 - **セルフホスト可能**: 静的サイト、API、バックエンド、データベースなど、すべての主要フレームワークをサポート
 - **柔軟なサーバー対応**: VPS、Raspberry Pi、EC2、ローカルマシンなど、SSH経由でどのサーバーでもデプロイ可能
 - **Git連携**: GitHub、GitLab、Bitbucket、Giteaなどとの統合によるプッシュデプロイ
 - **無料SSL証明書**: カスタムドメイン用のLet's Encrypt SSL証明書の自動設定・更新
 - **ベンダーロックインなし**: データと設定がユーザーのサーバーに保存され、完全な制御と移植性を提供
 - **自動データベースバックアップ**: S3互換ストレージへのバックアップとワンクリック復元
 - **CI/CD統合**: GitHub Actions、GitLab CI、Bitbucket Pipelinesなどとのwebhook連携
 - **強力なAPI**: デプロイの自動化、リソース管理、既存ツールとの統合が容易
 - **チーム機能**: プロジェクト共有、ロール制御、権限管理

 Notewindでは、XServer VPS上にCoolifyを構築し、GitHubからの自動デプロイとPostgreSQLデータベースの管理に使用しています。
 </Callout>

### 参考
- [Xserver VPS](https://vps.xserver.ne.jp/)
- [Coolify](https://coolify.io/docs/)
- [Cloudflare R2](https://developers.cloudflare.com/r2/)
- [oRPC](https://orpc.unnoq.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Better Auth](https://better-auth.com/)
- [Zenn Editor](https://github.com/zenn-dev/zenn-editor/tree/canary/packages)
