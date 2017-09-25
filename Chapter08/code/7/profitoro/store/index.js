import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import { firebaseMutations } from 'vuexfire'
Vue.use(Vuex)

export default () => new Vuex.Store({
  state: {
    ...state
  },
  getters,
  mutations: {
    ...mutations,
    ...firebaseMutations
  },
  actions
})
