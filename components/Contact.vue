<template>
  <div class="bg-gray-200 py-12">
    <div class="container mx-auto px-6 text-center">
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-gray-800">Contact</h2>
        <div class="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.facebook.com/yuma.mitsuyoshi"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-blue-600"
          >
            <font-awesome-icon :icon="['fab', 'facebook-square']" size="3x" />
          </a>
          <a
            href="https://github.com/y-mitsuyoshi"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-gray-900"
          >
            <font-awesome-icon :icon="['fab', 'github-square']" size="3x" />
          </a>
          <a
            href="https://twitter.com/MitsuyoshiYuma"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-blue-400"
          >
            <font-awesome-icon :icon="['fab', 'twitter-square']" size="3x" />
          </a>
          <a
            href="http://tabilike.hatenablog.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-orange-500"
          >
            <font-awesome-icon :icon="['fas', 'rss']" size="3x" />
          </a>
        </div>
      </div>
      <!-- Link section removed; blog RSS icon moved to Contact social icons -->
    </div>
  </div>
</template>

<script setup>
// Vue 3 Composition API
// FontAwesome アイコンは自動的に利用可能
</script>

<style scoped>
/* Scoped styles can be added here if needed, but we are using Tailwind utility classes. */
</style>
