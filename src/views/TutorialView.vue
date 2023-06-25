<script setup>
  import router from '@/router'
  import { ref, onMounted } from 'vue'
  import { logOut } from '@/services/AuthService.js';
  import CourseBox from '../components/ui-kit/CourseBox.vue';
  import { getVideos } from '@/services/VideoService.js';
  import WatchAll from '../components/ui-kit/WatchAll.vue';


  const isActive = ref("all");
  const videos = ref([]);

  const setActive = (newActive) => {
    isActive.value = newActive;
  }

  const goToRoute = (route) => {
    router.push({ path: route });
  }

  /*setup() {
    const autoplayVideo = ref(click)

    return {
      autoplayVideo
    }
  }*/

  onMounted(() => {
    // Get tutorials from Firebase and add it to this components tutorials reference.
    videos.value = getVideos().then((tutorialArray) => { 
      videos.value = tutorialArray[0].tutorials;
    });
  })

  //export class WatchAll {}
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
        <!--<button class="WatchAll" @click="goToRoute('/video/' + 1)" >
            Watch all <img src="/assets/img/icons/PlayAll.svg">
        </button>-->
        <WatchAll :click="goToRoute('/video/' + 1)"></WatchAll>


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

    <div class="mylibary-box" v-if="isActive ==='all'">
      <div class="mylibrary-box-item m-bottom" v-for="tutorial in videos" :key="tutorial.key">
          <h2>{{ tutorial.name }}</h2>
            <div class="course-box-list">
              <CourseBox 
                v-for="video in tutorial.videos" 
                :author='video.author' 
                :title='tutorial.name' 
                :description='video.description' 
                date='27-04-2023' 
                @click="goToRoute('/video/' + video.id)"
                :key='video.id'
              >
              </CourseBox>
            </div>
      </div>
    </div>

    <div class="mylibary-box" v-if="isActive =='introduction'">
      <div class="mylibrary-box-item" v-for="tutorial in videos" :key="tutorial.key">
        <h2 v-if="tutorial.name === 'Introduction'">{{ tutorial.name }}</h2>
            <div class="course-box-list vertical" v-if="tutorial.name === 'Introduction'" >
              <CourseBox 
                v-for="video in tutorial.videos"
                :author='video.author' 
                :title='tutorial.name' 
                :description='video.description' 
                date='27-04-2023' 
                @click="goToRoute('/video/' + video.id)"
                :key='video.id'
              >
              </CourseBox>
            </div>
      </div>
    </div>

    <div class="mylibary-box" v-if="isActive =='setup'">
      <div class="mylibrary-box-item" v-for="tutorial in videos" :key="tutorial.key">
          <h2 v-if="tutorial.name === 'Setup'">{{ tutorial.name }}</h2>
            <div class="course-box-list vertical" v-if="tutorial.name === 'Setup'">
              <CourseBox 
                v-for="video in tutorial.videos"
                :author='video.author' 
                :title='tutorial.name' 
                :description='video.description' 
                date='27-04-2023' 
                @click="goToRoute('/video/' + video.id)"
                :key='video.id'
              >
              </CourseBox>
            </div>
      </div>
    </div>
</template>




<style scoped lang="scss">
@import "@/assets/main.scss";


.top{
    background-image: url(/assets/img/sandning-tuto.png);
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
    margin-top: 6px;

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
   
    h2{
      margin: 15px 0;
    }

   
  }

  .mylibary-box {
    background-color: #f1f1f1;
    height: calc(100vh - 350px);
    overflow-y: scroll;
    padding: 20px 10px;

    .complete-box {
      height: 30vh;
      padding: 12px;
      

      h3 {
        font-weight: 500;
        font-size: 14px;
      }
    }

    .mylibrary-box-item {
      overflow: hidden;

      .course-box-list {
        display: flex;
        flex-direction: row;
        margin-top: 5px;
        overflow-x: auto;
        white-space: nowrap;
        height: 220px;
        padding-right: 10px;

        &.vertical {
          flex-direction: column;
          height: unset;
          padding-right: 0;
        }
      }

      &.m-bottom {
        margin-bottom: 20px;
      }
    }
  }

</style>