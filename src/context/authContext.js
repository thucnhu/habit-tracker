import React, { createContext, useState, useEffect } from 'react'

import { auth } from '../lib/firebase'
import {
	onAuthStateChanged,
	updateProfile,
	signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendEmailVerification,
	sendPasswordResetEmail,
} from 'firebase/auth'

const AuthContext = createContext()

function AuthContextProvider({ children }) {
	const [user, setUser] = useState({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user)
				setLoading(false)
			} else {
				setUser({})
				setLoading(false)
			}
		})

		return unsubscribe
	}, [])

	async function signup(email, password, username) {
		try {
			await createUserWithEmailAndPassword(auth, email, password)
			await updateProfile(auth.currentUser, { displayName: username })
			await sendEmailVerification(auth.currentUser, {
				url: 'https://habit-tracker-fuv.herokuapp.com/',
			})
			alert('Please check your email to verify account!')
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
			else alert('An error occurred.')
		}
	}

	async function login(email, password) {
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

	async function resetPassword(email) {
		try {
			await sendPasswordResetEmail(auth, email)
			alert('Check your email to reset your password.')
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<AuthContext.Provider
			value={{ user, login, signup, logout, resetPassword }}
		>
			{!loading && children}
		</AuthContext.Provider>
	)
}

export { AuthContextProvider, AuthContext }
