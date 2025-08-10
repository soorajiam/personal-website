<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Blog
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
            Thoughts, insights, and explorations on life, technology, and everything in between.
          </p>
          
          <!-- Search -->
          <div class="max-w-md mx-auto">
            <UInput 
              v-model="searchQuery" 
              icon="i-heroicons-magnifying-glass" 
              placeholder="Search articles..." 
              size="lg"
              class="bg-white/10 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-6xl mx-auto">
        
        <!-- Filter Tags -->
        <div class="mb-12">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filter by tags:</h2>
          <div class="flex flex-wrap gap-2">
            <UButton
              @click="selectedTag = null"
              :variant="selectedTag === null ? 'solid' : 'soft'"
              color="primary"
              size="sm"
            >
              All Posts
            </UButton>
            <UButton
              v-for="tag in allTags"
              :key="tag"
              @click="selectedTag = selectedTag === tag ? null : tag"
              :variant="selectedTag === tag ? 'solid' : 'soft'"
              color="gray"
              size="sm"
            >
              #{{ tag }} ({{ getTagCount(tag) }})
            </UButton>
          </div>
        </div>

        <!-- Articles Grid -->
        <div v-if="filteredArticles?.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="article in filteredArticles" 
            :key="article._path"
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            <NuxtLink :to="article._path" class="block">
              <div 
                v-if="article.image" 
                class="aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden"
              >
                <img 
                  :src="article.image" 
                  :alt="article.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div class="p-6">
                <div v-if="article.tags?.length" class="flex flex-wrap gap-1 mb-3">
                  <UBadge 
                    v-for="tag in article.tags.slice(0, 3)" 
                    :key="tag"
                    variant="soft"
                    size="sm"
                  >
                    {{ tag }}
                  </UBadge>
                </div>
                
                <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {{ article.title }}
                </h2>
                
                <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {{ article.description }}
                </p>
                
                <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div class="flex items-center">
                    <Icon name="i-heroicons-user-circle" class="w-4 h-4 mr-1" />
                    <span>{{ article.author || 'Anonymous' }}</span>
                  </div>
                  <div class="flex items-center">
                    <Icon name="i-heroicons-calendar-days" class="w-4 h-4 mr-1" />
                    <time>{{ formatDate(article.date) }}</time>
                  </div>
                  <div v-if="article.readingTime" class="flex items-center">
                    <Icon name="i-heroicons-clock" class="w-4 h-4 mr-1" />
                    <span>{{ article.readingTime }}m</span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>

        <!-- No Results -->
        <div v-else class="text-center py-16">
          <Icon name="i-heroicons-document-magnifying-glass" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
          <p class="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filter criteria.
          </p>
        </div>

        <!-- Featured Section -->
        <div v-if="!searchQuery && !selectedTag && featuredArticle" class="mt-16">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Article</h2>
          <div class="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
            <NuxtLink :to="featuredArticle._path" class="block group">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div v-if="featuredArticle.tags?.length" class="flex flex-wrap gap-2 mb-4">
                    <UBadge 
                      v-for="tag in featuredArticle.tags.slice(0, 3)" 
                      :key="tag"
                      variant="white"
                      size="sm"
                    >
                      {{ tag }}
                    </UBadge>
                  </div>
                  <h3 class="text-3xl font-bold mb-4 group-hover:text-blue-100 transition-colors">
                    {{ featuredArticle.title }}
                  </h3>
                  <p class="text-blue-100 mb-6 leading-relaxed">
                    {{ featuredArticle.description }}
                  </p>
                  <div class="flex items-center text-blue-100">
                    <span>Read more</span>
                    <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div v-if="featuredArticle.image" class="order-first md:order-last">
                  <img 
                    :src="featuredArticle.image" 
                    :alt="featuredArticle.title"
                    class="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
                  />
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
// Fetch all published blog posts with complete data
const { data: articles } = await useAsyncData('articles', () => queryContent('/blog')
  .only(['title', 'description', 'date', 'author', 'tags', 'image', 'readingTime', '_path', 'published'])
  .where({ 
    _extension: 'md',
    published: { $ne: false } // Only show published posts (published: true or undefined)
  })
  .sort({ date: -1 })
  .find()
)

// Reactive filters
const searchQuery = ref('')
const selectedTag = ref(null)

// Get all unique tags from articles
const allTags = computed(() => {
  if (!articles.value) return []
  const tags = new Set()
  articles.value.forEach(article => {
    if (article.tags) {
      article.tags.forEach(tag => tags.add(tag))
    }
  })
  return Array.from(tags).sort()
})

// Get count for each tag
const getTagCount = (tag) => {
  if (!articles.value) return 0
  return articles.value.filter(article => 
    article.tags?.includes(tag)
  ).length
}

// Featured article (most recent)
const featuredArticle = computed(() => {
  return articles.value?.[0] || null
})

// Filter articles based on search and tags
const filteredArticles = computed(() => {
  if (!articles.value) return []
  
  let filtered = articles.value

  // Apply search filter
  if (searchQuery.value) {
    filtered = filtered.filter(article => 
      article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      article.tags?.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))
    )
  }

  // Apply tag filter
  if (selectedTag.value) {
    filtered = filtered.filter(article => 
      article.tags?.includes(selectedTag.value)
    )
  }

  return filtered
})

// Date formatting function
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

// SEO
useHead({
  title: 'Blog - Sooraj.com',
  meta: [
    { name: 'description', content: 'Thoughts, insights, and explorations on life, technology, and everything in between.' },
    { property: 'og:title', content: 'Blog - Sooraj.com' },
    { property: 'og:description', content: 'Thoughts, insights, and explorations on life, technology, and everything in between.' },
    { property: 'og:type', content: 'website' },
  ]
})
</script>