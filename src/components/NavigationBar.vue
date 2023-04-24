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

<style lang="scss">
  .navigation--bar {
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   

    &__item {
      flex: 1;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background-color:#f2f2f2;

      p{
        font-size: 15px;
      }
      
      img{
      width: 40px;
      }
      div {
        width: fit-content;
        text-align: center;
      }
    }


  }
</style>