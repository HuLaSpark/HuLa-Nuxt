// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/color-mode'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  colorMode: {
    preference: 'light' // default value of colorMode.preference
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
