<script>

</script>

<template>
  <nav class="navigation--bar">
    <div class="navigation--bar__item">
      <span>Home</span>
    </div>
    <div class="navigation--bar__item">
      <span>My Learning</span>
    </div>
    <div class="navigation--bar__item">
      <span>Notifications</span>
    </div>
  </nav>
</template>

<style lang="scss">
  .navigation--bar {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    background: none;

    &__item {
      flex: 1;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      cursor: pointer;
      background-color: #ebebeb;

      div {
        width: fit-content;
        text-align: center;
      }
    }
  }
</style>