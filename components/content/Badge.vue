<template>
  <span 
    :class="[
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors duration-200',
      badgeClasses
    ]"
  >
    <Icon v-if="icon" :name="icon" class="w-3 h-3 mr-1" />
    <slot />
  </span>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'success', 'warning', 'error', 'info', 'purple', 'pink', 'white'].includes(value)
  },
  icon: {
    type: String,
    default: undefined
  }
})

const badgeClasses = computed(() => {
  switch (props.variant) {
    case 'success':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'warning':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    case 'error':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    case 'info':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    case 'purple':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    case 'pink':
      return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
    case 'white':
      return 'bg-white text-gray-800 border border-gray-300 dark:bg-white dark:text-gray-900'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
  }
})
</script>