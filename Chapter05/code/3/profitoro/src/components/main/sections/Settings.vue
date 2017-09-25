<template>
  <div class="row justify-content-center">
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="container">
        <h2>Account settings</h2>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-8">
      <h2 class="text-center mb-5">Set your pomodoro timer</h2>
      <div class="mt-5 row justify-content-center align-items-center">
        <div class="col-md-5 col-sm-8">
          <set-timer :value="config.workingPomodoro" @valueChanged="setWorkingPomodoro"></set-timer>
          <div class="figure-caption">Pomodoro</div>
        </div>
        <div class="col-md-4 col-sm-8">
          <set-timer :value="config.longBreak" @valueChanged="setLongBreak"></set-timer>
          <div class="figure-caption">Long break</div>
        </div>
        <div class="col-md-3 col-sm-8">
          <set-timer :value="config.shortBreak" @valueChanged="setShortBreak"></set-timer>
          <div class="figure-caption">Short break</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import SvgCircleSector from './timer/SvgCircleSector'
  import SetTimer from './timer/SetTimer'
  export default {
    computed: {
      ...mapGetters({
        settings: 'getSettings',
        config: 'getConfig'
      })
    },
    components: {
      SvgCircleSector,
      SetTimer
    },
    methods: {
      ...mapActions(['setWorkingPomodoro', 'setShortBreak', 'setLongBreak', 'bindConfig'])
    },
    created () {
      this.bindConfig()
    }
  }
</script>
<style scoped lang="sass">
  .figure-caption {
    text-align: center;
  }
</style>
