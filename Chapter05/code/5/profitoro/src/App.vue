<template>
  <div id="app">
    <h1>Welcome to Profitoro</h1>
    <main-content></main-content>
  </div>
</template>

<script>
  import MainContent from './components/MainContent'
  import LandingPage from './components/LandingPage'
  import {mapActions} from 'vuex'
  export default {
    name: 'app',
    components: {
      MainContent,
      LandingPage
    },
    methods: {
      ...mapActions(['bindStatistics', 'bindConfig'])
    },
    created () {
      this.bindStatistics()
      this.bindConfig()
    }
  }
</script>

<style>
</style>

