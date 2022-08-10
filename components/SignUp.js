import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

const SignUp = ({ user }) => {
  const [currentUser, setCurrentUser] = useState({
    username: '',
    password: '',
  })
  const [showModal, setShowModal] = useState(false)

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
    return success
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const signUpResult = await userSignUp()
    if (signUpResult) {
      setShowModal(true)
    } else {
      setShowModal(false)
    }
  }

  return (
    <>
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
      {showModal && (
        <Alert className="alert-success">
          <div>
            Successfully Signed Up! <a href={`signin`}>Sign In</a>
          </div>
        </Alert>
      )}
    </>
  )
}

export default SignUp
