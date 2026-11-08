<template>
  <div class="container-page py-14 md:py-20">
    <header class="border-b border-line pb-10">
      <p class="label-mono">05 / Hobbies</p>
      <div
        class="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <h1 class="title-display text-6xl sm:text-7xl md:text-8xl">
            Hobbies
          </h1>
          <p class="mt-4 text-sm text-ink-soft">仕事以外で楽しんでいること</p>
        </div>
        <p class="max-w-sm text-sm leading-7 text-ink-soft">
          お酒、旅、映画、ボードゲーム。仕事の外側にある好奇心が、
          ものの見方やチームづくりにもつながっています。
        </p>
      </div>
    </header>

    <div>
      <!-- お酒 -->
      <article
        class="grid gap-6 border-b border-line py-10 md:grid-cols-[64px_220px_minmax(0,1fr)] md:gap-10"
      >
        <span class="label-mono">01</span>
        <div class="flex items-start gap-4">
          <span
            class="grid h-11 w-11 shrink-0 place-items-center border border-line-strong text-ink-muted"
          >
            <font-awesome-icon icon="whiskey-glass" class="h-4 w-4" />
          </span>
          <div>
            <h2 class="text-xl font-semibold tracking-tight">お酒</h2>
            <p class="label-mono mt-1 text-[10px]">Whiskey &amp; Drinks</p>
          </div>
        </div>
        <div class="space-y-4 text-[15px] leading-8 text-ink-soft">
          <p>
            特に<strong class="font-medium text-accent"
              >ウイスキーが大好き</strong
            >です。好きな銘柄は
            <strong class="font-medium text-accent">ラガブーリン16年</strong
            >で、スコッチの深い味わいとスモーキーな香りに魅了されています。
          </p>
          <p>
            ビール、ワイン、ジン、ウォッカ、ラム、日本酒、焼酎など何でも楽しみます。
            お酒を通じて異文化を知ることも好きで、各国の伝統的な飲み物を味わうのが
            楽しみです。
          </p>
        </div>
      </article>

      <!-- 海外旅行 -->
      <article
        class="grid gap-6 border-b border-line py-10 md:grid-cols-[64px_220px_minmax(0,1fr)] md:gap-10"
      >
        <span class="label-mono">02</span>
        <div class="flex items-start gap-4">
          <span
            class="grid h-11 w-11 shrink-0 place-items-center border border-line-strong text-ink-muted"
          >
            <font-awesome-icon icon="plane-departure" class="h-4 w-4" />
          </span>
          <div>
            <h2 class="text-xl font-semibold tracking-tight">海外旅行</h2>
            <p class="label-mono mt-1 text-[10px]">Travel</p>
          </div>
        </div>
        <div class="space-y-4 text-[15px] leading-8 text-ink-soft">
          <p>
            学生時代は<strong class="font-medium text-accent"
              >バックパッカー</strong
            >として世界各国を旅していました。これまでに
            <strong class="font-medium text-accent">約30ヶ国</strong
            >を訪れ、様々な文化や価値観に触れることで人生観が大きく広がりました。
          </p>
          <p>
            特に好きな国は
            <strong class="font-medium text-accent">ハンガリー</strong>と
            <strong class="font-medium text-accent">ウズベキスタン</strong>。
            ハンガリーはデザートや食べ物がおいしいのが魅力です。ウズベキスタンと
            ハンガリーどちらも建造物が素晴らしかったです。
          </p>
        </div>
      </article>

      <!-- 映画 -->
      <article
        class="grid gap-6 border-b border-line py-10 md:grid-cols-[64px_220px_minmax(0,1fr)] md:gap-10"
      >
        <span class="label-mono">03</span>
        <div class="flex items-start gap-4">
          <span
            class="grid h-11 w-11 shrink-0 place-items-center border border-line-strong text-ink-muted"
          >
            <font-awesome-icon icon="film" class="h-4 w-4" />
          </span>
          <div>
            <h2 class="text-xl font-semibold tracking-tight">映画</h2>
            <p class="label-mono mt-1 text-[10px]">Cinema</p>
          </div>
        </div>
        <div class="space-y-4 text-[15px] leading-8 text-ink-soft">
          <p>
            映画鑑賞が趣味で、シネコンよりも
            <strong class="font-medium text-accent">単館系映画館</strong
            >を好みます。アート系や実験的な作品、世界各国の映画を幅広く観ています。
          </p>
          <p>
            好きな監督は
            <strong class="font-medium text-accent"
              >アレハンドロ・ホドロフスキー</strong
            >で、特に「
            <strong class="font-medium text-accent">ホーリー・マウンテン</strong
            >」の幻想的で哲学的な世界観に深く感動しました。
            アレハンドロ・ホドロフスキーはカルト的なところが好きです。
          </p>
        </div>
      </article>

      <!-- ボードゲーム -->
      <article
        class="grid gap-6 border-b border-line py-10 md:grid-cols-[64px_220px_minmax(0,1fr)] md:gap-10"
      >
        <span class="label-mono">04</span>
        <div class="flex items-start gap-4">
          <span
            class="grid h-11 w-11 shrink-0 place-items-center border border-line-strong text-ink-muted"
          >
            <font-awesome-icon icon="chess-board" class="h-4 w-4" />
          </span>
          <div>
            <h2 class="text-xl font-semibold tracking-tight">ボードゲーム</h2>
            <p class="label-mono mt-1 text-[10px]">Board Games</p>
          </div>
        </div>
        <div class="space-y-4 text-[15px] leading-8 text-ink-soft">
          <p>
            たまに<strong class="font-medium text-accent">ボードゲーム</strong
            >を楽しんでいます。戦略性とコミュニケーションが融合した
            アナログゲームの魅力にハマっています。
          </p>
          <p>
            特に好きなゲームは
            <strong class="font-medium text-accent">バトルライン</strong>！
            シンプルなルールながら奥深い戦略性があり、毎回異なる展開が楽しめる
            名作です。心理戦と数理的思考の両方が求められるところが魅力的です。
          </p>
        </div>
      </article>
    </div>

    <section class="mt-16">
      <div class="flex items-baseline justify-between gap-4">
        <h2 class="label-mono">Quick notes</h2>
        <span class="label-mono">05</span>
      </div>
      <dl class="mt-4 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="fact in funFacts"
          :key="fact.label"
          class="border-b border-line py-6 sm:border-r sm:px-6 sm:first:pl-0 sm:even:border-r-0 sm:last:border-r-0 lg:border-b-0 lg:even:border-r lg:last:border-r-0"
        >
          <dt class="label-mono">{{ fact.label }}</dt>
          <dd class="mt-2 text-lg font-medium">{{ fact.value }}</dd>
        </div>
      </dl>
    </section>
  </div>
</template>

<script setup>
useSeo({
  title: 'Hobbies & Interests - Yuma Mitsuyoshi',
  description:
    '仕事以外で楽しんでいること。ウイスキーなどのお酒、約30ヶ国の海外旅行経験、アート系映画鑑賞、ボードゲームなど、個人的な趣味と興味について詳しく紹介。',
  keywords:
    'Hobbies,Interests,Whiskey,Travel,Movies,Board Games,趣味,ウイスキー,海外旅行,映画,ボードゲーム,バックパッカー,ラガブーリン,ホドロフスキー',
  type: 'website',
  canonical: '/hobby',
})

const funFacts = [
  { label: '訪問国数', value: '約30ヶ国' },
  { label: '旅行スタイル', value: '一人旅バックパッカー' },
  { label: '映画の好み', value: 'アート系・実験映画' },
  { label: 'ボードゲーム', value: '戦略系中心' },
]

const { $trackEvent } = useNuxtApp()

onMounted(() => {
  $trackEvent('page_view', {
    page: 'hobbies',
    section: 'personal_interests',
  })
})
</script>
