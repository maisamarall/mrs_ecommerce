<script setup>
import Menu from './components/Menu.vue'
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
  </div>  <Menu></Menu>
  <router-view></router-view>
</template>

<style>
* {
  font-family: "Montserrat", sans-serif;
}

body{
  background-color: #fbfbfb;
}

</style>