<template>
  <div id="app" class="container">
    <landing-page v-if="!user"></landing-page>
    <main-content v-if="user"></main-content>
  </div>
</template>

<script>
  import MainContent from './components/MainContent'
  import LandingPage from './components/LandingPage'
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'app',
    components: {
      MainContent,
      LandingPage
    },
    computed: {
      ...mapState(['user'])
    },
    methods: {
      ...mapActions(['bindStatistics', 'bindConfig', 'bindAuth'])
    },
    created () {
      this.bindAuth()
      this.bindConfig()
      this.bindStatistics()
    }
  }
</script>

<style>
</style>

