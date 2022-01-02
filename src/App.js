import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
	Dashboard,
	LogIn,
	SignUp,
	NotFound,
	Marketplace,
	PrivateRoute,
} from './pages'
import { DASHBOARD, LOG_IN, SIGN_UP, MARKETPLACE } from './constants/routes'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={LOG_IN} element={<LogIn />} />
				<Route path={SIGN_UP} element={<SignUp />} />
				<Route element={<PrivateRoute />}>
					<Route path={DASHBOARD} element={<Dashboard />} />
					<Route path={MARKETPLACE} element={<Marketplace />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
