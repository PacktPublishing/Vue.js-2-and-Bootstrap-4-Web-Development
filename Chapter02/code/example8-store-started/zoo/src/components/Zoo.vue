<template>
  <div v-if="animals.length > 0">
    <h2><span v-if="name">{{name}}! </span>Here's your Zoo</h2>
    <ol>
      <animal v-for="animal in animals" :key="animal" :animal="animalsCodes[animal]" :description="animalsDescriptions[animal]"></animal>
    </ol>
  </div>
</template>
<script>
  import Animal from './Animal'

  var animalsDescriptions = {
    dog: 'I am a dog, I bark',
    cat: 'I am a cat, I meow',
    monkey: 'I am a monkey, I am happy',
    unicorn: 'I am a unicorn, I have one horn',
    tiger: 'I am a tiger, I am beautiful',
    mouse: 'I am a mouse, some women are scared of me',
    rabbit: 'I am a rabbit, I am very fluffy',
    cow: 'I am a cow, I give milk',
    whale: 'I am a whale, I\'m huge!',
    horse: 'I am a horse, I\'m srong!',
    pig: 'I am a pig, I am pink',
    frog: 'I am a frog, I love singing at night',
    koala: 'I am a koala, I love eucalyptus!'
  }
  export default {
    props: ['animals', 'name', 'animalsCodes'],
    data () {
      return {
        animalsDescriptions
      }
    },
    components: {
      Animal
    }
  }
</script>
<style>

</style>
