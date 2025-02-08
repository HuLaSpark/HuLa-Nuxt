<template>
  <PageBackground>
    <!-- 首页介绍 -->
    <div class="relative pt-20 pb-16 sm:pb-24 lg:pb-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Hero Section -->
        <div class="text-center relative z-[1]">
          <div class="mb-8 animate-fade-in">
            <NuxtLink to="https://github.com/HuLaSpark/HuLa" target="_blank" rel="noopener noreferrer">
              <span
                class="inline-flex items-center text-sm px-3 py-1.5 bg-teal-50 dark:bg-teal-400/10 text-teal-500 dark:text-teal-400 ring-1 ring-inset ring-teal-500/25 dark:ring-teal-400/25 rounded-full font-semibold transition hover:bg-teal-100 dark:hover:bg-teal-400/15">
                <span>HuLa {{ hulaVersion }} 现已发布</span>
                <UIcon name="solar:arrow-right-line-duotone" class="w-5 h-5 ml-1" />
              </span>
            </NuxtLink>
          </div>

          <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl mb-6">
            <span class="block">高度集成的</span>
            <span class="block mt-2 text-teal-600 dark:text-teal-500">IM 框架</span>
          </h1>

          <p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
            HuLa 是一款
            <a
              href="https://github.com/HuLaSpark/HuLa"
              target="_blank"
              rel="noopener noreferrer"
              class="text-teal-600 dark:text-teal-400 hover:underline">
              开源的即时通讯应用程序
            </a>
            功能更全面和强大。
          </p>

          <p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            可集成更多应用插件，满足各种应用场景。
          </p>

          <!-- CTA Buttons -->
          <div class="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href="/docs/getting-started/introduction"
              class="inline-flex items-center px-6 py-3 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition shadow-lg shadow-teal-500/20">
              <span class="font-medium">开始使用</span>
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
                </div>

                <template #panel>
                  <div class="p-2 flex flex-col gap-2">
                    <a
                      v-for="(item, index) in macDownloads"
                      :key="index"
                      class="flex items-center gap-4 py-1 px-2 box-border rounded-md hover:bg-gray-100 hover:dark:bg-gray-800"
                      rel="noopener noreferrer"
                      :href="item.url">
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
                    class="group flex items-center gap-2 text-sm bg-[#fefefe] w-fit px-6 py-2 rounded-md dark:bg-gray-800"
                    rel="noopener noreferrer"
                    :href="windowsDownload.url">
                    <svg class="size-6 group-hover:text-teal-600"><use href="#windows"></use></svg>
                    <span class="group-hover:text-teal-600">Windows</span>
                  </a>
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
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] pointer-events-none">
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

    <!-- 技术栈 -->
    <div class="w-full py-20 flex flex-col items-center justify-center relative overflow-hidden">
      <!-- Background glow effect -->
      <div class="text-center max-w-4xl mx-auto px-4 relative">
        <span class="text-sm font-semibold text-teal-500 dark:text-teal-400 mb-3 block"> 开源技术 </span>
        <h2
          class="pb-1 text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          采用尖端技术构建
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
                    <div class="flex -space-x-4">
                      <img
                        src="~/assets/home/Dawn.jpeg"
                        alt="User Avatar"
                        class="w-12 h-12 rounded-full border-2 border-white" />
                      <img
                        src="~/assets/home/ZOL.jpeg"
                        alt="User Avatar"
                        class="w-12 h-12 rounded-full border-2 border-white" />
                      <img
                        src="~/assets/home/EzLittleChen.jpeg"
                        alt="User Avatar"
                        class="w-12 h-12 rounded-full border-2 border-white" />
                    </div>

                    <div class="flex-1">
                      <div class="font-semibold text-gray-900 dark:text-white">HuLa 社区</div>
                      <div class="text-sm text-teal-500 dark:text-teal-400">开源贡献者</div>
                    </div>
                  </div>
                  <p class="text-sm line-clamp-4 text-gray-600 dark:text-gray-400 flex-1 text-left leading-relaxed">
                    “HuLa 的现代技术栈使开发变得轻而易举。Vue 3、TypeScript 和 Tauri
                    为构建跨平台应用程序奠定了极其强大的基础。”
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
                    <div class="w-12 h-12 relative">
                      <TransitionGroup name="fade">
                        <img
                          v-for="(image, index) in techImages"
                          :key="image.src"
                          :src="image.src"
                          :alt="image.alt"
                          v-show="currentImageIndex === index"
                          class="w-12 h-12 absolute top-0 left-0" />
                      </TransitionGroup>
                    </div>

                    <div class="flex-1">
                      <div class="font-semibold text-gray-900 dark:text-white">开发者经验</div>
                      <div class="text-sm text-teal-500 dark:text-teal-400">核心团队</div>
                    </div>
                  </div>
                  <p class="text-sm line-clamp-4 text-gray-600 dark:text-gray-400 flex-1 text-left leading-relaxed">
                    “Vite 和 UnoCSS 的集成通过即时 HMR 提供了卓越的开发者体验
                    以及实用至上的造型。非常适合快速开发和原型设计。”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p class="text-gray-600 dark:text-gray-400 text-lg relative">
          HuLa 自信地采用现代开源技术构建，确保可靠性、性能和开发人员 经验。
        </p>
      </div>

      <div class="flex items-center justify-center gap-8 flex-wrap mt-12">
        <a href="https://vitejs.dev" target="_blank" rel="noopener" class="group">
          <img
            class="h-8 lg:h-10 rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
            src="/assets/home/vite.svg"
            alt="vite" />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank" rel="noopener" class="group">
          <img
            class="h-8 lg:h-10 rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
            src="/assets/home/TS.svg"
            alt="typescript" />
        </a>
        <a href="https://tauri.app" target="_blank" rel="noopener" class="group">
          <img
            class="h-8 lg:h-10 rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
            src="/assets/home/tauri.png"
            alt="tauri" />
        </a>
        <a href="https://vuejs.org" target="_blank" rel="noopener" class="group">
          <img
            class="h-8 lg:h-10 rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
            src="/assets/home/vue.png"
            alt="vue" />
        </a>
        <a href="https://unocss.dev" target="_blank" rel="noopener" class="group">
          <img
            class="h-8 lg:h-10 rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
            src="/assets/home/unocss.png"
            alt="unocss" />
        </a>
      </div>
    </div>

    <!-- 社区部分 -->
    <div class="relative mt-32 text-center px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">加入我们</h2>
      <p class="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        HuLa
        是一个开源项目，我们欢迎所有开发者参与贡献。无论是提交代码、报告问题还是改进文档，您的每一份贡献都将帮助我们构建更好的即时通讯工具。
      </p>
      <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4 px-4">
        <a
          href="https://github.com/HuLaSpark"
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
    <footer class="relative mt-32 bg-[#f8fafc] dark:bg-gray-900 w-full">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <!-- 联系方式 -->
        <div class="flex items-start gap-8 mb-8">
          <img class="h-24" src="/assets/logo/hula.png" alt="HuLa Logo" />
          <div class="flex-1 flex flex-col justify-end md:flex-row gap-10 md:gap-40">
            <div>
              <h3 class="text-md font-semibold text-gray-900 dark:text-white mb-4">联系我们</h3>
              <div class="space-y-3 text-gray-600 dark:text-gray-300">
                <p class="flex items-center gap-2">
                  <UIcon name="i-heroicons-envelope" class="w-4 h-4 text-teal-500" />
                  <a href="mailto:2439646234@qq.com" class="hover:text-teal-500 text-sm">邮箱</a>
                </p>
                <p class="flex items-center gap-2">
                  <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-teal-500" />
                  <span class="text-sm">China</span>
                </p>
              </div>
            </div>
            <div>
              <h3 class="text-md font-semibold text-gray-900 dark:text-white mb-4">关注我们</h3>
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
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gitcode.com/HuLaSpark"
                  class="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400">
                  <img src="/assets/svg/gitcode.png" alt="GitCode" class="size-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 class="text-md font-semibold text-gray-900 dark:text-white mb-4">快速链接</h3>
              <div class="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                <p>
                  <a href="/docs/getting-started/introduction" class="hover:text-teal-500">文档中心</a>
                </p>
                <p>
                  <a href="/" class="hover:text-teal-500">关于我们</a>
                </p>
                <p>
                  <a href="/" class="hover:text-teal-500">隐私政策</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 分隔线 -->
        <div class="border-t border-gray-200 dark:border-gray-800 my-8"></div>
        <!-- 版权信息 -->
        <div class="text-center text-xs text-gray-300 dark:text-gray-600">
          <p>Copyright © {{ new Date().getFullYear() }} HuLaSpark All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </PageBackground>
</template>
<script setup lang="ts">
import { useUserSystem } from '~/hooks/useUserSystem'

useSeoMeta({
  title: 'HuLa: 一款高度集成的即时通讯应用'
})
const hulaVersion = ref()
const notVersion = ref()
const panelVisible = ref(false)
const showFirstImage = ref(true)
const { system, isMobile } = useUserSystem()
const currentImageIndex = ref(0)
const techImages = ref([
  {
    src: '/assets/home/vite.svg',
    alt: 'Vite'
  },
  {
    src: '/assets/home/unocss.png',
    alt: 'UnoCSS'
  }
])

const macDownloads = computed(() => [
  {
    label: 'aarch64.app.tar.gz',
    url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${hulaVersion.value}/HuLa_aarch64.app.tar.gz`,
    filename: 'aarch64.app.tar.gz'
  },
  {
    label: 'x64.app.tar.gz',
    url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${hulaVersion.value}/HuLa_x64.app.tar.gz`,
    filename: 'x64.app.tar.gz'
  },
  {
    label: 'aarch64.dmg',
    url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${hulaVersion.value}/HuLa_${notVersion.value}_aarch64.dmg`,
    filename: `HuLa_${notVersion.value}_aarch64.dmg`
  },
  {
    label: 'x64.dmg',
    url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${hulaVersion.value}/HuLa_${notVersion.value}_x64.dmg`,
    filename: `HuLa_${notVersion.value}_x64.dmg`
  }
])

const windowsDownload = computed(() => ({
  label: 'x64-setup.exe',
  url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${hulaVersion.value}/HuLa_${notVersion.value}_x64-setup.exe`,
  filename: `HuLa_${notVersion.value}_x64-setup.exe`
}))

const toggleImage = () => {
  showFirstImage.value = !showFirstImage.value
}

let imageRotateInterval: NodeJS.Timeout
const startImageRotation = () => {
  imageRotateInterval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % techImages.value.length
  }, 3000)
}

onMounted(() => {
  fetch(
    'https://gitee.com/api/v5/repos/HuLaSpark/HuLa/tags?access_token=0312a213a6b6882beb96f487e75661a6&sort=updated&direction=desc&page=1&per_page=1',
    {
      method: 'GET'
    }
  )
    .then((res) => res.json())
    .then((res) => {
      hulaVersion.value = res[0].name
      notVersion.value = hulaVersion.value.replace('v', '')
      localStorage.setItem('hulaVersion', hulaVersion.value)
    })
  startImageRotation()
})

onUnmounted(() => {
  clearInterval(imageRotateInterval)
})
</script>

<style scoped>
/** */
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
