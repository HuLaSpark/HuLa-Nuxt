<template>
  <NuxtLoadingIndicator />
  <NuxtPage />
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
