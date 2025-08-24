<template>
  <div class="bg-gray-100 text-gray-900">
    <header class="bg-white shadow-md">
      <nav
        class="container mx-auto px-6 py-4 flex justify-between items-center"
      >
        <div>
          <nuxt-link to="/" class="text-2xl font-bold text-gray-800"
            >Yuma Mitsuyoshi</nuxt-link
          >
        </div>
        <div class="flex space-x-4">
          <nuxt-link to="/" class="px-4 py-2 rounded hover:bg-gray-200"
            >Home</nuxt-link
          >
          <nuxt-link to="/profile" class="px-4 py-2 rounded hover:bg-gray-200"
            >Profile</nuxt-link
          >
          <nuxt-link to="/skill" class="px-4 py-2 rounded hover:bg-gray-200"
            >Skill</nuxt-link
          >
          <nuxt-link to="/hobby" class="px-4 py-2 rounded hover:bg-gray-200"
            >Hobby</nuxt-link
          >
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-6 py-8">
      <nuxt />
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
/* We will rely on Tailwind CSS for all styling */
body {
  @apply bg-gray-100;
}
</style>
