import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from './routes'
import {
	DASHBOARD,
	LOG_IN,
	SIGN_UP,
	MARKETPLACE,
	RESET_PASSWORD,
	PROFILE,
	SETTINGS,
} from './constants/routes'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import Dashboard from './pages/Dashboard'
import Marketplace from './pages/Marketplace'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

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
					<Route path={PROFILE} element={<Profile />} />
					<Route path={SETTINGS} element={<Settings />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
