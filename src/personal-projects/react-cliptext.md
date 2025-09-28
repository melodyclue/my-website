---
title: "react-cliptext"
slug: "react-cliptext"
description: "テキストをクリップボードにコピーするためのReactコンポーネントライブラリ。既存のライブラリreact-copy-to-clipboardがReact19に対応していなかったり、テストやバンドラーが古いものだったのでモダンに改良した"
url: "https://github.com/melodyclue/react-cliptext"
status: "公開中"
tech: ["React", "TypeScript", "Claude Code", "Biome", "tsdown"]
publishedAt: "2025-09-21"
updatedAt: "2025-09-29"
featured: false
---

## 概要

react-cliptextは、テキストをクリップボードにコピーするためのモダンなReactコンポーネントライブラリです。

## 開発の背景

既存の人気ライブラリ[`react-copy-to-clipboard`](https://github.com/nkbt/react-copy-to-clipboard)には以下の課題がありました：

- **React 19サポート不足**: 最新のReactバージョンに対応していない
- **古いビルド環境**: Webpackはバンドラーとしては古い
- **TypeScriptでない**
- **テスト環境の古さ**

これらの問題を解決するため、モダンな開発環境で一から作り直しました。

## 主な特徴

### ✨ モダンな開発環境
- **React 19対応**: 最新のReactに完全対応
- **TypeScript**: 完全な型安全性
- **tsdown**: 高速なビルドツール
- **Vitest / Testing Library**: モダンなテストランナー

### 🎯 シンプルなAPI
```tsx
import { CopyToClipboard } from 'react-cliptext';

<CopyToClipboard text="コピーしたいテキスト">
  <button>コピー</button>
</CopyToClipboard>
```

### 📦 軽量設計
- 依存関係を最小限に抑える
- バンドルサイズの最適化

作り始めた当初は、[tsup](https://tsup.egoist.dev/)を使っていたが、[tsdown](https://tsdown.dev/)に移行した。tsdownにしたことで、 バンドルsizeが23.2 kB → 13.0 kBになった。 (44%削減)


### 品質管理
- **Biome / lefthook**: コード品質の維持
- **TypeScript strict mode**: 厳格な型チェック
- **Claude Code**: AIによるコードレビューと修正
