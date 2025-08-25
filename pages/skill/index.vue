<template>
  <div>
    <h1 class="text-4xl font-bold text-center mb-12">Skills</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="category in skillCategories"
        :key="category.title"
        class="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
      >
        <div class="flex items-center mb-4">
          <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
            <span class="text-2xl">{{ category.icon }}</span>
          </div>
          <h2 class="text-2xl font-semibold text-gray-800">{{ category.title }}</h2>
        </div>

        <div v-for="group in category.groups" :key="group.title" class="mb-4">
          <h3 class="text-lg font-semibold mb-3 text-gray-800 flex items-center">
            <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            {{ group.title }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <TechBadge
              v-for="item in group.items"
              :key="item.label"
              :label="item.label"
              :emoji="item.emoji"
              :bgClass="item.bgClass"
              :textClass="item.textClass"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TechBadge from '~/components/TechBadge.vue'

const skillCategories = [
  {
    title: 'プログラミング言語',
    icon: '💻',
    groups: [
      {
        title: '主要言語（強み）',
        items: [
          { label: 'Ruby', emoji: '💎', bgClass: 'bg-red-100', textClass: 'text-red-800' },
          { label: 'JavaScript', emoji: '📜', bgClass: 'bg-yellow-100', textClass: 'text-yellow-800' },
          { label: 'TypeScript', emoji: '🔷', bgClass: 'bg-blue-100', textClass: 'text-blue-800' }
        ]
      },
      {
        title: '扱える言語',
        items: [
          { label: 'Python', emoji: '🐍', bgClass: 'bg-green-100', textClass: 'text-green-800' },
          { label: 'Go', emoji: '🐹', bgClass: 'bg-cyan-100', textClass: 'text-cyan-800' },
          { label: 'Elixir', emoji: '⚗️', bgClass: 'bg-purple-100', textClass: 'text-purple-800' },
          { label: 'PHP', emoji: '🐘', bgClass: 'bg-indigo-100', textClass: 'text-indigo-800' },
          { label: 'R', emoji: '📊', bgClass: 'bg-gray-100', textClass: 'text-gray-800' }
        ]
      }
    ]
  },

  {
    title: 'フレームワーク・ライブラリ',
    icon: '🏗️',
    groups: [
      {
        title: 'バックエンド（強み）',
        items: [
          { label: 'Rails', emoji: '🚂', bgClass: 'bg-red-100', textClass: 'text-red-800' },
          { label: 'Sinatra', emoji: '🎵', bgClass: 'bg-red-100', textClass: 'text-red-800' }
        ]
      },
      {
        title: 'フロントエンド（扱える）',
        items: [
          { label: 'Vue.js', emoji: '🖖', bgClass: 'bg-green-100', textClass: 'text-green-800' },
          { label: 'Nuxt.js', emoji: '🏔️', bgClass: 'bg-green-100', textClass: 'text-green-800' }
        ]
      },
      {
        title: 'その他',
        items: [
          { label: 'Django', emoji: '🐍', bgClass: 'bg-green-100', textClass: 'text-green-800' },
          { label: 'FastAPI', emoji: '🏃', bgClass: 'bg-blue-100', textClass: 'text-blue-800' },
          { label: 'React', emoji: '⚛️', bgClass: 'bg-cyan-100', textClass: 'text-cyan-800' }
        ]
      }
    ]
  },

  {
    title: 'データベース',
    icon: '🗄️',
    groups: [
      {
        title: 'RDBMS',
        items: [
          { label: 'MySQL', emoji: '🐬', bgClass: 'bg-orange-100', textClass: 'text-orange-800' },
          { label: 'PostgreSQL', emoji: '🐘', bgClass: 'bg-blue-100', textClass: 'text-blue-800' },
          { label: 'SQLite', emoji: '💿', bgClass: 'bg-gray-100', textClass: 'text-gray-800' }
        ]
      },
      {
        title: 'NoSQL・KVS',
        items: [
          { label: 'Redis', emoji: '📮', bgClass: 'bg-red-100', textClass: 'text-red-800' },
          { label: 'DynamoDB', emoji: '⚡', bgClass: 'bg-yellow-100', textClass: 'text-yellow-800' },
          { label: 'MongoDB', emoji: '🍃', bgClass: 'bg-green-100', textClass: 'text-green-800' }
        ]
      }
    ]
  },

  {
    title: 'クラウド・インフラ',
    icon: '☁️',
    groups: [
      {
        title: 'クラウド（扱える）',
        items: [
          { label: 'AWS', emoji: '🌩️', bgClass: 'bg-orange-100', textClass: 'text-orange-800' },
          { label: 'GCP', emoji: '☁️', bgClass: 'bg-blue-100', textClass: 'text-blue-800' }
        ]
      },
      {
        title: 'コンテナ',
        items: [
          { label: 'Docker', emoji: '🐳', bgClass: 'bg-cyan-100', textClass: 'text-cyan-800' }
        ]
      },
      {
        title: 'OS・サーバー',
        items: [
          { label: 'Linux', emoji: '🐧', bgClass: 'bg-gray-100', textClass: 'text-gray-800' },
          { label: 'Nginx', emoji: '🌐', bgClass: 'bg-green-100', textClass: 'text-green-800' }
        ]
      }
    ]
  },

  {
    title: 'マネジメント・開発運用',
    icon: '👥',
    groups: [
      {
        title: 'マネジメント・リーダーシップ',
        items: [
          { label: 'チーム運営', emoji: '👥', bgClass: 'bg-purple-100', textClass: 'text-purple-800' },
          { label: '技術選定', emoji: '🎯', bgClass: 'bg-indigo-100', textClass: 'text-indigo-800' },
          { label: 'パフォーマンス改善', emoji: '⚡', bgClass: 'bg-pink-100', textClass: 'text-pink-800' }
        ]
      },
      {
        title: '監視・運用',
        items: [
          { label: 'Sentry', emoji: '🔍', bgClass: 'bg-red-100', textClass: 'text-red-800' },
          { label: 'Bugsnag', emoji: '🐛', bgClass: 'bg-yellow-100', textClass: 'text-yellow-800' },
          { label: 'CloudWatch', emoji: '📈', bgClass: 'bg-orange-100', textClass: 'text-orange-800' }
        ]
      }
    ]
  }
]
</script>

<style>
/* small layout tweaks */
h1 { letter-spacing: -0.02em; }
</style>
