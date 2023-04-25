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


