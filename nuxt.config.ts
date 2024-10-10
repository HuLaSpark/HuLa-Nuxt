// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
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
