<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'
import { useLocale } from '@/composables/useLocale'

const route = useRoute()
const mobileOpen = ref(false)

// Theme & Locale
const { isDark, toggleTheme } = useTheme()
const { locale, toggleLocale, t } = useLocale()

// Nav links — pakai key i18n
const links = computed(() => [
  { label: t('nav.dashboard'), to: '/' },
  { label: t('nav.background'), to: '/background' },
  { label: t('nav.portfolio'), to: '/portfolio' },
])

// Tutup mobile menu saat resize ke desktop
const onResize = () => {
  if (window.innerWidth >= 768) mobileOpen.value = false
}

// Cegah body scroll saat mobile menu terbuka
watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

// Tutup mobile menu otomatis saat route berganti
watch(
  () => route.path,
  () => {
    mobileOpen.value = false
  }
)

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  document.body.style.overflow = ''
})
</script>

<template>
  <nav class="fixed top-4 left-0 right-0 z-50 flex justify-center pt-4" aria-label="Navigasi utama">
    <div class="nav-pill">
      <!-- Desktop Links -->
      <div class="hidden md:flex items-center">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" :class="[
          'nav-link',
          route.path === link.to ? 'active' : '',
        ]">
          {{ link.label }}
        </RouterLink>
      </div>

      <!-- Divider (desktop) -->
      <span class="hidden md:block w-px h-5 bg-border mx-2" aria-hidden="true" />

      <!-- ================= ACTIONS ================= -->
      <div class="flex items-center gap-1">
        <!-- Toggle Theme (matahari / bulan) -->
        <button type="button" class="btn-ghost p-2 rounded-full" :aria-label="t('nav.toggleTheme')"
          :title="isDark ? t('theme.light') : t('theme.dark')" @click="toggleTheme">
          <!-- Sun icon (muncul saat dark → klik untuk ke light) -->
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor"
            stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <!-- Moon icon (muncul saat light → klik untuk ke dark) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor"
            stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>

        <!-- Toggle Language -->
        <button type="button" class="btn-ghost px-2.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide"
          :aria-label="t('nav.switchLanguage')" :title="t('nav.switchLanguage')" @click="toggleLocale">
          {{ locale === 'en' ? 'ID' : 'EN' }}
        </button>

        <!-- Mobile: hamburger -->
        <button type="button" class="md:hidden btn-ghost p-2" :aria-expanded="mobileOpen" aria-controls="mobile-menu"
          :aria-label="mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')" @click="mobileOpen = !mobileOpen">
          <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor"
            stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor"
            stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <Transition enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in" enter-from-class="opacity-0 -translate-y-2"
      leave-to-class="opacity-0 -translate-y-2">
      <div v-if="mobileOpen" id="mobile-menu"
        class="md:hidden absolute top-16 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm bg-bg-secondary/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl">
        <div class="flex flex-col gap-1 px-3 py-3">
          <RouterLink v-for="link in links" :key="link.to" :to="link.to" :class="[
            'px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-center',
            route.path === link.to
              ? 'text-text-primary font-semibold bg-white/5'
              : 'text-text-secondary hover:text-text-primary hover:bg-white/5',
          ]" @click="mobileOpen = false">
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>