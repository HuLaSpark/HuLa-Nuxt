<template>
  <div class="max-w-3xl mx-auto lg:mx-24 px-4 sm:px-6 lg:px-8">
    <div class="mb-8">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">HuLa 介绍</h1>
      <p class="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-400">了解 HuLa 的特性，开始你的第一个项目:</p>
    </div>

    <div class="prose prose-sm max-w-none dark:prose-invert">
      <div class="mb-8">
        <h2 class="text-xl sm:text-2xl font-semibold">什么是 HuLa？</h2>
        <p>
          HuLa 是一个基于 Tauri、Vite 5、Vue 3 和 TypeScript 构建的即时通讯系统。它利用了 Tauri 的跨平台能力和 Vue 3
          的响应式设计，结合了 TypeScript 的类型安全特性和 Vite 5
          的快速构建，为用户提供了一个高效、安全和易用的通讯解决方案。
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-xl sm:text-2xl font-semibold">核心特性</h2>
        <ul class="space-y-4">
          <li class="flex items-start">
            <Icon name="ph:lightning" class="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-teal-600" />
            <div>
              <strong>现代架构</strong>
              <p class="mt-1 text-sm sm:text-base">基于前沿技术构建，实现最佳性能和开发体验。</p>
            </div>
          </li>
          <li class="flex items-start">
            <Icon name="ph:code" class="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-teal-600" />
            <div>
              <strong>开发体验</strong>
              <p class="mt-1 text-sm sm:text-base">良好的开发规范和工具链，封装通用的组件和 API，实现快速开发。</p>
            </div>
          </li>
          <li class="flex items-start">
            <Icon name="ph:rocket" class="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-teal-600" />
            <div>
              <strong>高性能</strong>
              <p class="mt-1 text-sm sm:text-base">使用Rust优化的构建过程和基于Vite 6 的高性能，打造极速应用。</p>
            </div>
          </li>
          <li class="flex items-start">
            <Icon name="ph:puzzle-piece" class="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-teal-600" />
            <div>
              <strong>可扩展性</strong>
              <span class="ml-2 px-2 py-0.5 text-xs font-medium text-purple-700 bg-purple-100 rounded-full">
                Beta
              </span>
              <p class="mt-1 text-sm sm:text-base">丰富的插件和模块生态系统，轻松扩展功能。</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="mb-8">
        <h2 class="text-xl sm:text-2xl font-semibold">快速开始</h2>
        <p class="mb-4 text-sm sm:text-base">准备开始了吗？按照以下步骤启动你的第一个 HuLa 项目:</p>
        <div class="space-y-6">
          <h3 class="text-base sm:text-lg font-medium mb-3">第一步：克隆项目</h3>
          <div class="not-prose bg-[#e1e1e1] dark:bg-gray-800 rounded-lg p-4">
            <div class="flex flex-col gap-4">
              <div class="relative">
                <div class="bg-gray-100 dark:bg-gray-900 p-2 rounded pr-10 text-xs sm:text-sm overflow-x-auto">
                  Gitee: {{ commands.clone.gitee }}
                </div>
                <button
                  @click="copyLink(commands.clone.gitee)"
                  class="absolute top-2 right-2 text-gray-500 hover:text-teal-600 transition-colors">
                  <Icon name="ph:copy-simple-fill" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              <p class="text-center text-sm">或者</p>
              <div class="relative">
                <div class="bg-gray-100 dark:bg-gray-900 p-2 rounded pr-10 text-xs sm:text-sm overflow-x-auto">
                  GitHub: {{ commands.clone.github }}
                </div>
                <button
                  @click="copyLink(commands.clone.github)"
                  class="absolute top-2 right-2 text-gray-500 hover:text-teal-600 transition-colors">
                  <Icon name="ph:copy-simple-fill" class="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>

          <h3 class="text-base sm:text-lg font-medium mb-3">第二步：进入项目目录</h3>
          <div class="not-prose bg-[#e1e1e1] dark:bg-gray-800 rounded-lg p-4">
            <div class="relative">
              <div class="bg-gray-100 dark:bg-gray-900 p-2 rounded pr-10 text-xs sm:text-sm overflow-x-auto">
                {{ commands.directory }}
              </div>
              <button
                @click="copyLink(commands.directory)"
                class="absolute top-2 right-2 text-gray-500 hover:text-teal-600 transition-colors">
                <Icon name="ph:copy-simple-fill" class="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          <h3 class="text-base sm:text-lg font-medium mb-3">第三步：安装依赖</h3>
          <div class="not-prose bg-[#e1e1e1] dark:bg-gray-800 rounded-lg p-4">
            <PackageManagerTabs v-model:manager="activeManager" @copy="copyCommand(commands[activeManager].install)">
              <template #default="{ activeManager }">
                <div>
                  <div
                    v-if="activeManager === 'pnpm'"
                    class="bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs sm:text-sm overflow-x-auto">
                    {{ commands.pnpm.install }}
                  </div>
                  <div
                    v-if="activeManager === 'bun'"
                    class="bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs sm:text-sm overflow-x-auto">
                    {{ commands.bun.install }}
                  </div>
                </div>
              </template>
            </PackageManagerTabs>
          </div>

          <h3 class="text-base sm:text-lg font-medium mb-3">第四步：启动项目</h3>
          <div class="not-prose bg-[#e1e1e1] dark:bg-gray-800 rounded-lg p-4">
            <PackageManagerTabs v-model:manager="activeManager" @copy="copyCommand(commands[activeManager].dev)">
              <template #default="{ activeManager }">
                <div>
                  <div
                    v-if="activeManager === 'pnpm'"
                    class="bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs sm:text-sm overflow-x-auto">
                    {{ commands.pnpm.dev }}
                  </div>
                  <div
                    v-if="activeManager === 'bun'"
                    class="bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs sm:text-sm overflow-x-auto">
                    {{ commands.bun.dev }}
                  </div>
                </div>
              </template>
            </PackageManagerTabs>
          </div>

          <h3 class="text-base sm:text-lg font-medium mb-3">后续(可操作)：打包项目</h3>
          <div class="not-prose bg-[#e1e1e1] dark:bg-gray-800 rounded-lg p-4">
            <PackageManagerTabs v-model:manager="activeManager" @copy="copyCommand(commands[activeManager].build)">
              <template #default="{ activeManager }">
                <div>
                  <div
                    v-if="activeManager === 'pnpm'"
                    class="bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs sm:text-sm overflow-x-auto">
                    {{ commands.pnpm.build }}
                  </div>
                  <div
                    v-if="activeManager === 'bun'"
                    class="bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs sm:text-sm overflow-x-auto">
                    {{ commands.bun.build }}
                  </div>
                </div>
              </template>
            </PackageManagerTabs>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-xl sm:text-2xl font-semibold">为什么选择 HuLa？</h2>
        <p class="text-sm sm:text-base">
          HuLa 将现代 Web 开发的最佳实践与直观的开发体验相结合。无论你是构建小型应用还是大型项目，HuLa
          都能为你提供所需的工具和结构支持，助你取得成功。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})

useSeoMeta({
  title: '产品介绍 · HuLa',
  description: '开始使用 HuLa - 用于构建高效、可扩展应用程序的现代 Web 开发框架'
})

const activeManager = ref('pnpm')

const commands = {
  clone: {
    gitee: 'git clone https://gitee.com/HuLaSpark/HuLa',
    github: 'git clone https://github.com/HuLaSpark/HuLa'
  },
  directory: 'cd HuLa',
  pnpm: {
    install: 'pnpm install',
    dev: 'pnpm run tauri:dev',
    build: 'pnpm run tauri:build'
  },
  bun: {
    install: 'bun install',
    dev: 'bun tauri:dev',
    build: 'bun tauri:build'
  }
} as any

const copyLink = (command: string) => {
  navigator.clipboard
    .writeText(command)
    .then(() => {
      console.log(`Copied: ${command}`)
    })
    .catch((err) => {
      console.error('Failed to copy: ', err)
    })
}

const copyCommand = (command: string) => {
  navigator.clipboard
    .writeText(command)
    .then(() => {
      console.log(`Copied: ${command}`)
    })
    .catch((err) => {
      console.error('Failed to copy: ', err)
    })
}
</script>
