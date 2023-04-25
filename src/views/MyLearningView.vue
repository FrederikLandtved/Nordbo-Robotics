<script setup>
  import router from '@/router'
  import { ref } from 'vue'

const goToRoute = (route) => {
  router.push({ path: route });
}

const isActive = ref("mylibary");

const setActive = (newActive) => {
  isActive.value = newActive;
}
</script>

<template>
  <div class="mylearning">

    <img src="../assets/img/icons/back.svg" alt="">
    
    <div class="profile">

      <div class="profile-info">
        
        <img src="../assets/img/stefan.jpg" alt="Profile Picture">
        
        <div class="profile-info-header">
        <h1>Stefan Jespersen</h1>
        <img src="../assets/img/icons/edit.svg" @click="goToRoute('/login')" alt="Edit">
      </div>

        <div class="profile-info-item">
        <img src="../assets/img/icons/factory.svg" alt="Factory">
        <h2>REA Automatdrejning</h2>
      </div>

      <div class="profile-info-item">
        <img src="../assets/img/icons/Right.svg" alt="">
        <h3>3 task/s completed</h3>
      </div>

      </div>

      <div class="profile-buttons">
      <button @click="setActive('mylibary')" class="myLibary" :class="{ active: isActive === 'mylibary' }">
        My Libary
      </button>
      
      <button @click="setActive('download')" class="download" :class="{active: isActive  === 'download' }">
        Download
      </button>
    </div>
    <div class="mylibary-box" v-if="isActive === 'mylibary'">
    <h2>My Learning</h2>

    <div class="complete-box">
      <h3>Completed courses</h3>

      <div class="course-box-list">

        <div class="course-box-item">
          <div class="background-image"></div>
          <div class="check-box"></div>
        </div>

      </div>
    </div>
    </div>

    <div class="download-box" v-if="isActive === 'download'">
    <h2>My Learning</h2>
    </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
$iconColor:#02215C;
$buttonColor:#054BD0;
$iconGreen:#2A9B1B;
$textColor:#323232;
$background-noti:#f6f6f6;
$background-noti-aktiv:#eeeeee;

.profile {


  .profile-info {
    img {
        padding: 0;
        border-radius: 100%;
        width: 100px;
      }

      .profile-info-header {
        align-items: center;
        display: flex;
        justify-content: space-between;

        img {
          border-radius: 0;
          margin-top: -12px;
          width: 35px;
        }
      }

      .profile-info-item {
        align-items: center;
        display: flex;
        padding-top: 10px;

        img {
          border-radius: 0;
          width: 20px;
        }

        h2 {
        color: $textColor;
        font-size: 14px;
        padding-left: 10px;
        }

        h3 {
          font-size: 11px;
          padding-left: 10px;
        }
      }

    h1 {
      color: $textColor;
      font-size: 20px;
    }

    img:nth-child(6) {
        float: left;
        padding: 13px 0 0 0;
        width: 10px;
      }

  }

  .profile-buttons {
    //background-color: lime;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    .myLibary {
      background-color: #ffffff;
      border: 0;
      border-radius: 12px 12px 0 0;
      font-weight: 600;
      height: 40px;
      width: 180px;
  }

    .download {
      background-color: #FFFFFF;
      border: 0;
      border-radius: 12px 12px 0 0;
      font-weight: 600;
      height: 40px;
      width: 180px;
    }

    .active {
      background-color: #eeeeee;
    }
  }

  .mylibary-box {
    background-color: #eeeeee;
    height: 80vh;
    left: 0;
    overflow-x: scroll;
    position: absolute;
    width: 100%;

    h2 {
      padding: 20px 0 0 12px;
    }

    .complete-box {
      background-color: lime;
      height: 35vh;
      padding: 12px;

      h3 {
        font-weight: 300;
      }

      .course-box-list {
        background-color: red;
        left: 0;
        margin-top: 5px;
        margin-left: 12px;
        position: absolute;
        width: 195%;

        .course-box-item {
          background-color: blue;
          height: 200px;
          border-radius: 20px;
          width: 216px;

          .background-image {
            background-color: purple;
            border-radius: 20px 20px 0 0;
            height: 100px;
            position: absolute;
            width: 216px;
          }

          .check-box {
            background-color: deeppink;
            border-radius: 12px;
            height: 20px;
            margin-left: 100px;
            position: relative;
            top: 10px;
            width: 100px;
          }
        }
      }
    }
  }

  .download-box {
    background-color: #eeeeee;
    height: 80vh;
    left: 0;
    position: absolute;
    width: 100%;

    h2 {
      padding: 20px 0 0 12px;
    }
  }

}
</style>
