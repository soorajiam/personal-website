<template>
  <div class="relative my-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm transition-colors duration-200">
    <!-- Header -->
    <div class="bg-gray-50 dark:bg-gray-800 rounded-t-lg px-4 py-3 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <Icon name="i-heroicons-code-bracket-square" class="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ title || filename || 'Code' }}</span>
        </div>
        <button 
          @click="copyCode" 
          class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          :title="copied ? 'Copied!' : 'Copy code'"
        >
          <Icon :name="copied ? 'i-heroicons-check' : 'i-heroicons-clipboard'" class="w-4 h-4" />
        </button>
      </div>
    </div>
    
    <!-- Code Content -->
    <div class="bg-white dark:bg-gray-900 rounded-b-lg overflow-hidden">
      <pre 
        class="overflow-x-auto p-4 text-sm leading-relaxed font-mono transition-colors duration-200"
        :class="[
          'text-gray-900 dark:text-gray-100',
          'bg-white dark:bg-gray-900'
        ]"
        ref="codeRef"
      ><slot /></pre>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: undefined
  },
  filename: {
    type: String,
    default: undefined
  }
})

const codeRef = ref()
const copied = ref(false)

const copyCode = async () => {
  const code = codeRef.value?.textContent
  if (code) {
    try {
      await navigator.clipboard.writeText(code.trim())
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }
}
</script>