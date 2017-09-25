const config = {
  workingPomodoro: 25,
  shortBreak: 5,
  longBreak: 10,
  pomodorosTillLongBreak: 3
}

const settings = {
  userName: 'Olga',
  email: 'chudaol@gmail.com',
  profile_picture: require('../assets/myAvatar.png'),
  uid: '',
  isLoggedIn: true
}

const statistics = {
  pomodorosToday: 0,
  pomodorosLastWeek: 0,
  pomodorosLastMonth: 0,
  totalPomodoros: 0,
  workoutsToday: 0,
  workoutLastWeek: 0,
  workoutsLastMonth: 0,
  workoutsTotal: 0
}

export default {
  config,
  settings,
  statistics
}
