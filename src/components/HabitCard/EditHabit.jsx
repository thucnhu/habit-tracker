import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import useClickOutside from '../../hooks/useClickOutside'
import { DAY } from './constants'
import IntervalDropdown from './IntervalDropdown'
import MonthDropdown from './MonthDropdown'

export default function EditHabit({
	setIsOpen,
	name,
	chickens,
	percentage,
	days,
	hours,
	minutes,
	interval,
}) {
	const [newName, setNewName] = useState(name)
	const [newInterval, setNewInterval] = useState(interval)
	const [selectedDate, setSelectedDate] = useState(null)

	const clickRef = useClickOutside(() => setIsOpen(false))

	function handleSubmit(event) {
		event.preventDefault()
		setIsOpen(false)
	}

	return (
		<form
			className='bg-white p-3 rounded-xl shadow flex flex-row justify-between items-start'
			ref={clickRef}
			onSubmit={handleSubmit}
		>
			<div className='w-80 mr-3'>
				<input
					type='text'
					value={newName}
					onChange={event => setNewName(event.target.value)}
					className='w-full focus:outline-blue-300 focus:shadow-inner bg-white text-lg'
				/>

				{/** Custom recurrence */}
				<div className='flex flex-row items-center my-2'>
					<p>Repeat every</p>
					<input type='number' min='0' className='habit-input w-14 mx-3' />
					<IntervalDropdown
						interval={interval}
						getInterval={interval => setNewInterval(interval)}
					/>
				</div>

				{newInterval === 'week' && (
					<div>
						<p>Repeat on</p>
						<div className='flex flex-row mt-1'>
							{DAY.map(day => (
								<div
									className='day-label cursor-pointer'
									key={Math.random() * 100}
								>
									{day}
								</div>
							))}
						</div>
					</div>
				)}

				{newInterval === 'month' && (
					<div className='flex flex-row items-center justify-between'>
						<p>Repeat on</p>
						<MonthDropdown />
						<p>every month</p>
					</div>
				)}

				{/** Ends on ... or after ... */}
				<div className='my-3'>
					<p>Ends</p>
					<label className='flex flex-row items-center mb-1'>
						<input
							type='radio'
							name='ends'
							onChange={() => setSelectedDate(null)}
						/>
						<p className='w-20 ml-2'>Never</p>
					</label>
					<label className='flex flex-row items-center mb-1'>
						<input type='radio' name='ends' />
						<p className='w-28 ml-2'>On</p>
						<DatePicker
							className='habit-input w-32 cursor-pointer'
							selected={selectedDate}
							onChange={date => setSelectedDate(date)}
							dateFormat='dd/MM/yyyy'
						/>
					</label>
					<label className='flex flex-row items-center'>
						<input type='radio' name='ends' />
						<p className='w-20 ml-2'>After</p>
						<input
							type='number'
							className='habit-input w-14 mr-1 text-brand-grey'
							min='0'
							onChange={() => setSelectedDate(null)}
						/>
						<p className='text-brand-grey'>occurences</p>
					</label>
				</div>

				{/** Buttons */}
				<div className='flex flex-row justify-between my-3'>
					<div className='flex flex-row'>
						<button
							className='btn-green text-sm'
							onClick={() => setIsOpen(false)}
						>
							Save
						</button>
						<button
							className='btn-beggie text-sm mx-3'
							onClick={() => setIsOpen(false)}
						>
							Cancel
						</button>
					</div>
					<button
						className='btn-orange text-sm justify-self-end'
						onClick={() => setIsOpen(false)}
					>
						Delete
					</button>
				</div>

				{/** Progress bar */}
				<div className='flex flex-row items-end'>
					<img
						src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640529300/Habit%20Tracker/small-chic_soojgc.svg'
						alt='small chicken'
						className='h-7'
					/>
					<p>x{chickens}</p>
				</div>
				<div className=' border-brand-grey progress-bar'>
					<p className='text-xs h-auto'>{percentage}</p>
				</div>
			</div>

			{/** Reminder time*/}
			<div className='flex flex-col text-brand-grey'>
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
		</form>
	)
}
