<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
let observer = null

// ✏️ EDIT: Your skills – grouped by category
const skillGroups = [
  {
    title: 'Frontend',
    icon: 'palette',
    skills: ['HTML / CSS', 'JavaScript', 'TypeScript', 'Vue.js', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST API'],
  },
  {
    title: 'Tools & DevOps',
    icon: 'wrench',
    skills: ['Git', 'Docker', 'Linux', 'VS Code', 'Figma', 'CI/CD'],
  },
  {
    title: 'Soft Skills',
    icon: 'users',
    skills: ['Problem Solving', 'Communication', 'Team Work', 'Time Management', 'Adaptability', 'Fast Learner'],
  },
]

onMounted(() => {
  const targets = sectionRef.value?.querySelectorAll('.fade-up') ?? []

  // Fallback browser lama
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('visible'))
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.05, rootMargin: '0px' }
  )

  targets.forEach((el) => observer.observe(el))
})

onUnmounted(() => {
  observer?.disconnect()
  observer = null
})
</script>

<template>
  <section
    id="skills"
    ref="sectionRef"
    aria-labelledby="skills-heading"
    class="py-16"
  >
    <div class="section-container">
      <!-- Section Header -->
      <div class="text-center mb-12 fade-up">
        <span class="badge badge-filled mb-4 inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3"
            fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m16 18 6-6-6-6" />
            <path d="m8 6-6 6 6 6" />
          </svg>
          Tech Stack
        </span>

        <h2 id="skills-heading" class="text-3xl lg:text-4xl font-bold mb-4">
          Teknologi yang <span class="text-highlight">Saya Gunakan</span>
        </h2>

        <p class="text-text-secondary max-w-2xl mx-auto text-lg">
          <!-- ✏️ EDIT: Section subtitle -->
          Berikut beberapa teknologi dan skill yang saya kuasai
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(group, index) in skillGroups"
          :key="group.title"
          class="fade-up card hover-lift p-6"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <!-- Group Header -->
          <div class="flex items-center gap-3 mb-5">
            <div
              class="w-10 h-10 bg-bg-muted rounded-xl flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              <!-- Palette -->
              <svg
                v-if="group.icon === 'palette'"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-text-primary"
                fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
              >
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
              </svg>

              <!-- Server -->
              <svg
                v-else-if="group.icon === 'server'"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-text-primary"
                fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
              >
                <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                <line x1="6" x2="6.01" y1="6" y2="6" />
                <line x1="6" x2="6.01" y1="18" y2="18" />
              </svg>

              <!-- Wrench -->
              <svg
                v-else-if="group.icon === 'wrench'"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-text-primary"
                fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>

              <!-- Users -->
              <svg
                v-else-if="group.icon === 'users'"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-text-primary"
                fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </div>

            <h3 class="text-base font-semibold text-text-primary">{{ group.title }}</h3>
          </div>

          <!-- Skill Tags -->
          <ul class="flex flex-wrap gap-2">
            <li v-for="skill in group.skills" :key="skill">
              <span
                class="badge text-xs hover:border-accent hover:text-text-primary transition-all cursor-default select-none"
              >
                {{ skill }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  will-change: opacity, transform;
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .fade-up {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>