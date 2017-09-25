<template>
  <div>
    <h1>Statistics</h1>
    <p>Total Pomodoros: {{totalPomodoros}}</p>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        totalPomodoros: 'getTotalPomodoros'
      })
    }
  }
</script>
<style scoped lang="sass">

</style>
