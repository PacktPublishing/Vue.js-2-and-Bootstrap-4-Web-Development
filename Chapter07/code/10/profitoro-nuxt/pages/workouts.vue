<template>
  <div class="container">
    <header-component></header-component>
    <div>Workouts</div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'
  export default {
    middleware: 'authenticated',
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/styles/main";
</style>
