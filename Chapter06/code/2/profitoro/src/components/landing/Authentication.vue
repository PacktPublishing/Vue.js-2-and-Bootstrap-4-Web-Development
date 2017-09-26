<template>
  <div>
    <h1>Register</h1>
    <input v-model="registerEmail" type="text" placeholder="email">
    <input v-model="registerPassword" type="password" placeholder="password">
    <button @click="onRegisterClick">Register!</button>
    <h1>Login</h1>
    <input v-model="loginEmail" type="text" placeholder="email">
    <input v-model="loginPassword" type="password" placeholder="password">
    <button @click="onLoginClick">Log in!</button>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'

  export default {
    data () {
      return {
        registerEmail: '',
        registerPassword: '',
        loginEmail: '',
        loginPassword: ''
      }
    },
    methods: {
      ...mapActions(['createUser', 'authenticate']),
      onRegisterClick () {
        this.createUser({email: this.registerEmail, password: this.registerPassword})
      },
      onLoginClick () {
        this.authenticate({email: this.loginEmail, password: this.loginPassword})
      }
    }
  }
</script>
<style scoped lang="sass">

</style>

