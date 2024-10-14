const files = import.meta.glob('~/config/language/zh/*.json', { eager: true })

const jsonData = Object.keys(files).reduce((acc: any, key: string) => {
  const fileName = key?.split('/').pop()?.replace('.json', '')
  if (fileName) {
    acc[fileName] = files[key] // 将文件内容添加到对象中
    return acc
  }
}, {})

// 统一导出
export default jsonData
