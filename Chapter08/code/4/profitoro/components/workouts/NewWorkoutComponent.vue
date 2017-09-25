<template>
  <div>
    <h2>Add your workout</h2>
      <form>
        <div class="form-group">
          <input v-model="name" type="text" class="form-control" placeholder="Name it">
        </div>
        <div class="form-group">
          <textarea v-model="description" type="text" class="form-control" placeholder="Describe it"></textarea>
        </div>
        <div class="form-group">
          <label for="imageFile">Add an image</label>
          <input type="file" multiple class="form-control-file" id="imageFile">
        </div>
        <div class="row">
          <div class="col">
            <button @click="onCancel" type="submit" class="btn btn-default">Cancel</button>
          </div>
          <div class="col">
            <button @click="onCreateNew" type="submit" class="btn btn-default">Apply</button>
          </div>
        </div>
      </form>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'

  export default {
    data () {
      return {
        name: '',
        description: '',
        pictures: []
      }
    },
    methods: {
      ...mapActions(['createNewWorkout']),
      reset () {
        this.name = ''
        this.description = ''
        this.pictures = []
      },
      onCancel (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.reset()
      },
      onCreateNew (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.createNewWorkout({
          name: this.name,
          description: this.description,
          pictures: this.pictures
        })
        this.reset()
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/styles/main";
</style>
