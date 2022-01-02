import { Navigate, Outlet } from 'react-router'
import React, { useContext } from 'react'

import FirebaseContext from '../context/Firebase'
import { LOG_IN } from '../constants/routes'

export default function PrivateRoute() {
	const { auth } = useContext(FirebaseContext)

	return auth.currentUser ? <Outlet /> : <Navigate to={LOG_IN} />
}
