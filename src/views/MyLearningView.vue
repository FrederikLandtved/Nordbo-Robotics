<script setup>
  import router from '@/router'
  import CourseBox from '../components/ui-kit/CourseBox.vue';
  import { ref, onMounted, onBeforeMount } from 'vue'
  import { logOut } from '@/services/AuthService.js';
  import { onAuthStateChanged } from "firebase/auth";
  import { authentication } from '../../firebase'
  import { getUsersVideos } from '@/services/VideoService.js'

  const auth = authentication;
  const displayName = ref('Loading..');
  const isActive = ref("mylibary");
  const videos = ref([]);

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      // User is signed in
      displayName.value = user.displayName;
      getUsersVideos().then((usersVideos) => {
        videos.value = usersVideos;

        console.log(videos.value);
      });
    }
  });

  const logOutUser = () => {
  logOut();
  }

  const setActive = (newActive) => {
    isActive.value = newActive;
  }

  const goToRoute = (route) => {
    router.push({ path: route });
  }
</script>

<template>
  <div class="mylearning">

    <img src="../assets/img/icons/back.svg" alt="" @click="$router.go(-1)">
    
    <div class="profile">
      <div class="profile-info">       
        <img src="../assets/img/user-placeholder.jpg" class="profilPic" alt="Profile Picture">
        
        <div class="profile-info-header">
          <h1>{{ displayName }}</h1>
          <img src="../assets/img/icons/edit.svg" @click="logOutUser()" alt="Edit">
        </div>

        <div class="profile-info-item">
          <img src="../assets/img/icons/factory.svg" alt="Factory">
          <h2>REA Automatdrejning</h2>
        </div>

        <div class="profile-info-item">
          <img src="../assets/img/icons/Right.svg" alt="Checkmark">
          <h3>3 task/s completed</h3>
        </div>

      </div>

      <div class="profile-buttons">
        <button @click="setActive('mylibary')" class="profile-tab-button" :class="{ active: isActive === 'mylibary' }">
          My library
        </button>
        
        <button @click="setActive('download')" class="profile-tab-button" :class="{active: isActive  === 'download' }">
          Download
        </button>
      </div>
      <div class="mylibary-box" v-if="isActive ==='mylibary'">
      <div class="mylibrary-box-item">
          <h2>My Learning</h2>
          <h4>Completed Courses</h4>
            <div class="course-box-list">
              <CourseBox 
                isCompleted 
                v-for="completedCourse in videos" 
                :key="completedCourse.videoId"
                :title="completedCourse.title"
                :description='completedCourse.description'
                >
              </CourseBox>
            </div>
            <!-- <h4>Ongoing Corses</h4>
            <div class="course-box-list">
         
            </div> -->
      </div>
    
    </div>

    <div class="download-box" v-if="isActive === 'download'">
      <div class="download-box-item">
        <h2>My Learning</h2>
        <h4>Sanding downloads</h4>
            <div class="course-box-list">
            
            </div>
            
      </div>
    </div>

    </div>
    </div>

  <!--</div>-->
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
    padding:15px;
    .profilPic{
      margin-top: -50px;

      
    }
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
          font-weight: 400;
        }

        h3 {
          font-size: 11px;
          padding-left: 10px;
          font-weight: 400;
        }
      }

    h1 {
      color: $textColor;
      font-size: 20px;
    }

    img:nth-child(6) {
        float: left;
        padding: 0 0 0 0;
        width: 10px;
      }

  }

  .profile-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    .profile-tab-button {
      background-color: #ffffff;
      border: 0;
      border-radius: 12px 12px 0 0;
      font-weight: 500;
      height: 40px;
      width: 180px;
  }

    .active {
      background-color: #eeeeee;
    }
  }

  .mylibary-box {
    background-color: #f1f1f1;
    height: calc(100vh - 350px);
    overflow-y: scroll;

    .complete-box {
      height: 30vh;
      


      h3 {
        font-weight: 500;
        font-size: 14px;
      }
    }

    .mylibrary-box-item {
      overflow: hidden;
      padding: 20px 10px;

      h4{
        margin-top:30px;
      }

  
    }
  }
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
  .download-box {
    background-color: #f1f1f1;
    height: calc(100vh - 350px);
    overflow-y: scroll;


    h3 {
        font-weight: 500;
        font-size: 14px;
      }
    }

    .download-box-item {
      overflow: hidden;
      padding: 20px 10px;

      h4{
        margin-top:30px;
      }
  }

}
</style>
