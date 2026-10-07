<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)

// Navigation links — matching daf2a.com structure: Dashboard, Background, Portfolio
const links = [
  { label: 'Dashboard', to: '/' },
  { label: 'Background', to: '/background' },
  { label: 'Portfolio', to: '/portfolio' },
]

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
  <!-- Centered pill navbar like daf2a.com -->
  <nav
    class="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4"
    aria-label="Navigasi utama"
  >
    <div class="nav-pill">
      <!-- Desktop Links -->
      <div class="hidden md:flex items-center">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :class="[
            'nav-link',
            route.path === link.to ? 'active' : '',
          ]"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <!-- Mobile: hamburger button -->
      <button
        type="button"
        class="md:hidden btn-ghost p-2"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-menu"
        :aria-label="mobileOpen ? 'Tutup menu' : 'Buka menu'"
        @click="mobileOpen = !mobileOpen"
      >
        <svg
          v-if="!mobileOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-2"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        id="mobile-menu"
        class="md:hidden absolute top-16 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm bg-bg-secondary/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl"
      >
        <div class="flex flex-col gap-1 px-3 py-3">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            :class="[
              'px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-center',
              route.path === link.to
                ? 'text-text-primary font-semibold bg-white/5'
                : 'text-text-secondary hover:text-text-primary hover:bg-white/5',
            ]"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>