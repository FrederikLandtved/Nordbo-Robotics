<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <main>
    <RouterView />
  </main>
  <footer>
    <NavigationBar></NavigationBar>
  </footer>
</template>

<style scoped>
  main {
    background-color: rgb(205, 205, 205);
    height: calc(100vh - 70px);
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
