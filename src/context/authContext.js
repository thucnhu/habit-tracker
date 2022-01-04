import React, { createContext, useState, useEffect } from 'react'

import { auth } from '../lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'

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

	return (
		<AuthContext.Provider value={{ user: user }}>
			{!loading && children}
		</AuthContext.Provider>
	)
}

export { AuthContextProvider, AuthContext }
