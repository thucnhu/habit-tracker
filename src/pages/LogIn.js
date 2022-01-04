import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { SIGN_UP, DASHBOARD } from '../constants/routes'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../lib/firebase'

export default function LogIn() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	async function handleLogIn(event) {
		event.preventDefault()

		try {
			await signInWithEmailAndPassword(auth, email, password)
			navigate(DASHBOARD)
		} catch (err) {
			console.error(err.message)
			if (err.message === 'Firebase: Error (auth/user-not-found).')
				alert('Email address not found.')
			else if (err.message === 'Firebase: Error (auth/wrong-password).')
				alert('Incorrect password.')
			else alert('An error occurred.')
		}
	}

	return (
		<div className='bg-brand-yellow flex justify-center items-center h-screen'>
			<img
				src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640417500/Habit%20Tracker/big-egg_eukcd3.png'
				className='absolute'
			/>
			<form
				className='absolute flex flex-col justify-between items-center h-64'
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
