// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/ui', '@nuxt/image'],
  css: ['@unocss/reset/eric-meyer.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "styles/scss/variable.scss" as *;' // 加载全局样式，使用scss特性
        }
      }
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
