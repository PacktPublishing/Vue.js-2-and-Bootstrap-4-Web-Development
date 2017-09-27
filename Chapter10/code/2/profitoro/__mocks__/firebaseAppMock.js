import firebaseMocks from './firebaseMocks'

export default {
  storage: () => {
    return {
      ref: function () {}
    }
  },
  auth: () => {
    return {
      createUserWithEmailAndPassword: firebaseMocks.createUserWithEmailAndPassword,
      signInWithEmailAndPassword: firebaseMocks.signInWithEmailAndPassword,
      signInAnonymously: firebaseMocks.signInAnonymously,
      signOut: firebaseMocks.signOut,
      onAuthStateChanged: firebaseMocks.onAuthStateChanged
    }
  },
  database: () => {
    return {
      ref: function () {
        return {
          update: firebaseMocks.update
        }
      }
    }
  }
}
