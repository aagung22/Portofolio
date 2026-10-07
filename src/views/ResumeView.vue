<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
let observer = null

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2024 - Sekarang',
    description: 'Mengembangkan dan memelihara aplikasi web modern berbasis Vue.js dan Tailwind CSS. Meningkatkan performa aplikasi dan pengalaman pengguna secara signifikan.',
    skills: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'REST API']
  },
  {
    role: 'Web Developer Intern',
    company: 'Digital Innovation Lab',
    period: '2023 - 2024',
    description: 'Membangun komponen UI responsif, integrasi endpoint backend, dan berkolaborasi dalam tim agile menggunakan Git.',
    skills: ['JavaScript', 'HTML/CSS', 'Node.js', 'Git']
  }
]

const educations = [
  {
    degree: 'S1 Teknik Informatika',
    institution: 'Universitas',
    period: '2021 - Sekarang',
    description: 'Fokus pada Rekayasa Perangkat Lunak, Struktur Data & Algoritma, serta Pengembangan Web & Mobile.'
  }
]

const certifications = [
  {
    name: 'Front-End Web Developer Certification',
    issuer: 'Dicoding Indonesia',
    year: '2023',
    link: '#'
  },
  {
    name: 'Full Stack JavaScript Career Path',
    issuer: 'Coursera / Progate',
    year: '2023',
    link: '#'
  }
]

onMounted(() => {
  const targets = sectionRef.value?.querySelectorAll('.fade-up') ?? []

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
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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
    id="resume"
    ref="sectionRef"
    aria-labelledby="resume-heading"
    class="py-24 md:py-32 relative min-h-screen"
  >
    <div class="section-container">
      <!-- Section Header -->
      <div class="fade-up mb-12 text-center">
        <span class="text-sm font-semibold text-accent uppercase tracking-widest">
          Resume & Pengalaman
        </span>
        <h2 id="resume-heading" class="text-3xl md:text-4xl font-bold mt-3 mb-4">
          Riwayat <span class="text-highlight">Pendidikan & Karir</span>
        </h2>
        <div class="w-16 h-1 bg-accent rounded-full mx-auto mb-6" aria-hidden="true" />
        <p class="text-text-secondary max-w-2xl mx-auto text-base">
          Ringkasan pengalaman profesional, riwayat pendidikan formal, serta sertifikasi kompetensi.
        </p>
      </div>

      <!-- Action Button (Download CV) -->
      <div class="fade-up flex justify-center mb-12">
        <a
          href="#"
          class="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Unduh Resume (PDF)
        </a>
      </div>

      <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
        <!-- Experience Column -->
        <div class="space-y-6">
          <div class="fade-up flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-text-primary">Pengalaman Kerja</h3>
          </div>

          <div
            v-for="(exp, idx) in experiences"
            :key="idx"
            class="fade-up card p-6 hover-lift relative"
          >
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h4 class="text-lg font-bold text-text-primary">{{ exp.role }}</h4>
              <span class="badge badge-filled text-xs font-medium">{{ exp.period }}</span>
            </div>
            <div class="text-sm font-semibold text-text-highlight mb-3">{{ exp.company }}</div>
            <p class="text-sm text-text-secondary mb-4 leading-relaxed">{{ exp.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in exp.skills"
                :key="skill"
                class="badge text-xs"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <!-- Education & Certifications Column -->
        <div class="space-y-8">
          <!-- Education -->
          <div class="space-y-6">
            <div class="fade-up flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-text-primary">Pendidikan</h3>
            </div>

            <div
              v-for="(edu, idx) in educations"
              :key="idx"
              class="fade-up card p-6 hover-lift"
            >
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 class="text-lg font-bold text-text-primary">{{ edu.degree }}</h4>
                <span class="badge badge-filled text-xs font-medium">{{ edu.period }}</span>
              </div>
              <div class="text-sm font-semibold text-text-highlight mb-3">{{ edu.institution }}</div>
              <p class="text-sm text-text-secondary leading-relaxed">{{ edu.description }}</p>
            </div>
          </div>

          <!-- Certifications -->
          <div class="space-y-4">
            <div class="fade-up flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-text-primary">Sertifikasi</h3>
            </div>

            <div
              v-for="(cert, idx) in certifications"
              :key="idx"
              class="fade-up card p-4 hover-lift flex items-center justify-between gap-4"
            >
              <div>
                <h4 class="text-base font-semibold text-text-primary">{{ cert.name }}</h4>
                <p class="text-xs text-text-secondary">{{ cert.issuer }} &bull; {{ cert.year }}</p>
              </div>
              <span class="badge badge-filled text-xs">Verified</span>
            </div>
          </div>
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
