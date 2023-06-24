<script setup>
  import NavigationBar from '@/components/NavigationBar.vue'
  import router from '@/router'
  import { ref } from 'vue';
  import { onAuthStateChanged } from "firebase/auth";
  import { authentication } from '../firebase'
  

  const isAuthenticated = ref(false);
  const auth = authentication;
  
  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      // User is signed in
      isAuthenticated.value = true;
      
      const goToRoute = (route) => {
      router.push({ path: route });
    }
    goToRoute('/home/');

    } else {
      // User is signed out
      isAuthenticated.value = false;
      const goToRoute = (route) => {
      router.push({ path: route });
    }
      goToRoute('/auth');
    }
  });
</script>

<template>
  <main>
    <RouterView />
  </main>
  <footer v-if="isAuthenticated">
    <NavigationBar></NavigationBar>
  </footer>
</template>


