<template>
  <div 
    :class="[
      'relative my-6 p-6 rounded-xl border-l-4 shadow-sm transition-colors duration-200',
      calloutClasses
    ]"
  >
    <div class="flex items-start space-x-4">
      <div 
        :class="[
          'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200',
          iconBgClasses
        ]"
      >
        <Icon :name="iconName" :class="iconClasses" class="w-5 h-5" />
      </div>
      <div class="flex-1">
        <h4 v-if="title" :class="titleClasses" class="font-bold text-lg mb-2">
          {{ title }}
        </h4>
        <div :class="contentClasses" class="prose prose-sm max-w-none dark:prose-invert">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'note',
    validator: (value) => ['note', 'tip', 'important', 'warning', 'caution'].includes(value)
  },
  title: {
    type: String,
    default: undefined
  }
})

const calloutClasses = computed(() => {
  switch (props.type) {
    case 'tip':
      return 'bg-green-50 border-green-400 shadow-green-100 dark:bg-green-900/10 dark:border-green-500 dark:shadow-green-900/20'
    case 'important':
      return 'bg-purple-50 border-purple-400 shadow-purple-100 dark:bg-purple-900/10 dark:border-purple-500 dark:shadow-purple-900/20'
    case 'warning':
      return 'bg-yellow-50 border-yellow-400 shadow-yellow-100 dark:bg-yellow-900/10 dark:border-yellow-500 dark:shadow-yellow-900/20'
    case 'caution':
      return 'bg-red-50 border-red-400 shadow-red-100 dark:bg-red-900/10 dark:border-red-500 dark:shadow-red-900/20'
    default:
      return 'bg-blue-50 border-blue-400 shadow-blue-100 dark:bg-blue-900/10 dark:border-blue-500 dark:shadow-blue-900/20'
  }
})

const iconName = computed(() => {
  switch (props.type) {
    case 'tip':
      return 'i-heroicons-light-bulb'
    case 'important':
      return 'i-heroicons-exclamation-circle'
    case 'warning':
      return 'i-heroicons-exclamation-triangle'
    case 'caution':
      return 'i-heroicons-shield-exclamation'
    default:
      return 'i-heroicons-information-circle'
  }
})

const iconBgClasses = computed(() => {
  switch (props.type) {
    case 'tip':
      return 'bg-green-100 dark:bg-green-800'
    case 'important':
      return 'bg-purple-100 dark:bg-purple-800'
    case 'warning':
      return 'bg-yellow-100 dark:bg-yellow-800'
    case 'caution':
      return 'bg-red-100 dark:bg-red-800'
    default:
      return 'bg-blue-100 dark:bg-blue-800'
  }
})

const iconClasses = computed(() => {
  switch (props.type) {
    case 'tip':
      return 'text-green-600 dark:text-green-400'
    case 'important':
      return 'text-purple-600 dark:text-purple-400'
    case 'warning':
      return 'text-yellow-600 dark:text-yellow-400'
    case 'caution':
      return 'text-red-600 dark:text-red-400'
    default:
      return 'text-blue-600 dark:text-blue-400'
  }
})

const titleClasses = computed(() => {
  switch (props.type) {
    case 'tip':
      return 'text-green-800 dark:text-green-200'
    case 'important':
      return 'text-purple-800 dark:text-purple-200'
    case 'warning':
      return 'text-yellow-800 dark:text-yellow-200'
    case 'caution':
      return 'text-red-800 dark:text-red-200'
    default:
      return 'text-blue-800 dark:text-blue-200'
  }
})

const contentClasses = computed(() => {
  switch (props.type) {
    case 'tip':
      return 'text-green-700 dark:text-green-300'
    case 'important':
      return 'text-purple-700 dark:text-purple-300'
    case 'warning':
      return 'text-yellow-700 dark:text-yellow-300'
    case 'caution':
      return 'text-red-700 dark:text-red-300'
    default:
      return 'text-blue-700 dark:text-blue-300'
  }
})
</script>