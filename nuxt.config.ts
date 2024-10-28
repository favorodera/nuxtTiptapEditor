// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/eslint', '@nuxt/ui'],
  ssr: true,
  devtools: { enabled: false },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
    rootTag: 'main',
    rootAttrs: {
      id: 'app',
    },
  },
  css: ['~/assets/scss/index.scss', '~/assets/scss/editor.scss'],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    storage: 'localStorage',
    storageKey: 'color-mode',
  },
  experimental: {
    asyncContext: true,
  },
  compatibilityDate: '2024-04-03',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  unocss: {
    nuxtLayers: true,
  },
})
