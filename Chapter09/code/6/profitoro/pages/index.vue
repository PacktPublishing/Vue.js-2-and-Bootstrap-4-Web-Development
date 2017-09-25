<template>
  <div>
    <pomodoro v-if="isAuthenticated"></pomodoro>
    <login v-if="!isAuthenticated"></login>
  </div>
</template>
<script>
  import login from '~/pages/login'
  import pomodoro from '~/pages/pomodoro'
  import { mapActions, mapState } from 'vuex'

  export default {
    components: {login, pomodoro},
    methods: {
      ...mapActions(['bindAuth'])
    },
    computed: {
      ...mapState(['user']),
      isAuthenticated () {
        return this.user && !this.user.isAnonymous
      }
    },
    created () {
      this.bindAuth()
    }
  }
</script>
