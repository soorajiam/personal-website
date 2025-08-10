// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  compatibilityDate: '2025-08-10',
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
      routes: ['/blog', '/blog/custom-components-guide', '/blog/component-test', '/blog/building-with-nuxt', '/blog/the-total-eclipse-of-you']
    }
  }
})