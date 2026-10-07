<script setup>
import { ref } from 'vue'

// ✏️ EDIT: Sort state
const sortAsc = ref(false)

const toggleSort = () => {
  sortAsc.value = !sortAsc.value
}

// ✏️ EDIT: Your projects
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart, payment integration, and admin dashboard built with modern web technologies.',
    date: 'July 7, 2024',
    tags: ['VUE.JS', 'NODE.JS', 'MONGODB', 'TAILWIND CSS'],
    likes: 0,
    views: 0,
    contributors: null,
    image: null,
  },
  {
    title: 'Task Management App',
    description: 'A real-time collaborative task board with drag-and-drop, built for team productivity and workflow management.',
    date: 'June 15, 2024',
    tags: ['REACT', 'FIREBASE', 'TAILWIND'],
    likes: 0,
    views: 0,
    contributors: null,
    image: null,
  },
  {
    title: 'Portfolio API',
    description: 'RESTful API with authentication, rate limiting, and comprehensive documentation for portfolio data management.',
    date: 'April 30, 2024',
    tags: ['EXPRESS', 'POSTGRESQL', 'JWT', 'NODE.JS'],
    likes: 0,
    views: 0,
    contributors: null,
    image: null,
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather visualization with geolocation, forecasts, and animated charts for real-time weather data.',
    date: 'February 15, 2024',
    tags: ['VUE.JS', 'CHART.JS', 'API'],
    likes: 1,
    views: 2,
    contributors: 3,
    image: null,
  },
]
</script>

<template>
  <section
    id="portfolio"
    aria-labelledby="portfolio-heading"
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

      <!-- Project List -->
      <div>
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-card animate-fade-up"
          :style="{ animationDelay: `${(index + 1) * 100}ms` }"
        >
          <!-- Content (left) -->
          <div class="flex-1 min-w-0">
            <h2 class="text-xl md:text-2xl font-bold text-text-primary mb-2">
              {{ project.title }}
            </h2>

            <p class="text-text-secondary text-sm md:text-base leading-relaxed mb-3">
              {{ project.description }}
            </p>

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
                {{ project.date }}
              </span>

              <!-- Tags -->
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Stats -->
            <div class="flex items-center gap-4">
              <!-- Likes -->
              <span class="stat-inline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
                {{ project.likes }}
              </span>

              <!-- Views -->
              <span class="stat-inline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                {{ project.views }}
              </span>

              <!-- Contributors -->
              <span v-if="project.contributors" class="stat-inline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                {{ project.contributors }} contributors
              </span>
            </div>
          </div>

          <!-- Project Logo/Image (right) -->
          <div class="project-card-logo">
            <div
              v-if="!project.image"
              class="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-muted to-bg-secondary"
            >
              <span class="text-text-muted text-2xl font-bold">
                {{ project.title.charAt(0) }}
              </span>
            </div>
            <img v-else :src="project.image" :alt="project.title" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>