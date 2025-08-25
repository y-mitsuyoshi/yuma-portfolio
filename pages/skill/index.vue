<template>
  <div>
    <h1 class="text-4xl font-bold text-center mb-8">Skill</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">プログラミング言語</h2>
        <div>
          <h3 class="text-lg font-semibold mb-2 text-gray-800">主要言語（強み）</h3>
          <p class="text-gray-700 mb-3">Ruby, JavaScript (ES6+), TypeScript</p>
          
          <h3 class="text-lg font-semibold mb-2 text-gray-800">扱える言語</h3>
          <p class="text-gray-700">Python, Go, Elixir, PHP, R (統計解析)</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">フレームワーク・ライブラリ</h2>
        <div>
          <h3 class="text-lg font-semibold mb-2 text-gray-800">バックエンド（強み）</h3>
          <p class="text-gray-700 mb-3">Ruby on Rails, Sinatra</p>
          
          <h3 class="text-lg font-semibold mb-2 text-gray-800">フロントエンド（扱える）</h3>
          <p class="text-gray-700 mb-3">Vue.js, Nuxt.js</p>
          
          <h3 class="text-lg font-semibold mb-2 text-gray-800">その他</h3>
          <p class="text-gray-700">Django, Flask, FastAPI, React (基本レベル)</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">データベース・ストレージ</h2>
        <div>
          <h3 class="text-lg font-semibold mb-2 text-gray-800">RDBMS</h3>
          <p class="text-gray-700 mb-3">MySQL, PostgreSQL, SQLite</p>
          
          <h3 class="text-lg font-semibold mb-2 text-gray-800">NoSQL・KVS</h3>
          <p class="text-gray-700">Redis, DynamoDB, MongoDB (基本レベル)</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">クラウド・インフラ</h2>
        <div>
          <h3 class="text-lg font-semibold mb-2 text-gray-800">クラウドプラットフォーム（扱える）</h3>
          <p class="text-gray-700 mb-3">AWS (EC2, RDS, S3, CloudFront, Lambda, etc.), Google Cloud (基本レベル)</p>
          
          <h3 class="text-lg font-semibold mb-2 text-gray-800">コンテナ・デプロイ</h3>
          <p class="text-gray-700 mb-3">Docker, Docker Compose</p>
          
          <h3 class="text-lg font-semibold mb-2 text-gray-800">OS・サーバー</h3>
          <p class="text-gray-700">Linux (Ubuntu, CentOS), Nginx, Apache</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-3">
        <h2 class="text-2xl font-semibold mb-4">マネジメント・開発運用スキル</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800">マネジメント・リーダーシップ</h3>
            <p class="text-gray-700 mb-3">チーム運営, 技術選定, パフォーマンスチューニング, プロジェクト管理</p>
            
            <h3 class="text-lg font-semibold mb-2 text-gray-800">バージョン管理・CI/CD</h3>
            <p class="text-gray-700">Git, GitHub, GitLab, CircleCI, GitHub Actions</p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-2 text-gray-800">監視・運用</h3>
            <p class="text-gray-700 mb-3">Sentry, Bugsnag, New Relic, CloudWatch</p>
            
            <h3 class="text-lg font-semibold mb-2 text-gray-800">API・アーキテクチャ</h3>
            <p class="text-gray-700">REST API, GraphQL, マイクロサービス設計</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// Vue 3 Composition API
</script>

<style>
/* All styling is now done with Tailwind CSS utility classes */
</style>
