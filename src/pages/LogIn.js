import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { SIGN_UP, DASHBOARD, RESET_PASSWORD } from '../constants/routes'
import { AuthContext } from '../context/authContext'

export default function LogIn() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { login } = useContext(AuthContext)
	const navigate = useNavigate()

	async function handleLogIn(event) {
		event.preventDefault()
		login(email, password)
		navigate(DASHBOARD)
	}

	return (
		<div className='bg-brand-yellow flex justify-center items-center h-screen'>
			<img
				src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640417500/Habit%20Tracker/big-egg_eukcd3.png'
				className='absolute'
			/>
			<form
				className='absolute flex flex-col justify-between items-center h-72'
				onSubmit={handleLogIn}
			>
				<h1>eggcellent</h1>
				<input
					type='email'
					className='form-control input focus:outline-none'
					name='email'
					placeholder='Email'
					onChange={e => setEmail(e.target.value)}
					required
				/>
				<input
					type='password'
					className='form-control input focus:outline-none'
					name='password'
					placeholder='Password'
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<button className='btn-green text-xl w-60' type='submit'>
					Log In
				</button>
				<Link to={RESET_PASSWORD}>
					<h3>Forgot password?</h3>
				</Link>
				<h3>
					First time here? Let's{' '}
					<Link className='text-blue-800' to={SIGN_UP}>
						sign up
					</Link>
					!
				</h3>
			</form>
		</div>
	)
}
