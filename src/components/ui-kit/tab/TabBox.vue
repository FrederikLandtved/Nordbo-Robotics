<script setup>
  import { ref, onMounted } from 'vue';

  const activeTab = ref('');
  const fullWidthButtons = ref(false);

  const props = defineProps({
    tabs: Array
  });

  const setActiveTab = (newActiveTab) => {
    activeTab.value = newActiveTab;
  }

  onMounted(() => {
    activeTab.value = props.tabs[0].id;
    
    if(props.tabs.length <= 2){
      fullWidthButtons.value = true;
    }
  });
</script>

<template>
  <div class="tab-buttons">
    <button 
      class="tab-buttons__item" 
      :class="{ '--active': activeTab === tabButton.id, '--full-width': fullWidthButtons}"
      :key="tabButton.id" 
      v-for="tabButton in tabs" 
      @click="setActiveTab(tabButton.id)" 
    >
      {{ tabButton.title }}
    </button>
  </div>
  
  <div class="tab-content">
    <slot :name="activeTab" />
  </div>
</template>

<style lang="scss" scoped>
  .tab-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
    padding-top: 6px;

    .tab-buttons__item {
      background-color: #ffffff;
      border: 0;
      border-radius: 12px 12px 0 0;
      font-weight: 500;
      height: 34px;
      padding: 8px 14px;

      &.--active {
        background-color: #eeeeee;
      }

      &.--full-width {
        width: 100%;
      }
    }
  }

  .tab-content {
    background-color: #eeeeee;
    height: 100%;
  }
</style>