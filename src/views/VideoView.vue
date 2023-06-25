<script setup>
  import router from '@/router'
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router';
  import { getVideo, registerVideoView } from '@/services/VideoService.js';
  import TabBox from '../components/ui-kit/tab/TabBox.vue';

  const isActive = ref("oversigt");
  const route = useRoute();
  const videoToShow = ref({});
  const pageTabs = ref([{title: 'Oversigt', id:'oversigt'}, {title: 'Transkribering', id:'transkribering'}, {title: 'Q/A', id: 'qa'}]);

  const setActive = (newActive) => {
    isActive.value = newActive;
  }

  onMounted(() => {
    const id = route.params.id;

    getVideo(id).then(video => {
      videoToShow.value = video;
    });
  })

  function onEndedVideo() {
    registerVideoView(route.params.id);
  }
</script>

<template>

<div class="video-box" id="#">
  <img src="/assets/img/icons/back.svg" alt="" @click="$router.go(-1)">
  <video controls autoplay muted :key='videoToShow.videolink' ref="videoElement" @ended="onEndedVideo()">
    <source :src='videoToShow.videolink' type="video/mp4">
  </video>
</div><!-- Video Box -->

<div class="video-info">
  <h2>{{ videoToShow.description }}</h2>
  <img src="/assets/img/icons/downloade.svg" alt="Download">
</div>

    <TabBox :tabs="pageTabs">
      <template #oversigt>
        <div class="oversigt-box aktiv">

          <div class="oversigt-slide">
            <div class="oversigt-slide-title">
              <h3>Introduction to learn and use Mimic</h3>
            <img src="/assets/img/icons/arrow-down.png" alt="">
          </div>

          <div class="checkbox-row">
            <div class="blue-border-box"></div>
            <p>Introduction to unpacking - 1/3</p>
            <img src="/assets/img/icons/Right.svg" alt="Check Mark">
          </div><!-- Checkbox Row -->

          <div class="checkbox-row">
            <div class="blue-border-box"></div>
            <p>Introduction to unpacking - 2/3</p>
            <img src="/assets/img/icons/Right.svg" alt="Check Mark">
          </div><!-- Checkbox Row -->

          <div class="checkbox-row">
            <div class="blue-border-box"></div>
            <p>Introduction to unpacking - 3/3</p>
            <img src="/assets/img/icons/Right.svg" alt="Check Mark">
          </div><!-- Checkbox Row -->
          </div><!-- oversigt-slide -->

          <div class="oversigt-slide">
            <div class="oversigt-slide-title">
              <h3>Set up Mimic software to your robot</h3>
            <img src="/assets/img/icons/arrow-down.png" alt="">
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
              <img src="/assets/img/icons/arrow-down.png" alt="">
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
        </div>
    </template>
    <template #transkribering>
      <div class="transkribering-box aktiv">
        <p id="subtitles">
          “Velkommen til denne video om hvordan du bruger din nye robot. Denne robot er designet til at hjælpe dig med forskellige opgaver i hjemmet, som at støvsuge, vaske op, lave mad og meget mere. 
      <br>
      For at komme i gang skal du først oplade din robot i mindst to timer ved at sætte den i stikkontakten. Når den er fuldt opladet, skal du trykke på tænd-knappen på toppen af robotten. Du vil høre en bip-lyd og se et grønt lys, der indikerer at robotten er klar til brug. 
      <br>
      For at styre din robot kan du bruge den medfølgende fjernbetjening eller downloade en app til din smartphone. Med fjernbetjeningen eller appen kan du vælge hvilken opgave du vil have robotten til at udføre, samt justere dens hastighed, lydstyrke og andre indstillinger. 
      <br>
      Du kan også tale direkte til robotten ved at sige dens navn, som du selv kan vælge i appen. For eksempel, hvis du har kaldt din robot R2-D2, kan du sige ‘R2-D2, støvsug stuen’ og robotten vil straks begynde at udføre opgaven. 
      <br>
      Hvis du vil have robotten til at stoppe, kan du sige ‘R2-D2, stop’ eller trykke på stop-knappen på fjernbetjeningen eller appen. Robotten vil automatisk vende tilbage til sin ladestation, når den er færdig med en opgave eller når dens batteri er lavt. 
      <br>
      For at holde din robot i god stand skal du regelmæssigt rengøre dens sensorer, filtre og børster med en blød klud. Du skal også undgå at udsætte robotten for vand, ild eller andre farlige stoffer.
        </p>
      </div><!-- Transkribering Box -->
    </template>

    <template #qa>
      <div class="qa-box aktiv">
        <div class="qa-menu">
          <h4>How do I use Mimic for polishing?</h4>
          <img src="@/assets/img/icons/arrow-down.png" alt="Arrow">
        </div>

        <div class="qa-menu">
          <h4>What is Mimics best feature?</h4>
          <img src="@/assets/img/icons/arrow-down.png" alt="Arrow">
        </div>

        <div class="qa-menu">
          <h4>How to prepare for your next project</h4>
          <img src="@/assets/img/icons/arrow-down.png" alt="Arrow">
        </div>

        <div class="qa-menu">
          <h4>How to redo the calibration</h4>
          <img src="@/assets/img/icons/arrow-down.png" alt="Arrow">
        </div>

        <div class="qa-menu">
          <h4>How do I use Mimic for sanding</h4>
          <img src="@/assets/img/icons/arrow-down.png" alt="Arrow">
        </div>

        <div class="qa-menu">
          <h4>How do I attach sanding disc to Mimic?</h4>
          <img src="@/assets/img/icons/arrow-down.png" alt="Arrow">
        </div>

        <div class="qa-menu">
          <h4>How do I detach disc from Mimic</h4>
          <img src="@/assets/img/icons/arrow-down.png" alt="Arrow">
        </div>

        <div class="qa-menu">
          <h4>How do I use Mimic for polishing?</h4>
          <img src="@/assets/img/icons/arrow-down.png" alt="Arrow">
        </div>
  
    </div>
    </template>

</TabBox>

</template>

<style lang="scss" scoped>
  @import "@/assets/main.scss";
  .video-box {
    height: 212px;
    width: 100%;

    img {
      padding-top: 15px;
      padding-left: 15px;
      position:absolute;
      z-index: 10000;
    }
    video {
      width: 100%;
      height: 212px;
      object-fit: fill;
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
    box-sizing: border-box;
    height: 100vh;
    left: 0;
    padding: 15px;
    width: 100%;

    p {
      font-weight: lighter;
      font-size: 14px;
      line-height: 20px;
    }
  }

  .qa-box {
    box-sizing: border-box;
    height: 70vh;
    left: 0;
    padding: 15px;
    width: 100%;

    .qa-menu {
      border-bottom: 1px solid #cccccc;
      display: flex;
      justify-content: space-between;

      h4 {
        font-size: 14px;
        margin-bottom: 25px;
        margin-top: 15px;
      }

      img {
        height: 10px;
        margin-top: 18px;
        transform: rotate(270deg);
      }
    }
  }
</style>