<template>
  <div>
    <div class="container">
      <div><small>{{ titleText }}</small></div>
      <form>
        <div class="form-group">
          <input class="rounded-0 border-top-0 border-left-0 border-right-0 form-control" v-model="email" type="email" placeholder="email">
        </div>
        <div class="form-group">
          <input class="rounded-0 border-top-0 border-left-0 border-right-0 form-control" v-model="password" type="password" placeholder="password">
        </div>
        <button @click="onAction" class="rounded-0 btn btn-secondary btn-block">{{ this.actionButtonText }}</button>
      </form>
      <hr/>
      <button @click="onSwitch" class="rounded-0 btn btn-secondary btn-block">{{ this.switchButtonText }}</button>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'

  let TITLE_TEXT = {
    LOGIN: 'Already a member? Log in here!',
    SIGNUP: 'Don\'t have an account? Sign up here!'
  }
  let ACTION_BUTTON_TEXT = {
    LOGIN: 'LOGIN',
    SIGNUP: 'SIGN UP'
  }
  export default {
    data () {
      return {
        isLogin: true,
        email: '',
        password: ''
      }
    },
    computed: {
      titleText () {
        return this.isLogin ? TITLE_TEXT.LOGIN : TITLE_TEXT.SIGNUP
      },
      switchButtonText () {
        return this.isLogin ? TITLE_TEXT.SIGNUP : TITLE_TEXT.LOGIN
      },
      actionButtonText () {
        return this.isLogin ? ACTION_BUTTON_TEXT.LOGIN : ACTION_BUTTON_TEXT.SIGNUP
      }
    },
    methods: {
      ...mapActions(['createUser', 'authenticate']),
      onSwitch () {
        this.isLogin = !this.isLogin
      },
      onAction (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        let method = this.isLogin ? this.authenticate : this.createUser
        method({email: this.email, password: this.password})
      }
    }
  }
</script>
<style scoped lang="sass">
  button {
    cursor: pointer
  }
</style>

