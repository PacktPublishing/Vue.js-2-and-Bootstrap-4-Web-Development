export default {
  getUser: () => {
    return {displayName: 'Olga'}
  },
  getConfig: () => {
    return {
      workingPomodoro: 25,
      shortBreak: 5,
      longBreak: 10,
      pomodorosTillLongBreak: 3
    }
  },
  getDisplayName: () => {
    return 'Olga'
  },
  getWorkouts: () => {
    return []
  },
  getTotalPomodoros: () => {
    return 10
  },
  isAuthenticated: () => {
    return false
  }
}
