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
  export default {
    props: ['animals'],
    computed: {
      animalsCodes () {
        return this.$store.state.animalsCodes
      },
      animalsDescriptions () {
        return this.$store.state.animalsDescriptions
      },
      name () {
        return this.$store.state.name
      }
    },
    components: {
      Animal
    }
  }
</script>
<style>

</style>
