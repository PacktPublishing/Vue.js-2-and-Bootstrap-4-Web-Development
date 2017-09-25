<template>
  <div>
    <h2>Manage workouts</h2>
    <div class="form-group">
      <input class="form-control" type="search" placeholder="Search for workouts">
    </div>
    <div class="card-columns">
      <div v-for="workout in workouts" class="card">
        <img class="card-img-top img-fluid" :src="workout.picture" :alt="workout.name">
        <div class="card-block">
          <p class="card-text">{{ workout.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        workouts: [{
          name: 'Pushups',
          description: 'Just do some pushups',
          picture: require('~/assets/images/pushups.png')
        },
        {
          name: 'Pushups pushuups',
          description: 'Just do some pushups',
          picture: require('~/assets/images/pushups.png')
        },
        {
          name: 'Pushups',
          description: 'Just do some pushups',
          picture: require('~/assets/images/pushups.png')
        },
        {
          name: 'Pushups',
          description: 'Just do some pushups',
          picture: require('~/assets/images/pushups.png')
        },
        {
          name: 'Pushups',
          description: 'Just do some pushups',
          picture: require('~/assets/images/pushups.png')
        },
        {
          name: 'Pushups',
          description: 'Just do some pushups',
          picture: require('~/assets/images/pushups.png')
        },
        {
          name: 'Pushups',
          description: 'Just do some pushups',
          picture: require('~/assets/images/pushups.png')
        }]
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../assets/styles/main';

  .card-columns {
    @include media-breakpoint-only(lg) {
      column-count: 4;
    }
    @include media-breakpoint-only(xl) {
      column-count: 5;
    }
    p.card-text {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>
