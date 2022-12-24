import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCfgzxe-1kqxLk_lX-76JldLi9yGe_4HXY',
  authDomain: 'final-project-aab45.firebaseapp.com',
  projectId: 'final-project-aab45',
  storageBucket: 'final-project-aab45.appspot.com',
  messagingSenderId: '898946040827',
  appId: '1:898946040827:web:1320144d48ebacf624815e',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
