<template>
  <SiteHeader />
  <main id="main-content">
    <RouterView />
  </main>
  <footer class="site-footer">
    <p>Daniel Farnham - Gameplay programmer focused on combat, systems, and practical technical design.</p>
  </footer>
</template>

<script setup>
import SiteHeader from "@/components/SiteHeader.vue";
</script>

