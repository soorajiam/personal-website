<template>
  <div class="my-8">
    <div class="steps-container prose dark:prose-invert max-w-none">
      <slot />
    </div>
  </div>
</template>

<script setup>
// This component now uses slots instead of props for better MDC compatibility
</script>

<style scoped>
.steps-container :deep(h2) {
  @apply flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-4 mt-8 first:mt-0;
  counter-increment: step-counter;
}

.steps-container :deep(h2:before) {
  @apply w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm shadow-lg mr-4 flex-shrink-0;
  content: counter(step-counter);
}

.steps-container {
  counter-reset: step-counter;
}

.steps-container :deep(p) {
  @apply text-gray-600 dark:text-gray-300 leading-relaxed mb-4 ml-12;
}

.steps-container :deep(pre) {
  @apply ml-12 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto;
}

.steps-container :deep(code) {
  @apply font-mono text-sm text-gray-800 dark:text-gray-200;
}
</style>