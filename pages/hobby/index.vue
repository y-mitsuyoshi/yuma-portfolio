<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
    <div class="container mx-auto px-6 max-w-4xl">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div
          class="w-24 h-24 mx-auto bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-xl"
        >
          <font-awesome-icon icon="heart" class="text-white text-2xl" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Hobbies & Interests
        </h1>
        <p class="text-xl text-slate-600">仕事以外で楽しんでいること</p>
      </div>

      <!-- Hobby Cards -->
      <div class="space-y-8">
        <!-- お酒 -->
        <div class="hobby-card">
          <div class="hobby-icon-container whiskey">
            <font-awesome-icon icon="whiskey-glass" class="hobby-icon" />
          </div>
          <div class="hobby-content">
            <h2 class="hobby-title">🥃 お酒</h2>
            <p class="hobby-description">
              特に<strong class="highlight-text">ウイスキーが大好き</strong
              >です！ 好きな銘柄は<span class="brand-highlight"
                >ラガブーリン16年</span
              >で、 スコッチの深い味わいとスモーキーな香りに魅了されています。
            </p>
            <p class="hobby-description">
              ビール、ワイン、ジン、ウォッカ、ラム、日本酒、焼酎など何でも楽しみます。
              お酒を通じて異文化を知ることも好きで、各国の伝統的な飲み物を味わうのが楽しみです。
            </p>
          </div>
        </div>

        <!-- 海外旅行 -->
        <div class="hobby-card">
          <div class="hobby-icon-container travel">
            <font-awesome-icon icon="plane-departure" class="hobby-icon" />
          </div>
          <div class="hobby-content">
            <h2 class="hobby-title">✈️ 海外旅行</h2>
            <p class="hobby-description">
              学生時代は<strong class="highlight-text">バックパッカー</strong
              >として世界各国を旅していました。 これまでに<span
                class="stats-highlight"
                >約30ヶ国</span
              >を訪れ、
              様々な文化や価値観に触れることで人生観が大きく広がりました。
            </p>
            <p class="hobby-description">
              特に好きな国は<span class="country-highlight">ハンガリー</span
              >と<span class="country-highlight">ウズベキスタン</span>。
              ハンガリーはデザートや食べ物がおいしいのが魅力です。ウズベキスタンとハンガリーどちらも建造物が素晴らしかったです。
            </p>
          </div>
        </div>

        <!-- 映画 -->
        <div class="hobby-card">
          <div class="hobby-icon-container movie">
            <font-awesome-icon icon="film" class="hobby-icon" />
          </div>
          <div class="hobby-content">
            <h2 class="hobby-title">🎬 映画</h2>
            <p class="hobby-description">
              映画鑑賞が趣味で、シネコンよりも<strong class="highlight-text"
                >単館系映画館</strong
              >を好みます。
              アート系や実験的な作品、世界各国の映画を幅広く観ています。
            </p>
            <p class="hobby-description">
              好きな監督は<span class="director-highlight"
                >アレハンドロ・ホドロフスキー</span
              >で、 特に「<span class="movie-highlight"
                >ホーリー・マウンテン</span
              >」の幻想的で哲学的な世界観に深く感動しました。
              アレハンドロ・ホドロフスキーはカルト的なところが好きです。
            </p>
          </div>
        </div>

        <!-- ボードゲーム -->
        <div class="hobby-card">
          <div class="hobby-icon-container boardgame">
            <font-awesome-icon icon="chess-board" class="hobby-icon" />
          </div>
          <div class="hobby-content">
            <h2 class="hobby-title">🎲 ボードゲーム</h2>
            <p class="hobby-description">
              たまに<strong class="highlight-text">ボードゲーム</strong
              >を楽しんでいます。
              戦略性とコミュニケーションが融合したアナログゲームの魅力にハマっています。
            </p>
            <p class="hobby-description">
              特に好きなゲームは<span class="game-highlight">バトルライン</span
              >！
              シンプルなルールながら奥深い戦略性があり、毎回異なる展開が楽しめる名作です。
              心理戦と数理的思考の両方が求められるところが魅力的です。
            </p>
          </div>
        </div>
      </div>

      <!-- Fun Facts Section -->
      <div
        class="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
      >
        <h3 class="text-2xl font-bold text-slate-800 mb-6 text-center">
          🌟 Fun Facts
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="fun-fact-item">
            <div class="fun-fact-icon">🗺️</div>
            <div>
              <div class="fun-fact-title">訪問国数</div>
              <div class="fun-fact-value">約30ヶ国</div>
            </div>
          </div>

          <div class="fun-fact-item">
            <div class="fun-fact-icon">🎯</div>
            <div>
              <div class="fun-fact-title">好きな旅行スタイル</div>
              <div class="fun-fact-value">一人旅バックパッカー</div>
            </div>
          </div>

          <div class="fun-fact-item">
            <div class="fun-fact-icon">🎪</div>
            <div>
              <div class="fun-fact-title">映画の好み</div>
              <div class="fun-fact-value">アート系・実験映画</div>
            </div>
          </div>

          <div class="fun-fact-item">
            <div class="fun-fact-icon">🎯</div>
            <div>
              <div class="fun-fact-title">ボードゲーム経験</div>
              <div class="fun-fact-value">戦略系中心</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO設定
useSeo({
  title: 'Hobbies & Interests - Yuma Mitsuyoshi',
  description:
    '仕事以外で楽しんでいること。ウイスキーなどのお酒、約30ヶ国の海外旅行経験、アート系映画鑑賞、ボードゲームなど、個人的な趣味と興味について詳しく紹介。',
  keywords:
    'Hobbies,Interests,Whiskey,Travel,Movies,Board Games,趣味,ウイスキー,海外旅行,映画,ボードゲーム,バックパッカー,ラガブーリン,ホドロフスキー',
  type: 'website',
  canonical: '/hobby',
})

// Analytics tracking
const { $trackEvent } = useNuxtApp()

onMounted(() => {
  $trackEvent('page_view', {
    page: 'hobbies',
    section: 'personal_interests',
  })
})
</script>

<style scoped>
.hobby-card {
  display: flex;
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(241 245 249);
  transition: all 0.3s ease;
  gap: 2rem;
}

.hobby-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.15);
}

.hobby-icon-container {
  flex-shrink: 0;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hobby-icon-container.whiskey {
  background: linear-gradient(135deg, rgb(251 191 36) 0%, rgb(245 158 11) 100%);
}

.hobby-icon-container.travel {
  background: linear-gradient(135deg, rgb(59 130 246) 0%, rgb(29 78 216) 100%);
}

.hobby-icon-container.movie {
  background: linear-gradient(135deg, rgb(168 85 247) 0%, rgb(126 34 206) 100%);
}

.hobby-icon-container.boardgame {
  background: linear-gradient(135deg, rgb(34 197 94) 0%, rgb(21 128 61) 100%);
}

.hobby-icon {
  font-size: 1.5rem;
  color: white;
}

.hobby-content {
  flex: 1;
}

.hobby-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: rgb(30 41 59);
  margin-bottom: 1rem;
}

.hobby-description {
  color: rgb(71 85 105);
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.hobby-description:last-child {
  margin-bottom: 0;
}

.highlight-text {
  color: rgb(59 130 246);
  font-weight: 600;
}

.brand-highlight {
  background: linear-gradient(135deg, rgb(251 191 36), rgb(245 158 11));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 600;
}

.stats-highlight {
  background: linear-gradient(135deg, rgb(59 130 246), rgb(29 78 216));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 600;
}

.country-highlight {
  background: linear-gradient(135deg, rgb(34 197 94), rgb(21 128 61));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 600;
}

.director-highlight {
  background: linear-gradient(135deg, rgb(168 85 247), rgb(126 34 206));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 600;
}

.movie-highlight {
  background: linear-gradient(135deg, rgb(236 72 153), rgb(219 39 119));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 600;
}

.game-highlight {
  background: linear-gradient(135deg, rgb(34 197 94), rgb(21 128 61));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 600;
}

.fun-fact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgb(248 250 252);
  border-radius: 0.75rem;
  border: 1px solid rgb(226 232 240);
}

.fun-fact-icon {
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid rgb(226 232 240);
}

.fun-fact-title {
  font-size: 0.875rem;
  color: rgb(100 116 139);
  font-weight: 500;
}

.fun-fact-value {
  font-size: 1rem;
  color: rgb(30 41 59);
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hobby-card {
    flex-direction: column;
    gap: 1rem;
  }

  .hobby-icon-container {
    align-self: center;
  }

  .hobby-content {
    text-align: center;
  }
}
</style>
