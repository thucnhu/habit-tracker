import { Navigate, Outlet } from 'react-router'
import React, { useState } from 'react'

import { LOG_IN } from '../constants/routes'

import { auth } from '../lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export default function PrivateRoute() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	onAuthStateChanged(auth, user => {
		if (user) setIsLoggedIn(true)
		else setIsLoggedIn(false)
	})

	return isLoggedIn ? <Outlet /> : <Navigate to={LOG_IN} />
}
