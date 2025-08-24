<template>
  <div>
    <h1 class="text-4xl font-bold text-center mb-8">Skill</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">プログラミング言語</h2>
        <div>
          <h3 class="text-xl font-semibold mb-2">自由に使いこなせる</h3>
          <p class="text-gray-700">Ruby, Python3, ES6</p>
        </div>
        <div class="mt-4">
          <h3 class="text-xl font-semibold mb-2">そこそこできる</h3>
          <p class="text-gray-700">Go, TypeScript, Elixir, PHP</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">フレームワーク</h2>
        <p class="text-gray-700">
          Ruby on Rails, Django, Bottle, Vue.js, Nuxt.js
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">DB</h2>
        <p class="text-gray-700">Mysql, Redis, DynamoDB</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">IaaS</h2>
        <p class="text-gray-700">AWS, GCP</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">インフラ</h2>
        <p class="text-gray-700">Docker, Linux</p>
      </div>

      <div
        class="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-3"
      >
        <h2 class="text-2xl font-semibold mb-4">その他</h2>
        <p class="text-gray-700">
          機械学習, Slack, Git, Github, TravisCI, CircleCI,
          マイクロサービスアーキテクチャ, bugsnag, Sentry, Google Apps Script,
          VBA, gRPC, GraphQL
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* All styling is now done with Tailwind CSS utility classes */
</style>
