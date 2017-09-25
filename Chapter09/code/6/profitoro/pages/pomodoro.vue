<template>
  <div>
    <header-component></header-component>
    <div class="container min-full-height">
      <div class="main-content row">
        <div v-show="state !== 0" class="col-sm-12 col-md-6 col-lg-4">
          <div class="jumbotron text-center">
            <div class="container">
              <img class="img-fluid rounded" :src="chosenWorkout.picture" :alt="chosenWorkout.name">
              <h2>{{ chosenWorkout.name }}</h2>
              <p class="lead">
                {{ chosenWorkout.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="countdown-holder col-sm-12" v-bind:class="[state !== 0 ? 'col-md-6 col-lg-8' : 'col-md-12']">
          <count-down-timer ref="countdowntimer" @finished="togglePomodoro" :time="time"></count-down-timer>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import CountDownTimer from '~/components/timer/CountDownTimer'
  import { HeaderComponent, FooterComponent } from '~/components/common'
  import { mapGetters, mapActions } from 'vuex'
  import { beep } from '~/utils/utils'

  const STATE = {
    WORKING: 0,
    SHORT_BREAK: 1,
    LONG_BREAK: 2
  }
  export default {
    data () {
      return {
        state: STATE.WORKING,
        pomodoros: 0,
        source: require('~/assets/images/pushups.png'),
        chosenWorkout: {name: '', description: '', picture: ''}
      }
    },
    computed: {
      ...mapGetters({
        config: 'getConfig',
        totalPomodoros: 'getTotalPomodoros',
        workouts: 'getWorkouts'
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
      FooterComponent,
      HeaderComponent,
      CountDownTimer
    },
    methods: {
      ...mapActions(['updateTotalPomodoros']),
      getRandomWorkout () {
        return this.workouts[Math.floor(Math.random() * this.workouts.length)]
      },
      togglePomodoro () {
        beep()
        switch (this.state) {
          case STATE.WORKING:
            // we have switched to the break state, increase the number of pomodoros and choose between long and short break
            this.pomodoros ++
            this.updateTotalPomodoros(this.totalPomodoros + 1)
            this.state = this.pomodoros % this.config.pomodorosTillLongBreak === 0
              ? STATE.LONG_BREAK : STATE.SHORT_BREAK
            this.chosenWorkout = this.getRandomWorkout()
            this.chosenWorkout.picture = this.chosenWorkout.pictures && this.chosenWorkout.pictures.length && this.chosenWorkout.pictures[0]
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
  @import "../assets/styles/main";
</style>

