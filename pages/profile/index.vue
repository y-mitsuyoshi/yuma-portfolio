<template>
  <div>
    <h1 class="text-4xl font-bold text-center mb-8">Profile</h1>
    <div class="space-y-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 flex items-center">
          <font-awesome-icon icon="user" class="mr-3 text-gray-500" />
          Summary
        </h2>
        <p class="text-gray-700 leading-relaxed">
          1990年三重県生まれ、奈良県育ちのWebエンジニア・エンジニアリングマネージャーです。関西学院大学大学院で計量社会学を専攻し、統計解析とプログラミングの基礎を習得しました。
          <br/><br/>
          9年以上のエンジニア経験を通じて、Ruby on Rails を中心としたバックエンド開発に強みを持ちます。
          エンジニアとしてのスキルに加え、チームマネジメント・技術選定・パフォーマンスチューニングを得意とし、
          フットワークの軽さと柔軟性を活かした開発・運用改善に取り組んでいます。
          <br/><br/>
          現在は株式会社TRUSTDOCKでエンジニアリングマネージャーとして、eKYC・本人確認サービスの開発チーム運営と技術戦略に携わっています。
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 flex items-center">
          <font-awesome-icon icon="briefcase" class="mr-3 text-gray-500" />
          経歴・実績
        </h2>
        <div class="text-gray-700 leading-relaxed">
          <div class="mb-4">
            <h3 class="text-lg font-semibold text-gray-800">学歴</h3>
            <p>2013年3月 関西学院大学社会学部 卒業</p>
            <p>2015年3月 関西学院大学大学院社会学研究科 修了</p>
          </div>

          <div class="mb-4">
            <h3 class="text-lg font-semibold text-gray-800">職歴</h3>
            <p><strong>2024年11月 - 現在</strong> 株式会社TRUSTDOCK（エンジニアリングマネージャー）</p>
            <p class="text-sm text-gray-600 ml-4">eKYC・本人確認サービスの開発チーム運営・技術戦略策定</p>

            <p><strong>2022年1月 - 2024年10月</strong> 株式会社ココナラ（チームマネージャー）</p>
            <p class="text-sm text-gray-600 ml-4">スキルマーケット「ココナラ」の開発チーム運営・バックエンド開発</p>

            <p><strong>2021年5月 - 2021年12月</strong> フリーランスエンジニア</p>
            <p class="text-sm text-gray-600 ml-4">Ruby on Rails / Vue.js を用いたWebアプリケーション開発</p>

            <p><strong>2019年1月 - 2021年4月</strong> 株式会社MERY（エンジニア）</p>
            <p class="text-sm text-gray-600 ml-4">女性向けライフスタイルメディア「MERY」の開発・運用</p>

            <p><strong>2016年12月 - 2018年12月</strong> 株式会社ミンカブ・ジ・インフォノイド（エンジニア）</p>
            <p class="text-sm text-gray-600 ml-4">金融情報サービスの開発・データ分析基盤構築</p>

            <p><strong>2015年4月 - 2016年11月</strong> SIer企業（システムエンジニア）</p>
            <p class="text-sm text-gray-600 ml-4">官公庁向けシステム開発・保守</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 flex items-center">
          <font-awesome-icon icon="laptop-code" class="mr-3 text-gray-500" />
          エンジニアとしての強み・志向
        </h2>
        <div class="text-gray-700 leading-relaxed">
          <div class="mb-4">
            <h3 class="text-lg font-semibold text-gray-800">技術的強み</h3>
            <ul class="list-disc list-inside ml-4 space-y-1">
              <li><strong>バックエンド開発</strong>：Ruby on Rails を用いたAPI設計・開発・運用（主要領域）</li>
              <li><strong>パフォーマンスチューニング</strong>：DB最適化、レスポンス改善、負荷対策</li>
              <li><strong>技術選定・アーキテクチャ設計</strong>：サービス要件に応じた最適な技術スタック選択</li>
              <li><strong>フロントエンド・インフラ</strong>：Vue.js / AWS 等も扱えるが補助的な位置づけ</li>
            </ul>
          </div>

          <div class="mb-4">
            <h3 class="text-lg font-semibold text-gray-800">マネジメント・ヒューマンスキル</h3>
            <ul class="list-disc list-inside ml-4 space-y-1">
              <li><strong>チームマネジメント</strong>：開発チームの運営・メンバー育成・目標設定</li>
              <li><strong>フットワークの軽さ</strong>：迅速な課題対応と柔軟な方針転換</li>
              <li><strong>柔軟性</strong>：変化する要件や技術トレンドへの適応力</li>
              <li><strong>ステークホルダー調整</strong>：技術要件と事業要件のバランス調整</li>
            </ul>
          </div>

          <div class="mb-4">
            <h3 class="text-lg font-semibold text-gray-800">開発・チーム運営の考え方</h3>
            <ul class="list-disc list-inside ml-4 space-y-1">
              <li>サービス価値の最大化を重視した技術選定とアーキテクチャ設計</li>
              <li>パフォーマンス・スケーラビリティ・保守性のバランスを考慮した設計</li>
              <li>チームの生産性向上とメンバーの成長を両立するマネジメント</li>
              <li>迅速な意思決定と柔軟な軌道修正によるアジャイルな開発運営</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Vue 3 Composition API
</script>

<style>
/* All styling is now done with Tailwind CSS utility classes */
</style>
