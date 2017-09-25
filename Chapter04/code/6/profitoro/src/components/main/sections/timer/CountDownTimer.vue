<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <svg-circle-sector class="col-sm-12 col-md-8 col-lg-6 col-xl-4" :angle="angle" :text="text"></svg-circle-sector>
    </div>
    <div class="controls">
      <div class="btn-group" role="group">
        <button @click="start" type="button" class="btn btn-link">Start</button>
        <button @click="pause" type="button" class="btn btn-link">Pause</button>
        <button @click="stop" type="button" class="btn btn-link">Stop</button>
      </div>
    </div>
  </div>
</template>
<script>
  import SvgCircleSector from './SvgCircleSector'

  export default {
    props: ['time'],
    data () {
      return {
        timestamp: this.time,
        interval: null
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
        return `${this.minutes}:${this.seconds}`
      }
    },
    components: {
      SvgCircleSector
    },
    methods: {
      start () {
        this.interval = setInterval(() => {
          this.timestamp --
          if (this.timestamp === 0) {
            this.timestamp = this.time
          }
        }, 1000)
      },
      pause () {
        clearInterval(this.interval)
      },
      stop () {
        clearInterval(this.interval)
        this.timestamp = this.time
      }
    }
  }
</script>
<style scoped lang="scss">
  button {
    cursor: pointer;
  }
</style>
