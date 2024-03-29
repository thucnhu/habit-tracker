import { Navigate, Outlet } from 'react-router'
import React, { useContext } from 'react'

import { LOG_IN } from '../constants/routes'
import { AuthContext } from '../context/authContext'

export default function PrivateRoute() {
	const { user } = useContext(AuthContext)

	if (!user || (user && !user.emailVerified)) return <Navigate to={LOG_IN} />

	return <Outlet />
}
