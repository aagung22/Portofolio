<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'
import Profile from '@/assets/Profile.jpeg'

// ✏️ EDIT: Your personal info
const name = 'Agung Sedayu'
const university = 'Universitas Dr. Soetomo Surabaya'
const role = 'AI Full-Stack Developer'
const email = 'agungsedayuuu28@gmail.com'
const location = 'Surabaya, Indonesia'

// ✏️ EDIT: Your photo URL
const photoUrl = Profile

// State untuk kontrol flip (tap di mobile)
const isFlipped = ref(false)
const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}

// Fallback bila foto gagal dimuat
const photoFailed = ref(false)
const initials = computed(() =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2),
)

// ✏️ EDIT: Your work experiences
const experiences = [
  {
    prefix: 'Currently Learning as',
    role: ' Cohort AI Full-Stack Developer',
    at: 'Asah Dicoding By GoTo',
  },
  {
    prefix: 'Currently Intern as',
    role: 'Web Developer Intern',
    at: 'Yatim Mandiri Group',
  },
]

// ✏️ EDIT: Your skills
const skills = [
  'Web Development',
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
const closingText =
  "Beyond coding, I love exploring emerging technologies and giving back to the open-source community. Based in Surabaya, I'm always open to collaborations, tech talks, or a friendly chat over coffee."
</script>

<template>
  <section id="dashboard" class="dash" aria-labelledby="dashboard-heading">
    <div class="dash__inner">
      <!-- ========== KARTU FLIP ========== -->
      <aside class="dash__card-col">
        <div class="card-wrap">
          <div class="card-glow" aria-hidden="true"></div>

          <div class="card" :class="{ 'is-flipped': isFlipped }" role="button" tabindex="0"
            :aria-label="`Kartu nama ${name}. Klik untuk membalik.`" :aria-pressed="isFlipped" @click="toggleFlip"
            @keydown.enter.prevent="toggleFlip" @keydown.space.prevent="toggleFlip">
            <div class="card__inner">
              <!-- SISI DEPAN -->
              <div class="card__face card__front">
                <img v-if="!photoFailed" :src="photoUrl" :alt="`Foto ${name}`" class="card__photo" loading="lazy"
                  @error="photoFailed = true" />
                <div v-else class="card__placeholder" aria-hidden="true">
                  <span>{{ initials }}</span>
                </div>

                <div class="card__shade" aria-hidden="true"></div>

                <div class="card__caption">
                  <p class="card__name">{{ name }}</p>
                  <p class="card__role">{{ role }}</p>
                </div>

                <div class="card__hint">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" aria-hidden="true">
                    <path
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Flip
                </div>
              </div>

              <!-- SISI BELAKANG -->
              <div class="card__face card__back">
                <div class="card__dots" aria-hidden="true"></div>

                <div class="back">
                  <div class="back__top">
                    <div class="back__logo">{{ initials }}</div>
                  </div>

                  <div class="back__main">
                    <div>
                      <h3 class="back__name">{{ name }}</h3>
                      <p class="back__role">{{ role }}</p>
                    </div>

                    <div class="back__rule"></div>

                    <ul class="back__list">
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                          <path
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{{ email }}</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                          <path
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{{ location }}</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                        <span>{{ university }}</span>
                      </li>
                    </ul>
                  </div>

                  <div class="back__foot">
                    <div class="back__icons">
                      <a v-for="social in socials.slice(0, 2)" :key="social.label" :href="social.href" target="_blank"
                        rel="noopener noreferrer" :aria-label="social.label" @click.stop>
                        <svg v-if="social.icon === 'github'" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                          <path
                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <svg v-else-if="social.icon === 'linkedin'" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          aria-hidden="true">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                    </div>
                    <p class="back__country">INDONESIA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- ========== KONTEN UTAMA ========== -->
      <div class="dash__content">
        <h1 id="dashboard-heading" class="hero-title">
          Hey, I am
          <span class="hero-title__name">{{ name }}</span>
        </h1>

        <p class="lead">
          Undergraduated from
          <strong>{{ university }}</strong>
        </p>

        <!-- Pengalaman -->
        <ul class="exp">
          <li v-for="exp in experiences" :key="exp.role" class="exp__item">
            <span class="exp__dot" aria-hidden="true"></span>
            <p>
              {{ exp.prefix }}
              <strong>{{ exp.role }}</strong>
              at
              <strong>{{ exp.at }}</strong>
            </p>
          </li>
        </ul>

        <!-- Skills -->
        <div class="block">
          <p class="block__label">Skilled in</p>
          <ul class="chips">
            <li v-for="skill in skills" :key="skill" class="chip">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- CTA -->
        <p class="cta">
          Turning innovative ideas into working technology is what drives me forward.
          You can explore my
          <RouterLink to="/portfolio" class="cta__link">full projects portfolio here</RouterLink>.
        </p>

        <!-- Social -->
        <div class="block">
          <h2 class="block__title">Find me on</h2>
          <div class="socials">
            <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank"
              rel="noopener noreferrer" class="social-btn">
              <svg v-if="social.icon === 'github'" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <svg v-else-if="social.icon === 'linkedin'" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <svg v-else-if="social.icon === 'resume'" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              </svg>
              {{ social.label }}
            </a>
          </div>
        </div>

        <!-- Closing -->
        <p class="closing">{{ closingText }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*
  Semua spacing/layout memakai CSS biasa (scoped) supaya tidak bisa
  "dikalahkan" oleh reset global. Warna tetap memakai token tema kamu.
*/
.dash {
  --hl: var(--color-text-highlight, #60a5fa);
  --tx-1: var(--color-text-primary, #f1f5f9);
  --tx-2: var(--color-text-secondary, #94a3b8);
  --tx-3: var(--color-text-muted, #64748b);
  --bg-2: var(--color-bg-secondary, #111827);
  --line: var(--color-border-primary, #1f2937);

  position: relative;
  z-index: 10;
  min-height: 100vh;
  display: flex;
  align-items: center;
  /* ruang untuk navbar yang melayang di atas */
  padding: 7rem 1.25rem 4rem;
}

.dash__inner {
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2.5rem;
}

/* ---------- Kartu ---------- */
.dash__card-col {
  display: flex;
  justify-content: center;
}

.card-wrap {
  position: relative;
  width: min(15rem, 62vw);
}

.card-glow {
  position: absolute;
  inset: -1rem;
  border-radius: 2rem;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--hl) 28%, transparent), transparent);
  filter: blur(24px);
  pointer-events: none;
}

.card {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  perspective: 1500px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.card:focus-visible {
  outline: 2px solid var(--hl);
  outline-offset: 4px;
  border-radius: 1.25rem;
}

.card__inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.card.is-flipped .card__inner {
  transform: rotateY(180deg);
}

/* Hover-flip hanya di perangkat dengan mouse (hindari "nyangkut" di layar sentuh) */
@media (hover: hover) and (pointer: fine) {
  .card:hover .card__inner {
    transform: rotateY(180deg);
  }

  .card.is-flipped:hover .card__inner {
    transform: rotateY(0deg);
  }
}

.card__face {
  position: absolute;
  inset: 0;
  border-radius: 1.25rem;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.55);
}

/* Depan */
.card__front {
  background: var(--bg-2);
  border: 1px solid color-mix(in srgb, var(--tx-1) 14%, transparent);
}

.card__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.card__placeholder {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: linear-gradient(145deg, var(--bg-2), color-mix(in srgb, var(--hl) 18%, var(--bg-2)));
}

.card__placeholder span {
  font-size: 4rem;
  font-weight: 700;
  color: var(--hl);
  letter-spacing: 0.05em;
}

.card__shade {
  position: absolute;
  inset: auto 0 0 0;
  height: 45%;
  background: linear-gradient(to top, rgb(0 0 0 / 0.78), rgb(0 0 0 / 0.25) 55%, transparent);
  pointer-events: none;
}

.card__caption {
  position: absolute;
  inset: auto 0 0 0;
  padding: 1.1rem 1.25rem;
}

.card__name {
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.2;
}

.card__role {
  margin: 0.3rem 0 0;
  color: rgb(255 255 255 / 0.75);
  font-size: 0.78rem;
}

.card__hint {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  color: rgb(255 255 255 / 0.92);
  font-size: 0.68rem;
  font-weight: 500;
  background: rgb(0 0 0 / 0.45);
  border: 1px solid rgb(255 255 255 / 0.2);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.card__hint svg {
  width: 0.75rem;
  height: 0.75rem;
}

/* Belakang */
.card__back {
  transform: rotateY(180deg);
  background: linear-gradient(160deg, var(--bg-2) 40%, color-mix(in srgb, var(--hl) 14%, var(--bg-2)));
  border: 1px solid color-mix(in srgb, var(--hl) 40%, transparent);
}

.card__dots {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  color: var(--tx-1);
  background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
  background-size: 16px 16px;
}

.back {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem;
}

.back__logo {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  display: grid;
  place-items: center;
  color: var(--hl);
  font-weight: 700;
  font-size: 1.05rem;
  background: color-mix(in srgb, var(--hl) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--hl) 30%, transparent);
}

.back__main {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.back__name {
  margin: 0;
  color: var(--tx-1);
  font-weight: 700;
  font-size: 1.15rem;
  line-height: 1.2;
}

.back__role {
  margin: 0.3rem 0 0;
  color: var(--hl);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.back__rule {
  width: 3rem;
  height: 1px;
  background: color-mix(in srgb, var(--hl) 40%, transparent);
}

.back__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: 0.74rem;
}

.back__list li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--tx-2);
  min-width: 0;
}

.back__list svg {
  width: 0.95rem;
  height: 0.95rem;
  flex-shrink: 0;
  color: var(--hl);
}

.back__list span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.back__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.8rem;
  border-top: 1px solid color-mix(in srgb, var(--line) 70%, transparent);
}

.back__icons {
  display: flex;
  gap: 0.75rem;
}

.back__icons a {
  color: var(--tx-3);
  display: inline-flex;
  transition: color 0.2s;
}

.back__icons a:hover {
  color: var(--hl);
}

.back__icons svg {
  width: 1.05rem;
  height: 1.05rem;
}

.back__country {
  margin: 0;
  color: var(--tx-3);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
}

/* ---------- Konten ---------- */
.dash__content {
  min-width: 0;
  max-width: 40rem;
  margin: 0 auto;
  width: 100%;
  text-align: left;
  animation: dash-in 0.7s ease-out both;
}

@keyframes dash-in {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.hero-title {
  margin: 0 0 1.25rem;
  color: var(--tx-1);
  font-weight: 800;
  font-size: clamp(2.4rem, 8vw, 3.25rem);
  line-height: 1.08;
  letter-spacing: -0.025em;
}

.hero-title__name {
  display: inline-block;
  padding-bottom: 0.08em;
  /* cegah huruf "y" terpotong oleh bg-clip */
  background: linear-gradient(90deg, var(--hl), #60a5fa 70%, #a5b4fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.lead {
  margin: 0 0 2rem;
  color: var(--tx-2);
  font-size: clamp(1rem, 2.4vw, 1.125rem);
  line-height: 1.7;
}

.lead strong,
.exp strong {
  color: var(--tx-1);
  font-weight: 600;
}

/* Pengalaman: garis timeline di kiri */
.exp {
  list-style: none;
  margin: 0 0 2.25rem;
  padding: 0 0 0 1.25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.exp::before {
  content: '';
  position: absolute;
  left: 0.3rem;
  top: 0.7rem;
  bottom: 0.7rem;
  width: 1px;
  background: linear-gradient(to bottom, var(--hl), color-mix(in srgb, var(--line) 80%, transparent));
}

.exp__item {
  position: relative;
}

.exp__item p {
  margin: 0;
  color: var(--tx-2);
  font-size: clamp(1rem, 2.4vw, 1.125rem);
  line-height: 1.6;
}

.exp__dot {
  position: absolute;
  left: -1.25rem;
  top: 0.55rem;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: var(--hl);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--hl) 20%, transparent);
}

/* Blok umum */
.block {
  margin-bottom: 2.25rem;
}

.block__label {
  margin: 0 0 0.9rem;
  color: var(--tx-2);
  font-size: clamp(1rem, 2.4vw, 1.125rem);
}

.block__title {
  margin: 0 0 1rem;
  color: var(--tx-1);
  font-weight: 700;
  font-size: 1.125rem;
}

/* Skills sebagai chip */
.chips {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.chip {
  padding: 0.5rem 0.95rem;
  border-radius: 999px;
  color: var(--tx-1);
  font-size: 0.92rem;
  line-height: 1.3;
  background: color-mix(in srgb, var(--bg-2) 80%, transparent);
  border: 1px solid color-mix(in srgb, var(--tx-1) 12%, transparent);
  transition: border-color 0.2s, background-color 0.2s;
}

.chip:hover {
  border-color: color-mix(in srgb, var(--hl) 55%, transparent);
  background: color-mix(in srgb, var(--hl) 10%, transparent);
}

/* CTA */
.cta {
  margin: 0 0 2.25rem;
  padding: 1.1rem 1.25rem;
  border-radius: 0.9rem;
  color: var(--tx-2);
  font-size: clamp(1rem, 2.4vw, 1.125rem);
  line-height: 1.7;
  background: color-mix(in srgb, var(--hl) 7%, transparent);
  border: 1px solid color-mix(in srgb, var(--hl) 22%, transparent);
}

.cta__link {
  color: var(--hl);
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: opacity 0.2s;
}

.cta__link:hover {
  opacity: 0.8;
}

/* Social */
.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.6rem 1.05rem;
  border-radius: 0.75rem;
  color: var(--hl);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid color-mix(in srgb, var(--hl) 35%, transparent);
  transition: background-color 0.2s, transform 0.2s;
}

.social-btn:hover {
  background: color-mix(in srgb, var(--hl) 12%, transparent);
  transform: translateY(-2px);
}

.social-btn:focus-visible {
  outline: 2px solid var(--hl);
  outline-offset: 3px;
}

.social-btn svg {
  width: 1.05rem;
  height: 1.05rem;
}

.closing {
  margin: 0;
  max-width: 36rem;
  color: var(--tx-3);
  font-size: clamp(0.98rem, 2.3vw, 1.075rem);
  line-height: 1.85;
}

/* ---------- Desktop ---------- */
@media (min-width: 640px) {
  .dash {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .card-wrap {
    width: 17rem;
  }
}

@media (min-width: 1024px) {
  .dash {
    padding-top: 8rem;
    padding-bottom: 6rem;
  }

  .dash__inner {
    grid-template-columns: minmax(0, 1fr) 20rem;
    gap: 4rem;
    align-items: start;
  }

  .dash__content {
    grid-column: 1;
    grid-row: 1;
    max-width: none;
    margin: 0;
  }

  .dash__card-col {
    grid-column: 2;
    grid-row: 1;
    justify-content: flex-end;
    position: sticky;
    top: 8rem;
  }

  .card-wrap {
    width: 100%;
  }
}

/* Hormati preferensi "reduce motion" */
@media (prefers-reduced-motion: reduce) {
  .dash__content {
    animation: none;
  }

  .card__inner,
  .social-btn,
  .chip {
    transition: none;
  }
}
</style>