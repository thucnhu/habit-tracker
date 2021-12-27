import React, { useState } from 'react'

import { EditHabit } from './'

export default function HabitCard({
	name,
	chickens,
	percentage,
	days,
	hours,
	minutes,
	interval,
}) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div
				className='bg-white rounded-2xl h-auto my-3 w-auto shadow-md flex flex-row justify-between items-center px-3 py-1 cursor-pointer'
				onClick={() => setIsOpen(true)}
			>
				<div className='w-3/4'>
					<h3>{name}</h3>

					{/** Progress bar */}
					<div className='flex flex-row items-end'>
						<img
							src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640529300/Habit%20Tracker/small-chic_soojgc.svg'
							alt='small chicken'
							className='h-7'
						/>
						<p>x{chickens}</p>
					</div>
					<div className='progress-bar border-black'>
						<p className='text-xs h-auto'>{percentage}</p>
					</div>
				</div>

				{/** Reminder time */}
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

			{isOpen && (
				<div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-slate-500 bg-opacity-60'>
					<EditHabit
						setIsOpen={setIsOpen}
						name={name}
						chickens={chickens}
						percentage={percentage}
						days={days}
						hours={hours}
						minutes={minutes}
						interval={interval}
					/>
				</div>
			)}
		</>
	)
}
