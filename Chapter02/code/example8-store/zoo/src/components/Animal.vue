<template>
  <li>
    <span class="animal" v-html="animal" @click="toggleDescription"></span>
    <span class="description" v-show="showDescription">{{description}}</span>
  </li>
</template>
<script>
  export default {
    props: ['animal', 'description'],
    data () {
      return {
        showDescription: false
      }
    },
    methods: {
      toggleDescription () {
        this.showDescription = !this.showDescription
      }
    }
  }
</script>
<style scoped>
  .animal {
    font-size: 4em;
    cursor: pointer
  }
</style>
