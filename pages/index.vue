<template>
  <main class="min-h-[calc(100vh-var(--header-height))] relative dark:bg-[#111729]">
    <img
      class="pointer-events-none absolute w-full top-[1px] text-teal flex-shrink-0 z-10"
      src="/assets/svg/header.svg"
      alt="" />

    <!-- 首页介绍 -->
    <div class="dark:bg-gray-900 min-h-120">
      <div class="py-24 sm:py-32 md:py-40 relative dark:bg-gradient-to-b from-gray-950 to-gray-900 md:pb-24">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
          <div class="text-center relative z-[1]">
            <div class="mb-10">
              <NuxtLink to="https://github.com/HuLaSpark/HuLa-IM-Tauri" target="_blank" rel="noopener noreferrer">
                <span
                  class="inline-flex items-center text-sm px-2.5 py-1.5 bg-teal-50 dark:bg-teal-400 dark:bg-opacity-10 text-teal-500 dark:text-teal-400 ring-1 ring-inset ring-teal-500 dark:ring-teal-400 ring-opacity-25 dark:ring-opacity-25 relative rounded-full font-semibold dark:hover:bg-teal-400/15 dark:hover:ring-teal-700">
                  <span>HuLa {{ config.MasterVersion }} is out</span>
                  <UIcon name="solar:arrow-right-line-duotone" class="w-5 h-5" />
                </span>
              </NuxtLink>
            </div>
            <h1 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
              <span>{{ t('home.title1') }}</span>
              <br />
              <span class="pt-4 text-teal-600 block lg:inline-block">
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
              <div class="flex flex-col justify-center items-center gap-6 w-100">
                <div class="flex flex-col md:flex-row items-center gap-4 md:gap-2">
                  <a
                    class="focus:outline-none flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:focus-visible:outline-teal-400 inline-flex items-center"
                    href="/docs/getting-started/introduction">
                    <span>{{ t('home.get_started') }}</span>
                    <UIcon name="solar:arrow-right-linear" class="w-5 h-5" />
                  </a>
                  <button
                    type="button"
                    class="focus:outline-none focus-visible:outline-0 flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-teal-500 dark:focus-visible:ring-teal-400 inline-flex items-center">
                    <span>{{ t('home.seconds') }}</span>
                    <UIcon name="solar:play-circle-linear" class="w-5 h-5" />
                  </button>
                </div>

                <UCard
                  class="hidden md:block"
                  :ui="{
                    body: { base: 'grid grid-cols-3 gap-4 p-0', padding: 'p-1 sm:p-1' },
                    background: '',
                    shadow: '',
                    divide: '',
                    ring: ''
                  }">
                  <UPopover v-model:open="panelVisible" mode="hover">
                    <div
                      :class="{ 'text-teal-600': panelVisible }"
                      class="group flex items-center gap-2 text-sm bg-gray-100 w-fit px-6 py-2 rounded-md dark:bg-gray-800">
                      <svg class="size-6 group-hover:text-teal-600"><use href="#mac"></use></svg>
                      <span class="group-hover:text-teal-600">MacOS</span>
                      <UIcon
                        name="solar:alt-arrow-down-line-duotone"
                        :class="{ 'rotate-180': panelVisible }"
                        class="w-4 h-4 group-hover:text-teal-600 group-hover:rotate-180" />
                    </div>

                    <template #panel>
                      <div class="p-2 flex flex-col gap-2">
                        <a
                          class="flex items-center gap-4 py-1 px-2 box-border rounded-md hover:bg-gray-100 hover:dark:bg-gray-800"
                          rel="noopener noreferrer"
                          :href="`https://gitee.com/HuLaSpark/HuLa/releases/download/${config.MasterVersion}/HuLa_aarch64.app.tar.gz`">
                          <svg class="size-4 flex-shrink-0"><use href="#to-bottom"></use></svg>
                          <p class="text-end w-full">aarch64.app.tar.gz</p>
                        </a>

                        <a
                          class="flex items-center gap-4 py-1 px-2 box-border rounded-md hover:bg-gray-100 hover:dark:bg-gray-800"
                          rel="noopener noreferrer"
                          :href="`https://gitee.com/HuLaSpark/HuLa/releases/download/${config.MasterVersion}/HuLa_x64.app.tar.gz`">
                          <svg class="size-4 flex-shrink-0"><use href="#to-bottom"></use></svg>
                          <p class="text-end w-full">x64.app.tar.gz</p>
                        </a>

                        <a
                          class="flex items-center gap-4 py-1 px-2 box-border rounded-md hover:bg-gray-100 hover:dark:bg-gray-800"
                          rel="noopener noreferrer"
                          :href="`https://gitee.com/HuLaSpark/HuLa/releases/download/${config.MasterVersion}/HuLa_${config.MasterVersion.replace('v', '')}_aarch64.dmg`">
                          <svg class="size-4 flex-shrink-0"><use href="#to-bottom"></use></svg>
                          <p class="text-end w-full">aarch64.dmg</p>
                        </a>

                        <a
                          class="flex items-center gap-4 py-1 px-2 box-border rounded-md hover:bg-gray-100 hover:dark:bg-gray-800"
                          rel="noopener noreferrer"
                          :href="`https://gitee.com/HuLaSpark/HuLa/releases/download/${config.MasterVersion}/HuLa_${config.MasterVersion.replace('v', '')}_x64.dmg`">
                          <svg class="size-4 flex-shrink-0"><use href="#to-bottom"></use></svg>
                          <p class="text-end w-full">x64.dmg</p>
                        </a>
                      </div>
                    </template>
                  </UPopover>

                  <UDivider label="OR" />

                  <a
                    class="flex items-center gap-2 text-sm bg-gray-100 w-fit px-6 py-2 rounded-md hover:text-teal-600 dark:bg-gray-800"
                    rel="noopener noreferrer"
                    :href="`https://gitee.com/HuLaSpark/HuLa/releases/download/${config.MasterVersion}/HuLa_${config.MasterVersion.replace('v', '')}_x64-setup.exe`">
                    <svg class="size-6"><use href="#windows"></use></svg>
                    <span>Windows</span>
                  </a>
                </UCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 图片 -->
    <div class="w-full flex items-center justify-center" @click="toggleImage">
      <Transition name="fade" mode="out-in">
        <img
          v-if="showFirstImage"
          key="first"
          class="dark:hidden w-full max-w-5xl aspect-auto md:aspect-[5xl] select-none cursor-pointer"
          src="/assets/images/1.png"
          alt="" />
        <img
          v-else
          key="second"
          class="dark:hidden w-full max-w-5xl aspect-auto md:aspect-[5xl] select-none cursor-pointer"
          src="/assets/images/3.png"
          alt="" />
      </Transition>
      <Transition name="fade" mode="out-in">
        <img
          v-if="showFirstImage"
          key="first-dark"
          class="hidden dark:block w-full max-w-5xl aspect-auto md:aspect-[5xl] select-none cursor-pointer"
          src="/assets/images/2.png"
          alt="" />
        <img
          v-else
          key="second-dark"
          class="hidden dark:block w-full max-w-5xl aspect-auto md:aspect-[5xl] select-none cursor-pointer"
          src="/assets/images/4.png"
          alt="" />
      </Transition>
    </div>

    <!-- 页脚部分 -->
    <footer class="bg-white dark:bg-gray-900 w-full">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <!-- 联系方式 -->
        <div class="flex items-start gap-8 mb-8">
          <img class="h-24" src="/assets/logo/hula.png" alt="HuLa Logo" />
          <div class="flex-1 flex flex-col justify-end md:flex-row gap-10 md:gap-40">
            <div>
              <h3 class="text-md font-semibold text-gray-900 dark:text-white mb-4">{{ t('foot.title.item1') }}</h3>
              <div class="space-y-3 text-gray-600 dark:text-gray-300">
                <p class="flex items-center gap-2">
                  <UIcon name="i-heroicons-envelope" class="w-4 h-4 text-teal-500" />
                  <a href="mailto:contact@hula.com" class="hover:text-teal-500 text-sm">2439646234@qq.com</a>
                </p>
                <p class="flex items-center gap-2">
                  <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-teal-500" />
                  <span class="text-sm">China</span>
                </p>
              </div>
            </div>
            <div>
              <h3 class="text-md font-semibold text-gray-900 dark:text-white mb-4">{{ t('foot.title.item2') }}</h3>
              <div class="flex space-x-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/HuLaSpark"
                  class="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400">
                  <UIcon name="i-simple-icons-github" class="size-5" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gitee.com/HuLaSpark"
                  class="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400">
                  <UIcon name="i-simple-icons-gitee" class="size-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 class="text-md font-semibold text-gray-900 dark:text-white mb-4">
                {{ t('foot.title.item3.title') }}
              </h3>
              <div class="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                <p>
                  <a href="/docs/getting-started/introduction" class="hover:text-teal-500">{{
                    t('foot.title.item3.i1')
                  }}</a>
                </p>
                <p>
                  <a href="/" class="hover:text-teal-500">{{ t('foot.title.item3.i2') }}</a>
                </p>
                <p>
                  <a href="/" class="hover:text-teal-500">{{ t('foot.title.item3.i3') }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 分隔线 -->
        <div class="border-t border-gray-200 dark:border-gray-800 my-8"></div>
        <!-- 版权信息 -->
        <div class="text-center text-sm text-gray-300 dark:text-gray-600">
          <p>Copyright {{ new Date().getFullYear() }} HuLaSpark All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </main>
</template>
<script setup lang="ts">
const config = useAppConfig()
const { t } = useI18n()
const panelVisible = ref(false)
const showFirstImage = ref(true)

const toggleImage = () => {
  showFirstImage.value = !showFirstImage.value
}

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
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
