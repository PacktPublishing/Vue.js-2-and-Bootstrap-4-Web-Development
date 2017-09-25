<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <alert :text="text" :type="type"></alert>
  </div>
</template>

<script>
  import Alert from './components/Alert'
  export default {
    data () {
      return {
        title: 'Vue Bootstrap Component',
        text: 'Isn\'t it easy?',
        randomValue: Math.ceil(Math.random() * 100)
      }
    },
    computed: {
      type () {
        if (this.randomValue % 3 === 0) {
          return 'info'
        } else if (this.randomValue % 2 === 0) {
          return 'danger'
        } else if (this.randomValue % 5 === 0) {
          return 'warning'
        }
      }
    },
    name: 'app',
    components: {
      Alert
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
