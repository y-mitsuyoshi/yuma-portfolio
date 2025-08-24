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
            <font-awesome-icon :icon="['fab', 'x-twitter']" size="3x" />
          </a>
        </div>
      </div>
      <div>
        <h2 class="text-3xl font-bold text-gray-800">Link</h2>
        <div class="mt-4">
          <a
            href="http://tabilike.hatenablog.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <font-awesome-icon :icon="['fas', 'blog']" class="mr-2" />
            Blog
            <font-awesome-icon
              :icon="['fas', 'arrow-up-right-from-square']"
              class="ml-2"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* Scoped styles can be added here if needed, but we are using Tailwind utility classes. */
</style>
