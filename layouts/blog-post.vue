<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <!-- Hero Section -->
    <div class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px); background-size: 50px 50px;"></div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <NuxtLink 
          to="/blog" 
          class="inline-flex items-center text-blue-100 hover:text-white mb-8 transition-all duration-300 hover:scale-105 group"
        >
          <div class="p-2 bg-white/10 rounded-full mr-3 group-hover:bg-white/20 transition-colors">
            <Icon name="i-heroicons-arrow-left" class="w-4 h-4" />
          </div>
          <span class="font-medium">Back to Blog</span>
        </NuxtLink>
        
        <article v-if="page" class="max-w-4xl">
          <div class="mb-6">
            <span class="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Blog Post
            </span>
          </div>
          
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            {{ page.title }}
          </h1>
          
          <div class="flex flex-wrap items-center gap-6 text-blue-100 mb-8">
            <div class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mr-3 flex items-center justify-center">
                <Icon name="i-heroicons-user-circle" class="w-4 h-4 text-white" />
              </div>
              <span class="font-medium">{{ page.author || 'Anonymous' }}</span>
            </div>
            <div class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="i-heroicons-calendar-days" class="w-5 h-5 mr-2" />
              <time class="font-medium">{{ formatDate(page.date) }}</time>
            </div>
            <div v-if="page.readingTime" class="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="i-heroicons-clock" class="w-5 h-5 mr-2" />
              <span class="font-medium">{{ page.readingTime }} min read</span>
            </div>
          </div>
          
          <p class="text-xl md:text-2xl text-blue-100 leading-relaxed mb-10 max-w-3xl">
            {{ page.description }}
          </p>
          
          <!-- Tags -->
          <div v-if="page.tags && page.tags.length" class="flex flex-wrap gap-3">
            <UBadge 
              v-for="tag in page.tags" 
              :key="tag"
              variant="white"
              size="lg"
              class="px-4 py-2 text-sm font-medium bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              #{{ tag }}
            </UBadge>
          </div>
        </article>
      </div>
    </div>

    <!-- Content Section -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Featured Image -->
        <div v-if="page?.image" class="mb-16 group">
          <div class="relative overflow-hidden rounded-3xl shadow-2xl">
            <img 
              :src="page.image" 
              :alt="page.title"
              class="w-full h-80 md:h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 p-8 md:p-12 lg:p-16">
          <div class="prose prose-lg lg:prose-xl max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-white">
            <slot />
          </div>
        </div>

        <!-- Debug Info (temporary) -->
        <div v-if="page" class="mt-8 p-4 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg border border-yellow-300 dark:border-yellow-700">
          <h4 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Debug Info:</h4>
          <p class="text-sm text-yellow-700 dark:text-yellow-300">Author: {{ page.author }}</p>
          <p class="text-sm text-yellow-700 dark:text-yellow-300">Title: {{ page.title }}</p>
          <p class="text-sm text-yellow-700 dark:text-yellow-300">Date: {{ page.date }}</p>
          <p class="text-sm text-yellow-700 dark:text-yellow-300">Tags: {{ page.tags?.join(', ') }}</p>
        </div>

        <!-- Author Info -->
        <div v-if="page?.author" class="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl border border-blue-100 dark:border-gray-600 p-8 md:p-12">
          <div class="flex items-center">
            <div class="relative">
              <img 
                src="/sooraj.jpg" 
                :alt="page.author"
                class="w-20 h-20 rounded-2xl shadow-lg object-cover"
                @error="$event.target.style.display = 'none'"
              />
              <!-- Fallback avatar if image fails to load -->
              <div class="w-20 h-20 rounded-2xl shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                {{ page.author?.charAt(0)?.toUpperCase() || 'A' }}
              </div>
              <div class="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
            </div>
            <div class="ml-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {{ page.author }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-lg mb-3">
                Author and Creator
              </p>
              <div class="flex space-x-4">
                <a href="#" class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  <Icon name="i-simple-icons-twitter" class="w-5 h-5" />
                </a>
                <a href="#" class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  <Icon name="i-simple-icons-github" class="w-5 h-5" />
                </a>
                <a href="#" class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  <Icon name="i-simple-icons-linkedin" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div v-if="page" class="mt-16 grid md:grid-cols-2 gap-8">
          <NuxtLink 
            v-if="prev" 
            :to="prev._path" 
            class="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div class="flex items-center text-blue-600 dark:text-blue-400 mb-4">
              <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                <Icon name="i-heroicons-arrow-left" class="w-4 h-4" />
              </div>
              <span class="text-sm font-semibold uppercase tracking-wide">Previous</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
              {{ prev.title }}
            </h3>
          </NuxtLink>
          
          <NuxtLink 
            v-if="next" 
            :to="next._path" 
            class="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:text-right"
          >
            <div class="flex items-center justify-end text-blue-600 dark:text-blue-400 mb-4">
              <span class="text-sm font-semibold uppercase tracking-wide">Next</span>
              <div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full ml-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                <Icon name="i-heroicons-arrow-right" class="w-4 h-4" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
              {{ next.title }}
            </h3>
          </NuxtLink>
        </div>

        <!-- Related Posts by Tags -->
        <div v-if="relatedPosts.length" class="mt-20">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Related Posts
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Discover more articles that might interest you
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NuxtLink 
              v-for="post in relatedPosts" 
              :key="post._path"
              :to="post._path"
              class="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div v-if="post.image" class="aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <img 
                  :src="post.image" 
                  :alt="post.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div class="p-6">
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Icon name="i-heroicons-calendar-days" class="w-4 h-4 mr-2" />
                  <time>{{ formatDate(post.date) }}</time>
                </div>
                <h3 class="font-bold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 leading-tight">
                  {{ post.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {{ post.description }}
                </p>
                <div v-if="post.tags" class="flex flex-wrap gap-2">
                  <UBadge 
                    v-for="tag in post.tags.slice(0, 3)" 
                    :key="tag"
                    variant="soft"
                    size="sm"
                    class="text-xs"
                  >
                    {{ tag }}
                  </UBadge>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { path } = useRoute()
const { data: page } = await useAsyncData(`content-${path}`, () => queryContent(path).findOne())

// Check if the post is published
if (page.value && page.value.published === false) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post Not Found',
    fatal: true
  })
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const { data: surroundingPosts } = await useAsyncData('surroundingPosts', async () => {
  const [prevPost, nextPost] = await queryContent('/blog')
    .only(['title', '_path'])
    .where({ 
      _extension: 'md',
      published: { $ne: false } // Only include published posts in navigation
    })
    .sort({ date: -1 })
    .findSurround(path)
  return { prev: prevPost, next: nextPost }
})

const { prev, next } = surroundingPosts || {}

// Get related posts based on shared tags
const { data: relatedPosts } = await useAsyncData('relatedPosts', async () => {
  if (!page.value?.tags?.length) return []
  
  const allPosts = await queryContent('/blog')
    .only(['title', 'description', 'tags', 'image', '_path', 'date'])
    .where({ 
      _extension: 'md',
      _path: { $ne: path }, // Exclude current post
      published: { $ne: false } // Only include published posts
    })
    .find()
  
  // Score posts based on number of shared tags
  const scoredPosts = allPosts
    .map(post => {
      if (!post.tags?.length) return { ...post, score: 0 }
      
      const sharedTags = post.tags.filter(tag => 
        page.value.tags.includes(tag)
      ).length
      
      return { ...post, score: sharedTags }
    })
    .filter(post => post.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
  
  return scoredPosts
})

// Provide head metadata
useHead({
  title: page.value?.title,
  meta: [
    { name: 'description', content: page.value?.description },
    { property: 'og:title', content: page.value?.title },
    { property: 'og:description', content: page.value?.description },
    { property: 'og:image', content: page.value?.image },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: page.value?.title },
    { name: 'twitter:description', content: page.value?.description },
    { name: 'twitter:image', content: page.value?.image },
  ],
  link: [
    { rel: 'canonical', href: `https://sooraj.com${path}` }
  ]
})
</script>
