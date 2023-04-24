<script setup>
  defineProps({
    title: String,
    color: String,
    image: String
  })
</script>

<template>
  <div class="grid-button-container">
    <h2>{{ title }}</h2>
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
      text-shadow: #FC0 1px 0 20px;
    }
  }

</style>

