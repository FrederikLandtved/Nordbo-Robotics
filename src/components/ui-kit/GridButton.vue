<script setup>
import { ref } from 'vue';

  const props = defineProps({
    title: String,
    color: String,
    image: String
  })

</script>

<!-- Problem med text-shadow -->
<template>
  <div class="grid-button-container" :style="'background-image: url(' + image + ');'">
    <div>
      
    </div>
    <h2> {{ title }}</h2>
    
  </div>
</template>

<style lang="scss" scoped>
  @import "@/assets/main.scss";

  .grid-button-container {
    background-size: cover;
    background-color: lightgrey;
    border-radius: 12px;
    width: 100%;
    height: 110px;
    padding: 20px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    display: flex;

    h2 {
      color: white;
      font-weight: 500;
      margin-top: 0px;
      position: relative;
    }

    div{
      width: 40%;
      background-color: v-bind(color);
      height: 60px;
      filter: blur(12px);
      border-radius: 20px;
      border: 0;
      position: absolute;
      display: flex;
      justify-content: center;
    }
  }

</style>

