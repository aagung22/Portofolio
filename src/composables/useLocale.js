import { ref, computed } from 'vue'
import en from '../locales/en'
import id from '../locales/id'

const STORAGE_KEY = 'locale'
const messages = { en, id }

const currentLocale = ref(
  (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) || 'en'
)

const setLocale = (loc) => {
  if (!messages[loc]) return
  currentLocale.value = loc
  localStorage.setItem(STORAGE_KEY, loc)
  document.documentElement.setAttribute('lang', loc)
}

const toggleLocale = () => {
  setLocale(currentLocale.value === 'en' ? 'id' : 'en')
}

/**
 * t('nav.dashboard') → ambil string sesuai locale aktif
 */
const t = (key) => {
  const keys = key.split('.')
  let val = messages[currentLocale.value]
  for (const k of keys) {
    val = val?.[k]
    if (val === undefined) return key
  }
  return val
}

export function useLocale() {
  return {
    locale: currentLocale,
    setLocale,
    toggleLocale,
    t,
    availableLocales: computed(() => Object.keys(messages)),
  }
}