<template>
  <div class="circle">
    <svg class="timer" viewBox="0 0 200 200" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
      <circle class="bigCircle" r="100" cx="100" cy="100"></circle>
      <circle class="smallCircle" r="90" cx="100" cy="100"></circle>
      <path class="segment" :d="path"></path>
      <slot></slot>
      <text v-if="text != ''" class="text" x="100" y="100">
        {{text}}
      </text>
    </svg>
  </div>
</template>
<script>
  /**
   * Calculates the x,y coordinates on the circumference for the given angle
   * @param {number} angle
   * @returns {object}
   */
  function calcEndPoint (angle) {
    let x, y

    if (angle <= 180) {
      x = 100 - 100 * Math.sin(Math.PI * angle / 180)
      y = 100 - 100 * Math.cos(Math.PI * angle / 180)
    } else {
      x = 100 - 100 * Math.sin(Math.PI * angle / 180)
      y = 100 - 100 * Math.cos(Math.PI * angle / 180)
    }

    return {
      x, y
    }
  }
  /**
   * Calculates the path attribute for the svg element to draw a circle sector for the given angle
   * @param {number} angle
   * @returns {string}
   */
  function calcPath (angle) {
    let d
    let {x, y} = calcEndPoint(angle)
    if (angle <= 180) {
      d = `M100,100 L100, 0 A100,100 0 0,0 ${x}, ${y} z`
    } else {
      d = `M100,100  L100, 0 A100,100 0 0,0 100, 200 A100,100 0 0,0 ${x}, ${y} z`
    }
    return d
  }
  export default {
    props: ['angle', 'text'],
    computed: {
      path () {
        return calcPath(this.angle)
      }
    }
  }
</script>
<style scoped lang="sass">
  $big-circle-color: gray;
  $small-circle-color: lightgray;
  $segment-color: darkgray;
  $text-color: black;
  .bigCircle {
    fill: $big-circle-color;
  }
  .smallCircle {
    fill: $small-circle-color;
  }
  .segment {
    fill: $segment-color;opacity: 0.6;
  }
  .text {
    font-size: 1em;
    stroke-width: 0;
    opacity: .9;
    fill: $text-color;
    text-anchor: middle;
    dominant-baseline: central;
  }
</style>
