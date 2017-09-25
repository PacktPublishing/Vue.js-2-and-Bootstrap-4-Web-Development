<template>
  <div class="container">
    <header-component></header-component>
    statistics
  </div>
</template>
<script>
  import HeaderComponent from '~/components/common/HeaderComponent'
  export default {
    middleware: 'authenticated',
    components: {
      HeaderComponent
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/styles/main";
</style>
