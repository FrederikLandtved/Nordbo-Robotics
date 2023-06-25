<script setup>

const props = defineProps({
    title: String,
    desc: String,
    time: String,
    isActive: Boolean
  })

</script>



<template>
  
    <div class="noti" :class="{'noti-aktiv': isActive}">
        <h3>{{ title }}</h3>
        <p>{{ desc }} </p>
        <span>{{ time }}</span>
    </div>

</template>



<style lang="scss" scoped>
@import "@/assets/main.scss";

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
    font-weight:500;
   }
}
.noti-aktiv{
    background-color:$background-noti-aktiv; 
}
</style>