import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Dashboard, LogIn, SignUp, NotFound, Marketplace } from './pages'
import { DASHBOARD, LOG_IN, SIGN_UP, MARKETPLACE } from './constants/routes'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={DASHBOARD} element={<Dashboard />} />
				<Route path={LOG_IN} element={<LogIn />} />
				<Route path={SIGN_UP} element={<SignUp />} />
				<Route path={MARKETPLACE} element={<Marketplace />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
