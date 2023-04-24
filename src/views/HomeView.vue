<script setup>
</script>

<template>
  <div class="header--container">
    <div class="header--container__initials">
      <span>IDN</span>
    </div>
    <div class="header--container__search">
      <img src="@/assets/img/icons/search.svg">
      <input type="text" placeholder="Search...">
    </div>
  </div>
</template>

<style lang="scss">
  .header--container {
    width: 100%;
    height: 45px;
    display: flex;
    gap: 18px;
    margin-top: 10px;

    &__search {
      flex: 1;
      margin-right: 20px;
      display: flex;
      align-items: center;
      box-shadow: rgba(100, 100, 111, 0.3) 0px 4px 12px 0px;
      border-radius: 14px;

      input {
        border: 0;
        margin-left: 10px;
        width: 100%;
        outline: none;
        color: black;
        font-size: 13px;
      }

      input::placeholder {
        color: black;
      }

      img {
        width: 30px;
        margin: -8px 0 0 3px;
      }
    }

    &__initials {
      width: fit-content;
      background-color: #02215C;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px;
      border-top-right-radius: 14px;
      border-bottom-right-radius: 14px;
    }
  }
</style>