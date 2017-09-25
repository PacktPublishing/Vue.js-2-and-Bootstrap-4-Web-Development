<template>
  <div>
    <label for="name" :class="{green: name, red: !name}">What's your name? </label>
    <input id="name" type="text" v-model.trim="name" @input="onInput">
  </div>
</template>
<script>
  export default {
    computed: {
      name () {
        return this.$store.state.name
      }
    },
    methods: {
      onInput (ev) {
        this.$store.commit('updateName', ev.currentTarget.value)
      }
    }
  }
</script>
<style scoped>
  .red {
    color: red;
  }
  .green {
    color: green;
  }
</style>
