import { getAuth, updateProfile, User } from "firebase/auth"
import { useContext, useState } from "react"
import { useForm } from "@mantine/form"
import React from "react"
import { AuthContext } from "../../../context/authContext"

export default function EditUsername() {
  const user = getAuth().currentUser as User
  const { displayName } = user

  const [editing, setEditing] = useState(false)

  const form = useForm({
    initialValues: {
      displayName,
    },
  })

  if (form.values.displayName!.length < 2) {
    alert('Username must have at least 2 letters')
  }

  const { logout } = useContext(AuthContext)

  async function handleEditUsername() {
    updateProfile(user, { displayName: form.values.displayName })
      .then(() => {
        setEditing(false)
      })
      .catch((error) => {
        if (error.message === 'Firebase: Error (auth/requires-recent-login)') {
          logout()
          alert('Please log in again to continue')
        }
        console.error(error)
      })
  }

  function renderUsername() {
    if (editing) {
      return (
        <form onSubmit={form.onSubmit(handleEditUsername)}>
          <input
            className='form-control habit-input focus:outline-none mr-6 w-72'
            placeholder='Enter your username'
            {...form.getInputProps('displayName')}
            required
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
        <div className="w-72">{displayName}</div>
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
      <div className="w-44">Username</div>
      {renderUsername()}
    </div>
  )
}