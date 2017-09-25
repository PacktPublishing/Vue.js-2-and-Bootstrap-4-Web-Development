import Vue from 'vue'
import Router from 'vue-router'
import {PomodoroTimer, Settings, Statistics, Workouts} from '@/components/main/sections'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      component: PomodoroTimer,
      path: '/'
    },
    {
      name: 'settings',
      component: Settings,
      path: '/settings'
    },
    {
      name: 'statistics',
      component: Statistics,
      path: '/statistics'
    },
    {
      name: 'workouts',
      component: Workouts,
      path: '/workouts'
    }
  ]
})
