<script setup>
  import NavigationBar from '@/components/NavigationBar.vue'
  import { ref } from 'vue';
  import { onAuthStateChanged } from "firebase/auth";
  import { authentication } from '../firebase'
  import { useUserStore } from '@/stores/userStore.js';

  const isAuthenticated = ref(false);
  const auth = authentication;
  const userStore = useUserStore();

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      // User is signed in
      isAuthenticated.value = true;

      // Set userStore object to user fetched from Firebase
      userStore.user = user;
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