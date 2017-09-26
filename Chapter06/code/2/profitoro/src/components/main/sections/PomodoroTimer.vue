<template>
  <div class="container">
    <div class="row justify-content-center">
      <div v-show="state !== 0" class="col-sm-12 col-md-6 col-lg-4">
        <div class="jumbotron text-center">
          <div class="container">
            <img class="img-fluid rounded" src="../../../assets/pushups.png" alt="">
            <h2>Push-ups</h2>
            <p class="lead">
              Description: lorem ipsum
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-8">
        <count-down-timer ref="countdowntimer" @finished="togglePomodoro" :time="time"></count-down-timer>
      </div>
    </div>
  </div>
</template>
<script>
  import CountDownTimer from './timer/CountDownTimer'
  import { mapGetters, mapActions } from 'vuex'
  import {beep} from '@/utils/utils'

  const STATE = {
    WORKING: 0,
    SHORT_BREAK: 1,
    LONG_BREAK: 2
  }
  export default {
    data () {
      return {
        state: STATE.WORKING,
        pomodoros: 0
      }
    },
    computed: {
      ...mapGetters({
        config: 'getConfig',
        totalPomodoros: 'getTotalPomodoros'
      }),
      time () {
        let minutes

        switch (this.state) {
          case STATE.WORKING:
            minutes = this.config.workingPomodoro
            break
          case STATE.SHORT_BREAK:
            minutes = this.config.shortBreak
            break
          case STATE.LONG_BREAK:
            minutes = this.config.longBreak
            break
          default:
            minutes = this.config.workingPomodoro
            break
        }

        return minutes * 60
      }
    },
    components: {
      CountDownTimer
    },
    methods: {
      ...mapActions(['updateTotalPomodoros']),
      togglePomodoro () {
        beep()
        switch (this.state) {
          case STATE.WORKING:
            // we have switched to the break state, increase the number of pomodoros and choose between long and short break
            this.pomodoros ++
            this.updateTotalPomodoros(this.totalPomodoros + 1)
            this.state = this.pomodoros % this.config.pomodorosTillLongBreak === 0
              ? STATE.LONG_BREAK : STATE.SHORT_BREAK
            break
          default:
            // time to work!
            this.state = STATE.WORKING
            break
        }
        this.$refs.countdowntimer.start()
      }
    }
  }
</script>
<style scoped lang="scss">

</style>
