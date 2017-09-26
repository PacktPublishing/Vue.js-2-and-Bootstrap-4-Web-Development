<template>
  <div class="contaner">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-2 col-sm-12">
        <span>OR</span>
      </div>
      <div class="col-lg-10 col-sm-12">
        <button @click="authenticateAnonymous" class="btn btn-large btn-secondary btn-block rounded-0">
          START WITHOUT REGISTRATION
        </button>
        <div>
          <small>This version will not allow you to personalise your profile or add new workouts</small>
        </div>
      </div>    
    </div>  
  </div>  
</template>
<script>
  import {mapActions} from 'vuex'
  
  export default {
    methods: {
      ...mapActions(['authenticateAnonymous'])
    }
  }
</script>
<style scoped lang="sass">
  button {
    cursor: pointer;
  }
</style>

