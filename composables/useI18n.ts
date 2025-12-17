import en from '~/locales/en.json'
import ru from '~/locales/ru.json'
import uz from '~/locales/uz.json'

type LocaleKey = 'en' | 'ru' | 'uz'

const messages: Record<LocaleKey, Record<string, string>> = {
  en,
  ru,
  uz
}

export const useI18n = () => {
  const locale = useState<LocaleKey>('app-locale', () => {
    if (process.client) {
      const saved = localStorage.getItem('locale') as LocaleKey | null
      return (saved as LocaleKey) || 'uz'
    }
    return 'uz'
  })

  if (process.client) {
    watch(locale, (v) => {
      try { localStorage.setItem('locale', v) } catch (e) {}
      document.documentElement.lang = v
    })
    // set html lang initially
    onMounted(() => { document.documentElement.lang = locale.value })
  }

  const setLocale = (l: LocaleKey) => { locale.value = l }

  const t = (key: string) => {
    const msg = messages[locale.value] && messages[locale.value][key]
    return msg ?? key
  }

  return { locale, setLocale, t }
}

export default useI18n
