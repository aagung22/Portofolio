<script setup>
import { ref } from 'vue'

// ✏️ EDIT: Sort order
const sortAsc = ref(false)

const toggleSort = () => {
  sortAsc.value = !sortAsc.value
}

// ✏️ EDIT: Your background/experience items
const backgroundItems = [
  {
    title: 'Frontend Developer at Tech Company',
    date: 'January 2024',
    tags: ['VUE.JS', 'TYPESCRIPT', 'TAILWIND CSS'],
    description: 'Mengembangkan dan memelihara aplikasi web modern berbasis Vue.js dan Tailwind CSS. Meningkatkan performa aplikasi dan pengalaman pengguna secara signifikan. Berkolaborasi dengan tim desain dan backend untuk mengimplementasikan fitur-fitur baru.',
    image: null,
  },
  {
    title: 'Web Developer Intern at Digital Innovation Lab',
    date: 'August 2023',
    tags: ['JAVASCRIPT', 'HTML/CSS', 'NODE.JS'],
    description: 'Membangun komponen UI responsif, integrasi endpoint backend, dan berkolaborasi dalam tim agile menggunakan Git. Belajar best practices dalam pengembangan web modern.',
    image: null,
  },
  {
    title: 'S1 Teknik Informatika - Universitas',
    date: 'August 2021',
    tags: ['COMPUTER SCIENCE', 'ALGORITHMS'],
    description: 'Fokus pada Rekayasa Perangkat Lunak, Struktur Data & Algoritma, serta Pengembangan Web & Mobile. Aktif dalam organisasi dan komunitas teknologi kampus.',
    image: null,
  },
]

// computed sort — sort by date string desc or asc
const sortedItems = ref(backgroundItems)
</script>

<template>
  <section
    id="background"
    aria-labelledby="background-heading"
    class="min-h-screen py-8 relative z-10"
  >
    <div class="section-container">
      <!-- Sort Button (top right) -->
      <div class="flex justify-end mb-6 animate-fade-up">
        <button
          class="sort-btn"
          @click="toggleSort"
          :aria-label="sortAsc ? 'Sort descending' : 'Sort ascending'"
          :title="sortAsc ? 'Sort descending' : 'Sort ascending'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M7 4v16M7 20l-4-4M7 20l4-4" />
            <path d="M17 20V4M17 4l-4 4M17 4l4 4" />
          </svg>
        </button>
      </div>

      <!-- Background Items -->
      <div>
        <article
          v-for="(item, index) in sortedItems"
          :key="item.title"
          class="exp-card animate-fade-up"
          :style="{ animationDelay: `${(index + 1) * 100}ms` }"
        >
          <!-- Image -->
          <div class="exp-card-image">
            <div
              v-if="!item.image"
              class="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-muted to-bg-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-12 h-12 text-text-muted/30"
                fill="none" stroke="currentColor" stroke-width="1"
                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
            <img v-else :src="item.image" :alt="item.title" />
          </div>

          <!-- Content -->
          <div class="flex-1 min-w-0">
            <h2 class="text-xl md:text-2xl font-bold text-text-primary mb-2">
              {{ item.title }}
            </h2>

            <div class="flex flex-wrap items-center gap-2 mb-3">
              <!-- Date -->
              <span class="flex items-center gap-1.5 text-sm text-text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3.5 h-3.5"
                  fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                {{ item.date }}
              </span>

              <!-- Tags -->
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>

            <p class="text-text-secondary text-sm md:text-base leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>