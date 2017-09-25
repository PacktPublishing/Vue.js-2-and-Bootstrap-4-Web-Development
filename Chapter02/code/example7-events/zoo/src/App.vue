<template>
  <div id="app" class="jumbotron">
    <div class="row">
      <div class="col-9"><h1><span v-if="name">Hello, <strong>{{name}}</strong>! </span><span>Let’s learn Vue.js</span></h1></div>
      <div class="col-3"><img width="100%" :src="name ? gladSrc : sadSrc"></div>
    </div>
    <hr />
    <introduction @nameChanged="onNameChanged" :initialName="name"></introduction>
    <hr />
    <h2><span v-if="name">{{name}}! </span>Select your animals</h2>
    <div class="row">
      <select v-model="animalsForZoo" class="col-12" multiple="multiple" name="animals" id="animals">
        <option v-for="animal in animals" :value="animal">{{animal}}</option>
      </select>
    </div>
    <hr />
    <zoo :animals="animalsForZoo" :animalsCodes="animalsCodes" :name="name"></zoo>
  </div>
</template>

<script>
  import Zoo from './components/Zoo'
  import Introduction from './components/Introduction'

  var animalsForZoo = []
  var animalsCodes = {
    dog: '&#x1f436;',
    cat: '&#x1f638;',
    monkey: '&#x1f435;',
    unicorn: '&#x1f984;',
    tiger: '&#x1f42f;',
    mouse: '&#x1f42d;',
    rabbit: '&#x1f430;',
    cow: '&#x1f42e;',
    whale: '&#x1f433;',
    horse: '&#x1f434;',
    pig: '&#x1f437;',
    frog: '&#x1f438;',
    koala: '&#x1f43c;'
  }
  var animals = Object.keys(animalsCodes)
  var data = {
    name: 'Olga',
    animals,
    animalsCodes,
    animalsForZoo,
    sadSrc: '../static/images/sad.png',
    gladSrc: '../static/images/glad.png'
  }
  export default {
    name: 'app',
    components: {
      Zoo,
      Introduction
    },
    data () {
      return data
    },
    methods: {
      onNameChanged (newName) {
        this.name = newName
      }
    }
  }
</script>

<style>
  #app {
    margin-top: 60px;
    width: 60%;
    margin: 20px auto auto auto;
  }
  input {
    padding-left: 10px;
  }
  .animal {
    font-size: 4em;
  }
  .red {
    color: red;
  }
  .green {
    color: green;
  }
</style>
