import React from 'react'
import Login from '../../components/Login'

const BankerSignIn = () => {
  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center ">
      <h1 className="display-1 pb-3">Banker</h1>
      <div className="w-50">
        <Login user={'banker'} />
      </div>
    </div>
  )
}

export default BankerSignIn
