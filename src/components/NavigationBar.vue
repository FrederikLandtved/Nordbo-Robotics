<script setup>
  import router from '@/router'

  const goToRoute = (route) => {
    router.push({ path: route });
  }
</script>

<template>
  <nav class="navigation--bar">
    <div class="navigation--bar__item" @click="goToRoute('/')">
      <span>Home</span>
    </div>
    <div class="navigation--bar__item" @click="goToRoute('/mylearning')">
      <span>My Learning</span>
    </div>
    <div class="navigation--bar__item" @click="goToRoute('/notifications')">
      <span>Notifications</span>
    </div>
  </nav>
</template>

<style lang="scss">
  .navigation--bar {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    &__item {
      flex: 1;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      cursor: pointer;
      background-color: #ebebeb;

      div {
        width: fit-content;
        text-align: center;
      }
    }
  }
</style>