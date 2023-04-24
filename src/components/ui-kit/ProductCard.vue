<script setup>
  defineProps({
    title: String,
    paragraph: String,
    image: String
  })
</script>

<template>
  <div class="product-card-container">
    <div class="product-card-container__item--padding">
      <h2>{{ title }}</h2>
      <p>{{ paragraph }}</p>
      </div>
    <div class="product-card-container__item--image" style="background-image: url('https://images.unsplash.com/photo-1610891015188-5369212db097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80')">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/assets/main.scss";

  .product-card-container {

    box-shadow: rgba(100, 100, 111, 0.4) 0px 6px 10px 0px;
    border-radius: 6px;
    color: #414141;

    &__item {
      &--padding {
        padding: 12px 12px;
      }

      &--image {
        height: 115px;
        background-size: cover;
        background-position: center;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }

    p {
      font-size: 14px;
      margin-top: 6px;
      font-weight: 300;
    }

    h2 {
      font-size: 28px;
      font-weight: 500;
    }
  }
</style>

