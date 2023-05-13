import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { LOG_IN } from '../constants/routes'
import { AuthContext } from '../context/authContext'

export default function SignUp() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [username, setUsername] = useState('')
	const [agreed, setAgreed] = useState(false)

	const { signup } = useContext(AuthContext)

	async function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		if (password !== confirmPassword) {
			alert('Passwords do not match')
			return
		}
		if (!agreed) {
			alert('You must agree to the terms and conditions.')
			return
		}

		signup(email, password, username)
	}

	return (
		<div className='bg-brand-yellow flex justify-center items-center h-screen'>
			<img
				src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1641357799/Habit%20Tracker/bigger-egg_lfqsee.png'
				className='absolute'
			/>
			<form
				className='absolute flex flex-col justify-between items-center h-96'
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
					type='text'
					className='form-control input focus:outline-none'
					name='username'
					placeholder='Username'
					value={username}
					onChange={e => setUsername(e.target.value)}
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
