<script setup>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col relative">
    <!-- Edge glow effect like daf2a.com -->
    <div class="edge-glow" aria-hidden="true"></div>

    <!-- Skip to content -->
    <a href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-black focus:rounded-lg">
      Lewati ke konten utama
    </a>

    <NavBar />

    <main id="main-content" class="flex-1 pt-20 relative z-10">
      <router-view />
    </main>

    <FooterSection />
  </div>
</template>