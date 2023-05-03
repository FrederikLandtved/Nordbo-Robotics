<script setup>

  import { ref } from 'vue'
  import { logOut } from '@/services/AuthService.js';


const isActive = ref("all");

const setActive = (newActive) => {
  isActive.value = newActive;
}
</script>

<template>
    <div class="top">
        <div>
        </div>
            <h1>
            Sanding Tutorials
            </h1>
            <p>
            Watch the videos and learn how to 
            sand with Mimic
            </p>
        <button class="WatchAll">
            Watch all <img src="../assets/img/icons/PlayAll.svg">
        </button>
    </div>

    <div class="video-filter-buttons">
        <button @click="setActive('all')" class="profile-tab-button" :class="{ active: isActive === 'all' }">
          All
        </button>
        
        <button @click="setActive('introduction')" class="profile-tab-button" :class="{active: isActive  === 'introduction' }">
            Introduction
        </button>

        <button @click="setActive('setup')" class="profile-tab-button" :class="{active: isActive  === 'setup' }">
            Setup
        </button>

        <button @click="setActive('calibration')" class="profile-tab-button" :class="{active: isActive  === 'calibration' }">
            Calibration
        </button>

        <button @click="setActive('mimic')" class="profile-tab-button" :class="{active: isActive  === 'mimic' }">
            Mimic
        </button>
      </div>


      <div class="all-box aktiv" v-if="isActive === 'all'">
        <h2>All</h2>
      </div>

      <div class="introduction-box aktiv" v-if="isActive === 'introduction'">
        <h2>introduction</h2>
      </div>

      <div class="setup-box aktiv" v-if="isActive === 'setup'">
        <h2>setup</h2>
      </div>

      <div class="calibration-box aktiv" v-if="isActive === 'calibration'">
        <h2>calibration</h2>
      </div>

      <div class="mimic-box aktiv" v-if="isActive === 'mimic'">
        <h2>mimic</h2>
      </div>
</template>




<style lang="scss">
@import "@/assets/main.scss";


.top{
    background-image: url(../assets/img/sandning-tuto.png);
    width: 100%;
    height: 210px;

    div{
    margin-top: 55px; 
    height: 100px;
    width: 100%;
    background-color:#02225c5f;
    filter: blur(12px);
    border-radius: 20px;
    border: 0;
    position: absolute;
    }
 
    h1{
        color: white;
        padding: 70px 15px 0px 15px;
        font-weight: 400;
        position: relative;   
    }
    p{
        color: white;
        padding: 0px 15px 0px 15px;
        font-weight: 300;     
        position: relative;
    }
    
    .WatchAll{
        margin-top:20px ;
        width: 105px;
        height: 35px;
        margin-left:15px;
        background-color: $buttonColor;
        border: none;
        border-radius: 5px;
        color: white;
        display: flex;
        padding:10px 10px;

        img{
            margin: -2px 0px 0px 10px ;
        }
     
    }
}



.video-filter-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    .profile-tab-button {
      background-color: #ffffff;
      border: 0;
      border-radius: 12px 12px 0 0;
      font-weight: 500;
      height: 30px;
      width: auto;
      margin: 0px 5px;
      padding: 10px;  
    }

    .active {
      background-color:#eeeeee;

    }
  }
  .aktiv{
    background-color: #eeeeee;
    padding: 40px 15px;
  }
</style>