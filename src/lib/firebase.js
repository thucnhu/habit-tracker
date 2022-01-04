import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// initialize firebase app
const app = initializeApp({
	apiKey: 'AIzaSyCQLsmKbzew1opQu0sRXnigsCL_r1j_2v8',
	authDomain: 'habit-tracker-4dca6.firebaseapp.com',
	projectId: 'habit-tracker-4dca6',
	storageBucket: 'habit-tracker-4dca6.appspot.com',
	messagingSenderId: '1026965587690',
	appId: '1:1026965587690:web:9e59d7dea20a314d4e7993',
})

// initialize firestore
const db = getFirestore()

// initialize auth
const auth = getAuth(app)

export { auth, db }
