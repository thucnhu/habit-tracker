import { createContext, useState, useEffect } from 'react'

import { auth } from '../api/firebase'
import {
	onAuthStateChanged,
	updateProfile,
	signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendEmailVerification,
	sendPasswordResetEmail,
	User,
} from 'firebase/auth'

interface AuthValue {
	user: User,
	login: (email: string, password: string) => Promise<void>,
	signup: (email: string, password: string, username: string) => Promise<void>,
	logout: () => Promise<void>,
	resetPassword: (email: string) => Promise<void>,
}

// @ts-ignore
const AuthContext = createContext<AuthValue>()

function AuthContextProvider({ children }) {
	const [user, setUser] = useState<User>()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user)
				setLoading(false)
			}
		})

		return unsubscribe
	}, [])

	async function signup(email: string, password: string, username: string) {
		try {
			if (auth.currentUser) {
				await createUserWithEmailAndPassword(auth, email, password)
				await updateProfile(auth.currentUser, { displayName: username })
				await sendEmailVerification(auth.currentUser, {
					url: 'https://habit-tracker-fuv.herokuapp.com/',
				})
				alert('Please check your email to verify account!')
			}
		} catch (err) {
			if (
				err.message ===
				'Firebase: Password should be at least 6 characters (auth/weak-password).'
			)
				alert('Password should be at least 6 characters.')
			else if (
				err.message === 'Firebase: Error (auth/email-already-in-use).'
			)
				alert('Email address is already in use.')
			else {
				alert('An error occurred.')
				console.log(err)
			}
		}
	}

	async function login(email: string, password: string) {
		try {
			await signInWithEmailAndPassword(auth, email, password)
		} catch (err) {
			console.error(err.message)
			if (err.message === 'Firebase: Error (auth/user-not-found).')
				alert('Email address not found.')
			else if (err.message === 'Firebase: Error (auth/wrong-password).')
				alert('Incorrect password.')
			else alert('An error occurred.')
		}
	}

	async function logout() {
		try {
			await signOut(auth)
		} catch (err) {
			console.error(err)
		}
	}

	async function resetPassword(email: string) {
		try {
			await sendPasswordResetEmail(auth, email)
			alert('Check your email to reset your password.')
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<AuthContext.Provider
			// @ts-ignore
			value={{ user, login, signup, logout, resetPassword }}
		>
			{!loading && children}
		</AuthContext.Provider>
	)
}

export { AuthContextProvider, AuthContext }
