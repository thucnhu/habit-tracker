import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Dashboard, LogIn, SignUp, NotFound, Marketplace } from './pages'
import { PrivateRoute, PublicRoute } from './routes'
import { DASHBOARD, LOG_IN, SIGN_UP, MARKETPLACE } from './constants/routes'
import { AuthContext } from './context/authContext'

export default function App() {
	const { user } = useContext(AuthContext)
	console.log(user)
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PublicRoute />}>
					<Route path={LOG_IN} element={<LogIn />} />
					<Route path={SIGN_UP} element={<SignUp />} />
				</Route>
				<Route element={<PrivateRoute />}>
					<Route path={DASHBOARD} element={<Dashboard />} />
					<Route path={MARKETPLACE} element={<Marketplace />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
