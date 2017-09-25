import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import firebase from 'firebase'
import { firebaseMutations } from 'vuexfire'
Vue.use(Vuex)

// Initialize Firebase
let config = {
  databaseURL: 'https://profitoro-ad0f0.firebaseio.com'
}
let app = firebase.initializeApp(config)
let db = app.database()
let configRef = db.ref('/configuration/test')
let statisticsRef = db.ref('/statistics/test')

export default new Vuex.Store({
  state: {
    ...state,
    configRef,
    statisticsRef
  },
  getters,
  mutations: {
    ...mutations,
    ...firebaseMutations
  },
  actions
})
