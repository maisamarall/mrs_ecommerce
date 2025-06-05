<script setup>
import Menu from './components/Menu.vue'
import Footer from './components/FooterComponent.vue'
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <Menu></Menu>

    <main class="bg-white">
      <router-view />
    </main>

    <footer>
      <Footer />
    </footer>
  </div> 
</template>

<style>
* {
  font-family: "Montserrat", sans-serif;
}

body{
  background-color: white !important;
}

</style>