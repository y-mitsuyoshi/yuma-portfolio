# yuma-portfolio
## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
# yuma-portfolio

シンプルな Nuxt 4 ベースのポートフォリオサイトです。

## 前提
- Node.js: v22 系（package.json の engines と Volta 設定に合わせています）
- npm または npx が利用可能であること

## 開発 (ローカル)
依存関係をインストールして開発サーバーを起動します。

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動 (ホットリロード有り)
npm run dev
```

※ Volta を使っている場合は `volta install node@22.18.0` のように固定できます（package.json にも設定あり）。

## ビルド / 公開用出力

```bash
# ビルド（本番用）
npm run build

# プレビュー（build 後のサーバー確認）
npm run preview

# 静的サイトとして生成
npm run generate
```

## Lint

```bash
# ESLint を実行
npm run lint
```

## Firebase Hosting にデプロイ
静的ファイルを生成してから Firebase にデプロイします。

```bash
# まず静的ファイルを生成
npm run generate

# Firebase にデプロイ
npx firebase deploy
```

## 補足情報
- Node の推奨バージョン: 22.x
