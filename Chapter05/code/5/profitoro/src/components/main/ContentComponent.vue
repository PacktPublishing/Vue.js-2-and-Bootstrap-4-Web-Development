<template>
  <div class="container">
    <pomodoro-timer></pomodoro-timer>
    <statistics></statistics> 
    <settings></settings>
  </div>
</template>
<script>
  import {PomodoroTimer, Settings, Statistics} from './sections'
  export default {
    components: {
      PomodoroTimer,
      Settings,
      Statistics
    }
  }
</script>
<style scoped lang="sass">

</style>
