import Vue from 'vue'
import mockFirebaseApp from '~/__mocks__/firebaseAppMock'
import mockGetters from '~/__mocks__/getterMocks'
jest.mock('~/firebase', () => mockFirebaseApp)
jest.mock('~/store/getters', () => mockGetters)
import store from '~/store'
import IndexPage from '~/pages/index'
import AboutPage from '~/pages/about'
import LoginPage from '~/pages/login'
import PomodoroPage from '~/pages/pomodoro'
import SettingsPage from '~/pages/settings'
import StatisticsPage from '~/pages/statistics'
import WorkoutsPage from '~/pages/workouts'

describe('pages', () => {
  test('index snapshot', () => {
    let $mounted = new Vue({
      template: '<index-page></index-page>',
      store: store(),
      components: {
        'index-page': IndexPage
      }
    }).$mount()
    let $html = $mounted.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  test('about snapshot', () => {
    let $mounted = new Vue({
      template: '<about-page></about-page>',
      store: store(),
      components: {
        'about-page': AboutPage
      }
    }).$mount()
    let $html = $mounted.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  test('login snapshot', () => {
    let $mounted = new Vue({
      template: '<login-page></login-page>',
      store: store(),
      components: {
        'login-page': LoginPage
      }
    }).$mount()
    let $html = $mounted.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  test('pomodoro snapshot', () => {
    let $mounted = new Vue({
      template: '<pomodoro-page></pomodoro-page>',
      store: store(),
      components: {
        'pomodoro-page': PomodoroPage
      }
    }).$mount()
    let $html = $mounted.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  test('settings snapshot', () => {
    let $mounted = new Vue({
      template: '<settings-page></settings-page>',
      store: store(),
      components: {
        'settings-page': SettingsPage
      }
    }).$mount()
    let $html = $mounted.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  test('statistics snapshot', () => {
    let $mounted = new Vue({
      template: '<statistics-page></statistics-page>',
      store: store(),
      components: {
        'statistics-page': StatisticsPage
      }
    }).$mount()
    let $html = $mounted.$el.outerHTML
    expect($html).toMatchSnapshot()
  })

  test('workouts snapshot', () => {
    let $mounted = new Vue({
      template: '<workouts-page></workouts-page>',
      store: store(),
      components: {
        'workouts-page': WorkoutsPage
      }
    }).$mount()
    let $html = $mounted.$el.outerHTML
    expect($html).toMatchSnapshot()
  })
})
