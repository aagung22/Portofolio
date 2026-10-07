<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

// ✏️ EDIT: Your name
const authorName = 'Agung Sedayu'
</script>

<template>
  <footer
    class="relative z-10 py-8 border-t border-border"
    aria-label="Footer"
  >
    <div class="section-container">
      <p class="text-sm text-text-muted text-center">
        {{ currentYear }} &copy; {{ authorName }}
      </p>
    </div>
  </footer>
</template>