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
</div><!-- Video Buttons -->

<div class="oversigt-box aktiv" v-if="isActive === 'oversigt'">

  <div class="oversigt-slide">
    <div class="oversigt-slide-title">
      <h3>Introduction to learn and use Mimic</h3>
    <img src="../assets/img/icons/arrow-down.png" alt="">
    </div>

  <div class="checkbox-row">
    <div class="blue-border-box"></div>
    <p>Introduction to unpacking - 1/3</p>
    <img src="../assets/img/icons/Right.svg" alt="Check Mark">
  </div><!-- Checkbox Row -->

  <div class="checkbox-row">
    <div class="blue-border-box"></div>
    <p>Introduction to unpacking - 2/3</p>
    <img src="../assets/img/icons/Right.svg" alt="Check Mark">
  </div><!-- Checkbox Row -->

  <div class="checkbox-row">
    <div class="blue-border-box"></div>
    <p>Introduction to unpacking - 3/3</p>
    <img src="../assets/img/icons/Right.svg" alt="Check Mark">
  </div><!-- Checkbox Row -->
  </div><!-- oversigt-slide -->

  <div class="oversigt-slide">
    <div class="oversigt-slide-title">
      <h3>Set up Mimic software to your robot</h3>
    <img src="../assets/img/icons/arrow-down.png" alt="">
    </div>

  <div class="checkbox-row">
    <div class="blue-border-box"></div>
    <p>Introduction to setting up - 1/3</p>
    <div class="circle-box"></div>
  </div><!-- Checkbox Row -->

  <div class="checkbox-row">
    <div class="blue-border-box"></div>
    <p>Introduction to setting up - 2/3</p>
    <div class="circle-box"></div>
  </div><!-- Checkbox Row -->

  <div class="checkbox-row">
    <div class="blue-border-box"></div>
    <p>Introduction to setting up - 3/3</p>
    <div class="circle-box"></div>
  </div><!-- Checkbox Row -->
  </div><!-- oversigt-slide -->

  <div class="oversigt-slide">
    <div class="oversigt-slide-title">
      <h3>How to calibrate Mimic to your robot</h3>
    <img src="../assets/img/icons/arrow-down.png" alt="">
    </div>

  <div class="checkbox-row">
    <div class="blue-border-box"></div>
    <p>How to calibrate Mimic - 1/3</p>
    <div class="circle-box"></div>
  </div><!-- Checkbox Row -->

  <div class="checkbox-row">
    <div class="blue-border-box"></div>
    <p>How to calibrate Mimic - 2/3</p>
    <div class="circle-box"></div>
  </div><!-- Checkbox Row -->

  <div class="checkbox-row">
    <div class="blue-border-box"></div>
    <p>How to calibrate Mimic - 3/3</p>
    <div class="circle-box"></div>
  </div><!-- Checkbox Row -->
  </div><!-- oversigt-slide -->

  

</div><!-- Oversigt Box -->

<div class="transkribering-box aktiv" v-if="isActive === 'transkribering'">
  <h3>t</h3>
</div><!-- Transkribering Box -->

<div class="qa-box aktiv" v-if="isActive === 'QA'">
  <h3>q</h3>
</div><!-- Q/A Box -->

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
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: space-between;

    h2 {
      font-size: 14px;
      padding: 15px;
    }

    img {
      height: 10px;
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
      }

      .active {
        background-color: #eeeeee;
      }


  }

  .aktiv {
    background-color: #eeeeee;
  }

  .oversigt-box {
    box-sizing: border-box;
    height: 120vh;
    left: 0;
    padding: 15px;
    width: 100%;

    .oversigt-slide {
      border-bottom: 1px solid #707070;
      height: 140px;
      margin-top: 20px;
      width: 98%;

      .oversigt-slide-title {
        display: flex;
        justify-content: space-between;

        h3 {
        font-size: 14px;
      }

        img {
          height: 8px;
          width: auto;
        }
      }

      .checkbox-row {
        display: flex;
        height: 10px;
        margin-top: 15px;
        width: 100%;

        .blue-border-box {
          border-left: 1px solid #054BD0;
          border-bottom: 1px solid #054BD0;
          height: 10px;
          width: 10px;
        }

        p {
          font-size: 12px;
          margin-left: 10px;
        }

        img {
          height: 12px;
          margin-left: 18px;
          width: 5%;
        }

        .circle-box {
          border: 1px solid #323232;
          border-radius: 100%;
          height: 8px;
          margin-left: 18px;
          margin-top: 2px;
          width: 8px;
        }
      }
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