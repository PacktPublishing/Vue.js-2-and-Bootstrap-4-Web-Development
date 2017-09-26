<template>
  <div>
    <header-component></header-component>
    <content-component></content-component>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import {HeaderComponent, FooterComponent, ContentComponent} from './main'
  export default {
    components: {
      HeaderComponent,
      FooterComponent,
      ContentComponent
    }
  }
</script>
<style scoped lang="sass">

</style>
