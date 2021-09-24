import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const config = {
  apiKey: 'AIzaSyBEQUcTUGi1yma3d4lpj8KnSOgB8zGNbkc',
  authDomain: 'react-firebase-fs19.firebaseapp.com',
  projectId: 'react-firebase-fs19',
  storageBucket: 'react-firebase-fs19.appspot.com',
  messagingSenderId: '893500782488',
  appId: '1:893500782488:web:67407aece012aea0ca9ded',
}

const app = initializeApp(config)
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage }
