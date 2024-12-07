// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/test-utils/module', '@nuxt/ui', '@nuxt/image', '@nuxtjs/color-mode'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      script: [{ src: '/icon.js' }]
    }
  },
  colorMode: {
    preference: 'dark' // default value of colorMode.preference
  },
  appConfig: {
    MasterVersion: 'v2.5.5'
  },
  components: [
    {
      path: '~/components/',
      pathPrefix: false
    }
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          additionalData: '@use "~/styles/scss/variable.scss" as *;'
        }
      }
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    port: 3000
  }
})
