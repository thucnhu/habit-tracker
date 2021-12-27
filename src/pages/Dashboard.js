import React from 'react'
import { Link } from 'react-router-dom'

import './css/Dashboard.css'
import { HabitCard } from '../components'
import { habitsData } from '../data/habitsData'
import { MARKETPLACE } from '../constants/routes'

export default function Dashboard() {
	return (
		<div className='h-screen flex flex-row'>
			{/** The left section: habit dashboard */}
			<section className='w-fit bg-brand-yellow px-5 py-4 flex flex-auto flex-col'>
				{/** Menu and search bar */}
				<div className='flex flex-row cursor-pointer'>
					<div className='bg-white w-10 h-10 rounded-xl shadow flex flex-col justify-between items-center py-2.5'>
						<div className='bg-brand-grey w-6 h-1 rounded-xl'></div>
						<div className='bg-brand-grey w-6 h-1 rounded-xl'></div>
						<div className='bg-brand-grey w-6 h-1 rounded-xl'></div>
					</div>
					<div className='bg-white h-10 w-96 rounded-xl shadow ml-3 flex flex-row items-center'>
						<i className='bi bi-search text-brand-grey text-xl mx-3'></i>
						<input
							type='text'
							className='text-brand-grey text-xl bg-none focus:outline-none w-80'
							placeholder='Search...'
						/>
					</div>
				</div>

				{/** Sort buttons */}
				<div className='flex flex-row justify-between my-3'>
					<div className='flex flex-row items-center'>
						<p className='text-xs'>Show:</p>
						<div className='bg-white rounded-xl shadow ml-2 px-2 py-0.5 flex flex-row justify-between items-center w-20 min-w-fit cursor-pointer'>
							<p className='text-xs'>All</p>
							<i className='bi bi-caret-down-fill text-brand-grey ml-2'></i>
						</div>
					</div>
					<div className='flex flex-row items-center'>
						<p className='text-xs'>Sort by:</p>
						<div className='bg-white rounded-xl shadow ml-2 px-2 py-0.5 flex flex-row justify-between items-center cursor-pointer'>
							<p className='text-xs'>Reminder time</p>
							<i className='bi bi-caret-down-fill text-brand-grey ml-2'></i>
						</div>
					</div>
				</div>

				{/** List of habits */}
				<div className='bg-brand-beggie border-3 border-black rounded-3xl overflow-auto px-3 scrollbar min-h-1/3'>
					{habitsData.map(habit => (
						<HabitCard
							name={habit.name}
							chickens={habit.chickens}
							percentage={habit.percentage}
							days={habit.days}
							hours={habit.hours}
							minutes={habit.minutes}
							interval={habit.interval}
							key={habit.id}
						/>
					))}
				</div>
			</section>

			{/** The right section: chicken garden */}
			<section className='w-full bg-brand-green px-7 py-4 flex flex-col overflow-auto scrollbar min-w-[300px]'>
				<Link to={MARKETPLACE} className='self-end'>
					<img
						src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640535508/Habit%20Tracker/market_gskom9.svg'
						alt='Marketplace icon'
						className='h-14'
					/>
				</Link>
				<div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1 gap-4'>
					<img
						src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640536604/Habit%20Tracker/growing-egg_tcwcwd.svg'
						alt='growing egg icon'
						className='justify-self-center'
					/>
					<img
						src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640536604/Habit%20Tracker/growing-egg_tcwcwd.svg'
						alt='growing egg icon'
						className='justify-self-center'
					/>
					<img
						src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640536604/Habit%20Tracker/growing-egg_tcwcwd.svg'
						alt='growing egg icon'
						className='justify-self-center'
					/>
					<img
						src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640536604/Habit%20Tracker/growing-egg_tcwcwd.svg'
						alt='growing egg icon'
						className='justify-self-center'
					/>
					<img
						src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640536604/Habit%20Tracker/growing-egg_tcwcwd.svg'
						alt='growing egg icon'
						className='justify-self-center'
					/>
					<img
						src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640536604/Habit%20Tracker/growing-egg_tcwcwd.svg'
						alt='growing egg icon'
						className='justify-self-center'
					/>
					<img
						src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640536604/Habit%20Tracker/growing-egg_tcwcwd.svg'
						alt='growing egg icon'
						className='justify-self-center'
					/>
					<img
						src='https://res.cloudinary.com/dw5ii3leu/image/upload/v1640536604/Habit%20Tracker/growing-egg_tcwcwd.svg'
						alt='growing egg icon'
						className='justify-self-center'
					/>
				</div>
			</section>
		</div>
	)
}
