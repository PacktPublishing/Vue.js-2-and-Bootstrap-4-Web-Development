import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const animalsCodes = {
  dog: '&#x1f436;',
  cat: '&#x1f638;',
  monkey: '&#x1f435;',
  unicorn: '&#x1f984;',
  tiger: '&#x1f42f;',
  mouse: '&#x1f42d;',
  rabbit: '&#x1f430;',
  cow: '&#x1f42e;',
  whale: '&#x1f433;',
  horse: '&#x1f434;',
  pig: '&#x1f437;',
  frog: '&#x1f438;',
  koala: '&#x1f43c;'
}
const animalsDescriptions = {
  dog: 'I am a dog, I bark',
  cat: 'I am a cat, I meow',
  monkey: 'I am a monkey, I am happy',
  unicorn: 'I am a unicorn, I have one horn',
  tiger: 'I am a tiger, I am beautiful',
  mouse: 'I am a mouse, some women are scared of me',
  rabbit: 'I am a rabbit, I am very fluffy',
  cow: 'I am a cow, I give milk',
  whale: 'I am a whale, I\'m huge!',
  horse: 'I am a horse, I\'m srong!',
  pig: 'I am a pig, I am pink',
  frog: 'I am a frog, I love singing at night',
  koala: 'I am a koala, I love eucalyptus!'
}
const animals = Object.keys(animalsCodes)
const state = {
  name: 'Olga',
  animals,
  animalsCodes,
  animalsDescriptions,
  sadSrc: '../static/images/sad.png',
  gladSrc: '../static/images/glad.png'
}

const getters = {

}

const mutations = {
  updateName (state, newName) {
    state.name = newName
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
