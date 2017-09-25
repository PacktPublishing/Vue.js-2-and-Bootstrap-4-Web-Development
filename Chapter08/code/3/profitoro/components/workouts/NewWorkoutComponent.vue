<template>
  <div>
    <h2>Add your workout</h2>
      <form>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Name it">
        </div>
        <div class="form-group">
          <textarea type="text" class="form-control" placeholder="Describe it"></textarea>
        </div>
        <div class="form-group">
          <label for="imageFile">Add an image</label>
          <input type="file" multiple class="form-control-file" id="imageFile">
        </div>
        <div class="row">
          <div class="col">
            <button type="submit" class="btn btn-default">Cancel</button>
          </div>
          <div class="col">
            <button type="submit" class="btn btn-default">Apply</button>
          </div>
        </div>
      </form>
  </div>
</template>
<script>

</script>
<style scoped lang="scss">
  @import "../../assets/styles/main";
</style>
