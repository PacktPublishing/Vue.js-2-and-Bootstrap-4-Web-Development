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
          <input @change="filesChange($event.target.files)" type="file" multiple class="form-control-file" ref="imageFile">
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
      ...mapActions(['createNewWorkout', 'uploadImages']),
      filesChange (files) {
        this.pictures = [...files]
      },
      reset () {
        this.name = ''
        this.description = ''
        this.pictures = []
        this.$refs.imageFile.value = null
      },
      onCancel (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.reset()
      },
      onCreateNew (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.uploadImages(this.pictures).then(picUrls => {
          this.createNewWorkout({
            name: this.name,
            description: this.description,
            pictures: picUrls
          })
          this.reset()
        })
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/styles/main";
</style>
