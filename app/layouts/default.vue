<template>
  <div class="bg-gray-100 text-gray-900">
    <header class="bg-white shadow-md">
      <nav
        class="container mx-auto px-6 py-4 flex justify-between items-center"
      >
        <div>
          <NuxtLink to="/" class="text-2xl font-bold text-gray-800"
            >Yuma Mitsuyoshi</NuxtLink
          >
        </div>
        <div class="flex space-x-4">
          <NuxtLink to="/" class="px-4 py-2 rounded hover:bg-gray-200"
            >Home</NuxtLink
          >
          <NuxtLink to="/profile" class="px-4 py-2 rounded hover:bg-gray-200"
            >Profile</NuxtLink
          >
          <NuxtLink to="/skill" class="px-4 py-2 rounded hover:bg-gray-200"
            >Skill</NuxtLink
          >
          <NuxtLink to="/hobby" class="px-4 py-2 rounded hover:bg-gray-200"
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
/* All styling is done with Tailwind utility classes in templates. */
</style>
