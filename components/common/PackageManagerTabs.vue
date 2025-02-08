<template>
  <div class="flex border-b border-gray-200 dark:border-gray-700 mb-4 items-center overflow-x-auto">
    <div class="flex flex-1 min-w-max">
      <button
        v-for="manager in props.packageManagers"
        :key="manager"
        :class="[
          'px-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors duration-200',
          manager === 'npm' || manager === 'yarn'
            ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed opacity-50'
            : activeManager === manager
              ? 'text-teal-600 dark:text-teal-500 border-b-2 border-teal-400 dark:border-teal-600'
              : ''
        ]"
        :disabled="manager === 'npm' || manager === 'yarn'"
        @click="handleManagerChange(manager)">
        <img :src="managerIcons[manager].icon" :alt="manager" class="w-4 h-4" />
        {{ manager }}
        <span
          v-if="manager === 'pnpm'"
          class="ml-2 px-2 py-0.5 text-xs font-medium text-teal-700 bg-teal-100 rounded-full">
          推荐
        </span>
      </button>
    </div>
    <div class="relative">
      <button
        v-if="activeManager === 'pnpm' || activeManager === 'bun'"
        @click="handleCopy"
        class="ml-4 text-gray-500 hover:text-teal-600 transition-colors relative">
        <Icon name="ph:copy-simple-fill" class="w-5 h-5" />
      </button>
      <div
        v-if="showCopyTooltip"
        class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white text-xs px-2 py-1 rounded shadow-sm inline-flex whitespace-nowrap transition-all duration-300 ease-in-out">
        复制成功
      </div>
    </div>
  </div>
  <slot :activeManager="activeManager"></slot>
</template>

<script setup lang="ts">
const props = defineProps({
  manager: {
    type: String,
    default: 'pnpm'
  },
  packageManagers: {
    type: Array as PropType<string[]>,
    default: () => ['npm', 'yarn', 'pnpm', 'bun']
  }
})

const managerIcons: Record<string, { icon: string; color: string }> = {
  npm: {
    icon: '/assets/svg/npm.svg',
    color: '#CB3837'
  },
  yarn: {
    icon: '/assets/svg/yarn.svg',
    color: '#2C8EBB'
  },
  pnpm: {
    icon: '/assets/svg/pnpm.svg',
    color: '#F69220'
  },
  bun: {
    icon: '/assets/svg/bun.svg',
    color: '#FBF0DF'
  }
}

const activeManager = ref(props.manager)
const showCopyTooltip = ref(false)

const emit = defineEmits(['update:manager', 'copy'])

const handleManagerChange = (manager: string) => {
  if (manager !== 'npm' && manager !== 'yarn') {
    activeManager.value = manager
    emit('update:manager', manager)
  }
}

const handleCopy = () => {
  emit('copy')
  showCopyTooltip.value = true

  setTimeout(() => {
    showCopyTooltip.value = false
  }, 2000)
}
</script>
