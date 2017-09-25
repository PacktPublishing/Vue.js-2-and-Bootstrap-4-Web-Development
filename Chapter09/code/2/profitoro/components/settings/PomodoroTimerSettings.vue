<template>
  <div class="container">
    <h2 class="title text-center mb-5">Set your pomodoro timer</h2>
    <div class="mt-5 row justify-content-center align-items-center">
      <div class="set-timer-container col-sm-8 col-md-5">
        <set-timer class="set-timer set-timer-1" :value="config.workingPomodoro" @valueChanged="setWorkingPomodoro"></set-timer>
        <div class="figure-caption">Pomodoro</div>
      </div>
      <div class="set-timer-container col-sm-8 col-md-4">
        <set-timer class="set-timer set-timer-2" :value="config.longBreak" @valueChanged="setLongBreak"></set-timer>
        <div class="figure-caption">Long break</div>
      </div>
      <div class="set-timer-container col-sm-8 col-md-3">
        <set-timer class="set-timer set-timer-3" :value="config.shortBreak" @valueChanged="setShortBreak"></set-timer>
        <div class="figure-caption">Short break</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import SvgCircleSector from '~/components/timer/SvgCircleSector'
  import SetTimer from '~/components/settings/SetTimer'
  export default {
    computed: {
      ...mapGetters({
        config: 'getConfig'
      })
    },
    components: {
      SvgCircleSector,
      SetTimer
    },
    methods: {
      ...mapActions(['setWorkingPomodoro', 'setShortBreak', 'setLongBreak'])
    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/styles/main";

  .container {
    @include media-breakpoint-down(sm) {
      margin-top: 50px;
    }
  }
  .set-timer-container {
    @include media-breakpoint-down(sm) {
      margin-bottom: 20px;
    }
  }
  .figure-caption {
    text-align: center;
  }
</style>
