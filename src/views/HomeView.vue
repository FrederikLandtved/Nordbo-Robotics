<script setup>
  import ProductCard from '@/components/ui-kit/ProductCard.vue'
  import GridButton from '@/components/ui-kit/GridButton.vue';  
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
    <div class="home-page--container">
      <ProductCard title='Mimic' paragraph='Mimic, the ease-to-use tool that allows anyone to record and automate tasks without any prior programming experience.' />
      <h4 class="headline">Here is how you can use Mimic</h4>
      <div class="grid-container">
        <GridButton title='Sanding' style="background-image: url(./src/assets/img/sanding.png); background-size:cover;" color='rgba(2,33,92,0.73)'></GridButton>
        <GridButton title='Griding' style="background-image: url(./src/assets/img/grinding.png); background-size:cover;" color='#615946'></GridButton>
        <GridButton title='Control' style="background-image: url(./src/assets/img/controll.png); background-size:cover;" color='#765B4B'></GridButton>
        <GridButton title='Painting' style="background-image: url(./src/assets/img/painting.png); background-size:cover;" color='#5D7D84'></GridButton>
        <GridButton title='Deburring' style="background-image: url(./src/assets/img/deburring.png); background-size:cover;" color='#5A5C5E'></GridButton>
        <GridButton title='Finishing' style="background-image: url(./src/assets/img/billede5.png); background-size:cover;" color='#3B3D42'></GridButton>
      </div>
    </div>
</template>

<style lang="scss">
  .header--container {
    width: 100%;
    height: 45px;
    display: flex;
    gap: 18px;
    margin-top: 20px;

    &__search {
      flex: 1;
      margin-right: 20px;
      display: flex;
      align-items: center;
      box-shadow: rgba(100, 100, 111, 0.3) 0px 4px 8px 0px;
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
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px;
      border-top-right-radius: 14px;
      border-bottom-right-radius: 14px;

      span {
        color: white
      }
    }
  }

  .home-page--container {
    padding: 15px;
    margin-top: 10px;

    .headline {
      font-size: 14px;
      margin-top: 20px;
      font-weight: 500;
    }
  }

  .grid-container {
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    grid-row-gap: 8px;
  }

  .item {
    background-color: #ddd;
    padding: 20px;
  }
</style>