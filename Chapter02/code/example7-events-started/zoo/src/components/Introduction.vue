<template>
  <div>
    <label for="name" :class="{green: name, red: !name}">What's your name? </label>
    <input id="name" type="text" v-model.trim="name">
  </div>
</template>
<script>
  export default {
    props: ['name']
  }
</script>
