<template>
  <footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 md:py-12">
    <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      <!-- Product Section -->
      <div class="text-center md:text-left">
        <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-3 md:mb-4">产品展示</h4>
        <nav class="flex flex-col space-y-2">
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-teal-600 transition text-sm">定制</a>
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-teal-600 transition text-sm">路线图</a>
        </nav>
      </div>

      <!-- Developers Section -->
      <div class="text-center md:text-left">
        <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-3 md:mb-4">开发人员</h4>
        <nav class="flex flex-col space-y-2">
          <a
            href="https://github.com/orgs/HuLaSpark/teams"
            class="text-gray-600 dark:text-gray-400 hover:text-teal-600 transition text-sm"
            >HuLaSpark团队</a
          >
        </nav>
      </div>

      <!-- Community Section -->
      <div class="text-center md:text-left">
        <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-3 md:mb-4">社区</h4>
        <nav class="flex flex-col space-y-2">
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-teal-600 transition text-sm">微信群聊</a>
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-teal-600 transition text-sm">QQ</a>
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-teal-600 transition text-sm">HuLa</a>
        </nav>
      </div>

      <!-- Company Section -->
      <div class="text-center md:text-left">
        <h4 class="font-semibold text-gray-800 dark:text-gray-200 mb-3 md:mb-4">团队简介</h4>
        <nav class="flex flex-col space-y-2">
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-teal-600 transition text-sm">关于HuLaSpark</a>
        </nav>
      </div>
    </div>

    <div
      class="container mx-auto px-4 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div class="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
          {{ currentYear }} HuLaSpark. All rights reserved.
        </div>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-teal-600 transition text-xs md:text-sm">
            隐私条款
          </a>
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-teal-600 transition text-xs md:text-sm">
            服务协议
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
