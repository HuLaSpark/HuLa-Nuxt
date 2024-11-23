import FingerprintJS from '@fingerprintjs/fingerprintjs'

type PageViewsResponse = {
  totalViews: number
  dailyViews: number
}

export const usePageViews = () => {
  const totalViews = ref(0)
  const dailyViews = ref(0)

  const formatViewCount = (count: number): string => {
    if (count >= 10000) {
      return (count / 10000).toFixed(1) + 'w'
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k'
    }
    return count.toString()
  }

  const initializeViews = async () => {
    try {
      // 初始化 FingerprintJS
      const fp = await FingerprintJS.load()
      const result = await fp.get()
      const visitorId = result.visitorId

      // 调用服务器 API 记录访问
      const { data } = await useFetch<PageViewsResponse>('/api/pageviews', {
        method: 'POST',
        body: { visitorId }
      })

      if (data.value) {
        totalViews.value = data.value.totalViews
        dailyViews.value = data.value.dailyViews
      }
    } catch (error) {
      console.error('Failed to initialize page views:', error)
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
