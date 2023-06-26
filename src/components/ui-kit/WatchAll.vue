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
<button class="WatchAll" >
            Watch all <img class="WatchAll__item--image" src="/assets/img/icons/PlayAll.svg">
</button>
</template>

<style lang="scss" scoped>
$buttonColor: #054BD0;
.WatchAll{
        margin-top:20px ;
        width: 105px;
        height: 35px;
        margin-left:15px;
        background-color: $buttonColor;
        border: none;
        border-radius: 5px;
        color: white;
        display: flex;
        padding:10px 10px;

        &__item {

            &--image{
            margin: -2px 0px 0px 10px ;
        }
        }



    }

</style>