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

## Volta とシェル設定について
このリポジトリは Node v22.x を想定しています。Volta を使っている場合、システム全体で常に Volta の Node を優先するには `~/.zshrc` に以下を追加してください:

```bash
# ~/.zshrc に追加
export PATH="$HOME/.volta/bin:$PATH"
```

上記を追加後、新しいターミナルを開くと Volta の Node（v22.18.0）が優先されます。

このリポジトリでは、ホームのシェル設定を直接編集しなくても Node22 を使えるように、プロジェクト内に `scripts/use-volta-node.sh` を用意しています。使い方:

```bash
# Node のバージョン確認
./scripts/use-volta-node.sh node -v

# npm install を Volta 経由で実行
./scripts/use-volta-node.sh npm install

# 開発サーバー起動
./scripts/use-volta-node.sh npm run dev
```

## .nvmrc と Git
プロジェクト内に `.nvmrc` を置いていますが、ローカルの Node バージョンファイル `.nvmrc` はリポジトリに含めない運用にするため、`.gitignore` に追加済みです。
