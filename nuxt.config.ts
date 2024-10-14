// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/color-mode', '@nuxtjs/i18n'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  i18n: {
    vueI18n: '~/config/i18n.config.ts'
  },
  colorMode: {
    preference: 'light' // default value of colorMode.preference
  },
  appConfig: {
    MasterVersion: 'v2.2.0'
  },
  components: [
    {
      path: '~/components/',
      pathPrefix: false
    }
  ],
  css: ['~/styles/scss/variable.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
