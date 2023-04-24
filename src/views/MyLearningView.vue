<script setup>
</script>

<template>
  <div class="mylearning">

    <img src="../assets/img/icons/back.svg" alt="">
    
    <div class="profile">

      <div class="profile-info">
        
        <img src="../assets/img/stefan.jpg" alt="Profile Picture">
        
        <div class="profile-info-header">
        <h1>Stefan Jespersen</h1>
        <img src="../assets/img/icons/edit.svg" alt="Edit">
      </div>

        <div class="profile-info-item">
        <img src="../assets/img/icons/factory.svg" alt="Factory">
        <h2>REA Automatdrejning</h2>
      </div>

      <div class="profile-info-item">
        <img src="../assets/img/icons/Right.svg" alt="">
        <h3>3 task/s completed</h3>
      </div>

        
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
$iconColor:#02215C;
$buttonColor:#054BD0;
$iconGreen:#2A9B1B;
$textColor:#323232;
$background-noti:#f6f6f6;
$background-noti-aktiv:#eeeeee;

.profile {


  .profile-info {
    img {
        padding: 0;
        border-radius: 100%;
        width: 100px;
      }

      .profile-info-header {
        align-items: center;
        display: flex;
        justify-content: space-between;

        img {
          margin-top: -12px;
          width: 30px;
        }
      }

      .profile-info-item {
        align-items: center;
        display: flex;
        padding-top: 10px;

        img {
          border-radius: 0;
          width: 20px;
        }

        h2 {
        color: $textColor;
        font-size: 14px;
        padding-left: 10px;
        }

        h3 {
          font-size: 11px;
          padding-left: 10px;
        }
      }

    h1 {
      color: $textColor;
      font-size: 20px;
    }

    img:nth-child(6) {
        float: left;
        padding: 13px 0 0 0;
        width: 10px;
      }

  }
}
</style>
