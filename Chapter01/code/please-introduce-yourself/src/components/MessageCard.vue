<template>
  <div class="card" v-bind:class="{ 'card-outline-success' : message.isFirst  }">
    <div  class="card-block">
      <h5 class="card-title">{{ message.title }}</h5>
      <p class="card-text">{{ message.text }}</p>
      <p class="card-text"><small class="text-muted">Added on {{ dateToString(message.timestamp) }}</small></p>
    </div>
  </div>
</template>

<script>
  import { dateToString } from '../utils/utils'

  export default {
    props: ['message'],
    methods: {
      dateToString
    }
  }
</script>

<style scoped lang="sass">
  .card-block
    h5, p
    overflow: hidden
    text-overflow: ellipsis
</style>
