<template>
  <div class="bg-gray-900 text-gray-200 min-h-screen">
    <header class="bg-gray-800/30 backdrop-blur-lg shadow-lg sticky top-0 z-50">
      <nav
        class="container mx-auto px-6 py-4 flex justify-between items-center"
      >
        <div>
          <NuxtLink to="/" class="text-2xl font-bold text-white"
            >Yuma Mitsuyoshi</NuxtLink
          >
        </div>
        <div class="flex space-x-2">
          <NuxtLink
            to="/"
            class="px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/profile"
            class="px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >Profile</NuxtLink
          >
          <NuxtLink
            to="/skill"
            class="px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >Skill</NuxtLink
          >
          <NuxtLink
            to="/hobby"
            class="px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >Hobby</NuxtLink
          >
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-6 py-8">
      <NuxtPage />
    </main>

    <ContactCard />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import ContactCard from '~/components/ContactCard.vue'
export default {
  components: {
    TheFooter,
    ContactCard,
  },
}
</script>

<style>
.router-link-exact-active {
  @apply bg-gray-700 text-white;
}
</style>
