<template>
  <div class="footer">
    <div class="container">
      <span class="copyright">Copyright</span>
      <span class="fact">Working out sharpens your memory</span>
      <span class="author bold">Workout Lovers</span>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped lang="scss">
  @import "../../assets/styles/main";

  .footer {
    border-top: 3px dotted $color-primary;
    min-height: $footer-height;
    padding: 15px 10px;

    .container {
      @extend .center-content;
      @include justify-content(space-between);
      height: 100%;
      min-height: 30px;
      font-weight: lighter;
      color: $color-grey2;

      @include media-breakpoint-down(sm) {
        @include align-items(flex-start);
        @include flex-direction(column);
      }
    }
    .copyright,
    .author {
      width: 150px;
    }
    .copyright,
    .fact,
    .author {
      @include media-breakpoint-down(sm) {
        margin-bottom: 10px;
        width: auto;
      }
    }
  }
</style>
