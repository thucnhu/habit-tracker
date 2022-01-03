import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePopper } from 'react-popper'

import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'

import { LOG_IN } from '../constants/routes'
import useClickOutside from '../hooks/useClickOutside'

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false)
	const [user, setUser] = useState({})

	const clickRef = useClickOutside(() => setIsOpen(false))

	const navigate = useNavigate()

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

	onAuthStateChanged(auth, currUser => {
		setUser(currUser)
	})

	async function handleLogOut() {
		try {
			await signOut(auth)
			navigate(LOG_IN)
		} catch (err) {
			console.error(err)
		}
	}

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
					<div className='menu-label'>Profile {user.email}</div>
					<div className='menu-label'>Settings</div>
					<div className='menu-label' onClick={handleLogOut}>
						Log out
					</div>
				</div>
			)}
		</div>
	)
}
