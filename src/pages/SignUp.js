import React from 'react'

import { Link } from 'react-router-dom'
import { LOG_IN } from '../constants/routes'

export default function SignUp() {
	return (
		<div className='bg-brand-yellow flex justify-center items-center h-screen'>
			<img
				src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640431228/Habit%20Tracker/bigger-egg_j7dyto.png'
				className='absolute'
			/>
			<form className='absolute flex flex-col justify-between items-center h-96'>
				<h1>eggcellent</h1>
				<input
					type='email'
					className='form-control input focus:outline-none'
					name='email'
					placeholder='Email'
					required
				/>
				<input
					type='text'
					className='form-control input focus:outline-none'
					name='username'
					placeholder='Username'
					required
				/>
				<input
					type='password'
					className='form-control input focus:outline-none'
					name='password'
					placeholder='Password'
					required
				/>
				<input
					type='password'
					className='form-control input focus:outline-none'
					name='password'
					placeholder='Confirm Password'
					required
				/>
				<label className='flex flex-row items-center'>
					<input
						type='checkbox'
						value='remember-me'
						id='rememberMe'
						name='rememberMe'
						className='focus:outline-none focus:ring mr-1'
					/>
					<p>
						I accept the{' '}
						<Link to='#' className='text-blue-800'>
							Terms of Use
						</Link>{' '}
						&{' '}
						<Link to='#' className='text-blue-800'>
							Privacy Policy
						</Link>
					</p>
				</label>
				<button className='btn w-60' type='submit'>
					Sign Up
				</button>
				<p>
					Already have an account?{' '}
					<Link className='text-blue-800' to={LOG_IN}>
						Log in
					</Link>
					!
				</p>
			</form>
		</div>
	)
}
