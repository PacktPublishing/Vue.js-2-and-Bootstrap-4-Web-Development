<template>
  <div>
    <div class="set-timer-content">
      <input class="text" type="number" :value="value" @change="onChange">
    </div>
  </div>
</template>
<script>
  export default {
    props: ['value'],
    methods: {
      onChange (ev) {
        this.$emit('valueChanged', ev.target.value)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/styles/main";

  .set-timer-content {
    position: relative;
    width: 100%;
    padding-top: 100%;
    border-radius: 50%;

    .text {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      border: 0;
      width: 40%;
      height: 2em;
      background-color: transparent;
      color: $color-white;
      text-align: center;
      font-size: 1.5em;
    }
  }
  .set-timer-1 .set-timer-content {
    background-color: $color-lp-primary-faded;
  }
  .set-timer-2 .set-timer-content {
    background-color: rgba($color-lp-primary-faded, 0.8);
  }
  .set-timer-3 .set-timer-content {
    background-color: rgba($color-lp-primary-faded, 0.6);
  }
</style>
