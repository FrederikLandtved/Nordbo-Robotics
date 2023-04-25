<script setup>
  import NavigationBar from '@/components/NavigationBar.vue'
  import { ref } from 'vue';
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  
  const isAuthenticated = ref(false);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      isAuthenticated.value = true;
    } else {
      // User is signed out
      isAuthenticated.value = false;
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


