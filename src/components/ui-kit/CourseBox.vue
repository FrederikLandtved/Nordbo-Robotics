<script setup>

defineProps({
    image: String,
    title: String,
    description: String,
    author: String,
    date: Date,
    fullWidth: Boolean
}) 
</script>
<template>

<div class="course-box-item" :class="{fullwidth: fullWidth}">
    <div class="course-box-item__image" style="background-image: url(./src/assets/img/billede.png);">
        <div class="check-box">
          <h4>Gennemført</h4>
          <img src="@/assets/img/icons/Right.svg" alt="Checkmark">
      </div>
    </div>
    <div class="bottom-container">
      <div class="text">
        <p>{{ title }}</p>
        <h4 class="desc">{{ description }}</h4>
      </div>
      <div class="course-box-item__author-calendar-box">
        <div>
          <img src="@/assets/img/icons/profile.svg" alt="Man">
          <h5>{{ author }}</h5>
        </div>
        <div>
          <img src="@/assets/img/icons/Kalender.svg" alt="Man">
          <h5>{{ date }}</h5>
        </div>
      </div>
    </div>
  </div><!-- course-box-item -->
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
  .course-box-item {
    background-color: #ffffff;
    height: 200px;
    border-radius: 20px;
    margin-right: 12px;
    min-width: 216px;
    box-shadow: 0 8px 5px -4px lightgrey;

    &__image{
      background-size: cover;
      background-position-y: -30px;
      border-radius: 20px 20px 0 0;
      height: 100px;
      width: 100%;
      position: relative;
    }

    &__author-calendar-box {
    border-top: 1px solid #f4f4f4;
    display: flex;
    flex-direction: columns;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    margin: 0 auto;
    width: 90%;

    div {
      display: flex;
    }

    img {
      height: 15px;
      padding: 0;
      padding-top: 3px
    }

    img:nth-child(3) {
      padding-left: 10px;
    }

    h5 {
      color: #B7B7B7;
      font-size: 11px;
      padding-left: 7px;
      padding-top: 7px;
      font-weight: 400;
    }
  }
    &.fullwidth {
      width: 100%;
      margin-bottom: 30px;
      margin-right: 0;
    }
    .check-box {
      background-color: #FFFFFF;
      border-radius: 12px;
      display: flex;
      align-items: center;
      height: 20px;
      margin-left: 100px;
      position: absolute;
      top: 10px;
      right: 10px;
      width: 100px;

      h4 {
        font-size: 11px;
        margin-left: 8px;
      }

      img {
        height: 10px;
        padding: 0;
        padding-top: 1px;
        width: 100%;
      }
    }
  }

  p {
    color: $buttonColor;
    font-size: 12px;
  }

  h4 {
    font-size: 14px;
    font-weight: 400;
  }
.desc{
  white-space: initial;
}

.text {
  padding: 0 10px;
  box-sizing: border-box;
}

.bottom-container {
    height: 83px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0;
}
</style>