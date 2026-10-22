# yuma-portfolio

> Yuma Mitsuyoshi's Portfolio - Built with Nuxt 4, Vue 3, and Vite

## 技術スタック

- **Nuxt.js**: 4.x (Vue 3 + Vite)
- **Vue.js**: 3.x (Composition API)
- **CSS Framework**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: FontAwesome v7
- **Backend**: Firebase v13
- **Build Tool**: Vite

## 前提条件

- **Node.js**: 26.12.1以上（2026年10月21日セキュリティリリース対応版）
- **npm**: 11.0.0以上

## セットアップ

### 1. 依存関係のインストール

```bash
# プロジェクトのクローン
git clone https://github.com/y-mitsuyoshi/yuma-portfolio.git
cd yuma-portfolio

# 依存関係をインストール
npm install
```

### 2. 開発サーバーの起動

```bash
# ホットリロード付きで開発サーバーを起動 (localhost:3000)
npm run dev
```

### 3. 本番ビルド

```bash
# 本番用ビルド
npm run build

# ビルド結果をプレビュー
npm run preview
```

### 4. 静的サイト生成

```bash
# 静的ファイルを生成
npm run generate
```

## Firebase デプロイ

以下の手順で静的サイトを Firebase Hosting にデプロイできます：

### 初回セットアップ（必要に応じて）

Firebase CLI にログイン

```bash
npx firebase login
```

プロジェクトを選択（初回のみ）

```bash
npx firebase use --add
# 対話式でプロジェクトを選択
```

### デプロイ実行

静的ファイルを生成

```bash
npm run generate
```

Firebase Hosting にデプロイ

```bash
npx firebase deploy --only hosting
```

デプロイが完了すると、コンソールに公開URLが表示されます。

**公開サイト**: <https://yuma-portfolio.web.app>

### 注意事項

- このプロジェクトでは `firebase.json` の `hosting.public` が `.output/public` に設定されています
- Nuxt 4 の `npm run generate` コマンドは静的ファイルを `.output/public` に出力します
- デプロイ前に必ず `npm run generate` で最新のファイルを生成してください

## 利用可能なスクリプト

- `npm run dev` - 開発サーバー起動
- `npm run build` - 本番ビルド
- `npm run preview` - ビルド結果のプレビュー
- `npm run generate` - 静的サイト生成
- `npm run lint` - ESLintでコードチェック

## 環境要件

- **Node.js**: 26.12.1 (推奨)
- **npm**: 11.x以上
- **.nvmrc**: Node.jsバージョン管理用ファイル含む

## 開発環境のセットアップ

### Node.jsバージョン管理 (推奨)

```bash
# nvmを使用している場合
nvm use

# または直接指定
nvm install 26.12.1
nvm use 26.12.1
```
