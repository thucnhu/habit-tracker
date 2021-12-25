import React from 'react'
import { Link } from 'react-router-dom'
import { SIGN_UP } from '../constants/routes'

export default function LogIn() {
	return (
		<div className='bg-yellow flex justify-center items-center h-screen'>
			<img
				src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640417500/Habit%20Tracker/big-egg_eukcd3.png'
				className='absolute'
			/>
			<form className='absolute flex flex-col justify-between items-center h-64'>
				<h1>eggcellent</h1>
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
				<button className='btn w-60' type='submit'>
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
