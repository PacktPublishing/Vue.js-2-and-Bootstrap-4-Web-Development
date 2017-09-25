//CountDownTimer.vue
<template>
  <div class="container">
    <div class="row justify-content-center">
      <svg-circle-sector class="col-sm-12 col-md-8 col-lg-6 col-xl-4" :angle="30" :text="'Hello'"></svg-circle-sector>
    </div>
  </div>
</template>
<script>
  import SvgCircleSector from './SvgCircleSector'
  export default {
    components: {
      SvgCircleSector
    }
  }
</script>
<style scoped lang="sass">
</style>

