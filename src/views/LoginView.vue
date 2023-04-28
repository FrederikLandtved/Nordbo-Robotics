<script setup>
  import { goToRoute } from '@/services/NavigationService.js'
  import { login } from '@/services/AuthService.js'
  import { ref } from 'vue';

  const email = ref('');
  const password = ref('');

  const logInUser = () => {
    // Needs validation
    if(email.value !== '' && password.value !== ''){
      login(email.value, password.value);
    }
  }
</script>

<template>  
  <div class="background">
    <div class="flex-item">
      <img src="../assets/img/nordbo-icon.png">
    </div>    
    <div class="flex-item items-start">
      <div class="login-btn">
        <p>Log ind som bruger</p>

        <div class="login-input">
          <span>Email: </span>
          <input type="text" v-model="email">
        </div>
        <div class="login-input">
          <span>Adgangskode: </span>
          <input type="password" v-model="password">
        </div>
        <div class="login-btn">
          <button @click="logInUser()" style="background-color:#02215C;">Log in</button> 
        </div> 
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

p {
  margin-bottom: 25px;
  color: white;
  font-size: 18px;
}

.flex-item {
  display: flex;
  flex: 0.4;
  justify-content: center;
  align-items: center;
}

.flex-end {
  color: white;
}

.items-start {
  flex: 0.5;
  align-items: flex-start;
}

</style>