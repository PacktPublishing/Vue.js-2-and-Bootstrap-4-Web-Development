<template>
  <div>
    <div class="row">
      <div class="col-1">
        <logo></logo>
      </div>
      <div v-if="user && !user.isAnonymous" class="col-11 row">
        <div class="col-2">
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
      <div v-if="user && user.isAnonymous" class="col">
        <button class="btn btn-secondary" @click="onLogout">Go to the start page</button>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions, mapGetters, mapState} from 'vuex'
  import router from '@/router'
  import Logo from '@/components/common/Logo'

  export default {
    computed: {
      ...mapGetters({name: 'getDisplayName'}),
      ...mapState(['user'])
    },
    methods: {
      ...mapActions(['logout']),
      onLogout () {
        this.logout()
        router.push('/')
      }
    },
    router,
    components: {
      Logo
    }
  }
</script>
<style scoped lang="sass">
  button {
    cursor: pointer;
  }
</style>
