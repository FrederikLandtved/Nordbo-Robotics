<script setup>
  import router from '@/router'

  const goToRoute = (route) => {
    router.push({ path: route });
  }
</script>

<template>
  <nav class="navigation--bar">
    <div class="navigation--bar__item" @click="goToRoute('/')">
      <img src="../assets/img/icons/home2.svg" alt="home"> <p>Home</p>
    </div>
    <div class="navigation--bar__item" @click="goToRoute('/mylearning')">
     <img src="../assets/img/icons/Ide.svg" alt="learning"> <p>My Learning</p>
    </div>
    <div class="navigation--bar__item" @click="goToRoute('/notifications')">
     <img src="../assets/img/icons/Clock.svg" alt="notifications" style="width: 30px;"> <p>Notifications</p>
    </div>
  </nav>
</template>

