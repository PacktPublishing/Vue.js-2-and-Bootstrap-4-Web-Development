<template>
  <div>
    <div class="row">
      <div class="col-2 offset-4">
        <p>Welcome <span>{{name}}</span></p>
      </div>
      <router-link class="col" to="/">Home </router-link>
      <router-link class="col" to="statistics">Statistics </router-link>
      <router-link class="col" to="workouts">Workouts </router-link>
      <router-link class="col" to="settings">Settings </router-link>
      <div class="col">
        <button class="btn btn-secondary" @click="onLogout">Logout</button>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import router from '@/router'

  export default {
    computed: {
      ...mapGetters({name: 'getDisplayName'})
    },
    methods: {
      ...mapActions(['logout']),
      onLogout () {
        this.logout()
        router.push('/')
      }
    },
    router
  }
</script>
<style scoped lang="sass">

</style>
