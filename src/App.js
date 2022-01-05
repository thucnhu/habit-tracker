import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
	Dashboard,
	LogIn,
	SignUp,
	NotFound,
	Marketplace,
	ResetPassword,
} from './pages'
import { PrivateRoute, PublicRoute } from './routes'
import {
	DASHBOARD,
	LOG_IN,
	SIGN_UP,
	MARKETPLACE,
	RESET_PASSWORD,
} from './constants/routes'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PublicRoute />}>
					<Route path={LOG_IN} element={<LogIn />} />
					<Route path={SIGN_UP} element={<SignUp />} />
					<Route path={RESET_PASSWORD} element={<ResetPassword />} />
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
