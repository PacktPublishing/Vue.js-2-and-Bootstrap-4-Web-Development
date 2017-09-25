<template>
  <div>
    <h2>Manage your workouts</h2>
    <div class="form-group">
      <input v-model="searchTerm" class="input" type="search" placeholder="Search for workouts">
    </div>
    <div class="card-columns">
      <div v-for="workout in workoutsToDisplay" class="card">
        <img class="card-img-top img-fluid" :src="workout.pictures && workout.pictures.length && workout.pictures[0]" :alt="workout.name">
        <div class="card-block">
          <p class="card-text">{{ workout.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        searchTerm: ''
      }
    },
    computed: {
      ...mapState(['workouts']),
      workoutsToDisplay () {
        return this.workouts.filter(workout => {
          let name = workout.name.toLowerCase()
          let description = workout.description.toLowerCase()
          let username = workout.username.toLowerCase()
          let term = this.searchTerm.toLowerCase()
          return name.indexOf(term) >= 0 || description.indexOf(term) >= 0 || username.indexOf(term) >= 0
        })
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
