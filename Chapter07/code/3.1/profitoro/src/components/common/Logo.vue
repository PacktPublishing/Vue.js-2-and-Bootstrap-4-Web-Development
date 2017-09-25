<template>
  <router-link to="/">
    <img class="logo" :src="src" alt="ProFitOro">
  </router-link>
</template>
<script>
  import router from '@/router'

  export default {
    data () {
      return {
        src: require('@/assets/profitoro_logo.svg')
      }
    },
    router
  }
</script>
<style>
  .logo {
    max-width: 20%;
  }
</style>

