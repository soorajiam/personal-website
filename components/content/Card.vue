<template>
  <div 
    :class="[
      'bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden my-6 transition-all duration-200',
      {'hover:shadow-lg hover:scale-[1.02] cursor-pointer': clickable}
    ]"
    @click="handleClick"
  >
    <div v-if="image" class="aspect-video bg-gray-100 dark:bg-gray-700">
      <img 
        :src="image" 
        :alt="imageAlt || title || 'Card image'" 
        class="w-full h-full object-cover"
      />
    </div>
    
    <div class="p-6">
      <div v-if="badge" class="mb-3">
        <Badge :variant="badgeVariant" :icon="badgeIcon">{{ badge }}</Badge>
      </div>
      
      <h3 v-if="title" class="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {{ title }}
      </h3>
      
      <div class="text-gray-600 dark:text-gray-300 mb-4">
        <slot />
      </div>
      
      <div v-if="$slots.footer" class="pt-4 border-t border-gray-200 dark:border-gray-700">
        <slot name="footer" />
      </div>
      
      <NuxtLink 
        v-if="link" 
        :to="link" 
        class="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors"
      >
        {{ linkText || 'Read more' }}
        <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: undefined
  },
  image: {
    type: String,
    default: undefined
  },
  imageAlt: {
    type: String,
    default: undefined
  },
  badge: {
    type: String,
    default: undefined
  },
  badgeVariant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'success', 'warning', 'error', 'info', 'purple', 'pink'].includes(value)
  },
  badgeIcon: {
    type: String,
    default: undefined
  },
  link: {
    type: String,
    default: undefined
  },
  linkText: {
    type: String,
    default: undefined
  },
  clickable: {
    type: Boolean,
    default: false
  }
})

const handleClick = () => {
  if (props.clickable && props.link) {
    navigateTo(props.link)
  }
}
</script>