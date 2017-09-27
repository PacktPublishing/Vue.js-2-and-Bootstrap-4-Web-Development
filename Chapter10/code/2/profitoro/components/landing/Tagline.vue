<template>
  <div>
    <p class="tagline">Take breaks during work. Exercise during breaks.</p>
    <nuxt-link class="tagline small know-more" tag="p" to="about">Know more </nuxt-link>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped lang="scss">
  .tagline {
    margin: 0;
    font-weight: lighter;
    letter-spacing: 1px;

    &.know-more {
      cursor: pointer;
    }
  }
</style>

