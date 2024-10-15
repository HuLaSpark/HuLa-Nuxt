<template>
  <main class="min-h-[calc(100vh-var(--header-height))] relative">
    <img
      class="pointer-events-none absolute w-full top-[1px] transition-all text-teal flex-shrink-0 opacity-100 duration-[400ms] z-10"
      src="~/assets/svg/header.svg"
      alt="" />

    <div class="dark:bg-gray-900">
      <div class="py-24 sm:py-32 md:py-40 relative dark:bg-gradient-to-b from-gray-950 to-gray-900 md:pb-24">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
          <div class="text-center relative z-[1]">
            <div class="mb-10">
              <NuxtLink to="https://github.com/HuLaSpark/HuLa-IM-Tauri" target="_blank" rel="noopener noreferrer">
                <span
                  class="inline-flex items-center text-sm px-2.5 py-1.5 bg-teal-50 dark:bg-teal-400 dark:bg-opacity-10 text-teal-500 dark:text-teal-400 ring-1 ring-inset ring-teal-500 dark:ring-teal-400 ring-opacity-25 dark:ring-opacity-25 relative rounded-full font-semibold dark:hover:bg-teal-400/15 dark:hover:ring-teal-700">
                  <span>HuLa v2.2.0 is out</span>
                  <UIcon name="solar:arrow-right-line-duotone" class="w-5 h-5" />
                </span>
              </NuxtLink>
            </div>
            <h1 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
              <span>{{ t('home.title1') }}</span>
              <br />
              <span class="text-teal-600 block lg:inline-block">
                <span>{{ t('home.title2') }}</span>
              </span>
            </h1>

            <div class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
              <span class="pr-1">{{ t('home.description1') }}</span>
              <a
                href="https://github.com/HuLaSpark/HuLa-IM-Tauri"
                rel="noopener noreferrer"
                target="_blank"
                class="font-medium hover:underline underline-offset-2">
                <span>{{ t('home.description2') }}</span>
              </a>
              <span> {{ t('home.description3') }} </span>
              <br />
              <span> {{ t('home.description4') }} </span>
            </div>

            <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
              <div class="flex flex-col gap-4">
                <div class="flex items-center gap-2">
                  <a
                    class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-teal-500 hover:bg-teal-600 disabled:bg-teal-500 aria-disabled:bg-teal-500 dark:bg-teal-400 dark:hover:bg-teal-500 dark:disabled:bg-teal-400 dark:aria-disabled:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:focus-visible:outline-teal-400 inline-flex items-center"
                    href="/docs/getting-started/introduction">
                    <span>{{ t('home.get_started') }}</span>
                    <UIcon name="solar:arrow-right-linear" class="w-5 h-5" />
                  </a>
                  <button
                    type="button"
                    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-teal-500 dark:focus-visible:ring-teal-400 inline-flex items-center">
                    <span>{{ t('home.seconds') }}</span>
                    <UIcon name="solar:play-circle-linear" class="w-5 h-5" />
                  </button>
                </div>

                <label @click="handleCopy" class="relative w-full">
                  <input
                    disabled
                    type="text"
                    class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 ps-11 pe-11"
                    value="git clone https://gitee.com/HuLaSpark/HuLa.git" />
                  <span class="absolute inset-0 cursor-copy"></span>
                  <span class="absolute inset-y-0 start-0 flex items-center pointer-events-none px-3.5">
                    <UIcon name="solar:code-bold-duotone" class="text-gray-400 dark:text-gray-500 h-5 w-5" />
                  </span>
                  <span class="absolute inset-y-0 end-0 flex items-center px-3.5">
                    <button
                      v-show="!isCopy"
                      class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-teal-500 dark:focus-visible:ring-teal-400 inline-flex items-center">
                      <UIcon name="solar:copy-outline" class="flex-shrink-0 h-5 w-5" />
                    </button>

                    <UIcon
                      v-show="isCopy"
                      name="solar:check-read-line-duotone"
                      class="text-teal-600 flex-shrink-0 h-6 w-6" />
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({
  title: 'HuLa: An Unbelievable IM Ecosystem'
})

const isCopy = ref(false)

watch(isCopy, (val) => {
  if (val) {
    setTimeout(() => {
      isCopy.value = false
    }, 2000)
  }
})

const handleCopy = () => {
  const el = document.querySelector('input')
  if (el) {
    navigator.clipboard
      .writeText(el.value)
      .then(() => {
        // 显示复制成功的提示
        isCopy.value = true
      })
      .catch((err) => {
        console.error('复制失败:', err)
      })
  }
}
</script>

<style scoped lang="scss"></style>
