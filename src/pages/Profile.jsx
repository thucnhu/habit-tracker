import React from 'react'
import { TextInput, NumberInput, Button } from '@mantine/core'
import getUser from '../api/user'

export default function Profile() {
	getUser();

	return (
		<div className='flex flex-col gap-4 py-12 items-center bg-brand-beggie h-screen'>
			<h2 className='drop-shadow'>
				Profile
			</h2>
			<TextInput
				label='Full name'
				placeholder='Enter your full name'
				inputWrapperOrder={['label', 'input', 'error']}
				className='w-96'
			/>
			<TextInput
				label='Email'
				placeholder='Enter your email'
				inputWrapperOrder={['label', 'input', 'error']}
				className='w-96'
			/>
			<TextInput
				label='Number'
				placeholder='Enter your number'
				inputWrapperOrder={['label', 'input', 'error']}
				className='w-96'
			/>
			<NumberInput
				label='Age'
				placeholder='Enter your age'
				inputWrapperOrder={['label', 'input', 'error']}
				className='w-96'
			/>
			<Button color='yellow' type='submit'>Submit</Button>
		</div>
	)
}