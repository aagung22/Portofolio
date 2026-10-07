<script setup>
import { RouterLink } from 'vue-router'

// ✏️ EDIT: Your personal info
const name = 'Agung Sedayu'
const university = 'Universitas Dr. Soetomo Surabaya'

// ✏️ EDIT: Your work experiences
const experiences = [
  {
    prefix: 'Currently working as',
    role: 'Frontend Developer',
    at: 'Tech Company',
  },
  {
    prefix: 'Previously worked as',
    role: 'Web Developer Intern',
    at: 'Digital Innovation Lab',
  },
]

// ✏️ EDIT: Your skills
const skills = [
  'Web Development (Frontend & Backend)',
  'Mobile Development',
  'UI/UX Design',
  'Database Management',
]

// ✏️ EDIT: Your social links
const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/aagung22',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/agung-sedayu22/',
    icon: 'linkedin',
  },
  {
    label: 'Resume',
    href: '#',
    icon: 'resume',
  },
]

// ✏️ EDIT: Closing text
const closingText = "When I'm not coding, I enjoy exploring new technologies and contributing to open source. I'm based in Indonesia - if you want to discuss tech, projects, or just grab a coffee, feel free to reach out!"
</script>

<template>
  <section
    id="dashboard"
    aria-labelledby="dashboard-heading"
    class="min-h-screen flex flex-col justify-center py-16 relative z-10"
  >
    <div class="section-container">
      <!-- Main Title -->
      <div class="animate-fade-up mb-10">
        <h1
          id="dashboard-heading"
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight"
        >
          Hey, I am {{ name }}
        </h1>
      </div>

      <!-- University -->
      <div class="animate-fade-up animate-delay-100 mb-8">
        <p class="text-text-secondary text-base md:text-lg">
          Undergraduated from
          <strong class="text-text-primary font-semibold">{{ university }}</strong>
        </p>
      </div>

      <!-- Experience Lines -->
      <div class="animate-fade-up animate-delay-200 space-y-1 mb-10">
        <p
          v-for="exp in experiences"
          :key="exp.role"
          class="text-text-secondary text-base md:text-lg"
        >
          {{ exp.prefix }}
          <strong class="text-text-primary font-semibold">{{ exp.role }}</strong>
          at
          <strong class="text-text-primary font-semibold">{{ exp.at }}</strong>
        </p>
      </div>

      <!-- Skills -->
      <div class="animate-fade-up animate-delay-300 mb-10">
        <p class="text-text-secondary text-base mb-3">Skilled in</p>
        <ul class="space-y-1 ml-4">
          <li
            v-for="skill in skills"
            :key="skill"
            class="text-text-secondary text-base flex items-start gap-2"
          >
            <span class="text-text-muted mt-2 w-1.5 h-1.5 rounded-full bg-text-secondary flex-shrink-0"></span>
            {{ skill }}
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="animate-fade-up animate-delay-400 mb-10">
        <p class="text-text-secondary text-base md:text-lg">
          Turning innovative ideas into working technology is what drives me forward.
          You can explore my
          <RouterLink to="/portfolio" class="text-text-highlight underline underline-offset-4 hover:opacity-80 transition-opacity">
            full projects portfolio here</RouterLink>.
        </p>
      </div>

      <!-- Social Links -->
      <div class="animate-fade-up animate-delay-500 mb-10">
        <h2 class="text-text-primary font-bold text-lg mb-4">Find me on</h2>
        <div class="flex flex-wrap gap-6">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            <!-- GitHub -->
            <svg
              v-if="social.icon === 'github'"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>

            <!-- LinkedIn -->
            <svg
              v-else-if="social.icon === 'linkedin'"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>

            <!-- Resume -->
            <svg
              v-else-if="social.icon === 'resume'"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            </svg>

            {{ social.label }}
          </a>
        </div>
      </div>

      <!-- Closing Text -->
      <div class="animate-fade-up" style="animation-delay: 600ms;">
        <p class="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl">
          {{ closingText }}
        </p>
      </div>
    </div>
  </section>
</template>