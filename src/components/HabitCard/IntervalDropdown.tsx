import React, { useState } from 'react'
import { usePopper } from 'react-popper'

import useClickOutside from '../../hooks/useClickOutside'
import { INTERVAL } from './constants'

export default function IntervalDropdown({ interval, getInterval }) {
	const [newInterval, setNewInterval] = useState(interval)
	const [isOpen, setIsOpen] = useState(false)

	const clickRef = useClickOutside(() => setIsOpen(false))

	const [refElement, setRefElement] = useState()
	const [popperElement, setPopperElement] = useState()
	const { styles, attributes } = usePopper(refElement, popperElement, {
		placement: 'bottom-start',
	})

	return (
		<div ref={clickRef}>
			<div
				className='relative habit-input w-24 flex flex-row items-center justify-between cursor-pointer'
				onClick={() => setIsOpen(!isOpen)}
				// @ts-ignore
				ref={setRefElement}
			>
				<p>{newInterval}</p>
				<i className='bi bi-caret-down-fill text-brand-grey ml-2'></i>
			</div>

			{/** Pop-up list for different intervals */}
			{isOpen && (
				<div
					className='absolute bg-brand-beggie shadow-inner z-10'
					// @ts-ignore
					ref={setPopperElement}
					style={styles.popper}
					{...attributes.popper}
				>
					{INTERVAL.map(interval => (
						<div
							className='w-24 dropdown-element'
							key={Math.random() * 100}
							onClick={() => {
								setNewInterval(interval)
								getInterval(interval)
								setIsOpen(false)
							}}
						>
							{interval}
						</div>
					))}
				</div>
			)}
		</div>
	)
}
