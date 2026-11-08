<template>
  <div class="container-page py-14 md:py-20">
    <header class="border-b border-line pb-10">
      <p class="label-mono">03 / Skills</p>
      <div
        class="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <h1 class="title-display text-6xl sm:text-7xl md:text-8xl">
            Technical Skills
          </h1>
          <p class="mt-4 text-sm text-ink-soft">
            バックエンド開発を軸とした技術スタック
          </p>
        </div>
        <p class="max-w-sm text-sm leading-7 text-ink-soft">
          業務で継続的に用いてきた技術を中心に、習熟度の目安とあわせて整理しています。
        </p>
      </div>
    </header>

    <div class="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
      <span class="flex items-center gap-2 text-xs text-ink-muted">
        <span class="h-1.5 w-1.5 bg-accent" aria-hidden="true"></span>
        主要技術（強み）
      </span>
      <span class="flex items-center gap-2 text-xs text-ink-muted">
        <span class="h-1.5 w-1.5 bg-ink" aria-hidden="true"></span>
        実務レベル
      </span>
      <span class="flex items-center gap-2 text-xs text-ink-muted">
        <span class="h-1.5 w-1.5 bg-line-strong" aria-hidden="true"></span>
        扱える・学習経験
      </span>
    </div>

    <div class="mt-10 border-t border-line">
      <section
        v-for="(category, index) in skillCategories"
        :key="category.title"
        class="grid gap-8 border-b border-line py-10 md:grid-cols-[280px_minmax(0,1fr)] md:gap-12"
      >
        <div>
          <p class="label-mono">0{{ index + 1 }}</p>
          <div class="mt-4 flex items-center gap-3">
            <font-awesome-icon
              :icon="categoryIcons[index]"
              class="h-5 w-5 shrink-0 text-accent"
            />
            <h2 class="text-lg font-semibold leading-snug tracking-tight">
              {{ category.title }}
            </h2>
          </div>
        </div>

        <div class="space-y-7">
          <div v-for="group in category.groups" :key="group.title">
            <div class="flex items-center gap-3">
              <span
                :class="[
                  'h-1.5 w-1.5',
                  group.strength === 'primary'
                    ? 'bg-accent'
                    : group.strength === 'secondary'
                      ? 'bg-ink'
                      : 'bg-line-strong',
                ]"
                aria-hidden="true"
              ></span>
              <h3
                class="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft"
              >
                {{ group.title }}
              </h3>
            </div>
            <div class="mt-3 flex flex-wrap gap-2">
              <TechBadge
                v-for="item in group.items"
                :key="item.label"
                :label="item.label"
                :strength="group.strength"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="mt-16">
      <div
        class="flex items-baseline justify-between gap-4 border-b border-line pb-4"
      >
        <h2 class="text-2xl font-semibold tracking-tight">
          Strength Distribution
        </h2>
        <span class="label-mono">07</span>
      </div>

      <div class="mt-8 grid gap-10 md:grid-cols-3">
        <div
          v-for="level in strengthLevels"
          :key="level.title"
          class="border-t border-ink pt-4"
        >
          <div class="flex items-center justify-between gap-4">
            <span class="label-mono">{{ level.label }}</span>
            <span class="font-mono text-[10px] text-ink-muted">
              {{ level.ratio }}%
            </span>
          </div>
          <h3 class="mt-4 text-lg font-semibold">{{ level.title }}</h3>
          <p class="mt-2 text-sm leading-7 text-ink-soft">
            {{ level.description }}
          </p>
          <div class="mt-5 h-1 w-full bg-line">
            <div
              :class="['h-full', level.barClass]"
              :style="{ width: `${level.ratio}%` }"
            ></div>
          </div>
        </div>
      </div>

      <p class="mt-6 font-mono text-[10px] text-ink-muted">
        * 習熟度は主観的な目安です。
      </p>
    </section>
  </div>
</template>

<script setup>
import TechBadge from '~/components/TechBadge.vue'

const categoryIcons = [
  'code',
  'project-diagram',
  'database',
  'server',
  'chart-line',
  'users',
]

const strengthLevels = [
  {
    label: 'Core',
    title: 'Core Strength',
    ratio: 85,
    description: 'Ruby / Go バックエンド開発・生成AI活用',
    barClass: 'bg-accent',
  },
  {
    label: 'Proficient',
    title: 'Proficient',
    ratio: 62,
    description: '組織マネジメント・データ基盤・クラウドAI基盤',
    barClass: 'bg-ink',
  },
  {
    label: 'Working',
    title: 'Working Knowledge',
    ratio: 38,
    description: 'フロントエンド・インフラ・その他',
    barClass: 'bg-line-strong',
  },
]

const skillCategories = [
  {
    title: 'プログラミング言語',
    groups: [
      {
        title: '主要言語（強み）',
        strength: 'primary',
        items: [
          {
            label: 'Ruby',
          },
          {
            label: 'Go',
          },
          {
            label: 'JavaScript',
          },
          {
            label: 'TypeScript',
          },
        ],
      },
      {
        title: '実務経験あり',
        strength: 'secondary',
        items: [
          {
            label: 'Python',
          },
          {
            label: 'PHP',
          },
          {
            label: 'Java',
          },
          {
            label: 'VB.NET',
          },
        ],
      },
      {
        title: '学習・分析経験',
        strength: 'basic',
        items: [
          {
            label: 'R',
          },
          {
            label: 'Elixir',
          },
          {
            label: 'SQL',
          },
        ],
      },
    ],
  },

  {
    title: 'フレームワーク・ライブラリ',
    groups: [
      {
        title: 'バックエンド（強み）',
        strength: 'primary',
        items: [
          {
            label: 'Rails',
          },
          {
            label: 'Sinatra',
          },
          {
            label: 'gRPC',
          },
        ],
      },
      {
        title: 'フロントエンド（実務経験）',
        strength: 'secondary',
        items: [
          {
            label: 'Vue.js',
          },
          {
            label: 'Nuxt.js',
          },
          {
            label: 'React',
          },
          {
            label: 'jQuery',
          },
        ],
      },
      {
        title: 'その他フレームワーク',
        strength: 'secondary',
        items: [
          {
            label: 'Django',
          },
          {
            label: 'bottle',
          },
          {
            label: 'WordPress',
          },
          {
            label: 'GraphQL',
          },
        ],
      },
    ],
  },

  {
    title: 'データベース・ストレージ',
    groups: [
      {
        title: 'RDBMS（実務経験）',
        strength: 'primary',
        items: [
          {
            label: 'MySQL',
          },
          {
            label: 'PostgreSQL',
          },
          {
            label: 'Oracle',
          },
          {
            label: 'SQLite',
          },
        ],
      },
      {
        title: 'NoSQL・KVS・DWH',
        strength: 'secondary',
        items: [
          {
            label: 'Redis',
          },
          {
            label: 'DynamoDB',
          },
          {
            label: 'BigQuery',
          },
        ],
      },
    ],
  },

  {
    title: 'クラウド・インフラ・OS',
    groups: [
      {
        title: 'クラウド・AI基盤',
        strength: 'secondary',
        items: [
          {
            label: 'AWS',
          },
          {
            label: 'Bedrock',
          },
          {
            label: 'SageMaker',
          },
          {
            label: 'Azure AI',
          },
          {
            label: 'Google Cloud',
          },
          {
            label: 'Fargate',
          },
          {
            label: 'CloudWatch',
          },
        ],
      },
      {
        title: 'OS・サーバー',
        strength: 'secondary',
        items: [
          {
            label: 'Linux',
          },
          {
            label: 'Windows Server',
          },
        ],
      },
      {
        title: 'コンテナ・ツール',
        strength: 'basic',
        items: [
          {
            label: 'Docker',
          },
          {
            label: 'Git',
          },
          {
            label: 'GitHub',
          },
        ],
      },
    ],
  },

  {
    title: '開発手法・ツール・監視',
    groups: [
      {
        title: '開発手法・アーキテクチャ',
        strength: 'primary',
        items: [
          {
            label: 'アジャイル開発',
          },
          {
            label: 'スクラム開発',
          },
          {
            label: 'DDD',
          },
          {
            label: 'マイクロサービス',
          },
        ],
      },
      {
        title: '監視・運用・可視化',
        strength: 'secondary',
        items: [
          {
            label: 'Datadog',
          },
          {
            label: 'Sentry',
          },
          {
            label: 'X-Ray',
          },
          {
            label: 'Grafana',
          },
          {
            label: 'Looker Studio',
          },
          {
            label: 'Rundeck',
          },
        ],
      },
      {
        title: 'CI/CD・テスト',
        strength: 'basic',
        items: [
          {
            label: 'CircleCI',
          },
          {
            label: 'Jest',
          },
          {
            label: 'ESLint',
          },
        ],
      },
    ],
  },

  {
    title: 'マネジメント・リーダーシップ',
    groups: [
      {
        title: 'チームマネジメント（強み）',
        strength: 'primary',
        items: [
          {
            label: 'チーム運営',
          },
          {
            label: 'メンバー育成',
          },
          {
            label: '1on1運営',
          },
          {
            label: '採用面接',
          },
          {
            label: '評価制度設計',
          },
        ],
      },
      {
        title: 'プロジェクトマネジメント',
        strength: 'primary',
        items: [
          {
            label: 'プロジェクト管理',
          },
          {
            label: '要件定義',
          },
          {
            label: '技術選定',
          },
          {
            label: 'パフォーマンス改善',
          },
          {
            label: '生産性可視化',
          },
          {
            label: 'AI活用推進',
          },
        ],
      },
      {
        title: '組織改善・教育',
        strength: 'secondary',
        items: [
          {
            label: '勉強会企画',
          },
          {
            label: 'レビュー改善',
          },
          {
            label: 'VBAコーチング',
          },
          {
            label: 'コスト削減',
          },
        ],
      },
    ],
  },
]

// SEO設定
useSeo({
  title: 'Technical Skills - Yuma Mitsuyoshi',
  description:
    'プログラミング言語、フレームワーク、クラウド・AI基盤、マネジメントの詳細。Ruby・Go・TypeScript、Vue.js・React、AWS Bedrock・SageMaker・Azure AI・Google Cloud、BigQuery・Datadog、キャリアラダー設計・開発生産性可視化などの実務経験。',
  keywords:
    'Technical Skills,Ruby,Go,TypeScript,Vue.js,React,AWS Bedrock,SageMaker,BigQuery,Datadog,生成AI,チームマネジメント,DDD,マイクロサービス',
  type: 'website',
  canonical: '/skill',
})

// Analytics tracking
const { $trackEvent } = useNuxtApp()

onMounted(() => {
  $trackEvent('page_view', {
    page: 'skills',
    section: 'technical_skills',
  })
})
</script>
