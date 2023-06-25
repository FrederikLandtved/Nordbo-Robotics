<script setup>
  import TabBox from '../components/ui-kit/tab/TabBox.vue';
  const pageTabs = ref([{title: 'My Library', id: 'mylibrary'}, {title: 'Download', id: 'download'}]);
</script>

<template>
  <TabBox :tabs="pageTabs">
    <template #mylibrary>
      <!-- Code, that is shown as content in "My Library" tab -->
    </template>

    <template #download>
      <!-- Code, that is shown as content in "Download" tab -->
    </template>
  </TabBox>
</template>

<style lang="scss" scoped>

</style>

