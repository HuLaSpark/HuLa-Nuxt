export const usePageViews = () => {
  const totalViews = ref(0)
  const dailyViews = ref(0)

  const STORAGE_KEY = 'hula_page_views'
  const DAILY_KEY = 'hula_daily_views'
  const LAST_VISIT_KEY = 'hula_last_visit'

  const formatViewCount = (count: number): string => {
    if (count >= 10000) {
      return (count / 10000).toFixed(1) + 'w'
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k'
    }
    return count.toString()
  }

  const initializeViews = () => {
    // 获取总观看次数
    totalViews.value = parseInt(localStorage.getItem(STORAGE_KEY) || '0')
    // 获取当日观看次数
    dailyViews.value = parseInt(localStorage.getItem(DAILY_KEY) || '0')

    // 检查是否是新的一天
    const lastVisit = localStorage.getItem(LAST_VISIT_KEY)
    const today = new Date().toDateString()

    if (lastVisit !== today) {
      // 新的一天，记录访问并更新计数
      dailyViews.value = 1
      totalViews.value++

      // 更新存储
      localStorage.setItem(DAILY_KEY, '1')
      localStorage.setItem(STORAGE_KEY, totalViews.value.toString())
      localStorage.setItem(LAST_VISIT_KEY, today)
    }
  }

  if (process.client) {
    initializeViews()
  }

  const formattedTotalViews = computed(() => formatViewCount(totalViews.value))
  const formattedDailyViews = computed(() => formatViewCount(dailyViews.value))

  return {
    totalViews: formattedTotalViews,
    dailyViews: formattedDailyViews
  }
}
