<template>
  <div class="container">
    <header-component></header-component>
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-6 col-lg-4">
        <account-settings></account-settings>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-8">
        <pomodoro-timer-settings></pomodoro-timer-settings>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'
  import PomodoroTimerSettings from '~/components/settings/PomodoroTimerSettings'
  import AccountSettings from '~/components/settings/AccountSettings'

  export default {
    middleware: 'authenticated',
    components: {
      HeaderComponent,
      FooterComponent,
      PomodoroTimerSettings,
      AccountSettings
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/styles/main";
  .figure-caption {
    text-align: center;
  }
</style>
