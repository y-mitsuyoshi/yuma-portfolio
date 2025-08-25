<template>
  <span
    :class="[
      'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
      bgClass,
      textClass
    ]"
    :aria-label="label"
    role="img"
  >
    <span class="mr-2" v-if="emoji">{{ emoji }}</span>
    <span>{{ label }}</span>
  </span>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  emoji: { type: String, default: '' },
  bgClass: { type: String, default: 'bg-gray-100' },
  textClass: { type: String, default: 'text-gray-800' }
})
</script>

<style scoped>
/* small visual tweaks are handled by Tailwind utility classes */
</style>
