import { firebaseAction } from 'vuexfire'

export default {
  setWorkingPomodoro ({commit, state}, workingPomodoro) {
    if (!workingPomodoro) {
      return
    }
    workingPomodoro = parseFloat(workingPomodoro)
    if (state.configRef) {
      state.configRef.update({workingPomodoro})
    } else {
      commit('setWorkingPomodoro', workingPomodoro)
    }
  },
  setShortBreak ({commit, state}, shortBreak) {
    if (!shortBreak) {
      return
    }
    shortBreak = parseFloat(shortBreak)
    if (state.configRef) {
      state.configRef.update({shortBreak})
    } else {
      commit('setShortBreak', shortBreak)
    }
  },
  setLongBreak ({commit, state}, longBreak) {
    if (!longBreak) {
      return
    }
    longBreak = parseFloat(longBreak)
    if (state.configRef) {
      state.configRef.update({longBreak})
    } else {
      commit('setLongBreak', longBreak)
    }
  },
  updateTotalPomodoros ({state}, totalPomodoros) {
    state.statisticsRef.update({totalPomodoros: totalPomodoros})
  },
  bindConfig: firebaseAction(({bindFirebaseRef, state}) => {
    bindFirebaseRef('config', state.configRef)
  }),
  bindStatistics: firebaseAction(({bindFirebaseRef, state}) => {
    bindFirebaseRef('statistics', state.statisticsRef)
  })
}
