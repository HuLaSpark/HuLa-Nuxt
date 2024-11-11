import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ColorMode from '~/components/common/ColorMode.vue'

describe('ColorMode 组件', () => {
  it('应该正确渲染组件', async () => {
    const wrapper = await mountSuspended(ColorMode)
    expect(wrapper.exists()).toBe(true)
  })

  it('应该包含一个按钮元素', async () => {
    const wrapper = await mountSuspended(ColorMode)
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
  })
})
