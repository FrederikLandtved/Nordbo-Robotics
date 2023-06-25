<script setup>

import NotifikationBox from '../components/ui-kit/NotifikationBox.vue';
</script>

<template>
  <div class="mylearning">

    <img src="/assets/img/icons/back.svg" alt="">
    
    <div class="profile" style="padding:8px 0;">
    
        <div class="notifications">
            <h2>Notifications</h2>
            
            <NotifikationBox  class="noti-aktiv"
            title="New course available"
            desc="A new course from Jeppe Hansen has just been published"
            time="2 days ago"
            :isActive='true'
            ></NotifikationBox>
            
            <NotifikationBox
            title="Congrats with your new badge"
            desc="You have just reached a new milestone in your learning progress.."
            time="3 days ago"
            ></NotifikationBox>

            <NotifikationBox
            title="Remember to finish the following courses"
            desc="Indtroduction - Sanding & Calibration - Sanding"
            time="1 week ago" 
            ></NotifikationBox>

            <NotifikationBox
            title="New course available"
            desc="A new course from Jeppe Hansen has just been published"
            time="2 weeks ago"
            ></NotifikationBox>

            <NotifikationBox
            title="You must renew your downloads"
            desc="A new course from Thomas Petersen has just been published"
            time="1 month ago"
            ></NotifikationBox>

            <NotifikationBox
            title="New course available"
            desc="A new course from Isabella Larsen has just been published"
            time="1 month ago"
            ></NotifikationBox>


        
        </div>
    </div>

  </div>
</template>


<style scoped lang="scss">


//Notifications
.profile{
   margin-top: 48px; 
}
.notifications {
    
    
    h2{
        margin: 30px 15px;
        font-weight: 500;
        font-size: 22px;
    }

}





</style>