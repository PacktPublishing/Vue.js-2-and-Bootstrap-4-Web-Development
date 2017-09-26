export default {
  getConfig: state => state.config,
  getUser: state => state.user,
  getDisplayName: state => state.displayName,
  getTotalPomodoros: state => state.statistics.totalPomodoros
}
