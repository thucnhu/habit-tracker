import React, { useState, useContext } from 'react'
import { usePopper } from 'react-popper'

import { AuthContext } from '../context/authContext'
import useClickOutside from '../hooks/useClickOutside'

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false)
	const clickRef = useClickOutside(() => setIsOpen(false))
	const { user, logout } = useContext(AuthContext)

	const [refElement, setRefElement] = useState()
	const [popperElement, setPopperElement] = useState()
	const { styles, attributes } = usePopper(refElement, popperElement, {
		placement: 'bottom-start',
		modifiers: [
			{
				name: 'offset',
				enabled: true,
				options: { offset: [0, 8] },
			},
		],
	})

	return (
		<div ref={clickRef}>
			<div
				className='bg-white w-10 h-10 rounded-xl shadow flex flex-col justify-between items-center py-2.5 cursor-pointer'
				ref={setRefElement}
				onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}
			>
				<div className='bg-brand-grey w-6 h-1 rounded-xl'></div>
				<div className='bg-brand-grey w-6 h-1 rounded-xl'></div>
				<div className='bg-brand-grey w-6 h-1 rounded-xl'></div>
			</div>

			{isOpen && (
				<div
					ref={setPopperElement}
					style={styles.popper}
					{...attributes.popper}
					className='bg-white rounded-md shadow-md py-2'
				>
					<div className='menu-label'>Profile {user?.displayName}</div>
					<div className='menu-label'>Settings</div>
					<div className='menu-label' onClick={logout}>
						Log out
					</div>
				</div>
			)}
		</div>
	)
}
