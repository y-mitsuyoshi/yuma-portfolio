<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
    <div class="container mx-auto px-6 max-w-6xl">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div
          class="w-24 h-24 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-xl"
        >
          <font-awesome-icon icon="user" class="text-white text-2xl" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Profile
        </h1>
        <p class="text-xl text-slate-600">
          Engineering Manager & Full-Stack Developer
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column - Personal Info -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Quick Facts Card -->
          <div class="profile-card">
            <h2 class="card-title">
              <font-awesome-icon icon="user" class="card-icon text-blue-600" />
              Personal Info
            </h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span class="text-slate-600">📍 奈良県育ち、三重県生まれ</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span class="text-slate-600">🎓 関西学院大学大学院修了</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <span class="text-slate-600">💼 9年以上のエンジニア経験</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span class="text-slate-600"
                  >🎯 Backend Engineer ➜ Manager</span
                >
              </div>
            </div>
          </div>

          <!-- Strengths Card -->
          <div class="profile-card">
            <h2 class="card-title">
              <font-awesome-icon
                icon="chart-line"
                class="card-icon text-green-600"
              />
              Core Strengths
            </h2>
            <div class="space-y-3">
              <div class="strength-item">
                <span class="strength-dot bg-blue-500"></span>
                <span class="strength-text">バックエンド開発</span>
              </div>
              <div class="strength-item">
                <span class="strength-dot bg-purple-500"></span>
                <span class="strength-text">チームマネジメント</span>
              </div>
              <div class="strength-item">
                <span class="strength-dot bg-pink-500"></span>
                <span class="strength-text">技術選定・設計</span>
              </div>
              <div class="strength-item">
                <span class="strength-dot bg-green-500"></span>
                <span class="strength-text">パフォーマンス改善</span>
              </div>
              <div class="strength-item">
                <span class="strength-dot bg-yellow-500"></span>
                <span class="strength-text">フットワーク・柔軟性</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Main Content -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Summary Card -->
          <div class="profile-card">
            <h2 class="card-title">
              <font-awesome-icon icon="user" class="card-icon text-blue-600" />
              Summary
            </h2>
            <div class="text-slate-700 leading-relaxed space-y-4">
              <p>
                1990年三重県生まれ、奈良県育ちのWebエンジニア・エンジニアリングマネージャーです。関西学院大学大学院で計量社会学を専攻し、統計解析とプログラミングの基礎を習得しました。
              </p>
              <p>
                9年以上のエンジニア経験を通じて、<strong class="text-blue-600"
                  >Ruby on Rails を中心としたバックエンド開発</strong
                >に強みを持ちます。
                エンジニアとしてのスキルに加え、チームマネジメント・技術選定・パフォーマンスチューニングを得意とし、
                フットワークの軽さと柔軟性を活かした開発・運用改善に取り組んでいます。
              </p>
              <p>
                現在は<strong class="text-purple-600">株式会社TRUSTDOCK</strong
                >でエンジニアリングマネージャーとして、eKYC・本人確認サービスの開発チーム運営と技術戦略に携わっています。
              </p>
            </div>
          </div>

          <!-- Career Timeline -->
          <div class="profile-card">
            <h2 class="card-title">
              <font-awesome-icon
                icon="briefcase"
                class="card-icon text-purple-600"
              />
              Career Timeline
            </h2>

            <!-- Education -->
            <div class="mb-8">
              <h3 class="section-subtitle">🎓 学歴</h3>
              <div class="timeline-grid">
                <div class="timeline-item">
                  <div class="timeline-date">2015年3月</div>
                  <div class="timeline-content">
                    <div class="timeline-title">
                      関西学院大学大学院社会学研究科 修了
                    </div>
                    <div class="timeline-desc">計量社会学専攻</div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-date">2013年3月</div>
                  <div class="timeline-content">
                    <div class="timeline-title">関西学院大学社会学部 卒業</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Career -->
            <div>
              <h3 class="section-subtitle">💼 職歴</h3>
              <div class="timeline-grid">
                <div class="timeline-item current">
                  <div class="timeline-date">2024年11月 - 現在</div>
                  <div class="timeline-content">
                    <div class="timeline-title">株式会社TRUSTDOCK</div>
                    <div class="timeline-role">
                      エンジニアリングマネージャー
                    </div>
                    <div class="timeline-desc">
                      eKYC・本人確認APIサービスのバックエンドチームにて、エンジニアリングマネージャーとしてチームを牽引。
                    </div>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="timeline-date">2022年1月 - 2024年10月</div>
                  <div class="timeline-content">
                    <div class="timeline-title">株式会社ココナラ</div>
                    <div class="timeline-role">チームマネージャー</div>
                    <div class="timeline-desc">
                      バックエンド開発部にて、新規機能開発や開発基盤改善を担当。後にチームマネージャーとして組織改善やメンバー育成、eKYC導入等のプロジェクトを推進。
                    </div>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="timeline-date">2021年5月 - 2021年12月</div>
                  <div class="timeline-content">
                    <div class="timeline-title">フリーランスエンジニア</div>
                    <div class="timeline-role">株式会社じげん（業務委託）</div>
                    <div class="timeline-desc">
                      Ruby on
                      Railsを用いたアルバイト求人サイトの保守・機能開発に従事。
                    </div>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="timeline-date">2019年1月 - 2021年4月</div>
                  <div class="timeline-content">
                    <div class="timeline-title">株式会社MERY</div>
                    <div class="timeline-role">エンジニア</div>
                    <div class="timeline-desc">
                      女性向けメディアの許諾管理システムを中心に、リファクタリング(DDD/GraphQL)・保守・新規開発(Go)を担当。PMとしてInstagram連携システムの構築も主導。
                    </div>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="timeline-date">2016年12月 - 2018年12月</div>
                  <div class="timeline-content">
                    <div class="timeline-title">
                      株式会社ミンカブ・ジ・インフォノイド
                    </div>
                    <div class="timeline-role">
                      エンジニア / メインエンジニア
                    </div>
                    <div class="timeline-desc">
                      金融情報サービスのデータプロバイダー移行、ニュースサイト刷新、Vue.js導入によるモダン化、Pythonでのスパムフィルター開発など、複数のプロジェクトを推進。
                    </div>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="timeline-date">2015年4月 - 2016年11月</div>
                  <div class="timeline-content">
                    <div class="timeline-title">SIer企業</div>
                    <div class="timeline-role">システムエンジニア</div>
                    <div class="timeline-desc">
                      SIerとして、在庫管理・駐車場管理・基幹システムなど、多様な顧客のWebアプリケーション開発・テスト・保守を経験。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Philosophy & Approach -->
          <div class="profile-card">
            <h2 class="card-title">
              <font-awesome-icon
                icon="laptop-code"
                class="card-icon text-green-600"
              />
              Engineering Philosophy & Expertise
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 class="section-subtitle">🔧 技術的専門性</h3>
                <ul class="philosophy-list">
                  <li>
                    <strong>Ruby on Rails</strong> -
                    9年以上の実務経験、API設計・開発・運用
                  </li>
                  <li>
                    <strong>マイクロサービス</strong> -
                    gRPC、DDD、クリーンアーキテクチャ
                  </li>
                  <li>
                    <strong>パフォーマンス最適化</strong> -
                    DB設計、スロークエリ改善、負荷対策
                  </li>
                  <li>
                    <strong>モニタリング基盤</strong> -
                    Sentry、X-Ray、Grafana導入
                  </li>
                  <li>
                    <strong>CI/CD改善</strong> - CircleCI最適化、コスト4割削減
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="section-subtitle">👥 マネジメント実績</h3>
                <ul class="philosophy-list">
                  <li>
                    <strong>チーム運営</strong> -
                    スクラム開発導入、ベロシティ管理
                  </li>
                  <li>
                    <strong>メンバー育成</strong> - 1on1改善、技術勉強会企画
                  </li>
                  <li>
                    <strong>プロセス改善</strong> - レビュー品質向上、開発効率化
                  </li>
                  <li>
                    <strong>プロジェクト管理</strong> -
                    要件定義〜リリースまで一貫対応
                  </li>
                  <li>
                    <strong>組織改善</strong> - 採用面接、人材育成、文化醸成
                  </li>
                </ul>
              </div>
            </div>

            <div class="mt-8">
              <h3 class="section-subtitle">💡 特徴的なプロジェクト経験</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="project-highlight">
                  <div class="project-icon">🏗️</div>
                  <div>
                    <div class="project-title">バッチ処理基盤刷新</div>
                    <div class="project-desc">
                      crontab → Rundeck移行で運用性大幅改善
                    </div>
                  </div>
                </div>

                <div class="project-highlight">
                  <div class="project-icon">🤖</div>
                  <div>
                    <div class="project-title">AI機能実装</div>
                    <div class="project-desc">
                      ChatGPT活用、ストリーミング対応
                    </div>
                  </div>
                </div>

                <div class="project-highlight">
                  <div class="project-icon">📊</div>
                  <div>
                    <div class="project-title">モニタリング改善</div>
                    <div class="project-desc">
                      X-Ray・Sentry導入、可視化ダッシュボード構築
                    </div>
                  </div>
                </div>

                <div class="project-highlight">
                  <div class="project-icon">🔄</div>
                  <div>
                    <div class="project-title">DDD・GraphQL導入</div>
                    <div class="project-desc">
                      レガシーシステムのモダン化リファクタリング
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(241 245 249);
  transition: all 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 35px -5px rgba(0, 0, 0, 0.15);
}

.card-title {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(30 41 59);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgb(241 245 249);
}

.card-icon {
  margin-right: 0.75rem;
  font-size: 1.25rem;
}

.section-subtitle {
  font-size: 1.125rem;
  font-weight: 600;
  color: rgb(51 65 85);
  margin-bottom: 1rem;
}

.strength-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
}

.strength-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  margin-right: 0.75rem;
  flex-shrink: 0;
}

.strength-text {
  color: rgb(71 85 105);
  font-weight: 500;
}

.timeline-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-left: 2px solid rgb(226 232 240);
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 1.75rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgb(148 163 184);
}

.timeline-item.current::before {
  background: rgb(34 197 94);
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2);
}

.timeline-item.current {
  border-left-color: rgb(34 197 94);
}

.timeline-date {
  color: rgb(100 116 139);
  font-weight: 500;
  font-size: 0.875rem;
  padding-left: 1rem;
}

.timeline-content {
  padding-left: 1rem;
}

.timeline-title {
  font-weight: 600;
  color: rgb(30 41 59);
  margin-bottom: 0.25rem;
}

.timeline-role {
  color: rgb(59 130 246);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.timeline-desc {
  color: rgb(100 116 139);
  line-height: 1.6;
  font-size: 0.9rem;
}

.philosophy-list {
  list-style: none;
  padding: 0;
}

.philosophy-list li {
  display: flex;
  align-items: flex-start;
  color: rgb(71 85 105);
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.philosophy-list li::before {
  content: '✓';
  color: rgb(34 197 94);
  font-weight: bold;
  margin-right: 0.75rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.project-highlight {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(59, 130, 246, 0.05);
  border-radius: 0.75rem;
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.project-icon {
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
  flex-shrink: 0;
}

.project-title {
  font-weight: 600;
  color: rgb(30 41 59);
  margin-bottom: 0.25rem;
}

.project-desc {
  color: rgb(100 116 139);
  font-size: 0.875rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .timeline-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .timeline-date {
    padding-left: 1rem;
    margin-bottom: 0.5rem;
  }

  .timeline-content {
    padding-left: 1rem;
  }
}
</style>

<script setup>
// Analytics tracking
const { $trackEvent } = useNuxtApp()

onMounted(() => {
  $trackEvent('page_view', {
    page: 'profile',
    section: 'personal_info'
  })
})

// Meta and SEO
useSeoMeta({
  title: 'Profile - Yuma Mitsuyoshi',
  description: 'Engineering Manager & Full-Stack Developer のプロフィール詳細'
})
</script>
