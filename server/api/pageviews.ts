// 使用 Nuxt 的运行时配置来存储状态
const state = {
  visitors: {} as Record<string, { lastVisit: string }>,
  totalViews: 0,
  dailyViews: {} as Record<string, number>
}

export default defineEventHandler(async (event) => {
  const today = new Date().toDateString()
  const body = await readBody(event)
  const { visitorId } = body

  if (!visitorId) {
    return createError({
      statusCode: 400,
      message: 'Visitor ID is required'
    })
  }

  const visitor = state.visitors[visitorId]

  // 初始化或更新今日访问量
  if (!state.dailyViews[today]) {
    state.dailyViews = { [today]: 0 } // 重置，只保留今天的记录
  }

  if (!visitor) {
    // 新访客
    state.visitors[visitorId] = { lastVisit: today }
    state.totalViews++
    state.dailyViews[today]++
  } else if (visitor.lastVisit !== today) {
    // 老访客，今天第一次访问
    visitor.lastVisit = today
    state.totalViews++
    state.dailyViews[today]++
  }

  return {
    totalViews: state.totalViews,
    dailyViews: state.dailyViews[today] || 0
  }
})
