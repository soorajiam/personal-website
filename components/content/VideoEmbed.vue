<template>
  <div class="my-8">
    <div class="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <iframe
        v-if="embedUrl"
        :src="embedUrl"
        :title="title || 'Video'"
        class="absolute inset-0 w-full h-full"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div v-else class="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
        <Icon name="i-heroicons-play-circle" class="w-16 h-16" />
        <span class="ml-2">Invalid video URL</span>
      </div>
    </div>
    <p v-if="caption" class="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center italic">
      {{ caption }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: undefined
  },
  caption: {
    type: String,
    default: undefined
  }
})

const embedUrl = computed(() => {
  const url = props.url
  
  // YouTube
  if (url.includes('youtube.com/watch')) {
    const videoId = url.split('v=')[1]?.split('&')[0]
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null
  }
  
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0]
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null
  }
  
  // Vimeo
  if (url.includes('vimeo.com/')) {
    const videoId = url.split('vimeo.com/')[1]?.split('/')[0]
    return videoId ? `https://player.vimeo.com/video/${videoId}` : null
  }
  
  // If it's already an embed URL, use it directly
  if (url.includes('embed')) {
    return url
  }
  
  return null
})
</script>