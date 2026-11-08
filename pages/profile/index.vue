<template>
  <div class="container-page py-14 md:py-20">
    <header class="border-b border-line pb-10">
      <p class="label-mono">02 / Profile</p>
      <div
        class="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <h1 class="title-display text-6xl sm:text-7xl md:text-8xl">
            Profile
          </h1>
          <p class="mt-4 text-sm text-ink-soft">
            Engineering Manager &amp; Full-Stack Developer
          </p>
        </div>
        <p class="max-w-sm text-sm leading-7 text-ink-soft">
          三重県生まれ、奈良県育ち。バックエンド開発を原点に、技術と組織の両面から
          チームの成果を引き出す仕事をしています。
        </p>
      </div>
    </header>

    <div class="mt-12 grid gap-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
      <aside class="space-y-10">
        <section>
          <h2 class="label-mono">Personal Info</h2>
          <dl class="mt-4 border-t border-line">
            <div
              v-for="fact in personalInfo"
              :key="fact.label"
              class="flex items-start justify-between gap-6 border-b border-line py-3"
            >
              <dt
                class="shrink-0 font-mono text-[10px] uppercase tracking-wider text-ink-muted"
              >
                {{ fact.label }}
              </dt>
              <dd class="text-right text-sm leading-6 text-ink">
                {{ fact.value }}
              </dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 class="label-mono">Core Strengths</h2>
          <ul class="mt-4 border-t border-line">
            <li
              v-for="strength in strengths"
              :key="strength"
              class="flex items-center gap-3 border-b border-line py-3 text-sm text-ink-soft"
            >
              <span class="h-1.5 w-1.5 bg-accent" aria-hidden="true"></span>
              {{ strength }}
            </li>
          </ul>
        </section>

        <section>
          <h2 class="label-mono">Certifications</h2>
          <ul class="mt-4 border-t border-line">
            <li
              v-for="cert in certifications"
              :key="cert.name"
              class="border-b border-line py-3"
            >
              <p class="text-sm font-medium leading-6">{{ cert.name }}</p>
              <p class="mt-1 font-mono text-[10px] text-ink-muted">
                {{ cert.issuer }} / {{ cert.year }}
              </p>
            </li>
          </ul>
        </section>
      </aside>

      <div class="space-y-14">
        <section>
          <div
            class="flex items-baseline justify-between gap-4 border-b border-line pb-4"
          >
            <h2 class="text-2xl font-semibold tracking-tight">Summary</h2>
            <span class="label-mono">01</span>
          </div>
          <div class="mt-6 space-y-5 text-[15px] leading-8 text-ink-soft">
            <p>
              三重県生まれ、奈良県育ちのWebエンジニア・開発グループマネージャーです。
              関西学院大学大学院で計量社会学を専攻し、統計解析とプログラミングの基礎を
              習得しました。
            </p>
            <p>
              10年以上のエンジニア経験を通じて、<strong
                class="font-semibold text-ink"
                >Ruby / Go を中心としたバックエンド開発</strong
              >に強みを持ちます。生成AI活用による業務改善、データに基づく開発生産性の
              可視化、チームマネジメント・技術選定・パフォーマンスチューニングを
              得意としています。
            </p>
            <p>
              現在は<strong class="font-semibold text-ink"
                >株式会社TRUSTDOCK</strong
              >で開発組織のマネージャーとして、複数チームの技術戦略と組織運営に
              携わっています。
            </p>
          </div>
        </section>

        <section>
          <div
            class="flex items-baseline justify-between gap-4 border-b border-line pb-4"
          >
            <h2 class="text-2xl font-semibold tracking-tight">
              Career Timeline
            </h2>
            <span class="label-mono">02</span>
          </div>

          <div class="mt-8">
            <h3 class="label-mono">Education</h3>
            <div class="mt-3 border-t border-line">
              <div
                v-for="item in education"
                :key="item.title"
                class="grid gap-2 border-b border-line py-4 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6"
              >
                <p class="font-mono text-[11px] text-ink-muted">
                  {{ item.period }}
                </p>
                <div>
                  <p class="text-sm font-medium">{{ item.title }}</p>
                  <p v-if="item.detail" class="mt-1 text-sm text-ink-soft">
                    {{ item.detail }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h3 class="label-mono">Experience</h3>
            <div class="mt-3 border-t border-line">
              <div
                v-for="item in career"
                :key="item.company"
                class="grid gap-2 border-b border-line py-4 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6"
              >
                <p class="font-mono text-[11px] text-ink-muted">
                  {{ item.period }}
                </p>
                <div>
                  <div class="flex flex-wrap items-center gap-2">
                    <p class="text-sm font-medium">{{ item.company }}</p>
                    <span
                      v-if="item.current"
                      class="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent"
                    >
                      <span class="h-1 w-1 bg-accent" aria-hidden="true"></span>
                      Current
                    </span>
                  </div>
                  <p class="mt-1 text-sm text-ink-soft">{{ item.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            class="flex items-baseline justify-between gap-4 border-b border-line pb-4"
          >
            <h2 class="text-2xl font-semibold tracking-tight">
              Engineering Philosophy &amp; Expertise
            </h2>
            <span class="label-mono">03</span>
          </div>

          <div class="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <h3 class="label-mono">Technical Expertise</h3>
              <ul class="mt-4 border-t border-line">
                <li
                  v-for="item in technicalExpertise"
                  :key="item.title"
                  class="border-b border-line py-3"
                >
                  <p class="text-sm font-medium">{{ item.title }}</p>
                  <p class="mt-1 text-sm leading-6 text-ink-soft">
                    {{ item.description }}
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="label-mono">Management</h3>
              <ul class="mt-4 border-t border-line">
                <li
                  v-for="item in management"
                  :key="item.title"
                  class="border-b border-line py-3"
                >
                  <p class="text-sm font-medium">{{ item.title }}</p>
                  <p class="mt-1 text-sm leading-6 text-ink-soft">
                    {{ item.description }}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="label-mono">Selected project experience</h3>
            <div
              class="mt-4 grid gap-px border border-line bg-line sm:grid-cols-2"
            >
              <div
                v-for="(project, index) in projectHighlights"
                :key="project.title"
                class="bg-paper p-5"
              >
                <span class="label-mono">0{{ index + 1 }}</span>
                <h4 class="mt-4 text-sm font-semibold">{{ project.title }}</h4>
                <p class="mt-2 text-sm leading-6 text-ink-soft">
                  {{ project.description }}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeo({
  title: 'Profile - Yuma Mitsuyoshi',
  description:
    '開発組織のマネージャー兼バックエンドエンジニアのプロフィール。10年以上の実務経験でRuby・Goを中心に開発し、生成AI活用、開発生産性の可視化、キャリアラダー設計を得意とします。',
  keywords:
    'Profile,Yuma Mitsuyoshi,Engineering Manager,Career,プロフィール,経歴,Ruby,Go,バックエンド開発,チームマネジメント,生成AI,TRUSTDOCK,ココナラ,MERY',
  type: 'website',
  canonical: '/profile',
})

const personalInfo = [
  { label: 'Born', value: '三重県' },
  { label: 'Raised', value: '奈良県' },
  { label: 'Education', value: '関西学院大学大学院' },
  { label: 'Experience', value: '10年以上' },
]

const strengths = [
  'バックエンド開発',
  'チームマネジメント',
  '技術選定・設計',
  'パフォーマンス改善',
  'フットワーク・柔軟性',
]

const certifications = [
  {
    name: 'Professional Cloud Architect',
    issuer: 'Google Cloud',
    year: '2026',
  },
  {
    name: 'Generative AI Leader',
    issuer: 'Google Cloud',
    year: '2026',
  },
]

const education = [
  {
    period: '2015.03',
    title: '関西学院大学大学院社会学研究科 修了',
    detail: '計量社会学専攻',
  },
  {
    period: '2013.03',
    title: '関西学院大学社会学部 卒業',
  },
]

const career = [
  {
    period: '2024.11 — NOW',
    company: '株式会社TRUSTDOCK',
    role: '開発グループマネージャー',
    current: true,
  },
  {
    period: '2022.01 — 2024.10',
    company: '株式会社ココナラ',
    role: 'チームマネージャー',
  },
  {
    period: '2021.05 — 2021.12',
    company: '副業エンジニア',
    role: '業務委託',
  },
  {
    period: '2019.01 — 2021.12',
    company: '株式会社MERY',
    role: 'エンジニア',
  },
  {
    period: '2016.12 — 2018.12',
    company: '株式会社ミンカブ・ジ・インフォノイド',
    role: 'エンジニア',
  },
  {
    period: '2015.04 — 2016.11',
    company: 'SIer企業',
    role: 'システムエンジニア',
  },
]

const technicalExpertise = [
  {
    title: 'Ruby / Go',
    description: '10年以上の実務経験、API設計・開発・運用',
  },
  {
    title: '生成AI活用',
    description: '業務改善・社内へのAI導入推進',
  },
  {
    title: 'データ基盤・可視化',
    description: 'BigQuery集約、Looker Studio可視化、DORA計測',
  },
  {
    title: 'マイクロサービス',
    description: 'gRPC、GraphQL、DDD、クリーンアーキテクチャ',
  },
  {
    title: '安定運用・監視',
    description:
      'Datadog、Sentry、パフォーマンス改善、着実なデリバリーと安定運用',
  },
]

const management = [
  {
    title: '組織運営',
    description: '複数チームの管掌、スクラム開発導入',
  },
  {
    title: '制度設計・育成',
    description: 'IC/EMキャリアラダー策定、1on1・評価運用、面接官育成',
  },
  {
    title: 'プロセス改善',
    description: 'レビュー改善、開発生産性の可視化',
  },
  {
    title: 'プロジェクト管理',
    description: '要件定義〜リリースまで一貫対応、新規パッケージ開発主導',
  },
]

const projectHighlights = [
  {
    title: '生成AI活用による業務改善',
    description: '業務へのAI導入・改善推進、運用効率化に貢献',
  },
  {
    title: '開発生産性の可視化',
    description: 'GitHub・管理データを集約しリードタイム等を可視化',
  },
  {
    title: '評価制度・組織づくり',
    description: 'IC/EMキャリアラダー策定、評価・運用と面接体制の拡大',
  },
  {
    title: '確実なデリバリー・安定運用',
    description: '大規模サービスの安定運用と着実な改善に貢献',
  },
]

const { $trackEvent } = useNuxtApp()

onMounted(() => {
  $trackEvent('page_view', {
    page: 'profile',
    section: 'personal_info',
  })
})
</script>
