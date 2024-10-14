import en from './language/en/import'
import zh from './language/zh/import'
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh',
  messages: {
    en: en,
    zh: zh
  }
}))
