export default {
  getConfig: state => state.config,
  getUser: state => state.user,
  getDisplayName: state => state.displayName,
  getWorkouts: state => state.workouts,
  getTotalPomodoros: state => state.statistics.totalPomodoros,
  isAuthenticated: state => state.user && !state.user.isAnonymous
}
