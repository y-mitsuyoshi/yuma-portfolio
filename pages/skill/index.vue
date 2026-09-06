<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
    <div class="container mx-auto px-6 max-w-6xl">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div
          class="w-24 h-24 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6 shadow-xl"
        >
          <font-awesome-icon icon="laptop-code" class="text-white text-2xl" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Technical Skills
        </h1>
        <p class="text-xl text-slate-600">
          バックエンド開発を軸とした技術スタック
        </p>
      </div>

      <!-- Skills Matrix -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="skill-card"
        >
          <!-- Category Header -->
          <div class="category-header">
            <div class="category-icon">
              <span class="text-2xl">{{ category.icon }}</span>
            </div>
            <h2 class="category-title">{{ category.title }}</h2>
          </div>

          <!-- Skill Groups -->
          <div class="space-y-6">
            <div
              v-for="group in category.groups"
              :key="group.title"
              class="skill-group"
            >
              <h3 class="group-title">
                <span :class="`strength-indicator ${group.strength}`"></span>
                {{ group.title }}
              </h3>
              <div class="tech-grid">
                <TechBadge
                  v-for="item in group.items"
                  :key="item.label"
                  :label="item.label"
                  :emoji="item.emoji"
                  :bg-class="item.bgClass"
                  :text-class="item.textClass"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Strength Overview -->
      <div
        class="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
      >
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-slate-800 mb-4">
            Strength Distribution
          </h2>
          <p class="text-slate-600">技術領域ごとの習熟度</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="strength-overview-card primary">
            <div class="strength-icon">🎯</div>
            <h3 class="strength-category">Core Strength</h3>
            <p class="strength-description">Ruby / Go バックエンド開発・生成AI活用</p>
            <div class="strength-bar primary-bar"></div>
          </div>

          <div class="strength-overview-card secondary">
            <div class="strength-icon">⚡</div>
            <h3 class="strength-category">Proficient</h3>
            <p class="strength-description">
              組織マネジメント・データ基盤・クラウドAI基盤
            </p>
            <div class="strength-bar secondary-bar"></div>
          </div>

          <div class="strength-overview-card basic">
            <div class="strength-icon">🔧</div>
            <h3 class="strength-category">Working Knowledge</h3>
            <p class="strength-description">フロントエンド・インフラ・その他</p>
            <div class="strength-bar basic-bar"></div>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-12 text-center">
        <div class="inline-flex items-center space-x-6 text-sm text-slate-500">
          <div class="flex items-center">
            <div class="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
            <span>主要技術（強み）</span>
          </div>
          <div class="flex items-center">
            <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span>実務レベル</span>
          </div>
          <div class="flex items-center">
            <div class="w-3 h-3 bg-slate-400 rounded-full mr-2"></div>
            <span>扱える・学習経験</span>
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
        strength: 'primary',
        items: [
          {
            label: 'Ruby',
            emoji: '💎',
            bgClass: 'bg-red-100',
            textClass: 'text-red-800',
          },
          {
            label: 'Go',
            emoji: '🐹',
            bgClass: 'bg-cyan-100',
            textClass: 'text-cyan-800',
          },
          {
            label: 'JavaScript',
            emoji: '📜',
            bgClass: 'bg-yellow-100',
            textClass: 'text-yellow-800',
          },
          {
            label: 'TypeScript',
            emoji: '🔷',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
        ],
      },
      {
        title: '実務経験あり',
        strength: 'secondary',
        items: [
          {
            label: 'Python',
            emoji: '🐍',
            bgClass: 'bg-green-100',
            textClass: 'text-green-800',
          },
          {
            label: 'PHP',
            emoji: '🐘',
            bgClass: 'bg-indigo-100',
            textClass: 'text-indigo-800',
          },
          {
            label: 'Java',
            emoji: '☕',
            bgClass: 'bg-orange-100',
            textClass: 'text-orange-800',
          },
          {
            label: 'VB.NET',
            emoji: '🧰',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
        ],
      },
      {
        title: '学習・分析経験',
        strength: 'basic',
        items: [
          {
            label: 'R',
            emoji: '📊',
            bgClass: 'bg-gray-100',
            textClass: 'text-gray-800',
          },
          {
            label: 'Elixir',
            emoji: '⚗️',
            bgClass: 'bg-purple-100',
            textClass: 'text-purple-800',
          },
          {
            label: 'SQL',
            emoji: '🗃️',
            bgClass: 'bg-slate-100',
            textClass: 'text-slate-800',
          },
        ],
      },
    ],
  },

  {
    title: 'フレームワーク・ライブラリ',
    icon: '🏗️',
    groups: [
      {
        title: 'バックエンド（強み）',
        strength: 'primary',
        items: [
          {
            label: 'Rails',
            emoji: '🚂',
            bgClass: 'bg-red-100',
            textClass: 'text-red-800',
          },
          {
            label: 'Sinatra',
            emoji: '🎵',
            bgClass: 'bg-red-100',
            textClass: 'text-red-800',
          },
          {
            label: 'gRPC',
            emoji: '⚡',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
        ],
      },
      {
        title: 'フロントエンド（実務経験）',
        strength: 'secondary',
        items: [
          {
            label: 'Vue.js',
            emoji: '🖖',
            bgClass: 'bg-green-100',
            textClass: 'text-green-800',
          },
          {
            label: 'Nuxt.js',
            emoji: '🏔️',
            bgClass: 'bg-green-100',
            textClass: 'text-green-800',
          },
          {
            label: 'React',
            emoji: '⚛️',
            bgClass: 'bg-cyan-100',
            textClass: 'text-cyan-800',
          },
          {
            label: 'jQuery',
            emoji: '📝',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
        ],
      },
      {
        title: 'その他フレームワーク',
        strength: 'secondary',
        items: [
          {
            label: 'Django',
            emoji: '🐍',
            bgClass: 'bg-green-100',
            textClass: 'text-green-800',
          },
          {
            label: 'bottle',
            emoji: '🍶',
            bgClass: 'bg-green-100',
            textClass: 'text-green-800',
          },
          {
            label: 'WordPress',
            emoji: '📝',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
          {
            label: 'GraphQL',
            emoji: '🔗',
            bgClass: 'bg-pink-100',
            textClass: 'text-pink-800',
          },
        ],
      },
    ],
  },

  {
    title: 'データベース・ストレージ',
    icon: '🗄️',
    groups: [
      {
        title: 'RDBMS（実務経験）',
        strength: 'primary',
        items: [
          {
            label: 'MySQL',
            emoji: '🐬',
            bgClass: 'bg-orange-100',
            textClass: 'text-orange-800',
          },
          {
            label: 'PostgreSQL',
            emoji: '🐘',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
          {
            label: 'Oracle',
            emoji: '🔺',
            bgClass: 'bg-red-100',
            textClass: 'text-red-800',
          },
          {
            label: 'SQLite',
            emoji: '💿',
            bgClass: 'bg-gray-100',
            textClass: 'text-gray-800',
          },
        ],
      },
      {
        title: 'NoSQL・KVS・DWH',
        strength: 'secondary',
        items: [
          {
            label: 'Redis',
            emoji: '📮',
            bgClass: 'bg-red-100',
            textClass: 'text-red-800',
          },
          {
            label: 'DynamoDB',
            emoji: '⚡',
            bgClass: 'bg-yellow-100',
            textClass: 'text-yellow-800',
          },
          {
            label: 'BigQuery',
            emoji: '📊',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
        ],
      },
    ],
  },

  {
    title: 'クラウド・インフラ・OS',
    icon: '☁️',
    groups: [
      {
        title: 'クラウド・AI基盤',
        strength: 'secondary',
        items: [
          {
            label: 'AWS',
            emoji: '🌩️',
            bgClass: 'bg-orange-100',
            textClass: 'text-orange-800',
          },
          {
            label: 'Bedrock',
            emoji: '🤖',
            bgClass: 'bg-orange-100',
            textClass: 'text-orange-800',
          },
          {
            label: 'SageMaker',
            emoji: '🧠',
            bgClass: 'bg-orange-100',
            textClass: 'text-orange-800',
          },
          {
            label: 'Azure AI',
            emoji: '☁️',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
          {
            label: 'Google Cloud',
            emoji: '🌐',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
          {
            label: 'Fargate',
            emoji: '🚢',
            bgClass: 'bg-orange-100',
            textClass: 'text-orange-800',
          },
          {
            label: 'CloudWatch',
            emoji: '📊',
            bgClass: 'bg-orange-100',
            textClass: 'text-orange-800',
          },
        ],
      },
      {
        title: 'OS・サーバー',
        strength: 'secondary',
        items: [
          {
            label: 'Linux',
            emoji: '🐧',
            bgClass: 'bg-gray-100',
            textClass: 'text-gray-800',
          },
          {
            label: 'Windows Server',
            emoji: '🪟',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
        ],
      },
      {
        title: 'コンテナ・ツール',
        strength: 'basic',
        items: [
          {
            label: 'Docker',
            emoji: '🐳',
            bgClass: 'bg-cyan-100',
            textClass: 'text-cyan-800',
          },
          {
            label: 'Git',
            emoji: '📂',
            bgClass: 'bg-orange-100',
            textClass: 'text-orange-800',
          },
          {
            label: 'GitHub',
            emoji: '🐙',
            bgClass: 'bg-gray-100',
            textClass: 'text-gray-800',
          },
        ],
      },
    ],
  },

  {
    title: '開発手法・ツール・監視',
    icon: '🛠️',
    groups: [
      {
        title: '開発手法・アーキテクチャ',
        strength: 'primary',
        items: [
          {
            label: 'アジャイル開発',
            emoji: '🔄',
            bgClass: 'bg-green-100',
            textClass: 'text-green-800',
          },
          {
            label: 'スクラム開発',
            emoji: '🏃',
            bgClass: 'bg-green-100',
            textClass: 'text-green-800',
          },
          {
            label: 'DDD',
            emoji: '🏗️',
            bgClass: 'bg-purple-100',
            textClass: 'text-purple-800',
          },
          {
            label: 'マイクロサービス',
            emoji: '🔧',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
        ],
      },
      {
        title: '監視・運用・可視化',
        strength: 'secondary',
        items: [
          {
            label: 'Datadog',
            emoji: '🐶',
            bgClass: 'bg-purple-100',
            textClass: 'text-purple-800',
          },
          {
            label: 'Sentry',
            emoji: '🚨',
            bgClass: 'bg-red-100',
            textClass: 'text-red-800',
          },
          {
            label: 'X-Ray',
            emoji: '🔬',
            bgClass: 'bg-orange-100',
            textClass: 'text-orange-800',
          },
          {
            label: 'Grafana',
            emoji: '📈',
            bgClass: 'bg-orange-100',
            textClass: 'text-orange-800',
          },
          {
            label: 'Looker Studio',
            emoji: '📊',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
          {
            label: 'Rundeck',
            emoji: '⚙️',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
        ],
      },
      {
        title: 'CI/CD・テスト',
        strength: 'basic',
        items: [
          {
            label: 'CircleCI',
            emoji: '🔁',
            bgClass: 'bg-green-100',
            textClass: 'text-green-800',
          },
          {
            label: 'Jest',
            emoji: '🧪',
            bgClass: 'bg-red-100',
            textClass: 'text-red-800',
          },
          {
            label: 'ESLint',
            emoji: '📝',
            bgClass: 'bg-yellow-100',
            textClass: 'text-yellow-800',
          },
        ],
      },
    ],
  },

  {
    title: 'マネジメント・リーダーシップ',
    icon: '👥',
    groups: [
      {
        title: 'チームマネジメント（強み）',
        strength: 'primary',
        items: [
          {
            label: 'チーム運営',
            emoji: '👥',
            bgClass: 'bg-purple-100',
            textClass: 'text-purple-800',
          },
          {
            label: 'メンバー育成',
            emoji: '🌱',
            bgClass: 'bg-green-100',
            textClass: 'text-green-800',
          },
          {
            label: '1on1運営',
            emoji: '🗣️',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
          {
            label: '採用面接',
            emoji: '🤝',
            bgClass: 'bg-pink-100',
            textClass: 'text-pink-800',
          },
          {
            label: '評価制度設計',
            emoji: '📝',
            bgClass: 'bg-indigo-100',
            textClass: 'text-indigo-800',
          },
        ],
      },
      {
        title: 'プロジェクトマネジメント',
        strength: 'primary',
        items: [
          {
            label: 'プロジェクト管理',
            emoji: '📋',
            bgClass: 'bg-indigo-100',
            textClass: 'text-indigo-800',
          },
          {
            label: '要件定義',
            emoji: '📐',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
          {
            label: '技術選定',
            emoji: '🎯',
            bgClass: 'bg-orange-100',
            textClass: 'text-orange-800',
          },
          {
            label: 'パフォーマンス改善',
            emoji: '⚡',
            bgClass: 'bg-yellow-100',
            textClass: 'text-yellow-800',
          },
          {
            label: '生産性可視化',
            emoji: '📊',
            bgClass: 'bg-green-100',
            textClass: 'text-green-800',
          },
          {
            label: 'AI活用推進',
            emoji: '🤖',
            bgClass: 'bg-purple-100',
            textClass: 'text-purple-800',
          },
        ],
      },
      {
        title: '組織改善・教育',
        strength: 'secondary',
        items: [
          {
            label: '勉強会企画',
            emoji: '📚',
            bgClass: 'bg-green-100',
            textClass: 'text-green-800',
          },
          {
            label: 'レビュー改善',
            emoji: '🔍',
            bgClass: 'bg-purple-100',
            textClass: 'text-purple-800',
          },
          {
            label: 'VBAコーチング',
            emoji: '🏫',
            bgClass: 'bg-blue-100',
            textClass: 'text-blue-800',
          },
          {
            label: 'コスト削減',
            emoji: '💰',
            bgClass: 'bg-green-100',
            textClass: 'text-green-800',
          },
        ],
      },
    ],
  },
]

// SEO設定
useSeo({
  title: 'Technical Skills - Yuma Mitsuyoshi',
  description: 'プログラミング言語、フレームワーク、クラウド・AI基盤、マネジメントの詳細。Ruby・Go・TypeScript、Vue.js・React、AWS Bedrock・SageMaker・Azure AI・Google Cloud、BigQuery・Datadog、キャリアラダー設計・開発生産性可視化などの実務経験。',
  keywords: 'Technical Skills,Ruby,Go,TypeScript,Vue.js,React,AWS Bedrock,SageMaker,BigQuery,Datadog,生成AI,チームマネジメント,DDD,マイクロサービス',
  type: 'website',
  canonical: '/skill'
})

// Analytics tracking
const { $trackEvent } = useNuxtApp()

onMounted(() => {
  $trackEvent('page_view', {
    page: 'skills',
    section: 'technical_skills'
  })
})
</script>

<style scoped>
.skill-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(241 245 249);
  transition: all 0.3s ease;
  height: fit-content;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.15);
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgb(241 245 249);
}

.category-icon {
  width: 3rem;
  height: 3rem;
  background: rgb(248 250 252);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  border: 1px solid rgb(226 232 240);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(30 41 59);
}

.skill-group {
  margin-bottom: 1.5rem;
}

.group-title {
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 600;
  color: rgb(51 65 85);
  margin-bottom: 1rem;
}

.strength-indicator {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-right: 0.75rem;
  flex-shrink: 0;
}

.strength-indicator.primary {
  background-color: rgb(34 197 94);
}

.strength-indicator.secondary {
  background-color: rgb(59 130 246);
}

.strength-indicator.basic {
  background-color: rgb(148 163 184);
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.strength-overview-card {
  text-align: center;
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid rgb(241 245 249);
  transition: transform 0.3s;
}

.strength-overview-card:hover {
  transform: translateY(-3px);
}

.strength-overview-card.primary {
  background: linear-gradient(
    135deg,
    rgb(220 252 231) 0%,
    rgb(187 247 208) 100%
  );
}

.strength-overview-card.secondary {
  background: linear-gradient(
    135deg,
    rgb(219 234 254) 0%,
    rgb(191 219 254) 100%
  );
}

.strength-overview-card.basic {
  background: linear-gradient(
    135deg,
    rgb(248 250 252) 0%,
    rgb(226 232 240) 100%
  );
}

.strength-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.strength-category {
  font-size: 1.125rem;
  font-weight: 600;
  color: rgb(30 41 59);
  margin-bottom: 0.5rem;
}

.strength-description {
  color: rgb(71 85 105);
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.strength-bar {
  height: 0.5rem;
  border-radius: 0.25rem;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.primary-bar {
  background: linear-gradient(to right, rgb(34 197 94), rgb(22 163 74));
}

.secondary-bar {
  background: linear-gradient(to right, rgb(59 130 246), rgb(37 99 235));
}

.basic-bar {
  background: linear-gradient(to right, rgb(148 163 184), rgb(100 116 139));
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .category-header {
    flex-direction: column;
    text-align: center;
  }

  .category-icon {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}
</style>
