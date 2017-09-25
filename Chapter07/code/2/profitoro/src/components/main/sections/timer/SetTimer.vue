<template>
  <div>
    <div class="set-timer">
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
<style scoped lang="sass">
  .set-timer {
    height: 0%;
    position: relative;
    background-color: lightgray;
    width: 100%;
    padding-top: 100%;
    border-radius: 50%;

    .text {
      margin: auto;
      width: 80%;
      height: 2em;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      position: absolute;
      text-align: center;
      font-size: 1.5em;
    }
  }
</style>
