<template>
  <header class="header">
    <div class="container">
      <nav class="navbar navbar-toggleable-md navbar-light row">
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
              <nuxt-link class="nav-link" to="about">About </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :class="{disabled:!isAuthenticated}" to="settings">Settings </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :class="{disabled:!isAuthenticated}" to="statistics">Statistics </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :class="{disabled:!isAuthenticated}" to="workouts">Workouts </nuxt-link>
            </li>
          </ul>
          <form class="buttons-holder">
            <span v-if="isAuthenticated" class="nav-link" @click="onLogout">Logout</span>
            <span v-if="!isAuthenticated" class="nav-link" @click="onLogout">Go to the start page</span>
          </form>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import Logo from '~/components/common/Logo'

  export default {
    name: 'header-component',
    computed: {
      ...mapGetters({name: 'getDisplayName', isAuthenticated: 'isAuthenticated'})
    },
    methods: {
      ...mapActions(['logout']),
      onLogout () {
        this.logout()
        this.$router.push('/')
      }
    },
    components: {
      Logo
    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/styles/main";

  .header {
    height: $header-height;
    color: $color-primary;

    @include media-breakpoint-down(md) {
      height: auto;
      min-height: $header-md-height;
      background-color: $color-white;
    }
    .container,
    .navbar {
      height: 100%;
    }
    .navbar {
      @include flexbox();
      @include justify-content(center);

      @include media-breakpoint-down(md) {
        position: initial;
      }
    }
    .navbar-collapse {
      margin-top: -50px;

      @include media-breakpoint-down(md) {
        z-index: 20;
        position: absolute;
        top: $header-md-height + 50px;
        left: 0;
        width: 100%;
        padding: 20px;
        background-color: $color-white;
      }
    }
    .nuxt-link-active {
      font-weight: bold;
    }
    .nav-link {
      color: rgba($color-primary, 0.7);
      cursor: pointer;

      @include media-breakpoint-down(md) {
        padding-right: 0;
        padding-left: 0;
      }
      &:hover,
      &:active,
      &:focus {
        color: $color-primary;
      }
      &.disabled {
        cursor: default;
        color: $nav-disabled-link-color;
      }
    }
    .buttons-holder {
      margin-left: 60px;

      @include media-breakpoint-down(md) {
        margin-left: 0;
      }
    }
  }
</style>
