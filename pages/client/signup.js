import React from 'react'
import SignUp from '../../components/SignUp'

const ClientSignUp = () => {
  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center ">
      <h1 className="display-1 pb-3">Client</h1>
      <div className="w-50">
        <SignUp />
      </div>
    </div>
  )
}

export default ClientSignUp
