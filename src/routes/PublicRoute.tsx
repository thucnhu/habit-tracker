import { Navigate, Outlet } from 'react-router'
import React, { useContext } from 'react'

import { DASHBOARD } from '../constants/routes'
import { AuthContext } from '../context/authContext'

export default function PublicRoute() {
	const { user } = useContext(AuthContext)

	if (!user || (user && !user.emailVerified)) return <Outlet />

	return <Navigate to={DASHBOARD} />
}
