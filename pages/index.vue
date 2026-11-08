<template>
  <div>
    <!-- Hero -->
    <section class="border-b border-line">
      <div
        class="container-page grid gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:gap-20"
      >
        <div>
          <p class="label-mono flex items-center gap-3">
            <span class="h-px w-8 bg-accent" aria-hidden="true"></span>
            Portfolio / 2026
          </p>

          <h1
            class="title-display mt-8 text-[clamp(3.25rem,10vw,7rem)] leading-[0.9]"
          >
            Yuma<br />Mitsuyoshi
          </h1>

          <p
            class="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft"
          >
            Engineering Manager &amp; Full-Stack Developer
          </p>

          <p class="mt-6 max-w-2xl text-[15px] leading-8 text-ink-soft">
            バックエンド開発を軸に、技術マネジメントと組織づくりに従事。
            生成AI活用とデータに基づく改善で、チームの成長と技術革新を推進しています。
          </p>

          <div class="mt-10 flex flex-wrap gap-3">
            <nuxt-link
              to="/profile"
              class="btn btn-solid"
              @click="trackProfileClick"
            >
              Profile を見る
              <span aria-hidden="true">→</span>
            </nuxt-link>
            <nuxt-link
              to="/skill"
              class="btn btn-outline"
              @click="trackSkillClick"
            >
              Skills を見る
            </nuxt-link>
          </div>
        </div>

        <aside class="mx-auto w-full max-w-[280px] lg:mx-0 lg:ml-auto">
          <div class="relative">
            <div
              class="absolute -bottom-3 -right-3 h-full w-full border border-accent"
              aria-hidden="true"
            ></div>
            <figure class="relative border border-ink bg-paper-raised p-3">
              <img
                src="~/assets/icon.png"
                alt="Yuma Mitsuyoshi"
                width="480"
                height="527"
                fetchpriority="high"
                class="aspect-[4/5] w-full object-contain object-top"
              />
              <figcaption
                class="mt-3 flex items-center justify-between border-t border-line pt-3"
              >
                <span class="label-mono">Based in Japan</span>
                <span class="font-mono text-[10px] text-accent">EM / DEV</span>
              </figcaption>
            </figure>
          </div>
        </aside>
      </div>

      <div class="container-page">
        <dl class="grid border-t border-line sm:grid-cols-3">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="border-b border-line py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0"
          >
            <dt class="label-mono">{{ stat.label }}</dt>
            <dd class="title-display mt-2 text-5xl">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- What I Do -->
    <section class="border-b border-line">
      <div class="container-page py-20">
        <div
          class="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p class="label-mono">01 / What I do</p>
            <h2 class="title-display mt-4 text-5xl sm:text-6xl">
              Three ways I contribute.
            </h2>
          </div>
          <p class="max-w-sm text-sm leading-7 text-ink-soft">
            開発・マネジメント・AI活用を横断し、チームとプロダクトの前進を支えています。
          </p>
        </div>

        <div class="mt-14 grid border-t border-line md:grid-cols-3">
          <article
            v-for="(service, index) in services"
            :key="service.title"
            class="group border-b border-line py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:pt-8 md:pb-0 md:first:pl-0 md:last:border-r-0"
          >
            <div class="flex items-center justify-between">
              <span class="label-mono">0{{ index + 1 }}</span>
              <font-awesome-icon
                :icon="service.icon"
                class="h-5 w-5 text-ink-muted transition-colors group-hover:text-accent"
              />
            </div>
            <h3 class="mt-8 text-xl font-semibold tracking-tight">
              {{ service.title }}
            </h3>
            <p class="mt-3 text-sm leading-7 text-ink-soft">
              {{ service.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Selected Work -->
    <section
      id="creations"
      class="scroll-mt-20 border-b border-line bg-paper-raised"
    >
      <div class="container-page py-20">
        <div
          class="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p class="label-mono">02 / Selected work</p>
            <h2 class="title-display mt-4 text-5xl sm:text-6xl">
              Things I've built.
            </h2>
          </div>
          <p class="max-w-sm text-sm leading-7 text-ink-soft">
            現場の課題から生まれた、プロダクトと実験的な取り組み。
          </p>
        </div>

        <div class="mt-12 border-t border-line">
          <a
            v-for="(project, index) in projects"
            :key="project.title"
            :href="project.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group grid gap-4 border-b border-line py-8 transition-colors hover:bg-paper md:grid-cols-[64px_minmax(0,1fr)_auto] md:gap-8"
          >
            <span class="label-mono pt-1">0{{ index + 1 }}</span>
            <div>
              <h3
                class="text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent"
              >
                {{ project.title }}
              </h3>
              <p class="mt-2 max-w-2xl text-sm leading-7 text-ink-soft">
                {{ project.description }}
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="tag in project.tags" :key="tag" class="tag">
                  {{ tag }}
                </span>
              </div>
            </div>
            <span
              class="grid h-10 w-10 place-items-center border border-line-strong text-sm transition-colors group-hover:border-accent group-hover:text-accent"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeo({
  title: 'Yuma Mitsuyoshi - Engineering Manager & Full-Stack Developer',
  description:
    'バックエンド開発を軸とした技術マネジメント・組織づくりに従事。Ruby・Go・TypeScriptによる開発と生成AI活用、開発生産性の可視化を通じた技術革新を推進しています。',
  keywords:
    'Yuma Mitsuyoshi,Engineering Manager,Backend Developer,Ruby,Go,TypeScript,Vue.js,React,生成AI,AWS,チームマネジメント,技術マネジメント',
  type: 'website',
})

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Companies', value: '5+' },
  { label: 'Projects', value: '100+' },
]

const services = [
  {
    title: 'Engineering Management',
    description:
      '複数チームの管掌、評価制度設計、開発生産性の可視化を通じた組織の成長支援',
    icon: 'users',
  },
  {
    title: 'Backend Development',
    description:
      'Ruby、Go、TypeScript等を用いたスケーラブルなWebアプリケーション・API開発',
    icon: 'server',
  },
  {
    title: 'AI & Data Utilization',
    description: '生成AI活用とデータ基盤による業務改善・効率化',
    icon: 'chart-line',
  },
]

const projects = [
  {
    title: 'AXIOM',
    href: 'https://axiom-qa.dev',
    description:
      '日本語の仕様やURLからPlaywright・MaestroのE2Eテストを自動生成・自律実行・自己修復できるセルフホスト型AIテスト基盤。',
    tags: ['E2E Testing', 'AI', 'Self-hosted'],
  },
  {
    title: '雑談テーマガチャ',
    href: 'https://zatsudan-gacha.app',
    description:
      'ランダムな雑談テーマを生成するWebアプリ。会話のきっかけに困ったときに便利です。',
    tags: ['Web App'],
  },
]

const { $trackEvent } = useNuxtApp()

const trackProfileClick = () => {
  $trackEvent('hero_profile_click', {
    button_text: 'Profile を見る',
    section: 'hero',
  })
}

const trackSkillClick = () => {
  $trackEvent('hero_skill_click', {
    button_text: 'Skills を見る',
    section: 'hero',
  })
}

onMounted(() => {
  $trackEvent('page_engagement', {
    page: 'home',
    action: 'hero_section_viewed',
  })
})
</script>
