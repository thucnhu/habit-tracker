import React from 'react'

export default function NotFound() {
	return (
		<div className='h-screen w-auto bg-brand-yellow flex flex-col items-center justify-center'>
			<h1 className='text-white mb-10 text-6xl drop-shadow-md'>
				Page not found
			</h1>
			<img
				src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1641139731/Habit%20Tracker/broken-egg_kdumtn.png'
				alt='A broken egg'
				className='h-80'
			/>
		</div>
	)
}
