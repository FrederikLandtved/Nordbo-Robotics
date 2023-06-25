<script setup>

defineProps({
    click: String
}) 

</script>

<script>
import { ref } from 'vue'
const watchClass = ref("WatchAll");

export { watchClass };

</script>

<template>
<button class="WatchAll" {{ click }} >
            Watch all <img src="/assets/img/icons/PlayAll.svg">
</button>
</template>
