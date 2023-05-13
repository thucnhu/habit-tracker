import { useForm } from '@mantine/form'
import { getAuth, updatePassword, User } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/authContext'

export default function EditPassword() {
  const user = getAuth().currentUser as User
  const [editing, setEditing] = useState(false)

  const form = useForm({
    initialValues: {
      password: ''
    },
  })


  const { logout } = useContext(AuthContext)

  async function handleEditPassword() {
    if (form.values.password.length < 6) {
      alert('Password must have at least 6 characters')
    }
    updatePassword(user, form.values.password as string)
      .then(() => {
        setEditing(false)
        alert('Password updated successfully')
      })
      .catch((error) => {
        if (
          error.message ===
          'Firebase: Password should be at least 6 characters (auth/weak-password).'
        ) {
          alert('Password should be at least 6 characters.')
        }

        if (error.message === 'Firebase: Error (auth/requires-recent-login)') {
          logout()
          alert('Please log in again to continue')
        }
        console.error(error)
      })
  }

  function renderPassword() {
    if (editing) {
      return (
        <form onSubmit={form.onSubmit(handleEditPassword)}>
          <input
            className='form-control habit-input focus:outline-none mr-6 w-72'
            placeholder='Enter new password'
            type='password'
            required
            {...form.getInputProps('password')}
          />
          <button
            color='yellow'
            className='btn-green w-28'
            type='submit'
          >
            Submit
          </button>
        </form>
      )
    }

    return (
      <>
        <div className="w-72">{''}</div>
        <button
          className='btn-orange w-28'
          onClick={() => setEditing(true)}
        >
          Update
        </button>
      </>
    )
  }

  return (
    <div className="flex flex-row items-center">
      <div className="w-44">Password</div>
      {renderPassword()}
    </div>
  )
}