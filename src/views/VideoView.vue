<script setup>
  import router from '@/router'
  import { ref } from 'vue'

  const isActive = ref("oversigt");

  const setActive = (newActive) => {
  isActive.value = newActive;
}
</script>

<template>

<div class="video-box" id="#">
  <img src="../assets/img/icons/back.svg" alt="">
<h1>Video placeres her</h1>
</div><!-- Video Box -->

<div class="video-info">
  <h2>Introduction to learn and use Mimic</h2>
  <img src="../assets/img/icons/downloade.svg" alt="Download">
</div>

<div class="video-buttons">
  <button @click="setActive('oversigt')" class="video-tab-buttons" :class="{ active: isActive === 'oversigt' }">
    Oversigt
  </button>
  <button @click="setActive('transkribering')" class="video-tab-buttons" :class="{ active: isActive === 'transkribering' }">
    Transkribering
  </button>
  <button @click="setActive('QA')" class="video-tab-buttons" :class="{ active: isActive === 'QA' }">
    Q/A
  </button>
</div>

<div class="oversigt-box aktiv" v-if="isActive === 'oversigt'">
  div.
<h3>Introduction to learn and use Mimic</h3>
</div><!-- Oversigt -->

<div class="transkribering-box aktiv" v-if="isActive === 'transkribering'">
  <h3>t</h3>
</div><!-- Transkribering -->

<div class="qa-box aktiv" v-if="isActive === 'QA'">
  <h3>q</h3>
</div><!-- Q/A -->

</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";


.video-box {
  background-color: $iconGreen;
  height: 212px;
  width: 100%;

  img {
    padding-top: 15px;
    padding-left: 15px;
  }
}

.video-info {
  //background-color: $iconColor;
  display: flex;
  height: 10vh;
  width: 100%;

  h2 {
    font-size: 14px;
    padding: 15px;
  }

  img {
    height: 12px;
    margin-left: 75px;
    margin-top: 18px;
    width: 10%;
  }
}

.video-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

    .video-tab-buttons {
      background-color: #ffffff;
      border: 0;
      border-radius: 12px 12px 0 0;
      font-weight: 500;
      padding: 10px;
      height: 40px;
      //width: 120px;
    }

    .active {
      background-color: #eeeeee;
    }


}

.aktiv {
      background-color: #eeeeee;
    }

.oversigt-box {
  height: 80vh;
  left: 0;
  position: absolute;
  width: 100%;

  h3 {
    font-size: 14px;
    padding: 15px 0 0 15px;
  }
}

.transkribering-box {
  height: 80vh;
  left: 0;
  position: absolute;
  width: 100%;
}

.qa-box {
  height: 80vh;
  left: 0;
  position: absolute;
  width: 100%;
}
</style>