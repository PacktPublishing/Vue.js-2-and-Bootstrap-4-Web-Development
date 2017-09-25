import { firebaseAction } from 'vuexfire'

export default {
  setWorkingPomodoro ({commit, state}, workingPomodoro) {
    if (!workingPomodoro) {
      return
    }
    if (state.configRef) {
      workingPomodoro = parseInt(workingPomodoro, 10)
      state.configRef.update({workingPomodoro})
    } else {
      commit('setWorkingPomodoro', parseInt(workingPomodoro, 10))
    }
  },
  setShortBreak ({commit, state}, shortBreak) {
    if (!shortBreak) {
      return
    }
    if (state.configRef) {
      shortBreak = parseInt(shortBreak, 10)
      state.configRef.update({shortBreak})
    } else {
      commit('setShortBreak', parseInt(shortBreak, 10))
    }
  },
  setLongBreak ({commit, state}, longBreak) {
    if (!longBreak) {
      return
    }
    if (state.configRef) {
      longBreak = parseInt(longBreak, 10)
      state.configRef.update({longBreak})
    } else {
      commit('setLongBreak', parseInt(longBreak, 10))
    }
  },
  bindConfig: firebaseAction(({bindFirebaseRef, state}) => {
    bindFirebaseRef('config', state.configRef)
  })
}
