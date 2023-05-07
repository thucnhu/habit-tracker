import React from 'react'
import { TextInput, Button } from '@mantine/core'
import { getAuth, updateEmail, User } from 'firebase/auth'
import { useForm } from '@mantine/form'
import { useState } from 'react';
import Menu from '../components/Menu';

export default function Profile() {
	const { displayName, email, phoneNumber } = getAuth().currentUser as User;
	const user = getAuth().currentUser as User

	const [loading, setLoading] = useState(false)

	const form = useForm({
		initialValues: {
			displayName,
			email,
			phoneNumber,
		},
		validate: {
			displayName: (value) => (value!.length < 2 ? 'Username must have at least 2 letters' : null),
			email: (value) => (/^\S+@\S+$/.test(value!) ? null : 'Invalid email'),
			// phoneNumber: (value) => (/^\d{10}$/.test(value!) ? null : 'Invalid phone number'),
		}
	})

	function onSubmit(values: typeof form.values) {
		setLoading(true)

		updateEmail(user, values.email as string)
			.then(() => {
				setLoading(false)
				alert('Email updated')
			})
			.catch(() => {
				setLoading(false)
				alert('Error updating email. Please try again later')
			})
	}

	return (
		<div className='bg-brand-beggie h-screen p-4'>
			<Menu />

			<form onSubmit={form.onSubmit(onSubmit)} className='flex flex-col gap-6 py-12 items-center'>
				<h2 className='drop-shadow'>
					Profile
				</h2>
				<TextInput
					label='Username'
					placeholder='Enter your username'
					inputWrapperOrder={['label', 'input', 'error']}
					className='w-96'
					{...form.getInputProps('displayName')}
				/>

				<TextInput
					label='Email'
					placeholder='Enter your email'
					inputWrapperOrder={['label', 'input', 'error']}
					className='w-96'
					{...form.getInputProps('email')}

				/>
				<TextInput
					label='Number'
					placeholder='Enter your number'
					inputWrapperOrder={['label', 'input', 'error']}
					className='w-96'
					{...form.getInputProps('phoneNumber')}
					disabled
				/>
				<Button
					color='yellow'
					type='submit'
					disabled={!form.isDirty()}
					variant='outline'
					loading={loading}
				>
					Submit
				</Button>
			</form>
		</div>
	)
}