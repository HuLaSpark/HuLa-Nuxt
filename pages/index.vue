<template>
  <main class="min-h-[calc(100vh-var(--header-height))] relative bg-[#f8fafc] dark:bg-[#111729]">
    <img
      class="pointer-events-none absolute w-full top-[1px] text-teal flex-shrink-0 z-10"
      src="/assets/svg/header.svg"
      alt="" />

    <!-- 首页介绍 -->
    <div class="bg-[#f8fafc] dark:bg-[#111729] min-h-screen relative overflow-hidden">
      <div class="absolute inset-0">
        <div
          class="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-[#e2e8f0] to-[#f8fafc] dark:from-[#111729] dark:via-[#0c1322] dark:to-[#111729] opacity-60 dark:opacity-80"></div>
        <div
          class="absolute inset-0 bg-[url('/assets/svg/grid-light.svg')] dark:bg-[url('/assets/svg/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
          <div class="photon-effect light-photon dark:dark-photon"></div>
          <div class="photon-effect light-photon dark:dark-photon delay-2"></div>
          <div class="photon-effect light-photon dark:dark-photon delay-4"></div>
        </div>
      </div>

      <div class="relative pt-20 pb-16 sm:pb-24 lg:pb-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <!-- Hero Section -->
          <div class="text-center relative z-[1]">
            <div class="mb-8 animate-fade-in">
              <NuxtLink to="https://github.com/HuLaSpark/HuLa" target="_blank" rel="noopener noreferrer">
                <span
                  class="inline-flex items-center text-sm px-3 py-1.5 bg-teal-50 dark:bg-teal-400/10 text-teal-500 dark:text-teal-400 ring-1 ring-inset ring-teal-500/25 dark:ring-teal-400/25 rounded-full font-semibold transition hover:bg-teal-100 dark:hover:bg-teal-400/15">
                  <span>HuLa {{ config.MasterVersion }} 现已发布</span>
                  <UIcon name="solar:arrow-right-line-duotone" class="w-5 h-5 ml-1" />
                </span>
              </NuxtLink>
            </div>

            <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl mb-6">
              <span class="block">{{ t('home.title1') }}</span>
              <span class="block mt-2 text-teal-600 dark:text-teal-500">{{ t('home.title2') }}</span>
            </h1>

            <p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ t('home.description1') }}
              <a
                href="https://github.com/HuLaSpark/HuLa"
                target="_blank"
                rel="noopener noreferrer"
                class="text-teal-600 dark:text-teal-400 hover:underline">
                {{ t('home.description2') }}
              </a>
              {{ t('home.description3') }}
            </p>

            <!-- Project Stats -->
            <div class="mt-8 flex justify-center gap-8 text-sm">
              <div class="flex items-center gap-4">
                <span class="text-2xl font-bold text-teal-600">{{ totalViews }}</span>
                <span class="text-gray-600 dark:text-gray-400">总访问量</span>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-2xl font-bold text-teal-600">{{ dailyViews }}</span>
                <span class="text-gray-600 dark:text-gray-400">今日访问</span>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="mt-10 flex flex-wrap items-center justify-center gap-6">
              <a
                href="/docs/getting-started/introduction"
                class="inline-flex items-center px-6 py-3 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition shadow-lg shadow-teal-500/20">
                <span class="font-medium">{{ t('home.get_started') }}</span>
                <UIcon name="solar:arrow-right-linear" class="w-5 h-5 ml-2" />
              </a>
              <div v-if="!isMobile" class="hidden md:block">
                <!-- Mac下载按钮 -->
                <UPopover v-if="system === 'mac'" v-model:open="panelVisible" mode="hover">
                  <div class="flex items-center gap-4">
                    <div
                      :class="{ 'text-teal-600': panelVisible }"
                      class="group flex items-center gap-2 text-sm bg-[#fefefe] w-fit px-6 py-2 rounded-md dark:bg-gray-800">
                      <svg class="size-6 group-hover:text-teal-600"><use href="#mac"></use></svg>
                      <span class="group-hover:text-teal-600">MacOS</span>
                      <UIcon
                        name="solar:alt-arrow-down-line-duotone"
                        :class="{ 'rotate-180': panelVisible }"
                        class="w-4 h-4 group-hover:text-teal-600 group-hover:rotate-180" />
                    </div>
                    <div class="flex items-center gap-2 text-sm text-gray-500">
                      <UIcon name="i-heroicons-arrow-down-circle" class="w-5 h-5" />
                      <span>{{ getDownloadCount('mac') }}</span>
                    </div>
                  </div>

                  <template #panel>
                    <div class="p-2 flex flex-col gap-2">
                      <a
                        v-for="(item, index) in macDownloads"
                        :key="index"
                        class="flex items-center gap-4 py-1 px-2 box-border rounded-md hover:bg-gray-100 hover:dark:bg-gray-800"
                        rel="noopener noreferrer"
                        :href="item.url"
                        @click="() => incrementDownloadCount('mac')">
                        <svg class="size-4 flex-shrink-0"><use href="#to-bottom"></use></svg>
                        <p class="text-end w-full">{{ item.label }}</p>
                      </a>
                    </div>
                  </template>
                </UPopover>

                <!-- Windows下载按钮 -->
                <template v-if="system === 'windows'">
                  <div class="flex items-center gap-4">
                    <a
                      class="group flex items-center gap-2 text-sm bg-gray-100 px-6 py-2 rounded-md hover:text-teal-600 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      rel="noopener noreferrer"
                      :href="windowsDownload.url"
                      @click="() => incrementDownloadCount('windows')">
                      <svg class="size-6 group-hover:text-teal-600"><use href="#windows"></use></svg>
                      <span class="group-hover:text-teal-600">Windows</span>
                    </a>
                    <div class="flex items-center gap-2 text-sm text-gray-500">
                      <UIcon name="i-heroicons-arrow-down-circle" class="w-5 h-5" />
                      <span>{{ getDownloadCount('windows') }}</span>
                    </div>
                  </div>
                </template>
              </div>
              <div v-else class="text-center py-4 text-gray-500">移动端版本敬请期待</div>
            </div>
          </div>

          <!-- Key Features -->
          <div class="mt-32 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div
              class="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:border-teal-500 dark:hover:border-teal-500 transition group">
              <div class="absolute -top-4 left-4">
                <span
                  class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500 text-white transform group-hover:scale-110 transition">
                  <UIcon name="solar:chat-dots-bold" class="w-5 h-5" />
                </span>
              </div>
              <h3
                class="mt-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition">
                即时通讯
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                支持文本、图片、语音等多种消息类型，实现流畅的即时通讯体验。基于 WebSocket
                的实时通信，确保消息的及时送达。
              </p>
            </div>

            <div
              class="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:border-teal-500 dark:hover:border-teal-500 transition group">
              <div class="absolute -top-4 left-4">
                <span
                  class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500 text-white transform group-hover:scale-110 transition">
                  <UIcon name="solar:shield-keyhole-bold" class="w-5 h-5" />
                </span>
              </div>
              <h3
                class="mt-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition">
                安全可靠
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                采用端到端加密技术，确保用户隐私和数据安全。支持消息加密传输，保护您的通信内容不被窃取。
              </p>
            </div>

            <div
              class="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:border-teal-500 dark:hover:border-teal-500 transition group">
              <div class="absolute -top-4 left-4">
                <span
                  class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500 text-white transform group-hover:scale-110 transition">
                  <UIcon name="solar:code-square-bold" class="w-5 h-5" />
                </span>
              </div>
              <h3
                class="mt-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition">
                开源生态
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                完全开源，支持自定义开发和扩展，打造属于你的IM系统。提供丰富的API接口，方便与其他系统集成。
              </p>
            </div>

            <div
              class="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:border-teal-500 dark:hover:border-teal-500 transition group">
              <div class="absolute -top-4 left-4">
                <span
                  class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500 text-white transform group-hover:scale-110 transition">
                  <UIcon name="solar:widget-bold" class="w-5 h-5" />
                </span>
              </div>
              <h3
                class="mt-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition">
                跨平台支持
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                支持 Windows、MacOS 等多个平台，提供统一的用户体验。基于 Tauri 构建，确保应用性能和稳定性。
              </p>
            </div>

            <div
              class="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:border-teal-500 dark:hover:border-teal-500 transition group">
              <div class="absolute -top-4 left-4">
                <span
                  class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500 text-white transform group-hover:scale-110 transition">
                  <UIcon name="solar:user-plus-bold" class="w-5 h-5" />
                </span>
              </div>
              <h3
                class="mt-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition">
                社区驱动
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                活跃的开发者社区，持续提供功能更新和问题修复。欢迎参与项目开发，共同打造更好的即时通讯工具。
              </p>
            </div>

            <div
              class="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:border-teal-500 dark:hover:border-teal-500 transition group">
              <div class="absolute -top-4 left-4">
                <span
                  class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500 text-white transform group-hover:scale-110 transition">
                  <UIcon name="solar:settings-bold" class="w-5 h-5" />
                </span>
              </div>
              <h3
                class="mt-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition">
                高度可定制
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
                提供丰富的配置选项，满足不同场景的需求。支持主题定制、插件扩展，打造个性化的通讯工具。
              </p>
            </div>
          </div>

          <!-- 图片 -->
          <div class="mt-32 w-full flex items-center justify-center" @click="toggleImage">
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

          <!-- Technical Features -->
          <div class="mt-32 relative">
            <!-- Background glow effect -->
            <div
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none">
              <div
                class="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-blue-500/30 blur-[64px] opacity-20 animate-pulse"></div>
            </div>

            <div class="text-center mb-16 relative">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white">技术特性</h2>
              <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">基于现代化技术栈，提供强大的功能支持</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              <div
                class="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm group hover:scale-[1.02] transition duration-300 hover:shadow-xl">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <UIcon name="solar:server-bold" class="w-6 h-6 mr-2 text-teal-500" />
                  后端架构
                </h3>
                <ul class="space-y-3 text-gray-600 dark:text-gray-400">
                  <li class="flex items-center">
                    <UIcon name="solar:check-circle-bold" class="w-5 h-5 mr-2 text-teal-500" />
                    基于 Spring Boot 的微服务架构
                  </li>
                  <li class="flex items-center">
                    <UIcon name="solar:check-circle-bold" class="w-5 h-5 mr-2 text-teal-500" />
                    高性能的 WebSocket 服务
                  </li>
                  <li class="flex items-center">
                    <UIcon name="solar:check-circle-bold" class="w-5 h-5 mr-2 text-teal-500" />
                    分布式消息队列支持
                  </li>
                </ul>
              </div>

              <div
                class="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm group hover:scale-[1.02] transition duration-300 hover:shadow-xl">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <UIcon name="solar:screencast-2-bold" class="w-6 h-6 mr-2 text-teal-500" />
                  客户端技术
                </h3>
                <ul class="space-y-3 text-gray-600 dark:text-gray-400">
                  <li class="flex items-center">
                    <UIcon name="solar:check-circle-bold" class="w-5 h-5 mr-2 text-teal-500" />
                    Tauri + Vue3 + Typescript 构建
                  </li>
                  <li class="flex items-center">
                    <UIcon name="solar:check-circle-bold" class="w-5 h-5 mr-2 text-teal-500" />
                    优雅的UI设计和交互体验
                  </li>
                  <li class="flex items-center">
                    <UIcon name="solar:check-circle-bold" class="w-5 h-5 mr-2 text-teal-500" />
                    高效的消息处理机制
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 技术栈 -->
    <div class="w-full py-20 flex flex-col items-center justify-center relative overflow-hidden">
      <!-- Background glow effect -->
      <div class="text-center max-w-4xl mx-auto px-4 relative">
        <span class="text-sm font-semibold text-teal-500 dark:text-teal-400 mb-3 block"> Open Source Technology </span>
        <h2
          class="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Built with cutting-edge technology
        </h2>

        <!-- Overlapping Cards -->
        <div class="relative mt-12 mb-16">
          <!-- Background glow effect -->
          <div
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none">
            <div
              class="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-blue-500/30 blur-[64px] opacity-20 animate-pulse"></div>
          </div>

          <!-- Cards Container -->
          <div class="relative grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1000">
            <!-- First Card -->
            <div class="group">
              <div
                class="aspect-square bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:z-10 hover:border-teal-500/50 dark:hover:border-teal-400/50">
                <div class="h-full flex flex-col">
                  <div class="flex items-start gap-4 mb-4">
                    <img src="~/assets/home/hulaspark.png" alt="User Avatar" class="w-12 h-12 rounded-full" />
                    <div class="flex-1">
                      <div class="font-semibold text-gray-900 dark:text-white">HuLa Community</div>
                      <div class="text-sm text-teal-500 dark:text-teal-400">Open Source Contributor</div>
                    </div>
                  </div>
                  <p class="text-gray-600 dark:text-gray-400 flex-1 text-left leading-relaxed">
                    "HuLa's modern tech stack makes development a breeze. The combination of Vue 3, TypeScript, and
                    Tauri creates an incredibly powerful foundation for building cross-platform applications."
                  </p>
                </div>
              </div>
            </div>

            <!-- Second Card -->
            <div class="group">
              <div
                class="aspect-square bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:z-10 hover:border-teal-500/50 dark:hover:border-teal-400/50">
                <div class="h-full flex flex-col">
                  <div class="flex items-start gap-4 mb-4">
                    <img src="~/assets/home/unocss.png" alt="Developer Avatar" class="w-12 h-12 rounded-full" />
                    <div class="flex-1">
                      <div class="font-semibold text-gray-900 dark:text-white">Developer Experience</div>
                      <div class="text-sm text-teal-500 dark:text-teal-400">Core Team</div>
                    </div>
                  </div>
                  <p class="text-gray-600 dark:text-gray-400 flex-1 text-left leading-relaxed">
                    "The integration of Vite and UnoCSS provides an exceptional developer experience with instant HMR
                    and utility-first styling. Perfect for rapid development and prototyping."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p class="text-gray-600 dark:text-gray-400 text-lg relative">
          HuLa is proudly built with modern open-source technologies, ensuring reliability, performance, and developer
          experience.
        </p>
      </div>

      <div class="flex items-center justify-center gap-8 flex-wrap mt-12">
        <a href="https://vitejs.dev" target="_blank" rel="noopener" class="group">
          <img
            class="h-8 lg:h-10 rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
            src="~/assets/home/vite.svg"
            alt="vite" />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank" rel="noopener" class="group">
          <img
            class="h-8 lg:h-10 rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
            src="~/assets/home/TS.svg"
            alt="typescript" />
        </a>
        <a href="https://tauri.app" target="_blank" rel="noopener" class="group">
          <img
            class="h-8 lg:h-10 rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
            src="~/assets/home/tauri.png"
            alt="tauri" />
        </a>
        <a href="https://vuejs.org" target="_blank" rel="noopener" class="group">
          <img
            class="h-8 lg:h-10 rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
            src="~/assets/home/vue.png"
            alt="vue" />
        </a>
        <a href="https://unocss.dev" target="_blank" rel="noopener" class="group">
          <img
            class="h-8 lg:h-10 rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
            src="~/assets/home/unocss.png"
            alt="unocss" />
        </a>
      </div>
    </div>

    <!-- Community Section -->
    <div class="mt-32 text-center px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">加入我们</h2>
      <p class="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        HuLa
        是一个开源项目，我们欢迎所有开发者参与贡献。无论是提交代码、报告问题还是改进文档，您的每一份贡献都将帮助我们构建更好的即时通讯工具。
      </p>
      <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4 px-4">
        <a
          href="https://github.com/HuLaSpark/HuLa"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#24292e] text-white hover:bg-[#2f363d] transition">
          <UIcon name="mdi:github" class="w-5 h-5 mr-2" />
          <span class="font-medium">GitHub</span>
        </a>
        <a
          href="/docs/getting-started/introduction"
          class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition">
          <UIcon name="solar:book-bold" class="w-5 h-5 mr-2" />
          <span class="font-medium">开发文档</span>
        </a>
      </div>
    </div>

    <!-- 页脚部分 -->
    <footer class="mt-32 bg-[#f8fafc] dark:bg-gray-900 w-full">
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
                  <a href="mailto:2439646234@qq.com" class="hover:text-teal-500 text-sm">{{ t('foot.title.email') }}</a>
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
        <div class="text-center text-xs text-gray-300 dark:text-gray-600">
          <p>Copyright {{ new Date().getFullYear() }} HuLaSpark All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </main>
</template>
<script setup lang="ts">
import { usePageViews } from '~/hooks/usePageViews'
import { useUserSystem } from '~/hooks/useUserSystem'
import { useDownloadCount } from '~/hooks/useDownloadCount'

const config = useAppConfig()
const { t } = useI18n()
const panelVisible = ref(false)
const showFirstImage = ref(true)
const { totalViews, dailyViews } = usePageViews()
const { system, isMobile } = useUserSystem()
const { incrementDownloadCount, getDownloadCount } = useDownloadCount()

const macDownloads = computed(() => [
  {
    label: 'aarch64.app.tar.gz',
    url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${config.MasterVersion}/HuLa_aarch64.app.tar.gz`,
    filename: 'aarch64.app.tar.gz'
  },
  {
    label: 'x64.app.tar.gz',
    url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${config.MasterVersion}/HuLa_x64.app.tar.gz`,
    filename: 'x64.app.tar.gz'
  },
  {
    label: 'aarch64.dmg',
    url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${config.MasterVersion}/HuLa_${config.MasterVersion.replace('v', '')}_aarch64.dmg`,
    filename: `HuLa_${config.MasterVersion.replace('v', '')}_aarch64.dmg`
  },
  {
    label: 'x64.dmg',
    url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${config.MasterVersion}/HuLa_${config.MasterVersion.replace('v', '')}_x64.dmg`,
    filename: `HuLa_${config.MasterVersion.replace('v', '')}_x64.dmg`
  }
])

const windowsDownload = computed(() => ({
  label: 'x64-setup.exe',
  url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${config.MasterVersion}/HuLa_${config.MasterVersion.replace('v', '')}_x64-setup.exe`,
  filename: `HuLa_${config.MasterVersion.replace('v', '')}_x64-setup.exe`
}))

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

.photon-effect {
  position: absolute;
  width: 2px;
  height: 100%;
  animation: movePhoton 3s linear infinite;
}

.light-photon {
  background: linear-gradient(180deg, transparent, rgba(14, 165, 233, 0.5), transparent);
  opacity: 0.3;
}

.dark-photon {
  background: linear-gradient(180deg, transparent, #fff, transparent);
  opacity: 0.5;
}

.delay-2 {
  animation-delay: 1s;
  left: 30%;
}

.delay-4 {
  animation-delay: 2s;
  left: 70%;
}

@keyframes movePhoton {
  0% {
    transform: translateY(-100%) translateX(-100%);
  }
  100% {
    transform: translateY(100%) translateX(100%);
  }
}
</style>
