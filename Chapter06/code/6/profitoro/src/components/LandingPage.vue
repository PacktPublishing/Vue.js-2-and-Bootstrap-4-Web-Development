<template>
  <div>
    <logo></logo>
    <tagline></tagline>
    <div class="container row justify-content-center align-items-center">
      <div class="col-sm-12 col-md-6 col-lg-6">
        <authentication></authentication>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6">
        <go-to-app-link></go-to-app-link>
      </div>  
    </div>
  </div>
</template>
<script>
  import {Authentication, GoToAppLink, Tagline} from './landing'
  import {Logo} from './common'
  export default {
    components: {
      Logo,
      Authentication,
      GoToAppLink,
      Tagline
    }
  }
</script>
<style scoped lang="sass">

</style>
