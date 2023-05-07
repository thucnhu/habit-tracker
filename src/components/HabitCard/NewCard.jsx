import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import useClickOutside from '../../hooks/useClickOutside'
import { DAY } from './constants'
import IntervalDropdown from './IntervalDropdown'
import MonthDropdown from './MonthDropdown'

export default function NewCard({ setIsOpen }) {
	const [interval, setInterval] = useState('day')
	const [name, setName] = useState('')
	const [selectedDate, setSelectedDate] = useState(null)

	const clickRef = useClickOutside(() => setIsOpen(false))

	function handleSubmit(event) {
		event.preventDefault()
		setIsOpen(false)
	}

	return (
		<div
			className='bg-white p-3 rounded-xl shadow flex flex-row justify-between items-start'
			ref={clickRef}
		>
			<form className='w-80 mr-3' onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Habit name'
					onChange={event => setName(event.target.value)}
					className='w-full focus:outline-blue-300 focus:shadow-inner bg-white text-lg text-brand-grey'
				/>

				{/** Custom recurrence */}
				<div className='flex flex-row items-center my-2'>
					<p>Repeat every</p>
					<input type='number' min='0' className='habit-input w-14 mx-3' />
					<IntervalDropdown
						interval={interval}
						getInterval={interval => setInterval(interval)}
					/>
				</div>

				{interval === 'week' && (
					<div>
						<p>Repeat on</p>
						<div className='flex flex-row mt-1'>
							{DAY.map(day => (
								<div className='day-label' key={Math.random() * 100}>
									{day}
								</div>
							))}
						</div>
					</div>
				)}

				{interval === 'month' && (
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
							className='habit-input w-32 cursor-pointer z-auto'
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
			</form>
		</div>
	)
}
