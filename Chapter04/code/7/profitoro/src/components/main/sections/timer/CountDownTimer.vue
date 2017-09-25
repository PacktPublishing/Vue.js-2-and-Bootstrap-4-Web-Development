<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <svg-circle-sector class="col-sm-12 col-md-8 col-lg-6 col-xl-4" :angle="angle" :text="text"></svg-circle-sector>
    </div>
    <div class="controls">
      <div class="btn-group" role="group">
        <button @click="start" type="button" :class="{disabled: isStarted && !isPaused}" class="btn btn-link">Start</button>
        <button @click="pause" type="button" :class="{disabled: !isStarted || isPaused}" class="btn btn-link">Pause</button>
        <button @click="stop" type="button" :class="{disabled: !isStarted || isStopped}" class="btn btn-link">Stop</button>
      </div>
    </div>
  </div>
</template>
<script>
  import SvgCircleSector from './SvgCircleSector'
  /**
   * Adds a trailing 0 on the left of the given value
   * @param {string|number} value
   * @returns {string}
   */
  function leftPad (value) {
    if (('' + value).length > 1) {
      return value
    }

    return '0' + value
  }

  export default {
    props: ['time'],
    data () {
      return {
        interval: null,
        timestamp: this.time,
        isStarted: false,
        isPaused: false,
        isStopped: true
      }
    },
    computed: {
      minutes () {
        return Math.floor(this.timestamp / 60)
      },
      seconds () {
        return this.timestamp % 60
      },
      angle () {
        return 360 - (360 / this.time * this.timestamp)
      },
      text () {
        return `${leftPad(this.minutes)}:${leftPad(this.seconds)}`
      }
    },
    components: {
      SvgCircleSector
    },
    methods: {
      start () {
        if (this.isStarted === false) {
          this.timestamp = this.time
        }
        this.isStarted = true
        this.isStopped = false
        this.isPaused = false
        if (this.interval) {
          clearInterval(this.interval)
        }
        this.interval = setInterval(() => {
          this.timestamp --
          if (this.timestamp === 0) {
            this.timestamp = this.time
          }
        }, 1000)
      },
      pause () {
        clearInterval(this.interval)
        this.isPaused = true
      },
      stop () {
        clearInterval(this.interval)
        this.timestamp = this.time
        this.isStopped = true
        this.isStarted = false
        this.isPaused = false
      }
    }
  }
</script>
<style scoped lang="scss">
  button {
    cursor: pointer;
  }
</style>
