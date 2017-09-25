<template>
  <div>
    <pomodoro></pomodoro>
    <login></login>
  </div>
</template>
<script>
  import login from './login'
  import pomodoro from './pomodoro'

  export default {
    components: {login, pomodoro}
  }
</script>
<style>
</style>
