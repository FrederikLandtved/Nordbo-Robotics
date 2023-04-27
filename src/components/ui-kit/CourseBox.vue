<script setup>

defineProps({
    image: String,
    title: String,
    description: String,
    author: String,
    date: Date
}) 
</script>
<template>

<div class="course-box-item">
    <div class="background-image" style="background-image: url(./src/assets/img/billede.png);"></div>
        <div class="check-box">
        <h4>Gennemført</h4>
        <img src="@/assets/img/icons/Right.svg" alt="Checkmark">
        </div>
        <p>{{ title }}</p>
        <h4>{{ description }}</h4>
        <div class="author-calendar-box">
        <img src="@/assets/img/icons/profile.svg" alt="Man">
        <h5>{{ author }}</h5>
        <img src="@/assets/img/icons/Kalender.svg" alt="Man">
        <h5>{{date}}</h5>
        </div>
        </div><!-- course-box-item -->
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
        .course-box-item {
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
        }
</style>