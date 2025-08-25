<template>
  <div class="relative">
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- Background Elements -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"
      ></div>
      <div
        class="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-50 animate-pulse delay-1000"
      ></div>
      <div
        class="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-100 rounded-full opacity-30 animate-bounce delay-500"
      ></div>

      <!-- Main Content -->
      <div class="relative z-10 container mx-auto px-6 text-center">
        <div class="max-w-4xl mx-auto">
          <!-- Profile Image -->
          <div class="mb-8">
            <div
              class="w-32 h-32 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white overflow-hidden"
            >
              <img 
                src="~/assets/icon.png" 
                alt="Yuma Mitsuyoshi" 
                class="w-20 h-20 object-contain"
              />
            </div>
          </div>

          <!-- Name and Title -->
          <h1
            class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Yuma Mitsuyoshi
          </h1>

          <h2 class="text-2xl md:text-3xl text-slate-600 mb-8 font-light">
            Engineering Manager & Full-Stack Developer
          </h2>

          <!-- Description -->
          <p
            class="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            バックエンド開発を軸とした技術マネジメントとフルスタック開発に従事。<br />
            10年以上の開発経験を活かし、チーム育成と技術革新を推進しています。
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <nuxt-link to="/profile" class="hero-btn hero-btn-primary">
              <font-awesome-icon icon="user" class="mr-2" />
              Profile を見る
            </nuxt-link>
            <nuxt-link to="/skill" class="hero-btn hero-btn-secondary">
              <font-awesome-icon icon="laptop-code" class="mr-2" />
              Skills を見る
            </nuxt-link>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div class="stat-card">
              <div class="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div class="text-slate-600">Years Experience</div>
            </div>
            <div class="stat-card">
              <div class="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div class="text-slate-600">Companies</div>
            </div>
            <div class="stat-card">
              <div class="text-3xl font-bold text-pink-600 mb-2">100+</div>
              <div class="text-slate-600">Projects</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <font-awesome-icon icon="chevron-down" class="text-slate-400 text-xl" />
      </div>
    </section>

    <!-- Quick Overview Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h3 class="text-3xl font-bold text-slate-800 mb-12">What I Do</h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Engineering Management -->
            <div class="overview-card">
              <div
                class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto"
              >
                <font-awesome-icon
                  icon="users"
                  class="text-blue-600 text-2xl"
                />
              </div>
              <h4 class="text-xl font-semibold text-slate-800 mb-4">
                Engineering Management
              </h4>
              <p class="text-slate-600">
                チーム育成、技術戦略立案、プロジェクトマネジメントを通じて組織の成長を支援
              </p>
            </div>

            <!-- Backend Development -->
            <div class="overview-card">
              <div
                class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 mx-auto"
              >
                <font-awesome-icon
                  icon="server"
                  class="text-purple-600 text-2xl"
                />
              </div>
              <h4 class="text-xl font-semibold text-slate-800 mb-4">
                Backend Development
              </h4>
              <p class="text-slate-600">
                PHP、Go、Java等を用いたスケーラブルなWebアプリケーション・API開発
              </p>
            </div>

            <!-- Full-Stack Development -->
            <div class="overview-card">
              <div
                class="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6 mx-auto"
              >
                <font-awesome-icon
                  icon="laptop-code"
                  class="text-pink-600 text-2xl"
                />
              </div>
              <h4 class="text-xl font-semibold text-slate-800 mb-4">
                Full-Stack Development
              </h4>
              <p class="text-slate-600">
                フロントエンドからバックエンドまで一貫したWebアプリケーション開発
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- My Creations Section -->
    <section id="creations" class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h3 class="text-3xl font-bold text-slate-800 mb-12">My Creations</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Zatsudan Gacha -->
            <a
              href="https://zatsudan-gacha.app"
              target="_blank"
              rel="noopener noreferrer"
              class="overview-card"
            >
              <div
                class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 mx-auto"
              >
                <font-awesome-icon
                  icon="comments"
                  class="text-green-600 text-2xl"
                />
              </div>
              <h4 class="text-xl font-semibold text-slate-800 mb-4">
                雑談テーマガチャ
              </h4>
              <p class="text-slate-600">
                ランダムな雑談テーマを生成するWebアプリ。会話のきっかけに困ったときに便利です。
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Vue 3 Composition API with auto-import
// Home page
</script>

<style scoped>
/* Hero Buttons */
.hero-btn {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.3s;
  text-decoration: none;
  min-width: 180px;
  justify-content: center;
}

.hero-btn-primary {
  background: linear-gradient(to right, rgb(37 99 235), rgb(147 51 234));
  color: white;
  box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.3);
}

.hero-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 35px -5px rgba(37, 99, 235, 0.4);
}

.hero-btn-secondary {
  background: white;
  color: rgb(37 99 235);
  border: 2px solid rgb(37 99 235);
  box-shadow: 0 4px 15px -3px rgba(37, 99, 235, 0.1);
}

.hero-btn-secondary:hover {
  background: rgb(37 99 235);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 20px 35px -5px rgba(37, 99, 235, 0.3);
}

/* Stats Cards */
.stat-card {
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(241 245 249);
  transition: transform 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
}

/* Overview Cards */
.overview-card {
  padding: 2rem;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(241 245 249);
  transition: all 0.3s;
}

.overview-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px -10px rgba(0, 0, 0, 0.15);
}

/* Animations */
@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-pulse {
  animation: pulse 3s infinite;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>
