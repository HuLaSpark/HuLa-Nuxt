import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    // 如果需要收集覆盖率报告
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    },
    // 设置全局测试环境
    globals: true
  }
})
