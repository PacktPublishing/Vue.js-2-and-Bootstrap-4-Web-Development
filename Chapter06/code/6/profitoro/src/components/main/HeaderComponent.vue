<template>
  <div>
    <div class="row">
      <div class="row col-5 offset-7">
        <div class="col">
          <p>Welcome <span>{{name}}</span></p>
        </div>
        <div class="col">
          <button class="btn btn-secondary" @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({name: 'getDisplayName'})
    },
    methods: {
      ...mapActions(['logout'])
    }
  }
</script>
<style scoped lang="sass">

</style>
