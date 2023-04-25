<script setup>

</script>


<template>
<div class="background">
    <div class="login-btn">
    <button style="background-color:#02215C;">Log in</button> 
    <button class="signUp">Sign up</button>
    <a href="#">Forgot password?</a>
    </div>
</div>
</template>



<style scoped lang="scss">
@import "@/assets/main.scss";

.background{
   
    background-image:url("../assets/img/login-background.png");
    background-size:auto;
    height: 100%;
}
.login-btn{
   
    display: flex;
    justify-content: center;
    padding-top: 100%;
    flex-direction: column;
    align-items: center;
    
    
    
    button{
        width: 220px;
        height: 70px;
        border-radius: 10px;
        margin-bottom:20px ;
        color: white;
        border:none;
        box-shadow: rgba(100, 100, 111, 0.3) 0px 4px 8px 0px;
        font-size: 20px;
    }
    .signUp{
        color:black;
    }
    
    

}

</style>