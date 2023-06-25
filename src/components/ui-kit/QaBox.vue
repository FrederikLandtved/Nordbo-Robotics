<script setup>
import { ref } from 'vue';

const expanded = ref(false);

function toggleExpanded(){
    expanded.value = !expanded.value
  }

  const props = defineProps({
    title: String,
    desc: String
  })

</script>


<template>

  <div class="qa-menu">
    <div class="header">
      <h4>{{ title }}</h4>
      <button @click="toggleExpanded">
        <img src="@/assets/img/icons/arrow-down.png" alt="Arrow">
      </button>
    </div>
    
    <div v-if="expanded">
      
      <div class="expanded">
        <p>{{ desc }}</p>
      </div> 
    </div>
  </div>

</template>

<style lang="scss" scoped>
  @import "@/assets/main.scss";

  .qa-menu {
    border-bottom: 1px solid #cccccc;
      display: flex;
      justify-content: space-between;
  flex-direction: column;
     

  .header {
  display: flex;
justify-content: space-between;
}

      button{
        border: none;
        float: right;
      }
    

      h4 {
        font-size: 14px;
        margin-bottom: 25px;
        margin-top: 15px;
        font-weight: 500;
      }

      img {
        height: 10px;
        transform: rotate(270deg);
     
      }
      

      }

    
      .expanded{
        padding-bottom: 20px;
 
            p{
                font-size: 13px;
                font-weight: lighter;
                margin: 0px 10px;
                padding-right: 30px;
            }
        
      }





</style>

