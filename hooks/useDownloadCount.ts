export const useDownloadCount = () => {
  const STORAGE_PREFIX = 'hula_download_'
  const MAC_KEY = STORAGE_PREFIX + 'mac'
  const WINDOWS_KEY = STORAGE_PREFIX + 'windows'

  const incrementDownloadCount = (system: 'mac' | 'windows') => {
    if (process.client) {
      const key = system === 'mac' ? MAC_KEY : WINDOWS_KEY
      const currentCount = parseInt(localStorage.getItem(key) || '0')
      localStorage.setItem(key, (currentCount + 1).toString())
      return currentCount + 1
    }
    return 0
  }

  const getDownloadCount = (system: 'mac' | 'windows') => {
    if (process.client) {
      const key = system === 'mac' ? MAC_KEY : WINDOWS_KEY
      return parseInt(localStorage.getItem(key) || '0')
    }
    return 0
  }

  return {
    incrementDownloadCount,
    getDownloadCount
  }
}
