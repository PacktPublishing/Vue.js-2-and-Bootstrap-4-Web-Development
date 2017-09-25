// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDGJLmuKGoM7uOKFEsMTP_L9gwJCmOQmfE',
  databaseURL: 'https://profitoro-ad0f0.firebaseio.com',
  authDomain: 'profitoro-ad0f0.firebaseapp.com'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
