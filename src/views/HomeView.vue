<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

// ✏️ EDIT: Your personal info
const name = 'Agung Sedayu'
const university = 'Universitas Dr. Soetomo Surabaya'
const role = 'AI Full-Stack Developer'
const email = 'agung@example.com'
const location = 'Surabaya, Indonesia'

// ✏️ EDIT: Your photo URL
const photoUrl = '/images/agung-photo.jpg'

// State untuk kontrol flip (opsional, untuk mobile tap)
const isFlipped = ref(false)

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}

// ✏️ EDIT: Your work experiences
const experiences = [
  {
    prefix: 'Currently Learning as',
    role: 'AI Full-Stack Developer',
    at: 'Dicoding',
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
const closingText = "Beyond coding, I love exploring emerging technologies and giving back to the open-source community. Based in Surabaya, I'm always open to collaborations, tech talks, or a friendly chat over coffee."
</script>

<template>
  <section id="dashboard" aria-labelledby="dashboard-heading"
    class="min-h-screen flex flex-col justify-center py-20 relative z-10">
    <div class="section-container max-w-6xl">

      <!-- Layout Utama: Grid 2 Kolom -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

        <!-- KOLOM KIRI: Semua Teks & Konten -->
        <div class="lg:col-span-2 order-2 lg:order-1">
          <!-- Main Title -->
          <div class="animate-fade-up mb-12">
            <h1 id="dashboard-heading"
              class="text-2xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Hey, I am {{ name }}
            </h1>
          </div>

          <!-- University -->
          <div class="animate-fade-up animate-delay-100 mb-10">
            <p class="text-text-secondary text-base md:text-lg leading-relaxed">
              Undergraduated from
              <strong class="text-text-primary font-semibold">{{ university }}</strong>
            </p>
          </div>

          <!-- Experience Lines -->
          <div class="animate-fade-up animate-delay-200 space-y-4 mb-12">
            <p v-for="exp in experiences" :key="exp.role"
              class="text-text-secondary text-base md:text-lg leading-relaxed">
              {{ exp.prefix }}
              <strong class="text-text-primary font-semibold">{{ exp.role }}</strong>
              at
              <strong class="text-text-primary font-semibold">{{ exp.at }}</strong>
            </p>
          </div>

          <!-- Skills -->
          <div class="animate-fade-up animate-delay-300 mb-12">
            <p class="text-text-secondary text-base md:text-lg mb-4">Skilled in</p>
            <ul class="space-y-3.5 ml-5">
              <li v-for="skill in skills" :key="skill"
                class="text-text-secondary text-base md:text-lg flex items-start gap-3 leading-relaxed">
                <span
                  class="text-text-muted mt-[0.65rem] w-1.5 h-1.5 rounded-full bg-text-secondary flex-shrink-0"></span>
                {{ skill }}
              </li>
            </ul>
          </div>

          <!-- CTA -->
          <div class="animate-fade-up animate-delay-400 mb-12">
            <p class="text-text-secondary text-base md:text-lg leading-relaxed">
              Turning innovative ideas into working technology is what drives me forward.
              You can explore my
              <RouterLink to="/portfolio"
                class="text-text-highlight underline underline-offset-4 hover:opacity-80 transition-opacity">
                full projects portfolio here</RouterLink>.
            </p>
          </div>

          <!-- Social Links -->
          <div class="animate-fade-up animate-delay-500 mb-12">
            <h2 class="text-text-primary font-bold text-lg mb-5">Find me on</h2>
            <div class="flex flex-wrap gap-x-8 gap-y-4">
              <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank"
                rel="noopener noreferrer" class="social-link">
                <!-- GitHub -->
                <svg v-if="social.icon === 'github'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                  stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                  stroke-linejoin="round" aria-hidden="true">
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>

                <!-- LinkedIn -->
                <svg v-else-if="social.icon === 'linkedin'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"
                  fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                  stroke-linejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>

                <!-- Resume -->
                <svg v-else-if="social.icon === 'resume'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                  stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                  stroke-linejoin="round" aria-hidden="true">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                </svg>

                {{ social.label }}
              </a>
            </div>
          </div>

          <!-- Closing Text -->
          <div class="animate-fade-up" style="animation-delay: 600ms;">
            <p class="text-text-muted text-base md:text-lg leading-loose max-w-3xl">
              {{ closingText }}
            </p>
          </div>
        </div>

        <!-- KOLOM KANAN: Kartu Nama Flip -->
        <div class="lg:col-span-1 order-1 lg:order-2 flex justify-center lg:justify-end lg:sticky lg:top-32">
          <div class="animate-fade-up animate-delay-200 relative w-64 md:w-80 lg:w-full lg:max-w-xs xl:max-w-sm">

            <!-- Bingkai Dekorasi Latar -->
            <div
              class="absolute -inset-4 bg-gradient-to-tr from-text-highlight/20 to-transparent rounded-3xl blur-2xl pointer-events-none">
            </div>

            <!-- KARTU NAMA FLIP CONTAINER -->
            <div class="business-card relative w-full aspect-[3/4] [perspective:1500px] cursor-pointer group"
              :class="{ 'is-flipped': isFlipped }" @click="toggleFlip" role="button" tabindex="0"
              :aria-label="`Kartu nama ${name}. Klik untuk membalik.`" @keydown.enter.prevent="toggleFlip"
              @keydown.space.prevent="toggleFlip">
              <!-- INNER: yang berputar -->
              <div
                class="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                :class="{ '[transform:rotateY(180deg)]': isFlipped }">

                <!-- ===== SISI DEPAN: FOTO ===== -->
                <div
                  class="absolute inset-0 rounded-2xl overflow-hidden border-2 border-border-primary/50 shadow-2xl bg-bg-secondary [backface-visibility:hidden]">
                  <img :src="photoUrl" :alt="`Foto ${name}`" class="w-full h-full object-cover object-center"
                    loading="lazy" />

                  <!-- Overlay Gradasi Bawah -->
                  <div
                    class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none">
                  </div>

                  <!-- Nama di depan -->
                  <div class="absolute bottom-0 inset-x-0 p-5 text-left">
                    <p class="text-white font-bold text-lg leading-tight">{{ name }}</p>
                    <p class="text-white/70 text-xs mt-1">{{ role }}</p>
                  </div>

                  <!-- Hint "Hover / Tap" -->
                  <div
                    class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
                    <p class="text-white/90 text-[10px] font-medium tracking-wide flex items-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Flip
                    </p>
                  </div>

                  <!-- Aksen sudut -->
                  <div
                    class="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-text-highlight/60 rounded-tl-2xl pointer-events-none">
                  </div>
                </div>

                <!-- ===== SISI BELAKANG: KARTU NAMA ===== -->
                <div
                  class="absolute inset-0 rounded-2xl overflow-hidden border-2 border-text-highlight/40 shadow-2xl bg-gradient-to-br from-bg-secondary via-bg-secondary to-text-highlight/10 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <!-- Pattern dekoratif -->
                  <div class="absolute inset-0 opacity-[0.04]"
                    style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 16px 16px;">
                  </div>

                  <!-- Konten Kartu Nama -->
                  <div class="relative h-full flex flex-col justify-between p-6">

                    <!-- Header: Logo/Inisial -->
                    <div class="flex items-start justify-between">
                      <div
                        class="w-12 h-12 rounded-xl bg-text-highlight/15 border border-text-highlight/30 flex items-center justify-center">
                        <span class="text-text-highlight font-bold text-lg">
                          {{name.split(' ').map(n => n[0]).join('').slice(0, 2)}}
                        </span>
                      </div>
                      <div
                        class="w-10 h-10 border-r-2 border-t-2 border-text-highlight/40 rounded-tr-xl pointer-events-none">
                      </div>
                    </div>

                    <!-- Info Utama -->
                    <div class="space-y-4">
                      <div>
                        <h3 class="text-text-primary font-bold text-xl leading-tight">{{ name }}</h3>
                        <p class="text-text-highlight text-xs font-medium mt-1 tracking-wide uppercase">{{ role }}</p>
                      </div>

                      <div class="w-12 h-px bg-text-highlight/40"></div>

                      <!-- Detail Kontak -->
                      <ul class="space-y-2.5 text-xs">
                        <li class="flex items-center gap-2.5 text-text-secondary">
                          <svg class="w-3.5 h-3.5 text-text-highlight flex-shrink-0" fill="none" stroke="currentColor"
                            stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span class="truncate">{{ email }}</span>
                        </li>
                        <li class="flex items-center gap-2.5 text-text-secondary">
                          <svg class="w-3.5 h-3.5 text-text-highlight flex-shrink-0" fill="none" stroke="currentColor"
                            stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span class="truncate">{{ location }}</span>
                        </li>
                        <li class="flex items-center gap-2.5 text-text-secondary">
                          <svg class="w-3.5 h-3.5 text-text-highlight flex-shrink-0" fill="none" stroke="currentColor"
                            stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          </svg>
                          <span class="truncate">{{ university }}</span>
                        </li>
                      </ul>
                    </div>

                    <!-- Footer: Sosial Mini -->
                    <div class="flex items-center justify-between pt-4 border-t border-border-primary/50">
                      <div class="flex gap-3">
                        <a v-for="social in socials.slice(0, 2)" :key="social.label" :href="social.href" target="_blank"
                          rel="noopener noreferrer" @click.stop
                          class="text-text-muted hover:text-text-highlight transition-colors duration-200"
                          :aria-label="social.label">
                          <svg v-if="social.icon === 'github'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"
                            fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path
                              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                          <svg v-else-if="social.icon === 'linkedin'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"
                            fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </a>
                      </div>
                      <p class="text-text-muted text-[10px] tracking-wider">INDONESIA</p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Memastikan transform-style bekerja optimal di semua browser */
.business-card {
  -webkit-tap-highlight-color: transparent;
}

/* Aksesibilitas: outline saat fokus keyboard */
.business-card:focus-visible {
  outline: 2px solid var(--color-text-highlight, #60a5fa);
  outline-offset: 4px;
  border-radius: 1rem;
}

/* Fallback untuk browser lama */
@supports not (transform-style: preserve-3d) {
  .business-card .group-hover\:\[transform\:rotateY\(180deg\)\]:hover {
    transform: rotateY(180deg);
  }
}
</style>