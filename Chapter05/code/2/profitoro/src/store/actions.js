export default {
  setWorkingPomodoro ({commit}, workingPomodoro) {
    if (workingPomodoro) {
      commit('setWorkingPomodoro', parseInt(workingPomodoro, 10))
    }
  },
  setShortBreak ({commit}, shortBreak) {
    if (shortBreak) {
      commit('setShortBreak', parseInt(shortBreak, 10))
    }
  },
  setLongBreak ({commit}, longBreak) {
    if (longBreak) {
      commit('setLongBreak', parseInt(longBreak, 10))
    }
  }
}
