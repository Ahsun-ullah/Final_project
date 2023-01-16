import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDLdJzS_myzZmPPK_SzpcbNAnZSLz-urSI',
  authDomain: 'rap-apps-7031f.firebaseapp.com',
  projectId: 'rap-apps-7031f',
  storageBucket: 'rap-apps-7031f.appspot.com',
  messagingSenderId: '975978646379',
  appId: '1:975978646379:web:6f6248dfcf8137ae061a2e',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
