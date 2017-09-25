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
<style scoped lang="scss">
  @import "../assets/styles/main";
</style>
