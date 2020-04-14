import firebase from 'firebase/app'
import 'firebase/auth'
import config from './config'
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase.auth()
