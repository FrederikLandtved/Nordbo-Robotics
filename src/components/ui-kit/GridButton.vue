<script setup>
  defineProps({
    title: String,
    color: String,
    image: String
  })
</script>

<!-- Problem med text-shadow -->
<template>
  <div class="grid-button-container">
    <h2 style="text-shadow: 20px 20px {{ color }};"> {{ title }}</h2>
    
  </div>
</template>

<style lang="scss" scoped>
  @import "@/assets/main.scss";

  .grid-button-container {
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
      
    }
  }

</style>

