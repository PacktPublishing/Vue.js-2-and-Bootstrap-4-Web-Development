<template>
  <div class="content">
    <svg-circle-sector class="countdown-timer col-sm-12 col-md-10 col-lg-6" :angle="angle" :text="text"></svg-circle-sector>
    <div class="controls">
      <div class="btn-group" role="group">
        <button @click="start" type="button" :class="{disabled: state === 0}" class="btn btn-link"><img :src="playIcon" /></button>
        <button @click="pause" type="button" :class="{disabled: state === 1 || state === 2}" class="btn btn-link"><img :src="pauseIcon" /></button>
        <button @click="stop" type="button" :class="{disabled: state === 2}" class="btn btn-link btn-stop"><img :src="stopIcon" /></button>
      </div>
    </div>
  </div>
</template>
<script>
  import SvgCircleSector from './SvgCircleSector'
  import {leftPad, numberOfSecondsFromNow} from '@/utils/utils'
  const STATE = {
    STARTED: 0,
    PAUSED: 1,
    STOPPED: 2
  }

  export default {
    props: ['time'],
    data () {
      return {
        timestamp: this.time,
        interval: null,
        state: STATE.STOPPED,
        startTime: null,
        pauseTime: null,
        pauseSeconds: 0,
        playIcon: require('@/assets/images/play_icon.svg'),
        pauseIcon: require('@/assets/images/pause_icon.svg'),
        stopIcon: require('@/assets/images/stop_icon.svg')
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
      _reset () {
        this.pauseTime = null
        this.state = STATE.STOPPED
        if (this.interval) {
          clearInterval(this.interval)
        }
      },
      start () {
        if (this.state !== STATE.STARTED && this.state !== STATE.PAUSED) {
          this.timestamp = this.time
          this.startTime = Date.now()
        }
        this.pauseSeconds += numberOfSecondsFromNow(this.pauseTime)
        this._reset()
        this.state = STATE.STARTED
        this.interval = setInterval(() => {
          // seconds from the start time until now
          let secondsFromStart = numberOfSecondsFromNow(this.startTime)

          this.timestamp = this.time - secondsFromStart + this.pauseSeconds
          if (this.timestamp <= 0) {
            this.stop()
            this.$emit('finished')
          }
        }, 10)
      },
      pause () {
        this.pauseTime = Date.now()
        clearInterval(this.interval)
        this.state = STATE.PAUSED
      },
      stop () {
        clearInterval(this.interval)
        this.timestamp = this.time
        this.pauseSeconds = 0
        this.state = STATE.STOPPED
      }
    },
    watch: {
      time () {
        this.timestamp = this.time
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/styles/main";

  .content {
    @extend .center-content;
    @include flex-direction(column);
  }
  .controls .btn {
    cursor: pointer;
  }
</style>
