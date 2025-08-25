<template>
  <div class="bg-gray-100 text-gray-900">
    <header class="bg-white shadow-md">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <nuxt-link to="/" class="text-2xl font-bold text-gray-800">Yuma Mitsuyoshi</nuxt-link>
        </div>
        <div class="flex space-x-4">
          <nuxt-link to="/" class="px-4 py-2 rounded hover:bg-gray-200">Home</nuxt-link>
          <nuxt-link to="/profile" class="px-4 py-2 rounded hover:bg-gray-200">Profile</nuxt-link>
          <nuxt-link to="/skill" class="px-4 py-2 rounded hover:bg-gray-200">Skill</nuxt-link>
          <nuxt-link to="/hobby" class="px-4 py-2 rounded hover:bg-gray-200">Hobby</nuxt-link>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-6 py-8">
      <slot />
    </main>

    <Contact />
    <Footer />
  </div>
</template>

<script setup>
// Vue 3 Composition API with auto-import
// Nuxt 4では自動的にコンポーネントがインポートされます
</script>

<style>
/* Tailwind CSSを使用 */
body {
  background-color: #f3f4f6; /* bg-gray-100 */
}
</style>
