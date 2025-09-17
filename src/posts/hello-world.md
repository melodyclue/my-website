---
title: "Hello world"
slug: "hello-world"
publishedAt: 2025-01-01
updatedAt: 2025-01-01
---

## 背景
とあるCloudflare Pagesプロジェクトを削除しようとしたところ、deploymentsが多すぎて削除できないというエラーが出ました。

どうやら、Cloudflare Pagesプロジェクトに100以上のdeploymentsが存在すると、ダッシュボードからプロジェクトを削除できないissueが存在するようです。

代わりに、公式提供のスクリプトを使用することがドキュメントに書かれています。
このスクリプトは本番稼働中のdeploymentは削除しないので、安全に実行できます。
https://developers.cloudflare.com/pages/platform/known-issues/#delete-a-project-with-a-high-number-of-deployments

## 手順
### スクリプトをダウンロード
まず、`delete-all-deployments.zip`をダウンロードします。
zipファイルを解凍し、`delete-all-deployments`配下にて`npm install`します。

https://pub-505c82ba1c844ba788b97b1ed9415e75.r2.dev/delete-all-deployments.zip

### 準備
次のステップへの準備として以下の３つが必要です。
#### Cloudflare API Token
1. Cloudflareダッシュボード右上のユーザーアイコンをクリック
2. プロフィールページの「API トークン」→「トークンを作成する」
3. 「Cloudflare Workers を編集する」テンプレートを選択
4. アカウントリソース・ゾーンリソースを指定
5. 「概要に進む」→「トークンを作成する」でトークン取得

#### Account ID
1. ダッシュボードのアカウントホーム
2. 3点ドットをクリック
3. 「アカウントIDをコピー」で取得
![](https://storage.googleapis.com/zenn-user-upload/7d3fc08ef0bf-20250915.png)

#### Project Name

削除対象のPagesプロジェクト名(名前)です。

### スクリプト実行
以下のコマンドを実行します
```sh:通常のpreview deploymentのみ削除
CF_API_TOKEN=<YOUR_CF_API_TOKEN> CF_ACCOUNT_ID=<ACCOUNT_ID> CF_PAGES_PROJECT_NAME=<PROJECT_NAME> npm start
```

```sh:エイリアスdeploymentも含めて削除
CF_API_TOKEN=<YOUR_CF_API_TOKEN> CF_ACCOUNT_ID=<ACCOUNT_ID> CF_PAGES_PROJECT_NAME=<PROJECT_NAME> CF_DELETE_ALIASED_DEPLOYMENTS=true npm start
```

実行されるとdeploymentsが一つずつ削除されていきます。

これで正常にプロジェクトを削除することができました！


## 参考
https://developers.cloudflare.com/pages/platform/known-issues/#delete-a-project-with-a-high-number-of-deployments
