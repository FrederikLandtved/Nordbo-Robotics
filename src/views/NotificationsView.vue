<script setup>
</script>

<template>
  <div class="mylearning">

    <img src="../assets/img/icons/back.svg" alt="">
    
    <div class="profile" style="padding:8px 0;">
    
        <div class="notifications">
            <h2>Notifications</h2>
            
            <div class="noti noti-aktiv">
                <h3>New course available</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <span>2 days ago</span>
            </div>
            
            <div class="noti">
                <h3>Create your new badge</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <span>5 days ago</span>
            </div>
            
            <div class="noti">
                <h3>Remember to finish the following courses</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <span>1 week ago</span>
            </div>

            <div class="noti">
                <h3>You must renew your downloads</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <span>2 weeks ago</span>
            </div>

            <div class="noti">
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <span>1 month ago</span>
            </div>


        
        </div>
    </div>

  </div>
</template>


<style scoped lang="scss">
@import "@/assets/main.scss";

//Notifications

.notifications {
    font-weight: 300;
    
    h2{
        margin: 30px 15px;
        font-weight: 300px;
    }
}

.noti{
   padding-bottom: 20px;
   background-color: $background-noti;
   padding: 15px;
   
  
  p{
    font-size: 12px;
  }
   span{
    font-size: 10px;
    color:#054BD0;
    
   }
   h3{
    margin-bottom: 10px;
    font-size: 14px;
   }
}
.noti-aktiv{
    background-color: $background-noti-aktiv;
}

</style>