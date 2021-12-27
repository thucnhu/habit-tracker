import React, { useState } from 'react'
import { usePopper } from 'react-popper'

import mergeRefs from '../hooks/mergeRefs'
import useClickOutside from '../hooks/useClickOutside'
import { MONTH } from '../constants/month'

export default function MonthDropdown() {
	const clickRef = useClickOutside(() => setisOpen(false))

	const [day, setDay] = useState('1st Monday')
	const [isOpen, setisOpen] = useState(false)

	const [refElement, setRefElement] = useState()
	const [popperElement, setPopperElement] = useState()
	const { styles, attributes } = usePopper(refElement, popperElement, {
		placement: 'bottom-start',
	})

	return (
		<>
			<div
				className='habit-input w-36 flex flex-row items-center justify-between cursor-pointer'
				onClick={() => setisOpen(!isOpen)}
				ref={setRefElement}
			>
				<p>{day}</p>
				<i className='bi bi-caret-down-fill text-brand-grey ml-2'></i>
			</div>

			{/** Pop-up list for month interval */}
			{isOpen && (
				<div
					className='absolute bg-brand-beggie shadow-inner'
					ref={mergeRefs(setPopperElement, clickRef)}
					style={styles.popper}
					{...attributes.popper}
				>
					<div className='absolute bg-brand-beggie shadow-inner'>
						{MONTH.map(firstDay => (
							<div
								className='w-36 dropdown-element'
								key={Math.random() * 100}
								onClick={() => {
									setDay(firstDay)
									setisOpen(false)
								}}
							>
								{firstDay}
							</div>
						))}
					</div>
				</div>
			)}
		</>
	)
}
