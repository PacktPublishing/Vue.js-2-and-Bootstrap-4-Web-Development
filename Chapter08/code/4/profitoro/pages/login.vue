<template>
  <div class="landingPage">
    <div class="container row justify-content-center align-items-center">
      <div class="col-sm-12 col-md-12">
        <logo-text></logo-text>
        <tagline></tagline>
        <authentication></authentication>
      </div>
    </div>
  </div>
</template>
<script>
  import {Authentication, LogoText, Tagline} from '~/components/landing'

  export default {
    components: {
      Authentication,
      LogoText,
      Tagline
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/styles/main";
  .landingPage {
    min-height: 100vh;
    background-color: $color-lp-bg;
    color: $color-white;

    .container {
      margin: 0 auto;
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }
</style>
