<script setup>
  import { login } from '@/services/AuthService.js';

  const logInUser = () => {
    login();
  }
</script>


<template>
    
<div class="background">
    <img src="../assets/img/nordbo-icon.png">
        <div class="login-btn">
            <button @click="logInUser()" style="background-color:#02215C;">Log in</button> 
            <button class="signUp">Sign up</button>
            <a href="#">Forgot password?</a>
        </div>
</div>
</template>



<style scoped lang="scss">
@import "@/assets/main.scss";

.background{
   
    background-image:url("../assets/img/login-background.png");
    background-size: auto;
    background-position: 15% 65%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 250px;
}


.login-btn{
   
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    
    
    button{
        width: 220px;
        height: 70px;
        border-radius: 10px;
        margin-bottom:30px ;
        color: white;
        border:none;
        box-shadow: rgba(100, 100, 111, 0.3) 0px 4px 8px 0px;
        font-size: 20px;
    }
    .signUp{
        color:black;
    }
}

img {
  height: 50px;
}

</style>