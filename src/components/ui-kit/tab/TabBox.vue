<script setup>
  import { ref, onMounted } from 'vue';

  const activeTab = ref('');

  const props = defineProps({
      tabs: Array
  }) 

  const setActiveTab = (newActiveTab) => {
    activeTab.value = newActiveTab;
  }

  onMounted(() => {
    activeTab.value = props.tabs[0].id;
  })
</script>
<template>
  <div class="profile-buttons">
    <button 
      v-for="item in tabs" 
      :key="item.title" 
      @click="setActiveTab(item.id)" 
      class="profile-tab-button" 
      :class="{ active: activeTab === item.id }"
    >
      {{ item.title }}
    </button>
  </div>
  
  <div class="tab-content">
    <slot :name="activeTab" />
  </div>
   
</template>

<style lang="scss" scoped>
  .profile-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    .profile-tab-button {
      background-color: #ffffff;
      border: 0;
      border-radius: 12px 12px 0 0;
      font-weight: 500;
      height: 40px;
      width: 180px;
  }

    .active {
      background-color: #eeeeee;
    }
  }

  .tab-content {
    background-color: #eeeeee;
    padding: 10px;
    box-sizing: border-box;
  }
</style>