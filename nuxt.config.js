// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  // Lock compatibility date to a stable baseline supported by the current Nuxt release
  compatibilityDate: '2024-12-01',
  modules: ["@nuxt/ui", "@nuxt/content"],
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      }
    },
    markdown: {
      mdc: true
    }
  },
  css: ['~/assets/css/main.css'],
  // Auto-import components globally
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/components/content',
      global: true
    }
  ],
  nitro: {
    prerender: {
      // Only prerender the blog index; individual posts may be drafts (published: false)
      routes: ['/blog'],
      failOnError: false
    }
  }
})