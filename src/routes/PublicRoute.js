import { Navigate, Outlet } from 'react-router'
import React, { useContext } from 'react'

import { DASHBOARD } from '../constants/routes'
import { AuthContext } from '../context/authContext'

export default function PrivateRoute() {
	const { user } = useContext(AuthContext)

	return !user ? <Outlet /> : <Navigate to={DASHBOARD} />
}
