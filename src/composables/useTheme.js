import { ref, watch } from 'vue'

const STORAGE_KEY = 'theme'
const isDark = ref(false)

// Inisialisasi dari localStorage / system preference
const init = () => {
  if (typeof window === 'undefined') return
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  apply()
}

const apply = () => {
  const root = document.documentElement
  if (isDark.value) {
    root.classList.add('dark')
    root.setAttribute('data-theme', 'dark')
  } else {
    root.classList.remove('dark')
    root.setAttribute('data-theme', 'light')
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
}

// Auto apply + persist
watch(isDark, (val) => {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, val ? 'dark' : 'light')
  apply()
})

// Jalankan sekali
init()

export function useTheme() {
  return { isDark, toggleTheme }
}