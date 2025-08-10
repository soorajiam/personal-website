<template>
  <blockquote class="relative my-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 shadow-sm transition-colors duration-200">
    <div class="relative">
      <Icon name="i-heroicons-chat-bubble-left-right" class="absolute -top-2 -left-2 w-8 h-8 text-blue-500 dark:text-blue-400 opacity-20" />
      <div class="text-lg font-medium text-gray-800 dark:text-gray-200 italic leading-relaxed mb-4">
        <slot />
      </div>
      <footer v-if="author || source" class="flex items-center justify-end">
        <div class="text-right">
          <cite v-if="author" class="text-sm font-semibold text-gray-700 dark:text-gray-300 not-italic">
            — {{ author }}
          </cite>
          <div v-if="source" class="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {{ source }}
          </div>
        </div>
      </footer>
    </div>
  </blockquote>
</template>

<script setup>
defineProps({
  author: {
    type: String,
    default: undefined
  },
  source: {
    type: String,
    default: undefined
  }
})
</script>