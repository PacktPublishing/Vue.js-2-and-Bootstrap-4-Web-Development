<template>
  <nuxt-link to="/">
    <img class="logo" :src="src" alt="ProFitOro">
  </nuxt-link>
</template>
<script>
  export default {
    data () {
      return {
        src: require('~/assets/profitoro_logo.svg')
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/styles/main";

  .logo {
    max-width: 160px;

    @include media-breakpoint-down(md) {
      max-width: 80px;
    }
  }

</style>
