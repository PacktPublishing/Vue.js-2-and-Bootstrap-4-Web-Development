<template>
  <div class="modal fade" id="workoutModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ name }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="text-center">
            <img :src="pictures && pictures.length && pictures[0]" class="img-fluid" :alt="name">
          </div>
          <p>{{ description }}</p>
        </div>
        <div class="modal-footer">
          <p>Created on {{ datecreated }} by {{ username }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['name', 'description', 'username', 'datecreated', 'rate', 'pictures']
  }
</script>
<style scoped lang="scss">

</style>
