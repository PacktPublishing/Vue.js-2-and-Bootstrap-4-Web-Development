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
  apiKey: 'AIzaSyDGJLmuKGoM7uOKFEsMTP_L9gwJCmOQmfE',
  databaseURL: 'https://profitoro-ad0f0.firebaseio.com',
  authDomain: 'profitoro-ad0f0.firebaseapp.com'
}
let firebaseApp = firebase.initializeApp(config)
let db = firebaseApp.database()
let configRef = db.ref('/configuration/test')
let statisticsRef = db.ref('/statistics/test')

export default new Vuex.Store({
  state: {
    ...state,
    configRef,
    statisticsRef,
    firebaseApp
  },
  getters,
  mutations: {
    ...mutations,
    ...firebaseMutations
  },
  actions
})
