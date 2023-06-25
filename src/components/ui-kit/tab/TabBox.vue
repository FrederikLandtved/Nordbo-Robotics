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
  <div class="tab-buttons">
    <button 
      class="tab-buttons__item" 
      :class="{ '--active': activeTab === tabButton.id }"
      :key="tabButton.title" 
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
    justify-content: center;
    width: 100%;
    margin-top: 5px;

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
    }
  }

  .tab-content {
    background-color: #eeeeee;
    height: 100%;
  }
</style>