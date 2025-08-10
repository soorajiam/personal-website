<template>
  <div 
    :class="[
      'flex items-start space-x-3 p-4 rounded-lg border-l-4 my-6 transition-colors duration-200',
      alertClasses
    ]"
  >
    <Icon :name="iconName" :class="iconClasses" class="w-6 h-6 mt-0.5 shrink-0" />
    <div class="flex-1">
      <h4 v-if="title" :class="titleClasses" class="font-semibold mb-1">
        {{ title }}
      </h4>
      <div :class="contentClasses">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'success', 'warning', 'error'].includes(value)
  },
  title: {
    type: String,
    default: undefined
  }
})

const alertClasses = computed(() => {
  switch (props.type) {
    case 'success':
      return 'bg-green-50 border-green-400 dark:bg-green-900/20 dark:border-green-500'
    case 'warning':
      return 'bg-yellow-50 border-yellow-400 dark:bg-yellow-900/20 dark:border-yellow-500'
    case 'error':
      return 'bg-red-50 border-red-400 dark:bg-red-900/20 dark:border-red-500'
    default:
      return 'bg-blue-50 border-blue-400 dark:bg-blue-900/20 dark:border-blue-500'
  }
})

const iconName = computed(() => {
  switch (props.type) {
    case 'success':
      return 'i-heroicons-check-circle'
    case 'warning':
      return 'i-heroicons-exclamation-triangle'
    case 'error':
      return 'i-heroicons-x-circle'
    default:
      return 'i-heroicons-information-circle'
  }
})

const iconClasses = computed(() => {
  switch (props.type) {
    case 'success':
      return 'text-green-600 dark:text-green-400'
    case 'warning':
      return 'text-yellow-600 dark:text-yellow-400'
    case 'error':
      return 'text-red-600 dark:text-red-400'
    default:
      return 'text-blue-600 dark:text-blue-400'
  }
})

const titleClasses = computed(() => {
  switch (props.type) {
    case 'success':
      return 'text-green-800 dark:text-green-200'
    case 'warning':
      return 'text-yellow-800 dark:text-yellow-200'
    case 'error':
      return 'text-red-800 dark:text-red-200'
    default:
      return 'text-blue-800 dark:text-blue-200'
  }
})

const contentClasses = computed(() => {
  switch (props.type) {
    case 'success':
      return 'text-green-700 dark:text-green-300'
    case 'warning':
      return 'text-yellow-700 dark:text-yellow-300'
    case 'error':
      return 'text-red-700 dark:text-red-300'
    default:
      return 'text-blue-700 dark:text-blue-300'
  }
})
</script>