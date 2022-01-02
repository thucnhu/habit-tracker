import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { LOG_IN } from '../constants/routes'

import FirebaseContext from '../context/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function SignUp() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [agreed, setAgreed] = useState(false)

	const { auth } = useContext(FirebaseContext)
	const navigate = useNavigate()

	async function handleSignUp(event) {
		event.preventDefault()

		if (password !== confirmPassword) alert('Passwords do not match')
		if (!agreed) alert('You must agree to the terms and conditions.')

		try {
			await createUserWithEmailAndPassword(auth, email, password)
			alert('Successfully created an account!')
			navigate(LOG_IN)
		} catch (err) {
			if (
				err.message ===
				'Firebase: Password should be at least 6 characters (auth/weak-password).'
			)
				alert('Password should be at least 6 characters.')
			else if (
				err.message === 'Firebase: Error (auth/email-already-in-use).'
			)
				alert('Email address is already in use.')
			else alert('An error occurred.')
		}
	}

	return (
		<div className='bg-brand-yellow flex justify-center items-center h-screen'>
			<img
				src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1641115571/Habit%20Tracker/bigger-egg_xzjov6.png'
				className='absolute'
			/>
			<form
				className='absolute flex flex-col justify-between items-center h-80'
				onSubmit={handleSignUp}
			>
				<h1>eggcellent</h1>
				<input
					type='email'
					className='form-control input focus:outline-none'
					name='email'
					placeholder='Email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>
				<input
					type='password'
					className='form-control input focus:outline-none'
					name='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<input
					type='password'
					className='form-control input focus:outline-none'
					name='confirm-password'
					placeholder='Confirm password'
					value={confirmPassword}
					onChange={e => setConfirmPassword(e.target.value)}
					required
				/>
				<div className='flex flex-row items-center'>
					<input
						type='checkbox'
						value='terms-privacy'
						id='terms-privacy'
						name='terms-privacy'
						checked={agreed}
						onChange={() => setAgreed(!agreed)}
						className='focus:outline-none focus:ring mr-1'
					/>
					<label htmlFor='terms-privacy'>
						I accept the{' '}
						<Link to='#' className='text-blue-800'>
							Terms of Use
						</Link>{' '}
						&{' '}
						<Link to='#' className='text-blue-800'>
							Privacy Policy
						</Link>
					</label>
				</div>
				<button className='btn-green text-xl w-60' type='submit'>
					Sign Up
				</button>
				<h3>
					Already have an account?{' '}
					<Link className='text-blue-800' to={LOG_IN}>
						Log in
					</Link>
					!
				</h3>
			</form>
		</div>
	)
}
