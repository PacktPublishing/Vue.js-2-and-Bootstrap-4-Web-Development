<template>
  <div id="app">
    <h1>Welcome to Profitoro</h1>
    <main-content></main-content>
  </div>
</template>

<script>
  import MainContent from './components/MainContent'
  import LandingPage from './components/LandingPage'
  export default {
    name: 'app',
    components: {
      MainContent,
      LandingPage
    }
  }
</script>

<style>
</style>

