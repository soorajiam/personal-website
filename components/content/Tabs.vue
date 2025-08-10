<template>
  <div class="my-6">
    <div class="tabs-wrapper prose dark:prose-invert max-w-none">
      <slot />
    </div>
  </div>
</template>

<script setup>
// Simplified tabs that work with slots and MDC
</script>

<style scoped>
.tabs-wrapper :deep(h3) {
  @apply border-b border-gray-200 dark:border-gray-700 pb-2 mb-4 text-lg font-semibold text-blue-600 dark:text-blue-400;
}

.tabs-wrapper :deep(h3:not(:first-child)) {
  @apply mt-8;
}

.tabs-wrapper :deep(pre) {
  @apply bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto;
}

.tabs-wrapper :deep(code) {
  @apply font-mono text-sm;
}

.tabs-wrapper :deep(p) {
  @apply text-gray-600 dark:text-gray-300 leading-relaxed;
}
</style>