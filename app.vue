<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'HuLa'
})
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/hula_favicon.ico'
    }
  ]
})
</script>
<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
