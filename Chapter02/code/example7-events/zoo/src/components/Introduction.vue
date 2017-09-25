<template>
  <div>
    <label for="name" :class="{green: name, red: !name}">What's your name? </label>
    <input id="name" type="text" v-model.trim="name" @input="onInput">
  </div>
</template>
<script>
  export default {
    props: ['initialName'],
    data () {
      return {
        name: this.initialName
      }
    },
    methods: {
      onInput () {
        this.$emit('nameChanged', this.name)
      }
    }
  }
</script>
