import React, { useContext, useState } from 'react'

import { Link } from 'react-router-dom'
import { LOG_IN } from '../constants/routes'
import { AuthContext } from '../context/authContext'

export default function ResetPassword() {
	const [email, setEmail] = useState('')
	const { resetPassword } = useContext(AuthContext)

	function handleResetPassword(event) {
		event.preventDefault()
		resetPassword(email)
	}

	return (
		<div className='bg-brand-yellow flex justify-center items-center h-screen'>
			<img
				src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640417500/Habit%20Tracker/big-egg_eukcd3.png'
				className='absolute'
			/>
			<form
				className='absolute flex flex-col justify-between items-center h-48'
				onSubmit={handleResetPassword}
			>
				<p className='text-3xl'>Reset password</p>
				<input
					type='email'
					value={email}
					name='email'
					placeholder='Email'
					onChange={e => setEmail(e.target.value)}
					className='form-control input focus:outline-none'
					required
				/>
				<button className='btn-green text-xl w-60' type='submit'>
					Get link
				</button>

				<h3>
					Let's{' '}
					<Link to={LOG_IN} className='text-blue-800'>
						login
					</Link>
					!
				</h3>
			</form>
		</div>
	)
}
