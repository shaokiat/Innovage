import React, { useState } from 'react'
import Router from 'next/router'

const SignUp = ({ user }) => {
  const [currentUser, setCurrentUser] = useState({
    username: '',
    password: '',
  })

  const userSignUp = async () => {
    console.log(currentUser.username)
    const response = await fetch('/api/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: currentUser.username,
        user: user,
      }),
    })
    const { success, message } = await response.json()
    if (!success) {
      setShowError(true)
    }
    return success
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userExists = await userSignUp()
    if (userExists) {
      Router.push(`/${user}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="username"
          onChange={(e) =>
            setCurrentUser({ ...currentUser, username: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) =>
            setCurrentUser({ ...currentUser, password: e.target.value })
          }
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href={`signin`}>sign in?</a>
      </p>
    </form>
  )
}

export default SignUp
