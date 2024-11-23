import FingerprintJS from '@fingerprintjs/fingerprintjs'

export const usePageViews = () => {
  const totalViews = ref(0)
  const dailyViews = ref(0)

  const STORAGE_KEY = 'hula_page_views'
  const DAILY_KEY = 'hula_daily_views'
  const LAST_VISIT_KEY = 'hula_last_visit'
  const VISITORS_KEY = 'hula_visitors'
  const MAX_DAYS_TO_KEEP = 30 // 保留30天的访客记录

  const formatViewCount = (count: number): string => {
    if (count >= 10000) {
      return (count / 10000).toFixed(1) + 'w'
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k'
    }
    return count.toString()
  }

  // 清理旧的访客记录
  const cleanupOldRecords = (visitors: Record<string, string>) => {
    const now = new Date()
    const cutoffDate = new Date(now.setDate(now.getDate() - MAX_DAYS_TO_KEEP))

    return Object.entries(visitors).reduce(
      (acc, [id, dateStr]) => {
        if (new Date(dateStr) >= cutoffDate) {
          acc[id] = dateStr
        }
        return acc
      },
      {} as Record<string, string>
    )
  }

  const initializeViews = async () => {
    try {
      // 初始化 FingerprintJS
      const fp = await FingerprintJS.load()
      const result = await fp.get()
      const visitorId = result.visitorId

      // 获取已访问的访客记录 (使用更紧凑的数据结构)
      const visitorsStr = localStorage.getItem(VISITORS_KEY) || '{}'
      const visitors: Record<string, string> = JSON.parse(visitorsStr) // { visitorId: lastVisitDate }

      // 定期清理旧记录
      const cleanedVisitors = cleanupOldRecords(visitors)

      const today = new Date().toDateString()
      const visitorLastVisit = visitors[visitorId]

      // 获取当前的访问量
      totalViews.value = parseInt(localStorage.getItem(STORAGE_KEY) || '0')
      dailyViews.value = parseInt(localStorage.getItem(DAILY_KEY) || '0')

      // 检查是否是新的一天
      const lastVisit = localStorage.getItem(LAST_VISIT_KEY)

      if (lastVisit !== today) {
        // 新的一天，重置每日访问量
        dailyViews.value = 1
        localStorage.setItem(DAILY_KEY, '1')
        localStorage.setItem(LAST_VISIT_KEY, today)

        // 清空当天之前的访客记录
        Object.keys(cleanedVisitors).forEach((key) => {
          if (cleanedVisitors[key] !== today) {
            delete cleanedVisitors[key]
          }
        })
      }

      if (!visitorLastVisit) {
        // 新访客
        cleanedVisitors[visitorId] = today

        // 增加访问量
        totalViews.value++
        dailyViews.value = Object.values(cleanedVisitors).filter((date) => date === today).length

        // 更新存储
        localStorage.setItem(STORAGE_KEY, totalViews.value.toString())
        localStorage.setItem(DAILY_KEY, dailyViews.value.toString())
      } else if (visitorLastVisit !== today) {
        // 老访客，但是今天第一次访问
        cleanedVisitors[visitorId] = today

        // 增加访问量
        totalViews.value++
        dailyViews.value = Object.values(cleanedVisitors).filter((date) => date === today).length

        // 更新存储
        localStorage.setItem(STORAGE_KEY, totalViews.value.toString())
        localStorage.setItem(DAILY_KEY, dailyViews.value.toString())
      }

      // 保存清理后的访客记录
      localStorage.setItem(VISITORS_KEY, JSON.stringify(cleanedVisitors))
    } catch (error) {
      console.error('Failed to initialize fingerprint:', error)
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
