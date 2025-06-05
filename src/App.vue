<script setup>
import Footer from './components/FooterComponent.vue'
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <header>
      <!-- Nav -->
    </header>

    <main class="flex-1 container mx-auto px-4 py-6">
      <router-view />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>

</style>