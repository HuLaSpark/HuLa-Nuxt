<template>
  <ClientOnly>
    <UTooltip text="切换深色模式">
      <UButton
        @click="toggleDark"
        size="md"
        color="gray"
        variant="ghost"
        :icon="colorMode.preference === 'dark' ? 'solar:moon-bold' : 'solar:sun-2-bold'" />
    </UTooltip>
  </ClientOnly>
</template>
<script setup lang="ts">
const colorMode = useColorMode()

// 切换模式
const setColorMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

// 判断是否支持 startViewTransition API
const enableTransitions = () =>
  'startViewTransition' in document && window.matchMedia('(prefers-reduced-motion: no-preference)').matches

// 切换动画
async function toggleDark({ clientX: x, clientY: y }: MouseEvent) {
  const isDark = colorMode.preference === 'dark'

  if (!enableTransitions()) {
    setColorMode()
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    setColorMode()
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: !isDark ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${!isDark ? 'old' : 'new'}(root)`
    }
  )
}
</script>

<style lang="scss">
@use '~/styles/scss/view-transition';
</style>
