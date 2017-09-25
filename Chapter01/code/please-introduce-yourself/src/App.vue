<template>
  <div id="app" class="jumbotron">
    <div class="container">
      <h1>Hello! Nice to meet you!</h1>
      <hr />
      <form @submit="addMessage">
        <div class="form-group">
          <input maxlength="40" autofocus class="form-control" v-model="newMessage.title" placeholder="Please introduce yourself :)" />
        </div>
        <div class="form-group">
          <textarea placeholder="Leave your message!" class="form-control" v-model="newMessage.text" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
      </form>
      <hr />
      <div class="card-columns">
        <message-card v-bind:message="firstMessage"></message-card>
        <message-card v-for="message in reverse(messages)" v-bind:message="message"></message-card>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import { reverse } from './utils/utils'
import MessageCard from './components/MessageCard'
let config = {
  apiKey: 'AIzaSyANUZ039t0HHZbY-DRMNMRtaf28gvszkz8',
  authDomain: 'pleaseintroduceyourself-4bb4a.firebaseapp.com',
  databaseURL: 'https://pleaseintroduceyourself-4bb4a.firebaseio.com',
  projectId: 'pleaseintroduceyourself-4bb4a',
  storageBucket: 'pleaseintroduceyourself-4bb4a.appspot.com',
  messagingSenderId: '1040627772595'
}

let app = Firebase.initializeApp(config)
let db = app.database()
let messagesRef = db.ref('messages')
let FIRST_MESSAGE_TEXT = 'I created this page using Vue.js, Bootstrap and Firebase. ' +
    'The tutorial of this web page is described in the first part of the "Web Development with Bootstrap and Vue.js" book. ' +
    'If you are reading it at the moment, thanks a lot! ' +
    'I am also the author of "Learning Vue.js 2" book. I like Vue.js very much. ' +
    'I also love studying and teaching, reading and writing, skiing and diving. ' +
    'It\'s a great pleasure meeting you!'

export default {
  data () {
    return {
      firstMessage: {
        isFirst: true,
        title: 'Hello I am Olga',
        text: FIRST_MESSAGE_TEXT,
        timestamp: Date.now()
      },
      newMessage: {
        title: '',
        text: '',
        timestamp: null
      }
    }
  },
  methods: {
    addMessage (e) {
      e.preventDefault()
      if (this.newMessage.title === '') {
        return
      }
      this.newMessage.timestamp = Date.now()
      messagesRef.push(this.newMessage)
      this.newMessage.text = ''
      this.newMessage.title = ''
      this.newMessage.timestamp = null
    },
    reverse
  },
  firebase: {
    messages: messagesRef.limitToLast(100)
  },
  components: {
    MessageCard
  }
}
</script>

<style lang="sass">
  .card-block
    h5, p
      overflow: hidden
      text-overflow: ellipsis
</style>
