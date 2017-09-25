import { firebaseAction } from 'vuexfire'

export default {
  /**
   * Sets the working pomodoro timer
   * @param {object} store
   * @param {number} workingPomodoro
   */
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
  /**
   * Sets the short break pomodoro configuration
   * @param {object} store
   * @param {number} shortBreak
   */
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
  /**
   * Sets the long break pomodoro configuration
   * @param {object} store
   * @param {number} longBreak
   */
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
  /**
   * Updates the total pomodoro number
   * @param {object} store
   * @param {number} totalPomodoros
   */
  updateTotalPomodoros ({state}, totalPomodoros) {
    state.statisticsRef.update({totalPomodoros: totalPomodoros})
  },
  /**
   * Creates a new user with given email and password and stores it in the firebase database
   * @param {object} store
   * @param {object} email and password
   */
  createUser ({state}, {email, password}) {
    state.firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      console.log(error.code, error.message)
    })
  },
  /**
   * Updates user display name
   * @param state
   * @param commit
   * @param {string} displayName
   */
  updateUserName ({state, commit}, displayName) {
    state.user.updateProfile({
      displayName
    })
    commit('setDisplayName', displayName)
  },
  /**
   * Updates user's profile pic
   * @param state
   * @param {string} photoURL
   */
  updatePhotoURL ({state}, photoURL) {
    state.user.updateProfile({
      photoURL
    })
  },
  /**
   * Updates user's email address
   * @param state
   * @param {string} email
   */
  updateUserEmail ({state}, email) {
    state.user.updateEmail(email).then(() => {
      // Update successful.
    }, error => {
      console.log(error)
    })
  },
  /**
   * Authenticates a new user with given email and password
   * @param {object} store
   * @param {object} email and password
   */
  authenticate ({state, dispatch}, {email, password}) {
    state.firebaseApp.auth().signInWithEmailAndPassword(email, password)
  },
  /**
   * Authenticates anonymous user
   * @param {object} store
   */
  authenticateAnonymous ({state}) {
    state.firebaseApp.auth().signInAnonymously().catch(error => {
      console.log(error.code, error.message)
    })
  },
  /**
   * Logouts the user from the application
   * @param {object} store
   */
  logout ({state}) {
    state.firebaseApp.auth().signOut()
  },
  /**
   * Binds firebase auth listener to the auth changes to the callback that will set the store's user object
   * @param {object} store
   */
  bindAuth ({commit, dispatch, state}) {
    state.firebaseApp.auth().onAuthStateChanged(user => {
      commit('setUser', user)
      if (user && !user.isAnonymous) {
        commit('setDisplayName', user.displayName)
        dispatch('bindFirebaseReferences', user)
      }
      if (!user) {
        dispatch('unbindFirebaseReferences')
      }
    })
  },
  /**
   * Binds firebase configuration and statistics database references to the store's corresponding objects
   * @param {object} store
   */
  bindFirebaseReferences: firebaseAction(({state, commit, dispatch}, user) => {
    let db = state.firebaseApp.database()
    let configRef = db.ref(`/configuration/${user.uid}`)
    let statisticsRef = db.ref(`/statistics/${user.uid}`)
    dispatch('bindFirebaseReference', {reference: configRef, toBind: 'config'}).then(() => {
      commit('setConfigRef', configRef)
    })
    dispatch('bindFirebaseReference', {reference: statisticsRef, toBind: 'statistics'}).then(() => {
      commit('setStatisticsRef', statisticsRef)
    })
  }),
  /**
   * Generic binder of the firebase reference to the given key of the store's state
   * Checks if the value already exists in the database, otherwise will set it with the default store's state before binding
   * @param {object} store
   */
  bindFirebaseReference: firebaseAction(({bindFirebaseRef, state}, {reference, toBind}) => {
    return reference.once('value').then(snapshot => {
      if (!snapshot.val()) {
        reference.set(state[toBind])
      }
      bindFirebaseRef(toBind, reference)
    })
  }),
  /**
   * Undbinds firebase references
   */
  unbindFirebaseReferences: firebaseAction(({unbindFirebaseRef, commit}) => {
    commit('setConfigRef', null)
    commit('setStatisticsRef', null)
    try {
      unbindFirebaseRef('config')
      unbindFirebaseRef('statistics')
    } catch (error) {
      return
    }
  })
}
