<template>
  <div>
    <pomodoro-timer :angle="angle"></pomodoro-timer>
  </div>
</template>
<script>
  import {PomodoroTimer} from './sections'
  export default {
    data () {
      return {
        angle: 270
      }
    },
    components: {
      PomodoroTimer
    }
  }
</script>
<style scoped lang="sass">

</style>
