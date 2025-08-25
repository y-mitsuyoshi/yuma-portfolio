# yuma-portfolio

> Yuma Mitsuyoshi's Portfolio - Built with Nuxt 4, Vue 3, and Vite

## 技術スタック

- **Nuxt.js**: 4.0.x (Vue 3 + Vite)
- **Vue.js**: 3.x (Composition API)
- **CSS Framework**: Tailwind CSS
- **Icons**: FontAwesome
- **Backend**: Firebase
- **Build Tool**: Vite

## 前提条件

- **Node.js**: 22.18.0以上 (推奨)
- **npm**: 10.0.0以上

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

```bash
# 静的サイトを生成
npm run generate

# Firebase Hostingにデプロイ
npx firebase deploy
```

## 利用可能なスクリプト

- `npm run dev` - 開発サーバー起動
- `npm run build` - 本番ビルド
- `npm run preview` - ビルド結果のプレビュー
- `npm run generate` - 静的サイト生成
- `npm run lint` - ESLintでコードチェック

## 環境要件

- **Node.js**: 22.18.0 (推奨)
- **npm**: 10.x以上
- **.nvmrc**: Node.jsバージョン管理用ファイル含む

## 開発環境のセットアップ

### Node.jsバージョン管理 (推奨)

```bash
# nvmを使用している場合
nvm use

# または直接指定
nvm install 22.18.0
nvm use 22.18.0
```
