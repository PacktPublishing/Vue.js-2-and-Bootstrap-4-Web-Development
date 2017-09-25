<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr/>
    <router-link to="/">Home</router-link>
    <router-link to="hello">Hello</router-link>
    <router-link to="bye">Bye</router-link>

    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'hello'}">Hello</router-link>
    <router-link :to="{name: 'bye'}">Bye</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
