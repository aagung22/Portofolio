<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

// ✏️ EDIT: Your name
const authorName = 'Agung Sedayu'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer
    class="relative z-10 py-10 border-t border-border"
    aria-label="Footer"
  >
    <div class="section-container">
      <div class="flex flex-col items-center gap-6">
        <!-- Back to Top Button -->
        <button
          @click="scrollToTop"
          aria-label="Back to top"
          class="group p-3 rounded-full border border-border bg-surface hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
        >
          <svg
            class="w-5 h-5 text-text-muted group-hover:text-primary transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        <!-- Divider -->
        <div class="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

        <!-- Copyright -->
        <div class="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
          <p class="text-sm text-text-muted">
            &copy; {{ currentYear }} <span class="font-medium text-text">{{ authorName }}</span>
          </p>
          <span class="hidden sm:block text-text-muted/30">•</span>
          <p class="text-xs text-text-muted">
            Made with <span class="text-red-400 animate-pulse">❤</span> in Indonesia
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>