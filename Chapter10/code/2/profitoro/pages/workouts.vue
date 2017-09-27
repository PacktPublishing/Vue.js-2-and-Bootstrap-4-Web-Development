<template>
  <div>
    <header-component></header-component>
    <div class="container min-full-height clearfix">
      <div class="main-content row">
        <div class="section-left col-sm-12 col-md-6 col-lg-6 float-left">
          <workouts-component></workouts-component>
        </div>
        <div class="section-right col-sm-12 col-md-6 col-lg-6 float-right">
          <new-workout-component></new-workout-component>
        </div>
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

  .section-left {
    @include media-breakpoint-up(lg) {
      padding-right: 30px;
    }
    @include media-breakpoint-down(sm) {
      margin: 10px 0;
    }
  }
  .section-right {
    @include media-breakpoint-up(lg) {
      padding-left: 30px;
    }
    @include media-breakpoint-down(sm) {
      margin: 10px 0;
    }
  }
</style>
