import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Router from 'next/router'

const Login = ({ user }) => {
  const [currentUser, setCurrentUser] = useState({
    username: '',
    password: '',
  })
  const [showError, setShowError] = useState(false)

  const checkUser = async () => {
    console.log(currentUser.username)
    const response = await fetch('/api/getUser', {
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
    console.log(message)
    if (!success) {
      setShowError(true)
    }
    console.log(success)
    return success
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userExists = await checkUser()
    if (userExists) {
      Router.push(`/${user}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="username"
          className="form-control"
          placeholder="Enter email"
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
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
      <div className="d-flex flex-row align-items-center">
        <div>New user?</div>
        <div className="m-2">
          <a href={`signup`}>
            <Button variant="success">Sign Up</Button>
          </a>
        </div>
      </div>
    </form>
  )
}

export default Login
