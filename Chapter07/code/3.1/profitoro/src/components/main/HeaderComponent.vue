<template>
  <div>
    <nav class="navbar navbar-toggleable-md navbar-light">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-brand">
        <logo></logo>
      </div>
      <div class="collapse navbar-collapse" id="navbarHeader">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{disabled:isAnonymous}" :to="settingsPath">Settings </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{disabled:isAnonymous}" :to="statisticsPath">Statistics </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{disabled:isAnonymous}" :to="workoutsPath">Workouts </router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button v-if="!isAnonymous" class="btn btn-secondary" @click="onLogout">Logout</button>
          <button v-if="isAnonymous" class="btn btn-secondary" @click="onLogout">Go to the start page</button>
        </form>
      </div>
    </nav>
  </div>
</template>
<script>
  import {mapActions, mapGetters, mapState} from 'vuex'
  import router from '@/router'
  import Logo from '@/components/common/Logo'

  export default {
    computed: {
      ...mapGetters({name: 'getDisplayName'}),
      ...mapState(['user']),
      isAnonymous () {
        return this.user && this.user.isAnonymous
      },
      settingsPath () {
        return this.isAnonymous ? '/' : 'settings'
      },
      statisticsPath () {
        return this.isAnonymous ? '/' : 'statistics'
      },
      workoutsPath () {
        return this.isAnonymous ? '/' : 'workouts'
      }
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
