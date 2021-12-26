import React, { useState, useEffect } from 'react'

export default function HabitCard({
	name,
	chickens,
	percentage,
	days,
	hours,
	minutes,
}) {
	const [habits, setHabits] = useState([])

	return (
		<div className='bg-white rounded-2xl h-auto my-3 w-auto shadow-md flex flex-row justify-between items-center px-3 py-1 cursor-pointer'>
			<div className='w-3/4'>
				<h3>{name}</h3>
				<div className='flex flex-row items-end'>
					<img
						src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640529300/Habit%20Tracker/small-chic_soojgc.svg'
						alt='small chicken'
						className='h-7'
					/>
					<p>x{chickens}</p>
				</div>
				<div className='bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 w-full h-auto border-2 border-black text-center rounded-xl'>
					<p className='text-xs h-auto'>{percentage}</p>
				</div>
			</div>
			<div className='flex flex-col'>
				<p className='text-xs'>Reminder in</p>
				<div className='flex flex-row items-baseline'>
					<h3 className='w-8'>{days}</h3>
					<p className='text-xs'>days</p>
				</div>
				<div className='flex flex-row items-baseline'>
					<h3 className='w-8'>{hours}</h3>
					<p className='text-xs'>hours</p>
				</div>
				<div className='flex flex-row items-baseline'>
					<h3 className='w-8'>{minutes}</h3>
					<p className='text-xs'>minutes</p>
				</div>
			</div>
		</div>
	)
}
