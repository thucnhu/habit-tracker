import { getAuth, updateEmail, User } from "firebase/auth"
import { useContext, useState } from "react"
import { useForm } from "@mantine/form"
import React from "react"
import { AuthContext } from "../../../context/authContext"

export default function EditEmail() {
  const user = getAuth().currentUser as User
  const { email } = user

  const [editing, setEditing] = useState(false)

  const form = useForm({
    initialValues: {
      email
    },
  })

  if (!form.values.email?.includes('@')) {
    alert('Invalid email')
  }

  const { logout } = useContext(AuthContext)

  async function handleEditEmail() {
    updateEmail(user, form.values.email as string)
      .then(() => {
        setEditing(false)
        form.setValues({ email: form.values.email })
      })
      .catch((error) => {
        if (error.message === 'Firebase: Error (auth/requires-recent-login)') {
          logout()
          alert('Please log in again to continue')
        }
        console.error(error)
      })
  }

  function renderEmail() {
    if (editing) {
      return (
        <form onSubmit={form.onSubmit(handleEditEmail)}>
          <input
            type='email'
            className='form-control habit-input focus:outline-none mr-6 w-72'
            required
            {...form.getInputProps('email')}
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
        <div className="w-72">{email}</div>
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
      <div className="w-44">Email</div>
      {renderEmail()}
    </div>
  )
}