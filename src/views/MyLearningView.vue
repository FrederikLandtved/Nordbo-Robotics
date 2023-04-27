<script setup>
  import router from '@/router'
  import CourseBox from '../components/ui-kit/CourseBox.vue';
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
        <img src="../assets/img/icons/Right.svg" alt="Checkmark">
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

      <CourseBox author='Jacob Dolleris' title='Godmorgen Danmark' description='Jacob er en gud hahahahaha' date='27-04-2023'></CourseBox>
      <CourseBox author='Jacob Dolleris' title='Godmorgen Danmark' description='Jacob er en gud hahahahaha' date='27-04-2023'></CourseBox>

      </div><!-- course-box-list -->
    </div><!-- complete-box -->


    
    </div>

    <div class="download-box" v-if="isActive === 'download'">
    <h2>My Learning</h2>
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
      //background-color: lime;
      height: 30vh;
      padding: 12px;

      h3 {
        font-weight: 300;
        font-size: 14px;
      }

      .course-box-list {
        //background-color: red;
        display: flex;
        flex-direction: row;
        left: 0;
        margin-top: 5px;
        position: absolute;
        width: 195%;

/*        .course-box-item {
          background-color: #FFFFFF;
          height: 200px;
          border-radius: 20px;
          margin-left: 12px;
          width: 216px;

          .background-image {
            
            background-size: 300px;
            background-position-x: -50px;
            background-position-y: -30px;
            border-radius: 20px 20px 0 0;
            height: 100px;
            position: absolute;
            width: 216px;
          }

          .check-box {
            background-color: #FFFFFF;
            border-radius: 12px;
            display: flex;
            height: 20px;
            margin-left: 100px;
            position: relative;
            top: 10px;
            width: 100px;

            h4 {
              font-size: 11px;
            }

            img {
              height: 12px;
              padding: 0;
              padding-top: 5px;
              width: 100%;
            }
          }
        }

        p {
          color: $buttonColor;
          margin-top: 85px;
          margin-left: 10px;
        }

        h4 {
          margin-top: 5px;
          margin-left: 10px;
        }

        .author-calendar-box {
          border-top: 1px solid #f4f4f4;
          display: flex;
          flex-direction: row;
          height: 20px;
          margin: 0 auto;
          margin-top: 10px;
          width: 90%;

          img {
            height: 20px;
            padding: 0;
          }

          img:nth-child(3) {
            padding-left: 10px;
          }

          h5 {
            color: #B7B7B7;
            font-size: 10px;
            padding-left: 7px;
            padding-top: 7px;
          }
        }*/
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
