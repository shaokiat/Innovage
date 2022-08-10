import React from 'react'
import Login from '../../components/Login'

const ClientSignIn = () => {
  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center ">
      <h1 className="display-1 pb-3">Client</h1>
      <div className="w-50">
        <Login user="client" />
      </div>
    </div>
  )
}

export default ClientSignIn
