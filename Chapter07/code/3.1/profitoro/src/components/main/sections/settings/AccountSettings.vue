<template>
  <div class="container">
    <h2>Account settings</h2>
    <form>
      <div class="form-group">
        <figure class="figure">
          <img class="img-thumbnail" :src="photoURL" alt="Avatar">
          <figcaption class="figure-caption" @click="onChangeProfilePic">Change profile picture</figcaption>
          <input v-show="showChangeProfilePicInput" type="text" v-model="photoURL" @change="onProfilePicChanged">
        </figure>
      </div>
      <div class="form-group">
        <input class="form-control rounded-0" @change="onChangeUserName" v-model="displayName" type="text" placeholder="Change your username">
      </div>
      <div class="form-group">
        <input class="form-control rounded-0" @change="onChangeUserEmail" v-model="email" type="text" placeholder="Change your username">
      </div>
    </form>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {
        displayName: '',
        email: '',
        photoURL: 'static/tomato.png',
        showChangeProfilePicInput: false
      }
    },
    computed: {
      ...mapGetters({user: 'getUser'})
    },
    created () {
      this.displayName = this.user.displayName
      this.email = this.user.email
      this.photoURL = this.user.photoURL ? this.user.photoURL : this.photoURL
    },
    methods: {
      ...mapActions(['updateUserName', 'updateUserEmail', 'updatePhotoURL']),
      onChangeUserName () {
        this.updateUserName(this.displayName)
      },
      onChangeUserEmail () {
        this.updateUserEmail(this.email)
      },
      onChangeProfilePic () {
        this.showChangeProfilePicInput = true
      },
      onProfilePicChanged () {
        this.updatePhotoURL(this.photoURL)
        this.showChangeProfilePicInput = false
      }
    }
  }
</script>
<style scoped lang="sass">
  img {
    max-width: 50%
  }
  figcaption {
    cursor: pointer;
  }
</style>
