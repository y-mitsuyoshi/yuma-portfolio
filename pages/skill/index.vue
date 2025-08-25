<template>
  <div>
    <h1 class="text-4xl font-bold text-center mb-8">Skill</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="category in skillCategories"
        :key="category.title"
        class="bg-white p-6 rounded-lg shadow-md"
        :class="category.colSpan"
      >
        <h2 class="text-2xl font-semibold mb-4">{{ category.title }}</h2>
        <div :class="{ 'grid grid-cols-1 md:grid-cols-2 gap-4': category.colSpan }">
          <div v-for="subCategory in category.subCategories" :key="subCategory.title">
            <h3 class="text-lg font-semibold mb-2 text-gray-800">{{ subCategory.title }}</h3>
            <div class="flex flex-wrap gap-4">
              <div
                v-for="skill in subCategory.skills"
                :key="skill.name"
                class="flex items-center bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                <font-awesome-icon :icon="skill.icon" class="text-xl text-gray-600 mr-2" />
                <span class="text-gray-700">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const skillCategories = ref([
  {
    title: 'プログラミング言語',
    subCategories: [
      {
        title: '主要言語（強み）',
        skills: [
          { name: 'Ruby', icon: ['fas', 'gem'] },
          { name: 'JavaScript (ES6+)', icon: ['fab', 'js'] },
          { name: 'TypeScript', icon: ['fab', 'js'] },
        ],
      },
      {
        title: '扱える言語',
        skills: [
          { name: 'Python', icon: ['fab', 'python'] },
          { name: 'Go', icon: ['fab', 'golang'] },
          { name: 'Elixir', icon: ['fas', 'code'] },
          { name: 'PHP', icon: ['fab', 'php'] },
          { name: 'R (統計解析)', icon: ['fab', 'r-project'] },
        ],
      },
    ],
  },
  {
    title: 'フレームワーク・ライブラリ',
    subCategories: [
      {
        title: 'バックエンド（強み）',
        skills: [
          { name: 'Ruby on Rails', icon: ['fas', 'gem'] },
          { name: 'Sinatra', icon: ['fas', 'code'] },
        ],
      },
      {
        title: 'フロントエンド（扱える）',
        skills: [
          { name: 'Vue.js', icon: ['fab', 'vuejs'] },
          { name: 'Nuxt.js', icon: ['fab', 'vuejs'] },
        ],
      },
      {
        title: 'その他',
        skills: [
            { name: 'Django', icon: ['fab', 'python'] },
            { name: 'Flask', icon: ['fab', 'python'] },
            { name: 'FastAPI', icon: ['fab', 'python'] },
            { name: 'React (基本レベル)', icon: ['fab', 'react'] },
        ],
      },
    ],
  },
  {
    title: 'データベース・ストレージ',
    subCategories: [
      {
        title: 'RDBMS',
        skills: [
          { name: 'MySQL', icon: ['fas', 'database'] },
          { name: 'PostgreSQL', icon: ['fas', 'database'] },
          { name: 'SQLite', icon: ['fas', 'database'] },
        ],
      },
      {
        title: 'NoSQL・KVS',
        skills: [
          { name: 'Redis', icon: ['fas', 'database'] },
          { name: 'DynamoDB', icon: ['fab', 'aws'] },
          { name: 'MongoDB (基本レベル)', icon: ['fas', 'database'] },
        ],
      },
    ],
  },
  {
    title: 'クラウド・インフラ',
    subCategories: [
      {
        title: 'クラウドプラットフォーム（扱える）',
        skills: [
          { name: 'AWS (EC2, RDS, S3, etc.)', icon: ['fab', 'aws'] },
          { name: 'Google Cloud (基本レベル)', icon: ['fab', 'google'] },
        ],
      },
      {
        title: 'コンテナ・デプロイ',
        skills: [
          { name: 'Docker', icon: ['fab', 'docker'] },
          { name: 'Docker Compose', icon: ['fab', 'docker'] },
        ],
      },
      {
        title: 'OS・サーバー',
        skills: [
          { name: 'Linux (Ubuntu, CentOS)', icon: ['fab', 'linux'] },
          { name: 'Nginx', icon: ['fas', 'server'] },
          { name: 'Apache', icon: ['fas', 'server'] },
        ],
      },
    ],
  },
  {
    title: 'マネジメント・開発運用スキル',
    colSpan: 'lg:col-span-3 md:col-span-2',
    subCategories: [
      {
        title: 'マネジメント・リーダーシップ',
        skills: [
          { name: 'チーム運営', icon: ['fas', 'sitemap'] },
          { name: '技術選定', icon: ['fas', 'sitemap'] },
          { name: 'パフォーマンスチューニング', icon: ['fas', 'chart-line'] },
          { name: 'プロジェクト管理', icon: ['fas', 'project-diagram'] },
        ],
      },
      {
        title: 'バージョン管理・CI/CD',
        skills: [
          { name: 'Git', icon: ['fab', 'git-alt'] },
          { name: 'GitHub', icon: ['fab', 'github'] },
          { name: 'GitLab', icon: ['fab', 'gitlab'] },
          { name: 'CircleCI', icon: ['fas', 'circle-check'] },
          { name: 'GitHub Actions', icon: ['fab', 'github'] },
        ],
      },
      {
        title: '監視・運用',
        skills: [
          { name: 'Sentry', icon: ['fas', 'bug'] },
          { name: 'Bugsnag', icon: ['fas', 'bug'] },
          { name: 'New Relic', icon: ['fas', 'chart-line'] },
          { name: 'CloudWatch', icon: ['fab', 'aws'] },
        ],
      },
      {
        title: 'API・アーキテクチャ',
        skills: [
          { name: 'REST API', icon: ['fas', 'project-diagram'] },
          { name: 'GraphQL', icon: ['fas', 'project-diagram'] },
          { name: 'マイクロサービス設計', icon: ['fas', 'sitemap'] },
        ],
      },
    ],
  },
])
</script>

<style>
/* All styling is now done with Tailwind CSS utility classes */
</style>
