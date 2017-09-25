<template>
  <div>
    <nav class="navbar navbar-toggleable-md navbar-light">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-brand">
        <logo></logo>
      </div>
      <div class="collapse navbar-collapse" id="navbarHeader">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Home </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link"  to="settings">Settings </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="statistics">Statistics </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="workouts">Workouts </nuxt-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-secondary" >Logout</button>
        </form>
      </div>
    </nav>
  </div>
</template>
<script>
  import Logo from '~/components/common/Logo'

  export default {
    components: {
      Logo
    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/styles/main";
  button {
    cursor: pointer;
  }
</style>
