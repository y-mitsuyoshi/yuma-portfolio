<template>
  <span :class="['tag', strength === 'primary' ? 'tag-core' : '']">
    {{ label }}
  </span>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  strength: { type: String, default: 'basic' },
})
</script>
