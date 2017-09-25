<template>
  <div class="container">
    <header-component></header-component>
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-6 col-lg-6">
        <workouts-component></workouts-component>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6">
        <new-workout-component></new-workout-component>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'
  import { NewWorkoutComponent, WorkoutComponent, WorkoutsComponent } from '~/components/workouts'
  export default {
    middleware: 'authenticated',
    components: {
      HeaderComponent,
      FooterComponent,
      NewWorkoutComponent,
      WorkoutComponent,
      WorkoutsComponent
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/styles/main";
</style>
