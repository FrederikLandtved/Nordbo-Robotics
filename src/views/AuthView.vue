<script setup>
  import { login } from '@/services/AuthService.js';
  import { goToRoute } from '@/services/NavigationService.js'
  const goToLogIn = () => {
    goToRoute("login");
  }

  const goToSignUp = () => {
    goToRoute("signup");
  }
</script>

<template>  
  <div class="background">
    <div class="flex-item">
      <img src="../assets/img/nordbo-icon.png">
    </div>    
    <div class="flex-item items-start">
        <div class="login-btn">
            <button @click="goToLogIn()" style="background-color:#02215C;">Log in</button> 
            <button @click="goToSignUp()" class="signUp">Sign up</button>
            <a href="#">Forgot password?</a>
        </div>    
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
}

.flex-item {
  display: flex;
  flex: 0.4;
  justify-content: center;
  align-items: center;
}

.items-start {
  flex: 0.5;
  align-items: flex-start;
}

</style>