// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/test-utils/module', '@nuxt/ui', '@nuxt/image', '@nuxtjs/color-mode'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      script: [{ src: '/icon.js' }]
    }
  },
  colorMode: {
    preference: 'dark' // default value of colorMode.preference
  },
  appConfig: {
    MasterVersion: 'v2.5.8'
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
    },
    esbuild: {
      // * 打包去除 console.log && debugger
      pure: ['console.log', 'debugger']
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    port: 3000
  }
})
