import React from 'react'
import Menu from '../../components/Menu';
import EditEmail from './components/EditEmail';
import EditPassword from './components/EditPassword';
import EditUsername from './components/EditUsername';

export default function Profile() {
	return (
		<div className='bg-brand-yellow h-screen p-4'>
			<Menu />

			<div className='flex flex-col gap-6 py-12 items-center'>
				<h2 className='drop-shadow'>
					Profile
				</h2>
				<EditUsername />
				<EditEmail />
				<EditPassword />
			</div>
		</div>
	)
}