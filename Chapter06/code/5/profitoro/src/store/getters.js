export default {
  getConfig: state => state.config,
  getUSer: state => state.user,
  getTotalPomodoros: state => state.statistics.totalPomodoros
}
